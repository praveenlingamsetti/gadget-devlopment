import type { OperationContext } from "@urql/core";
import { GadgetConnection, GadgetTransaction, InternalModelManager, ActionFunctionMetadata, GlobalActionFunction, BackgroundActionHandle } from "@gadgetinc/api-client-core";
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
type ClientOptions = Omit<ApiClientOptions, "environment"> & {
    environment?: string;
};
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
    inventory: {};
    order: {};
    product: {};
};
/**
 * Root object used for interacting with the i-was-a-sare-development API. `Client` has `query` and `mutation` functions for executing raw GraphQL queries and mutations, as well as `ModelManager` objects for manipulating models with a JavaScript API. `Client` also has a `fetch` function for making raw requests to your backend.
 * */
export declare class Client implements AnyClient {
    readonly options?: ClientOptions | undefined;
    connection: GadgetConnection;
    session: SessionManager;
    currentSession: CurrentSessionManager;
    shopifyShop: ShopifyShopManager;
    shopifyGdprRequest: ShopifyGdprRequestManager;
    shopifyProduct: ShopifyProductManager;
    shopifyProductVariant: ShopifyProductVariantManager;
    shopifyInventoryItem: ShopifyInventoryItemManager;
    shopifyLocation: ShopifyLocationManager;
    shopifyInventoryLevel: ShopifyInventoryLevelManager;
    shopifyOrder: ShopifyOrderManager;
    shopifyOrderLineItem: ShopifyOrderLineItemManager;
    shopifySync: ShopifySyncManager;
    draftedProduct: DraftedProductManager;
    inventory: InventoryNamespace;
    order: OrderNamespace;
    product: ProductNamespace;
    /**
    * Namespaced object for accessing models via the Gadget internal APIs, which provide lower level and higher privileged operations directly against the database. Useful for maintenance operations like migrations or correcting broken data, and for implementing the high level actions.
    *
    * Returns an object of model API identifiers to `InternalModelManager` objects.
    *
    * Example:
    * `api.internal.user.findOne(...)`
    */
    internal: InternalModelManagers;
    /**
     * The list of environments with a customized API root endpoint
     */
    apiRoots: Record<string, string>;
    applicationId: string;
    environment: string;
    constructor(options?: ClientOptions | undefined);
    /**
     * Returns a new Client instance that will call the Gadget API as the application's admin user.
     * This can only be used for API clients using internal authentication.
     * @returns {Client} A new Client instance with admin authentication
     */
    get actAsAdmin(): Client;
    /**
     * Returns a new Client instance that will call the Gadget API as with the permission of the current session.
     * This can only be used for API clients using internal authentication.
     * @returns {Client} A new Client instance with session authentication
     */
    get actAsSession(): Client;
    /** Run an arbitrary GraphQL query. */
    query<T = any>(graphQL: string | DocumentNode, variables?: Record<string, any>, options?: Partial<OperationContext>): Promise<T>;
    /** Run an arbitrary GraphQL mutation. */
    mutate<T = any>(graphQL: string | DocumentNode, variables?: Record<string, any>, options?: Partial<OperationContext>): Promise<T>;
    /** Start a transaction against the Gadget backend which will atomically commit (or rollback). */
    transaction: <T>(callback: (transaction: GadgetTransaction) => Promise<T>) => Promise<T>;
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
    fetch(input: RequestInfo | URL, init?: RequestInit): Promise<Response>;
    /**
    * Get a new direct upload token for file uploads to directly to cloud storage.
    * See https://docs.gadget.dev/guides/storing-files#direct-uploads-using-tokens for more information
    * @return { url: string, token: string } A `url` to upload one file to, and a token for that file to pass back to Gadget as an action input.
    */
    getDirectUploadToken: () => Promise<{
        url: string;
        token: string;
    }>;
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
    enqueue<SchemaT, Action extends AnyActionFunction & AllOptionalVariables<Action['variablesType']>>(action: Action, input?: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>): Promise<BackgroundActionHandle<SchemaT, Action>>;
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
    enqueue<SchemaT, Action extends AnyActionFunction & {
        variablesType: {
            id: string;
        };
    }>(action: Action, id: string, options?: EnqueueBackgroundActionOptions<Action>): Promise<BackgroundActionHandle<SchemaT, Action>>;
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
    enqueue<SchemaT, Action extends ActionFunctionMetadata<any, Record<string, never>, any, any, any, any> | GlobalActionFunction<Record<string, never>>>(action: Action, options?: EnqueueBackgroundActionOptions<Action>): Promise<BackgroundActionHandle<SchemaT, Action>>;
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
    enqueue<SchemaT, Action extends ActionFunctionMetadata<any, any, any, any, any, true>>(action: Action, input: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>): Promise<BackgroundActionHandle<SchemaT, Action>[]>;
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
    enqueue<SchemaT, Action extends AnyActionFunction>(action: Action, input: Action["variablesType"], options?: EnqueueBackgroundActionOptions<Action>): Promise<BackgroundActionHandle<SchemaT, Action>>;
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
    handle<SchemaT, Action extends AnyActionFunction>(action: Action, id: string): BackgroundActionHandle<SchemaT, Action>;
    toString(): string;
    toJSON(): string;
}
export {};
