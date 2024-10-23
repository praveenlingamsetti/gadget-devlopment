"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DefaultEmailTemplates: function() {
        return _emailtemplates;
    },
    /**
 * @internal
 */ Globals: function() {
        return _globals.Globals;
    },
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
*/ InvalidRecordError: function() {
        return _apiclientcore.InvalidRecordError;
    },
    InvalidStateTransitionError: function() {
        return _errors.InvalidStateTransitionError;
    },
    ShopifyBulkOperationState: function() {
        return _shopify.ShopifyBulkOperationState;
    },
    ShopifySellingPlanGroupProductState: function() {
        return _shopify.ShopifySellingPlanGroupProductState;
    },
    ShopifySellingPlanGroupProductVariantState: function() {
        return _shopify.ShopifySellingPlanGroupProductVariantState;
    },
    ShopifyShopState: function() {
        return _shopify.ShopifyShopState;
    },
    ShopifySyncState: function() {
        return _shopify.ShopifySyncState;
    },
    abortSync: function() {
        return _shopify.abortSync;
    },
    actionContextLocalStorage: function() {
        return _globals.actionContextLocalStorage;
    },
    api: function() {
        return api;
    },
    connections: function() {
        return connections;
    },
    finishBulkOperation: function() {
        return _shopify.finishBulkOperation;
    },
    globalShopifySync: function() {
        return _shopify.globalShopifySync;
    },
    logger: function() {
        return logger;
    },
    preventCrossShopDataAccess: function() {
        return _shopify.preventCrossShopDataAccess;
    },
    setApiClient: function() {
        return setApiClient;
    },
    setConnections: function() {
        return setConnections;
    },
    setLogger: function() {
        return setLogger;
    },
    shopifySync: function() {
        return _shopify.shopifySync;
    }
});
const _apiclientcore = require("@gadgetinc/api-client-core");
_export_star(require("./metadataFileTypes"), exports);
_export_star(require("./AmbientContext"), exports);
_export_star(require("./AppConfigs"), exports);
_export_star(require("./AppConfiguration"), exports);
_export_star(require("./AppConnections"), exports);
_export_star(require("./auth"), exports);
const _emailtemplates = /*#__PURE__*/ _interop_require_wildcard(require("./email-templates"));
_export_star(require("./emails"), exports);
const _errors = require("./errors");
_export_star(require("./global-actions"), exports);
_export_star(require("./routes"), exports);
_export_star(require("./state-chart"), exports);
_export_star(require("./types"), exports);
_export_star(require("./ActionOptions"), exports);
_export_star(require("./effects"), exports);
_export_star(require("./utils"), exports);
_export_star(require("./ActionContextTypes"), exports);
const _shopify = require("./shopify");
const _globals = require(/**
 * @internal
 */ "./globals");
_export_star(require("./models/Session"), exports);
_export_star(require("./models/ShopifyShop"), exports);
_export_star(require("./models/ShopifyGdprRequest"), exports);
_export_star(require("./models/ShopifyProduct"), exports);
_export_star(require("./models/ShopifyProductVariant"), exports);
_export_star(require("./models/ShopifyInventoryItem"), exports);
_export_star(require("./models/ShopifyLocation"), exports);
_export_star(require("./models/ShopifyInventoryLevel"), exports);
_export_star(require("./models/ShopifyOrder"), exports);
_export_star(require("./models/ShopifyOrderLineItem"), exports);
_export_star(require("./models/ShopifySync"), exports);
_export_star(require("./models/DraftedProduct"), exports);
_export_star(require("./models/GadgetInfo"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
/**
* A map of connection name to instantiated connection objects for the app.
*/ let connections;
/**
 * An instance of the Gadget logger
 */ let logger;
/**
 * An instance of the Gadget API client that has admin permissions
 */ let api;
/**
* This is used internally to set the connections.
* @internal
*/ const setConnections = (appConnections)=>{
    connections = new Proxy(appConnections, {
        get: (target, prop)=>{
            const actionContext = _globals.actionContextLocalStorage.getStore();
            if (actionContext && actionContext.connections) {
                return actionContext.connections[prop];
            }
            const routeContext = _globals.Globals.requestContext.get("requestContext");
            if (routeContext && routeContext.connections) {
                return routeContext.connections[prop];
            }
            return target[prop];
        }
    });
};
/**
 * This is used internally to set the rootLogger.
 * @internal
 */ const setLogger = (rootLogger)=>{
    // set the internal facing global logger to be this instance, which is tagged with the platform source
    _globals.Globals.logger = rootLogger;
    // set the user-facing global logger to be this instance tagged with the user source, as users are importing this global and using it
    logger = rootLogger.child({
        source: "user"
    });
};
/**
 * This is used internally to set the client Instance
 * @internal
 */ const setApiClient = (client)=>{
    api = client;
};
