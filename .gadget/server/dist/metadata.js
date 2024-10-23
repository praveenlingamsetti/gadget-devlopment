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
    frameworkVersion: function() {
        return frameworkVersion;
    },
    modelListIndex: function() {
        return modelListIndex;
    },
    modelsMap: function() {
        return modelsMap;
    }
});
/**
 * Internal variable to indicate the framework version this package is built with.
 * @internal
 */ const frameworkVersion = "^1.3.0";
/**
 * Internal variable to store model blobs with GraphQL typename as the key, and use them in the action code functions.
 * @internal
 */ const modelsMap = {
    "Session": {
        "key": "EC9vNqnP-L8A",
        "name": "Session",
        "apiIdentifier": "session",
        "namespace": [],
        "fields": {
            "EC9vNqnP-L8A-system-id": {
                "fieldType": "ID",
                "key": "EC9vNqnP-L8A-system-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "yZZL0Lx5vN9v",
                    "createdDate": "2024-10-23T04:28:59.857Z"
                },
                "internalWritable": true
            },
            "EC9vNqnP-L8A-system-createdAt": {
                "fieldType": "DateTime",
                "key": "EC9vNqnP-L8A-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "b8dGWYY3XQJ1",
                    "createdDate": "2024-10-23T04:28:59.857Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "EC9vNqnP-L8A-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "EC9vNqnP-L8A-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "TcVFcSOhoGZA",
                    "createdDate": "2024-10-23T04:28:59.858Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "LVAU230otq_k": {
                "fieldType": "RoleAssignments",
                "key": "LVAU230otq_k",
                "name": "Roles",
                "apiIdentifier": "roles",
                "configuration": {
                    "type": "RoleAssignmentsConfig",
                    "key": "XyhKxsbclgrf",
                    "createdDate": "2024-10-23T04:28:59.865Z",
                    "default": [
                        "unauthenticated"
                    ]
                },
                "internalWritable": true
            },
            "Model-Field-Belongs-To-Shop": {
                "fieldType": "BelongsTo",
                "key": "Model-Field-Belongs-To-Shop",
                "name": "Shop",
                "apiIdentifier": "shop",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "_QrQdkw9zD4w",
                    "createdDate": "2024-10-23T04:35:13.588Z",
                    "relatedModelKey": "DataModel-Shopify-Shop",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "Model-Field-Shopify-SID": {
                "fieldType": "String",
                "key": "Model-Field-Shopify-SID",
                "name": "Shopify SID",
                "apiIdentifier": "shopifySID",
                "configuration": {
                    "type": "StringConfig",
                    "key": "NweRD8jB3Ar6",
                    "createdDate": "2024-10-23T04:35:13.591Z",
                    "default": null
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "Session",
        "stateChart": {
            "type": "StateChart",
            "key": "IWxmpKt0kOeo",
            "createdDate": 1729657739858,
            "actions": {},
            "transitions": {},
            "stateInActionCode": false,
            "childStates": []
        }
    },
    "ShopifyShop": {
        "key": "DataModel-Shopify-Shop",
        "name": "Shopify Shop",
        "apiIdentifier": "shopifyShop",
        "namespace": [],
        "fields": {
            "ModelField-DataModel-Shopify-Shop-id": {
                "fieldType": "ID",
                "key": "ModelField-DataModel-Shopify-Shop-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "xqJKODfBhfRf",
                    "createdDate": "2024-10-23T04:35:11.567Z"
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Shop-system-createdAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-Shop-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "tMBr0nGKOOan",
                    "createdDate": "2024-10-23T04:35:11.567Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Shop-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-Shop-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "8dyjvWMVVhD0",
                    "createdDate": "2024-10-23T04:35:11.568Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Shop-system-state": {
                "fieldType": "RecordState",
                "key": "DataModel-Shopify-Shop-system-state",
                "name": "State",
                "apiIdentifier": "state",
                "configuration": {
                    "type": "RecordStateConfig",
                    "key": "GJ07qi25tc4n",
                    "createdDate": "2024-10-23T04:35:11.569Z"
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-__gadget_graphql_shop_customer_accounts_v2": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Shop-__gadget_graphql_shop_customer_accounts_v2",
                "name": "Customer Accounts V2",
                "apiIdentifier": "customerAccountsV2",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "p5oQw62MVEtn",
                    "createdDate": "2024-10-23T04:35:11.570Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-transactional_sms_disabled": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-transactional_sms_disabled",
                "name": "Transactional SMS Disabled",
                "apiIdentifier": "transactionalSmsDisabled",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "b_DekMBDarlq",
                    "createdDate": "2024-10-23T04:35:11.570Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-address1": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-address1",
                "name": "Address 1",
                "apiIdentifier": "address1",
                "configuration": {
                    "type": "StringConfig",
                    "key": "kui2jfopSLgd",
                    "createdDate": "2024-10-23T04:35:11.571Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-address2": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-address2",
                "name": "Address 2",
                "apiIdentifier": "address2",
                "configuration": {
                    "type": "StringConfig",
                    "key": "pVo-KAns-qBo",
                    "createdDate": "2024-10-23T04:35:11.571Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-marketing_sms_consent_enabled_at_checkout": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-marketing_sms_consent_enabled_at_checkout",
                "name": "Marketing SMS Content Enabled at Checkout",
                "apiIdentifier": "marketingSmsContentEnabledAtCheckout",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "6FsYLtOoqVE3",
                    "createdDate": "2024-10-23T04:35:11.571Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-checkout_api_supported": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-checkout_api_supported",
                "name": "Checkout API Supported",
                "apiIdentifier": "checkoutApiSupported",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "eXICAivulxh8",
                    "createdDate": "2024-10-23T04:35:11.572Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-city": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-city",
                "name": "City",
                "apiIdentifier": "city",
                "configuration": {
                    "type": "StringConfig",
                    "key": "tqqJqi-YHJHO",
                    "createdDate": "2024-10-23T04:35:11.572Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-cookie_consent_level": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-cookie_consent_level",
                "name": "Cookie Consent Level",
                "apiIdentifier": "cookieConsentLevel",
                "configuration": {
                    "type": "StringConfig",
                    "key": "JXrK-FX0O7gv",
                    "createdDate": "2024-10-23T04:35:11.572Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-country": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-country",
                "name": "Country",
                "apiIdentifier": "country",
                "configuration": {
                    "type": "StringConfig",
                    "key": "UFXfT3PI9dm-",
                    "createdDate": "2024-10-23T04:35:11.572Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-country_code": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-country_code",
                "name": "Country Code",
                "apiIdentifier": "countryCode",
                "configuration": {
                    "type": "StringConfig",
                    "key": "urikERFENYl6",
                    "createdDate": "2024-10-23T04:35:11.573Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-country_name": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-country_name",
                "name": "Country Name",
                "apiIdentifier": "countryName",
                "configuration": {
                    "type": "StringConfig",
                    "key": "93ARya8uu0V1",
                    "createdDate": "2024-10-23T04:35:11.573Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-county_taxes": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Shop-county_taxes",
                "name": "County Taxes",
                "apiIdentifier": "countyTaxes",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "6sKyI2yaXJgy",
                    "createdDate": "2024-10-23T04:35:11.574Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-currency": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-currency",
                "name": "Currency",
                "apiIdentifier": "currency",
                "configuration": {
                    "type": "StringConfig",
                    "key": "SPqJ7bSyO5rG",
                    "createdDate": "2024-10-23T04:35:11.575Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-customer_email": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-customer_email",
                "name": "Customer Email",
                "apiIdentifier": "customerEmail",
                "configuration": {
                    "type": "StringConfig",
                    "key": "3Hr2t7pnq70J",
                    "createdDate": "2024-10-23T04:35:11.576Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-domain": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-domain",
                "name": "Domain",
                "apiIdentifier": "domain",
                "configuration": {
                    "type": "StringConfig",
                    "key": "bNamWotdKgil",
                    "createdDate": "2024-10-23T04:35:11.576Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-eligible_for_card_reader_giveaway": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-eligible_for_card_reader_giveaway",
                "name": "Eligible For Card Reader Giveaway",
                "apiIdentifier": "eligibleForCardReaderGiveaway",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "OukaxAMcobHf",
                    "createdDate": "2024-10-23T04:35:11.576Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-eligible_for_payments": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-eligible_for_payments",
                "name": "Eligible For Payments",
                "apiIdentifier": "eligibleForPayments",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "ckt_zM8IiZxy",
                    "createdDate": "2024-10-23T04:35:11.576Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-email": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-email",
                "name": "Email",
                "apiIdentifier": "email",
                "configuration": {
                    "type": "StringConfig",
                    "key": "25_IftEIK1Pa",
                    "createdDate": "2024-10-23T04:35:11.577Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-enabled_presentment_currencies": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Shop-enabled_presentment_currencies",
                "name": "Enabled Presentment Currencies",
                "apiIdentifier": "enabledPresentmentCurrencies",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "dpRStWXQG9wX",
                    "createdDate": "2024-10-23T04:35:11.577Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-finances": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-finances",
                "name": "Finances",
                "apiIdentifier": "finances",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "iCkcjPDLVCB4",
                    "createdDate": "2024-10-23T04:35:11.577Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-force_ssl": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-force_ssl",
                "name": "Force SSL",
                "apiIdentifier": "forceSsl",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "t_hEzS2R42Cq",
                    "createdDate": "2024-10-23T04:35:11.577Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-google_apps_domain": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-google_apps_domain",
                "name": "Google Apps Domain",
                "apiIdentifier": "googleAppsDomain",
                "configuration": {
                    "type": "StringConfig",
                    "key": "mI-7vEnCT9vD",
                    "createdDate": "2024-10-23T04:35:11.578Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-google_apps_login_enabled": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-google_apps_login_enabled",
                "name": "Google Apps Login Enabled",
                "apiIdentifier": "googleAppsLoginEnabled",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "mam4eXYP8304",
                    "createdDate": "2024-10-23T04:35:11.578Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-has_discounts": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-has_discounts",
                "name": "Has Discounts",
                "apiIdentifier": "hasDiscounts",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "bnGOdo0Ujct2",
                    "createdDate": "2024-10-23T04:35:11.578Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-has_gift_cards": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-has_gift_cards",
                "name": "Has Gift Cards",
                "apiIdentifier": "hasGiftCards",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "vBLdXYRVuCPY",
                    "createdDate": "2024-10-23T04:35:11.578Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-has_storefront": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-has_storefront",
                "name": "Has Storefront",
                "apiIdentifier": "hasStorefront",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "J8EBpEaRHQ0q",
                    "createdDate": "2024-10-23T04:35:11.579Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-iana_timezone": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-iana_timezone",
                "name": "Iana Timezone",
                "apiIdentifier": "ianaTimezone",
                "configuration": {
                    "type": "StringConfig",
                    "key": "uGNwjcGap-A6",
                    "createdDate": "2024-10-23T04:35:11.579Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-latitude": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-Shop-latitude",
                "name": "Latitude",
                "apiIdentifier": "latitude",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "sQr7V-gX5u8K",
                    "createdDate": "2024-10-23T04:35:11.579Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-longitude": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-Shop-longitude",
                "name": "Longitude",
                "apiIdentifier": "longitude",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "IOyhAkK0k-uo",
                    "createdDate": "2024-10-23T04:35:11.580Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-money_format": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-money_format",
                "name": "Money Format",
                "apiIdentifier": "moneyFormat",
                "configuration": {
                    "type": "StringConfig",
                    "key": "iE7a9Mt_JTkC",
                    "createdDate": "2024-10-23T04:35:11.580Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-money_in_emails_format": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-money_in_emails_format",
                "name": "Money In Emails Format",
                "apiIdentifier": "moneyInEmailsFormat",
                "configuration": {
                    "type": "StringConfig",
                    "key": "JOCDIS0i6UPw",
                    "createdDate": "2024-10-23T04:35:11.580Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-money_with_currency_format": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-money_with_currency_format",
                "name": "Money With Currency Format",
                "apiIdentifier": "moneyWithCurrencyFormat",
                "configuration": {
                    "type": "StringConfig",
                    "key": "E-V8MyywN-he",
                    "createdDate": "2024-10-23T04:35:11.582Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-money_with_currency_in_emails_format": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-money_with_currency_in_emails_format",
                "name": "Money With Currency In Emails Format",
                "apiIdentifier": "moneyWithCurrencyInEmailsFormat",
                "configuration": {
                    "type": "StringConfig",
                    "key": "Sj-CrwNso_66",
                    "createdDate": "2024-10-23T04:35:11.582Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-multi_location_enabled": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-multi_location_enabled",
                "name": "Multi Location Enabled",
                "apiIdentifier": "multiLocationEnabled",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "aFxLs2X_7Mio",
                    "createdDate": "2024-10-23T04:35:11.583Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-myshopify_domain": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-myshopify_domain",
                "name": "myshopify Domain",
                "apiIdentifier": "myshopifyDomain",
                "configuration": {
                    "type": "StringConfig",
                    "key": "84EJQ9-w5vFY",
                    "createdDate": "2024-10-23T04:35:11.583Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-name": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-name",
                "name": "Name",
                "apiIdentifier": "name",
                "configuration": {
                    "type": "StringConfig",
                    "key": "oWL5GiKWTnrs",
                    "createdDate": "2024-10-23T04:35:11.583Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-password_enabled": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-password_enabled",
                "name": "Password Enabled",
                "apiIdentifier": "passwordEnabled",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "Fk7e8nXW5DcX",
                    "createdDate": "2024-10-23T04:35:11.584Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-phone": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-phone",
                "name": "Phone",
                "apiIdentifier": "phone",
                "configuration": {
                    "type": "StringConfig",
                    "key": "Sx82AWTUHIzi",
                    "createdDate": "2024-10-23T04:35:11.584Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-plan_display_name": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-plan_display_name",
                "name": "Plan Display Name",
                "apiIdentifier": "planDisplayName",
                "configuration": {
                    "type": "StringConfig",
                    "key": "rU6NdoIs9dE3",
                    "createdDate": "2024-10-23T04:35:11.585Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-plan_name": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-plan_name",
                "name": "Plan Name",
                "apiIdentifier": "planName",
                "configuration": {
                    "type": "StringConfig",
                    "key": "g0PFsCAcWvnp",
                    "createdDate": "2024-10-23T04:35:11.585Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-pre_launch_enabled": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-pre_launch_enabled",
                "name": "Pre Launch Enabled",
                "apiIdentifier": "preLaunchEnabled",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "0-CFXIYe37wO",
                    "createdDate": "2024-10-23T04:35:11.586Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-primary_locale": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-primary_locale",
                "name": "Primary Locale",
                "apiIdentifier": "primaryLocale",
                "configuration": {
                    "type": "StringConfig",
                    "key": "5mNOIzdlq_St",
                    "createdDate": "2024-10-23T04:35:11.586Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-province": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-province",
                "name": "Province",
                "apiIdentifier": "province",
                "configuration": {
                    "type": "StringConfig",
                    "key": "HF-z8b2u02R6",
                    "createdDate": "2024-10-23T04:35:11.586Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-Shop-PrimaryLocation": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-Shop-PrimaryLocation",
                "name": "Primary Location",
                "apiIdentifier": "primaryLocation",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "XkA2Zsk25Fhy",
                    "createdDate": "2024-10-23T04:35:11.586Z",
                    "relatedModelKey": "DataModel-Shopify-Location",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-province_code": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-province_code",
                "name": "Province Code",
                "apiIdentifier": "provinceCode",
                "configuration": {
                    "type": "StringConfig",
                    "key": "EDYmvDq6Xyl9",
                    "createdDate": "2024-10-23T04:35:11.587Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-requires_extra_payments_agreement": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-requires_extra_payments_agreement",
                "name": "Requires Extra Payments Agreement",
                "apiIdentifier": "requiresExtraPaymentsAgreement",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "x_mQT7l6YXFC",
                    "createdDate": "2024-10-23T04:35:11.587Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-setup_required": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-setup_required",
                "name": "Setup Required",
                "apiIdentifier": "setupRequired",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "ATT1lUgJOgqu",
                    "createdDate": "2024-10-23T04:35:11.587Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-created_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Shop-created_at",
                "name": "Shopify Created At",
                "apiIdentifier": "shopifyCreatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "Lzd11Pxv2cQM",
                    "createdDate": "2024-10-23T04:35:11.588Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-shop_owner": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-shop_owner",
                "name": "Shop Owner",
                "apiIdentifier": "shopOwner",
                "configuration": {
                    "type": "StringConfig",
                    "key": "NWyqr88PZ3mq",
                    "createdDate": "2024-10-23T04:35:11.588Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-source": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-source",
                "name": "Source",
                "apiIdentifier": "source",
                "configuration": {
                    "type": "StringConfig",
                    "key": "AkMZEclNp_u5",
                    "createdDate": "2024-10-23T04:35:11.588Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-updated_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Shop-updated_at",
                "name": "Shopify Updated At",
                "apiIdentifier": "shopifyUpdatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "tDltgszq-tU0",
                    "createdDate": "2024-10-23T04:35:11.588Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-tax_shipping": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-tax_shipping",
                "name": "Tax Shipping",
                "apiIdentifier": "taxShipping",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "GPUwunPjcPVN",
                    "createdDate": "2024-10-23T04:35:11.589Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-taxes_included": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Shop-taxes_included",
                "name": "Taxes Included",
                "apiIdentifier": "taxesIncluded",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "jD6YHAv3szaT",
                    "createdDate": "2024-10-23T04:35:11.589Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-timezone": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-timezone",
                "name": "Timezone",
                "apiIdentifier": "timezone",
                "configuration": {
                    "type": "StringConfig",
                    "key": "Avmmr3wJwiwl",
                    "createdDate": "2024-10-23T04:35:11.589Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-weight_unit": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-weight_unit",
                "name": "Weight Unit",
                "apiIdentifier": "weightUnit",
                "configuration": {
                    "type": "StringConfig",
                    "key": "9GyoRj9tJDmN",
                    "createdDate": "2024-10-23T04:35:11.589Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-M70fqUXAsdA9": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Shop-M70fqUXAsdA9",
                "name": "Locations",
                "apiIdentifier": "locations",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "KvSI-dTvJWsU",
                    "createdDate": "2024-10-23T04:35:11.590Z",
                    "relatedModelKey": "DataModel-Shopify-Location",
                    "inverseFieldKey": "ModelField-Shopify-Location-Shop",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-tqQ1hP0SAB35": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Shop-tqQ1hP0SAB35",
                "name": "Inventory Items",
                "apiIdentifier": "inventoryItems",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "6gQ7TbySfSY7",
                    "createdDate": "2024-10-23T04:35:11.590Z",
                    "relatedModelKey": "DataModel-Shopify-InventoryItem",
                    "inverseFieldKey": "ModelField-Shopify-InventoryItem-Shop",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-yzOJ0M0TAa7m": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Shop-yzOJ0M0TAa7m",
                "name": "Inventory Levels",
                "apiIdentifier": "inventoryLevels",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "IU5kb0-2xlwH",
                    "createdDate": "2024-10-23T04:35:11.590Z",
                    "relatedModelKey": "DataModel-Shopify-InventoryLevel",
                    "inverseFieldKey": "ModelField-Shopify-InventoryLevel-Shop",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-zip": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-zip",
                "name": "ZIP Code",
                "apiIdentifier": "zipCode",
                "configuration": {
                    "type": "StringConfig",
                    "key": "OrKtOEaG4NoA",
                    "createdDate": "2024-10-23T04:35:11.590Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-UbmdC-YkI8Kf": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Shop-UbmdC-YkI8Kf",
                "name": "Orders",
                "apiIdentifier": "orders",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "_clbac7NW_7N",
                    "createdDate": "2024-10-23T04:35:11.591Z",
                    "relatedModelKey": "DataModel-Shopify-Order",
                    "inverseFieldKey": "ModelField-Shopify-Order-Shop",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-WPGkgpnYBGNw": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Shop-WPGkgpnYBGNw",
                "name": "Products",
                "apiIdentifier": "products",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "XUiVgIti9L4U",
                    "createdDate": "2024-10-23T04:35:11.591Z",
                    "relatedModelKey": "DataModel-Shopify-Product",
                    "inverseFieldKey": "ModelField-Shopify-Product-Shop",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-cDqDi_ZTTm1d": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Shop-cDqDi_ZTTm1d",
                "name": "Product Variants",
                "apiIdentifier": "productVariants",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "OGQyrf7fqiT1",
                    "createdDate": "2024-10-23T04:35:11.591Z",
                    "relatedModelKey": "DataModel-Shopify-ProductVariant",
                    "inverseFieldKey": "ModelField-Shopify-ProductVariant-Shop",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop--c7Q5McNqYKE": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Shop--c7Q5McNqYKE",
                "name": "Syncs",
                "apiIdentifier": "syncs",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "Novqk7ZytR4v",
                    "createdDate": "2024-10-23T04:35:11.592Z",
                    "relatedModelKey": "DataModel-Shopify-Sync",
                    "inverseFieldKey": "ModelField-Shopify-Sync-Shop",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-DgJnfxlc4agK": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Shop-DgJnfxlc4agK",
                "name": "Order Line Items",
                "apiIdentifier": "orderLineItems",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "d1vxflIFXRgC",
                    "createdDate": "2024-10-23T04:35:11.592Z",
                    "relatedModelKey": "DataModel-Shopify-OrderLineItem",
                    "inverseFieldKey": "ModelField-Shopify-OrderLineItem-Shop",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-reTOTZep9s8-": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Shop-reTOTZep9s8-",
                "name": "GDPR Requests",
                "apiIdentifier": "gdprRequests",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "ouanUKipkTZY",
                    "createdDate": "2024-10-23T04:35:11.593Z",
                    "relatedModelKey": "DataModel-Shopify-GdprRequest",
                    "inverseFieldKey": "ModelField-Shopify-GdprRequest-Shop",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-access_token": {
                "fieldType": "EncryptedString",
                "key": "ModelField-DataModel-Shopify-Shop-access_token",
                "name": "Access Token",
                "apiIdentifier": "accessToken",
                "configuration": {
                    "type": "EncryptedStringConfig",
                    "key": "Arsz0kjWsZcA",
                    "createdDate": "2024-10-23T04:35:11.594Z"
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-granted_scopes": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Shop-granted_scopes",
                "name": "Granted Scopes",
                "apiIdentifier": "grantedScopes",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "fv0NtlwFC-US",
                    "createdDate": "2024-10-23T04:35:11.593Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-registered_webhooks": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Shop-registered_webhooks",
                "name": "Registered Webhooks",
                "apiIdentifier": "registeredWebhooks",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "1FOwVRdlQGaW",
                    "createdDate": "2024-10-23T04:35:11.593Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-disabled_webhooks": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Shop-disabled_webhooks",
                "name": "Disabled Webhooks",
                "apiIdentifier": "disabledWebhooks",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "XLSKYFCfCq6l",
                    "createdDate": "2024-10-23T04:35:11.594Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Shop-installed_via_api_key": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Shop-installed_via_api_key",
                "name": "Installed Via API Key",
                "apiIdentifier": "installedViaApiKey",
                "configuration": {
                    "type": "StringConfig",
                    "key": "ifYQlIwgDAuF",
                    "createdDate": "2024-10-23T04:35:11.594Z",
                    "default": null
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "ShopifyShop",
        "stateChart": {
            "type": "StateChart",
            "key": "njZdKL1TlgMF",
            "createdDate": 1729658111536,
            "actions": {},
            "transitions": {},
            "stateInActionCode": true,
            "childStates": [
                {
                    "type": "State",
                    "key": "State-Shopify-Shop-Start",
                    "createdDate": 1729658111539,
                    "name": "Start",
                    "isRecordBirthPlace": true,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-Shop-Created",
                    "createdDate": 1729658111539,
                    "name": "Created",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [
                        {
                            "type": "State",
                            "key": "State-Shopify-Shop-Installed",
                            "createdDate": 1729658111550,
                            "name": "Installed",
                            "isRecordBirthPlace": false,
                            "isUndeleteableSystemState": false,
                            "restoreHistory": true,
                            "childStates": [],
                            "customApiIdentifier": null
                        },
                        {
                            "type": "State",
                            "key": "State-Shopify-Shop-Uninstalled",
                            "createdDate": 1729658111551,
                            "name": "Uninstalled",
                            "isRecordBirthPlace": false,
                            "isUndeleteableSystemState": false,
                            "restoreHistory": true,
                            "childStates": [],
                            "customApiIdentifier": null
                        }
                    ],
                    "initialChildState": "State-Shopify-Shop-Installed",
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-Shop-Deleted",
                    "createdDate": 1729658111539,
                    "name": "Deleted",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": false,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                }
            ],
            "initialChildState": "State-Shopify-Shop-Start"
        }
    },
    "ShopifyGdprRequest": {
        "key": "DataModel-Shopify-GdprRequest",
        "name": "Shopify GDPR Request",
        "apiIdentifier": "shopifyGdprRequest",
        "namespace": [],
        "fields": {
            "DataModel-Shopify-GdprRequest-system-id": {
                "fieldType": "ID",
                "key": "DataModel-Shopify-GdprRequest-system-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "oJmdR0BLfUq_",
                    "createdDate": "2024-10-23T04:35:11.974Z"
                },
                "internalWritable": true
            },
            "DataModel-Shopify-GdprRequest-system-createdAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-GdprRequest-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "qVoh78h1yF4Y",
                    "createdDate": "2024-10-23T04:35:11.975Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-GdprRequest-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-GdprRequest-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "mX_xeySQGhV5",
                    "createdDate": "2024-10-23T04:35:11.976Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-GdprRequest-Topic": {
                "fieldType": "Enum",
                "key": "ModelField-DataModel-Shopify-GdprRequest-Topic",
                "name": "Topic",
                "apiIdentifier": "topic",
                "configuration": {
                    "type": "EnumConfig",
                    "key": "OXyPqiwG4QXB",
                    "createdDate": "2024-10-23T04:35:11.977Z",
                    "allowMultiple": false,
                    "allowOther": false,
                    "options": [
                        {
                            "type": "EnumOption",
                            "key": "H9CNgJaoXmfh",
                            "createdDate": 1729658111977,
                            "name": "customers/data_request",
                            "color": "#FCFCFC"
                        },
                        {
                            "type": "EnumOption",
                            "key": "LNLBhZNa-MvZ",
                            "createdDate": 1729658111977,
                            "name": "customers/redact",
                            "color": "#FCFCFC"
                        },
                        {
                            "type": "EnumOption",
                            "key": "u5JrOkRW8J6Q",
                            "createdDate": 1729658111977,
                            "name": "shop/redact",
                            "color": "#FCFCFC"
                        }
                    ],
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-GdprRequest-Shop": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-GdprRequest-Shop",
                "name": "Shop",
                "apiIdentifier": "shop",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "cC7WW8tsv9T9",
                    "createdDate": "2024-10-23T04:35:11.976Z",
                    "relatedModelKey": "DataModel-Shopify-Shop",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-GdprRequest-Payload": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-GdprRequest-Payload",
                "name": "Payload",
                "apiIdentifier": "payload",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "T4Z0wlAEA5Y6",
                    "createdDate": "2024-10-23T04:35:11.978Z",
                    "default": null
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "ShopifyGdprRequest",
        "stateChart": {
            "type": "StateChart",
            "key": "mV5kvNjwG1ek",
            "createdDate": 1729658111924,
            "actions": {},
            "transitions": {},
            "stateInActionCode": true,
            "childStates": [
                {
                    "type": "State",
                    "key": "State-Shopify-GdprRequest-Start",
                    "createdDate": 1729658111925,
                    "name": "Start",
                    "isRecordBirthPlace": true,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-GdprRequest-Created",
                    "createdDate": 1729658111925,
                    "name": "Created",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-GdprRequest-Deleted",
                    "createdDate": 1729658111925,
                    "name": "Deleted",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": false,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                }
            ],
            "initialChildState": "State-Shopify-GdprRequest-Start"
        }
    },
    "ShopifyProduct": {
        "key": "DataModel-Shopify-Product",
        "name": "Shopify Product",
        "apiIdentifier": "shopifyProduct",
        "namespace": [],
        "fields": {
            "ModelField-DataModel-Shopify-Product-id": {
                "fieldType": "ID",
                "key": "ModelField-DataModel-Shopify-Product-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "95FTTLOJ9STB",
                    "createdDate": "2024-10-23T04:35:12.082Z"
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Product-system-createdAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-Product-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "oqendp3TI5vY",
                    "createdDate": "2024-10-23T04:35:12.083Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Product-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-Product-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "jdm0stPkpyr-",
                    "createdDate": "2024-10-23T04:35:12.083Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-__gadget_graphql_has_variants_that_requires_components": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Product-__gadget_graphql_has_variants_that_requires_components",
                "name": "Has Variants That Requires Components",
                "apiIdentifier": "hasVariantsThatRequiresComponents",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "IdYknN73POrd",
                    "createdDate": "2024-10-23T04:35:12.083Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-body_html": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Product-body_html",
                "name": "Body",
                "apiIdentifier": "body",
                "configuration": {
                    "type": "StringConfig",
                    "key": "nf6UeyT3rw9m",
                    "createdDate": "2024-10-23T04:35:12.084Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-handle": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Product-handle",
                "name": "Handle",
                "apiIdentifier": "handle",
                "configuration": {
                    "type": "StringConfig",
                    "key": "7tleZacmDdX-",
                    "createdDate": "2024-10-23T04:35:12.084Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-product_type": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Product-product_type",
                "name": "Product Type",
                "apiIdentifier": "productType",
                "configuration": {
                    "type": "StringConfig",
                    "key": "En_tgaildUpT",
                    "createdDate": "2024-10-23T04:35:12.084Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-created_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Product-created_at",
                "name": "Shopify Created At",
                "apiIdentifier": "shopifyCreatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "zadmcUImMojI",
                    "createdDate": "2024-10-23T04:35:12.085Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-published_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Product-published_at",
                "name": "Published At",
                "apiIdentifier": "publishedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "y4-z5TUnDOK5",
                    "createdDate": "2024-10-23T04:35:12.085Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-status": {
                "fieldType": "Enum",
                "key": "ModelField-DataModel-Shopify-Product-status",
                "name": "Status",
                "apiIdentifier": "status",
                "configuration": {
                    "type": "EnumConfig",
                    "key": "NomOjer5Faua",
                    "createdDate": "2024-10-23T04:35:12.085Z",
                    "allowMultiple": false,
                    "allowOther": false,
                    "options": [
                        {
                            "type": "EnumOption",
                            "key": "K4blOJHm1Mza",
                            "createdDate": 1729658112085,
                            "name": "active",
                            "color": "#FCFCFC"
                        },
                        {
                            "type": "EnumOption",
                            "key": "2s4wFe0P3A4s",
                            "createdDate": 1729658112085,
                            "name": "archived",
                            "color": "#FCFCFC"
                        },
                        {
                            "type": "EnumOption",
                            "key": "V2Y28a332d5u",
                            "createdDate": 1729658112085,
                            "name": "draft",
                            "color": "#FCFCFC"
                        }
                    ],
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-updated_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Product-updated_at",
                "name": "Shopify Updated At",
                "apiIdentifier": "shopifyUpdatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "XZZEL1Ysm2EY",
                    "createdDate": "2024-10-23T04:35:12.085Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-tags": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Product-tags",
                "name": "Tags",
                "apiIdentifier": "tags",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "Nlx4hHF40UZf",
                    "createdDate": "2024-10-23T04:35:12.086Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-template_suffix": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Product-template_suffix",
                "name": "Template Suffix",
                "apiIdentifier": "templateSuffix",
                "configuration": {
                    "type": "StringConfig",
                    "key": "X0xUANVtDX8z",
                    "createdDate": "2024-10-23T04:35:12.086Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-title": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Product-title",
                "name": "Title",
                "apiIdentifier": "title",
                "configuration": {
                    "type": "StringConfig",
                    "key": "enpUfhr59yw4",
                    "createdDate": "2024-10-23T04:35:12.086Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-vendor": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Product-vendor",
                "name": "Vendor",
                "apiIdentifier": "vendor",
                "configuration": {
                    "type": "StringConfig",
                    "key": "3q-7jjuZUYY8",
                    "createdDate": "2024-10-23T04:35:12.086Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-TaQqN21SWVYp": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Product-TaQqN21SWVYp",
                "name": "Order Line Items",
                "apiIdentifier": "orderLineItems",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "YvJsGjgbnomf",
                    "createdDate": "2024-10-23T04:35:12.087Z",
                    "relatedModelKey": "DataModel-Shopify-OrderLineItem",
                    "inverseFieldKey": "ModelField-Shopify-OrderLineItem-Product",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-__gadget_graphql_category": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Product-__gadget_graphql_category",
                "name": "Category",
                "apiIdentifier": "category",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "6A7Pcg8qm-B8",
                    "createdDate": "2024-10-23T04:35:12.087Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-__gadget_graphql_compare_at_price_range": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Product-__gadget_graphql_compare_at_price_range",
                "name": "Compare At Price Range",
                "apiIdentifier": "compareAtPriceRange",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "p40N_rlzjdN2",
                    "createdDate": "2024-10-23T04:35:12.087Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-__gadget_graphql_product_category": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Product-__gadget_graphql_product_category",
                "name": "Product Category",
                "apiIdentifier": "productCategory",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "PgoZZSAMVo2-",
                    "createdDate": "2024-10-23T04:35:12.087Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Product-variants": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Product-variants",
                "name": "Variants",
                "apiIdentifier": "variants",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "ZNH9BM8S-XOb",
                    "createdDate": "2024-10-23T04:35:12.087Z",
                    "relatedModelKey": "DataModel-Shopify-ProductVariant",
                    "inverseFieldKey": "ModelField-Shopify-ProductVariant-Product",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "delete",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-Shopify-Product-Shop": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-Product-Shop",
                "name": "Shop",
                "apiIdentifier": "shop",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "b6qQ109DuXaT",
                    "createdDate": "2024-10-23T04:35:12.088Z",
                    "relatedModelKey": "DataModel-Shopify-Shop",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "ShopifyProduct",
        "stateChart": {
            "type": "StateChart",
            "key": "YVC_i4EMCdOg",
            "createdDate": 1729658112056,
            "actions": {},
            "transitions": {},
            "stateInActionCode": true,
            "childStates": [
                {
                    "type": "State",
                    "key": "State-Shopify-Product-Start",
                    "createdDate": 1729658112057,
                    "name": "Start",
                    "isRecordBirthPlace": true,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-Product-Created",
                    "createdDate": 1729658112057,
                    "name": "Created",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-Product-Deleted",
                    "createdDate": 1729658112057,
                    "name": "Deleted",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": false,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                }
            ],
            "initialChildState": "State-Shopify-Product-Start"
        }
    },
    "ShopifyProductVariant": {
        "key": "DataModel-Shopify-ProductVariant",
        "name": "Shopify Product Variant",
        "apiIdentifier": "shopifyProductVariant",
        "namespace": [],
        "fields": {
            "ModelField-DataModel-Shopify-ProductVariant-id": {
                "fieldType": "ID",
                "key": "ModelField-DataModel-Shopify-ProductVariant-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "pseOgD1laoM7",
                    "createdDate": "2024-10-23T04:35:12.218Z"
                },
                "internalWritable": true
            },
            "DataModel-Shopify-ProductVariant-system-createdAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-ProductVariant-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "wajMbIm5HnXw",
                    "createdDate": "2024-10-23T04:35:12.218Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-ProductVariant-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-ProductVariant-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "jeDCypDwrdNj",
                    "createdDate": "2024-10-23T04:35:12.219Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-barcode": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-ProductVariant-barcode",
                "name": "Barcode",
                "apiIdentifier": "barcode",
                "configuration": {
                    "type": "StringConfig",
                    "key": "5TPnS4OPcc3G",
                    "createdDate": "2024-10-23T04:35:12.219Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-compare_at_price": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-ProductVariant-compare_at_price",
                "name": "Compare At Price",
                "apiIdentifier": "compareAtPrice",
                "configuration": {
                    "type": "StringConfig",
                    "key": "CKmg7wqJikLr",
                    "createdDate": "2024-10-23T04:35:12.219Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-ProductVariant-Product": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-ProductVariant-Product",
                "name": "Product",
                "apiIdentifier": "product",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "Mn7BfygK2py3",
                    "createdDate": "2024-10-23T04:35:12.219Z",
                    "relatedModelKey": "DataModel-Shopify-Product",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-inventory_policy": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-ProductVariant-inventory_policy",
                "name": "Inventory Policy",
                "apiIdentifier": "inventoryPolicy",
                "configuration": {
                    "type": "StringConfig",
                    "key": "F8crE_6copky",
                    "createdDate": "2024-10-23T04:35:12.220Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-inventory_quantity": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-ProductVariant-inventory_quantity",
                "name": "Inventory Quantity",
                "apiIdentifier": "inventoryQuantity",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "otN2exauShl5",
                    "createdDate": "2024-10-23T04:35:12.220Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-option1": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-ProductVariant-option1",
                "name": "Option 1",
                "apiIdentifier": "option1",
                "configuration": {
                    "type": "StringConfig",
                    "key": "NN9kgwDb3xO0",
                    "createdDate": "2024-10-23T04:35:12.220Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-ProductVariant-InventoryItem": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-ProductVariant-InventoryItem",
                "name": "Inventory Item",
                "apiIdentifier": "inventoryItem",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "cab7Kx3aaAgE",
                    "createdDate": "2024-10-23T04:35:12.220Z",
                    "relatedModelKey": "DataModel-Shopify-InventoryItem",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-__gadget_graphql_selected_options": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-ProductVariant-__gadget_graphql_selected_options",
                "name": "Selected Options",
                "apiIdentifier": "selectedOptions",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "98RaUKseSMTb",
                    "createdDate": "2024-10-23T04:35:12.221Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-option2": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-ProductVariant-option2",
                "name": "Option 2",
                "apiIdentifier": "option2",
                "configuration": {
                    "type": "StringConfig",
                    "key": "sLdrcCjU4wgP",
                    "createdDate": "2024-10-23T04:35:12.221Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-option3": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-ProductVariant-option3",
                "name": "Option 3",
                "apiIdentifier": "option3",
                "configuration": {
                    "type": "StringConfig",
                    "key": "P4S8dU3GkPA6",
                    "createdDate": "2024-10-23T04:35:12.221Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-position": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-ProductVariant-position",
                "name": "Position",
                "apiIdentifier": "position",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "XQvXtqUXli2g",
                    "createdDate": "2024-10-23T04:35:12.221Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-price": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-ProductVariant-price",
                "name": "Price",
                "apiIdentifier": "price",
                "configuration": {
                    "type": "StringConfig",
                    "key": "YpgeKbfHIQzE",
                    "createdDate": "2024-10-23T04:35:12.221Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-created_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-ProductVariant-created_at",
                "name": "Shopify Created At",
                "apiIdentifier": "shopifyCreatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "haVyJtlrFR_o",
                    "createdDate": "2024-10-23T04:35:12.222Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-sku": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-ProductVariant-sku",
                "name": "SKU",
                "apiIdentifier": "sku",
                "configuration": {
                    "type": "StringConfig",
                    "key": "YsAoai_SVNuv",
                    "createdDate": "2024-10-23T04:35:12.222Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-tax_code": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-ProductVariant-tax_code",
                "name": "Tax Code",
                "apiIdentifier": "taxCode",
                "configuration": {
                    "type": "StringConfig",
                    "key": "O627OQg-xp6k",
                    "createdDate": "2024-10-23T04:35:12.222Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-updated_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-ProductVariant-updated_at",
                "name": "Shopify Updated At",
                "apiIdentifier": "shopifyUpdatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "NtugfCv31kUR",
                    "createdDate": "2024-10-23T04:35:12.222Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-lbaCTCoOWaZ1": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-ProductVariant-lbaCTCoOWaZ1",
                "name": "Order Line Items",
                "apiIdentifier": "orderLineItems",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "aXgQE4uOzI4e",
                    "createdDate": "2024-10-23T04:35:12.223Z",
                    "relatedModelKey": "DataModel-Shopify-OrderLineItem",
                    "inverseFieldKey": "ModelField-Shopify-OrderLineItem-ProductVariant",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-presentment_prices": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-ProductVariant-presentment_prices",
                "name": "Presentment Prices",
                "apiIdentifier": "presentmentPrices",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "JjpvKLlky0BU",
                    "createdDate": "2024-10-23T04:35:12.223Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-taxable": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-ProductVariant-taxable",
                "name": "Taxable",
                "apiIdentifier": "taxable",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "S0YRViVvW4RF",
                    "createdDate": "2024-10-23T04:35:12.223Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-ProductVariant-title": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-ProductVariant-title",
                "name": "Title",
                "apiIdentifier": "title",
                "configuration": {
                    "type": "StringConfig",
                    "key": "kwDJcl20-qZS",
                    "createdDate": "2024-10-23T04:35:12.223Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-ProductVariant-Shop": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-ProductVariant-Shop",
                "name": "Shop",
                "apiIdentifier": "shop",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "haWD_XfnC5Bo",
                    "createdDate": "2024-10-23T04:35:12.224Z",
                    "relatedModelKey": "DataModel-Shopify-Shop",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "ShopifyProductVariant",
        "stateChart": {
            "type": "StateChart",
            "key": "TVqTrPqGkXH1",
            "createdDate": 1729658112190,
            "actions": {},
            "transitions": {},
            "stateInActionCode": true,
            "childStates": [
                {
                    "type": "State",
                    "key": "State-Shopify-ProductVariant-Start",
                    "createdDate": 1729658112192,
                    "name": "Start",
                    "isRecordBirthPlace": true,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-ProductVariant-Created",
                    "createdDate": 1729658112192,
                    "name": "Created",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-ProductVariant-Deleted",
                    "createdDate": 1729658112192,
                    "name": "Deleted",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": false,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                }
            ],
            "initialChildState": "State-Shopify-ProductVariant-Start"
        }
    },
    "ShopifyInventoryItem": {
        "key": "DataModel-Shopify-InventoryItem",
        "name": "Shopify Inventory Item",
        "apiIdentifier": "shopifyInventoryItem",
        "namespace": [],
        "fields": {
            "ModelField-DataModel-Shopify-InventoryItem-id": {
                "fieldType": "ID",
                "key": "ModelField-DataModel-Shopify-InventoryItem-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "VSH1786pcD1J",
                    "createdDate": "2024-10-23T04:35:12.366Z"
                },
                "internalWritable": true
            },
            "DataModel-Shopify-InventoryItem-system-createdAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-InventoryItem-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "otPpdijLeZ2B",
                    "createdDate": "2024-10-23T04:35:12.367Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-InventoryItem-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-InventoryItem-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "Tx8KpvN9gTnI",
                    "createdDate": "2024-10-23T04:35:12.367Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_inventory_item_measurement": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_inventory_item_measurement",
                "name": "Measurement",
                "apiIdentifier": "measurement",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "HZZJvOBqdxh9",
                    "createdDate": "2024-10-23T04:35:12.367Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_duplicate_sku_count": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_duplicate_sku_count",
                "name": "Duplicate Sku Count",
                "apiIdentifier": "duplicateSkuCount",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "gC7HgCje2X-v",
                    "createdDate": "2024-10-23T04:35:12.368Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_inventory_item_inventory_history_url": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_inventory_item_inventory_history_url",
                "name": "Inventory History Url",
                "apiIdentifier": "inventoryHistoryUrl",
                "configuration": {
                    "type": "StringConfig",
                    "key": "DLvyx4rREQNs",
                    "createdDate": "2024-10-23T04:35:12.368Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_inventory_item_legacy_resource_id": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_inventory_item_legacy_resource_id",
                "name": "Legacy Resource Id",
                "apiIdentifier": "legacyResourceId",
                "configuration": {
                    "type": "StringConfig",
                    "key": "ms825_zJqY_m",
                    "createdDate": "2024-10-23T04:35:12.368Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_inventory_item_tracked_editable": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_inventory_item_tracked_editable",
                "name": "Tracked Editable",
                "apiIdentifier": "trackedEditable",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "Vdxr-VwCxWD_",
                    "createdDate": "2024-10-23T04:35:12.368Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_inventory_item_unit_cost": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-InventoryItem-__gadget_graphql_inventory_item_unit_cost",
                "name": "Unit Cost",
                "apiIdentifier": "unitCost",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "BlF1J919-9QD",
                    "createdDate": "2024-10-23T04:35:12.369Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-cost": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-InventoryItem-cost",
                "name": "Cost",
                "apiIdentifier": "cost",
                "configuration": {
                    "type": "StringConfig",
                    "key": "isIvh3DiIzHQ",
                    "createdDate": "2024-10-23T04:35:12.369Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-country_code_of_origin": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-InventoryItem-country_code_of_origin",
                "name": "Country Code Of Origin",
                "apiIdentifier": "countryCodeOfOrigin",
                "configuration": {
                    "type": "StringConfig",
                    "key": "pKfVO_Ud4RMm",
                    "createdDate": "2024-10-23T04:35:12.369Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-country_harmonized_system_codes": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-InventoryItem-country_harmonized_system_codes",
                "name": "Country Harmonized System Codes",
                "apiIdentifier": "countryHarmonizedSystemCodes",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "wWTNhvZLOIsj",
                    "createdDate": "2024-10-23T04:35:12.369Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-0Vg6Vhfr2GEn": {
                "fieldType": "HasOne",
                "key": "ModelField-DataModel-Shopify-InventoryItem-0Vg6Vhfr2GEn",
                "name": "Product Variant",
                "apiIdentifier": "productVariant",
                "configuration": {
                    "type": "HasOneConfig",
                    "key": "-VzAnu-ZDAMt",
                    "createdDate": "2024-10-23T04:35:12.370Z",
                    "relatedModelKey": "DataModel-Shopify-ProductVariant",
                    "inverseFieldKey": "ModelField-Shopify-ProductVariant-InventoryItem",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore"
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-harmonized_system_code": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-InventoryItem-harmonized_system_code",
                "name": "Harmonized System Code",
                "apiIdentifier": "harmonizedSystemCode",
                "configuration": {
                    "type": "StringConfig",
                    "key": "CWp7jU48bNUR",
                    "createdDate": "2024-10-23T04:35:12.370Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-province_code_of_origin": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-InventoryItem-province_code_of_origin",
                "name": "Province Code Of Origin",
                "apiIdentifier": "provinceCodeOfOrigin",
                "configuration": {
                    "type": "StringConfig",
                    "key": "HFAajNZL7xbf",
                    "createdDate": "2024-10-23T04:35:12.370Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-InventoryItem-Locations": {
                "fieldType": "HasManyThrough",
                "key": "ModelField-Shopify-InventoryItem-Locations",
                "name": "Locations",
                "apiIdentifier": "locations",
                "configuration": {
                    "type": "HasManyThroughConfig",
                    "key": "-e4UzkxbUUVy",
                    "createdDate": "2024-10-23T04:35:12.370Z",
                    "relatedModelKey": "DataModel-Shopify-Location",
                    "joinModelKey": "DataModel-Shopify-InventoryLevel",
                    "inverseJoinModelFieldKey": "ModelField-Shopify-InventoryLevel-InventoryItem",
                    "inverseRelatedModelFieldKey": "ModelField-Shopify-InventoryLevel-Location",
                    "inverseFieldKey": "ModelField-Shopify-InventoryLocation-InventoryItems",
                    "relatedModelApiIdentifier": null,
                    "joinModelApiIdentifier": null,
                    "inverseJoinModelFieldApiIdentifier": null,
                    "inverseRelatedModelFieldApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore"
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-created_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-InventoryItem-created_at",
                "name": "Shopify Created At",
                "apiIdentifier": "shopifyCreatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "fLzWimwKrehg",
                    "createdDate": "2024-10-23T04:35:12.371Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-requires_shipping": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-InventoryItem-requires_shipping",
                "name": "Requires Shipping",
                "apiIdentifier": "requiresShipping",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "CQGlSsBqOGsG",
                    "createdDate": "2024-10-23T04:35:12.371Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-sku": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-InventoryItem-sku",
                "name": "SKU",
                "apiIdentifier": "sku",
                "configuration": {
                    "type": "StringConfig",
                    "key": "vlH_jlPj2rz1",
                    "createdDate": "2024-10-23T04:35:12.371Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-tracked": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-InventoryItem-tracked",
                "name": "Tracked",
                "apiIdentifier": "tracked",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "sfD4ocQi9E7I",
                    "createdDate": "2024-10-23T04:35:12.371Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryItem-updated_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-InventoryItem-updated_at",
                "name": "Shopify Updated At",
                "apiIdentifier": "shopifyUpdatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "9cHCfWeUH4H3",
                    "createdDate": "2024-10-23T04:35:12.371Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-InventoryItem-Shop": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-InventoryItem-Shop",
                "name": "Shop",
                "apiIdentifier": "shop",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "vb__yigysWbw",
                    "createdDate": "2024-10-23T04:35:12.372Z",
                    "relatedModelKey": "DataModel-Shopify-Shop",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "ShopifyInventoryItem",
        "stateChart": {
            "type": "StateChart",
            "key": "0koB7lJ-D6wp",
            "createdDate": 1729658112335,
            "actions": {},
            "transitions": {},
            "stateInActionCode": true,
            "childStates": [
                {
                    "type": "State",
                    "key": "State-Shopify-InventoryItem-Start",
                    "createdDate": 1729658112336,
                    "name": "Start",
                    "isRecordBirthPlace": true,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-InventoryItem-Created",
                    "createdDate": 1729658112336,
                    "name": "Created",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-InventoryItem-Deleted",
                    "createdDate": 1729658112336,
                    "name": "Deleted",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": false,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                }
            ],
            "initialChildState": "State-Shopify-InventoryItem-Start"
        }
    },
    "ShopifyLocation": {
        "key": "DataModel-Shopify-Location",
        "name": "Shopify Location",
        "apiIdentifier": "shopifyLocation",
        "namespace": [],
        "fields": {
            "ModelField-DataModel-Shopify-Location-id": {
                "fieldType": "ID",
                "key": "ModelField-DataModel-Shopify-Location-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "5SpoUH21bCET",
                    "createdDate": "2024-10-23T04:35:12.520Z"
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Location-system-createdAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-Location-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "qnYcTSujgWS8",
                    "createdDate": "2024-10-23T04:35:12.520Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Location-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-Location-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "tzBdmq2nAXhZ",
                    "createdDate": "2024-10-23T04:35:12.521Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-active": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Location-active",
                "name": "Active",
                "apiIdentifier": "active",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "qJoxL-hVlSJt",
                    "createdDate": "2024-10-23T04:35:12.521Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-address1": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-address1",
                "name": "Address 1",
                "apiIdentifier": "address1",
                "configuration": {
                    "type": "StringConfig",
                    "key": "-8knVyx47-yn",
                    "createdDate": "2024-10-23T04:35:12.521Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-address2": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-address2",
                "name": "Address 2",
                "apiIdentifier": "address2",
                "configuration": {
                    "type": "StringConfig",
                    "key": "-DfF37YkL9Ap",
                    "createdDate": "2024-10-23T04:35:12.521Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-city": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-city",
                "name": "City",
                "apiIdentifier": "city",
                "configuration": {
                    "type": "StringConfig",
                    "key": "v9T6Gkew7SfF",
                    "createdDate": "2024-10-23T04:35:12.522Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-country": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-country",
                "name": "Country",
                "apiIdentifier": "country",
                "configuration": {
                    "type": "StringConfig",
                    "key": "-vSxp8MDn6xI",
                    "createdDate": "2024-10-23T04:35:12.522Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-country_code": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-country_code",
                "name": "Country Code",
                "apiIdentifier": "countryCode",
                "configuration": {
                    "type": "StringConfig",
                    "key": "shMn7r852bWo",
                    "createdDate": "2024-10-23T04:35:12.522Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-legacy": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Location-legacy",
                "name": "Legacy",
                "apiIdentifier": "legacy",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "8jWd6boY0uwb",
                    "createdDate": "2024-10-23T04:35:12.523Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-InventoryLocation-InventoryItems": {
                "fieldType": "HasManyThrough",
                "key": "ModelField-Shopify-InventoryLocation-InventoryItems",
                "name": "Inventory Items",
                "apiIdentifier": "inventoryItems",
                "configuration": {
                    "type": "HasManyThroughConfig",
                    "key": "Sk2ZovaRITrE",
                    "createdDate": "2024-10-23T04:35:12.522Z",
                    "relatedModelKey": "DataModel-Shopify-InventoryItem",
                    "joinModelKey": "DataModel-Shopify-InventoryLevel",
                    "inverseJoinModelFieldKey": "ModelField-Shopify-InventoryLevel-Location",
                    "inverseRelatedModelFieldKey": "ModelField-Shopify-InventoryLevel-InventoryItem",
                    "inverseFieldKey": "ModelField-Shopify-InventoryItem-Locations",
                    "relatedModelApiIdentifier": null,
                    "joinModelApiIdentifier": null,
                    "inverseJoinModelFieldApiIdentifier": null,
                    "inverseRelatedModelFieldApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore"
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-localized_country_name": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-localized_country_name",
                "name": "Localized Country Name",
                "apiIdentifier": "localizedCountryName",
                "configuration": {
                    "type": "StringConfig",
                    "key": "fPaflk0-ycOF",
                    "createdDate": "2024-10-23T04:35:12.523Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-localized_province_name": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-localized_province_name",
                "name": "Localized Province Name",
                "apiIdentifier": "localizedProvinceName",
                "configuration": {
                    "type": "StringConfig",
                    "key": "31K3R2T30SlV",
                    "createdDate": "2024-10-23T04:35:12.523Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-name": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-name",
                "name": "Name",
                "apiIdentifier": "name",
                "configuration": {
                    "type": "StringConfig",
                    "key": "_CayEqpEXLuJ",
                    "createdDate": "2024-10-23T04:35:12.523Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-vZl60S8K4IR1": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Location-vZl60S8K4IR1",
                "name": "Orders",
                "apiIdentifier": "orders",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "TNwtBTxx0WDX",
                    "createdDate": "2024-10-23T04:35:12.523Z",
                    "relatedModelKey": "DataModel-Shopify-Order",
                    "inverseFieldKey": "ModelField-Shopify-Order-Location",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-joRfR6IDaJS9": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Location-joRfR6IDaJS9",
                "name": "Order Line Items",
                "apiIdentifier": "orderLineItems",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "tsqeeixjE_fa",
                    "createdDate": "2024-10-23T04:35:12.524Z",
                    "relatedModelKey": "DataModel-Shopify-OrderLineItem",
                    "inverseFieldKey": "ModelField-Shopify-OrderLineItem-Location",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "ignore",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-phone": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-phone",
                "name": "Phone",
                "apiIdentifier": "phone",
                "configuration": {
                    "type": "StringConfig",
                    "key": "P3Iba05OvUO6",
                    "createdDate": "2024-10-23T04:35:12.524Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-province": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-province",
                "name": "Province",
                "apiIdentifier": "province",
                "configuration": {
                    "type": "StringConfig",
                    "key": "mxp2FudJNkuN",
                    "createdDate": "2024-10-23T04:35:12.524Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-province_code": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-province_code",
                "name": "Province Code",
                "apiIdentifier": "provinceCode",
                "configuration": {
                    "type": "StringConfig",
                    "key": "k96HXZjxA_L6",
                    "createdDate": "2024-10-23T04:35:12.524Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-created_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Location-created_at",
                "name": "Shopify Created At",
                "apiIdentifier": "shopifyCreatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "ZsUQ4DYjIkEn",
                    "createdDate": "2024-10-23T04:35:12.527Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-updated_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Location-updated_at",
                "name": "Shopify Updated At",
                "apiIdentifier": "shopifyUpdatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "MfTRGTUjVNfn",
                    "createdDate": "2024-10-23T04:35:12.527Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Location-zip": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Location-zip",
                "name": "ZIP Code",
                "apiIdentifier": "zipCode",
                "configuration": {
                    "type": "StringConfig",
                    "key": "ERvBNeiVrpun",
                    "createdDate": "2024-10-23T04:35:12.527Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-Location-Shop": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-Location-Shop",
                "name": "Shop",
                "apiIdentifier": "shop",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "piEQX65TjQcT",
                    "createdDate": "2024-10-23T04:35:12.527Z",
                    "relatedModelKey": "DataModel-Shopify-Shop",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "ShopifyLocation",
        "stateChart": {
            "type": "StateChart",
            "key": "T8sg14tiVUMN",
            "createdDate": 1729658112486,
            "actions": {},
            "transitions": {},
            "stateInActionCode": true,
            "childStates": [
                {
                    "type": "State",
                    "key": "State-Shopify-Location-Start",
                    "createdDate": 1729658112488,
                    "name": "Start",
                    "isRecordBirthPlace": true,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-Location-Created",
                    "createdDate": 1729658112488,
                    "name": "Created",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-Location-Deleted",
                    "createdDate": 1729658112488,
                    "name": "Deleted",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": false,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                }
            ],
            "initialChildState": "State-Shopify-Location-Start"
        }
    },
    "ShopifyInventoryLevel": {
        "key": "DataModel-Shopify-InventoryLevel",
        "name": "Shopify Inventory Level",
        "apiIdentifier": "shopifyInventoryLevel",
        "namespace": [],
        "fields": {
            "DataModel-Shopify-InventoryLevel-system-id": {
                "fieldType": "ID",
                "key": "DataModel-Shopify-InventoryLevel-system-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "9uqjFzJlJ45N",
                    "createdDate": "2024-10-23T04:35:12.682Z"
                },
                "internalWritable": true
            },
            "DataModel-Shopify-InventoryLevel-system-createdAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-InventoryLevel-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "0MIC_RKrZH0I",
                    "createdDate": "2024-10-23T04:35:12.683Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-InventoryLevel-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-InventoryLevel-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "iysC6-ILdpAg",
                    "createdDate": "2024-10-23T04:35:12.683Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryLevel-__gadget_graphql_inventory_level_canDeactivate": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-InventoryLevel-__gadget_graphql_inventory_level_canDeactivate",
                "name": "Can Deactivate",
                "apiIdentifier": "canDeactivate",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "cXMrmY_3tkYA",
                    "createdDate": "2024-10-23T04:35:12.684Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryLevel-__gadget_graphql_inventory_level_deactivationAlert": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-InventoryLevel-__gadget_graphql_inventory_level_deactivationAlert",
                "name": "Deactivation Alert",
                "apiIdentifier": "deactivationAlert",
                "configuration": {
                    "type": "StringConfig",
                    "key": "Z9oW8dr7yTu9",
                    "createdDate": "2024-10-23T04:35:12.684Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryLevel-admin_graphql_api_id": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-InventoryLevel-admin_graphql_api_id",
                "name": "Admin GraphQL API ID",
                "apiIdentifier": "adminGraphqlApiId",
                "configuration": {
                    "type": "StringConfig",
                    "key": "4FhI2CHHEYec",
                    "createdDate": "2024-10-23T04:35:12.684Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryLevel-available": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-InventoryLevel-available",
                "name": "Available",
                "apiIdentifier": "available",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "D79_ZauKffeB",
                    "createdDate": "2024-10-23T04:35:12.684Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-InventoryLevel-updated_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-InventoryLevel-updated_at",
                "name": "Shopify Updated At",
                "apiIdentifier": "shopifyUpdatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "Vzp978uY4qFe",
                    "createdDate": "2024-10-23T04:35:12.685Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-InventoryLevel-InventoryItem": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-InventoryLevel-InventoryItem",
                "name": "Inventory Item",
                "apiIdentifier": "inventoryItem",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "DMFo-Ys0sSpV",
                    "createdDate": "2024-10-23T04:35:12.685Z",
                    "relatedModelKey": "DataModel-Shopify-InventoryItem",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-InventoryLevel-Location": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-InventoryLevel-Location",
                "name": "Location",
                "apiIdentifier": "location",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "knHCv55FsDfc",
                    "createdDate": "2024-10-23T04:35:12.685Z",
                    "relatedModelKey": "DataModel-Shopify-Location",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-InventoryLevel-Shop": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-InventoryLevel-Shop",
                "name": "Shop",
                "apiIdentifier": "shop",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "g8-Y15HZW_sJ",
                    "createdDate": "2024-10-23T04:35:12.685Z",
                    "relatedModelKey": "DataModel-Shopify-Shop",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "ShopifyInventoryLevel",
        "stateChart": {
            "type": "StateChart",
            "key": "sj2jgDkbEWMp",
            "createdDate": 1729658112649,
            "actions": {},
            "transitions": {},
            "stateInActionCode": true,
            "childStates": [
                {
                    "type": "State",
                    "key": "State-Shopify-InventoryLevel-Start",
                    "createdDate": 1729658112650,
                    "name": "Start",
                    "isRecordBirthPlace": true,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-InventoryLevel-Created",
                    "createdDate": 1729658112650,
                    "name": "Created",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-InventoryLevel-Deleted",
                    "createdDate": 1729658112650,
                    "name": "Deleted",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": false,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                }
            ],
            "initialChildState": "State-Shopify-InventoryLevel-Start"
        }
    },
    "ShopifyOrder": {
        "key": "DataModel-Shopify-Order",
        "name": "Shopify Order",
        "apiIdentifier": "shopifyOrder",
        "namespace": [],
        "fields": {
            "ModelField-DataModel-Shopify-Order-id": {
                "fieldType": "ID",
                "key": "ModelField-DataModel-Shopify-Order-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "pp07a8C4576j",
                    "createdDate": "2024-10-23T04:35:12.848Z"
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Order-system-createdAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-Order-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "FPHo4a1dlEv8",
                    "createdDate": "2024-10-23T04:35:12.849Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Order-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-Order-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "-0I3CCd4awUc",
                    "createdDate": "2024-10-23T04:35:12.849Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-__gadget_graphql_status_page_url": {
                "fieldType": "URL",
                "key": "ModelField-DataModel-Shopify-Order-__gadget_graphql_status_page_url",
                "name": "Status Page URL",
                "apiIdentifier": "statusPageUrl",
                "configuration": {
                    "type": "URLConfig",
                    "key": "EFc13uJa3Va-",
                    "createdDate": "2024-10-23T04:35:12.850Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-__gadget_graphql_total_cash_rounding_adjustment": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-__gadget_graphql_total_cash_rounding_adjustment",
                "name": "Total Cash Rounding Adjustment",
                "apiIdentifier": "totalCashRoundingAdjustment",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "Srn7yfkITMoR",
                    "createdDate": "2024-10-23T04:35:12.850Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-__gadget_graphql_fulfillments_count": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-__gadget_graphql_fulfillments_count",
                "name": "Fulfillments Count",
                "apiIdentifier": "fulfillmentsCount",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "xIDweqQnQZjm",
                    "createdDate": "2024-10-23T04:35:12.851Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-Order-Location": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-Order-Location",
                "name": "Retail Location",
                "apiIdentifier": "retailLocation",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "DSL9fU0wDzjz",
                    "createdDate": "2024-10-23T04:35:12.851Z",
                    "relatedModelKey": "DataModel-Shopify-Location",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-__gadget_graphql_order_cancellation": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-__gadget_graphql_order_cancellation",
                "name": "Cancellation",
                "apiIdentifier": "cancellation",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "QcR4VWXC2frV",
                    "createdDate": "2024-10-23T04:35:12.853Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-__gadget_graphql_order_risk": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-__gadget_graphql_order_risk",
                "name": "Risk",
                "apiIdentifier": "risk",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "PCqispi0szXx",
                    "createdDate": "2024-10-23T04:35:12.852Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-__gadget_graphql_transactions_count": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-__gadget_graphql_transactions_count",
                "name": "Transactions Count",
                "apiIdentifier": "transactionsCount",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "YfzmuCkR7UWt",
                    "createdDate": "2024-10-23T04:35:12.852Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-__gadget_graphql_order_shopify_protect": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-__gadget_graphql_order_shopify_protect",
                "name": "Shopify Protect",
                "apiIdentifier": "shopifyProtect",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "mDuLOkyQHC5i",
                    "createdDate": "2024-10-23T04:35:12.853Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-tax_exempt": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Order-tax_exempt",
                "name": "Tax Exempt",
                "apiIdentifier": "taxExempt",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "kjkmCu7wDNja",
                    "createdDate": "2024-10-23T04:35:12.853Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-current_total_additional_fees_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-current_total_additional_fees_set",
                "name": "Current Total Additional Fees Set",
                "apiIdentifier": "currentTotalAdditionalFeesSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "u0htNJBxrDdT",
                    "createdDate": "2024-10-23T04:35:12.854Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-original_total_additional_fees_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-original_total_additional_fees_set",
                "name": "Original Total Additional Fees Set",
                "apiIdentifier": "originalTotalAdditionalFeesSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "O_iI1T3wVW4h",
                    "createdDate": "2024-10-23T04:35:12.855Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-po_number": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-po_number",
                "name": "PO Number",
                "apiIdentifier": "poNumber",
                "configuration": {
                    "type": "StringConfig",
                    "key": "64EJWInPddEX",
                    "createdDate": "2024-10-23T04:35:12.854Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-__gadget_graphql_additional_fees": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-__gadget_graphql_additional_fees",
                "name": "Additional Fees",
                "apiIdentifier": "additionalFees",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "Tuk3YbxM4tK0",
                    "createdDate": "2024-10-23T04:35:12.855Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-merchant_of_record_app_id": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-Order-merchant_of_record_app_id",
                "name": "Merchant of Record App Id",
                "apiIdentifier": "merchantOfRecordAppId",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "2o-QEJVW7gfW",
                    "createdDate": "2024-10-23T04:35:12.855Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-billing_address": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-billing_address",
                "name": "Billing Address",
                "apiIdentifier": "billingAddress",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "wJrbwpH4mxg6",
                    "createdDate": "2024-10-23T04:35:12.856Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-source_identifier": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-source_identifier",
                "name": "Source Identifier",
                "apiIdentifier": "sourceIdentifier",
                "configuration": {
                    "type": "StringConfig",
                    "key": "nKRFBDz2zWRc",
                    "createdDate": "2024-10-23T04:35:12.856Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-source_url": {
                "fieldType": "URL",
                "key": "ModelField-DataModel-Shopify-Order-source_url",
                "name": "Source URL",
                "apiIdentifier": "sourceUrl",
                "configuration": {
                    "type": "URLConfig",
                    "key": "qJa7cZolp6f5",
                    "createdDate": "2024-10-23T04:35:12.856Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-browser_ip": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-browser_ip",
                "name": "Browser IP",
                "apiIdentifier": "browserIp",
                "configuration": {
                    "type": "StringConfig",
                    "key": "j4kbMIQLfFzE",
                    "createdDate": "2024-10-23T04:35:12.857Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-buyer_accepts_marketing": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Order-buyer_accepts_marketing",
                "name": "Buyer Accepts Marketing",
                "apiIdentifier": "buyerAcceptsMarketing",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "WbYzJoRy-pyk",
                    "createdDate": "2024-10-23T04:35:12.857Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-cancel_reason": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-cancel_reason",
                "name": "Cancel Reason",
                "apiIdentifier": "cancelReason",
                "configuration": {
                    "type": "StringConfig",
                    "key": "IU_kj6trghAr",
                    "createdDate": "2024-10-23T04:35:12.858Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-cancelled_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Order-cancelled_at",
                "name": "Cancelled At",
                "apiIdentifier": "cancelledAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "g4LTgpvhfo6s",
                    "createdDate": "2024-10-23T04:35:12.858Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-cart_token": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-cart_token",
                "name": "Cart Token",
                "apiIdentifier": "cartToken",
                "configuration": {
                    "type": "StringConfig",
                    "key": "JgCM6S9DrQ7H",
                    "createdDate": "2024-10-23T04:35:12.858Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-checkout_token": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-checkout_token",
                "name": "Checkout Token",
                "apiIdentifier": "checkoutToken",
                "configuration": {
                    "type": "StringConfig",
                    "key": "FckWXyb-VKQU",
                    "createdDate": "2024-10-23T04:35:12.859Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-client_details": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-client_details",
                "name": "Client Details",
                "apiIdentifier": "clientDetails",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "O2gdV2u_3Xr8",
                    "createdDate": "2024-10-23T04:35:12.859Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-closed_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Order-closed_at",
                "name": "Closed At",
                "apiIdentifier": "closedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "_szPYERKbUwt",
                    "createdDate": "2024-10-23T04:35:12.860Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-currency": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-currency",
                "name": "Currency",
                "apiIdentifier": "currency",
                "configuration": {
                    "type": "StringConfig",
                    "key": "h5MUgt5xI4Ee",
                    "createdDate": "2024-10-23T04:35:12.860Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-current_subtotal_price": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-current_subtotal_price",
                "name": "Current Subtotal Price",
                "apiIdentifier": "currentSubtotalPrice",
                "configuration": {
                    "type": "StringConfig",
                    "key": "GU-qVvpaqI1W",
                    "createdDate": "2024-10-23T04:35:12.860Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-current_subtotal_price_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-current_subtotal_price_set",
                "name": "Current Subtotal Price Set",
                "apiIdentifier": "currentSubtotalPriceSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "tYOQ8FjDLkcv",
                    "createdDate": "2024-10-23T04:35:12.861Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-current_total_discounts": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-current_total_discounts",
                "name": "Current Total Discounts",
                "apiIdentifier": "currentTotalDiscounts",
                "configuration": {
                    "type": "StringConfig",
                    "key": "5KodVsjter5J",
                    "createdDate": "2024-10-23T04:35:12.861Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-current_total_discounts_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-current_total_discounts_set",
                "name": "Current Total Discounts Set",
                "apiIdentifier": "currentTotalDiscountsSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "-Madpx7yQ5Kj",
                    "createdDate": "2024-10-23T04:35:12.862Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-current_total_duties_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-current_total_duties_set",
                "name": "Current Total Duties Set",
                "apiIdentifier": "currentTotalDutiesSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "RmnhhExGdHh6",
                    "createdDate": "2024-10-23T04:35:12.862Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-current_total_price": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-current_total_price",
                "name": "Current Total Price",
                "apiIdentifier": "currentTotalPrice",
                "configuration": {
                    "type": "StringConfig",
                    "key": "9WS7EdIz7tcR",
                    "createdDate": "2024-10-23T04:35:12.862Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-current_total_price_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-current_total_price_set",
                "name": "Current Total Price Set",
                "apiIdentifier": "currentTotalPriceSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "hwiNTLLNMhu9",
                    "createdDate": "2024-10-23T04:35:12.863Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-current_total_tax": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-current_total_tax",
                "name": "Current Total Tax",
                "apiIdentifier": "currentTotalTax",
                "configuration": {
                    "type": "StringConfig",
                    "key": "sIv_gzhtgRnK",
                    "createdDate": "2024-10-23T04:35:12.863Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-current_total_tax_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-current_total_tax_set",
                "name": "Current Total Tax Set",
                "apiIdentifier": "currentTotalTaxSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "1Btash00m_WR",
                    "createdDate": "2024-10-23T04:35:12.863Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-customer_locale": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-customer_locale",
                "name": "Customer Locale",
                "apiIdentifier": "customerLocale",
                "configuration": {
                    "type": "StringConfig",
                    "key": "2fbwp309mCTq",
                    "createdDate": "2024-10-23T04:35:12.864Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-discount_applications": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-discount_applications",
                "name": "Discount Applications",
                "apiIdentifier": "discountApplications",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "Y5bkxUO1fUrV",
                    "createdDate": "2024-10-23T04:35:12.864Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-discount_codes": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-discount_codes",
                "name": "Discount Codes",
                "apiIdentifier": "discountCodes",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "tEbYs7nf-Rz-",
                    "createdDate": "2024-10-23T04:35:12.864Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-email": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-email",
                "name": "Email",
                "apiIdentifier": "email",
                "configuration": {
                    "type": "StringConfig",
                    "key": "pY5ignOUDbR9",
                    "createdDate": "2024-10-23T04:35:12.864Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-estimated_taxes": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Order-estimated_taxes",
                "name": "Estimated Taxes",
                "apiIdentifier": "estimatedTaxes",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "TKvlIDX_qCm5",
                    "createdDate": "2024-10-23T04:35:12.865Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-financial_status": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-financial_status",
                "name": "Financial Status",
                "apiIdentifier": "financialStatus",
                "configuration": {
                    "type": "StringConfig",
                    "key": "-c8ZZyrXSLmN",
                    "createdDate": "2024-10-23T04:35:12.865Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-fulfillment_status": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-fulfillment_status",
                "name": "Fulfillment Status",
                "apiIdentifier": "fulfillmentStatus",
                "configuration": {
                    "type": "StringConfig",
                    "key": "ZyMe8J4metRh",
                    "createdDate": "2024-10-23T04:35:12.865Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-landing_site": {
                "fieldType": "URL",
                "key": "ModelField-DataModel-Shopify-Order-landing_site",
                "name": "Landing Site",
                "apiIdentifier": "landingSite",
                "configuration": {
                    "type": "URLConfig",
                    "key": "9N-gNp6dMDSI",
                    "createdDate": "2024-10-23T04:35:12.865Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-line_items": {
                "fieldType": "HasMany",
                "key": "ModelField-DataModel-Shopify-Order-line_items",
                "name": "Line Items",
                "apiIdentifier": "lineItems",
                "configuration": {
                    "type": "HasManyConfig",
                    "key": "nkEabbJuC405",
                    "createdDate": "2024-10-23T04:35:12.866Z",
                    "relatedModelKey": "DataModel-Shopify-OrderLineItem",
                    "inverseFieldKey": "ModelField-Shopify-OrderLineItem-Order",
                    "relatedModelApiIdentifier": null,
                    "inverseFieldApiIdentifier": null,
                    "dependent": "delete",
                    "isJoinModelHasManyField": false
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-name": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-name",
                "name": "Name",
                "apiIdentifier": "name",
                "configuration": {
                    "type": "StringConfig",
                    "key": "Ltq1A_hwz32L",
                    "createdDate": "2024-10-23T04:35:12.866Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-note": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-note",
                "name": "Note",
                "apiIdentifier": "note",
                "configuration": {
                    "type": "StringConfig",
                    "key": "sj3K-A_6Psq-",
                    "createdDate": "2024-10-23T04:35:12.866Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-note_attributes": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-note_attributes",
                "name": "Note Attributes",
                "apiIdentifier": "noteAttributes",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "SlgSbPQU785W",
                    "createdDate": "2024-10-23T04:35:12.866Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-number": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-Order-number",
                "name": "Number",
                "apiIdentifier": "number",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "LweCDk97XJAH",
                    "createdDate": "2024-10-23T04:35:12.866Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-order_number": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-Order-order_number",
                "name": "Order Number",
                "apiIdentifier": "orderNumber",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "BaaolbkAh7uG",
                    "createdDate": "2024-10-23T04:35:12.867Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-order_status_url": {
                "fieldType": "URL",
                "key": "ModelField-DataModel-Shopify-Order-order_status_url",
                "name": "Order Status URL",
                "apiIdentifier": "orderStatusUrl",
                "configuration": {
                    "type": "URLConfig",
                    "key": "SmPvjYw5h-TQ",
                    "createdDate": "2024-10-23T04:35:12.867Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-original_total_duties_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-original_total_duties_set",
                "name": "Original Total Duties Set",
                "apiIdentifier": "originalTotalDutiesSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "0qlfnNL2stw1",
                    "createdDate": "2024-10-23T04:35:12.867Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-payment_gateway_names": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-payment_gateway_names",
                "name": "Payment Gateway Names",
                "apiIdentifier": "paymentGatewayNames",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "vrsB-wDm2HKR",
                    "createdDate": "2024-10-23T04:35:12.867Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-phone": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-phone",
                "name": "Phone",
                "apiIdentifier": "phone",
                "configuration": {
                    "type": "StringConfig",
                    "key": "SQZYBbM6M1Ph",
                    "createdDate": "2024-10-23T04:35:12.867Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-presentment_currency": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-presentment_currency",
                "name": "Presentment Currency",
                "apiIdentifier": "presentmentCurrency",
                "configuration": {
                    "type": "StringConfig",
                    "key": "ME6WbFQdSHvH",
                    "createdDate": "2024-10-23T04:35:12.868Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-processed_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Order-processed_at",
                "name": "Processed At",
                "apiIdentifier": "processedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "X0-5myY2G0cn",
                    "createdDate": "2024-10-23T04:35:12.870Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-created_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Order-created_at",
                "name": "Shopify Created At",
                "apiIdentifier": "shopifyCreatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "sIaxEp7F6ohm",
                    "createdDate": "2024-10-23T04:35:12.871Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-referring_site": {
                "fieldType": "URL",
                "key": "ModelField-DataModel-Shopify-Order-referring_site",
                "name": "Referring Site",
                "apiIdentifier": "referringSite",
                "configuration": {
                    "type": "URLConfig",
                    "key": "PXOPrviTJcBP",
                    "createdDate": "2024-10-23T04:35:12.871Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-shipping_address": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-shipping_address",
                "name": "Shipping Address",
                "apiIdentifier": "shippingAddress",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "X7-_oVvnX_pj",
                    "createdDate": "2024-10-23T04:35:12.871Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-source_name": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-source_name",
                "name": "Source Name",
                "apiIdentifier": "sourceName",
                "configuration": {
                    "type": "StringConfig",
                    "key": "6ersXPiwcMmX",
                    "createdDate": "2024-10-23T04:35:12.871Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-updated_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Order-updated_at",
                "name": "Shopify Updated At",
                "apiIdentifier": "shopifyUpdatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "Ucj7yww1p-bI",
                    "createdDate": "2024-10-23T04:35:12.871Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-subtotal_price": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-subtotal_price",
                "name": "Subtotal Price",
                "apiIdentifier": "subtotalPrice",
                "configuration": {
                    "type": "StringConfig",
                    "key": "5pUeK6-i3hoO",
                    "createdDate": "2024-10-23T04:35:12.872Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-subtotal_price_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-subtotal_price_set",
                "name": "Subtotal Price Set",
                "apiIdentifier": "subtotalPriceSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "G0vvZV9PYlwR",
                    "createdDate": "2024-10-23T04:35:12.872Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-tags": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-tags",
                "name": "Tags",
                "apiIdentifier": "tags",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "AaQrhiQDEZJE",
                    "createdDate": "2024-10-23T04:35:12.872Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-tax_lines": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-tax_lines",
                "name": "Tax Lines",
                "apiIdentifier": "taxLines",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "tzxj50Mcbosz",
                    "createdDate": "2024-10-23T04:35:12.872Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-taxes_included": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Order-taxes_included",
                "name": "Taxes Included",
                "apiIdentifier": "taxesIncluded",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "OYSqXFsVLUnW",
                    "createdDate": "2024-10-23T04:35:12.873Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-test": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-Order-test",
                "name": "Test",
                "apiIdentifier": "test",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "s9V44n7-Qbog",
                    "createdDate": "2024-10-23T04:35:12.873Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-token": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-token",
                "name": "Token",
                "apiIdentifier": "token",
                "configuration": {
                    "type": "StringConfig",
                    "key": "gJ3ZZmi2Z9JL",
                    "createdDate": "2024-10-23T04:35:12.873Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_discounts": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-total_discounts",
                "name": "Total Discounts",
                "apiIdentifier": "totalDiscounts",
                "configuration": {
                    "type": "StringConfig",
                    "key": "-7ckxYvXuJp3",
                    "createdDate": "2024-10-23T04:35:12.873Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_discounts_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-total_discounts_set",
                "name": "Total Discounts Set",
                "apiIdentifier": "totalDiscountsSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "SSZiHRk_54JV",
                    "createdDate": "2024-10-23T04:35:12.873Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_line_items_price": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-total_line_items_price",
                "name": "Total Line Items Price",
                "apiIdentifier": "totalLineItemsPrice",
                "configuration": {
                    "type": "StringConfig",
                    "key": "bD6YkyWu7FAm",
                    "createdDate": "2024-10-23T04:35:12.874Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_line_items_price_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-total_line_items_price_set",
                "name": "Total Line Items Price Set",
                "apiIdentifier": "totalLineItemsPriceSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "RCK9Ow94QRxD",
                    "createdDate": "2024-10-23T04:35:12.874Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_outstanding": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-total_outstanding",
                "name": "Total Outstanding",
                "apiIdentifier": "totalOutstanding",
                "configuration": {
                    "type": "StringConfig",
                    "key": "zCmWn2_ANPIr",
                    "createdDate": "2024-10-23T04:35:12.874Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_price": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-total_price",
                "name": "Total Price",
                "apiIdentifier": "totalPrice",
                "configuration": {
                    "type": "StringConfig",
                    "key": "_KJ9zM9cqWT0",
                    "createdDate": "2024-10-23T04:35:12.874Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_price_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-total_price_set",
                "name": "Total Price Set",
                "apiIdentifier": "totalPriceSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "rf1F-hfBsisr",
                    "createdDate": "2024-10-23T04:35:12.874Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_shipping_price_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-total_shipping_price_set",
                "name": "Total Shipping Price Set",
                "apiIdentifier": "totalShippingPriceSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "QT6asdo3_Rqm",
                    "createdDate": "2024-10-23T04:35:12.875Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_tax": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-total_tax",
                "name": "Total Tax",
                "apiIdentifier": "totalTax",
                "configuration": {
                    "type": "StringConfig",
                    "key": "ewXQHL_8c5OF",
                    "createdDate": "2024-10-23T04:35:12.875Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_tax_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-Order-total_tax_set",
                "name": "Total Tax Set",
                "apiIdentifier": "totalTaxSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "Ifa8CCjVqjR2",
                    "createdDate": "2024-10-23T04:35:12.875Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_tip_received": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-Order-total_tip_received",
                "name": "Total Tip Received",
                "apiIdentifier": "totalTipReceived",
                "configuration": {
                    "type": "StringConfig",
                    "key": "jf7xoor_hw75",
                    "createdDate": "2024-10-23T04:35:12.875Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Order-total_weight": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-Order-total_weight",
                "name": "Total Weight",
                "apiIdentifier": "totalWeight",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "Tmg3WiPd8YZe",
                    "createdDate": "2024-10-23T04:35:12.875Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-Order-Shop": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-Order-Shop",
                "name": "Shop",
                "apiIdentifier": "shop",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "XQJM4xCMGbfg",
                    "createdDate": "2024-10-23T04:35:12.876Z",
                    "relatedModelKey": "DataModel-Shopify-Shop",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "ShopifyOrder",
        "stateChart": {
            "type": "StateChart",
            "key": "8Yt6vZUfVbkp",
            "createdDate": 1729658112797,
            "actions": {},
            "transitions": {},
            "stateInActionCode": true,
            "childStates": [
                {
                    "type": "State",
                    "key": "State-Shopify-Order-Start",
                    "createdDate": 1729658112799,
                    "name": "Start",
                    "isRecordBirthPlace": true,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-Order-Created",
                    "createdDate": 1729658112799,
                    "name": "Created",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-Order-Deleted",
                    "createdDate": 1729658112799,
                    "name": "Deleted",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": false,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                }
            ],
            "initialChildState": "State-Shopify-Order-Start"
        }
    },
    "ShopifyOrderLineItem": {
        "key": "DataModel-Shopify-OrderLineItem",
        "name": "Shopify Order Line Item",
        "apiIdentifier": "shopifyOrderLineItem",
        "namespace": [],
        "fields": {
            "ModelField-DataModel-Shopify-OrderLineItem-id": {
                "fieldType": "ID",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "etukp7AS09_r",
                    "createdDate": "2024-10-23T04:35:13.197Z"
                },
                "internalWritable": true
            },
            "DataModel-Shopify-OrderLineItem-system-createdAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-OrderLineItem-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "J-qucbTy3bzz",
                    "createdDate": "2024-10-23T04:35:13.197Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-OrderLineItem-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-OrderLineItem-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "2VDxpfaMKRiT",
                    "createdDate": "2024-10-23T04:35:13.198Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-attributed_staffs": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-attributed_staffs",
                "name": "Attributed Staffs",
                "apiIdentifier": "attributedStaffs",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "7dXswAEHa4tF",
                    "createdDate": "2024-10-23T04:35:13.198Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-current_quantity": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-current_quantity",
                "name": "Current Quantity",
                "apiIdentifier": "currentQuantity",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "ss9GfV59Fv9U",
                    "createdDate": "2024-10-23T04:35:13.198Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-fulfillable_quantity": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-fulfillable_quantity",
                "name": "Fulfillable Quantity",
                "apiIdentifier": "fulfillableQuantity",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "05_N9vUloCI5",
                    "createdDate": "2024-10-23T04:35:13.199Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-fulfillment_service": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-fulfillment_service",
                "name": "Fulfillment Service",
                "apiIdentifier": "fulfillmentService",
                "configuration": {
                    "type": "StringConfig",
                    "key": "E6HEY_mMNeGo",
                    "createdDate": "2024-10-23T04:35:13.199Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-fulfillment_status": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-fulfillment_status",
                "name": "Fulfillment Status",
                "apiIdentifier": "fulfillmentStatus",
                "configuration": {
                    "type": "StringConfig",
                    "key": "g80ChHx7wvT_",
                    "createdDate": "2024-10-23T04:35:13.199Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-grams": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-grams",
                "name": "Grams",
                "apiIdentifier": "grams",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "sKCBIO18Pv03",
                    "createdDate": "2024-10-23T04:35:13.200Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-product_exists": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-product_exists",
                "name": "Product Exists",
                "apiIdentifier": "productExists",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "c26nZFWL-jDH",
                    "createdDate": "2024-10-23T04:35:13.200Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-variant_inventory_management": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-variant_inventory_management",
                "name": "Variant Inventory Management",
                "apiIdentifier": "variantInventoryManagement",
                "configuration": {
                    "type": "StringConfig",
                    "key": "rRwSFrhHmh6F",
                    "createdDate": "2024-10-23T04:35:13.200Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-OrderLineItem-Order": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-OrderLineItem-Order",
                "name": "Order",
                "apiIdentifier": "order",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "3rwCO0Tu42Bg",
                    "createdDate": "2024-10-23T04:35:13.200Z",
                    "relatedModelKey": "DataModel-Shopify-Order",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-OrderLineItem-Location": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-OrderLineItem-Location",
                "name": "Origin Location",
                "apiIdentifier": "originLocation",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "s7FNcnvr1wJ-",
                    "createdDate": "2024-10-23T04:35:13.201Z",
                    "relatedModelKey": "DataModel-Shopify-Location",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-OrderLineItem-Product": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-OrderLineItem-Product",
                "name": "Product",
                "apiIdentifier": "product",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "Osvp6MqedFqA",
                    "createdDate": "2024-10-23T04:35:13.201Z",
                    "relatedModelKey": "DataModel-Shopify-Product",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-OrderLineItem-ProductVariant": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-OrderLineItem-ProductVariant",
                "name": "Variant",
                "apiIdentifier": "variant",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "avYYKLVP4T8U",
                    "createdDate": "2024-10-23T04:35:13.201Z",
                    "relatedModelKey": "DataModel-Shopify-ProductVariant",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-price": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-price",
                "name": "Price",
                "apiIdentifier": "price",
                "configuration": {
                    "type": "StringConfig",
                    "key": "xpOUqlJX-8rE",
                    "createdDate": "2024-10-23T04:35:13.202Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-quantity": {
                "fieldType": "Number",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-quantity",
                "name": "Quantity",
                "apiIdentifier": "quantity",
                "configuration": {
                    "type": "NumberConfig",
                    "key": "2T3v9o3fL7TF",
                    "createdDate": "2024-10-23T04:35:13.202Z",
                    "decimals": null,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-requires_shipping": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-requires_shipping",
                "name": "Requires Shipping",
                "apiIdentifier": "requiresShipping",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "L-W3pwye-ljQ",
                    "createdDate": "2024-10-23T04:35:13.202Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-sku": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-sku",
                "name": "SKU",
                "apiIdentifier": "sku",
                "configuration": {
                    "type": "StringConfig",
                    "key": "I_mIo8dAtuAG",
                    "createdDate": "2024-10-23T04:35:13.202Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-title": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-title",
                "name": "Title",
                "apiIdentifier": "title",
                "configuration": {
                    "type": "StringConfig",
                    "key": "1LnSY9WhDZNO",
                    "createdDate": "2024-10-23T04:35:13.202Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-gift_card": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-gift_card",
                "name": "Gift Card",
                "apiIdentifier": "giftCard",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "7IAR9puMCfFt",
                    "createdDate": "2024-10-23T04:35:13.203Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-name": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-name",
                "name": "Name",
                "apiIdentifier": "name",
                "configuration": {
                    "type": "StringConfig",
                    "key": "azvfjURHR83k",
                    "createdDate": "2024-10-23T04:35:13.203Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-variant_title": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-variant_title",
                "name": "Variant Title",
                "apiIdentifier": "variantTitle",
                "configuration": {
                    "type": "StringConfig",
                    "key": "fUo3G9iGf3cv",
                    "createdDate": "2024-10-23T04:35:13.203Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-vendor": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-vendor",
                "name": "Vendor",
                "apiIdentifier": "vendor",
                "configuration": {
                    "type": "StringConfig",
                    "key": "RroLaaKhRFW2",
                    "createdDate": "2024-10-23T04:35:13.203Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-created_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-created_at",
                "name": "Shopify Created At",
                "apiIdentifier": "shopifyCreatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "X6DpirVfJGd_",
                    "createdDate": "2024-10-23T04:35:13.204Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-price_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-price_set",
                "name": "Price Set",
                "apiIdentifier": "priceSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "Nppsb_LunmGJ",
                    "createdDate": "2024-10-23T04:35:13.204Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-properties": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-properties",
                "name": "Properties",
                "apiIdentifier": "properties",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "bn68O5HVHmxN",
                    "createdDate": "2024-10-23T04:35:13.204Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-updated_at": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-updated_at",
                "name": "Shopify Updated At",
                "apiIdentifier": "shopifyUpdatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "hWrdlRs0NQDg",
                    "createdDate": "2024-10-23T04:35:13.204Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-discount_allocations": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-discount_allocations",
                "name": "Discount Allocations",
                "apiIdentifier": "discountAllocations",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "Qwkh_XM_HhFk",
                    "createdDate": "2024-10-23T04:35:13.206Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-tax_lines": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-tax_lines",
                "name": "Tax Lines",
                "apiIdentifier": "taxLines",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "F0way2ZE2a4q",
                    "createdDate": "2024-10-23T04:35:13.205Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-taxable": {
                "fieldType": "Boolean",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-taxable",
                "name": "Taxable",
                "apiIdentifier": "taxable",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "qdIjlj6nmkxB",
                    "createdDate": "2024-10-23T04:35:13.205Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-total_discount": {
                "fieldType": "String",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-total_discount",
                "name": "Total Discount",
                "apiIdentifier": "totalDiscount",
                "configuration": {
                    "type": "StringConfig",
                    "key": "pEPrJ6qYgVNF",
                    "createdDate": "2024-10-23T04:35:13.205Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-OrderLineItem-total_discount_set": {
                "fieldType": "JSON",
                "key": "ModelField-DataModel-Shopify-OrderLineItem-total_discount_set",
                "name": "Total Discount Set",
                "apiIdentifier": "totalDiscountSet",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "jZwolQ5I7fbK",
                    "createdDate": "2024-10-23T04:35:13.205Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-OrderLineItem-Shop": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-OrderLineItem-Shop",
                "name": "Shop",
                "apiIdentifier": "shop",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "hOG7u18bCXAx",
                    "createdDate": "2024-10-23T04:35:13.206Z",
                    "relatedModelKey": "DataModel-Shopify-Shop",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "ShopifyOrderLineItem",
        "stateChart": {
            "type": "StateChart",
            "key": "8ZAjeq9Xaw4R",
            "createdDate": 1729658113141,
            "actions": {},
            "transitions": {},
            "stateInActionCode": true,
            "childStates": [
                {
                    "type": "State",
                    "key": "State-Shopify-OrderLineItem-Start",
                    "createdDate": 1729658113142,
                    "name": "Start",
                    "isRecordBirthPlace": true,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-OrderLineItem-Created",
                    "createdDate": 1729658113142,
                    "name": "Created",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-OrderLineItem-Deleted",
                    "createdDate": 1729658113142,
                    "name": "Deleted",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": false,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                }
            ],
            "initialChildState": "State-Shopify-OrderLineItem-Start"
        }
    },
    "ShopifySync": {
        "key": "DataModel-Shopify-Sync",
        "name": "Shopify Sync",
        "apiIdentifier": "shopifySync",
        "namespace": [],
        "fields": {
            "DataModel-Shopify-Sync-system-id": {
                "fieldType": "ID",
                "key": "DataModel-Shopify-Sync-system-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "KSOg62B0OcbS",
                    "createdDate": "2024-10-23T04:35:13.405Z"
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Sync-system-createdAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-Sync-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "StPUw0QsUc7W",
                    "createdDate": "2024-10-23T04:35:13.405Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Sync-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "DataModel-Shopify-Sync-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "4uiez9ZzmfbW",
                    "createdDate": "2024-10-23T04:35:13.406Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "DataModel-Shopify-Sync-system-state": {
                "fieldType": "RecordState",
                "key": "DataModel-Shopify-Sync-system-state",
                "name": "State",
                "apiIdentifier": "state",
                "configuration": {
                    "type": "RecordStateConfig",
                    "key": "GYzZQSzcKWfd",
                    "createdDate": "2024-10-23T04:35:13.406Z"
                },
                "internalWritable": true
            },
            "ModelField-Shopify-Sync-ErrorMessage": {
                "fieldType": "String",
                "key": "ModelField-Shopify-Sync-ErrorMessage",
                "name": "Error Message",
                "apiIdentifier": "errorMessage",
                "configuration": {
                    "type": "StringConfig",
                    "key": "gx7sKnK0hYnx",
                    "createdDate": "2024-10-23T04:35:13.406Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-Sync-Shop": {
                "fieldType": "BelongsTo",
                "key": "ModelField-Shopify-Sync-Shop",
                "name": "Shop",
                "apiIdentifier": "shop",
                "configuration": {
                    "type": "BelongsToConfig",
                    "key": "owsM0CQjWX0n",
                    "createdDate": "2024-10-23T04:35:13.406Z",
                    "relatedModelKey": "DataModel-Shopify-Shop",
                    "relatedModelApiIdentifier": null
                },
                "internalWritable": true
            },
            "ModelField-DataModel-Shopify-Sync-syncSince": {
                "fieldType": "DateTime",
                "key": "ModelField-DataModel-Shopify-Sync-syncSince",
                "name": "Sync Since",
                "apiIdentifier": "syncSince",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "tO3pwIpRTj88",
                    "createdDate": "2024-10-23T04:35:13.407Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-Sync-Domain": {
                "fieldType": "String",
                "key": "ModelField-Shopify-Sync-Domain",
                "name": "Domain",
                "apiIdentifier": "domain",
                "configuration": {
                    "type": "StringConfig",
                    "key": "tCoAQ5t7QrpA",
                    "createdDate": "2024-10-23T04:35:13.407Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-Sync-ErrorDetails": {
                "fieldType": "String",
                "key": "ModelField-Shopify-Sync-ErrorDetails",
                "name": "Error Details",
                "apiIdentifier": "errorDetails",
                "configuration": {
                    "type": "StringConfig",
                    "key": "JsvEJhfxfi2C",
                    "createdDate": "2024-10-23T04:35:13.407Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-Sync-Models": {
                "fieldType": "JSON",
                "key": "ModelField-Shopify-Sync-Models",
                "name": "Models",
                "apiIdentifier": "models",
                "configuration": {
                    "type": "JSONConfig",
                    "key": "4Nursu0gBIv6",
                    "createdDate": "2024-10-23T04:35:13.407Z",
                    "default": null
                },
                "internalWritable": true
            },
            "ModelField-Shopify-Sync-Force": {
                "fieldType": "Boolean",
                "key": "ModelField-Shopify-Sync-Force",
                "name": "Force",
                "apiIdentifier": "force",
                "configuration": {
                    "type": "BooleanConfig",
                    "key": "Edxmvb-radF3",
                    "createdDate": "2024-10-23T04:35:13.408Z",
                    "default": false
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "ShopifySync",
        "stateChart": {
            "type": "StateChart",
            "key": "hJp3m_eV7XlO",
            "createdDate": 1729658113350,
            "actions": {},
            "transitions": {},
            "stateInActionCode": true,
            "childStates": [
                {
                    "type": "State",
                    "key": "State-Shopify-Sync-Start",
                    "createdDate": 1729658113350,
                    "name": "Start",
                    "isRecordBirthPlace": true,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-Sync-Running",
                    "createdDate": 1729658113350,
                    "name": "Running",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-Sync-Completed",
                    "createdDate": 1729658113351,
                    "name": "Completed",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                },
                {
                    "type": "State",
                    "key": "State-Shopify-Sync-Errored",
                    "createdDate": 1729658113351,
                    "name": "Errored",
                    "isRecordBirthPlace": false,
                    "isUndeleteableSystemState": true,
                    "restoreHistory": true,
                    "childStates": [],
                    "customApiIdentifier": null
                }
            ],
            "initialChildState": "State-Shopify-Sync-Start"
        }
    },
    "DraftedProduct": {
        "key": "kFOGjMcjJAxz",
        "name": "draftedProduct",
        "apiIdentifier": "draftedProduct",
        "namespace": [],
        "fields": {
            "kFOGjMcjJAxz-system-id": {
                "fieldType": "ID",
                "key": "kFOGjMcjJAxz-system-id",
                "name": "ID",
                "apiIdentifier": "id",
                "configuration": {
                    "type": "IDConfig",
                    "key": "OTjaYyKUJ4qF",
                    "createdDate": "2024-10-23T04:39:54.235Z"
                },
                "internalWritable": true
            },
            "kFOGjMcjJAxz-system-createdAt": {
                "fieldType": "DateTime",
                "key": "kFOGjMcjJAxz-system-createdAt",
                "name": "Created At",
                "apiIdentifier": "createdAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "_D14IesgWGGi",
                    "createdDate": "2024-10-23T04:39:54.236Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "kFOGjMcjJAxz-system-updatedAt": {
                "fieldType": "DateTime",
                "key": "kFOGjMcjJAxz-system-updatedAt",
                "name": "Updated At",
                "apiIdentifier": "updatedAt",
                "configuration": {
                    "type": "DateTimeConfig",
                    "key": "v_wwBaCW6eIb",
                    "createdDate": "2024-10-23T04:39:54.237Z",
                    "includeTime": true,
                    "default": null
                },
                "internalWritable": true
            },
            "GSja9eQSHvwp": {
                "fieldType": "String",
                "key": "GSja9eQSHvwp",
                "name": "orderId",
                "apiIdentifier": "orderId",
                "configuration": {
                    "type": "StringConfig",
                    "key": "q1PSFzj35XCb",
                    "createdDate": "2024-10-23T04:40:58.137Z",
                    "default": null
                },
                "internalWritable": true
            },
            "JERaFrmeFhp1": {
                "fieldType": "String",
                "key": "JERaFrmeFhp1",
                "name": "productId",
                "apiIdentifier": "productId",
                "configuration": {
                    "type": "StringConfig",
                    "key": "x2GIQGEymlMq",
                    "createdDate": "2024-10-23T04:41:08.161Z",
                    "default": null
                },
                "internalWritable": true
            },
            "OWErpTOJ53Hh": {
                "fieldType": "String",
                "key": "OWErpTOJ53Hh",
                "name": "productTitle",
                "apiIdentifier": "productTitle",
                "configuration": {
                    "type": "StringConfig",
                    "key": "pv8KHZFx7CaA",
                    "createdDate": "2024-10-23T04:41:19.142Z",
                    "default": null
                },
                "internalWritable": true
            },
            "DF_M--ladFTW": {
                "fieldType": "String",
                "key": "DF_M--ladFTW",
                "name": "relatedProduct",
                "apiIdentifier": "relatedProduct",
                "configuration": {
                    "type": "StringConfig",
                    "key": "TGc5xJNrErYr",
                    "createdDate": "2024-10-23T04:41:29.763Z",
                    "default": null
                },
                "internalWritable": true
            },
            "n7_p9K1WQO_v": {
                "fieldType": "String",
                "key": "n7_p9K1WQO_v",
                "name": "shop",
                "apiIdentifier": "shop",
                "configuration": {
                    "type": "StringConfig",
                    "key": "MHi3HatVYFYr",
                    "createdDate": "2024-10-23T04:41:36.340Z",
                    "default": null
                },
                "internalWritable": true
            },
            "dfMkvuVV_y6z": {
                "fieldType": "String",
                "key": "dfMkvuVV_y6z",
                "name": "swatchId",
                "apiIdentifier": "swatchId",
                "configuration": {
                    "type": "StringConfig",
                    "key": "qFkSRJcGdg6Z",
                    "createdDate": "2024-10-23T04:41:50.251Z",
                    "default": null
                },
                "internalWritable": true
            },
            "7KI980sA8kS-": {
                "fieldType": "String",
                "key": "7KI980sA8kS-",
                "name": "type",
                "apiIdentifier": "type",
                "configuration": {
                    "type": "StringConfig",
                    "key": "_n0EUYgwSvRK",
                    "createdDate": "2024-10-23T04:41:54.863Z",
                    "default": null
                },
                "internalWritable": true
            },
            "crWinqOpiMpU": {
                "fieldType": "String",
                "key": "crWinqOpiMpU",
                "name": "variant",
                "apiIdentifier": "variant",
                "configuration": {
                    "type": "StringConfig",
                    "key": "PTZs8wLggJOu",
                    "createdDate": "2024-10-23T04:42:02.708Z",
                    "default": null
                },
                "internalWritable": true
            }
        },
        "graphqlTypeName": "DraftedProduct",
        "stateChart": {
            "type": "StateChart",
            "key": "iPE_lvf5Ej_M",
            "createdDate": 1729658394238,
            "actions": {},
            "transitions": {},
            "stateInActionCode": false,
            "childStates": []
        }
    }
};
/**
 * Internal variable to map model apiIdentifier to GraphQL typename in modelsMap.
 * @internal
 */ const modelListIndex = {
    "api:session": "Session",
    "api:shopifyShop": "ShopifyShop",
    "api:shopifyGdprRequest": "ShopifyGdprRequest",
    "api:shopifyProduct": "ShopifyProduct",
    "api:shopifyProductVariant": "ShopifyProductVariant",
    "api:shopifyInventoryItem": "ShopifyInventoryItem",
    "api:shopifyLocation": "ShopifyLocation",
    "api:shopifyInventoryLevel": "ShopifyInventoryLevel",
    "api:shopifyOrder": "ShopifyOrder",
    "api:shopifyOrderLineItem": "ShopifyOrderLineItem",
    "api:shopifySync": "ShopifySync",
    "api:draftedProduct": "DraftedProduct"
};
