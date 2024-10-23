import { pipe, map } from "wonka";
import { assert, GadgetConnection, AuthenticationMode, InternalModelManager, enqueueActionRunner, BackgroundActionHandle } from "@gadgetinc/api-client-core";
import { SessionManager } from "./models/Session.js";
import { CurrentSessionManager } from "./models/CurrentSession.js";
import { ShopifyShopManager } from "./models/ShopifyShop.js";
import { ShopifyGdprRequestManager } from "./models/ShopifyGdprRequest.js";
import { ShopifyProductManager } from "./models/ShopifyProduct.js";
import { ShopifyProductVariantManager } from "./models/ShopifyProductVariant.js";
import { ShopifyInventoryItemManager } from "./models/ShopifyInventoryItem.js";
import { ShopifyLocationManager } from "./models/ShopifyLocation.js";
import { ShopifyInventoryLevelManager } from "./models/ShopifyInventoryLevel.js";
import { ShopifyOrderManager } from "./models/ShopifyOrder.js";
import { ShopifyOrderLineItemManager } from "./models/ShopifyOrderLineItem.js";
import { ShopifySyncManager } from "./models/ShopifySync.js";
import { DraftedProductManager } from "./models/DraftedProduct.js";
import { InventoryNamespace } from "./namespaces/inventory.js";
import { OrderNamespace } from "./namespaces/order.js";
import { ProductNamespace } from "./namespaces/product.js";
const productionEnv = "production";
const fallbackEnv = "development";
const getImplicitEnv = () => {
  try {
    return process.env.GADGET_ENV;
  } catch (error) {
    return void 0;
  }
};
class Client {
  constructor(options) {
    this.options = options;
    /**
     * The list of environments with a customized API root endpoint
     */
    this.apiRoots = { "development": "https://i-was-a-sare-development--development.gadget.app/", "production": "https://i-was-a-sare-development.gadget.app/" };
    this.applicationId = "178013";
    /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
    this.transaction = async (callback) => {
      return await this.connection.transaction(callback);
    };
    /**
    * Get a new direct upload token for file uploads to directly to cloud storage.
    * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
    * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
    */
    this.getDirectUploadToken = async () => {
      const result = await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", { nonce: Math.random().toString(36).slice(2, 7) }, {
        requestPolicy: "network-only"
      });
      return result.gadgetMeta.directUploadToken;
    };
    let inSSRContext = false;
    try {
      inSSRContext = !!(import.meta.env && import.meta.env.SSR);
    } catch (error) {
    }
    if (inSSRContext) {
      const api = globalThis.GadgetGlobals?.api;
      if (api) {
        return api.actAsSession;
      }
    }
    this.environment = (options?.environment ?? getImplicitEnv() ?? fallbackEnv).toLocaleLowerCase();
    let apiRoot;
    if (this.apiRoots[this.environment]) {
      apiRoot = this.apiRoots[this.environment];
    } else {
      const envPart = this.environment == productionEnv ? "" : `--${this.environment}`;
      apiRoot = `https://i-was-a-sare-development${envPart}.gadget.app`;
    }
    const exchanges = { ...options?.exchanges };
    if (this.environment !== productionEnv) {
      const devHarnessExchange = ({ forward }) => {
        return (operations$) => {
          const operationResult$ = forward(operations$);
          return pipe(
            operationResult$,
            map((result) => {
              try {
                if (typeof window !== "undefined" && typeof CustomEvent === "function") {
                  const event = new CustomEvent("gadget:devharness:graphqlresult", { detail: result });
                  window.dispatchEvent(event);
                }
              } catch (error) {
                console.warn("[gadget] error dispatching gadget dev harness event", error);
              }
              return result;
            })
          );
        };
      };
      exchanges.beforeAll = [
        devHarnessExchange,
        ...exchanges.beforeAll ?? []
      ];
    }
    this.connection = new GadgetConnection({
      endpoint: new URL("api/graphql", apiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: options?.authenticationMode ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true }),
      ...options,
      exchanges,
      environment: this.environment
    });
    if (typeof window != "undefined" && this.connection.authenticationMode == AuthenticationMode.APIKey && !options?.authenticationMode?.dangerouslyAllowBrowserApiKey) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    }
    this.session = new SessionManager(this.connection);
    this.currentSession = new CurrentSessionManager(this.connection);
    this.shopifyShop = new ShopifyShopManager(this.connection);
    this.shopifyGdprRequest = new ShopifyGdprRequestManager(this.connection);
    this.shopifyProduct = new ShopifyProductManager(this.connection);
    this.shopifyProductVariant = new ShopifyProductVariantManager(this.connection);
    this.shopifyInventoryItem = new ShopifyInventoryItemManager(this.connection);
    this.shopifyLocation = new ShopifyLocationManager(this.connection);
    this.shopifyInventoryLevel = new ShopifyInventoryLevelManager(this.connection);
    this.shopifyOrder = new ShopifyOrderManager(this.connection);
    this.shopifyOrderLineItem = new ShopifyOrderLineItemManager(this.connection);
    this.shopifySync = new ShopifySyncManager(this.connection);
    this.draftedProduct = new DraftedProductManager(this.connection);
    this.inventory = new InventoryNamespace(this);
    this.order = new OrderNamespace(this);
    this.product = new ProductNamespace(this);
    this.internal = {
      session: new InternalModelManager("session", this.connection, { "pluralApiIdentifier": "sessions", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyShop: new InternalModelManager("shopifyShop", this.connection, { "pluralApiIdentifier": "shopifyShops", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyGdprRequest: new InternalModelManager("shopifyGdprRequest", this.connection, { "pluralApiIdentifier": "shopifyGdprRequests", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyProduct: new InternalModelManager("shopifyProduct", this.connection, { "pluralApiIdentifier": "shopifyProducts", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyProductVariant: new InternalModelManager("shopifyProductVariant", this.connection, { "pluralApiIdentifier": "shopifyProductVariants", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyInventoryItem: new InternalModelManager("shopifyInventoryItem", this.connection, { "pluralApiIdentifier": "shopifyInventoryItems", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyLocation: new InternalModelManager("shopifyLocation", this.connection, { "pluralApiIdentifier": "shopifyLocations", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyInventoryLevel: new InternalModelManager("shopifyInventoryLevel", this.connection, { "pluralApiIdentifier": "shopifyInventoryLevels", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyOrder: new InternalModelManager("shopifyOrder", this.connection, { "pluralApiIdentifier": "shopifyOrders", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyOrderLineItem: new InternalModelManager("shopifyOrderLineItem", this.connection, { "pluralApiIdentifier": "shopifyOrderLineItems", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifySync: new InternalModelManager("shopifySync", this.connection, { "pluralApiIdentifier": "shopifySyncs", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      draftedProduct: new InternalModelManager("draftedProduct", this.connection, { "pluralApiIdentifier": "draftedProducts", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      inventory: {},
      order: {},
      product: {}
    };
  }
  /**
   * Returns a new Client instance that will call the Gadget API as the application's admin user.
   * This can only be used for API clients using internal authentication.
   * @returns {Client} A new Client instance with admin authentication
   */
  get actAsAdmin() {
    assert(this.options?.authenticationMode?.internal, "actAsAdmin can only be used for API clients using internal authentication");
    return new Client({
      ...this.options,
      authenticationMode: {
        internal: {
          ...this.options.authenticationMode.internal,
          actAsSession: false
        }
      }
    });
  }
  /**
   * Returns a new Client instance that will call the Gadget API as with the permission of the current session.
   * This can only be used for API clients using internal authentication.
   * @returns {Client} A new Client instance with session authentication
   */
  get actAsSession() {
    assert(this.options?.authenticationMode?.internal, "actAsSession can only be used for API clients using internal authentication");
    return new Client({
      ...this.options,
      authenticationMode: {
        internal: {
          ...this.options.authenticationMode.internal,
          actAsSession: true
        }
      }
    });
  }
  /** Run an arbitrary GraphQL query. */
  async query(graphQL, variables, options) {
    const { data, error } = await this.connection.currentClient.query(graphQL, variables, options).toPromise();
    if (error)
      throw error;
    return data;
  }
  /** Run an arbitrary GraphQL mutation. */
  async mutate(graphQL, variables, options) {
    const { data, error } = await this.connection.currentClient.mutation(graphQL, variables, options).toPromise();
    if (error)
      throw error;
    return data;
  }
  /**
   * `fetch` function that works the same as the built-in `fetch` function, but automatically passes authentication information for this API client.
   *
   * @example
   * await api.fetch("https://myapp--development.gadget.app/foo/bar");
   *
   * @example
   * // fetch a relative URL from the endpoint this API client is configured to fetch from
   * await api.fetch("/foo/bar");
   **/
  async fetch(input, init = {}) {
    return await this.connection.fetch(input, init);
  }
  async enqueue(action, inputOrOptions, maybeOptions) {
    assert(action, ".enqueue must be passed an action as the first argument but was passed undefined");
    let input;
    let options;
    if (typeof maybeOptions !== "undefined") {
      input = inputOrOptions;
      options = maybeOptions;
    } else if (!action.variables || Object.keys(action.variables).length == 0) {
      input = {};
      options = inputOrOptions;
    } else {
      if (typeof inputOrOptions == "string") {
        input = { id: inputOrOptions };
      } else {
        input = inputOrOptions;
      }
      options = {};
    }
    return await enqueueActionRunner(this.connection, action, input, options);
  }
  /**
   * Returns a handle for a given background action id
   *
   * @param action The action that was enqueued
   * @param id The id of the background action
   *
   * @example
   * const handle = api.handle(api.widget.update, "app-job-12346");
   *
   * @example
   * const handle = api.handle(api.someGlobalAction, "app-job-56789");
   **/
  handle(action, id) {
    return new BackgroundActionHandle(this.connection, action, id);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
Client.prototype[Symbol.for("gadget/modelRelationships")] = { "session": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyShop": { "syncs": { "type": "HasMany", "model": "shopifySync" }, "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "locations": { "type": "HasMany", "model": "shopifyLocation" }, "orders": { "type": "HasMany", "model": "shopifyOrder" }, "products": { "type": "HasMany", "model": "shopifyProduct" }, "productVariants": { "type": "HasMany", "model": "shopifyProductVariant" }, "gdprRequests": { "type": "HasMany", "model": "shopifyGdprRequest" }, "inventoryItems": { "type": "HasMany", "model": "shopifyInventoryItem" }, "inventoryLevels": { "type": "HasMany", "model": "shopifyInventoryLevel" }, "primaryLocation": { "type": "BelongsTo", "model": "shopifyLocation" } }, "shopifyGdprRequest": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProduct": { "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "variants": { "type": "HasMany", "model": "shopifyProductVariant" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProductVariant": { "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "inventoryItem": { "type": "BelongsTo", "model": "shopifyInventoryItem" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyInventoryItem": { "productVariant": { "type": "HasOne", "model": "shopifyProductVariant" }, "locations": { "type": "HasManyThrough", "model": "shopifyLocation", "through": "shopifyInventoryLevel" }, "shopifyInventoryLevels": { "model": "shopifyInventoryLevel", "type": "HasMany" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyLocation": { "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "orders": { "type": "HasMany", "model": "shopifyOrder" }, "inventoryItems": { "type": "HasManyThrough", "model": "shopifyInventoryItem", "through": "shopifyInventoryLevel" }, "shopifyInventoryLevels": { "model": "shopifyInventoryLevel", "type": "HasMany" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyInventoryLevel": { "inventoryItem": { "type": "BelongsTo", "model": "shopifyInventoryItem" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrder": { "lineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "retailLocation": { "type": "BelongsTo", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderLineItem": { "originLocation": { "type": "BelongsTo", "model": "shopifyLocation" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "variant": { "type": "BelongsTo", "model": "shopifyProductVariant" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifySync": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "draftedProduct": {} };
export {
  Client
};
//# sourceMappingURL=Client.js.map
