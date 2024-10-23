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
var product_exports = {};
__export(product_exports, {
  ProductNamespace: () => ProductNamespace
});
module.exports = __toCommonJS(product_exports);
var import_builder = require("./../builder.js");
class ProductNamespace {
  constructor(clientOrParent) {
    this.clientOrParent = clientOrParent;
    /** Executes the getVariantsByproduct global action. */
    this.getVariantsByproduct = (0, import_builder.buildGlobalAction)(this, {
      type: "globalAction",
      functionName: "getVariantsByproduct",
      operationName: "getVariantsByproduct",
      operationReturnType: "ProductGetVariantsByproduct",
      namespace: "product",
      variables: {}
    });
    /** Executes the readMetafieldByProduct global action. */
    this.readMetafieldByProduct = (0, import_builder.buildGlobalAction)(this, {
      type: "globalAction",
      functionName: "readMetafieldByProduct",
      operationName: "readMetafieldByProduct",
      operationReturnType: "ProductReadMetafieldByProduct",
      namespace: "product",
      variables: {}
    });
    /** Executes the readProductBySwatchId global action. */
    this.readProductBySwatchId = (0, import_builder.buildGlobalAction)(this, {
      type: "globalAction",
      functionName: "readProductBySwatchId",
      operationName: "readProductBySwatchId",
      operationReturnType: "ProductReadProductBySwatchId",
      namespace: "product",
      variables: {}
    });
    /** Executes the updateProductStatus global action. */
    this.updateProductStatus = (0, import_builder.buildGlobalAction)(this, {
      type: "globalAction",
      functionName: "updateProductStatus",
      operationName: "updateProductStatus",
      operationReturnType: "ProductUpdateProductStatus",
      namespace: "product",
      variables: {}
    });
    this.connection = this.clientOrParent.connection;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ProductNamespace
});
//# sourceMappingURL=product.js.map
