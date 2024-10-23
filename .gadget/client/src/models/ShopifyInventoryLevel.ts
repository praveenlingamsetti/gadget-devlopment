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
  ShopifyInventoryLevel,
  AvailableShopifyInventoryLevelSelection,
  ShopifyInventoryLevelSort,
  ShopifyInventoryLevelFilter
} from "../types.js";

import { buildModelManager } from "../builder.js";

/**
* A type that holds only the selected fields (and nested fields) of shopifyInventoryLevel. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedShopifyInventoryLevelOrDefault<Options extends Selectable<AvailableShopifyInventoryLevelSelection>> = DeepFilterNever<
    Select<
      ShopifyInventoryLevel,
      DefaultSelection<
        AvailableShopifyInventoryLevelSelection,
        Options,
        typeof DefaultShopifyInventoryLevelSelection
      >
    >
  >;

export const DefaultShopifyInventoryLevelSelection = {
     __typename: true,
     id: true,
     adminGraphqlApiId: true,
     available: true,
     canDeactivate: true,
     createdAt: true,
     deactivationAlert: true,
     inventoryItemId: true,
     locationId: true,
     shopId: true,
     shopifyUpdatedAt: true,
     updatedAt: true
   } as const;
const modelApiIdentifier = "shopifyInventoryLevel" as const;
const pluralModelApiIdentifier = "shopifyInventoryLevels" as const;
/** Options that can be passed to the `ShopifyInventoryLevelManager#findOne` method */
 export interface FindOneShopifyInventoryLevelOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `ShopifyInventoryLevelManager#maybeFindOne` method */
 export interface MaybeFindOneShopifyInventoryLevelOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `ShopifyInventoryLevelManager#findMany` method */
 export interface FindManyShopifyInventoryLevelsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: ShopifyInventoryLevelSort | ShopifyInventoryLevelSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyInventoryLevelFilter | ShopifyInventoryLevelFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};
/** Options that can be passed to the `ShopifyInventoryLevelManager#findFirst` method */
 export interface FindFirstShopifyInventoryLevelOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: ShopifyInventoryLevelSort | ShopifyInventoryLevelSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyInventoryLevelFilter | ShopifyInventoryLevelFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
/** Options that can be passed to the `ShopifyInventoryLevelManager#maybeFindFirst` method */
 export interface MaybeFindFirstShopifyInventoryLevelOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  /** Return records sorted by these sorts */
  sort?: ShopifyInventoryLevelSort | ShopifyInventoryLevelSort[] | null;
  /** Only return records matching these filters. */
  filter?: ShopifyInventoryLevelFilter | ShopifyInventoryLevelFilter[] | null;
  /** Only return records matching this freeform search string */
  search?: string | null;
};
export interface CreateShopifyInventoryLevelOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
};
export interface UpdateShopifyInventoryLevelOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableShopifyInventoryLevelSelection;
};
export interface DeleteShopifyInventoryLevelOptions {

};

/**
 * A manager for the shopifyInventoryLevel model with all the available operations for reading and writing to it.*/
