import {
  GadgetConnection,
  GadgetRecord,
  GadgetRecordImplementation,
  GadgetRecordList,
  GadgetNonUniqueDataError,
  actionRunner,
  findManyRunner,
  findOneRunner,
  findOneByFieldRunner,
  DefaultSelection,
  LimitToKnownKeys,
  Selectable
} from "@gadgetinc/api-client-core";

import {
  Query,
  ExplicitNestingRequired,
  Select,
  DeepFilterNever,
  IDsList,
  PromiseOrLiveIterator,
  ShopifyLocation,
  AvailableShopifyLocationSelection,
  ShopifyLocationSort,
  ShopifyLocationFilter
} from "../types.js";

import { buildModelManager } from "../builder.js";

/**
* A type that holds only the selected fields (and nested fields) of shopifyLocation. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyLocationOrDefault<Options extends Selectable<AvailableShopifyLocationSelection>> = DeepFilterNever<
    Select<
      ShopifyLocation,
      DefaultSelection<
        AvailableShopifyLocationSelection,
        Options,
        typeof DefaultShopifyLocationSelection
      >
    >
  >;

export const DefaultShopifyLocationSelection = {
     __typename: true,
     id: true,
     active: true,
     address1: true,
     address2: true,
     city: true,
     country: true,
     countryCode: true,
     createdAt: true,
     legacy: true,
     localizedCountryName: true,
     localizedProvinceName: true,
     name: true,
     phone: true,
     province: true,
     provinceCode: true,
     shopId: true,
     shopifyCreatedAt: true,
     shopifyUpdatedAt: true,
     updatedAt: true,
     zipCode: true
   } as const;
const modelApiIdentifier = "shopifyLocation" as const;
const pluralModelApiIdentifier = "shopifyLocations" as const;
/** Options that can be passed to the `ShopifyLocationManager#findOne` method */
 export interface FindOneShopifyLocationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyLocationSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `ShopifyLocationManager#maybeFindOne` method */
 export interface MaybeFindOneShopifyLocationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyLocationSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `ShopifyLocationManager#findMany` method */
 export interface FindManyShopifyLocationsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyLocationSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: ShopifyLocationSort | ShopifyLocationSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyLocationFilter | ShopifyLocationFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};
/** Options that can be passed to the `ShopifyLocationManager#findFirst` method */
 export interface FindFirstShopifyLocationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyLocationSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: ShopifyLocationSort | ShopifyLocationSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyLocationFilter | ShopifyLocationFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
/** Options that can be passed to the `ShopifyLocationManager#maybeFindFirst` method */
 export interface MaybeFindFirstShopifyLocationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyLocationSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: ShopifyLocationSort | ShopifyLocationSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyLocationFilter | ShopifyLocationFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
export interface CreateShopifyLocationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyLocationSelection;
};
export interface UpdateShopifyLocationOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyLocationSelection;
};
export interface DeleteShopifyLocationOptions {

};

/**
 * A manager for the shopifyLocation model with all the available operations for reading and writing to it.*/
