import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, PromiseOrLiveIterator, ShopifyInventoryItem, AvailableShopifyInventoryItemSelection, ShopifyInventoryItemSort, ShopifyInventoryItemFilter } from "../types.js";
/**
* A type that holds only the selected fields (and nested fields) of shopifyInventoryItem. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyInventoryItemOrDefault<Options extends Selectable<AvailableShopifyInventoryItemSelection>> = DeepFilterNever<Select<ShopifyInventoryItem, DefaultSelection<AvailableShopifyInventoryItemSelection, Options, typeof DefaultShopifyInventoryItemSelection>>>;
export declare const DefaultShopifyInventoryItemSelection: {
    readonly __typename: true;
    readonly id: true;
    readonly cost: true;
    readonly countryCodeOfOrigin: true;
    readonly countryHarmonizedSystemCodes: true;
    readonly createdAt: true;
    readonly duplicateSkuCount: true;
    readonly harmonizedSystemCode: true;
    readonly inventoryHistoryUrl: true;
    readonly legacyResourceId: true;
    readonly measurement: true;
    readonly provinceCodeOfOrigin: true;
    readonly requiresShipping: true;
    readonly shopId: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly sku: true;
    readonly tracked: true;
    readonly trackedEditable: true;
    readonly unitCost: true;
    readonly updatedAt: true;
};
declare const modelApiIdentifier: "shopifyInventoryItem";
declare const pluralModelApiIdentifier: "shopifyInventoryItems";
/** Options that can be passed to the `ShopifyInventoryItemManager#findOne` method */
export interface FindOneShopifyInventoryItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryItemSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
}
/** Options that can be passed to the `ShopifyInventoryItemManager#maybeFindOne` method */
export interface MaybeFindOneShopifyInventoryItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryItemSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
}
/** Options that can be passed to the `ShopifyInventoryItemManager#findMany` method */
export interface FindManyShopifyInventoryItemsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryItemSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyInventoryItemSort | ShopifyInventoryItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyInventoryItemFilter | ShopifyInventoryItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyInventoryItemManager#findFirst` method */
export interface FindFirstShopifyInventoryItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryItemSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyInventoryItemSort | ShopifyInventoryItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyInventoryItemFilter | ShopifyInventoryItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyInventoryItemManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyInventoryItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryItemSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyInventoryItemSort | ShopifyInventoryItemSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyInventoryItemFilter | ShopifyInventoryItemFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyInventoryItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryItemSelection;
}
export interface UpdateShopifyInventoryItemOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyInventoryItemSelection;
}
export interface DeleteShopifyInventoryItemOptions {
}
/**
 * A manager for the shopifyInventoryItem model with all the available operations for reading and writing to it.*/
export type ShopifyInventoryItemManager = {
    readonly connection: GadgetConnection;
    findOne: {
        /**
         * Finds one shopifyInventoryItem by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
         **/
        <Options extends FindOneShopifyInventoryItemOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryItemOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyInventoryItemOrDefault<Options>>>;
        type: 'findOne';
        operationName: typeof modelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        findByVariableName: 'id';
        defaultSelection: typeof DefaultShopifyInventoryItemSelection;
        namespace: null;
        optionsType: FindOneShopifyInventoryItemOptions;
        selectionType: AvailableShopifyInventoryItemSelection;
        schemaType: Query["shopifyInventoryItem"];
    };
    maybeFindOne: {
        /**
         * Finds one shopifyInventoryItem by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
         **/
        <Options extends MaybeFindOneShopifyInventoryItemOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyInventoryItemOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyInventoryItemOrDefault<Options>> | null>;
        type: 'maybeFindOne';
        operationName: typeof modelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        optionsType: MaybeFindOneShopifyInventoryItemOptions;
        findByVariableName: 'id';
        defaultSelection: typeof DefaultShopifyInventoryItemSelection;
        namespace: null;
        selectionType: AvailableShopifyInventoryItemSelection;
        schemaType: Query["shopifyInventoryItem"];
    };
    findMany: {
        /**
         * Finds many shopifyInventoryItem. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
         **/
        <Options extends FindManyShopifyInventoryItemsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyInventoryItemsOptions>): PromiseOrLiveIterator<Options, GadgetRecordList<SelectedShopifyInventoryItemOrDefault<Options>>>;
        type: 'findMany';
        operationName: typeof pluralModelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        optionsType: FindManyShopifyInventoryItemsOptions;
        defaultSelection: typeof DefaultShopifyInventoryItemSelection;
        namespace: null;
        selectionType: AvailableShopifyInventoryItemSelection;
        schemaType: Query["shopifyInventoryItem"];
    };
    findFirst: {
        /**
         * Finds the first matching shopifyInventoryItem. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
         **/
        <Options extends FindFirstShopifyInventoryItemOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyInventoryItemOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyInventoryItemOrDefault<Options>>>;
        type: 'findFirst';
        operationName: typeof pluralModelApiIdentifier;
        optionsType: FindFirstShopifyInventoryItemOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultShopifyInventoryItemSelection;
        namespace: null;
        selectionType: AvailableShopifyInventoryItemSelection;
        schemaType: Query["shopifyInventoryItem"];
    };
    maybeFindFirst: {
        /**
         * Finds the first matching shopifyInventoryItem. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
         **/
        <Options extends MaybeFindFirstShopifyInventoryItemOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyInventoryItemOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyInventoryItemOrDefault<Options>> | null>;
        type: 'maybeFindFirst';
        operationName: typeof pluralModelApiIdentifier;
        optionsType: MaybeFindFirstShopifyInventoryItemOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultShopifyInventoryItemSelection;
        namespace: null;
        selectionType: AvailableShopifyInventoryItemSelection;
        schemaType: Query["shopifyInventoryItem"];
    };
    create: {
        /**
         * @deprecated The action create on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'createShopifyInventoryItem';
        errorMessage: 'The action create on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: CreateShopifyInventoryItemOptions;
        actionApiIdentifier: 'create';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyInventoryItem.create';
    };
    bulkCreate: {
        /**
         * @deprecated The action create on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkCreateShopifyInventoryItems';
        errorMessage: 'The action create on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: CreateShopifyInventoryItemOptions;
        actionApiIdentifier: 'create';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyInventoryItem.bulkCreate';
    };
    update: {
        /**
         * @deprecated The action update on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'updateShopifyInventoryItem';
        errorMessage: 'The action update on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: UpdateShopifyInventoryItemOptions;
        actionApiIdentifier: 'update';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyInventoryItem.update';
    };
    bulkUpdate: {
        /**
         * @deprecated The action update on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkUpdateShopifyInventoryItems';
        errorMessage: 'The action update on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: UpdateShopifyInventoryItemOptions;
        actionApiIdentifier: 'update';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyInventoryItem.bulkUpdate';
    };
    delete: {
        /**
         * @deprecated The action delete on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'deleteShopifyInventoryItem';
        errorMessage: 'The action delete on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: DeleteShopifyInventoryItemOptions;
        actionApiIdentifier: 'delete';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyInventoryItem.delete';
    };
    bulkDelete: {
        /**
         * @deprecated The action delete on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkDeleteShopifyInventoryItems';
        errorMessage: 'The action delete on model shopifyInventoryItem does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: DeleteShopifyInventoryItemOptions;
        actionApiIdentifier: 'delete';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyInventoryItem.bulkDelete';
    };
};
/**
 * A manager for the shopifyInventoryItem model with all the available operations for reading and writing to it.*/
export declare const ShopifyInventoryItemManager: {
    new (connection: GadgetConnection): ShopifyInventoryItemManager;
};
export {};
