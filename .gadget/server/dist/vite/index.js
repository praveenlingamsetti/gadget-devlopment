"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "gadget", {
    enumerable: true,
    get: function() {
        return gadget;
    }
});
const _helpers = require("./helpers");
/**
 * Vite plugin that is used to configure the Vite build process for the Gadget application.
 */ const gadget = (options)=>{
    return {
        name: "gadget-vite-plugin",
        config: async (config, env)=>{
            return await (0, _helpers.getViteConfig)(config, env, {
                plugin: options,
                params: {
                    assetsBucketDomain: "app-assets.gadget.dev",
                    applicationId: "178013",
                    productionEnvironmentId: "356804",
                    developmentEnvironmentVariables: {
                        "GADGET_APP": "i-was-a-sare-development",
                        "GADGET_ENV": "development",
                        "GADGET_PUBLIC_APP_SLUG": "i-was-a-sare-development",
                        "GADGET_PUBLIC_APP_ENV": "development"
                    },
                    productionEnvironmentVariables: {
                        "GADGET_APP": "i-was-a-sare-development",
                        "GADGET_ENV": "production",
                        "GADGET_PUBLIC_APP_SLUG": "i-was-a-sare-development",
                        "GADGET_PUBLIC_APP_ENV": "production"
                    }
                }
            });
        },
        transformIndexHtml: {
            order: "pre",
            handler: (html, { server })=>{
                const tags = (0, _helpers.getHtmlTags)({
                    hasAppBridgeV4: true,
                    hasBigCommerceConnection: false,
                    assetsDomain: "assets.gadget.dev"
                }, !!server);
                return tags;
            }
        }
    };
};
