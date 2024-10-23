import { buildGlobalAction } from "./../builder.js";
class InventoryNamespace {
  constructor(clientOrParent) {
    this.clientOrParent = clientOrParent;
    /** Executes the updateInventoryToZero global action. */
    this.updateInventoryToZero = buildGlobalAction(this, {
      type: "globalAction",
      functionName: "updateInventoryToZero",
      operationName: "updateInventoryToZero",
      operationReturnType: "InventoryUpdateInventoryToZero",
      namespace: "inventory",
      variables: {}
    });
    this.connection = this.clientOrParent.connection;
  }
}
export {
  InventoryNamespace
};
//# sourceMappingURL=inventory.js.map