export type ShopifyInventoryLevelManager = {
  readonly connection: GadgetConnection;

  findOne: {
      /**
       * Finds one shopifyInventoryLevel by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
       **/
      <Options extends FindOneShopifyInventoryLevelOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>>>;
      type: 'findOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
      namespace: null;
      optionsType: FindOneShopifyInventoryLevelOptions;
      selectionType: AvailableShopifyInventoryLevelSelection;
      schemaType: Query["shopifyInventoryLevel"];
    }
  maybeFindOne: {
      /**
       * Finds one shopifyInventoryLevel by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
       **/
      <Options extends MaybeFindOneShopifyInventoryLevelOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneShopifyInventoryLevelOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>> | null>;
      type: 'maybeFindOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: MaybeFindOneShopifyInventoryLevelOptions;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
      namespace: null;
      selectionType: AvailableShopifyInventoryLevelSelection;
      schemaType: Query["shopifyInventoryLevel"];
    }
  findMany: {
      /**
       * Finds many shopifyInventoryLevel. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindManyShopifyInventoryLevelsOptions>(options?: LimitToKnownKeys<Options, FindManyShopifyInventoryLevelsOptions>): PromiseOrLiveIterator<Options,GadgetRecordList<SelectedShopifyInventoryLevelOrDefault<Options>>>;
      type: 'findMany';
      operationName: typeof pluralModelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: FindManyShopifyInventoryLevelsOptions;
      defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
      namespace: null;
      selectionType: AvailableShopifyInventoryLevelSelection;
      schemaType: Query["shopifyInventoryLevel"];
    }
  findFirst: {
      /**
       * Finds the first matching shopifyInventoryLevel. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindFirstShopifyInventoryLevelOptions>(options?: LimitToKnownKeys<Options, FindFirstShopifyInventoryLevelOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>>>;
      type: 'findFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: FindFirstShopifyInventoryLevelOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
      namespace: null;
      selectionType: AvailableShopifyInventoryLevelSelection;
      schemaType: Query["shopifyInventoryLevel"];
    }
  maybeFindFirst: {
      /**
       * Finds the first matching shopifyInventoryLevel. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
       **/
      <Options extends MaybeFindFirstShopifyInventoryLevelOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstShopifyInventoryLevelOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>> | null>;
      type: 'maybeFindFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: MaybeFindFirstShopifyInventoryLevelOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
      namespace: null;
      selectionType: AvailableShopifyInventoryLevelSelection;
      schemaType: Query["shopifyInventoryLevel"];
    }
  findById: {
      /**
      * Finds one shopifyInventoryLevel by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
      **/
      <Options extends FindOneShopifyInventoryLevelOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>>>;
      type: 'findOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneShopifyInventoryLevelOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
      namespace: null;
      selectionType: AvailableShopifyInventoryLevelSelection;
      schemaType: Query["shopifyInventoryLevel"];
    }
  maybeFindById: {
      /**
      * Finds one shopifyInventoryLevel by its id. Returns a Promise that resolves to the record if found and returns null if the record isn't found.
      **/
      <Options extends FindOneShopifyInventoryLevelOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>): Promise<GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>> | null>;
      type: 'maybeFindOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneShopifyInventoryLevelOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
      namespace: null;
      selectionType: AvailableShopifyInventoryLevelSelection;
      schemaType: Query["shopifyInventoryLevel"];
    }
  findByInventoryItem: {
      /**
      * Finds one shopifyInventoryLevel by its inventoryItem. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
      **/
      <Options extends FindOneShopifyInventoryLevelOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>>>;
      type: 'findOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'inventoryItemId';
      findByVariableName: 'inventoryItemId';
      optionsType: FindOneShopifyInventoryLevelOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
      namespace: null;
      selectionType: AvailableShopifyInventoryLevelSelection;
      schemaType: Query["shopifyInventoryLevel"];
    }
  maybeFindByInventoryItem: {
      /**
      * Finds one shopifyInventoryLevel by its inventoryItem. Returns a Promise that resolves to the record if found and returns null if the record isn't found.
      **/
      <Options extends FindOneShopifyInventoryLevelOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneShopifyInventoryLevelOptions>): Promise<GadgetRecord<SelectedShopifyInventoryLevelOrDefault<Options>> | null>;
      type: 'maybeFindOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'inventoryItemId';
      findByVariableName: 'inventoryItemId';
      optionsType: FindOneShopifyInventoryLevelOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultShopifyInventoryLevelSelection;
      namespace: null;
      selectionType: AvailableShopifyInventoryLevelSelection;
      schemaType: Query["shopifyInventoryLevel"];
    }
  create: {
      /**
       * @deprecated The action create on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'createShopifyInventoryLevel';
      errorMessage: 'The action create on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: CreateShopifyInventoryLevelOptions;
      actionApiIdentifier: 'create';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyInventoryLevel.create';
    }
  bulkCreate: {
      /**
       * @deprecated The action create on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'bulkCreateShopifyInventoryLevels';
      errorMessage: 'The action create on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: CreateShopifyInventoryLevelOptions;
      actionApiIdentifier: 'create';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyInventoryLevel.bulkCreate';
    }
  update: {
      /**
       * @deprecated The action update on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'updateShopifyInventoryLevel';
      errorMessage: 'The action update on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: UpdateShopifyInventoryLevelOptions;
      actionApiIdentifier: 'update';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyInventoryLevel.update';
    }
  bulkUpdate: {
      /**
       * @deprecated The action update on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'bulkUpdateShopifyInventoryLevels';
      errorMessage: 'The action update on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: UpdateShopifyInventoryLevelOptions;
      actionApiIdentifier: 'update';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyInventoryLevel.bulkUpdate';
    }
  delete: {
      /**
       * @deprecated The action delete on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'deleteShopifyInventoryLevel';
      errorMessage: 'The action delete on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: DeleteShopifyInventoryLevelOptions;
      actionApiIdentifier: 'delete';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyInventoryLevel.delete';
    }
  bulkDelete: {
      /**
       * @deprecated The action delete on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers
       */
      (...args: any[]): never;
      type: 'stubbedAction';
      operationName: 'bulkDeleteShopifyInventoryLevels';
      errorMessage: 'The action delete on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers';
      optionsType: DeleteShopifyInventoryLevelOptions;
      actionApiIdentifier: 'delete';
      modelApiIdentifier: typeof modelApiIdentifier;
      schemaType: null;
      selectionType: Record<string, never>;
      variables: {};
      reason: 'MissingApiTrigger';
      dataPath: 'shopifyInventoryLevel.bulkDelete';
    }
};

