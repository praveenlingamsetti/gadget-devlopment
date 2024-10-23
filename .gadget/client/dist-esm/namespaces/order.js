import { buildGlobalAction } from "./../builder.js";
class OrderNamespace {
  constructor(clientOrParent) {
    this.clientOrParent = clientOrParent;
    /** Executes the readOrderLineItems global action. */
    this.readOrderLineItems = buildGlobalAction(this, {
      type: "globalAction",
      functionName: "readOrderLineItems",
      operationName: "readOrderLineItems",
      operationReturnType: "OrderReadOrderLineItems",
      namespace: "order",
      variables: {}
    });
    this.connection = this.clientOrParent.connection;
  }
}
export {
  OrderNamespace
};
//# sourceMappingURL=order.js.map
