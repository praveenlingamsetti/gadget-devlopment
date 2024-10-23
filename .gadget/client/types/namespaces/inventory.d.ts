import { GadgetConnection } from "@gadgetinc/api-client-core";
/** The inventory namespace */
export declare class InventoryNamespace {
    readonly clientOrParent: {
        connection: GadgetConnection;
    };
    /** Executes the updateInventoryToZero global action. */
    updateInventoryToZero: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "updateInventoryToZero";
        operationReturnType: "InventoryUpdateInventoryToZero";
        namespace: "inventory";
        typesImports: [];
        variables: {};
        variablesType: Record<string, never>;
    };
    connection: GadgetConnection;
    constructor(clientOrParent: {
        connection: GadgetConnection;
    });
}
