import { GadgetConnection } from "@gadgetinc/api-client-core";
import { buildGlobalAction } from "./../builder.js";

/** The inventory namespace */
export class InventoryNamespace {
  /** Executes the updateInventoryToZero global action. */
  updateInventoryToZero = buildGlobalAction(this, {
                       type: 'globalAction',
                       functionName: 'updateInventoryToZero',
                       operationName: 'updateInventoryToZero',
                       operationReturnType: 'InventoryUpdateInventoryToZero',
                       namespace: 'inventory',
                       variables: {}
                     } as const) as unknown as {
                     (): Promise<any>;
                     type: 'globalAction';
                     operationName: 'updateInventoryToZero';
                     operationReturnType: 'InventoryUpdateInventoryToZero';
                     namespace: 'inventory';
                     typesImports: [];
                     variables: {};
                     variablesType: Record<string, never>;
                   };

  connection: GadgetConnection;
  constructor(readonly clientOrParent: { connection: GadgetConnection }) {
    this.connection = this.clientOrParent.connection as GadgetConnection;

  }
}