export type ShopifyLocationManager = {
  readonly connection: GadgetConnection;

  findOne: {
      /**
       * Finds one shopifyLocation by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
       **/
      <Options extends FindOneShopifyLocationOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyLocationOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedShopifyLocationOrDefault<Options>>>;
      type: 'findOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultShopifyLocationSelection;
      namespace: null;
      optionsType: FindOneShopifyLocationOptions;
      selectionType: AvailableShopifyLocationSelection;
      schemaType: Query["shopifyLocation"];
    }
  maybeFindOne: {
      /**
       * Finds one shopifyLocation by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
       **/
      <Options extends MaybeFindOneShopifyLocationOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyLocationOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedShopifyLocationOrDefault<Options>> | null>;
      type: 'maybeFindOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: MaybeFindOneShopifyLocationOptions;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultShopifyLocationSelection;
      namespace: null;
      selectionType: AvailableShopifyLocationSelection;
      schemaType: Query["shopifyLocation"];
    }
  findMany: {
      /**
       * Finds many shopifyLocation. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindManyShopifyLocationsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyLocationsOptions>): PromiseOrLiveIterator<Options,GadgetRecordList<SelectedShopifyLocationOrDefault<Options>>>;
      type: 'findMany';
      operationName: typeof pluralModelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: FindManyShopifyLocationsOptions;
      defaultSelection: typeof DefaultShopifyLocationSelection;
      namespace: null;
      selectionType: AvailableShopifyLocationSelection;
      schemaType: Query["shopifyLocation"];
    }
  findFirst: {
      /**
       * Finds the first matching shopifyLocation. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindFirstShopifyLocationOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyLocationOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedShopifyLocationOrDefault<Options>>>;
      type: 'findFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: FindFirstShopifyLocationOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyLocationSelection;
      namespace: null;
      selectionType: AvailableShopifyLocationSelection;
      schemaType: Query["shopifyLocation"];
    }
  maybeFindFirst: {
      /**
       * Finds the first matching shopifyLocation. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
       **/
      <Options extends MaybeFindFirstShopifyLocationOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyLocationOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedShopifyLocationOrDefault<Options>> | null>;
      type: 'maybeFindFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: MaybeFindFirstShopifyLocationOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyLocationSelection;
      namespace: null;
      selectionType: AvailableShopifyLocationSelection;
      schemaType: Query["shopifyLocation"];
    }
  create: {
      /**
       * @deprecated The action create on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'createShopifyLocation';
      errorMessage: 'The action create on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: CreateShopifyLocationOptions;
      actionApiIdentifier: 'create';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyLocation.create';
    }
  bulkCreate: {
      /**
       * @deprecated The action create on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'bulkCreateShopifyLocations';
      errorMessage: 'The action create on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: CreateShopifyLocationOptions;
      actionApiIdentifier: 'create';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyLocation.bulkCreate';
    }
  update: {
      /**
       * @deprecated The action update on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'updateShopifyLocation';
      errorMessage: 'The action update on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: UpdateShopifyLocationOptions;
      actionApiIdentifier: 'update';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyLocation.update';
    }
  bulkUpdate: {
      /**
       * @deprecated The action update on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'bulkUpdateShopifyLocations';
      errorMessage: 'The action update on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: UpdateShopifyLocationOptions;
      actionApiIdentifier: 'update';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyLocation.bulkUpdate';
    }
  delete: {
      /**
       * @deprecated The action delete on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'deleteShopifyLocation';
      errorMessage: 'The action delete on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: DeleteShopifyLocationOptions;
      actionApiIdentifier: 'delete';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyLocation.delete';
    }
  bulkDelete: {
      /**
       * @deprecated The action delete on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'bulkDeleteShopifyLocations';
      errorMessage: 'The action delete on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: DeleteShopifyLocationOptions;
      actionApiIdentifier: 'delete';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyLocation.bulkDelete';
    }
};

/**
 * A manager for the shopifyLocation model with all the available operations for reading and writing to it.*/
export const ShopifyLocationManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultShopifyLocationSelection,
  [
    {
      type: 'findOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultShopifyLocationSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultShopifyLocationSelection,
      namespace: null
    },
    {
      type: 'findMany',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyLocationSelection,
      namespace: null
    },
    {
      type: 'findFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyLocationSelection,
      namespace: null
    },
    {
      type: 'maybeFindFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyLocationSelection,
      namespace: null
    },
    {
      type: 'stubbedAction',
      operationName: 'createShopifyLocation',
      functionName: 'create',
      errorMessage: 'The action create on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'create',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyLocation.create'
    },
    {
      type: 'stubbedAction',
      operationName: 'bulkCreateShopifyLocations',
      functionName: 'bulkCreate',
      errorMessage: 'The action create on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'create',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyLocation.bulkCreate'
    },
    {
      type: 'stubbedAction',
      operationName: 'updateShopifyLocation',
      functionName: 'update',
      errorMessage: 'The action update on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'update',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyLocation.update'
    },
    {
      type: 'stubbedAction',
      operationName: 'bulkUpdateShopifyLocations',
      functionName: 'bulkUpdate',
      errorMessage: 'The action update on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'update',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyLocation.bulkUpdate'
    },
    {
      type: 'stubbedAction',
      operationName: 'deleteShopifyLocation',
      functionName: 'delete',
      errorMessage: 'The action delete on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'delete',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyLocation.delete'
    },
    {
      type: 'stubbedAction',
      operationName: 'bulkDeleteShopifyLocations',
      functionName: 'bulkDelete',
      errorMessage: 'The action delete on model shopifyLocation does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'delete',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyLocation.bulkDelete'
    }
  ] as const
) as unknown as {
  // Gadget generates these model manager classes at runtime dynamically, which means there is no source code for the class. This is done to make the bundle size of the client as small as possible, avoiding a bunch of repeated source code in favour of one small builder function. The TypeScript types above document the exact interface of the constructed class.
  new(connection: GadgetConnection): ShopifyLocationManager;
};