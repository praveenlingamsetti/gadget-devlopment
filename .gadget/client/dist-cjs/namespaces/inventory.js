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
var inventory_exports = {};
__export(inventory_exports, {
  InventoryNamespace: () => InventoryNamespace
});
module.exports = __toCommonJS(inventory_exports);
var import_builder = require("./../builder.js");
class InventoryNamespace {
  constructor(clientOrParent) {
    this.clientOrParent = clientOrParent;
    /** Executes the updateInventoryToZero global action. */
    this.updateInventoryToZero = (0, import_builder.buildGlobalAction)(this, {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  InventoryNamespace
});
//# sourceMappingURL=inventory.js.map
