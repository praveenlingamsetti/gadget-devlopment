// generated with metadata generator for i-was-a-sare-development for fv ^1.3.0
import type { OperationContext, Exchange } from "@urql/core";
import { pipe, map } from "wonka";
import { assert, GadgetConnection, AuthenticationMode, GadgetTransaction, InternalModelManager, ActionFunctionMetadata, GlobalActionFunction, enqueueActionRunner, BackgroundActionHandle } from "@gadgetinc/api-client-core";
import type { ClientOptions as ApiClientOptions, AnyClient, EnqueueBackgroundActionOptions, AnyActionFunction } from '@gadgetinc/api-client-core';
import type { DocumentNode } from 'graphql';

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

type ClientOptions = Omit<ApiClientOptions, "environment"> & { environment?: string };
type AllOptionalVariables<T> = Partial<T> extends T ? object : never;
export type InternalModelManagers = {
   /** The internal API model manager for the session model */
   session: InternalModelManager;
   /** The internal API model manager for the shopifyShop model */
   shopifyShop: InternalModelManager;
   /** The internal API model manager for the shopifyGdprRequest model */
   shopifyGdprRequest: InternalModelManager;
   /** The internal API model manager for the shopifyProduct model */
   shopifyProduct: InternalModelManager;
   /** The internal API model manager for the shopifyProductVariant model */
   shopifyProductVariant: InternalModelManager;
   /** The internal API model manager for the shopifyInventoryItem model */
   shopifyInventoryItem: InternalModelManager;
   /** The internal API model manager for the shopifyLocation model */
   shopifyLocation: InternalModelManager;
   /** The internal API model manager for the shopifyInventoryLevel model */
   shopifyInventoryLevel: InternalModelManager;
   /** The internal API model manager for the shopifyOrder model */
   shopifyOrder: InternalModelManager;
   /** The internal API model manager for the shopifyOrderLineItem model */
   shopifyOrderLineItem: InternalModelManager;
   /** The internal API model manager for the shopifySync model */
   shopifySync: InternalModelManager;
   /** The internal API model manager for the draftedProduct model */
   draftedProduct: InternalModelManager;
   inventory: {

   };
   order: {

   };
   product: {

   };
 };

const productionEnv = "production";
const fallbackEnv = "development";

/**
 * Return the implicit environment
 * We specifically use an environment variable  `process.env.GADGET_ENV` or similar so that bundlers like webpack or vite can string replace this value in built source codes with the user's desired value.
 */
const getImplicitEnv = () => {
  try {
    return process.env.GADGET_ENV;
  } catch (error) {
    return undefined;
  }
}

/**
 * Root object used for interacting with the i-was-a-sare-development API. `Client` has `query` and `mutation` functions for executing raw GraphQL queries and mutations, as well as `ModelManager` objects for manipulating models with a JavaScript API. `Client` also has a `fetch` function for making raw requests to your backend.
 * */
export class Client implements AnyClient {
  connection!: GadgetConnection;

  session!: SessionManager;
  currentSession!: CurrentSessionManager;
  shopifyShop!: ShopifyShopManager;
  shopifyGdprRequest!: ShopifyGdprRequestManager;
  shopifyProduct!: ShopifyProductManager;
  shopifyProductVariant!: ShopifyProductVariantManager;
  shopifyInventoryItem!: ShopifyInventoryItemManager;
  shopifyLocation!: ShopifyLocationManager;
  shopifyInventoryLevel!: ShopifyInventoryLevelManager;
  shopifyOrder!: ShopifyOrderManager;
  shopifyOrderLineItem!: ShopifyOrderLineItemManager;
  shopifySync!: ShopifySyncManager;
  draftedProduct!: DraftedProductManager;
  inventory!: InventoryNamespace;
  order!: OrderNamespace;
  product!: ProductNamespace;

  /**
  * Namespaced object for accessing models via the Gadget internal APIs, which provide lower level and higher privileged operations directly against the database. Useful for maintenance operations like migrations or correcting broken data, and for implementing the high level actions.
  *
  * Returns an object of model API identifiers to `InternalModelManager` objects.
  *
  * Example:
  * `api.internal.user.findOne(...)`
  */
  internal!: InternalModelManagers;

