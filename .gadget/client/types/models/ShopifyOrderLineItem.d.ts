import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, PromiseOrLiveIterator, ShopifyOrderLineItem, AvailableShopifyOrderLineItemSelection, ShopifyOrderLineItemSort, ShopifyOrderLineItemFilter } from "../types.js";
/**
* A type that holds only the selected fields (and nested fields) of shopifyOrderLineItem. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyOrderLineItemOrDefault<Options extends Selectable<AvailableShopifyOrderLineItemSelection>> = DeepFilterNever<Select<ShopifyOrderLineItem, DefaultSelection<AvailableShopifyOrderLineItemSelection, Options, typeof DefaultShopifyOrderLineItemSelection>>>;
export declare const DefaultShopifyOrderLineItemSelection: {
    readonly __typename: true;
    readonly id: true;
    readonly attributedStaffs: true;
    readonly createdAt: true;
    readonly currentQuantity: true;
    readonly discountAllocations: true;
    readonly fulfillableQuantity: true;
    readonly fulfillmentService: true;
    readonly fulfillmentStatus: true;
    readonly giftCard: true;
    readonly grams: true;
    readonly name: true;
    readonly orderId: true;
    readonly originLocationId: true;
    readonly price: true;
    readonly priceSet: true;
    readonly productExists: true;
    readonly productId: true;
    readonly properties: true;
    readonly quantity: true;
    readonly requiresShipping: true;
    readonly shopId: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly sku: true;
    readonly taxLines: true;
    readonly taxable: true;
    readonly title: true;
    readonly totalDiscount: true;
    readonly totalDiscountSet: true;
    readonly updatedAt: true;
    readonly variantId: true;
    readonly variantInventoryManagement: true;
    readonly variantTitle: true;
    readonly vendor: true;
};
declare const modelApiIdentifier: "shopifyOrderLineItem";
declare const pluralModelApiIdentifier: "shopifyOrderLineItems";
/** Options that can be passed to the `ShopifyOrderLineItemManager#findOne` method */
export interface FindOneShopifyOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderLineItemSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
}
/** Options that can be passed to the `ShopifyOrderLineItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderLineItemSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
}
/** Options that can be passed to the `ShopifyOrderLineItemManager#findMany` method */
export interface FindManyShopifyOrderLineItemsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderLineItemSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyOrderLineItemSort | ShopifyOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyOrderLineItemFilter | ShopifyOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyOrderLineItemManager#findFirst` method */
export interface FindFirstShopifyOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderLineItemSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyOrderLineItemSort | ShopifyOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyOrderLineItemFilter | ShopifyOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyOrderLineItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderLineItemSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyOrderLineItemSort | ShopifyOrderLineItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyOrderLineItemFilter | ShopifyOrderLineItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderLineItemSelection;
}
export interface UpdateShopifyOrderLineItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderLineItemSelection;
}
export interface DeleteShopifyOrderLineItemOptions {
}
/**
 * A manager for the shopifyOrderLineItem model with all the available operations for reading and writing to it.*/
