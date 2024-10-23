    import type { GadgetRecord } from "@gadgetinc/api-client-core";
    import Shopify from "shopify-api-node";


    export type ShopifyConnectionConfiguration = {
      /**
      * The array of scopes configured for this connection and what Shopify will prompt the user to grant.
      * If the shop records `grantedScopes` value doesn't include all these scopes, a new OAuth grant should be requested.
      */
      requiredScopes: string[]
    };

    export interface ShopifyConnection {
        /**
        * ID of the shop set up as the current in-context tenant for this context
        */
        currentShopId?: bigint;
        /**
        /**
        * Domain of the shop set up as the current in-context tenant for this context
        */
        currentShopDomain?: string;
        /**
        * The client id of the Shopify app that the current in-context shop installed
        */
        currentClientId?: string;
        /**
        * The client secret of the Shopify app that the current in-context shop installed
        */
        currentClientSecret?: string;
        /**
        * Shopify client for the current in context shop or record
        * @type {Shopify | undefined}
        */
        current?: Shopify;
        /**
        * Configuration of the shopify connection
        **/
        configuration: ShopifyConnectionConfiguration;
        /**
        * The Shopify session that is making the current request
        */
        currentSession?: {
            token: string;
            userId?: string;
        }
        /**
        * @param {GadgetRecord<{ myshopifyDomain: string; accessToken: string; }>} shop - A shopify shop record
        * @returns {Shopify} Shopify Client for the given shop
        */
        forShop: (shop: GadgetRecord<{ myshopifyDomain: string; accessToken: string; }>) => Shopify;
        /**
        * @param {bigint} shopId Shop ID from the Shop model
        * @returns {Promise<Shopify>} Promise which resolves to a Shopify Client
        */
        forShopId: (shopId: bigint | string) => Promise<Shopify>;
        /**
        * @param {string} shopDomain The Shopify domain
        * @returns {Promise<Shopify>} Promise which resolves to a Shopify Client
        */
        forShopDomain: (shopDomain: string) => Promise<Shopify>;
        /**
        * @param {bigint} shopId to set for the current context
        * @returns {Promise<void>} Resolves when the shop context has been updated
        **/
        setCurrentShop: (shopId: bigint | string) => Promise<void>;
        /**
        * API keys (also known as Client keys) for all connected Shopify apps
        */
        apiKeys: string[];
        /**
        * All Shopify models currently enabled on the application.
        */
        enabledModels: {
            modelKey: string;
            apiIdentifier: string;
            syncOnly: boolean;
        }[];
    };


 


/**
 * A map from connection name to instantiated connection object for all the connections in i-was-a-sare-development
 */
export interface AppConnections {
  /** An instantiated API client object for the Shopify connection. */
  "shopify": ShopifyConnection;
};

