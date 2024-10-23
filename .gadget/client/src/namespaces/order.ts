import { GadgetConnection } from "@gadgetinc/api-client-core";
import { buildGlobalAction } from "./../builder.js";

/** The order namespace */
export class OrderNamespace {
  /** Executes the readOrderLineItems global action. */
  readOrderLineItems = buildGlobalAction(this, {
                       type: 'globalAction',
                       functionName: 'readOrderLineItems',
                       operationName: 'readOrderLineItems',
                       operationReturnType: 'OrderReadOrderLineItems',
                       namespace: 'order',
                       variables: {}
                     } as const) as unknown as {
                     (): Promise<any>;
                     type: 'globalAction';
                     operationName: 'readOrderLineItems';
                     operationReturnType: 'OrderReadOrderLineItems';
                     namespace: 'order';
                     typesImports: [];
                     variables: {};
                     variablesType: Record<string, never>;
                   };

  connection: GadgetConnection;
  constructor(readonly clientOrParent: { connection: GadgetConnection }) {
    this.connection = this.clientOrParent.connection as GadgetConnection;

  }
}