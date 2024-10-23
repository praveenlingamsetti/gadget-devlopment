/**
* This is the Gadget API client library for:
*
*   _                                                                       _                _                                  _   
*  (_)    __      ____ _ ___        __ _       ___  __ _ _ __ ___        __| | _____   _____| | ___  _ __  _ __ ___   ___ _ __ | |_ 
*  | |____\ \ /\ / / _` / __|_____ / _` |_____/ __|/ _` | '__/ _ \_____ / _` |/ _ \ \ / / _ \ |/ _ \| '_ \| '_ ` _ \ / _ \ '_ \| __|
*  | |_____\ V  V / (_| \__ \_____| (_| |_____\__ \ (_| | | |  __/_____| (_| |  __/\ V /  __/ | (_) | |_) | | | | | |  __/ | | | |_ 
*  |_|      \_/\_/ \__,_|___/      \__,_|     |___/\__,_|_|  \___|      \__,_|\___| \_/ \___|_|\___/| .__/|_| |_| |_|\___|_| |_|\__|
*                                                                                                   |_|                             
*
* Built for environment "Development" at version 56
* API docs: https://docs.gadget.dev/api/i-was-a-sare-development
* Edit this app here: https://i-was-a-sare-development.gadget.app/edit
*/
export {
  BrowserSessionStorageType, GadgetClientError, GadgetConnection, GadgetInternalError, GadgetOperationError, GadgetRecord,
  GadgetRecordList, GadgetValidationError, InvalidRecordError
} from "@gadgetinc/api-client-core";

export type { AuthenticationModeOptions, BrowserSessionAuthenticationModeOptions, ClientOptions, InvalidFieldError, Select } from "@gadgetinc/api-client-core";

export * from "./Client.js";
export * from "./types.js";

declare global {
  interface Window {
    gadgetConfig: {
      apiKeys: {
        shopify: string;
      };
      environment: string;
      env: Record<string, any>;
      authentication?: {
        signInPath: string;
        redirectOnSuccessfulSignInPath: string;
      }
    };
  }
}
