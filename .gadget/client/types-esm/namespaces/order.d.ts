import { GadgetConnection } from "@gadgetinc/api-client-core";
/** The order namespace */
export declare class OrderNamespace {
    readonly clientOrParent: {
        connection: GadgetConnection;
    };
    /** Executes the readOrderLineItems global action. */
    readOrderLineItems: {
        (): Promise<any>;
        type: "globalAction";
        operationName: "readOrderLineItems";
        operationReturnType: "OrderReadOrderLineItems";
        namespace: "order";
        typesImports: [];
        variables: {};
        variablesType: Record<string, never>;
    };
    connection: GadgetConnection;
    constructor(clientOrParent: {
        connection: GadgetConnection;
    });
}
