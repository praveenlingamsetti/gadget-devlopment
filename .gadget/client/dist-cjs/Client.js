"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Client_exports = {};
__export(Client_exports, {
  Client: () => Client
});
module.exports = __toCommonJS(Client_exports);
var import_wonka = require("wonka");
var import_api_client_core = require("@gadgetinc/api-client-core");
var import_Session = require("./models/Session.js");
var import_CurrentSession = require("./models/CurrentSession.js");
var import_ShopifyShop = require("./models/ShopifyShop.js");
var import_ShopifyGdprRequest = require("./models/ShopifyGdprRequest.js");
var import_ShopifyProduct = require("./models/ShopifyProduct.js");
var import_ShopifyProductVariant = require("./models/ShopifyProductVariant.js");
var import_ShopifyInventoryItem = require("./models/ShopifyInventoryItem.js");
var import_ShopifyLocation = require("./models/ShopifyLocation.js");
var import_ShopifyInventoryLevel = require("./models/ShopifyInventoryLevel.js");
var import_ShopifyOrder = require("./models/ShopifyOrder.js");
var import_ShopifyOrderLineItem = require("./models/ShopifyOrderLineItem.js");
var import_ShopifySync = require("./models/ShopifySync.js");
var import_DraftedProduct = require("./models/DraftedProduct.js");
var import_GadgetInfo = require("./models/GadgetInfo.js");
var import_inventory = require("./namespaces/inventory.js");
var import_order = require("./namespaces/order.js");
var import_product = require("./namespaces/product.js");
const import_meta = {};
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
    var _a, _b;
    let inSSRContext = false;
    try {
      inSSRContext = !!(import_meta.env && import_meta.env.SSR);
    } catch (error) {
    }
    if (inSSRContext) {
      const api = (_a = globalThis.GadgetGlobals) == null ? void 0 : _a.api;
      if (api) {
        return api.actAsSession;
      }
    }
    this.environment = ((options == null ? void 0 : options.environment) ?? getImplicitEnv() ?? fallbackEnv).toLocaleLowerCase();
    let apiRoot;
    if (this.apiRoots[this.environment]) {
      apiRoot = this.apiRoots[this.environment];
    } else {
      const envPart = this.environment == productionEnv ? "" : `--${this.environment}`;
      apiRoot = `https://i-was-a-sare-development${envPart}.gadget.app`;
    }
    const exchanges = { ...options == null ? void 0 : options.exchanges };
    if (this.environment !== productionEnv) {
      const devHarnessExchange = ({ forward }) => {
        return (operations$) => {
          const operationResult$ = forward(operations$);
          return (0, import_wonka.pipe)(
            operationResult$,
            (0, import_wonka.map)((result) => {
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
    this.connection = new import_api_client_core.GadgetConnection({
      endpoint: new URL("api/graphql", apiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: (options == null ? void 0 : options.authenticationMode) ?? (typeof window == "undefined" ? { anonymous: true } : { browserSession: true }),
      ...options,
      exchanges,
      environment: this.environment
    });
    if (typeof window != "undefined" && this.connection.authenticationMode == import_api_client_core.AuthenticationMode.APIKey && !((_b = options == null ? void 0 : options.authenticationMode) == null ? void 0 : _b.dangerouslyAllowBrowserApiKey)) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.");
    }
    this.session = new import_Session.SessionManager(this.connection);
    this.currentSession = new import_CurrentSession.CurrentSessionManager(this.connection);
    this.shopifyShop = new import_ShopifyShop.ShopifyShopManager(this.connection);
    this.shopifyGdprRequest = new import_ShopifyGdprRequest.ShopifyGdprRequestManager(this.connection);
    this.shopifyProduct = new import_ShopifyProduct.ShopifyProductManager(this.connection);
    this.shopifyProductVariant = new import_ShopifyProductVariant.ShopifyProductVariantManager(this.connection);
    this.shopifyInventoryItem = new import_ShopifyInventoryItem.ShopifyInventoryItemManager(this.connection);
    this.shopifyLocation = new import_ShopifyLocation.ShopifyLocationManager(this.connection);
    this.shopifyInventoryLevel = new import_ShopifyInventoryLevel.ShopifyInventoryLevelManager(this.connection);
    this.shopifyOrder = new import_ShopifyOrder.ShopifyOrderManager(this.connection);
    this.shopifyOrderLineItem = new import_ShopifyOrderLineItem.ShopifyOrderLineItemManager(this.connection);
    this.shopifySync = new import_ShopifySync.ShopifySyncManager(this.connection);
    this.draftedProduct = new import_DraftedProduct.DraftedProductManager(this.connection);
    this.gadgetInfo = new import_GadgetInfo.GadgetInfoManager(this.connection);
    this.inventory = new import_inventory.InventoryNamespace(this);
    this.order = new import_order.OrderNamespace(this);
    this.product = new import_product.ProductNamespace(this);
    this.internal = {
      session: new import_api_client_core.InternalModelManager("session", this.connection, { "pluralApiIdentifier": "sessions", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyShop: new import_api_client_core.InternalModelManager("shopifyShop", this.connection, { "pluralApiIdentifier": "shopifyShops", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyGdprRequest: new import_api_client_core.InternalModelManager("shopifyGdprRequest", this.connection, { "pluralApiIdentifier": "shopifyGdprRequests", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyProduct: new import_api_client_core.InternalModelManager("shopifyProduct", this.connection, { "pluralApiIdentifier": "shopifyProducts", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyProductVariant: new import_api_client_core.InternalModelManager("shopifyProductVariant", this.connection, { "pluralApiIdentifier": "shopifyProductVariants", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyInventoryItem: new import_api_client_core.InternalModelManager("shopifyInventoryItem", this.connection, { "pluralApiIdentifier": "shopifyInventoryItems", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyLocation: new import_api_client_core.InternalModelManager("shopifyLocation", this.connection, { "pluralApiIdentifier": "shopifyLocations", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyInventoryLevel: new import_api_client_core.InternalModelManager("shopifyInventoryLevel", this.connection, { "pluralApiIdentifier": "shopifyInventoryLevels", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyOrder: new import_api_client_core.InternalModelManager("shopifyOrder", this.connection, { "pluralApiIdentifier": "shopifyOrders", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifyOrderLineItem: new import_api_client_core.InternalModelManager("shopifyOrderLineItem", this.connection, { "pluralApiIdentifier": "shopifyOrderLineItems", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      shopifySync: new import_api_client_core.InternalModelManager("shopifySync", this.connection, { "pluralApiIdentifier": "shopifySyncs", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      draftedProduct: new import_api_client_core.InternalModelManager("draftedProduct", this.connection, { "pluralApiIdentifier": "draftedProducts", "hasAmbiguousIdentifiers": false, "namespace": [] }),
      gadgetInfo: new import_api_client_core.InternalModelManager("gadgetInfo", this.connection, { "pluralApiIdentifier": "gadgetInfos", "hasAmbiguousIdentifiers": false, "namespace": [] }),
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
    var _a, _b;
    (0, import_api_client_core.assert)((_b = (_a = this.options) == null ? void 0 : _a.authenticationMode) == null ? void 0 : _b.internal, "actAsAdmin can only be used for API clients using internal authentication");
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
    var _a, _b;
    (0, import_api_client_core.assert)((_b = (_a = this.options) == null ? void 0 : _a.authenticationMode) == null ? void 0 : _b.internal, "actAsSession can only be used for API clients using internal authentication");
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
    (0, import_api_client_core.assert)(action, ".enqueue must be passed an action as the first argument but was passed undefined");
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
    return await (0, import_api_client_core.enqueueActionRunner)(this.connection, action, input, options);
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
    return new import_api_client_core.BackgroundActionHandle(this.connection, action, id);
  }
  toString() {
    return `GadgetAPIClient<${this.environment}>`;
  }
  toJSON() {
    return this.toString();
  }
}
Client.prototype[Symbol.for("gadget/modelRelationships")] = { "session": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyShop": { "syncs": { "type": "HasMany", "model": "shopifySync" }, "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "locations": { "type": "HasMany", "model": "shopifyLocation" }, "orders": { "type": "HasMany", "model": "shopifyOrder" }, "products": { "type": "HasMany", "model": "shopifyProduct" }, "productVariants": { "type": "HasMany", "model": "shopifyProductVariant" }, "gdprRequests": { "type": "HasMany", "model": "shopifyGdprRequest" }, "inventoryItems": { "type": "HasMany", "model": "shopifyInventoryItem" }, "inventoryLevels": { "type": "HasMany", "model": "shopifyInventoryLevel" }, "primaryLocation": { "type": "BelongsTo", "model": "shopifyLocation" } }, "shopifyGdprRequest": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProduct": { "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "variants": { "type": "HasMany", "model": "shopifyProductVariant" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyProductVariant": { "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "inventoryItem": { "type": "BelongsTo", "model": "shopifyInventoryItem" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyInventoryItem": { "productVariant": { "type": "HasOne", "model": "shopifyProductVariant" }, "locations": { "type": "HasManyThrough", "model": "shopifyLocation", "through": "shopifyInventoryLevel" }, "shopifyInventoryLevels": { "model": "shopifyInventoryLevel", "type": "HasMany" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyLocation": { "orderLineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "orders": { "type": "HasMany", "model": "shopifyOrder" }, "inventoryItems": { "type": "HasManyThrough", "model": "shopifyInventoryItem", "through": "shopifyInventoryLevel" }, "shopifyInventoryLevels": { "model": "shopifyInventoryLevel", "type": "HasMany" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyInventoryLevel": { "inventoryItem": { "type": "BelongsTo", "model": "shopifyInventoryItem" }, "location": { "type": "BelongsTo", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrder": { "lineItems": { "type": "HasMany", "model": "shopifyOrderLineItem" }, "retailLocation": { "type": "BelongsTo", "model": "shopifyLocation" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifyOrderLineItem": { "originLocation": { "type": "BelongsTo", "model": "shopifyLocation" }, "order": { "type": "BelongsTo", "model": "shopifyOrder" }, "product": { "type": "BelongsTo", "model": "shopifyProduct" }, "variant": { "type": "BelongsTo", "model": "shopifyProductVariant" }, "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "shopifySync": { "shop": { "type": "BelongsTo", "model": "shopifyShop" } }, "draftedProduct": {}, "gadgetInfo": {} };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Client
});
//# sourceMappingURL=Client.js.map