/**
 * A manager for the shopifyInventoryLevel model with all the available operations for reading and writing to it.*/
export const ShopifyInventoryLevelManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultShopifyInventoryLevelSelection,
  [
    {
      type: 'findOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: 'findMany',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: 'findFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: 'maybeFindFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: 'findOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'findById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'maybeFindById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: 'findOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'findByInventoryItem',
      findByField: 'inventoryItemId',
      findByVariableName: 'inventoryItemId',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'maybeFindByInventoryItem',
      findByField: 'inventoryItemId',
      findByVariableName: 'inventoryItemId',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultShopifyInventoryLevelSelection,
      namespace: null
    },
    {
      type: 'stubbedAction',
      operationName: 'createShopifyInventoryLevel',
      functionName: 'create',
      errorMessage: 'The action create on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'create',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyInventoryLevel.create'
    },
    {
      type: 'stubbedAction',
      operationName: 'bulkCreateShopifyInventoryLevels',
      functionName: 'bulkCreate',
      errorMessage: 'The action create on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'create',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyInventoryLevel.bulkCreate'
    },
    {
      type: 'stubbedAction',
      operationName: 'updateShopifyInventoryLevel',
      functionName: 'update',
      errorMessage: 'The action update on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'update',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyInventoryLevel.update'
    },
    {
      type: 'stubbedAction',
      operationName: 'bulkUpdateShopifyInventoryLevels',
      functionName: 'bulkUpdate',
      errorMessage: 'The action update on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'update',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyInventoryLevel.bulkUpdate'
    },
    {
      type: 'stubbedAction',
      operationName: 'deleteShopifyInventoryLevel',
      functionName: 'delete',
      errorMessage: 'The action delete on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'delete',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyInventoryLevel.delete'
    },
    {
      type: 'stubbedAction',
      operationName: 'bulkDeleteShopifyInventoryLevels',
      functionName: 'bulkDelete',
      errorMessage: 'The action delete on model shopifyInventoryLevel does not have an api trigger and cannot be called from this api client. If you are the developer of this application and want api clients to call this action add an api trigger to the action. For more information see: https://docs.gadget.dev/guides/actions/triggers',
      actionApiIdentifier: 'delete',
      modelApiIdentifier: modelApiIdentifier,
      variables: {},
      reason: 'MissingApiTrigger',
      dataPath: 'shopifyInventoryLevel.bulkDelete'
    }
  ] as const
) as unknown as {
  // Gadget generates these model manager classes at runtime dynamically, which means there is no source code for the class. This is done to make the bundle size of the client as small as possible, avoiding a bunch of repeated source code in favour of one small builder function. The TypeScript types above document the exact interface of the constructed class.
  new(connection: GadgetConnection): ShopifyInventoryLevelManager;
};