  /**
   * The list of environments with a customized API root endpoint
   */
  apiRoots: Record<string, string> = {"development":"https://i-was-a-sare-development--development.gadget.app/","production":"https://i-was-a-sare-development.gadget.app/"};



  applicationId: string = "178013";
  environment!: string;

  constructor(readonly options?: ClientOptions | undefined) {
    let inSSRContext = false;

    try {
      // @ts-ignore
      inSSRContext = !!(import.meta.env && import.meta.env.SSR);
    } catch (error) {
      // no-op; this try-catch is here to prevent the empty-import-meta esbuild warning:
    }

    // Inside Vite SSR contexts on Gadget's app sandboxes, we use the global api client set up
    // by the gadget-server package. This is so that the api client used in i.e. Remix loaders
    // has all of the same auth and functionality as any other sandbox api client.
    if (inSSRContext) {
      const api = (globalThis as any).GadgetGlobals?.api;

      if (api) {
        return api.actAsSession;
      }
    }

    // for multi environment apps (this one), we accept any 'ole string as an environment, and we look in GADGET_ENV to determine the environment if not passed explicitly
    this.environment = (options?.environment ?? getImplicitEnv() ?? fallbackEnv).toLocaleLowerCase();
    let apiRoot: string;
    if (this.apiRoots[this.environment]) {
      apiRoot = this.apiRoots[this.environment];
    } else {
      const envPart = this.environment == productionEnv ? "" : `--${this.environment}`;
      apiRoot = `https://i-was-a-sare-development${envPart}.gadget.app`;
    }

    const exchanges = {...options?.exchanges};
    if (this.environment !== productionEnv) {
      const devHarnessExchange: Exchange = ({ forward }) => {
        return operations$ => {
          const operationResult$ = forward(operations$)

          return pipe(
            operationResult$,
            map(result => {
              try {
                if (typeof window !== "undefined" && typeof CustomEvent === "function") {
                  const event = new CustomEvent("gadget:devharness:graphqlresult", { detail: result });
                  window.dispatchEvent(event);
                }
              } catch (error: any) {
                // gracefully handle environments where CustomEvent is misbehaved like jsdom
                console.warn("[gadget] error dispatching gadget dev harness event", error)
              }

              return result;
            })
          );
        };
      };

      exchanges.beforeAll = [
        devHarnessExchange,
        ...(exchanges.beforeAll ?? []),
      ];
    }

    this.connection = new GadgetConnection({
      endpoint: new URL("api/graphql", apiRoot).toString(),
      applicationId: this.applicationId,
      authenticationMode: options?.authenticationMode ?? (typeof window == 'undefined' ? { anonymous: true } : { browserSession: true }),
      ...options,
      exchanges,
      environment: this.environment,
    });

    if (typeof window != 'undefined' && this.connection.authenticationMode == AuthenticationMode.APIKey && !(options as any)?.authenticationMode?.dangerouslyAllowBrowserApiKey) {
      throw new Error("GGT_BROWSER_API_KEY_USAGE: Using a Gadget API key to authenticate this client object is insecure and will leak your API keys to attackers. Please use a different authentication mode.")
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
                      session: new InternalModelManager("session", this.connection, {"pluralApiIdentifier":"sessions","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      shopifyShop: new InternalModelManager("shopifyShop", this.connection, {"pluralApiIdentifier":"shopifyShops","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      shopifyGdprRequest: new InternalModelManager("shopifyGdprRequest", this.connection, {"pluralApiIdentifier":"shopifyGdprRequests","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      shopifyProduct: new InternalModelManager("shopifyProduct", this.connection, {"pluralApiIdentifier":"shopifyProducts","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      shopifyProductVariant: new InternalModelManager("shopifyProductVariant", this.connection, {"pluralApiIdentifier":"shopifyProductVariants","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      shopifyInventoryItem: new InternalModelManager("shopifyInventoryItem", this.connection, {"pluralApiIdentifier":"shopifyInventoryItems","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      shopifyLocation: new InternalModelManager("shopifyLocation", this.connection, {"pluralApiIdentifier":"shopifyLocations","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      shopifyInventoryLevel: new InternalModelManager("shopifyInventoryLevel", this.connection, {"pluralApiIdentifier":"shopifyInventoryLevels","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      shopifyOrder: new InternalModelManager("shopifyOrder", this.connection, {"pluralApiIdentifier":"shopifyOrders","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      shopifyOrderLineItem: new InternalModelManager("shopifyOrderLineItem", this.connection, {"pluralApiIdentifier":"shopifyOrderLineItems","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      shopifySync: new InternalModelManager("shopifySync", this.connection, {"pluralApiIdentifier":"shopifySyncs","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      draftedProduct: new InternalModelManager("draftedProduct", this.connection, {"pluralApiIdentifier":"draftedProducts","hasAmbiguousIdentifiers":false,"namespace":[]}),
                      inventory: {

                      },
                      order: {

                      },
                      product: {

                      },
                    };
  }

  /**
   * Returns a new Client instance that will call the Gadget API as the application's admin user.
   * This can only be used for API clients using internal authentication.
   * @returns {Client} A new Client instance with admin authentication
   */
  get actAsAdmin(): Client {
    assert(this.options?.authenticationMode?.internal, "actAsAdmin can only be used for API clients using internal authentication")

    return new Client({
    ...this.options,
    authenticationMode: {
      internal: {
        ...this.options!.authenticationMode!.internal!,
        actAsSession: false,
      }
    }
    });
  }

  /**
   * Returns a new Client instance that will call the Gadget API as with the permission of the current session.
   * This can only be used for API clients using internal authentication.
   * @returns {Client} A new Client instance with session authentication
   */
  get actAsSession(): Client {
    assert(this.options?.authenticationMode?.internal, "actAsSession can only be used for API clients using internal authentication")

    return new Client({
      ...this.options,
      authenticationMode: {
        internal: {
          ...this.options!.authenticationMode!.internal!,
          actAsSession: true,
        }
      }
    })
  }

  /** Run an arbitrary GraphQL query. */
  async query<T = any>(graphQL: string | DocumentNode, variables?: Record<string, any>, options?: Partial<OperationContext>): Promise<T> {
    const {data, error} = await this.connection.currentClient.query(graphQL, variables, options).toPromise();
    if (error) throw error
    return data as T;
  }

  /** Run an arbitrary GraphQL mutation. */
  async mutate<T = any>(graphQL: string | DocumentNode, variables?: Record<string, any>, options?: Partial<OperationContext>): Promise<T> {
    const {data, error} = await this.connection.currentClient.mutation(graphQL, variables, options).toPromise();
    if (error) throw error
    return data as T;
  }

  /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
  transaction = async <T>(callback: (transaction: GadgetTransaction) => Promise<T>): Promise<T> => {
    return await this.connection.transaction(callback)
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
  async fetch(input: RequestInfo | URL, init: RequestInit = {}): Promise<Response> {
    return await this.connection.fetch(input, init);
  }

  /**
  * Get a new direct upload token for file uploads to directly to cloud storage.
  * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
  * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
  */
  getDirectUploadToken = async (): Promise<{url: string, token: string}> => {
    const result = await this.query("query GetDirectUploadToken($nonce: String) { gadgetMeta { directUploadToken(nonce: $nonce) { url, token } } }", {nonce: Math.random().toString(36).slice(2, 7)}, {
      requestPolicy: "network-only",
    });
    return (result as any).gadgetMeta.directUploadToken;
  }

  /**
   * Enqueue one action for execution in the backend. The backend will run the action as soon as possible, and return a handle to the action right away that can be used to check its status.
   *
   * @param action The action to enqueue
   * @param input The input variables for the action, in object form. Optional for actions that have only optional params, but required for actions with required params.
   * @param options Background execution options for the action
   *
   * @example
   * const handle = await api.enqueue(api.widget.update, { id: "123", name: "new name" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.create, { input: "value" }, { retries: 3, priority: "HIGH" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.delete, { id: "123" });
   *
   * @example
   * const handle = await api.enqueue(api.someGlobalAction, { retries: 3, priority: "LOW" });
   *
   * @example
   * const handle = await api.enqueue(api.someGlobalAction, { input: "value" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.bulkCreate, [{ name: "new name b" }, { name: "new name b" }]);
   **/
  async enqueue<SchemaT, Action extends AnyActionFunction & AllOptionalVariables<Action['variablesType']>>(action: Action, input?: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>): Promise<BackgroundActionHandle<SchemaT, Action>>;
  /**
   * Enqueue one action for execution in the backend. The backend will run the action as soon as possible, and return a handle to the action right away that can be used to check its status.
   *
   * @param action The action to enqueue
   * @param input The id for the record to run the action on. This is only one overload of this function, see the other forms for other input types.
   * @param options Background execution options for the action
   *
   * @example
   * const handle = await api.enqueue(api.widget.update, { id: "123", name: "new name" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.create, { input: "value" }, { retries: 3, priority: "HIGH" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.delete, { id: "123" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.delete, "123");
   *
   * @example
   * const handle = await api.enqueue(api.someGlobalAction, { retries: 3, priority: "LOW" });
   *
   * @example
   * const handle = await api.enqueue(api.someGlobalAction, { input: "value" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.bulkCreate, [{ name: "new name b" }, { name: "new name b" }]);
   **/
  async enqueue<SchemaT, Action extends AnyActionFunction & {variablesType: {id: string}}>(action: Action, id: string, options?: EnqueueBackgroundActionOptions<Action>): Promise<BackgroundActionHandle<SchemaT, Action>>;
  /**
   * Enqueue one action for execution in the backend. The backend will run the action as soon as possible, and return a handle to the action right away that can be used to check its status. This is the variant of enqueue for actions which accept no inputs.
   *
   * @param action The action to enqueue.
   * @param options Background execution options for the action
   *
   * @example
   * const handle = await api.enqueue(api.widget.update, { id: "123", name: "new name" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.create, { input: "value" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.delete, { id: "123" });
   *
   * @example
   * const handle = await api.enqueue(api.someGlobalAction);
   *
   * @example
   * const handle = await api.enqueue(api.someGlobalAction, { input: "value" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.bulkCreate, [{ name: "new name b" }, { name: "new name b" }]);
   **/
  async enqueue<SchemaT, Action extends ActionFunctionMetadata<any, Record<string, never>, any, any, any, any> | GlobalActionFunction<Record<string, never>>>(action: Action, options?: EnqueueBackgroundActionOptions<Action>): Promise<BackgroundActionHandle<SchemaT, Action>>;
  /**
   * Enqueue a set of actions in bulk for execution. The backend will run each action as soon as possible, and return an array of handles to each action right away that can be used to check their statuses.
   *
   * @param bulkAction The bulk action to enqueue
   * @param input The input variables for the action, in array or object form.
   * @param options Background execution options for the action
   *
   * @example
   * const handle = await api.enqueue(api.widget.bulkCreate, [{ name: "foo" }, {name: "bar"}], { retries: 3, priority: "HIGH" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.bulkDelete, [2, 42]);
   *
   * @example
   * const handle = await api.enqueue(api.widget.addInventory, [{id: 1, amount: 10}, {id: 2, amount: 15}]);
   *
  **/
  async enqueue<SchemaT, Action extends ActionFunctionMetadata<any, any, any, any, any, true>>(action: Action, input: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>): Promise<BackgroundActionHandle<SchemaT, Action>[]>;
  /**
   * Enqueue one action for execution in the backend. The backend will run the action as soon as possible, and return a handle to the action right away that can be used to check its status.
   *
   * @param action The action to enqueue
   * @param input The input variables for the action, in object form. Optional for actions that have only optional params, but required for actions with required params.
   * @param options Background execution options for the action
   *
   * @example
   * const handle = await api.enqueue(api.widget.update, { id: "123", name: "new name" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.create, { input: "value" });
   *
   * @example
   * const handle = await api.enqueue(api.widget.delete, { id: "123" });
   *
   * @example
   * const handle = await api.enqueue(api.someGlobalAction);
   *
   * @example
   * const handle = await api.enqueue(api.someGlobalAction, { input: "value" });
   **/
  async enqueue<SchemaT, Action extends AnyActionFunction>(action: Action, input: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>): Promise<BackgroundActionHandle<SchemaT, Action>>;
  async enqueue<SchemaT, Action extends AnyActionFunction>(action: Action, inputOrOptions?: Action["variablesType"] | EnqueueBackgroundActionOptions<Action>, maybeOptions?: EnqueueBackgroundActionOptions<Action>): Promise<BackgroundActionHandle<SchemaT, Action> | BackgroundActionHandle<SchemaT, Action>[]> {
    assert(action, ".enqueue must be passed an action as the first argument but was passed undefined");

    let input: Action["variablesType"] | undefined;
    let options: EnqueueBackgroundActionOptions<Action> | undefined;

    // process different overloads to pull out the input and or options
    if (typeof maybeOptions !== "undefined") {
      input = inputOrOptions;
      options = maybeOptions;
    } else if (!action.variables || Object.keys(action.variables).length == 0) {
      input = {};
      options = inputOrOptions;
    } else {
      if (typeof inputOrOptions == "string") {
        // id input shorthand passes just the id as a string, wrap it into a variables object
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
  handle<SchemaT, Action extends AnyActionFunction>(action: Action, id: string): BackgroundActionHandle<SchemaT, Action> {
    return new BackgroundActionHandle(this.connection, action, id);
  }

  toString(): string {
    return `GadgetAPIClient<${this.environment}>`;
  }

  toJSON(): string {
    return this.toString()
  }
}

(Client.prototype as any)[Symbol.for("gadget/modelRelationships")] = {"session":{"shop":{"type":"BelongsTo","model":"shopifyShop"}},"shopifyShop":{"syncs":{"type":"HasMany","model":"shopifySync"},"orderLineItems":{"type":"HasMany","model":"shopifyOrderLineItem"},"locations":{"type":"HasMany","model":"shopifyLocation"},"orders":{"type":"HasMany","model":"shopifyOrder"},"products":{"type":"HasMany","model":"shopifyProduct"},"productVariants":{"type":"HasMany","model":"shopifyProductVariant"},"gdprRequests":{"type":"HasMany","model":"shopifyGdprRequest"},"inventoryItems":{"type":"HasMany","model":"shopifyInventoryItem"},"inventoryLevels":{"type":"HasMany","model":"shopifyInventoryLevel"},"primaryLocation":{"type":"BelongsTo","model":"shopifyLocation"}},"shopifyGdprRequest":{"shop":{"type":"BelongsTo","model":"shopifyShop"}},"shopifyProduct":{"orderLineItems":{"type":"HasMany","model":"shopifyOrderLineItem"},"variants":{"type":"HasMany","model":"shopifyProductVariant"},"shop":{"type":"BelongsTo","model":"shopifyShop"}},"shopifyProductVariant":{"orderLineItems":{"type":"HasMany","model":"shopifyOrderLineItem"},"inventoryItem":{"type":"BelongsTo","model":"shopifyInventoryItem"},"product":{"type":"BelongsTo","model":"shopifyProduct"},"shop":{"type":"BelongsTo","model":"shopifyShop"}},"shopifyInventoryItem":{"productVariant":{"type":"HasOne","model":"shopifyProductVariant"},"locations":{"type":"HasManyThrough","model":"shopifyLocation","through":"shopifyInventoryLevel"},"shopifyInventoryLevels":{"model":"shopifyInventoryLevel","type":"HasMany"},"shop":{"type":"BelongsTo","model":"shopifyShop"}},"shopifyLocation":{"orderLineItems":{"type":"HasMany","model":"shopifyOrderLineItem"},"orders":{"type":"HasMany","model":"shopifyOrder"},"inventoryItems":{"type":"HasManyThrough","model":"shopifyInventoryItem","through":"shopifyInventoryLevel"},"shopifyInventoryLevels":{"model":"shopifyInventoryLevel","type":"HasMany"},"shop":{"type":"BelongsTo","model":"shopifyShop"}},"shopifyInventoryLevel":{"inventoryItem":{"type":"BelongsTo","model":"shopifyInventoryItem"},"location":{"type":"BelongsTo","model":"shopifyLocation"},"shop":{"type":"BelongsTo","model":"shopifyShop"}},"shopifyOrder":{"lineItems":{"type":"HasMany","model":"shopifyOrderLineItem"},"retailLocation":{"type":"BelongsTo","model":"shopifyLocation"},"shop":{"type":"BelongsTo","model":"shopifyShop"}},"shopifyOrderLineItem":{"originLocation":{"type":"BelongsTo","model":"shopifyLocation"},"order":{"type":"BelongsTo","model":"shopifyOrder"},"product":{"type":"BelongsTo","model":"shopifyProduct"},"variant":{"type":"BelongsTo","model":"shopifyProductVariant"},"shop":{"type":"BelongsTo","model":"shopifyShop"}},"shopifySync":{"shop":{"type":"BelongsTo","model":"shopifyShop"}},"draftedProduct":{}};