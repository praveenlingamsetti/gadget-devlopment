// All the generated types for the "Shopify Shop" model preconditions, actions, params, etc
import { AmbientContext } from "../AmbientContext";
import { ActionExecutionScope, NotYetTyped, ValidationErrors, ActionTrigger } from "../types";
import { GadgetRecord, ShopifyShop } from "@gadget-client/i-was-a-sare-development";
import { Select } from "@gadgetinc/api-client-core";

export type DefaultShopifyShopServerSelection = {
  readonly __typename: true;
      readonly id: true;
      readonly createdAt: true;
      readonly updatedAt: true;
      readonly state: true;
      readonly customerAccountsV2: true;
      readonly transactionalSmsDisabled: true;
      readonly address1: true;
      readonly address2: true;
      readonly marketingSmsContentEnabledAtCheckout: true;
      readonly checkoutApiSupported: true;
      readonly city: true;
      readonly cookieConsentLevel: true;
      readonly country: true;
      readonly countryCode: true;
      readonly countryName: true;
      readonly countyTaxes: true;
      readonly currency: true;
      readonly customerEmail: true;
      readonly domain: true;
      readonly eligibleForCardReaderGiveaway: true;
      readonly eligibleForPayments: true;
      readonly email: true;
      readonly enabledPresentmentCurrencies: true;
      readonly finances: true;
      readonly forceSsl: true;
      readonly googleAppsDomain: true;
      readonly googleAppsLoginEnabled: true;
      readonly hasDiscounts: true;
      readonly hasGiftCards: true;
      readonly hasStorefront: true;
      readonly ianaTimezone: true;
      readonly latitude: true;
      readonly longitude: true;
      readonly moneyFormat: true;
      readonly moneyInEmailsFormat: true;
      readonly moneyWithCurrencyFormat: true;
      readonly moneyWithCurrencyInEmailsFormat: true;
      readonly multiLocationEnabled: true;
      readonly myshopifyDomain: true;
      readonly name: true;
      readonly passwordEnabled: true;
      readonly phone: true;
      readonly planDisplayName: true;
      readonly planName: true;
      readonly preLaunchEnabled: true;
      readonly primaryLocale: true;
      readonly province: true;
      readonly primaryLocationId: true;
    readonly primaryLocation: false;
      readonly provinceCode: true;
      readonly requiresExtraPaymentsAgreement: true;
      readonly setupRequired: true;
      readonly shopifyCreatedAt: true;
      readonly shopOwner: true;
      readonly source: true;
      readonly shopifyUpdatedAt: true;
      readonly taxShipping: true;
      readonly taxesIncluded: true;
      readonly timezone: true;
      readonly weightUnit: true;
      readonly locations: false;
      readonly inventoryItems: false;
      readonly inventoryLevels: false;
      readonly zipCode: true;
      readonly orders: false;
      readonly products: false;
      readonly productVariants: false;
      readonly syncs: false;
      readonly orderLineItems: false;
      readonly gdprRequests: false;
      readonly accessToken: true;
      readonly grantedScopes: true;
      readonly registeredWebhooks: true;
      readonly disabledWebhooks: true;
      readonly installedViaApiKey: true;
  };

  
