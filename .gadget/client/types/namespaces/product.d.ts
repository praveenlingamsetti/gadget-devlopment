import { GadgetConnection } from "@gadgetinc/api-client-core";
/** The product namespace */
export declare class ProductNamespace {
    readonly clientOrParent: {
        connection: GadgetConnection;
    };
    /** Executes the getVariantsByproduct global action. */
    getVariantsByproduct: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "getVariantsByproduct";
        operationReturnType: "ProductGetVariantsByproduct";
        namespace: "product";
        typesImports: [];
        variables: {};
        variablesType: Record<string, never>;
    };
    /** Executes the readMetafieldByProduct global action. */
    readMetafieldByProduct: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "readMetafieldByProduct";
        operationReturnType: "ProductReadMetafieldByProduct";
        namespace: "product";
        typesImports: [];
        variables: {};
        variablesType: Record<string, never>;
    };
    /** Executes the readProductBySwatchId global action. */
    readProductBySwatchId: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "readProductBySwatchId";
        operationReturnType: "ProductReadProductBySwatchId";
        namespace: "product";
        typesImports: [];
        variables: {};
        variablesType: Record<string, never>;
    };
    /** Executes the updateProductStatus global action. */
    updateProductStatus: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "updateProductStatus";
        operationReturnType: "ProductUpdateProductStatus";
        namespace: "product";
        typesImports: [];
        variables: {};
        variablesType: Record<string, never>;
    };
    connection: GadgetConnection;
    constructor(clientOrParent: {
        connection: GadgetConnection;
    });
}
