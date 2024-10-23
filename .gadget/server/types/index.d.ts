/**
* This is the Gadget server side types library for:
*
*   _                                                                       _                _                                  _   
*  (_)    __      ____ _ ___        __ _       ___  __ _ _ __ ___        __| | _____   _____| | ___  _ __  _ __ ___   ___ _ __ | |_ 
*  | |____\ \ /\ / / _` / __|_____ / _` |_____/ __|/ _` | '__/ _ \_____ / _` |/ _ \ \ / / _ \ |/ _ \| '_ \| '_ ` _ \ / _ \ '_ \| __|
*  | |_____\ V  V / (_| \__ \_____| (_| |_____\__ \ (_| | | |  __/_____| (_| |  __/\ V /  __/ | (_) | |_) | | | | | |  __/ | | | |_ 
*  |_|      \_/\_/ \__,_|___/      \__,_|     |___/\__,_|_|  \___|      \__,_|\___| \_/ \___|_|\___/| .__/|_| |_| |_|\___|_| |_|\__|
*                                                                                                   |_|                             
*
* Built for environment `Development` at version 56
* Framework version: ^1.3.0
* Edit this app here: https://i-was-a-sare-development.gadget.dev/edit
*/ import type { Client } from "@gadget-client/i-was-a-sare-development";
import { Logger } from "./AmbientContext";
export { InvalidRecordError } from '@gadgetinc/api-client-core';
export * from "./metadataFileTypes";
export * from "./AmbientContext";
export * from "./AppConfigs";
export * from "./AppConfiguration";
export * from "./AppConnections";
import { AppConnections } from "./AppConnections";
export * from "./auth";
export * as DefaultEmailTemplates from "./email-templates";
export * from "./emails";
export { InvalidStateTransitionError } from "./errors";
export * from "./global-actions";
export * from "./routes";
export * from "./state-chart";
export * from "./types";
export * from "./ActionOptions";
export * from "./effects";
export * from "./utils";
import type { RouteContext } from "./routes";
export * from "./ActionContextTypes";
export { preventCrossShopDataAccess, ShopifyBulkOperationState, ShopifySellingPlanGroupProductState, ShopifySellingPlanGroupProductVariantState, ShopifyShopState, ShopifySyncState, abortSync, finishBulkOperation, globalShopifySync, shopifySync } from "./shopify";
/**
 * @internal
 */ import { Globals, actionContextLocalStorage } from "./globals";
export * from "./models/Session";
export * from "./models/ShopifyShop";
export * from "./models/ShopifyGdprRequest";
export * from "./models/ShopifyProduct";
export * from "./models/ShopifyProductVariant";
export * from "./models/ShopifyInventoryItem";
export * from "./models/ShopifyLocation";
export * from "./models/ShopifyInventoryLevel";
export * from "./models/ShopifyOrder";
export * from "./models/ShopifyOrderLineItem";
export * from "./models/ShopifySync";
export * from "./models/DraftedProduct";
export * from "./models/GadgetInfo";
/**
* A map of connection name to instantiated connection objects for the app.
*/ declare let connections: AppConnections;
/**
 * An instance of the Gadget logger
 */ declare let logger: Logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */ declare let api: Client;
/**
* This is used internally to set the connections.
* @internal
*/ export declare const setConnections: (appConnections: AppConnections) => any;
/**
 * This is used internally to set the rootLogger.
 * @internal
 */ export declare const setLogger: (rootLogger: Logger) => any;
/**
 * This is used internally to set the client Instance
 * @internal
 */ export declare const setApiClient: (client: Client) => any;
export { api, logger, connections };
/**
 * @internal
 */ export { Globals, actionContextLocalStorage };