export type ShopifyOrderLineItemManager = {
    readonly connection: GadgetConnection;
    findOne: {
        /**
         * Finds one shopifyOrderLineItem by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
         **/
        <Options extends FindOneShopifyOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderLineItemOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyOrderLineItemOrDefault<Options>>>;
        type: 'findOne';
        operationName: typeof modelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        findByVariableName: 'id';
        defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
        namespace: null;
        optionsType: FindOneShopifyOrderLineItemOptions;
        selectionType: AvailableShopifyOrderLineItemSelection;
        schemaType: Query["shopifyOrderLineItem"];
    };
    maybeFindOne: {
        /**
         * Finds one shopifyOrderLineItem by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
         **/
        <Options extends MaybeFindOneShopifyOrderLineItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderLineItemOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyOrderLineItemOrDefault<Options>> | null>;
        type: 'maybeFindOne';
        operationName: typeof modelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        optionsType: MaybeFindOneShopifyOrderLineItemOptions;
        findByVariableName: 'id';
        defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
        namespace: null;
        selectionType: AvailableShopifyOrderLineItemSelection;
        schemaType: Query["shopifyOrderLineItem"];
    };
    findMany: {
        /**
         * Finds many shopifyOrderLineItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
         **/
        <Options extends FindManyShopifyOrderLineItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrderLineItemsOptions>): PromiseOrLiveIterator<Options, GadgetRecordList<SelectedShopifyOrderLineItemOrDefault<Options>>>;
        type: 'findMany';
        operationName: typeof pluralModelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        optionsType: FindManyShopifyOrderLineItemsOptions;
        defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
        namespace: null;
        selectionType: AvailableShopifyOrderLineItemSelection;
        schemaType: Query["shopifyOrderLineItem"];
    };
    findFirst: {
        /**
         * Finds the first matching shopifyOrderLineItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
         **/
        <Options extends FindFirstShopifyOrderLineItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderLineItemOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyOrderLineItemOrDefault<Options>>>;
        type: 'findFirst';
        operationName: typeof pluralModelApiIdentifier;
        optionsType: FindFirstShopifyOrderLineItemOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
        namespace: null;
        selectionType: AvailableShopifyOrderLineItemSelection;
        schemaType: Query["shopifyOrderLineItem"];
    };
    maybeFindFirst: {
        /**
         * Finds the first matching shopifyOrderLineItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
         **/
        <Options extends MaybeFindFirstShopifyOrderLineItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderLineItemOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyOrderLineItemOrDefault<Options>> | null>;
        type: 'maybeFindFirst';
        operationName: typeof pluralModelApiIdentifier;
        optionsType: MaybeFindFirstShopifyOrderLineItemOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultShopifyOrderLineItemSelection;
        namespace: null;
        selectionType: AvailableShopifyOrderLineItemSelection;
        schemaType: Query["shopifyOrderLineItem"];
    };
    create: {
        /**
         * @deprecated The action create on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'createShopifyOrderLineItem';
        errorMessage: 'The action create on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: CreateShopifyOrderLineItemOptions;
        actionApiIdentifier: 'create';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrderLineItem.create';
    };
    bulkCreate: {
        /**
         * @deprecated The action create on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkCreateShopifyOrderLineItems';
        errorMessage: 'The action create on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: CreateShopifyOrderLineItemOptions;
        actionApiIdentifier: 'create';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrderLineItem.bulkCreate';
    };
    update: {
        /**
         * @deprecated The action update on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'updateShopifyOrderLineItem';
        errorMessage: 'The action update on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: UpdateShopifyOrderLineItemOptions;
        actionApiIdentifier: 'update';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrderLineItem.update';
    };
    bulkUpdate: {
        /**
         * @deprecated The action update on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkUpdateShopifyOrderLineItems';
        errorMessage: 'The action update on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: UpdateShopifyOrderLineItemOptions;
        actionApiIdentifier: 'update';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrderLineItem.bulkUpdate';
    };
    delete: {
        /**
         * @deprecated The action delete on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'deleteShopifyOrderLineItem';
        errorMessage: 'The action delete on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: DeleteShopifyOrderLineItemOptions;
        actionApiIdentifier: 'delete';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrderLineItem.delete';
    };
    bulkDelete: {
        /**
         * @deprecated The action delete on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkDeleteShopifyOrderLineItems';
        errorMessage: 'The action delete on model shopifyOrderLineItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: DeleteShopifyOrderLineItemOptions;
        actionApiIdentifier: 'delete';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrderLineItem.bulkDelete';
    };
};
/**
 * A manager for the shopifyOrderLineItem model with all the available operations for reading and writing to it.*/
export declare const ShopifyOrderLineItemManager: {
    new (connection: GadgetConnection): ShopifyOrderLineItemManager;
};
export {};
