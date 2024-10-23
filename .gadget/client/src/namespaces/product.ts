import { GadgetConnection } from "@gadgetinc/api-client-core";
import { buildGlobalAction } from "./../builder.js";

/** The product namespace */
export class ProductNamespace {
  /** Executes the getVariantsByproduct global action. */
  getVariantsByproduct = buildGlobalAction(this, {
                       type: 'globalAction',
                       functionName: 'getVariantsByproduct',
                       operationName: 'getVariantsByproduct',
                       operationReturnType: 'ProductGetVariantsByproduct',
                       namespace: 'product',
                       variables: {}
                     } as const) as unknown as {
                     (): Promise<any>;
                     type: 'globalAction';
                     operationName: 'getVariantsByproduct';
                     operationReturnType: 'ProductGetVariantsByproduct';
                     namespace: 'product';
                     typesImports: [];
                     variables: {};
                     variablesType: Record<string, never>;
                   };
  /** Executes the readMetafieldByProduct global action. */
  readMetafieldByProduct = buildGlobalAction(this, {
                       type: 'globalAction',
                       functionName: 'readMetafieldByProduct',
                       operationName: 'readMetafieldByProduct',
                       operationReturnType: 'ProductReadMetafieldByProduct',
                       namespace: 'product',
                       variables: {}
                     } as const) as unknown as {
                     (): Promise<any>;
                     type: 'globalAction';
                     operationName: 'readMetafieldByProduct';
                     operationReturnType: 'ProductReadMetafieldByProduct';
                     namespace: 'product';
                     typesImports: [];
                     variables: {};
                     variablesType: Record<string, never>;
                   };
  /** Executes the readProductBySwatchId global action. */
  readProductBySwatchId = buildGlobalAction(this, {
                       type: 'globalAction',
                       functionName: 'readProductBySwatchId',
                       operationName: 'readProductBySwatchId',
                       operationReturnType: 'ProductReadProductBySwatchId',
                       namespace: 'product',
                       variables: {}
                     } as const) as unknown as {
                     (): Promise<any>;
                     type: 'globalAction';
                     operationName: 'readProductBySwatchId';
                     operationReturnType: 'ProductReadProductBySwatchId';
                     namespace: 'product';
                     typesImports: [];
                     variables: {};
                     variablesType: Record<string, never>;
                   };
  /** Executes the updateProductStatus global action. */
  updateProductStatus = buildGlobalAction(this, {
                       type: 'globalAction',
                       functionName: 'updateProductStatus',
                       operationName: 'updateProductStatus',
                       operationReturnType: 'ProductUpdateProductStatus',
                       namespace: 'product',
                       variables: {}
                     } as const) as unknown as {
                     (): Promise<any>;
                     type: 'globalAction';
                     operationName: 'updateProductStatus';
                     operationReturnType: 'ProductUpdateProductStatus';
                     namespace: 'product';
                     typesImports: [];
                     variables: {};
                     variablesType: Record<string, never>;
                   };

  connection: GadgetConnection;
  constructor(readonly clientOrParent: { connection: GadgetConnection }) {
    this.connection = this.clientOrParent.connection as GadgetConnection;

  }
}