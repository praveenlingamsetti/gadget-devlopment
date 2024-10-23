import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, PromiseOrLiveIterator, ShopifyProduct, AvailableShopifyProductSelection, ShopifyProductSort, ShopifyProductFilter } from "../types.js";
/**
* A type that holds only the selected fields (and nested fields) of shopifyProduct. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyProductOrDefault<Options extends Selectable<AvailableShopifyProductSelection>> = DeepFilterNever<Select<ShopifyProduct, DefaultSelection<AvailableShopifyProductSelection, Options, typeof DefaultShopifyProductSelection>>>;
export declare const DefaultShopifyProductSelection: {
    readonly __typename: true;
    readonly id: true;
    readonly body: true;
    readonly category: true;
    readonly compareAtPriceRange: true;
    readonly createdAt: true;
    readonly handle: true;
    readonly hasVariantsThatRequiresComponents: true;
    readonly productCategory: true;
    readonly productType: true;
    readonly publishedAt: true;
    readonly shopId: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyUpdatedAt: true;
    readonly status: true;
    readonly tags: true;
    readonly templateSuffix: true;
    readonly title: true;
    readonly updatedAt: true;
    readonly vendor: true;
};
declare const modelApiIdentifier: "shopifyProduct";
declare const pluralModelApiIdentifier: "shopifyProducts";
/** Options that can be passed to the `ShopifyProductManager#findOne` method */
export interface FindOneShopifyProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
}
/** Options that can be passed to the `ShopifyProductManager#maybeFindOne` method */
export interface MaybeFindOneShopifyProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
}
/** Options that can be passed to the `ShopifyProductManager#findMany` method */
export interface FindManyShopifyProductsOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductSort | ShopifyProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductFilter | ShopifyProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyProductManager#findFirst` method */
export interface FindFirstShopifyProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductSort | ShopifyProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductFilter | ShopifyProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyProductManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyProductSort | ShopifyProductSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyProductFilter | ShopifyProductFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
}
export interface UpdateShopifyProductOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyProductSelection;
}
export interface DeleteShopifyProductOptions {
}
/**
 * A manager for the shopifyProduct model with all the available operations for reading and writing to it.*/
export type ShopifyProductManager = {
    readonly connection: GadgetConnection;
    findOne: {
        /**
         * Finds one shopifyProduct by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
         **/
        <Options extends FindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyProductOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyProductOrDefault<Options>>>;
        type: 'findOne';
        operationName: typeof modelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        findByVariableName: 'id';
        defaultSelection: typeof DefaultShopifyProductSelection;
        namespace: null;
        optionsType: FindOneShopifyProductOptions;
        selectionType: AvailableShopifyProductSelection;
        schemaType: Query["shopifyProduct"];
    };
    maybeFindOne: {
        /**
         * Finds one shopifyProduct by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
         **/
        <Options extends MaybeFindOneShopifyProductOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyProductOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyProductOrDefault<Options>> | null>;
        type: 'maybeFindOne';
        operationName: typeof modelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        optionsType: MaybeFindOneShopifyProductOptions;
        findByVariableName: 'id';
        defaultSelection: typeof DefaultShopifyProductSelection;
        namespace: null;
        selectionType: AvailableShopifyProductSelection;
        schemaType: Query["shopifyProduct"];
    };
    findMany: {
        /**
         * Finds many shopifyProduct. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
         **/
        <Options extends FindManyShopifyProductsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyProductsOptions>): PromiseOrLiveIterator<Options, GadgetRecordList<SelectedShopifyProductOrDefault<Options>>>;
        type: 'findMany';
        operationName: typeof pluralModelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        optionsType: FindManyShopifyProductsOptions;
        defaultSelection: typeof DefaultShopifyProductSelection;
        namespace: null;
        selectionType: AvailableShopifyProductSelection;
        schemaType: Query["shopifyProduct"];
    };
    findFirst: {
        /**
         * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
         **/
        <Options extends FindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyProductOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyProductOrDefault<Options>>>;
        type: 'findFirst';
        operationName: typeof pluralModelApiIdentifier;
        optionsType: FindFirstShopifyProductOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultShopifyProductSelection;
        namespace: null;
        selectionType: AvailableShopifyProductSelection;
        schemaType: Query["shopifyProduct"];
    };
    maybeFindFirst: {
        /**
         * Finds the first matching shopifyProduct. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
         **/
        <Options extends MaybeFindFirstShopifyProductOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyProductOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyProductOrDefault<Options>> | null>;
        type: 'maybeFindFirst';
        operationName: typeof pluralModelApiIdentifier;
        optionsType: MaybeFindFirstShopifyProductOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultShopifyProductSelection;
        namespace: null;
        selectionType: AvailableShopifyProductSelection;
        schemaType: Query["shopifyProduct"];
    };
    create: {
        /**
         * @deprecated The action create on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'createShopifyProduct';
        errorMessage: 'The action create on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: CreateShopifyProductOptions;
        actionApiIdentifier: 'create';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyProduct.create';
    };
    bulkCreate: {
        /**
         * @deprecated The action create on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkCreateShopifyProducts';
        errorMessage: 'The action create on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: CreateShopifyProductOptions;
        actionApiIdentifier: 'create';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyProduct.bulkCreate';
    };
    update: {
        /**
         * @deprecated The action update on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'updateShopifyProduct';
        errorMessage: 'The action update on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: UpdateShopifyProductOptions;
        actionApiIdentifier: 'update';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyProduct.update';
    };
    bulkUpdate: {
        /**
         * @deprecated The action update on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkUpdateShopifyProducts';
        errorMessage: 'The action update on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: UpdateShopifyProductOptions;
        actionApiIdentifier: 'update';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyProduct.bulkUpdate';
    };
    delete: {
        /**
         * @deprecated The action delete on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'deleteShopifyProduct';
        errorMessage: 'The action delete on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: DeleteShopifyProductOptions;
        actionApiIdentifier: 'delete';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyProduct.delete';
    };
    bulkDelete: {
        /**
         * @deprecated The action delete on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkDeleteShopifyProducts';
        errorMessage: 'The action delete on model shopifyProduct does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: DeleteShopifyProductOptions;
        actionApiIdentifier: 'delete';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyProduct.bulkDelete';
    };
};
/**
 * A manager for the shopifyProduct model with all the available operations for reading and writing to it.*/
export declare const ShopifyProductManager: {
    new (connection: GadgetConnection): ShopifyProductManager;
};
export {};
