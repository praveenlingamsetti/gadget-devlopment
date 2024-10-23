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
  Session,
  AvailableSessionSelection
} from "../types.js";

import { buildModelManager } from "../builder.js";

/**
* A type that holds only the selected fields (and nested fields) of session. The present fields in the result type of this are dynamic based on the options to each call that uses it.
* The selected fields are sometimes given by the `Options` at `Options["select"]`, and if a selection isn't made in the options, we use the default selection from above.
*/
export type SelectedSessionOrDefault<Options extends Selectable<AvailableSessionSelection>> = DeepFilterNever<
    Select<
      Session,
      DefaultSelection<
        AvailableSessionSelection,
        Options,
        typeof DefaultSessionSelection
      >
    >
  >;

export const DefaultSessionSelection = {
     __typename: true,
     id: true,
     createdAt: true,
     roles: { key: true, name: true },
     shopId: true,
     shopifySID: true,
     updatedAt: true
   } as const;
const modelApiIdentifier = "session" as const;
const pluralModelApiIdentifier = "sessions" as const;
/** Options that can be passed to the `SessionManager#findOne` method */
 export interface FindOneSessionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `SessionManager#maybeFindOne` method */
 export interface MaybeFindOneSessionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `SessionManager#findMany` method */
 export interface FindManySessionsOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
  first?: number | null;
  last?: number | null;
  after?: string | null;
  before?: string | null;
};
/** Options that can be passed to the `SessionManager#findFirst` method */
 export interface FindFirstSessionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};
/** Options that can be passed to the `SessionManager#maybeFindFirst` method */
 export interface MaybeFindFirstSessionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};

/**
 * A manager for the session model with all the available operations for reading and writing to it.*/
export type SessionManager = {
  readonly connection: GadgetConnection;

  findOne: {
      /**
       * Finds one session by ID. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
       **/
      <Options extends FindOneSessionOptions>(id: string, options?: LimitToKnownKeys<Options, FindOneSessionOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedSessionOrDefault<Options>>>;
      type: 'findOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultSessionSelection;
      namespace: null;
      optionsType: FindOneSessionOptions;
      selectionType: AvailableSessionSelection;
      schemaType: Query["session"];
    }
  maybeFindOne: {
      /**
       * Finds one session by ID. Returns a `Promise` that resolves to the record if found and returns null otherwise.
       **/
      <Options extends MaybeFindOneSessionOptions>(id: string, options?: LimitToKnownKeys<Options, MaybeFindOneSessionOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedSessionOrDefault<Options>> | null>;
      type: 'maybeFindOne';
      operationName: typeof modelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: MaybeFindOneSessionOptions;
      findByVariableName: 'id';
      defaultSelection: typeof DefaultSessionSelection;
      namespace: null;
      selectionType: AvailableSessionSelection;
      schemaType: Query["session"];
    }
  findMany: {
      /**
       * Finds many session. Returns a `Promise` for a `GadgetRecordList` of objects according to the passed `options`. Optionally filters the returned records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindManySessionsOptions>(options?: LimitToKnownKeys<Options, FindManySessionsOptions>): PromiseOrLiveIterator<Options,GadgetRecordList<SelectedSessionOrDefault<Options>>>;
      type: 'findMany';
      operationName: typeof pluralModelApiIdentifier;
      modelApiIdentifier: typeof modelApiIdentifier;
      optionsType: FindManySessionsOptions;
      defaultSelection: typeof DefaultSessionSelection;
      namespace: null;
      selectionType: AvailableSessionSelection;
      schemaType: Query["session"];
    }
  findFirst: {
      /**
       * Finds the first matching session. Returns a `Promise` that resolves to a record if found and rejects the promise if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` and `first`/`after` pagination options.
       **/
      <Options extends FindFirstSessionOptions>(options?: LimitToKnownKeys<Options, FindFirstSessionOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedSessionOrDefault<Options>>>;
      type: 'findFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: FindFirstSessionOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultSessionSelection;
      namespace: null;
      selectionType: AvailableSessionSelection;
      schemaType: Query["session"];
    }
  maybeFindFirst: {
      /**
       * Finds the first matching session. Returns a `Promise` that resolves to a record if found, or null if a record isn't found, according to the passed `options`. Optionally filters the searched records using `filter` option, sorts records using the `sort` option, searches using the `search` options, and paginates using the `last`/`before` pagination options.
       **/
      <Options extends MaybeFindFirstSessionOptions>(options?: LimitToKnownKeys<Options, MaybeFindFirstSessionOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedSessionOrDefault<Options>> | null>;
      type: 'maybeFindFirst';
      operationName: typeof pluralModelApiIdentifier;
      optionsType: MaybeFindFirstSessionOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultSessionSelection;
      namespace: null;
      selectionType: AvailableSessionSelection;
      schemaType: Query["session"];
    }
  findById: {
      /**
      * Finds one session by its id. Returns a Promise that resolves to the record if found and rejects the promise if the record isn't found.
      **/
      <Options extends FindOneSessionOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneSessionOptions>): PromiseOrLiveIterator<Options,GadgetRecord<SelectedSessionOrDefault<Options>>>;
      type: 'findOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneSessionOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultSessionSelection;
      namespace: null;
      selectionType: AvailableSessionSelection;
      schemaType: Query["session"];
    }
  maybeFindById: {
      /**
      * Finds one session by its id. Returns a Promise that resolves to the record if found and returns null if the record isn't found.
      **/
      <Options extends FindOneSessionOptions>(value: string, options?: LimitToKnownKeys<Options, FindOneSessionOptions>): Promise<GadgetRecord<SelectedSessionOrDefault<Options>> | null>;
      type: 'maybeFindOne';
      operationName: typeof pluralModelApiIdentifier;
      findByField: 'id';
      findByVariableName: 'id';
      optionsType: FindOneSessionOptions;
      modelApiIdentifier: typeof modelApiIdentifier;
      defaultSelection: typeof DefaultSessionSelection;
      namespace: null;
      selectionType: AvailableSessionSelection;
      schemaType: Query["session"];
    }
};

/**
 * A manager for the session model with all the available operations for reading and writing to it.*/
export const SessionManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultSessionSelection,
  [
    {
      type: 'findOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultSessionSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: modelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      findByVariableName: 'id',
      defaultSelection: DefaultSessionSelection,
      namespace: null
    },
    {
      type: 'findMany',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultSessionSelection,
      namespace: null
    },
    {
      type: 'findFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultSessionSelection,
      namespace: null
    },
    {
      type: 'maybeFindFirst',
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultSessionSelection,
      namespace: null
    },
    {
      type: 'findOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'findById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultSessionSelection,
      namespace: null
    },
    {
      type: 'maybeFindOne',
      operationName: pluralModelApiIdentifier,
      functionName: 'maybeFindById',
      findByField: 'id',
      findByVariableName: 'id',
      modelApiIdentifier: modelApiIdentifier,
      defaultSelection: DefaultSessionSelection,
      namespace: null
    }
  ] as const
) as unknown as {
  // Gadget generates these model manager classes at runtime dynamically, which means there is no source code for the class. This is done to make the bundle size of the client as small as possible, avoiding a bunch of repeated source code in favour of one small builder function. The TypeScript types above document the exact interface of the constructed class.
  new(connection: GadgetConnection): SessionManager;
};