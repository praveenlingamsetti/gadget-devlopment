import { buildGlobalAction } from "./../builder.js";
class ProductNamespace {
  constructor(clientOrParent) {
    this.clientOrParent = clientOrParent;
    /** Executes the getVariantsByproduct global action. */
    this.getVariantsByproduct = buildGlobalAction(this, {
      type: "globalAction",
      functionName: "getVariantsByproduct",
      operationName: "getVariantsByproduct",
      operationReturnType: "ProductGetVariantsByproduct",
      namespace: "product",
      variables: {}
    });
    /** Executes the readMetafieldByProduct global action. */
    this.readMetafieldByProduct = buildGlobalAction(this, {
      type: "globalAction",
      functionName: "readMetafieldByProduct",
      operationName: "readMetafieldByProduct",
      operationReturnType: "ProductReadMetafieldByProduct",
      namespace: "product",
      variables: {}
    });
    /** Executes the readProductBySwatchId global action. */
    this.readProductBySwatchId = buildGlobalAction(this, {
      type: "globalAction",
      functionName: "readProductBySwatchId",
      operationName: "readProductBySwatchId",
      operationReturnType: "ProductReadProductBySwatchId",
      namespace: "product",
      variables: {}
    });
    /** Executes the updateProductStatus global action. */
    this.updateProductStatus = buildGlobalAction(this, {
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
export {
  ProductNamespace
};
//# sourceMappingURL=product.js.map
