import { GadgetConnection, GadgetRecord, GadgetRecordList, DefaultSelection, LimitToKnownKeys, Selectable } from "@gadgetinc/api-client-core";
import { Query, Select, DeepFilterNever, PromiseOrLiveIterator, ShopifyOrder, AvailableShopifyOrderSelection, ShopifyOrderSort, ShopifyOrderFilter } from "../types.js";
/**
* A type that holds only the selected fields (and nested fields) of shopifyOrder. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyOrderOrDefault<Options extends Selectable<AvailableShopifyOrderSelection>> = DeepFilterNever<Select<ShopifyOrder, DefaultSelection<AvailableShopifyOrderSelection, Options, typeof DefaultShopifyOrderSelection>>>;
export declare const DefaultShopifyOrderSelection: {
    readonly __typename: true;
    readonly id: true;
    readonly additionalFees: true;
    readonly billingAddress: true;
    readonly browserIp: true;
    readonly buyerAcceptsMarketing: true;
    readonly cancelReason: true;
    readonly cancellation: true;
    readonly cancelledAt: true;
    readonly cartToken: true;
    readonly checkoutToken: true;
    readonly clientDetails: true;
    readonly closedAt: true;
    readonly createdAt: true;
    readonly currency: true;
    readonly currentSubtotalPrice: true;
    readonly currentSubtotalPriceSet: true;
    readonly currentTotalAdditionalFeesSet: true;
    readonly currentTotalDiscounts: true;
    readonly currentTotalDiscountsSet: true;
    readonly currentTotalDutiesSet: true;
    readonly currentTotalPrice: true;
    readonly currentTotalPriceSet: true;
    readonly currentTotalTax: true;
    readonly currentTotalTaxSet: true;
    readonly customerLocale: true;
    readonly discountApplications: true;
    readonly discountCodes: true;
    readonly email: true;
    readonly estimatedTaxes: true;
    readonly financialStatus: true;
    readonly fulfillmentStatus: true;
    readonly fulfillmentsCount: true;
    readonly landingSite: true;
    readonly merchantOfRecordAppId: true;
    readonly name: true;
    readonly note: true;
    readonly noteAttributes: true;
    readonly number: true;
    readonly orderNumber: true;
    readonly orderStatusUrl: true;
    readonly originalTotalAdditionalFeesSet: true;
    readonly originalTotalDutiesSet: true;
    readonly paymentGatewayNames: true;
    readonly phone: true;
    readonly poNumber: true;
    readonly presentmentCurrency: true;
    readonly processedAt: true;
    readonly referringSite: true;
    readonly retailLocationId: true;
    readonly risk: true;
    readonly shippingAddress: true;
    readonly shopId: true;
    readonly shopifyCreatedAt: true;
    readonly shopifyProtect: true;
    readonly shopifyUpdatedAt: true;
    readonly sourceIdentifier: true;
    readonly sourceName: true;
    readonly sourceUrl: true;
    readonly statusPageUrl: true;
    readonly subtotalPrice: true;
    readonly subtotalPriceSet: true;
    readonly tags: true;
    readonly taxExempt: true;
    readonly taxLines: true;
    readonly taxesIncluded: true;
    readonly test: true;
    readonly token: true;
    readonly totalCashRoundingAdjustment: true;
    readonly totalDiscounts: true;
    readonly totalDiscountsSet: true;
    readonly totalLineItemsPrice: true;
    readonly totalLineItemsPriceSet: true;
    readonly totalOutstanding: true;
    readonly totalPrice: true;
    readonly totalPriceSet: true;
    readonly totalShippingPriceSet: true;
    readonly totalTax: true;
    readonly totalTaxSet: true;
    readonly totalTipReceived: true;
    readonly totalWeight: true;
    readonly transactionsCount: true;
    readonly updatedAt: true;
};
declare const modelApiIdentifier: "shopifyOrder";
declare const pluralModelApiIdentifier: "shopifyOrders";
/** Options that can be passed to the `ShopifyOrderManager#findOne` method */
export interface FindOneShopifyOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
}
/** Options that can be passed to the `ShopifyOrderManager#maybeFindOne` method */
export interface MaybeFindOneShopifyOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
}
/** Options that can be passed to the `ShopifyOrderManager#findMany` method */
export interface FindManyShopifyOrdersOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyOrderSort | ShopifyOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyOrderFilter | ShopifyOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
    first?: number | null;
    last?: number | null;
    after?: string | null;
    before?: string | null;
}
/** Options that can be passed to the `ShopifyOrderManager#findFirst` method */
export interface FindFirstShopifyOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyOrderSort | ShopifyOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyOrderFilter | ShopifyOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
/** Options that can be passed to the `ShopifyOrderManager#maybeFindFirst` method */
export interface MaybeFindFirstShopifyOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderSelection;
    /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
    live?: boolean;
    /** Return records sorted by these sorts */
    sort?: ShopifyOrderSort | ShopifyOrderSort[] | null;
    /** Only return records matching these filters. */
    filter?: ShopifyOrderFilter | ShopifyOrderFilter[] | null;
    /** Only return records matching this freeform search string */
    search?: string | null;
}
export interface CreateShopifyOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderSelection;
}
export interface UpdateShopifyOrderOptions {
    /** Select fields other than the defaults of the record to return */
    select?: AvailableShopifyOrderSelection;
}
export interface DeleteShopifyOrderOptions {
}
/**
 * A manager for the shopifyOrder model with all the available operations for reading and writing to it.*/