/** Context of the `update` action on the `shopifyShop` model. */
export interface UpdateShopifyShopActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyShop` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {
shopifyShop?: { id?: string;customerAccountsV2?: string;transactionalSmsDisabled?: boolean;address1?: string;address2?: string;marketingSmsContentEnabledAtCheckout?: boolean;checkoutApiSupported?: boolean;city?: string;cookieConsentLevel?: string;country?: string;countryCode?: string;countryName?: string;countyTaxes?: string;currency?: string;customerEmail?: string;domain?: string;eligibleForCardReaderGiveaway?: boolean;eligibleForPayments?: boolean;email?: string;enabledPresentmentCurrencies?: string;finances?: boolean;forceSsl?: boolean;googleAppsDomain?: string;googleAppsLoginEnabled?: boolean;hasDiscounts?: boolean;hasGiftCards?: boolean;hasStorefront?: boolean;ianaTimezone?: string;latitude?: number;longitude?: number;moneyFormat?: string;moneyInEmailsFormat?: string;moneyWithCurrencyFormat?: string;moneyWithCurrencyInEmailsFormat?: string;multiLocationEnabled?: boolean;myshopifyDomain?: string;name?: string;passwordEnabled?: boolean;phone?: string;planDisplayName?: string;planName?: string;preLaunchEnabled?: boolean;primaryLocale?: string;province?: string;provinceCode?: string;requiresExtraPaymentsAgreement?: boolean;setupRequired?: boolean;shopifyCreatedAt?: string;shopOwner?: string;source?: string;shopifyUpdatedAt?: string;taxShipping?: boolean;taxesIncluded?: boolean;timezone?: string;weightUnit?: string;zipCode?: string; };    
id?: string;
};
  /**
  * @private The context of this action.
  */
  context: UpdateShopifyShopActionContext;
};


    
/** Context of the `install` action on the `shopifyShop` model. */
export interface InstallShopifyShopActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyShop` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {
shopifyShop?: { id?: string;customerAccountsV2?: string;transactionalSmsDisabled?: boolean;address1?: string;address2?: string;marketingSmsContentEnabledAtCheckout?: boolean;checkoutApiSupported?: boolean;city?: string;cookieConsentLevel?: string;country?: string;countryCode?: string;countryName?: string;countyTaxes?: string;currency?: string;customerEmail?: string;domain?: string;eligibleForCardReaderGiveaway?: boolean;eligibleForPayments?: boolean;email?: string;enabledPresentmentCurrencies?: string;finances?: boolean;forceSsl?: boolean;googleAppsDomain?: string;googleAppsLoginEnabled?: boolean;hasDiscounts?: boolean;hasGiftCards?: boolean;hasStorefront?: boolean;ianaTimezone?: string;latitude?: number;longitude?: number;moneyFormat?: string;moneyInEmailsFormat?: string;moneyWithCurrencyFormat?: string;moneyWithCurrencyInEmailsFormat?: string;multiLocationEnabled?: boolean;myshopifyDomain?: string;name?: string;passwordEnabled?: boolean;phone?: string;planDisplayName?: string;planName?: string;preLaunchEnabled?: boolean;primaryLocale?: string;province?: string;provinceCode?: string;requiresExtraPaymentsAgreement?: boolean;setupRequired?: boolean;shopifyCreatedAt?: string;shopOwner?: string;source?: string;shopifyUpdatedAt?: string;taxShipping?: boolean;taxesIncluded?: boolean;timezone?: string;weightUnit?: string;zipCode?: string; };
};
  /**
  * @private The context of this action.
  */
  context: InstallShopifyShopActionContext;
};


    
/** Context of the `reinstall` action on the `shopifyShop` model. */
export interface ReinstallShopifyShopActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyShop` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {
shopifyShop?: { id?: string;customerAccountsV2?: string;transactionalSmsDisabled?: boolean;address1?: string;address2?: string;marketingSmsContentEnabledAtCheckout?: boolean;checkoutApiSupported?: boolean;city?: string;cookieConsentLevel?: string;country?: string;countryCode?: string;countryName?: string;countyTaxes?: string;currency?: string;customerEmail?: string;domain?: string;eligibleForCardReaderGiveaway?: boolean;eligibleForPayments?: boolean;email?: string;enabledPresentmentCurrencies?: string;finances?: boolean;forceSsl?: boolean;googleAppsDomain?: string;googleAppsLoginEnabled?: boolean;hasDiscounts?: boolean;hasGiftCards?: boolean;hasStorefront?: boolean;ianaTimezone?: string;latitude?: number;longitude?: number;moneyFormat?: string;moneyInEmailsFormat?: string;moneyWithCurrencyFormat?: string;moneyWithCurrencyInEmailsFormat?: string;multiLocationEnabled?: boolean;myshopifyDomain?: string;name?: string;passwordEnabled?: boolean;phone?: string;planDisplayName?: string;planName?: string;preLaunchEnabled?: boolean;primaryLocale?: string;province?: string;provinceCode?: string;requiresExtraPaymentsAgreement?: boolean;setupRequired?: boolean;shopifyCreatedAt?: string;shopOwner?: string;source?: string;shopifyUpdatedAt?: string;taxShipping?: boolean;taxesIncluded?: boolean;timezone?: string;weightUnit?: string;zipCode?: string; };    
id?: string;
};
  /**
  * @private The context of this action.
  */
  context: ReinstallShopifyShopActionContext;
};


    
/** Context of the `uninstall` action on the `shopifyShop` model. */
export interface UninstallShopifyShopActionContext extends AmbientContext {
  /**
  * The model this action is operating on
  */
  model: NotYetTyped;
  /**
  * An object specifying the `shopifyShop` record this action is operating on.
  */
  record: GadgetRecord<Select<ShopifyShop, DefaultShopifyShopServerSelection>>;
  /**
  * @deprecated Use 'return' instead.
  */
  scope: ActionExecutionScope;
  /**
  * An object specifying the trigger to this action (e.g. API call, webhook events etc.).
  */
  trigger: ActionTrigger;
  /**
  * An object containing the incoming data(this models fields) passed by triggers or user inputs.
  */
  params: {
shopifyShop?: { id?: string;customerAccountsV2?: string;transactionalSmsDisabled?: boolean;address1?: string;address2?: string;marketingSmsContentEnabledAtCheckout?: boolean;checkoutApiSupported?: boolean;city?: string;cookieConsentLevel?: string;country?: string;countryCode?: string;countryName?: string;countyTaxes?: string;currency?: string;customerEmail?: string;domain?: string;eligibleForCardReaderGiveaway?: boolean;eligibleForPayments?: boolean;email?: string;enabledPresentmentCurrencies?: string;finances?: boolean;forceSsl?: boolean;googleAppsDomain?: string;googleAppsLoginEnabled?: boolean;hasDiscounts?: boolean;hasGiftCards?: boolean;hasStorefront?: boolean;ianaTimezone?: string;latitude?: number;longitude?: number;moneyFormat?: string;moneyInEmailsFormat?: string;moneyWithCurrencyFormat?: string;moneyWithCurrencyInEmailsFormat?: string;multiLocationEnabled?: boolean;myshopifyDomain?: string;name?: string;passwordEnabled?: boolean;phone?: string;planDisplayName?: string;planName?: string;preLaunchEnabled?: boolean;primaryLocale?: string;province?: string;provinceCode?: string;requiresExtraPaymentsAgreement?: boolean;setupRequired?: boolean;shopifyCreatedAt?: string;shopOwner?: string;source?: string;shopifyUpdatedAt?: string;taxShipping?: boolean;taxesIncluded?: boolean;timezone?: string;weightUnit?: string;zipCode?: string; };    
id?: string;
};
  /**
  * @private The context of this action.
  */
  context: UninstallShopifyShopActionContext;
};


  