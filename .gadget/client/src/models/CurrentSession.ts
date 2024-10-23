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
 export interface GetCurrentSessionOptions {
  /** Select fields other than the defaults of the record to return */
  select?: AvailableSessionSelection;
  /** Run a realtime query instead of running the query only once. Returns an AsyncIterator of new results when the result changes on the backend. */
  live?: boolean;
};

/**
 * A manager for the session model with all the available operations for reading and writing to it.*/
export type CurrentSessionManager = {
  readonly connection: GadgetConnection;

  get: {
      /**
       * Finds the current session for this client. Returns a `Promise` that resolves to the record if found and rejects the promise if the record isn't found.
       **/
      <Options extends GetCurrentSessionOptions>(options?: LimitToKnownKeys<Options, GetCurrentSessionOptions>): Promise<GadgetRecord<SelectedSessionOrDefault<Options>>>;
      type: 'get';
      operationName: 'currentSession';
      defaultSelection: typeof DefaultSessionSelection;
      modelApiIdentifier: typeof modelApiIdentifier;
      namespace: null;
      optionsType: GetCurrentSessionOptions;
      selectionType: AvailableSessionSelection;
      schemaType: Query["session"];
    }
};

/**
 * A manager for the session model with all the available operations for reading and writing to it.*/
export const CurrentSessionManager = buildModelManager(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultSessionSelection,
  [
    {
      type: 'get',
      operationName: 'currentSession',
      defaultSelection: DefaultSessionSelection,
      modelApiIdentifier: modelApiIdentifier,
      namespace: null
    }
  ] as const
) as unknown as {
  // Gadget generates these model manager classes at runtime dynamically, which means there is no source code for the class. This is done to make the bundle size of the client as small as possible, avoiding a bunch of repeated source code in favour of one small builder function. The TypeScript types above document the exact interface of the constructed class.
  new(connection: GadgetConnection): CurrentSessionManager;
};