export type ShopifyOrderManager = {
    readonly connection: GadgetConnection;
    findOne: {
        /**
         * Finds one shopifyOrder by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
         **/
        <Options extends FindOneShopifyOrderOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyOrderOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyOrderOrDefault<Options>>>;
        type: 'findOne';
        operationName: typeof modelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        findByVariableName: 'id';
        defaultSelection: typeof DefaultShopifyOrderSelection;
        namespace: null;
        optionsType: FindOneShopifyOrderOptions;
        selectionType: AvailableShopifyOrderSelection;
        schemaType: Query["shopifyOrder"];
    };
    maybeFindOne: {
        /**
         * Finds one shopifyOrder by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
         **/
        <Options extends MaybeFindOneShopifyOrderOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyOrderOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyOrderOrDefault<Options>> | null>;
        type: 'maybeFindOne';
        operationName: typeof modelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        optionsType: MaybeFindOneShopifyOrderOptions;
        findByVariableName: 'id';
        defaultSelection: typeof DefaultShopifyOrderSelection;
        namespace: null;
        selectionType: AvailableShopifyOrderSelection;
        schemaType: Query["shopifyOrder"];
    };
    findMany: {
        /**
         * Finds many shopifyOrder. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
         **/
        <Options extends FindManyShopifyOrdersOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyOrdersOptions>): PromiseOrLiveIterator<Options, GadgetRecordList<SelectedShopifyOrderOrDefault<Options>>>;
        type: 'findMany';
        operationName: typeof pluralModelApiIdentifier;
        modelApiIdentifier: typeof modelApiIdentifier;
        optionsType: FindManyShopifyOrdersOptions;
        defaultSelection: typeof DefaultShopifyOrderSelection;
        namespace: null;
        selectionType: AvailableShopifyOrderSelection;
        schemaType: Query["shopifyOrder"];
    };
    findFirst: {
        /**
         * Finds the first matching shopifyOrder. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
         **/
        <Options extends FindFirstShopifyOrderOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyOrderOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyOrderOrDefault<Options>>>;
        type: 'findFirst';
        operationName: typeof pluralModelApiIdentifier;
        optionsType: FindFirstShopifyOrderOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultShopifyOrderSelection;
        namespace: null;
        selectionType: AvailableShopifyOrderSelection;
        schemaType: Query["shopifyOrder"];
    };
    maybeFindFirst: {
        /**
         * Finds the first matching shopifyOrder. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
         **/
        <Options extends MaybeFindFirstShopifyOrderOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyOrderOptions>): PromiseOrLiveIterator<Options, GadgetRecord<SelectedShopifyOrderOrDefault<Options>> | null>;
        type: 'maybeFindFirst';
        operationName: typeof pluralModelApiIdentifier;
        optionsType: MaybeFindFirstShopifyOrderOptions;
        modelApiIdentifier: typeof modelApiIdentifier;
        defaultSelection: typeof DefaultShopifyOrderSelection;
        namespace: null;
        selectionType: AvailableShopifyOrderSelection;
        schemaType: Query["shopifyOrder"];
    };
    create: {
        /**
         * @deprecated The action create on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'createShopifyOrder';
        errorMessage: 'The action create on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: CreateShopifyOrderOptions;
        actionApiIdentifier: 'create';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrder.create';
    };
    bulkCreate: {
        /**
         * @deprecated The action create on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkCreateShopifyOrders';
        errorMessage: 'The action create on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: CreateShopifyOrderOptions;
        actionApiIdentifier: 'create';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrder.bulkCreate';
    };
    update: {
        /**
         * @deprecated The action update on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'updateShopifyOrder';
        errorMessage: 'The action update on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: UpdateShopifyOrderOptions;
        actionApiIdentifier: 'update';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrder.update';
    };
    bulkUpdate: {
        /**
         * @deprecated The action update on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkUpdateShopifyOrders';
        errorMessage: 'The action update on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: UpdateShopifyOrderOptions;
        actionApiIdentifier: 'update';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrder.bulkUpdate';
    };
    delete: {
        /**
         * @deprecated The action delete on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'deleteShopifyOrder';
        errorMessage: 'The action delete on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: DeleteShopifyOrderOptions;
        actionApiIdentifier: 'delete';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrder.delete';
    };
    bulkDelete: {
        /**
         * @deprecated The action delete on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
         */
        (...args: any[]): never;
        type: 'stubbedAction';
        operationName: 'bulkDeleteShopifyOrders';
        errorMessage: 'The action delete on model shopifyOrder does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
        optionsType: DeleteShopifyOrderOptions;
        actionApiIdentifier: 'delete';
        modelApiIdentifier: typeof modelApiIdentifier;
        schemaType: null;
        selectionType: Record<string, never>;
        variables: {};
        reason: 'MissingApiTrigger';
        dataPath: 'shopifyOrder.bulkDelete';
    };
};
/**
 * A manager for the shopifyOrder model with all the available operations for reading and writing to it.*/
export declare const ShopifyOrderManager: {
    new (connection: GadgetConnection): ShopifyOrderManager;
};
export {};
