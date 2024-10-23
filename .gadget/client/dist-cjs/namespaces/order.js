"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var order_exports = {};
__export(order_exports, {
  OrderNamespace: () => OrderNamespace
});
module.exports = __toCommonJS(order_exports);
var import_builder = require("./../builder.js");
class OrderNamespace {
  constructor(clientOrParent) {
    this.clientOrParent = clientOrParent;
    /** Executes the readOrderLineItems global action. */
    this.readOrderLineItems = (0, import_builder.buildGlobalAction)(this, {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  OrderNamespace
});
//# sourceMappingURL=order.js.map
