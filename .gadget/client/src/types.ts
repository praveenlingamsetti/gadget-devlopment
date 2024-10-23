import { FieldSelection, FilterNever } from "@gadgetinc/api-client-core";

type JSONValue =
    | string
    | number
    | boolean
    | JSONObject
    | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }


export enum GadgetFieldType {
  Any,
  Array,
  BelongsTo,
  Boolean,
  Code,
  Color,
  Computed,
  DateTime,
  Email,
  EncryptedString,
  Enum,
  File,
  HasMany,
  HasManyThrough,
  HasOne,
  ID,
  JSON,
  Money,
  Null,
  Number,
  Object,
  Password,
  RecordState,
  RichText,
  RoleAssignments,
  String,
  URL,
  Vector,
}


export enum BackgroundActionPriority {
  DEFAULT,
  HIGH,
  LOW,
  PLATFORM,
}


export enum BackgroundActionOutcome {
  failed,
  completed,
}



export type GadgetFieldValidationUnion = AvailableGadgetRegexFieldValidationSelection | AvailableGadgetRangeFieldValidationSelection | AvailableGadgetOnlyImageFileFieldValidationSelection | AvailableGadgetGenericFieldValidationSelection;


export type AvailableGadgetFieldValidationUnionSelection = GadgetRegexFieldValidation | GadgetRangeFieldValidation | GadgetOnlyImageFileFieldValidation | GadgetGenericFieldValidation;

/** Represents the possible values of the Status enum. */
export type ShopifyProductStatusEnum = "active" | "archived" | "draft";

/** A sort order for a field. Can be Ascending or Descending. */
export type SortOrder = "Ascending"|"Descending";

/** Represents the possible values of the Topic enum. */
export type ShopifyGdprRequestTopicEnum = "customers/data_request" | "customers/redact" | "shop/redact";

/** Represents one session result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalSessionRecord = Scalars["JSONObject"];

/** Represents one shopifyShop result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyShopRecord = Scalars["JSONObject"];

/** Represents one shopifyGdprRequest result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyGdprRequestRecord = Scalars["JSONObject"];

/** Represents one shopifyProduct result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductRecord = Scalars["JSONObject"];

/** Represents one shopifyProductVariant result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyProductVariantRecord = Scalars["JSONObject"];

/** Represents one shopifyInventoryItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyInventoryItemRecord = Scalars["JSONObject"];

/** Represents one shopifyLocation result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyLocationRecord = Scalars["JSONObject"];

/** Represents one shopifyInventoryLevel result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyInventoryLevelRecord = Scalars["JSONObject"];

/** Represents one shopifyOrder result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyOrderRecord = Scalars["JSONObject"];

/** Represents one shopifyOrderLineItem result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifyOrderLineItemRecord = Scalars["JSONObject"];

/** Represents one shopifySync result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalShopifySyncRecord = Scalars["JSONObject"];

/** Represents one draftedProduct result record in internal api calls. Returns a JSON blob of all the record's fields. */
export type InternalDraftedProductRecord = Scalars["JSONObject"];


export type BackgroundActionResult = AvailableInventoryUpdateInventoryToZeroResultSelection | AvailableOrderReadOrderLineItemsResultSelection | AvailableProductGetVariantsByproductResultSelection | AvailableProductReadMetafieldByProductResultSelection | AvailableProductReadProductBySwatchIdResultSelection | AvailableProductUpdateProductStatusResultSelection | AvailableAbortShopifySyncResultSelection | AvailableCompleteShopifySyncResultSelection | AvailableErrorShopifySyncResultSelection | AvailableRunShopifySyncResultSelection | AvailableCreateDraftedProductResultSelection | AvailableUpdateDraftedProductResultSelection | AvailableDeleteDraftedProductResultSelection;


export type AvailableBackgroundActionResultSelection = InventoryUpdateInventoryToZeroResult | OrderReadOrderLineItemsResult | ProductGetVariantsByproductResult | ProductReadMetafieldByProductResult | ProductReadProductBySwatchIdResult | ProductUpdateProductStatusResult | AbortShopifySyncResult | CompleteShopifySyncResult | ErrorShopifySyncResult | RunShopifySyncResult | CreateDraftedProductResult | UpdateDraftedProductResult | DeleteDraftedProductResult;



export type ShopifyOrderLineItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the attributedStaffs field. Defaults to ascending (smallest value first). */
  attributedStaffs?: SortOrder | null;

  /** Sort the results by the currentQuantity field. Defaults to ascending (smallest value first). */
  currentQuantity?: SortOrder | null;

  /** Sort the results by the fulfillableQuantity field. Defaults to ascending (smallest value first). */
  fulfillableQuantity?: SortOrder | null;

  /** Sort the results by the fulfillmentService field. Defaults to ascending (smallest value first). */
  fulfillmentService?: SortOrder | null;

  /** Sort the results by the fulfillmentStatus field. Defaults to ascending (smallest value first). */
  fulfillmentStatus?: SortOrder | null;

  /** Sort the results by the grams field. Defaults to ascending (smallest value first). */
  grams?: SortOrder | null;

  /** Sort the results by the productExists field. Defaults to ascending (smallest value first). */
  productExists?: SortOrder | null;

  /** Sort the results by the variantInventoryManagement field. Defaults to ascending (smallest value first). */
  variantInventoryManagement?: SortOrder | null;

  /** Sort the results by the price field. Defaults to ascending (smallest value first). */
  price?: SortOrder | null;

  /** Sort the results by the quantity field. Defaults to ascending (smallest value first). */
  quantity?: SortOrder | null;

  /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
  requiresShipping?: SortOrder | null;

  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the giftCard field. Defaults to ascending (smallest value first). */
  giftCard?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the variantTitle field. Defaults to ascending (smallest value first). */
  variantTitle?: SortOrder | null;

  /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
  vendor?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the priceSet field. Defaults to ascending (smallest value first). */
  priceSet?: SortOrder | null;

  /** Sort the results by the properties field. Defaults to ascending (smallest value first). */
  properties?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the discountAllocations field. Defaults to ascending (smallest value first). */
  discountAllocations?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;

  /** Sort the results by the taxable field. Defaults to ascending (smallest value first). */
  taxable?: SortOrder | null;

  /** Sort the results by the totalDiscount field. Defaults to ascending (smallest value first). */
  totalDiscount?: SortOrder | null;

  /** Sort the results by the totalDiscountSet field. Defaults to ascending (smallest value first). */
  totalDiscountSet?: SortOrder | null;
};



export type ShopifyOrderLineItemFilter = {

  AND?: (ShopifyOrderLineItemFilter | null)[];

  OR?: (ShopifyOrderLineItemFilter | null)[];

  NOT?: (ShopifyOrderLineItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  attributedStaffs?: JSONFilter | null;

  currentQuantity?: FloatFilter | null;

  fulfillableQuantity?: FloatFilter | null;

  fulfillmentService?: StringFilter | null;

  fulfillmentStatus?: StringFilter | null;

  grams?: FloatFilter | null;

  productExists?: BooleanFilter | null;

  variantInventoryManagement?: StringFilter | null;

  orderId?: IDFilter | null;

  order?: ShopifyOrderRelationshipFilter | null;

  originLocationId?: IDFilter | null;

  originLocation?: ShopifyLocationRelationshipFilter | null;

  productId?: IDFilter | null;

  product?: ShopifyProductRelationshipFilter | null;

  variantId?: IDFilter | null;

  variant?: ShopifyProductVariantRelationshipFilter | null;

  price?: StringFilter | null;

  quantity?: FloatFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  title?: StringFilter | null;

  giftCard?: BooleanFilter | null;

  name?: StringFilter | null;

  variantTitle?: StringFilter | null;

  vendor?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  priceSet?: JSONFilter | null;

  properties?: JSONFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  discountAllocations?: JSONFilter | null;

  taxLines?: JSONFilter | null;

  taxable?: BooleanFilter | null;

  totalDiscount?: StringFilter | null;

  totalDiscountSet?: JSONFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type IDFilter = {

  equals?: (Scalars['GadgetID'] | null) | null;

  notEquals?: (Scalars['GadgetID'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['GadgetID'] | null) | null)[];

  notIn?: ((Scalars['GadgetID'] | null) | null)[];

  lessThan?: (Scalars['GadgetID'] | null) | null;

  lessThanOrEqual?: (Scalars['GadgetID'] | null) | null;

  greaterThan?: (Scalars['GadgetID'] | null) | null;

  greaterThanOrEqual?: (Scalars['GadgetID'] | null) | null;
};



export type DateTimeFilter = {

  equals?: Date | Scalars['ISO8601DateString'] | null;

  notEquals?: Date | Scalars['ISO8601DateString'] | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: (Date | Scalars['ISO8601DateString'] | null)[];

  notIn?: (Date | Scalars['ISO8601DateString'] | null)[];

  lessThan?: Date | Scalars['ISO8601DateString'] | null;

  lessThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  greaterThan?: Date | Scalars['ISO8601DateString'] | null;

  greaterThanOrEqual?: Date | Scalars['ISO8601DateString'] | null;

  before?: Date | Scalars['ISO8601DateString'] | null;

  after?: Date | Scalars['ISO8601DateString'] | null;
};



export type JSONFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['JSON'] | null) | null;

  in?: ((Scalars['JSON'] | null) | null)[];

  notIn?: ((Scalars['JSON'] | null) | null)[];

  notEquals?: (Scalars['JSON'] | null) | null;

  matches?: (Scalars['JSON'] | null) | null;
};



export type FloatFilter = {

  equals?: (Scalars['Float'] | null) | null;

  notEquals?: (Scalars['Float'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['Float'] | null) | null)[];

  notIn?: ((Scalars['Float'] | null) | null)[];

  lessThan?: (Scalars['Float'] | null) | null;

  lessThanOrEqual?: (Scalars['Float'] | null) | null;

  greaterThan?: (Scalars['Float'] | null) | null;

  greaterThanOrEqual?: (Scalars['Float'] | null) | null;
};



export type StringFilter = {

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];

  notIn?: ((Scalars['String'] | null) | null)[];

  lessThan?: (Scalars['String'] | null) | null;

  lessThanOrEqual?: (Scalars['String'] | null) | null;

  greaterThan?: (Scalars['String'] | null) | null;

  greaterThanOrEqual?: (Scalars['String'] | null) | null;

  startsWith?: (Scalars['String'] | null) | null;
};



export type BooleanFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['Boolean'] | null) | null;

  notEquals?: (Scalars['Boolean'] | null) | null;
};



export type ShopifyOrderRelationshipFilter = {

  AND?: (ShopifyOrderRelationshipFilter | null)[];

  OR?: (ShopifyOrderRelationshipFilter | null)[];

  NOT?: (ShopifyOrderRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  statusPageUrl?: StringFilter | null;

  totalCashRoundingAdjustment?: JSONFilter | null;

  fulfillmentsCount?: JSONFilter | null;

  retailLocationId?: IDFilter | null;

  retailLocation?: ShopifyLocationRelationshipFilter | null;

  cancellation?: JSONFilter | null;

  risk?: JSONFilter | null;

  transactionsCount?: JSONFilter | null;

  shopifyProtect?: JSONFilter | null;

  taxExempt?: BooleanFilter | null;

  currentTotalAdditionalFeesSet?: JSONFilter | null;

  originalTotalAdditionalFeesSet?: JSONFilter | null;

  poNumber?: StringFilter | null;

  additionalFees?: JSONFilter | null;

  merchantOfRecordAppId?: FloatFilter | null;

  billingAddress?: JSONFilter | null;

  sourceIdentifier?: StringFilter | null;

  sourceUrl?: StringFilter | null;

  browserIp?: StringFilter | null;

  buyerAcceptsMarketing?: BooleanFilter | null;

  cancelReason?: StringFilter | null;

  cancelledAt?: DateTimeFilter | null;

  cartToken?: StringFilter | null;

  checkoutToken?: StringFilter | null;

  clientDetails?: JSONFilter | null;

  closedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  currentSubtotalPrice?: StringFilter | null;

  currentSubtotalPriceSet?: JSONFilter | null;

  currentTotalDiscounts?: StringFilter | null;

  currentTotalDiscountsSet?: JSONFilter | null;

  currentTotalDutiesSet?: JSONFilter | null;

  currentTotalPrice?: StringFilter | null;

  currentTotalPriceSet?: JSONFilter | null;

  currentTotalTax?: StringFilter | null;

  currentTotalTaxSet?: JSONFilter | null;

  customerLocale?: StringFilter | null;

  discountApplications?: JSONFilter | null;

  discountCodes?: JSONFilter | null;

  email?: StringFilter | null;

  estimatedTaxes?: BooleanFilter | null;

  financialStatus?: StringFilter | null;

  fulfillmentStatus?: StringFilter | null;

  landingSite?: StringFilter | null;

  lineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  name?: StringFilter | null;

  note?: StringFilter | null;

  noteAttributes?: JSONFilter | null;

  number?: FloatFilter | null;

  orderNumber?: FloatFilter | null;

  orderStatusUrl?: StringFilter | null;

  originalTotalDutiesSet?: JSONFilter | null;

  paymentGatewayNames?: JSONFilter | null;

  phone?: StringFilter | null;

  presentmentCurrency?: StringFilter | null;

  processedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  referringSite?: StringFilter | null;

  shippingAddress?: JSONFilter | null;

  sourceName?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  subtotalPrice?: StringFilter | null;

  subtotalPriceSet?: JSONFilter | null;

  tags?: JSONFilter | null;

  taxLines?: JSONFilter | null;

  taxesIncluded?: BooleanFilter | null;

  test?: BooleanFilter | null;

  token?: StringFilter | null;

  totalDiscounts?: StringFilter | null;

  totalDiscountsSet?: JSONFilter | null;

  totalLineItemsPrice?: StringFilter | null;

  totalLineItemsPriceSet?: JSONFilter | null;

  totalOutstanding?: StringFilter | null;

  totalPrice?: StringFilter | null;

  totalPriceSet?: JSONFilter | null;

  totalShippingPriceSet?: JSONFilter | null;

  totalTax?: StringFilter | null;

  totalTaxSet?: JSONFilter | null;

  totalTipReceived?: StringFilter | null;

  totalWeight?: FloatFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyLocationRelationshipFilter = {

  AND?: (ShopifyLocationRelationshipFilter | null)[];

  OR?: (ShopifyLocationRelationshipFilter | null)[];

  NOT?: (ShopifyLocationRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  active?: BooleanFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  city?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  legacy?: BooleanFilter | null;

  inventoryItems?: ShopifyInventoryItemsRelationshipFilter | null;

  localizedCountryName?: StringFilter | null;

  localizedProvinceName?: StringFilter | null;

  name?: StringFilter | null;

  orders?: ShopifyOrdersRelationshipFilter | null;

  orderLineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  phone?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  zipCode?: StringFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyInventoryItemsRelationshipFilter = {

  some?: ShopifyInventoryItemsInnerRelationshipFilter | null;

  every?: ShopifyInventoryItemsInnerRelationshipFilter | null;
};



export type ShopifyInventoryItemsInnerRelationshipFilter = {

  AND?: (ShopifyInventoryItemsInnerRelationshipFilter | null)[];

  OR?: (ShopifyInventoryItemsInnerRelationshipFilter | null)[];

  NOT?: (ShopifyInventoryItemsInnerRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  measurement?: JSONFilter | null;

  duplicateSkuCount?: FloatFilter | null;

  inventoryHistoryUrl?: StringFilter | null;

  legacyResourceId?: StringFilter | null;

  trackedEditable?: JSONFilter | null;

  unitCost?: JSONFilter | null;

  cost?: StringFilter | null;

  countryCodeOfOrigin?: StringFilter | null;

  countryHarmonizedSystemCodes?: JSONFilter | null;

  productVariant?: ShopifyProductVariantRelationshipFilter | null;

  harmonizedSystemCode?: StringFilter | null;

  provinceCodeOfOrigin?: StringFilter | null;

  locations?: ShopifyLocationsRelationshipFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  tracked?: BooleanFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyProductVariantRelationshipFilter = {

  AND?: (ShopifyProductVariantRelationshipFilter | null)[];

  OR?: (ShopifyProductVariantRelationshipFilter | null)[];

  NOT?: (ShopifyProductVariantRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  barcode?: StringFilter | null;

  compareAtPrice?: StringFilter | null;

  productId?: IDFilter | null;

  product?: ShopifyProductRelationshipFilter | null;

  inventoryPolicy?: StringFilter | null;

  inventoryQuantity?: FloatFilter | null;

  option1?: StringFilter | null;

  inventoryItemId?: IDFilter | null;

  inventoryItem?: ShopifyInventoryItemRelationshipFilter | null;

  selectedOptions?: JSONFilter | null;

  option2?: StringFilter | null;

  option3?: StringFilter | null;

  position?: FloatFilter | null;

  price?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  sku?: StringFilter | null;

  taxCode?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  orderLineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  presentmentPrices?: JSONFilter | null;

  taxable?: BooleanFilter | null;

  title?: StringFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyProductRelationshipFilter = {

  AND?: (ShopifyProductRelationshipFilter | null)[];

  OR?: (ShopifyProductRelationshipFilter | null)[];

  NOT?: (ShopifyProductRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  hasVariantsThatRequiresComponents?: BooleanFilter | null;

  body?: StringFilter | null;

  handle?: StringFilter | null;

  productType?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  publishedAt?: DateTimeFilter | null;

  status?: SingleEnumFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  tags?: JSONFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  vendor?: StringFilter | null;

  orderLineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  category?: JSONFilter | null;

  compareAtPriceRange?: JSONFilter | null;

  productCategory?: JSONFilter | null;

  variants?: ShopifyProductVariantsRelationshipFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type SingleEnumFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  equals?: (Scalars['String'] | null) | null;

  notEquals?: (Scalars['String'] | null) | null;

  in?: ((Scalars['String'] | null) | null)[];
};



export type ShopifyOrderLineItemsRelationshipFilter = {

  some?: ShopifyOrderLineItemsInnerRelationshipFilter | null;

  every?: ShopifyOrderLineItemsInnerRelationshipFilter | null;
};



export type ShopifyOrderLineItemsInnerRelationshipFilter = {

  AND?: (ShopifyOrderLineItemsInnerRelationshipFilter | null)[];

  OR?: (ShopifyOrderLineItemsInnerRelationshipFilter | null)[];

  NOT?: (ShopifyOrderLineItemsInnerRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  attributedStaffs?: JSONFilter | null;

  currentQuantity?: FloatFilter | null;

  fulfillableQuantity?: FloatFilter | null;

  fulfillmentService?: StringFilter | null;

  fulfillmentStatus?: StringFilter | null;

  grams?: FloatFilter | null;

  productExists?: BooleanFilter | null;

  variantInventoryManagement?: StringFilter | null;

  orderId?: IDFilter | null;

  order?: ShopifyOrderRelationshipFilter | null;

  originLocationId?: IDFilter | null;

  originLocation?: ShopifyLocationRelationshipFilter | null;

  productId?: IDFilter | null;

  product?: ShopifyProductRelationshipFilter | null;

  variantId?: IDFilter | null;

  variant?: ShopifyProductVariantRelationshipFilter | null;

  price?: StringFilter | null;

  quantity?: FloatFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  title?: StringFilter | null;

  giftCard?: BooleanFilter | null;

  name?: StringFilter | null;

  variantTitle?: StringFilter | null;

  vendor?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  priceSet?: JSONFilter | null;

  properties?: JSONFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  discountAllocations?: JSONFilter | null;

  taxLines?: JSONFilter | null;

  taxable?: BooleanFilter | null;

  totalDiscount?: StringFilter | null;

  totalDiscountSet?: JSONFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyShopRelationshipFilter = {

  AND?: (ShopifyShopRelationshipFilter | null)[];

  OR?: (ShopifyShopRelationshipFilter | null)[];

  NOT?: (ShopifyShopRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  state?: StateFilter | null;

  customerAccountsV2?: JSONFilter | null;

  transactionalSmsDisabled?: BooleanFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  marketingSmsContentEnabledAtCheckout?: BooleanFilter | null;

  checkoutApiSupported?: BooleanFilter | null;

  city?: StringFilter | null;

  cookieConsentLevel?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  countryName?: StringFilter | null;

  countyTaxes?: JSONFilter | null;

  currency?: StringFilter | null;

  customerEmail?: StringFilter | null;

  domain?: StringFilter | null;

  eligibleForCardReaderGiveaway?: BooleanFilter | null;

  eligibleForPayments?: BooleanFilter | null;

  email?: StringFilter | null;

  enabledPresentmentCurrencies?: JSONFilter | null;

  finances?: BooleanFilter | null;

  forceSsl?: BooleanFilter | null;

  googleAppsDomain?: StringFilter | null;

  googleAppsLoginEnabled?: BooleanFilter | null;

  hasDiscounts?: BooleanFilter | null;

  hasGiftCards?: BooleanFilter | null;

  hasStorefront?: BooleanFilter | null;

  ianaTimezone?: StringFilter | null;

  latitude?: FloatFilter | null;

  longitude?: FloatFilter | null;

  moneyFormat?: StringFilter | null;

  moneyInEmailsFormat?: StringFilter | null;

  moneyWithCurrencyFormat?: StringFilter | null;

  moneyWithCurrencyInEmailsFormat?: StringFilter | null;

  multiLocationEnabled?: BooleanFilter | null;

  myshopifyDomain?: StringFilter | null;

  name?: StringFilter | null;

  passwordEnabled?: BooleanFilter | null;

  phone?: StringFilter | null;

  planDisplayName?: StringFilter | null;

  planName?: StringFilter | null;

  preLaunchEnabled?: BooleanFilter | null;

  primaryLocale?: StringFilter | null;

  province?: StringFilter | null;

  primaryLocationId?: IDFilter | null;

  primaryLocation?: ShopifyLocationRelationshipFilter | null;

  provinceCode?: StringFilter | null;

  requiresExtraPaymentsAgreement?: BooleanFilter | null;

  setupRequired?: BooleanFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  shopOwner?: StringFilter | null;

  source?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  taxShipping?: BooleanFilter | null;

  taxesIncluded?: BooleanFilter | null;

  timezone?: StringFilter | null;

  weightUnit?: StringFilter | null;

  locations?: ShopifyLocationsRelationshipFilter | null;

  inventoryItems?: ShopifyInventoryItemsRelationshipFilter | null;

  inventoryLevels?: ShopifyInventoryLevelsRelationshipFilter | null;

  zipCode?: StringFilter | null;

  orders?: ShopifyOrdersRelationshipFilter | null;

  products?: ShopifyProductsRelationshipFilter | null;

  productVariants?: ShopifyProductVariantsRelationshipFilter | null;

  syncs?: ShopifySyncsRelationshipFilter | null;

  orderLineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  gdprRequests?: ShopifyGdprRequestsRelationshipFilter | null;

  grantedScopes?: JSONFilter | null;

  registeredWebhooks?: JSONFilter | null;

  disabledWebhooks?: JSONFilter | null;

  installedViaApiKey?: StringFilter | null;
};



export type StateFilter = {

  isSet?: (Scalars['Boolean'] | null) | null;

  inState?: (Scalars['String'] | null) | null;
};



export type ShopifyLocationsRelationshipFilter = {

  some?: ShopifyLocationsInnerRelationshipFilter | null;

  every?: ShopifyLocationsInnerRelationshipFilter | null;
};



export type ShopifyLocationsInnerRelationshipFilter = {

  AND?: (ShopifyLocationsInnerRelationshipFilter | null)[];

  OR?: (ShopifyLocationsInnerRelationshipFilter | null)[];

  NOT?: (ShopifyLocationsInnerRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  active?: BooleanFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  city?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  legacy?: BooleanFilter | null;

  inventoryItems?: ShopifyInventoryItemsRelationshipFilter | null;

  localizedCountryName?: StringFilter | null;

  localizedProvinceName?: StringFilter | null;

  name?: StringFilter | null;

  orders?: ShopifyOrdersRelationshipFilter | null;

  orderLineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  phone?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  zipCode?: StringFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyOrdersRelationshipFilter = {

  some?: ShopifyOrdersInnerRelationshipFilter | null;

  every?: ShopifyOrdersInnerRelationshipFilter | null;
};



export type ShopifyOrdersInnerRelationshipFilter = {

  AND?: (ShopifyOrdersInnerRelationshipFilter | null)[];

  OR?: (ShopifyOrdersInnerRelationshipFilter | null)[];

  NOT?: (ShopifyOrdersInnerRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  statusPageUrl?: StringFilter | null;

  totalCashRoundingAdjustment?: JSONFilter | null;

  fulfillmentsCount?: JSONFilter | null;

  retailLocationId?: IDFilter | null;

  retailLocation?: ShopifyLocationRelationshipFilter | null;

  cancellation?: JSONFilter | null;

  risk?: JSONFilter | null;

  transactionsCount?: JSONFilter | null;

  shopifyProtect?: JSONFilter | null;

  taxExempt?: BooleanFilter | null;

  currentTotalAdditionalFeesSet?: JSONFilter | null;

  originalTotalAdditionalFeesSet?: JSONFilter | null;

  poNumber?: StringFilter | null;

  additionalFees?: JSONFilter | null;

  merchantOfRecordAppId?: FloatFilter | null;

  billingAddress?: JSONFilter | null;

  sourceIdentifier?: StringFilter | null;

  sourceUrl?: StringFilter | null;

  browserIp?: StringFilter | null;

  buyerAcceptsMarketing?: BooleanFilter | null;

  cancelReason?: StringFilter | null;

  cancelledAt?: DateTimeFilter | null;

  cartToken?: StringFilter | null;

  checkoutToken?: StringFilter | null;

  clientDetails?: JSONFilter | null;

  closedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  currentSubtotalPrice?: StringFilter | null;

  currentSubtotalPriceSet?: JSONFilter | null;

  currentTotalDiscounts?: StringFilter | null;

  currentTotalDiscountsSet?: JSONFilter | null;

  currentTotalDutiesSet?: JSONFilter | null;

  currentTotalPrice?: StringFilter | null;

  currentTotalPriceSet?: JSONFilter | null;

  currentTotalTax?: StringFilter | null;

  currentTotalTaxSet?: JSONFilter | null;

  customerLocale?: StringFilter | null;

  discountApplications?: JSONFilter | null;

  discountCodes?: JSONFilter | null;

  email?: StringFilter | null;

  estimatedTaxes?: BooleanFilter | null;

  financialStatus?: StringFilter | null;

  fulfillmentStatus?: StringFilter | null;

  landingSite?: StringFilter | null;

  lineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  name?: StringFilter | null;

  note?: StringFilter | null;

  noteAttributes?: JSONFilter | null;

  number?: FloatFilter | null;

  orderNumber?: FloatFilter | null;

  orderStatusUrl?: StringFilter | null;

  originalTotalDutiesSet?: JSONFilter | null;

  paymentGatewayNames?: JSONFilter | null;

  phone?: StringFilter | null;

  presentmentCurrency?: StringFilter | null;

  processedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  referringSite?: StringFilter | null;

  shippingAddress?: JSONFilter | null;

  sourceName?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  subtotalPrice?: StringFilter | null;

  subtotalPriceSet?: JSONFilter | null;

  tags?: JSONFilter | null;

  taxLines?: JSONFilter | null;

  taxesIncluded?: BooleanFilter | null;

  test?: BooleanFilter | null;

  token?: StringFilter | null;

  totalDiscounts?: StringFilter | null;

  totalDiscountsSet?: JSONFilter | null;

  totalLineItemsPrice?: StringFilter | null;

  totalLineItemsPriceSet?: JSONFilter | null;

  totalOutstanding?: StringFilter | null;

  totalPrice?: StringFilter | null;

  totalPriceSet?: JSONFilter | null;

  totalShippingPriceSet?: JSONFilter | null;

  totalTax?: StringFilter | null;

  totalTaxSet?: JSONFilter | null;

  totalTipReceived?: StringFilter | null;

  totalWeight?: FloatFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyInventoryLevelsRelationshipFilter = {

  some?: ShopifyInventoryLevelsInnerRelationshipFilter | null;

  every?: ShopifyInventoryLevelsInnerRelationshipFilter | null;
};



export type ShopifyInventoryLevelsInnerRelationshipFilter = {

  AND?: (ShopifyInventoryLevelsInnerRelationshipFilter | null)[];

  OR?: (ShopifyInventoryLevelsInnerRelationshipFilter | null)[];

  NOT?: (ShopifyInventoryLevelsInnerRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  canDeactivate?: BooleanFilter | null;

  deactivationAlert?: StringFilter | null;

  adminGraphqlApiId?: StringFilter | null;

  available?: FloatFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  inventoryItemId?: IDFilter | null;

  inventoryItem?: ShopifyInventoryItemRelationshipFilter | null;

  locationId?: IDFilter | null;

  location?: ShopifyLocationRelationshipFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyInventoryItemRelationshipFilter = {

  AND?: (ShopifyInventoryItemRelationshipFilter | null)[];

  OR?: (ShopifyInventoryItemRelationshipFilter | null)[];

  NOT?: (ShopifyInventoryItemRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  isSet?: (Scalars['Boolean'] | null) | null;

  measurement?: JSONFilter | null;

  duplicateSkuCount?: FloatFilter | null;

  inventoryHistoryUrl?: StringFilter | null;

  legacyResourceId?: StringFilter | null;

  trackedEditable?: JSONFilter | null;

  unitCost?: JSONFilter | null;

  cost?: StringFilter | null;

  countryCodeOfOrigin?: StringFilter | null;

  countryHarmonizedSystemCodes?: JSONFilter | null;

  productVariant?: ShopifyProductVariantRelationshipFilter | null;

  harmonizedSystemCode?: StringFilter | null;

  provinceCodeOfOrigin?: StringFilter | null;

  locations?: ShopifyLocationsRelationshipFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  tracked?: BooleanFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyProductsRelationshipFilter = {

  some?: ShopifyProductsInnerRelationshipFilter | null;

  every?: ShopifyProductsInnerRelationshipFilter | null;
};



export type ShopifyProductsInnerRelationshipFilter = {

  AND?: (ShopifyProductsInnerRelationshipFilter | null)[];

  OR?: (ShopifyProductsInnerRelationshipFilter | null)[];

  NOT?: (ShopifyProductsInnerRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  hasVariantsThatRequiresComponents?: BooleanFilter | null;

  body?: StringFilter | null;

  handle?: StringFilter | null;

  productType?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  publishedAt?: DateTimeFilter | null;

  status?: SingleEnumFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  tags?: JSONFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  vendor?: StringFilter | null;

  orderLineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  category?: JSONFilter | null;

  compareAtPriceRange?: JSONFilter | null;

  productCategory?: JSONFilter | null;

  variants?: ShopifyProductVariantsRelationshipFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyProductVariantsRelationshipFilter = {

  some?: ShopifyProductVariantsInnerRelationshipFilter | null;

  every?: ShopifyProductVariantsInnerRelationshipFilter | null;
};



export type ShopifyProductVariantsInnerRelationshipFilter = {

  AND?: (ShopifyProductVariantsInnerRelationshipFilter | null)[];

  OR?: (ShopifyProductVariantsInnerRelationshipFilter | null)[];

  NOT?: (ShopifyProductVariantsInnerRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  barcode?: StringFilter | null;

  compareAtPrice?: StringFilter | null;

  productId?: IDFilter | null;

  product?: ShopifyProductRelationshipFilter | null;

  inventoryPolicy?: StringFilter | null;

  inventoryQuantity?: FloatFilter | null;

  option1?: StringFilter | null;

  inventoryItemId?: IDFilter | null;

  inventoryItem?: ShopifyInventoryItemRelationshipFilter | null;

  selectedOptions?: JSONFilter | null;

  option2?: StringFilter | null;

  option3?: StringFilter | null;

  position?: FloatFilter | null;

  price?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  sku?: StringFilter | null;

  taxCode?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  orderLineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  presentmentPrices?: JSONFilter | null;

  taxable?: BooleanFilter | null;

  title?: StringFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifySyncsRelationshipFilter = {

  some?: ShopifySyncsInnerRelationshipFilter | null;

  every?: ShopifySyncsInnerRelationshipFilter | null;
};



export type ShopifySyncsInnerRelationshipFilter = {

  AND?: (ShopifySyncsInnerRelationshipFilter | null)[];

  OR?: (ShopifySyncsInnerRelationshipFilter | null)[];

  NOT?: (ShopifySyncsInnerRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  errorMessage?: StringFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;

  syncSince?: DateTimeFilter | null;

  domain?: StringFilter | null;

  errorDetails?: StringFilter | null;

  models?: JSONFilter | null;

  force?: BooleanFilter | null;
};



export type ShopifyGdprRequestsRelationshipFilter = {

  some?: ShopifyGdprRequestsInnerRelationshipFilter | null;

  every?: ShopifyGdprRequestsInnerRelationshipFilter | null;
};



export type ShopifyGdprRequestsInnerRelationshipFilter = {

  AND?: (ShopifyGdprRequestsInnerRelationshipFilter | null)[];

  OR?: (ShopifyGdprRequestsInnerRelationshipFilter | null)[];

  NOT?: (ShopifyGdprRequestsInnerRelationshipFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  topic?: SingleEnumFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;

  payload?: JSONFilter | null;
};



export type ShopifyProductVariantSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the barcode field. Defaults to ascending (smallest value first). */
  barcode?: SortOrder | null;

  /** Sort the results by the compareAtPrice field. Defaults to ascending (smallest value first). */
  compareAtPrice?: SortOrder | null;

  /** Sort the results by the inventoryPolicy field. Defaults to ascending (smallest value first). */
  inventoryPolicy?: SortOrder | null;

  /** Sort the results by the inventoryQuantity field. Defaults to ascending (smallest value first). */
  inventoryQuantity?: SortOrder | null;

  /** Sort the results by the option1 field. Defaults to ascending (smallest value first). */
  option1?: SortOrder | null;

  /** Sort the results by the selectedOptions field. Defaults to ascending (smallest value first). */
  selectedOptions?: SortOrder | null;

  /** Sort the results by the option2 field. Defaults to ascending (smallest value first). */
  option2?: SortOrder | null;

  /** Sort the results by the option3 field. Defaults to ascending (smallest value first). */
  option3?: SortOrder | null;

  /** Sort the results by the position field. Defaults to ascending (smallest value first). */
  position?: SortOrder | null;

  /** Sort the results by the price field. Defaults to ascending (smallest value first). */
  price?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: SortOrder | null;

  /** Sort the results by the taxCode field. Defaults to ascending (smallest value first). */
  taxCode?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the presentmentPrices field. Defaults to ascending (smallest value first). */
  presentmentPrices?: SortOrder | null;

  /** Sort the results by the taxable field. Defaults to ascending (smallest value first). */
  taxable?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;
};



export type ShopifyProductVariantFilter = {

  AND?: (ShopifyProductVariantFilter | null)[];

  OR?: (ShopifyProductVariantFilter | null)[];

  NOT?: (ShopifyProductVariantFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  barcode?: StringFilter | null;

  compareAtPrice?: StringFilter | null;

  productId?: IDFilter | null;

  product?: ShopifyProductRelationshipFilter | null;

  inventoryPolicy?: StringFilter | null;

  inventoryQuantity?: FloatFilter | null;

  option1?: StringFilter | null;

  inventoryItemId?: IDFilter | null;

  inventoryItem?: ShopifyInventoryItemRelationshipFilter | null;

  selectedOptions?: JSONFilter | null;

  option2?: StringFilter | null;

  option3?: StringFilter | null;

  position?: FloatFilter | null;

  price?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  sku?: StringFilter | null;

  taxCode?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  orderLineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  presentmentPrices?: JSONFilter | null;

  taxable?: BooleanFilter | null;

  title?: StringFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyOrderSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the statusPageUrl field. Defaults to ascending (smallest value first). */
  statusPageUrl?: SortOrder | null;

  /** Sort the results by the totalCashRoundingAdjustment field. Defaults to ascending (smallest value first). */
  totalCashRoundingAdjustment?: SortOrder | null;

  /** Sort the results by the fulfillmentsCount field. Defaults to ascending (smallest value first). */
  fulfillmentsCount?: SortOrder | null;

  /** Sort the results by the cancellation field. Defaults to ascending (smallest value first). */
  cancellation?: SortOrder | null;

  /** Sort the results by the risk field. Defaults to ascending (smallest value first). */
  risk?: SortOrder | null;

  /** Sort the results by the transactionsCount field. Defaults to ascending (smallest value first). */
  transactionsCount?: SortOrder | null;

  /** Sort the results by the shopifyProtect field. Defaults to ascending (smallest value first). */
  shopifyProtect?: SortOrder | null;

  /** Sort the results by the taxExempt field. Defaults to ascending (smallest value first). */
  taxExempt?: SortOrder | null;

  /** Sort the results by the currentTotalAdditionalFeesSet field. Defaults to ascending (smallest value first). */
  currentTotalAdditionalFeesSet?: SortOrder | null;

  /** Sort the results by the originalTotalAdditionalFeesSet field. Defaults to ascending (smallest value first). */
  originalTotalAdditionalFeesSet?: SortOrder | null;

  /** Sort the results by the poNumber field. Defaults to ascending (smallest value first). */
  poNumber?: SortOrder | null;

  /** Sort the results by the additionalFees field. Defaults to ascending (smallest value first). */
  additionalFees?: SortOrder | null;

  /** Sort the results by the merchantOfRecordAppId field. Defaults to ascending (smallest value first). */
  merchantOfRecordAppId?: SortOrder | null;

  /** Sort the results by the billingAddress field. Defaults to ascending (smallest value first). */
  billingAddress?: SortOrder | null;

  /** Sort the results by the sourceIdentifier field. Defaults to ascending (smallest value first). */
  sourceIdentifier?: SortOrder | null;

  /** Sort the results by the sourceUrl field. Defaults to ascending (smallest value first). */
  sourceUrl?: SortOrder | null;

  /** Sort the results by the browserIp field. Defaults to ascending (smallest value first). */
  browserIp?: SortOrder | null;

  /** Sort the results by the buyerAcceptsMarketing field. Defaults to ascending (smallest value first). */
  buyerAcceptsMarketing?: SortOrder | null;

  /** Sort the results by the cancelReason field. Defaults to ascending (smallest value first). */
  cancelReason?: SortOrder | null;

  /** Sort the results by the cancelledAt field. Defaults to ascending (smallest value first). */
  cancelledAt?: SortOrder | null;

  /** Sort the results by the cartToken field. Defaults to ascending (smallest value first). */
  cartToken?: SortOrder | null;

  /** Sort the results by the checkoutToken field. Defaults to ascending (smallest value first). */
  checkoutToken?: SortOrder | null;

  /** Sort the results by the clientDetails field. Defaults to ascending (smallest value first). */
  clientDetails?: SortOrder | null;

  /** Sort the results by the closedAt field. Defaults to ascending (smallest value first). */
  closedAt?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the currentSubtotalPrice field. Defaults to ascending (smallest value first). */
  currentSubtotalPrice?: SortOrder | null;

  /** Sort the results by the currentSubtotalPriceSet field. Defaults to ascending (smallest value first). */
  currentSubtotalPriceSet?: SortOrder | null;

  /** Sort the results by the currentTotalDiscounts field. Defaults to ascending (smallest value first). */
  currentTotalDiscounts?: SortOrder | null;

  /** Sort the results by the currentTotalDiscountsSet field. Defaults to ascending (smallest value first). */
  currentTotalDiscountsSet?: SortOrder | null;

  /** Sort the results by the currentTotalDutiesSet field. Defaults to ascending (smallest value first). */
  currentTotalDutiesSet?: SortOrder | null;

  /** Sort the results by the currentTotalPrice field. Defaults to ascending (smallest value first). */
  currentTotalPrice?: SortOrder | null;

  /** Sort the results by the currentTotalPriceSet field. Defaults to ascending (smallest value first). */
  currentTotalPriceSet?: SortOrder | null;

  /** Sort the results by the currentTotalTax field. Defaults to ascending (smallest value first). */
  currentTotalTax?: SortOrder | null;

  /** Sort the results by the currentTotalTaxSet field. Defaults to ascending (smallest value first). */
  currentTotalTaxSet?: SortOrder | null;

  /** Sort the results by the customerLocale field. Defaults to ascending (smallest value first). */
  customerLocale?: SortOrder | null;

  /** Sort the results by the discountApplications field. Defaults to ascending (smallest value first). */
  discountApplications?: SortOrder | null;

  /** Sort the results by the discountCodes field. Defaults to ascending (smallest value first). */
  discountCodes?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the estimatedTaxes field. Defaults to ascending (smallest value first). */
  estimatedTaxes?: SortOrder | null;

  /** Sort the results by the financialStatus field. Defaults to ascending (smallest value first). */
  financialStatus?: SortOrder | null;

  /** Sort the results by the fulfillmentStatus field. Defaults to ascending (smallest value first). */
  fulfillmentStatus?: SortOrder | null;

  /** Sort the results by the landingSite field. Defaults to ascending (smallest value first). */
  landingSite?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the note field. Defaults to ascending (smallest value first). */
  note?: SortOrder | null;

  /** Sort the results by the noteAttributes field. Defaults to ascending (smallest value first). */
  noteAttributes?: SortOrder | null;

  /** Sort the results by the number field. Defaults to ascending (smallest value first). */
  number?: SortOrder | null;

  /** Sort the results by the orderNumber field. Defaults to ascending (smallest value first). */
  orderNumber?: SortOrder | null;

  /** Sort the results by the orderStatusUrl field. Defaults to ascending (smallest value first). */
  orderStatusUrl?: SortOrder | null;

  /** Sort the results by the originalTotalDutiesSet field. Defaults to ascending (smallest value first). */
  originalTotalDutiesSet?: SortOrder | null;

  /** Sort the results by the paymentGatewayNames field. Defaults to ascending (smallest value first). */
  paymentGatewayNames?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the presentmentCurrency field. Defaults to ascending (smallest value first). */
  presentmentCurrency?: SortOrder | null;

  /** Sort the results by the processedAt field. Defaults to ascending (smallest value first). */
  processedAt?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the referringSite field. Defaults to ascending (smallest value first). */
  referringSite?: SortOrder | null;

  /** Sort the results by the shippingAddress field. Defaults to ascending (smallest value first). */
  shippingAddress?: SortOrder | null;

  /** Sort the results by the sourceName field. Defaults to ascending (smallest value first). */
  sourceName?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the subtotalPrice field. Defaults to ascending (smallest value first). */
  subtotalPrice?: SortOrder | null;

  /** Sort the results by the subtotalPriceSet field. Defaults to ascending (smallest value first). */
  subtotalPriceSet?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the taxLines field. Defaults to ascending (smallest value first). */
  taxLines?: SortOrder | null;

  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: SortOrder | null;

  /** Sort the results by the test field. Defaults to ascending (smallest value first). */
  test?: SortOrder | null;

  /** Sort the results by the token field. Defaults to ascending (smallest value first). */
  token?: SortOrder | null;

  /** Sort the results by the totalDiscounts field. Defaults to ascending (smallest value first). */
  totalDiscounts?: SortOrder | null;

  /** Sort the results by the totalDiscountsSet field. Defaults to ascending (smallest value first). */
  totalDiscountsSet?: SortOrder | null;

  /** Sort the results by the totalLineItemsPrice field. Defaults to ascending (smallest value first). */
  totalLineItemsPrice?: SortOrder | null;

  /** Sort the results by the totalLineItemsPriceSet field. Defaults to ascending (smallest value first). */
  totalLineItemsPriceSet?: SortOrder | null;

  /** Sort the results by the totalOutstanding field. Defaults to ascending (smallest value first). */
  totalOutstanding?: SortOrder | null;

  /** Sort the results by the totalPrice field. Defaults to ascending (smallest value first). */
  totalPrice?: SortOrder | null;

  /** Sort the results by the totalPriceSet field. Defaults to ascending (smallest value first). */
  totalPriceSet?: SortOrder | null;

  /** Sort the results by the totalShippingPriceSet field. Defaults to ascending (smallest value first). */
  totalShippingPriceSet?: SortOrder | null;

  /** Sort the results by the totalTax field. Defaults to ascending (smallest value first). */
  totalTax?: SortOrder | null;

  /** Sort the results by the totalTaxSet field. Defaults to ascending (smallest value first). */
  totalTaxSet?: SortOrder | null;

  /** Sort the results by the totalTipReceived field. Defaults to ascending (smallest value first). */
  totalTipReceived?: SortOrder | null;

  /** Sort the results by the totalWeight field. Defaults to ascending (smallest value first). */
  totalWeight?: SortOrder | null;
};



export type ShopifyOrderFilter = {

  AND?: (ShopifyOrderFilter | null)[];

  OR?: (ShopifyOrderFilter | null)[];

  NOT?: (ShopifyOrderFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  statusPageUrl?: StringFilter | null;

  totalCashRoundingAdjustment?: JSONFilter | null;

  fulfillmentsCount?: JSONFilter | null;

  retailLocationId?: IDFilter | null;

  retailLocation?: ShopifyLocationRelationshipFilter | null;

  cancellation?: JSONFilter | null;

  risk?: JSONFilter | null;

  transactionsCount?: JSONFilter | null;

  shopifyProtect?: JSONFilter | null;

  taxExempt?: BooleanFilter | null;

  currentTotalAdditionalFeesSet?: JSONFilter | null;

  originalTotalAdditionalFeesSet?: JSONFilter | null;

  poNumber?: StringFilter | null;

  additionalFees?: JSONFilter | null;

  merchantOfRecordAppId?: FloatFilter | null;

  billingAddress?: JSONFilter | null;

  sourceIdentifier?: StringFilter | null;

  sourceUrl?: StringFilter | null;

  browserIp?: StringFilter | null;

  buyerAcceptsMarketing?: BooleanFilter | null;

  cancelReason?: StringFilter | null;

  cancelledAt?: DateTimeFilter | null;

  cartToken?: StringFilter | null;

  checkoutToken?: StringFilter | null;

  clientDetails?: JSONFilter | null;

  closedAt?: DateTimeFilter | null;

  currency?: StringFilter | null;

  currentSubtotalPrice?: StringFilter | null;

  currentSubtotalPriceSet?: JSONFilter | null;

  currentTotalDiscounts?: StringFilter | null;

  currentTotalDiscountsSet?: JSONFilter | null;

  currentTotalDutiesSet?: JSONFilter | null;

  currentTotalPrice?: StringFilter | null;

  currentTotalPriceSet?: JSONFilter | null;

  currentTotalTax?: StringFilter | null;

  currentTotalTaxSet?: JSONFilter | null;

  customerLocale?: StringFilter | null;

  discountApplications?: JSONFilter | null;

  discountCodes?: JSONFilter | null;

  email?: StringFilter | null;

  estimatedTaxes?: BooleanFilter | null;

  financialStatus?: StringFilter | null;

  fulfillmentStatus?: StringFilter | null;

  landingSite?: StringFilter | null;

  lineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  name?: StringFilter | null;

  note?: StringFilter | null;

  noteAttributes?: JSONFilter | null;

  number?: FloatFilter | null;

  orderNumber?: FloatFilter | null;

  orderStatusUrl?: StringFilter | null;

  originalTotalDutiesSet?: JSONFilter | null;

  paymentGatewayNames?: JSONFilter | null;

  phone?: StringFilter | null;

  presentmentCurrency?: StringFilter | null;

  processedAt?: DateTimeFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  referringSite?: StringFilter | null;

  shippingAddress?: JSONFilter | null;

  sourceName?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  subtotalPrice?: StringFilter | null;

  subtotalPriceSet?: JSONFilter | null;

  tags?: JSONFilter | null;

  taxLines?: JSONFilter | null;

  taxesIncluded?: BooleanFilter | null;

  test?: BooleanFilter | null;

  token?: StringFilter | null;

  totalDiscounts?: StringFilter | null;

  totalDiscountsSet?: JSONFilter | null;

  totalLineItemsPrice?: StringFilter | null;

  totalLineItemsPriceSet?: JSONFilter | null;

  totalOutstanding?: StringFilter | null;

  totalPrice?: StringFilter | null;

  totalPriceSet?: JSONFilter | null;

  totalShippingPriceSet?: JSONFilter | null;

  totalTax?: StringFilter | null;

  totalTaxSet?: JSONFilter | null;

  totalTipReceived?: StringFilter | null;

  totalWeight?: FloatFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyLocationSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the active field. Defaults to ascending (smallest value first). */
  active?: SortOrder | null;

  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: SortOrder | null;

  /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
  address2?: SortOrder | null;

  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: SortOrder | null;

  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: SortOrder | null;

  /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
  countryCode?: SortOrder | null;

  /** Sort the results by the legacy field. Defaults to ascending (smallest value first). */
  legacy?: SortOrder | null;

  /** Sort the results by the localizedCountryName field. Defaults to ascending (smallest value first). */
  localizedCountryName?: SortOrder | null;

  /** Sort the results by the localizedProvinceName field. Defaults to ascending (smallest value first). */
  localizedProvinceName?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: SortOrder | null;

  /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
  provinceCode?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: SortOrder | null;
};



export type ShopifyLocationFilter = {

  AND?: (ShopifyLocationFilter | null)[];

  OR?: (ShopifyLocationFilter | null)[];

  NOT?: (ShopifyLocationFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  active?: BooleanFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  city?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  legacy?: BooleanFilter | null;

  inventoryItems?: ShopifyInventoryItemsRelationshipFilter | null;

  localizedCountryName?: StringFilter | null;

  localizedProvinceName?: StringFilter | null;

  name?: StringFilter | null;

  orders?: ShopifyOrdersRelationshipFilter | null;

  orderLineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  phone?: StringFilter | null;

  province?: StringFilter | null;

  provinceCode?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  zipCode?: StringFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyInventoryItemSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the measurement field. Defaults to ascending (smallest value first). */
  measurement?: SortOrder | null;

  /** Sort the results by the duplicateSkuCount field. Defaults to ascending (smallest value first). */
  duplicateSkuCount?: SortOrder | null;

  /** Sort the results by the inventoryHistoryUrl field. Defaults to ascending (smallest value first). */
  inventoryHistoryUrl?: SortOrder | null;

  /** Sort the results by the legacyResourceId field. Defaults to ascending (smallest value first). */
  legacyResourceId?: SortOrder | null;

  /** Sort the results by the trackedEditable field. Defaults to ascending (smallest value first). */
  trackedEditable?: SortOrder | null;

  /** Sort the results by the unitCost field. Defaults to ascending (smallest value first). */
  unitCost?: SortOrder | null;

  /** Sort the results by the cost field. Defaults to ascending (smallest value first). */
  cost?: SortOrder | null;

  /** Sort the results by the countryCodeOfOrigin field. Defaults to ascending (smallest value first). */
  countryCodeOfOrigin?: SortOrder | null;

  /** Sort the results by the countryHarmonizedSystemCodes field. Defaults to ascending (smallest value first). */
  countryHarmonizedSystemCodes?: SortOrder | null;

  /** Sort the results by the harmonizedSystemCode field. Defaults to ascending (smallest value first). */
  harmonizedSystemCode?: SortOrder | null;

  /** Sort the results by the provinceCodeOfOrigin field. Defaults to ascending (smallest value first). */
  provinceCodeOfOrigin?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the requiresShipping field. Defaults to ascending (smallest value first). */
  requiresShipping?: SortOrder | null;

  /** Sort the results by the sku field. Defaults to ascending (smallest value first). */
  sku?: SortOrder | null;

  /** Sort the results by the tracked field. Defaults to ascending (smallest value first). */
  tracked?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyInventoryItemFilter = {

  AND?: (ShopifyInventoryItemFilter | null)[];

  OR?: (ShopifyInventoryItemFilter | null)[];

  NOT?: (ShopifyInventoryItemFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  measurement?: JSONFilter | null;

  duplicateSkuCount?: FloatFilter | null;

  inventoryHistoryUrl?: StringFilter | null;

  legacyResourceId?: StringFilter | null;

  trackedEditable?: JSONFilter | null;

  unitCost?: JSONFilter | null;

  cost?: StringFilter | null;

  countryCodeOfOrigin?: StringFilter | null;

  countryHarmonizedSystemCodes?: JSONFilter | null;

  productVariant?: ShopifyProductVariantRelationshipFilter | null;

  harmonizedSystemCode?: StringFilter | null;

  provinceCodeOfOrigin?: StringFilter | null;

  locations?: ShopifyLocationsRelationshipFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  requiresShipping?: BooleanFilter | null;

  sku?: StringFilter | null;

  tracked?: BooleanFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyInventoryLevelSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the canDeactivate field. Defaults to ascending (smallest value first). */
  canDeactivate?: SortOrder | null;

  /** Sort the results by the deactivationAlert field. Defaults to ascending (smallest value first). */
  deactivationAlert?: SortOrder | null;

  /** Sort the results by the adminGraphqlApiId field. Defaults to ascending (smallest value first). */
  adminGraphqlApiId?: SortOrder | null;

  /** Sort the results by the available field. Defaults to ascending (smallest value first). */
  available?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;
};



export type ShopifyInventoryLevelFilter = {

  AND?: (ShopifyInventoryLevelFilter | null)[];

  OR?: (ShopifyInventoryLevelFilter | null)[];

  NOT?: (ShopifyInventoryLevelFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  canDeactivate?: BooleanFilter | null;

  deactivationAlert?: StringFilter | null;

  adminGraphqlApiId?: StringFilter | null;

  available?: FloatFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  inventoryItemId?: IDFilter | null;

  inventoryItem?: ShopifyInventoryItemRelationshipFilter | null;

  locationId?: IDFilter | null;

  location?: ShopifyLocationRelationshipFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifyProductSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the hasVariantsThatRequiresComponents field. Defaults to ascending (smallest value first). */
  hasVariantsThatRequiresComponents?: SortOrder | null;

  /** Sort the results by the body field. Defaults to ascending (smallest value first). */
  body?: SortOrder | null;

  /** Sort the results by the handle field. Defaults to ascending (smallest value first). */
  handle?: SortOrder | null;

  /** Sort the results by the productType field. Defaults to ascending (smallest value first). */
  productType?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the publishedAt field. Defaults to ascending (smallest value first). */
  publishedAt?: SortOrder | null;

  /** Sort the results by the status field. Defaults to ascending (smallest value first). */
  status?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the tags field. Defaults to ascending (smallest value first). */
  tags?: SortOrder | null;

  /** Sort the results by the templateSuffix field. Defaults to ascending (smallest value first). */
  templateSuffix?: SortOrder | null;

  /** Sort the results by the title field. Defaults to ascending (smallest value first). */
  title?: SortOrder | null;

  /** Sort the results by the vendor field. Defaults to ascending (smallest value first). */
  vendor?: SortOrder | null;

  /** Sort the results by the category field. Defaults to ascending (smallest value first). */
  category?: SortOrder | null;

  /** Sort the results by the compareAtPriceRange field. Defaults to ascending (smallest value first). */
  compareAtPriceRange?: SortOrder | null;

  /** Sort the results by the productCategory field. Defaults to ascending (smallest value first). */
  productCategory?: SortOrder | null;
};



export type ShopifyProductFilter = {

  AND?: (ShopifyProductFilter | null)[];

  OR?: (ShopifyProductFilter | null)[];

  NOT?: (ShopifyProductFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  hasVariantsThatRequiresComponents?: BooleanFilter | null;

  body?: StringFilter | null;

  handle?: StringFilter | null;

  productType?: StringFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  publishedAt?: DateTimeFilter | null;

  status?: SingleEnumFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  tags?: JSONFilter | null;

  templateSuffix?: StringFilter | null;

  title?: StringFilter | null;

  vendor?: StringFilter | null;

  orderLineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  category?: JSONFilter | null;

  compareAtPriceRange?: JSONFilter | null;

  productCategory?: JSONFilter | null;

  variants?: ShopifyProductVariantsRelationshipFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;
};



export type ShopifySyncSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the errorMessage field. Defaults to ascending (smallest value first). */
  errorMessage?: SortOrder | null;

  /** Sort the results by the syncSince field. Defaults to ascending (smallest value first). */
  syncSince?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the errorDetails field. Defaults to ascending (smallest value first). */
  errorDetails?: SortOrder | null;

  /** Sort the results by the models field. Defaults to ascending (smallest value first). */
  models?: SortOrder | null;

  /** Sort the results by the force field. Defaults to ascending (smallest value first). */
  force?: SortOrder | null;
};



export type ShopifySyncFilter = {

  AND?: (ShopifySyncFilter | null)[];

  OR?: (ShopifySyncFilter | null)[];

  NOT?: (ShopifySyncFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  errorMessage?: StringFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;

  syncSince?: DateTimeFilter | null;

  domain?: StringFilter | null;

  errorDetails?: StringFilter | null;

  models?: JSONFilter | null;

  force?: BooleanFilter | null;
};



export type ShopifyGdprRequestSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the topic field. Defaults to ascending (smallest value first). */
  topic?: SortOrder | null;

  /** Sort the results by the payload field. Defaults to ascending (smallest value first). */
  payload?: SortOrder | null;
};



export type ShopifyGdprRequestFilter = {

  AND?: (ShopifyGdprRequestFilter | null)[];

  OR?: (ShopifyGdprRequestFilter | null)[];

  NOT?: (ShopifyGdprRequestFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  topic?: SingleEnumFilter | null;

  shopId?: IDFilter | null;

  shop?: ShopifyShopRelationshipFilter | null;

  payload?: JSONFilter | null;
};



export type SessionFilter = {

  id?: IDEqualsFilter | null;

  shop?: IDEqualsFilter | null;

  shopId?: IDEqualsFilter | null;

  shopifySID?: StringEqualsFilter | null;
};



export type IDEqualsFilter = {

  equals?: (Scalars['GadgetID'] | null) | null;
};



export type StringEqualsFilter = {

  equals?: (Scalars['String'] | null) | null;
};



export type ShopifyShopSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the state field. Defaults to ascending (smallest value first). */
  state?: SortOrder | null;

  /** Sort the results by the customerAccountsV2 field. Defaults to ascending (smallest value first). */
  customerAccountsV2?: SortOrder | null;

  /** Sort the results by the transactionalSmsDisabled field. Defaults to ascending (smallest value first). */
  transactionalSmsDisabled?: SortOrder | null;

  /** Sort the results by the address1 field. Defaults to ascending (smallest value first). */
  address1?: SortOrder | null;

  /** Sort the results by the address2 field. Defaults to ascending (smallest value first). */
  address2?: SortOrder | null;

  /** Sort the results by the marketingSmsContentEnabledAtCheckout field. Defaults to ascending (smallest value first). */
  marketingSmsContentEnabledAtCheckout?: SortOrder | null;

  /** Sort the results by the checkoutApiSupported field. Defaults to ascending (smallest value first). */
  checkoutApiSupported?: SortOrder | null;

  /** Sort the results by the city field. Defaults to ascending (smallest value first). */
  city?: SortOrder | null;

  /** Sort the results by the cookieConsentLevel field. Defaults to ascending (smallest value first). */
  cookieConsentLevel?: SortOrder | null;

  /** Sort the results by the country field. Defaults to ascending (smallest value first). */
  country?: SortOrder | null;

  /** Sort the results by the countryCode field. Defaults to ascending (smallest value first). */
  countryCode?: SortOrder | null;

  /** Sort the results by the countryName field. Defaults to ascending (smallest value first). */
  countryName?: SortOrder | null;

  /** Sort the results by the countyTaxes field. Defaults to ascending (smallest value first). */
  countyTaxes?: SortOrder | null;

  /** Sort the results by the currency field. Defaults to ascending (smallest value first). */
  currency?: SortOrder | null;

  /** Sort the results by the customerEmail field. Defaults to ascending (smallest value first). */
  customerEmail?: SortOrder | null;

  /** Sort the results by the domain field. Defaults to ascending (smallest value first). */
  domain?: SortOrder | null;

  /** Sort the results by the eligibleForCardReaderGiveaway field. Defaults to ascending (smallest value first). */
  eligibleForCardReaderGiveaway?: SortOrder | null;

  /** Sort the results by the eligibleForPayments field. Defaults to ascending (smallest value first). */
  eligibleForPayments?: SortOrder | null;

  /** Sort the results by the email field. Defaults to ascending (smallest value first). */
  email?: SortOrder | null;

  /** Sort the results by the enabledPresentmentCurrencies field. Defaults to ascending (smallest value first). */
  enabledPresentmentCurrencies?: SortOrder | null;

  /** Sort the results by the finances field. Defaults to ascending (smallest value first). */
  finances?: SortOrder | null;

  /** Sort the results by the forceSsl field. Defaults to ascending (smallest value first). */
  forceSsl?: SortOrder | null;

  /** Sort the results by the googleAppsDomain field. Defaults to ascending (smallest value first). */
  googleAppsDomain?: SortOrder | null;

  /** Sort the results by the googleAppsLoginEnabled field. Defaults to ascending (smallest value first). */
  googleAppsLoginEnabled?: SortOrder | null;

  /** Sort the results by the hasDiscounts field. Defaults to ascending (smallest value first). */
  hasDiscounts?: SortOrder | null;

  /** Sort the results by the hasGiftCards field. Defaults to ascending (smallest value first). */
  hasGiftCards?: SortOrder | null;

  /** Sort the results by the hasStorefront field. Defaults to ascending (smallest value first). */
  hasStorefront?: SortOrder | null;

  /** Sort the results by the ianaTimezone field. Defaults to ascending (smallest value first). */
  ianaTimezone?: SortOrder | null;

  /** Sort the results by the latitude field. Defaults to ascending (smallest value first). */
  latitude?: SortOrder | null;

  /** Sort the results by the longitude field. Defaults to ascending (smallest value first). */
  longitude?: SortOrder | null;

  /** Sort the results by the moneyFormat field. Defaults to ascending (smallest value first). */
  moneyFormat?: SortOrder | null;

  /** Sort the results by the moneyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyFormat?: SortOrder | null;

  /** Sort the results by the moneyWithCurrencyInEmailsFormat field. Defaults to ascending (smallest value first). */
  moneyWithCurrencyInEmailsFormat?: SortOrder | null;

  /** Sort the results by the multiLocationEnabled field. Defaults to ascending (smallest value first). */
  multiLocationEnabled?: SortOrder | null;

  /** Sort the results by the myshopifyDomain field. Defaults to ascending (smallest value first). */
  myshopifyDomain?: SortOrder | null;

  /** Sort the results by the name field. Defaults to ascending (smallest value first). */
  name?: SortOrder | null;

  /** Sort the results by the passwordEnabled field. Defaults to ascending (smallest value first). */
  passwordEnabled?: SortOrder | null;

  /** Sort the results by the phone field. Defaults to ascending (smallest value first). */
  phone?: SortOrder | null;

  /** Sort the results by the planDisplayName field. Defaults to ascending (smallest value first). */
  planDisplayName?: SortOrder | null;

  /** Sort the results by the planName field. Defaults to ascending (smallest value first). */
  planName?: SortOrder | null;

  /** Sort the results by the preLaunchEnabled field. Defaults to ascending (smallest value first). */
  preLaunchEnabled?: SortOrder | null;

  /** Sort the results by the primaryLocale field. Defaults to ascending (smallest value first). */
  primaryLocale?: SortOrder | null;

  /** Sort the results by the province field. Defaults to ascending (smallest value first). */
  province?: SortOrder | null;

  /** Sort the results by the provinceCode field. Defaults to ascending (smallest value first). */
  provinceCode?: SortOrder | null;

  /** Sort the results by the requiresExtraPaymentsAgreement field. Defaults to ascending (smallest value first). */
  requiresExtraPaymentsAgreement?: SortOrder | null;

  /** Sort the results by the setupRequired field. Defaults to ascending (smallest value first). */
  setupRequired?: SortOrder | null;

  /** Sort the results by the shopifyCreatedAt field. Defaults to ascending (smallest value first). */
  shopifyCreatedAt?: SortOrder | null;

  /** Sort the results by the shopOwner field. Defaults to ascending (smallest value first). */
  shopOwner?: SortOrder | null;

  /** Sort the results by the source field. Defaults to ascending (smallest value first). */
  source?: SortOrder | null;

  /** Sort the results by the shopifyUpdatedAt field. Defaults to ascending (smallest value first). */
  shopifyUpdatedAt?: SortOrder | null;

  /** Sort the results by the taxShipping field. Defaults to ascending (smallest value first). */
  taxShipping?: SortOrder | null;

  /** Sort the results by the taxesIncluded field. Defaults to ascending (smallest value first). */
  taxesIncluded?: SortOrder | null;

  /** Sort the results by the timezone field. Defaults to ascending (smallest value first). */
  timezone?: SortOrder | null;

  /** Sort the results by the weightUnit field. Defaults to ascending (smallest value first). */
  weightUnit?: SortOrder | null;

  /** Sort the results by the zipCode field. Defaults to ascending (smallest value first). */
  zipCode?: SortOrder | null;

  /** Sort the results by the grantedScopes field. Defaults to ascending (smallest value first). */
  grantedScopes?: SortOrder | null;

  /** Sort the results by the registeredWebhooks field. Defaults to ascending (smallest value first). */
  registeredWebhooks?: SortOrder | null;

  /** Sort the results by the disabledWebhooks field. Defaults to ascending (smallest value first). */
  disabledWebhooks?: SortOrder | null;

  /** Sort the results by the installedViaApiKey field. Defaults to ascending (smallest value first). */
  installedViaApiKey?: SortOrder | null;
};



export type ShopifyShopFilter = {

  AND?: (ShopifyShopFilter | null)[];

  OR?: (ShopifyShopFilter | null)[];

  NOT?: (ShopifyShopFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  state?: StateFilter | null;

  customerAccountsV2?: JSONFilter | null;

  transactionalSmsDisabled?: BooleanFilter | null;

  address1?: StringFilter | null;

  address2?: StringFilter | null;

  marketingSmsContentEnabledAtCheckout?: BooleanFilter | null;

  checkoutApiSupported?: BooleanFilter | null;

  city?: StringFilter | null;

  cookieConsentLevel?: StringFilter | null;

  country?: StringFilter | null;

  countryCode?: StringFilter | null;

  countryName?: StringFilter | null;

  countyTaxes?: JSONFilter | null;

  currency?: StringFilter | null;

  customerEmail?: StringFilter | null;

  domain?: StringFilter | null;

  eligibleForCardReaderGiveaway?: BooleanFilter | null;

  eligibleForPayments?: BooleanFilter | null;

  email?: StringFilter | null;

  enabledPresentmentCurrencies?: JSONFilter | null;

  finances?: BooleanFilter | null;

  forceSsl?: BooleanFilter | null;

  googleAppsDomain?: StringFilter | null;

  googleAppsLoginEnabled?: BooleanFilter | null;

  hasDiscounts?: BooleanFilter | null;

  hasGiftCards?: BooleanFilter | null;

  hasStorefront?: BooleanFilter | null;

  ianaTimezone?: StringFilter | null;

  latitude?: FloatFilter | null;

  longitude?: FloatFilter | null;

  moneyFormat?: StringFilter | null;

  moneyInEmailsFormat?: StringFilter | null;

  moneyWithCurrencyFormat?: StringFilter | null;

  moneyWithCurrencyInEmailsFormat?: StringFilter | null;

  multiLocationEnabled?: BooleanFilter | null;

  myshopifyDomain?: StringFilter | null;

  name?: StringFilter | null;

  passwordEnabled?: BooleanFilter | null;

  phone?: StringFilter | null;

  planDisplayName?: StringFilter | null;

  planName?: StringFilter | null;

  preLaunchEnabled?: BooleanFilter | null;

  primaryLocale?: StringFilter | null;

  province?: StringFilter | null;

  primaryLocationId?: IDFilter | null;

  primaryLocation?: ShopifyLocationRelationshipFilter | null;

  provinceCode?: StringFilter | null;

  requiresExtraPaymentsAgreement?: BooleanFilter | null;

  setupRequired?: BooleanFilter | null;

  shopifyCreatedAt?: DateTimeFilter | null;

  shopOwner?: StringFilter | null;

  source?: StringFilter | null;

  shopifyUpdatedAt?: DateTimeFilter | null;

  taxShipping?: BooleanFilter | null;

  taxesIncluded?: BooleanFilter | null;

  timezone?: StringFilter | null;

  weightUnit?: StringFilter | null;

  locations?: ShopifyLocationsRelationshipFilter | null;

  inventoryItems?: ShopifyInventoryItemsRelationshipFilter | null;

  inventoryLevels?: ShopifyInventoryLevelsRelationshipFilter | null;

  zipCode?: StringFilter | null;

  orders?: ShopifyOrdersRelationshipFilter | null;

  products?: ShopifyProductsRelationshipFilter | null;

  productVariants?: ShopifyProductVariantsRelationshipFilter | null;

  syncs?: ShopifySyncsRelationshipFilter | null;

  orderLineItems?: ShopifyOrderLineItemsRelationshipFilter | null;

  gdprRequests?: ShopifyGdprRequestsRelationshipFilter | null;

  grantedScopes?: JSONFilter | null;

  registeredWebhooks?: JSONFilter | null;

  disabledWebhooks?: JSONFilter | null;

  installedViaApiKey?: StringFilter | null;
};



export type DraftedProductSort = {

  /** Sort the results by the id field. Defaults to ascending (smallest value first). */
  id?: SortOrder | null;

  /** Sort the results by the createdAt field. Defaults to ascending (smallest value first). */
  createdAt?: SortOrder | null;

  /** Sort the results by the updatedAt field. Defaults to ascending (smallest value first). */
  updatedAt?: SortOrder | null;

  /** Sort the results by the orderId field. Defaults to ascending (smallest value first). */
  orderId?: SortOrder | null;

  /** Sort the results by the productId field. Defaults to ascending (smallest value first). */
  productId?: SortOrder | null;

  /** Sort the results by the productTitle field. Defaults to ascending (smallest value first). */
  productTitle?: SortOrder | null;

  /** Sort the results by the relatedProduct field. Defaults to ascending (smallest value first). */
  relatedProduct?: SortOrder | null;

  /** Sort the results by the shop field. Defaults to ascending (smallest value first). */
  shop?: SortOrder | null;

  /** Sort the results by the swatchId field. Defaults to ascending (smallest value first). */
  swatchId?: SortOrder | null;

  /** Sort the results by the type field. Defaults to ascending (smallest value first). */
  type?: SortOrder | null;

  /** Sort the results by the variant field. Defaults to ascending (smallest value first). */
  variant?: SortOrder | null;
};



export type DraftedProductFilter = {

  AND?: (DraftedProductFilter | null)[];

  OR?: (DraftedProductFilter | null)[];

  NOT?: (DraftedProductFilter | null)[];

  id?: IDFilter | null;

  createdAt?: DateTimeFilter | null;

  updatedAt?: DateTimeFilter | null;

  orderId?: StringFilter | null;

  productId?: StringFilter | null;

  productTitle?: StringFilter | null;

  relatedProduct?: StringFilter | null;

  shop?: StringFilter | null;

  swatchId?: StringFilter | null;

  type?: StringFilter | null;

  variant?: StringFilter | null;
};



export type AbortShopifySyncInput = {

  errorMessage?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;
};



export type ShopifyShopBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type BulkAbortShopifySyncsInput = {

  shopifySync?: AbortShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type CompleteShopifySyncInput = {

  errorMessage?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;
};



export type BulkCompleteShopifySyncsInput = {

  shopifySync?: CompleteShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type ErrorShopifySyncInput = {

  errorMessage?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;
};



export type BulkErrorShopifySyncsInput = {

  shopifySync?: ErrorShopifySyncInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type RunShopifySyncInput = {

  errorMessage?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;
};



export type BulkRunShopifySyncsInput = {

  shopifySync?: RunShopifySyncInput | null;

  startReason?: (Scalars['String'] | null) | null;
};



export type UpsertShopifySyncInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  errorMessage?: (Scalars['String'] | null) | null;

  shop?: ShopifyShopBelongsToInput | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;
};



export type BulkUpsertShopifySyncsInput = {

  /** An array of Strings */
  on?: ((Scalars['String'] | null))[];

  shopifySync?: UpsertShopifySyncInput | null;

  startReason?: (Scalars['String'] | null) | null;
};



export type CreateDraftedProductInput = {

  orderId?: (Scalars['String'] | null) | null;

  productId?: (Scalars['String'] | null) | null;

  productTitle?: (Scalars['String'] | null) | null;

  relatedProduct?: (Scalars['String'] | null) | null;

  shop?: (Scalars['String'] | null) | null;

  swatchId?: (Scalars['String'] | null) | null;

  type?: (Scalars['String'] | null) | null;

  variant?: (Scalars['String'] | null) | null;
};



export type BulkCreateDraftedProductsInput = {

  draftedProduct?: CreateDraftedProductInput | null;
};



export type UpdateDraftedProductInput = {

  orderId?: (Scalars['String'] | null) | null;

  productId?: (Scalars['String'] | null) | null;

  productTitle?: (Scalars['String'] | null) | null;

  relatedProduct?: (Scalars['String'] | null) | null;

  shop?: (Scalars['String'] | null) | null;

  swatchId?: (Scalars['String'] | null) | null;

  type?: (Scalars['String'] | null) | null;

  variant?: (Scalars['String'] | null) | null;
};



export type BulkUpdateDraftedProductsInput = {

  draftedProduct?: UpdateDraftedProductInput | null;

  id: (Scalars['GadgetID'] | null);
};



export type UpsertDraftedProductInput = {

  id?: (Scalars['GadgetID'] | null) | null;

  orderId?: (Scalars['String'] | null) | null;

  productId?: (Scalars['String'] | null) | null;

  productTitle?: (Scalars['String'] | null) | null;

  relatedProduct?: (Scalars['String'] | null) | null;

  shop?: (Scalars['String'] | null) | null;

  swatchId?: (Scalars['String'] | null) | null;

  type?: (Scalars['String'] | null) | null;

  variant?: (Scalars['String'] | null) | null;
};



export type BulkUpsertDraftedProductsInput = {

  /** An array of Strings */
  on?: ((Scalars['String'] | null))[];

  draftedProduct?: UpsertDraftedProductInput | null;
};



export type EnqueueBackgroundActionOptions = {

  /** A fixed ID to assign to this background action. If not passed, a random ID will be generated and assigned. */
  id?: (Scalars['String'] | null) | null;

  /** The priority for executing this action. */
  priority?: BackgroundActionPriority | null;

  /** Group actions into the same queue and limit the concurrency they can run with. */
  queue?: BackgroundActionQueue | null;

  /** Options governing if and how this action will be retried if it fails. */
  retries?: BackgroundActionRetryPolicy | null;

  /** Actions won't be started until after this time. */
  startAt?: Date | Scalars['ISO8601DateString'] | null;
};



export type BackgroundActionQueue = {

  /** The identifier for this queue. */
  name: (Scalars['String'] | null);

  /** The maximum number of actions that will be run at the same time. Defaults to 1 if not passed (only one job per key at once). */
  maxConcurrency?: (Scalars['Int'] | null) | null;
};



export type BackgroundActionRetryPolicy = {

  /** The number of repeat attempts to make if the initial attempt fails. Defaults to 10. Note: the total number of attempts will be this number plus one -- this counts the number of retries *after* the first attempt. */
  retryCount?: (Scalars['Int'] | null) | null;

  /** How long to delay the first retry attempt, in milliseconds. Default is 1000. */
  initialInterval?: (Scalars['Int'] | null) | null;

  /** The maximum amount of time to delay a retry while exponentially backing off in milliseconds. Default is not set, so the retry can backoff indefinitely */
  maxInterval?: (Scalars['Int'] | null) | null;

  /** The exponential backoff factor to use for calculating the retry delay for successive retries. Set this higher to grow the delay faster with each retry attempt. Default is 2. */
  backoffFactor?: (Scalars['Int'] | null) | null;

  /** If true, the retry interval will be randomized by a small amount to avoid all retries happening at the same time. Default is false. */
  randomizeInterval?: (Scalars['Boolean'] | null) | null;
};



export type InternalSessionInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  /** A string list of Gadget platform Role keys to assign to this record */
  roles?: ((Scalars['String'] | null))[];

  shop?: InternalBelongsToInput | null;

  shopifySID?: (Scalars['String'] | null) | null;
};



export type InternalBelongsToInput = {

  /** Existing ID of another record, which you would like to associate this record with */
  _link?: (Scalars['GadgetID'] | null) | null;
};



export type InternalShopifyShopInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  customerAccountsV2?: (Scalars['JSON'] | null) | null;

  transactionalSmsDisabled?: (Scalars['Boolean'] | null) | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  marketingSmsContentEnabledAtCheckout?: (Scalars['Boolean'] | null) | null;

  checkoutApiSupported?: (Scalars['Boolean'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  cookieConsentLevel?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  countryName?: (Scalars['String'] | null) | null;

  countyTaxes?: (Scalars['JSON'] | null) | null;

  currency?: (Scalars['String'] | null) | null;

  customerEmail?: (Scalars['String'] | null) | null;

  domain?: (Scalars['String'] | null) | null;

  eligibleForCardReaderGiveaway?: (Scalars['Boolean'] | null) | null;

  eligibleForPayments?: (Scalars['Boolean'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  enabledPresentmentCurrencies?: (Scalars['JSON'] | null) | null;

  finances?: (Scalars['Boolean'] | null) | null;

  forceSsl?: (Scalars['Boolean'] | null) | null;

  googleAppsDomain?: (Scalars['String'] | null) | null;

  googleAppsLoginEnabled?: (Scalars['Boolean'] | null) | null;

  hasDiscounts?: (Scalars['Boolean'] | null) | null;

  hasGiftCards?: (Scalars['Boolean'] | null) | null;

  hasStorefront?: (Scalars['Boolean'] | null) | null;

  ianaTimezone?: (Scalars['String'] | null) | null;

  latitude?: (Scalars['Float'] | null) | null;

  longitude?: (Scalars['Float'] | null) | null;

  moneyFormat?: (Scalars['String'] | null) | null;

  moneyInEmailsFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyFormat?: (Scalars['String'] | null) | null;

  moneyWithCurrencyInEmailsFormat?: (Scalars['String'] | null) | null;

  multiLocationEnabled?: (Scalars['Boolean'] | null) | null;

  myshopifyDomain?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  passwordEnabled?: (Scalars['Boolean'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  planDisplayName?: (Scalars['String'] | null) | null;

  planName?: (Scalars['String'] | null) | null;

  preLaunchEnabled?: (Scalars['Boolean'] | null) | null;

  primaryLocale?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  primaryLocation?: InternalBelongsToInput | null;

  provinceCode?: (Scalars['String'] | null) | null;

  requiresExtraPaymentsAgreement?: (Scalars['Boolean'] | null) | null;

  setupRequired?: (Scalars['Boolean'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopOwner?: (Scalars['String'] | null) | null;

  source?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  taxShipping?: (Scalars['Boolean'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  timezone?: (Scalars['String'] | null) | null;

  weightUnit?: (Scalars['String'] | null) | null;

  zipCode?: (Scalars['String'] | null) | null;

  accessToken?: (Scalars['String'] | null) | null;

  grantedScopes?: (Scalars['JSON'] | null) | null;

  registeredWebhooks?: (Scalars['JSON'] | null) | null;

  disabledWebhooks?: (Scalars['JSON'] | null) | null;

  installedViaApiKey?: (Scalars['String'] | null) | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyShopAtomicsInput | null;
};



export type InternalShopifyShopAtomicsInput = {

  /** Numeric atomic commands for operating on latitude. */
  latitude?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on longitude. */
  longitude?: (NumericAtomicFieldUpdateInput)[];
};



export type NumericAtomicFieldUpdateInput = {

  /** A number to atomically increment the field value by. Can only be used on numeric fields. */
  increment?: (Scalars['Float'] | null) | null;

  /** A number to atomically decrement the field value by. Can only be used on numeric fields. */
  decrement?: (Scalars['Float'] | null) | null;
};



export type AppGraphQLTriggerMutationContext = {

  /** The ID of the session that triggered this mutation. Will be the session that's loaded in the mutation context. */
  sessionID?: (Scalars['GadgetID'] | null) | null;
};



export type InternalShopifyGdprRequestInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  topic?: ShopifyGdprRequestTopicEnum | null;

  shop?: InternalBelongsToInput | null;

  payload?: (Scalars['JSON'] | null) | null;
};



export type InternalShopifyProductInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  hasVariantsThatRequiresComponents?: (Scalars['Boolean'] | null) | null;

  body?: (Scalars['String'] | null) | null;

  handle?: (Scalars['String'] | null) | null;

  productType?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  publishedAt?: Date | Scalars['ISO8601DateString'] | null;

  status?: ShopifyProductStatusEnum | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  tags?: (Scalars['JSON'] | null) | null;

  templateSuffix?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  vendor?: (Scalars['String'] | null) | null;

  category?: (Scalars['JSON'] | null) | null;

  compareAtPriceRange?: (Scalars['JSON'] | null) | null;

  productCategory?: (Scalars['JSON'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyProductVariantInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  barcode?: (Scalars['String'] | null) | null;

  compareAtPrice?: (Scalars['String'] | null) | null;

  product?: InternalBelongsToInput | null;

  inventoryPolicy?: (Scalars['String'] | null) | null;

  inventoryQuantity?: (Scalars['Float'] | null) | null;

  option1?: (Scalars['String'] | null) | null;

  inventoryItem?: InternalBelongsToInput | null;

  selectedOptions?: (Scalars['JSON'] | null) | null;

  option2?: (Scalars['String'] | null) | null;

  option3?: (Scalars['String'] | null) | null;

  position?: (Scalars['Float'] | null) | null;

  price?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  sku?: (Scalars['String'] | null) | null;

  taxCode?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  presentmentPrices?: (Scalars['JSON'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyProductVariantAtomicsInput | null;
};



export type InternalShopifyProductVariantAtomicsInput = {

  /** Numeric atomic commands for operating on inventoryQuantity. */
  inventoryQuantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on position. */
  position?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyInventoryItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  measurement?: (Scalars['JSON'] | null) | null;

  duplicateSkuCount?: (Scalars['Float'] | null) | null;

  inventoryHistoryUrl?: (Scalars['String'] | null) | null;

  legacyResourceId?: (Scalars['String'] | null) | null;

  trackedEditable?: (Scalars['JSON'] | null) | null;

  unitCost?: (Scalars['JSON'] | null) | null;

  cost?: (Scalars['String'] | null) | null;

  countryCodeOfOrigin?: (Scalars['String'] | null) | null;

  countryHarmonizedSystemCodes?: (Scalars['JSON'] | null) | null;

  harmonizedSystemCode?: (Scalars['String'] | null) | null;

  provinceCodeOfOrigin?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  tracked?: (Scalars['Boolean'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyInventoryItemAtomicsInput | null;
};



export type InternalShopifyInventoryItemAtomicsInput = {

  /** Numeric atomic commands for operating on duplicateSkuCount. */
  duplicateSkuCount?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyLocationInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  active?: (Scalars['Boolean'] | null) | null;

  address1?: (Scalars['String'] | null) | null;

  address2?: (Scalars['String'] | null) | null;

  city?: (Scalars['String'] | null) | null;

  country?: (Scalars['String'] | null) | null;

  countryCode?: (Scalars['String'] | null) | null;

  legacy?: (Scalars['Boolean'] | null) | null;

  localizedCountryName?: (Scalars['String'] | null) | null;

  localizedProvinceName?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  province?: (Scalars['String'] | null) | null;

  provinceCode?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  zipCode?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;
};



export type InternalShopifyInventoryLevelInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  canDeactivate?: (Scalars['Boolean'] | null) | null;

  deactivationAlert?: (Scalars['String'] | null) | null;

  adminGraphqlApiId?: (Scalars['String'] | null) | null;

  available?: (Scalars['Float'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  inventoryItem?: InternalBelongsToInput | null;

  location?: InternalBelongsToInput | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyInventoryLevelAtomicsInput | null;
};



export type InternalShopifyInventoryLevelAtomicsInput = {

  /** Numeric atomic commands for operating on available. */
  available?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyOrderInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  statusPageUrl?: (Scalars['String'] | null) | null;

  totalCashRoundingAdjustment?: (Scalars['JSON'] | null) | null;

  fulfillmentsCount?: (Scalars['JSON'] | null) | null;

  retailLocation?: InternalBelongsToInput | null;

  cancellation?: (Scalars['JSON'] | null) | null;

  risk?: (Scalars['JSON'] | null) | null;

  transactionsCount?: (Scalars['JSON'] | null) | null;

  shopifyProtect?: (Scalars['JSON'] | null) | null;

  taxExempt?: (Scalars['Boolean'] | null) | null;

  currentTotalAdditionalFeesSet?: (Scalars['JSON'] | null) | null;

  originalTotalAdditionalFeesSet?: (Scalars['JSON'] | null) | null;

  poNumber?: (Scalars['String'] | null) | null;

  additionalFees?: (Scalars['JSON'] | null) | null;

  merchantOfRecordAppId?: (Scalars['Float'] | null) | null;

  billingAddress?: (Scalars['JSON'] | null) | null;

  sourceIdentifier?: (Scalars['String'] | null) | null;

  sourceUrl?: (Scalars['String'] | null) | null;

  browserIp?: (Scalars['String'] | null) | null;

  buyerAcceptsMarketing?: (Scalars['Boolean'] | null) | null;

  cancelReason?: (Scalars['String'] | null) | null;

  cancelledAt?: Date | Scalars['ISO8601DateString'] | null;

  cartToken?: (Scalars['String'] | null) | null;

  checkoutToken?: (Scalars['String'] | null) | null;

  clientDetails?: (Scalars['JSON'] | null) | null;

  closedAt?: Date | Scalars['ISO8601DateString'] | null;

  currency?: (Scalars['String'] | null) | null;

  currentSubtotalPrice?: (Scalars['String'] | null) | null;

  currentSubtotalPriceSet?: (Scalars['JSON'] | null) | null;

  currentTotalDiscounts?: (Scalars['String'] | null) | null;

  currentTotalDiscountsSet?: (Scalars['JSON'] | null) | null;

  currentTotalDutiesSet?: (Scalars['JSON'] | null) | null;

  currentTotalPrice?: (Scalars['String'] | null) | null;

  currentTotalPriceSet?: (Scalars['JSON'] | null) | null;

  currentTotalTax?: (Scalars['String'] | null) | null;

  currentTotalTaxSet?: (Scalars['JSON'] | null) | null;

  customerLocale?: (Scalars['String'] | null) | null;

  discountApplications?: (Scalars['JSON'] | null) | null;

  discountCodes?: (Scalars['JSON'] | null) | null;

  email?: (Scalars['String'] | null) | null;

  estimatedTaxes?: (Scalars['Boolean'] | null) | null;

  financialStatus?: (Scalars['String'] | null) | null;

  fulfillmentStatus?: (Scalars['String'] | null) | null;

  landingSite?: (Scalars['String'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  note?: (Scalars['String'] | null) | null;

  noteAttributes?: (Scalars['JSON'] | null) | null;

  number?: (Scalars['Float'] | null) | null;

  orderNumber?: (Scalars['Float'] | null) | null;

  orderStatusUrl?: (Scalars['String'] | null) | null;

  originalTotalDutiesSet?: (Scalars['JSON'] | null) | null;

  paymentGatewayNames?: (Scalars['JSON'] | null) | null;

  phone?: (Scalars['String'] | null) | null;

  presentmentCurrency?: (Scalars['String'] | null) | null;

  processedAt?: Date | Scalars['ISO8601DateString'] | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  referringSite?: (Scalars['String'] | null) | null;

  shippingAddress?: (Scalars['JSON'] | null) | null;

  sourceName?: (Scalars['String'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  subtotalPrice?: (Scalars['String'] | null) | null;

  subtotalPriceSet?: (Scalars['JSON'] | null) | null;

  tags?: (Scalars['JSON'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxesIncluded?: (Scalars['Boolean'] | null) | null;

  test?: (Scalars['Boolean'] | null) | null;

  token?: (Scalars['String'] | null) | null;

  totalDiscounts?: (Scalars['String'] | null) | null;

  totalDiscountsSet?: (Scalars['JSON'] | null) | null;

  totalLineItemsPrice?: (Scalars['String'] | null) | null;

  totalLineItemsPriceSet?: (Scalars['JSON'] | null) | null;

  totalOutstanding?: (Scalars['String'] | null) | null;

  totalPrice?: (Scalars['String'] | null) | null;

  totalPriceSet?: (Scalars['JSON'] | null) | null;

  totalShippingPriceSet?: (Scalars['JSON'] | null) | null;

  totalTax?: (Scalars['String'] | null) | null;

  totalTaxSet?: (Scalars['JSON'] | null) | null;

  totalTipReceived?: (Scalars['String'] | null) | null;

  totalWeight?: (Scalars['Float'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyOrderAtomicsInput | null;
};



export type InternalShopifyOrderAtomicsInput = {

  /** Numeric atomic commands for operating on merchantOfRecordAppId. */
  merchantOfRecordAppId?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on number. */
  number?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on orderNumber. */
  orderNumber?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on totalWeight. */
  totalWeight?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifyOrderLineItemInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  attributedStaffs?: (Scalars['JSON'] | null) | null;

  currentQuantity?: (Scalars['Float'] | null) | null;

  fulfillableQuantity?: (Scalars['Float'] | null) | null;

  fulfillmentService?: (Scalars['String'] | null) | null;

  fulfillmentStatus?: (Scalars['String'] | null) | null;

  grams?: (Scalars['Float'] | null) | null;

  productExists?: (Scalars['Boolean'] | null) | null;

  variantInventoryManagement?: (Scalars['String'] | null) | null;

  order?: InternalBelongsToInput | null;

  originLocation?: InternalBelongsToInput | null;

  product?: InternalBelongsToInput | null;

  variant?: InternalBelongsToInput | null;

  price?: (Scalars['String'] | null) | null;

  quantity?: (Scalars['Float'] | null) | null;

  requiresShipping?: (Scalars['Boolean'] | null) | null;

  sku?: (Scalars['String'] | null) | null;

  title?: (Scalars['String'] | null) | null;

  giftCard?: (Scalars['Boolean'] | null) | null;

  name?: (Scalars['String'] | null) | null;

  variantTitle?: (Scalars['String'] | null) | null;

  vendor?: (Scalars['String'] | null) | null;

  shopifyCreatedAt?: Date | Scalars['ISO8601DateString'] | null;

  priceSet?: (Scalars['JSON'] | null) | null;

  properties?: (Scalars['JSON'] | null) | null;

  shopifyUpdatedAt?: Date | Scalars['ISO8601DateString'] | null;

  discountAllocations?: (Scalars['JSON'] | null) | null;

  taxLines?: (Scalars['JSON'] | null) | null;

  taxable?: (Scalars['Boolean'] | null) | null;

  totalDiscount?: (Scalars['String'] | null) | null;

  totalDiscountSet?: (Scalars['JSON'] | null) | null;

  shop?: InternalBelongsToInput | null;

  /** An optional list of atomically applied commands for race-safe mutations of the record */
  _atomics?: InternalShopifyOrderLineItemAtomicsInput | null;
};



export type InternalShopifyOrderLineItemAtomicsInput = {

  /** Numeric atomic commands for operating on currentQuantity. */
  currentQuantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on fulfillableQuantity. */
  fulfillableQuantity?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on grams. */
  grams?: (NumericAtomicFieldUpdateInput)[];

  /** Numeric atomic commands for operating on quantity. */
  quantity?: (NumericAtomicFieldUpdateInput)[];
};



export type InternalShopifySyncInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  errorMessage?: (Scalars['String'] | null) | null;

  shop?: InternalBelongsToInput | null;

  syncSince?: Date | Scalars['ISO8601DateString'] | null;

  domain?: (Scalars['String'] | null) | null;

  errorDetails?: (Scalars['String'] | null) | null;

  models?: (Scalars['JSON'] | null) | null;

  force?: (Scalars['Boolean'] | null) | null;
};



export type InternalDraftedProductInput = {

  state?: (Scalars['RecordState'] | null) | null;

  stateHistory?: (Scalars['RecordState'] | null) | null;

  id?: (Scalars['GadgetID'] | null) | null;

  createdAt?: Date | Scalars['ISO8601DateString'] | null;

  updatedAt?: Date | Scalars['ISO8601DateString'] | null;

  orderId?: (Scalars['String'] | null) | null;

  productId?: (Scalars['String'] | null) | null;

  productTitle?: (Scalars['String'] | null) | null;

  relatedProduct?: (Scalars['String'] | null) | null;

  shop?: (Scalars['String'] | null) | null;

  swatchId?: (Scalars['String'] | null) | null;

  type?: (Scalars['String'] | null) | null;

  variant?: (Scalars['String'] | null) | null;
};


/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  /** Represents an amount of some currency. Specified as a string so user's aren't tempted to do math on the value. */
  CurrencyAmount: string;
  /** Represents a UTC date formatted an ISO-8601 formatted 'full-date' string. */
  ISO8601DateString: string;
  /** A file object produced by a browser for uploading to cloud storage */
  Upload: File;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: JSONObject;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: JSONValue;
  /** Integer type that can handle bigints and Big numbers */
  Int: number;
  /** The ID of a record in Gadget */
  GadgetID: string;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: Date;
  /** Represents the state of one record in a Gadget database. Represented as either a string or set of strings nested in objects. */
  RecordState: (string | { [key: string]: Scalars['RecordState'] });
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** Instructions for a client to turn raw transport types (like strings) into useful client side types (like Dates). Unstable and not intended for developer use. */
  HydrationPlan: unknown;
};


/** This Error object is returned for errors which don't have other specific handling. It has a message which is safe to display to users, but is often technical in nature. It also has a `code` field which is documented in the Gadget API Error Codes docs. */
export interface SimpleError extends ExecutionError {
  __typename: 'SimpleError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this error. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
};



export type AvailableSimpleErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;
};



export type ExecutionError = {

  __typename: 'SimpleError'|'InvalidRecordError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The Gadget platform error code for this error. */
  code: Scalars['String'];

  /** The stack for any exception that caused the error. Only available for super users. */
  stack: (Scalars['String'] | null);
};



export type AvailableExecutionErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this error. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error. Only available for super users. */
  stack?: boolean | null | undefined;
};


/** This object is returned as an error when a record doesn't pass the defined validations on the model. The validation messages for each of the invalid fields are available via the other fields on this error type. */
export interface InvalidRecordError extends ExecutionError {
  __typename: 'InvalidRecordError';
  /** The human facing error message for this error. */
  message: Scalars['String'];
  /** The Gadget platform error code for this InvalidRecordError. */
  code: Scalars['String'];
  /** The stack for any exception that caused the error */
  stack: (Scalars['String'] | null);
  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField: (Scalars['JSONObject'] | null);
  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors: InvalidFieldError[];
  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record: (Scalars['JSONObject'] | null);
  /** The model of the record which failed validation */
  model: (GadgetModel | null);
};



export type AvailableInvalidRecordErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The Gadget platform error code for this InvalidRecordError. */
  code?: boolean | null | undefined;

  /** The stack for any exception that caused the error */
  stack?: boolean | null | undefined;

  /** An object mapping field apiIdentifiers to arrays of validation error message strings for that field, as a JSON object. The object may have keys that don't correspond exactly to field apiIdentifiers if added by validations, and the object may have missing keys if no errors were encountered for that field. */
  validationErrorsByField?: boolean | null | undefined;

  /** A list of InvalidFieldError objects describing each of the errors encountered on the invalid record. */
  validationErrors?: AvailableInvalidFieldErrorSelection;

  /** The record which failed validation, if available. Returns all the owned fields of the record -- no sub-selections are required or possible. Only available for super users. */
  record?: boolean | null | undefined;

  /** The model of the record which failed validation */
  model?: AvailableGadgetModelSelection;
};


/** This Error object represents one individual failed validation for a record field. It has a message which is appropriate for display to a user, and lists the apiIdentifier of the field in question. The `apiIdentifier` for the field is not guaranteed to exist on the model. */
export type InvalidFieldError = {

  __typename: 'InvalidFieldError';

  /** The human facing error message for this error. */
  message: Scalars['String'];

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier: Scalars['String'];
};



export type AvailableInvalidFieldErrorSelection = {

  __typename?: boolean | null | undefined;

  /** The human facing error message for this error. */
  message?: boolean | null | undefined;

  /** The apiIdentifier of the field this error occurred on. */
  apiIdentifier?: boolean | null | undefined;
};



export type GadgetModel = {

  __typename: 'GadgetModel';

  key: Scalars['String'];

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  namespace: Scalars['String'][];

  filterable: Scalars['Boolean'];

  sortable: Scalars['Boolean'];

  searchable: Scalars['Boolean'];

  defaultDisplayField: GadgetModelField;

  fields: GadgetModelField[];

  actions: GadgetAction[];

  action: (GadgetAction | null);

  pluralName: Scalars['String'];

  pluralApiIdentifier: Scalars['String'];

  currentSingletonApiIdentifier: (Scalars['String'] | null);

  defaultRecord: Scalars['JSON'];

  initialCreatedState: (Scalars['String'] | null);
};



export type AvailableGadgetModelSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  namespace?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  searchable?: boolean | null | undefined;

  defaultDisplayField?: AvailableGadgetModelFieldSelection;

  fields?: AvailableGadgetModelFieldSelection;

  actions?: AvailableGadgetActionSelection;

  action?: AvailableGadgetActionSelection;

  pluralName?: boolean | null | undefined;

  pluralApiIdentifier?: boolean | null | undefined;

  currentSingletonApiIdentifier?: boolean | null | undefined;

  defaultRecord?: boolean | null | undefined;

  initialCreatedState?: boolean | null | undefined;
};


/** One field of a Gadget model */
export interface GadgetModelField extends GadgetField {
  __typename: 'GadgetModelField';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  fieldType: GadgetFieldType;
  hasDefault: Scalars['Boolean'];
  required: Scalars['Boolean'];
  requiredArgumentForInput: Scalars['Boolean'];
  configuration: GadgetFieldConfigInterface;
  isUniqueField: Scalars['Boolean'];
  sortable: Scalars['Boolean'];
  filterable: Scalars['Boolean'];
  examples: GadgetModelFieldExamples;
};



export type AvailableGadgetModelFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;

  isUniqueField?: boolean | null | undefined;

  sortable?: boolean | null | undefined;

  filterable?: boolean | null | undefined;

  examples?: AvailableGadgetModelFieldExamplesSelection;
};



export type GadgetField = {

  __typename: 'GadgetModelField'|'GadgetObjectField';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  fieldType: GadgetFieldType;

  hasDefault: Scalars['Boolean'];

  required: Scalars['Boolean'];

  requiredArgumentForInput: Scalars['Boolean'];

  configuration: GadgetFieldConfigInterface;
};



export type AvailableGadgetFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};


/** The common bits that all field configuration types share */
export type GadgetFieldConfigInterface = {

  __typename: 'GadgetGenericFieldConfig'|'GadgetObjectFieldConfig'|'GadgetBelongsToConfig'|'GadgetHasOneConfig'|'GadgetHasManyConfig'|'GadgetHasManyThroughConfig'|'GadgetEnumConfig'|'GadgetDateTimeConfig'|'GadgetNumberConfig';

  fieldType: GadgetFieldType;

  validations: (GadgetFieldValidationUnion | null)[];
};



export type AvailableGadgetFieldConfigInterfaceSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;
};



export type GadgetModelFieldExamples = {

  __typename: 'GadgetModelFieldExamples';

  linkExistingChild: (GadgetFieldUsageExample | null);

  linkNewChild: (GadgetFieldUsageExample | null);

  linkToExistingParent: (GadgetFieldUsageExample | null);

  createNestedInParent: (GadgetFieldUsageExample | null);
};



export type AvailableGadgetModelFieldExamplesSelection = {

  __typename?: boolean | null | undefined;

  linkExistingChild?: AvailableGadgetFieldUsageExampleSelection;

  linkNewChild?: AvailableGadgetFieldUsageExampleSelection;

  linkToExistingParent?: AvailableGadgetFieldUsageExampleSelection;

  createNestedInParent?: AvailableGadgetFieldUsageExampleSelection;
};



export type GadgetFieldUsageExample = {

  __typename: 'GadgetFieldUsageExample';

  exampleGraphQLMutation: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];
};



export type AvailableGadgetFieldUsageExampleSelection = {

  __typename?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;
};



export type GadgetAction = {

  __typename: 'GadgetAction';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  namespace: Scalars['String'][];

  requiresInput: Scalars['Boolean'];

  acceptsInput: Scalars['Boolean'];

  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect: Scalars['Boolean'];

  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect: Scalars['Boolean'];

  isDeleteAction: Scalars['Boolean'];

  isCreateOrUpdateAction: Scalars['Boolean'];

  isUpsertMetaAction: Scalars['Boolean'];

  operatesWithRecordIdentity: Scalars['Boolean'];

  /** @deprecated This field will be removed. */
  possibleTransitions: Scalars['JSONObject'];

  availableInBulk: Scalars['Boolean'];

  bulkApiIdentifier: (Scalars['String'] | null);

  hasAmbiguousIdentifier: Scalars['Boolean'];

  inputFields: GadgetObjectField[];

  bulkInvokedByIDOnly: Scalars['Boolean'];

  triggers: GadgetTrigger[];

  examples: (GadgetActionGraphQLType | null);
};



export type AvailableGadgetActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  namespace?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isDeleteAction` instead. */
  hasDeleteRecordEffect?: boolean | null | undefined;

  /** @deprecated This field will be removed. Use `isCreateOrUpdateAction` instead. */
  hasCreateOrUpdateEffect?: boolean | null | undefined;

  isDeleteAction?: boolean | null | undefined;

  isCreateOrUpdateAction?: boolean | null | undefined;

  isUpsertMetaAction?: boolean | null | undefined;

  operatesWithRecordIdentity?: boolean | null | undefined;

  /** @deprecated This field will be removed. */
  possibleTransitions?: boolean | null | undefined;

  availableInBulk?: boolean | null | undefined;

  bulkApiIdentifier?: boolean | null | undefined;

  hasAmbiguousIdentifier?: boolean | null | undefined;

  inputFields?: AvailableGadgetObjectFieldSelection;

  bulkInvokedByIDOnly?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  examples?: AvailableGadgetActionGraphQLTypeSelection;
};


/** One field of an action input or other transitory object in Gadget */
export interface GadgetObjectField extends GadgetField {
  __typename: 'GadgetObjectField';
  name: Scalars['String'];
  apiIdentifier: Scalars['String'];
  fieldType: GadgetFieldType;
  hasDefault: Scalars['Boolean'];
  required: Scalars['Boolean'];
  requiredArgumentForInput: Scalars['Boolean'];
  configuration: GadgetFieldConfigInterface;
};



export type AvailableGadgetObjectFieldSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  hasDefault?: boolean | null | undefined;

  required?: boolean | null | undefined;

  requiredArgumentForInput?: boolean | null | undefined;

  configuration?: AvailableGadgetFieldConfigInterfaceSelection;
};



export type GadgetTrigger = {

  __typename: 'GadgetTrigger';

  specID: Scalars['String'];
};



export type AvailableGadgetTriggerSelection = {

  __typename?: boolean | null | undefined;

  specID?: boolean | null | undefined;
};



export type GadgetActionGraphQLType = {

  __typename: 'GadgetActionGraphQLType';

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars['String'];

  exampleGraphQLMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleJSInputs: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];

  /** @deprecated moved to exampleBulkGraphQLMutation */
  exampleBulkMutation: (Scalars['String'] | null);

  exampleBulkGraphQLMutation: (Scalars['String'] | null);

  exampleBulkGraphQLVariables: (Scalars['JSON'] | null);

  exampleBulkImperativeInvocation: (Scalars['String'] | null);

  exampleBulkReactHook: (Scalars['String'] | null);

  bulkOutputGraphQLTypeSDL: (Scalars['String'] | null);
};



export type AvailableGadgetActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleJSInputs?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;

  /** @deprecated moved to exampleBulkGraphQLMutation */
  exampleBulkMutation?: boolean | null | undefined;

  exampleBulkGraphQLMutation?: boolean | null | undefined;

  exampleBulkGraphQLVariables?: boolean | null | undefined;

  exampleBulkImperativeInvocation?: boolean | null | undefined;

  exampleBulkReactHook?: boolean | null | undefined;

  bulkOutputGraphQLTypeSDL?: boolean | null | undefined;
};



export interface GadgetGenericFieldConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetGenericFieldConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
};



export type AvailableGadgetGenericFieldConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;
};



export interface GadgetObjectFieldConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetObjectFieldConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  name: (Scalars['String'] | null);
  fields: GadgetModelField[];
};



export type AvailableGadgetObjectFieldConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  name?: boolean | null | undefined;

  fields?: AvailableGadgetModelFieldSelection;
};



export interface GadgetBelongsToConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetBelongsToConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
};



export type AvailableGadgetBelongsToConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;
};



export interface GadgetHasOneConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetHasOneConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  inverseField: (GadgetModelField | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
};



export type AvailableGadgetHasOneConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  inverseField?: AvailableGadgetModelFieldSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;
};



export interface GadgetHasManyConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetHasManyConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  inverseField: (GadgetModelField | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
  isJoinModelHasManyField: Scalars['Boolean'];
};



export type AvailableGadgetHasManyConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  inverseField?: AvailableGadgetModelFieldSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;

  isJoinModelHasManyField?: boolean | null | undefined;
};



export interface GadgetHasManyThroughConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetHasManyThroughConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  relatedModelKey: (Scalars['String'] | null);
  relatedModel: (GadgetModel | null);
  inverseField: (GadgetModelField | null);
  joinModelKey: (Scalars['String'] | null);
  joinModel: (GadgetModel | null);
  inverseJoinModelField: (GadgetModelField | null);
  inverseRelatedModelField: (GadgetModelField | null);
  isConfigured: Scalars['Boolean'];
  isInverseConfigured: Scalars['Boolean'];
};



export type AvailableGadgetHasManyThroughConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  relatedModelKey?: boolean | null | undefined;

  relatedModel?: AvailableGadgetModelSelection;

  inverseField?: AvailableGadgetModelFieldSelection;

  joinModelKey?: boolean | null | undefined;

  joinModel?: AvailableGadgetModelSelection;

  inverseJoinModelField?: AvailableGadgetModelFieldSelection;

  inverseRelatedModelField?: AvailableGadgetModelFieldSelection;

  isConfigured?: boolean | null | undefined;

  isInverseConfigured?: boolean | null | undefined;
};



export interface GadgetEnumConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetEnumConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  allowMultiple: Scalars['Boolean'];
  allowOther: Scalars['Boolean'];
  options: GadgetEnumOption[];
};



export type AvailableGadgetEnumConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  allowMultiple?: boolean | null | undefined;

  allowOther?: boolean | null | undefined;

  options?: AvailableGadgetEnumOptionSelection;
};



export type GadgetEnumOption = {

  __typename: 'GadgetEnumOption';

  name: Scalars['String'];

  color: Scalars['String'];
};



export type AvailableGadgetEnumOptionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  color?: boolean | null | undefined;
};



export interface GadgetDateTimeConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetDateTimeConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  includeTime: Scalars['Boolean'];
};



export type AvailableGadgetDateTimeConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  includeTime?: boolean | null | undefined;
};



export interface GadgetNumberConfig extends GadgetFieldConfigInterface {
  __typename: 'GadgetNumberConfig';
  fieldType: GadgetFieldType;
  validations: (GadgetFieldValidationUnion | null)[];
  decimals: (Scalars['Int'] | null);
};



export type AvailableGadgetNumberConfigSelection = {

  __typename?: boolean | null | undefined;

  fieldType?: boolean | null | undefined;

  validations?: AvailableGadgetFieldValidationUnionSelection;

  decimals?: boolean | null | undefined;
};



export interface GadgetRegexFieldValidation extends GadgetFieldValidationInterface {
  __typename: 'GadgetRegexFieldValidation';
  name: Scalars['String'];
  specID: Scalars['String'];
  pattern: (Scalars['String'] | null);
};



export type AvailableGadgetRegexFieldValidationSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  specID?: boolean | null | undefined;

  pattern?: boolean | null | undefined;
};


/** The common bits that all field validation types share */
export type GadgetFieldValidationInterface = {

  __typename: 'GadgetRegexFieldValidation'|'GadgetRangeFieldValidation'|'GadgetOnlyImageFileFieldValidation'|'GadgetGenericFieldValidation';

  name: Scalars['String'];

  specID: Scalars['String'];
};



export type AvailableGadgetFieldValidationInterfaceSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  specID?: boolean | null | undefined;
};



export interface GadgetRangeFieldValidation extends GadgetFieldValidationInterface {
  __typename: 'GadgetRangeFieldValidation';
  name: Scalars['String'];
  specID: Scalars['String'];
  min: (Scalars['Int'] | null);
  max: (Scalars['Int'] | null);
};



export type AvailableGadgetRangeFieldValidationSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  specID?: boolean | null | undefined;

  min?: boolean | null | undefined;

  max?: boolean | null | undefined;
};



export interface GadgetOnlyImageFileFieldValidation extends GadgetFieldValidationInterface {
  __typename: 'GadgetOnlyImageFileFieldValidation';
  name: Scalars['String'];
  specID: Scalars['String'];
  allowAnimatedImages: Scalars['Boolean'];
};



export type AvailableGadgetOnlyImageFileFieldValidationSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  specID?: boolean | null | undefined;

  allowAnimatedImages?: boolean | null | undefined;
};



export interface GadgetGenericFieldValidation extends GadgetFieldValidationInterface {
  __typename: 'GadgetGenericFieldValidation';
  name: Scalars['String'];
  specID: Scalars['String'];
};



export type AvailableGadgetGenericFieldValidationSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  specID?: boolean | null | undefined;
};



export interface UpsertError extends UpsertShopifyShopResult, UpsertShopifyGdprRequestResult, UpsertShopifyProductResult, UpsertShopifyProductVariantResult, UpsertShopifyInventoryItemResult, UpsertShopifyLocationResult, UpsertShopifyInventoryLevelResult, UpsertShopifyOrderResult, UpsertShopifyOrderLineItemResult, UpsertShopifySyncResult, UpsertDraftedProductResult {
  __typename: 'UpsertError';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertErrorSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifyShopResult = {

  __typename: 'UpsertError'|'UpdateShopifyShopResult'|'InstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifyGdprRequestResult = {

  __typename: 'UpsertError'|'CreateShopifyGdprRequestResult'|'UpdateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifyProductResult = {

  __typename: 'UpsertError'|'CreateShopifyProductResult'|'UpdateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifyProductVariantResult = {

  __typename: 'UpsertError'|'CreateShopifyProductVariantResult'|'UpdateShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifyInventoryItemResult = {

  __typename: 'UpsertError'|'CreateShopifyInventoryItemResult'|'UpdateShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifyLocationResult = {

  __typename: 'UpsertError'|'CreateShopifyLocationResult'|'UpdateShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifyInventoryLevelResult = {

  __typename: 'UpsertError'|'CreateShopifyInventoryLevelResult'|'UpdateShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifyOrderResult = {

  __typename: 'UpsertError'|'CreateShopifyOrderResult'|'UpdateShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifyOrderLineItemResult = {

  __typename: 'UpsertError'|'CreateShopifyOrderLineItemResult'|'UpdateShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertShopifySyncResult = {

  __typename: 'UpsertError'|'AbortShopifySyncResult'|'RunShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type UpsertDraftedProductResult = {

  __typename: 'UpsertError'|'CreateDraftedProductResult'|'UpdateDraftedProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableUpsertDraftedProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type Query = {

  __typename: 'Query';

  session: (Session | null);

  sessions: SessionConnection;

  shopifyShop: (ShopifyShop | null);

  shopifyShops: ShopifyShopConnection;

  shopifyGdprRequest: (ShopifyGdprRequest | null);

  shopifyGdprRequests: ShopifyGdprRequestConnection;

  shopifyProduct: (ShopifyProduct | null);

  shopifyProducts: ShopifyProductConnection;

  shopifyProductVariant: (ShopifyProductVariant | null);

  shopifyProductVariants: ShopifyProductVariantConnection;

  shopifyInventoryItem: (ShopifyInventoryItem | null);

  shopifyInventoryItems: ShopifyInventoryItemConnection;

  shopifyLocation: (ShopifyLocation | null);

  shopifyLocations: ShopifyLocationConnection;

  shopifyInventoryLevel: (ShopifyInventoryLevel | null);

  shopifyInventoryLevels: ShopifyInventoryLevelConnection;

  shopifyOrder: (ShopifyOrder | null);

  shopifyOrders: ShopifyOrderConnection;

  shopifyOrderLineItem: (ShopifyOrderLineItem | null);

  shopifyOrderLineItems: ShopifyOrderLineItemConnection;

  shopifySync: (ShopifySync | null);

  shopifySyncs: ShopifySyncConnection;

  draftedProduct: (DraftedProduct | null);

  draftedProducts: DraftedProductConnection;

  currentSession: (Session | null);

  shopifyConnection: Shopify;

  internal: InternalQueries;
};



export type AvailableQuerySelection = {

  __typename?: boolean | null | undefined;

  session?: AvailableSessionSelection;

  sessions?: AvailableSessionConnectionSelection;

  shopifyShop?: AvailableShopifyShopSelection;

  shopifyShops?: AvailableShopifyShopConnectionSelection;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;

  shopifyGdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  shopifyProduct?: AvailableShopifyProductSelection;

  shopifyProducts?: AvailableShopifyProductConnectionSelection;

  shopifyProductVariant?: AvailableShopifyProductVariantSelection;

  shopifyProductVariants?: AvailableShopifyProductVariantConnectionSelection;

  shopifyInventoryItem?: AvailableShopifyInventoryItemSelection;

  shopifyInventoryItems?: AvailableShopifyInventoryItemConnectionSelection;

  shopifyLocation?: AvailableShopifyLocationSelection;

  shopifyLocations?: AvailableShopifyLocationConnectionSelection;

  shopifyInventoryLevel?: AvailableShopifyInventoryLevelSelection;

  shopifyInventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  shopifyOrder?: AvailableShopifyOrderSelection;

  shopifyOrders?: AvailableShopifyOrderConnectionSelection;

  shopifyOrderLineItem?: AvailableShopifyOrderLineItemSelection;

  shopifyOrderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  shopifySync?: AvailableShopifySyncSelection;

  shopifySyncs?: AvailableShopifySyncConnectionSelection;

  draftedProduct?: AvailableDraftedProductSelection;

  draftedProducts?: AvailableDraftedProductConnectionSelection;

  currentSession?: AvailableSessionSelection;

  shopifyConnection?: AvailableShopifySelection;

  internal?: AvailableInternalQueriesSelection;
};



export type Session = {

  __typename: 'Session';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: (Scalars['GadgetID'] | null);

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  roles: Role[];

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  shopifySID: (Scalars['String'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableSessionSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  roles?: AvailableRoleSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  shopifySID?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A named group of permissions granted to a particular actor in the system. Managed in the Gadget editor. */
export type Role = {

  __typename: 'Role';

  /** The stable identifier for this role. Null if the role has since been deleted. */
  key: Scalars['String'];

  /** The human readable name for this role. Can be changed. */
  name: Scalars['String'];
};



export type AvailableRoleSelection = {

  __typename?: boolean | null | undefined;

  /** The stable identifier for this role. Null if the role has since been deleted. */
  key?: boolean | null | undefined;

  /** The human readable name for this role. Can be changed. */
  name?: boolean | null | undefined;
};



export type ShopifyShop = {

  __typename: 'ShopifyShop';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  customerAccountsV2: (Scalars['JSON'] | null);

  transactionalSmsDisabled: (Scalars['Boolean'] | null);

  address1: (Scalars['String'] | null);

  address2: (Scalars['String'] | null);

  marketingSmsContentEnabledAtCheckout: (Scalars['Boolean'] | null);

  checkoutApiSupported: (Scalars['Boolean'] | null);

  city: (Scalars['String'] | null);

  cookieConsentLevel: (Scalars['String'] | null);

  country: (Scalars['String'] | null);

  countryCode: (Scalars['String'] | null);

  countryName: (Scalars['String'] | null);

  countyTaxes: (Scalars['JSON'] | null);

  currency: (Scalars['String'] | null);

  customerEmail: (Scalars['String'] | null);

  domain: (Scalars['String'] | null);

  eligibleForCardReaderGiveaway: (Scalars['Boolean'] | null);

  eligibleForPayments: (Scalars['Boolean'] | null);

  email: (Scalars['String'] | null);

  enabledPresentmentCurrencies: (Scalars['JSON'] | null);

  finances: (Scalars['Boolean'] | null);

  forceSsl: (Scalars['Boolean'] | null);

  googleAppsDomain: (Scalars['String'] | null);

  googleAppsLoginEnabled: (Scalars['Boolean'] | null);

  hasDiscounts: (Scalars['Boolean'] | null);

  hasGiftCards: (Scalars['Boolean'] | null);

  hasStorefront: (Scalars['Boolean'] | null);

  ianaTimezone: (Scalars['String'] | null);

  latitude: (Scalars['Float'] | null);

  longitude: (Scalars['Float'] | null);

  moneyFormat: (Scalars['String'] | null);

  moneyInEmailsFormat: (Scalars['String'] | null);

  moneyWithCurrencyFormat: (Scalars['String'] | null);

  moneyWithCurrencyInEmailsFormat: (Scalars['String'] | null);

  multiLocationEnabled: (Scalars['Boolean'] | null);

  myshopifyDomain: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  passwordEnabled: (Scalars['Boolean'] | null);

  phone: (Scalars['String'] | null);

  planDisplayName: (Scalars['String'] | null);

  planName: (Scalars['String'] | null);

  preLaunchEnabled: (Scalars['Boolean'] | null);

  primaryLocale: (Scalars['String'] | null);

  province: (Scalars['String'] | null);

  primaryLocation: (ShopifyLocation | null);

  primaryLocationId: (Scalars['GadgetID'] | null);

  provinceCode: (Scalars['String'] | null);

  requiresExtraPaymentsAgreement: (Scalars['Boolean'] | null);

  setupRequired: (Scalars['Boolean'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  shopOwner: (Scalars['String'] | null);

  source: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  taxShipping: (Scalars['Boolean'] | null);

  taxesIncluded: (Scalars['Boolean'] | null);

  timezone: (Scalars['String'] | null);

  weightUnit: (Scalars['String'] | null);

  locations: ShopifyLocationConnection;

  inventoryItems: ShopifyInventoryItemConnection;

  inventoryLevels: ShopifyInventoryLevelConnection;

  zipCode: (Scalars['String'] | null);

  orders: ShopifyOrderConnection;

  products: ShopifyProductConnection;

  productVariants: ShopifyProductVariantConnection;

  syncs: ShopifySyncConnection;

  orderLineItems: ShopifyOrderLineItemConnection;

  gdprRequests: ShopifyGdprRequestConnection;

  grantedScopes: (Scalars['JSON'] | null);

  registeredWebhooks: (Scalars['JSON'] | null);

  disabledWebhooks: (Scalars['JSON'] | null);

  installedViaApiKey: (Scalars['String'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyShopSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  customerAccountsV2?: boolean | null | undefined;

  transactionalSmsDisabled?: boolean | null | undefined;

  address1?: boolean | null | undefined;

  address2?: boolean | null | undefined;

  marketingSmsContentEnabledAtCheckout?: boolean | null | undefined;

  checkoutApiSupported?: boolean | null | undefined;

  city?: boolean | null | undefined;

  cookieConsentLevel?: boolean | null | undefined;

  country?: boolean | null | undefined;

  countryCode?: boolean | null | undefined;

  countryName?: boolean | null | undefined;

  countyTaxes?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  customerEmail?: boolean | null | undefined;

  domain?: boolean | null | undefined;

  eligibleForCardReaderGiveaway?: boolean | null | undefined;

  eligibleForPayments?: boolean | null | undefined;

  email?: boolean | null | undefined;

  enabledPresentmentCurrencies?: boolean | null | undefined;

  finances?: boolean | null | undefined;

  forceSsl?: boolean | null | undefined;

  googleAppsDomain?: boolean | null | undefined;

  googleAppsLoginEnabled?: boolean | null | undefined;

  hasDiscounts?: boolean | null | undefined;

  hasGiftCards?: boolean | null | undefined;

  hasStorefront?: boolean | null | undefined;

  ianaTimezone?: boolean | null | undefined;

  latitude?: boolean | null | undefined;

  longitude?: boolean | null | undefined;

  moneyFormat?: boolean | null | undefined;

  moneyInEmailsFormat?: boolean | null | undefined;

  moneyWithCurrencyFormat?: boolean | null | undefined;

  moneyWithCurrencyInEmailsFormat?: boolean | null | undefined;

  multiLocationEnabled?: boolean | null | undefined;

  myshopifyDomain?: boolean | null | undefined;

  name?: boolean | null | undefined;

  passwordEnabled?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  planDisplayName?: boolean | null | undefined;

  planName?: boolean | null | undefined;

  preLaunchEnabled?: boolean | null | undefined;

  primaryLocale?: boolean | null | undefined;

  province?: boolean | null | undefined;

  primaryLocation?: AvailableShopifyLocationSelection;

  primaryLocationId?: boolean | null | undefined;

  provinceCode?: boolean | null | undefined;

  requiresExtraPaymentsAgreement?: boolean | null | undefined;

  setupRequired?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  shopOwner?: boolean | null | undefined;

  source?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  taxShipping?: boolean | null | undefined;

  taxesIncluded?: boolean | null | undefined;

  timezone?: boolean | null | undefined;

  weightUnit?: boolean | null | undefined;

  locations?: AvailableShopifyLocationConnectionSelection;

  inventoryItems?: AvailableShopifyInventoryItemConnectionSelection;

  inventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  zipCode?: boolean | null | undefined;

  orders?: AvailableShopifyOrderConnectionSelection;

  products?: AvailableShopifyProductConnectionSelection;

  productVariants?: AvailableShopifyProductVariantConnectionSelection;

  syncs?: AvailableShopifySyncConnectionSelection;

  orderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  gdprRequests?: AvailableShopifyGdprRequestConnectionSelection;

  grantedScopes?: boolean | null | undefined;

  registeredWebhooks?: boolean | null | undefined;

  disabledWebhooks?: boolean | null | undefined;

  installedViaApiKey?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyLocation = {

  __typename: 'ShopifyLocation';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  active: (Scalars['Boolean'] | null);

  address1: (Scalars['String'] | null);

  address2: (Scalars['String'] | null);

  city: (Scalars['String'] | null);

  country: (Scalars['String'] | null);

  countryCode: (Scalars['String'] | null);

  legacy: (Scalars['Boolean'] | null);

  inventoryItems: ShopifyInventoryItemConnection;

  shopifyInventoryLevels: ShopifyInventoryLevelConnection;

  localizedCountryName: (Scalars['String'] | null);

  localizedProvinceName: (Scalars['String'] | null);

  name: (Scalars['String'] | null);

  orders: ShopifyOrderConnection;

  orderLineItems: ShopifyOrderLineItemConnection;

  phone: (Scalars['String'] | null);

  province: (Scalars['String'] | null);

  provinceCode: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  zipCode: (Scalars['String'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyLocationSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  active?: boolean | null | undefined;

  address1?: boolean | null | undefined;

  address2?: boolean | null | undefined;

  city?: boolean | null | undefined;

  country?: boolean | null | undefined;

  countryCode?: boolean | null | undefined;

  legacy?: boolean | null | undefined;

  inventoryItems?: AvailableShopifyInventoryItemConnectionSelection;

  shopifyInventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  localizedCountryName?: boolean | null | undefined;

  localizedProvinceName?: boolean | null | undefined;

  name?: boolean | null | undefined;

  orders?: AvailableShopifyOrderConnectionSelection;

  orderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  phone?: boolean | null | undefined;

  province?: boolean | null | undefined;

  provinceCode?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  zipCode?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyInventoryItem items. */
export type ShopifyInventoryItemConnection = {

  __typename: 'ShopifyInventoryItemConnection';

  /** A list of edges. */
  edges: ShopifyInventoryItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyInventoryItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyInventoryItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyInventoryItem connection. */
export type ShopifyInventoryItemEdge = {

  __typename: 'ShopifyInventoryItemEdge';

  /** The item at the end of the edge */
  node: ShopifyInventoryItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyInventoryItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyInventoryItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyInventoryItem = {

  __typename: 'ShopifyInventoryItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  measurement: (Scalars['JSON'] | null);

  duplicateSkuCount: (Scalars['Float'] | null);

  inventoryHistoryUrl: (Scalars['String'] | null);

  legacyResourceId: (Scalars['String'] | null);

  trackedEditable: (Scalars['JSON'] | null);

  unitCost: (Scalars['JSON'] | null);

  cost: (Scalars['String'] | null);

  countryCodeOfOrigin: (Scalars['String'] | null);

  countryHarmonizedSystemCodes: (Scalars['JSON'] | null);

  productVariant: (ShopifyProductVariant | null);

  harmonizedSystemCode: (Scalars['String'] | null);

  provinceCodeOfOrigin: (Scalars['String'] | null);

  locations: ShopifyLocationConnection;

  shopifyInventoryLevels: ShopifyInventoryLevelConnection;

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  requiresShipping: (Scalars['Boolean'] | null);

  sku: (Scalars['String'] | null);

  tracked: (Scalars['Boolean'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyInventoryItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  measurement?: boolean | null | undefined;

  duplicateSkuCount?: boolean | null | undefined;

  inventoryHistoryUrl?: boolean | null | undefined;

  legacyResourceId?: boolean | null | undefined;

  trackedEditable?: boolean | null | undefined;

  unitCost?: boolean | null | undefined;

  cost?: boolean | null | undefined;

  countryCodeOfOrigin?: boolean | null | undefined;

  countryHarmonizedSystemCodes?: boolean | null | undefined;

  productVariant?: AvailableShopifyProductVariantSelection;

  harmonizedSystemCode?: boolean | null | undefined;

  provinceCodeOfOrigin?: boolean | null | undefined;

  locations?: AvailableShopifyLocationConnectionSelection;

  shopifyInventoryLevels?: AvailableShopifyInventoryLevelConnectionSelection;

  shopifyCreatedAt?: boolean | null | undefined;

  requiresShipping?: boolean | null | undefined;

  sku?: boolean | null | undefined;

  tracked?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyProductVariant = {

  __typename: 'ShopifyProductVariant';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  barcode: (Scalars['String'] | null);

  compareAtPrice: (Scalars['String'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  inventoryPolicy: (Scalars['String'] | null);

  inventoryQuantity: (Scalars['Float'] | null);

  option1: (Scalars['String'] | null);

  inventoryItem: (ShopifyInventoryItem | null);

  inventoryItemId: (Scalars['GadgetID'] | null);

  selectedOptions: (Scalars['JSON'] | null);

  option2: (Scalars['String'] | null);

  option3: (Scalars['String'] | null);

  position: (Scalars['Float'] | null);

  price: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  sku: (Scalars['String'] | null);

  taxCode: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  orderLineItems: ShopifyOrderLineItemConnection;

  presentmentPrices: (Scalars['JSON'] | null);

  taxable: (Scalars['Boolean'] | null);

  title: (Scalars['String'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductVariantSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  barcode?: boolean | null | undefined;

  compareAtPrice?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  inventoryPolicy?: boolean | null | undefined;

  inventoryQuantity?: boolean | null | undefined;

  option1?: boolean | null | undefined;

  inventoryItem?: AvailableShopifyInventoryItemSelection;

  inventoryItemId?: boolean | null | undefined;

  selectedOptions?: boolean | null | undefined;

  option2?: boolean | null | undefined;

  option3?: boolean | null | undefined;

  position?: boolean | null | undefined;

  price?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  sku?: boolean | null | undefined;

  taxCode?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  orderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  presentmentPrices?: boolean | null | undefined;

  taxable?: boolean | null | undefined;

  title?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyProduct = {

  __typename: 'ShopifyProduct';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  hasVariantsThatRequiresComponents: (Scalars['Boolean'] | null);

  body: (Scalars['String'] | null);

  handle: (Scalars['String'] | null);

  productType: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  publishedAt: (Scalars['DateTime'] | null);

  status: ShopifyProductStatusEnum;

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  tags: (Scalars['JSON'] | null);

  templateSuffix: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  vendor: (Scalars['String'] | null);

  orderLineItems: ShopifyOrderLineItemConnection;

  category: (Scalars['JSON'] | null);

  compareAtPriceRange: (Scalars['JSON'] | null);

  productCategory: (Scalars['JSON'] | null);

  variants: ShopifyProductVariantConnection;

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyProductSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  hasVariantsThatRequiresComponents?: boolean | null | undefined;

  body?: boolean | null | undefined;

  handle?: boolean | null | undefined;

  productType?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  publishedAt?: boolean | null | undefined;

  status?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  tags?: boolean | null | undefined;

  templateSuffix?: boolean | null | undefined;

  title?: boolean | null | undefined;

  vendor?: boolean | null | undefined;

  orderLineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  category?: boolean | null | undefined;

  compareAtPriceRange?: boolean | null | undefined;

  productCategory?: boolean | null | undefined;

  variants?: AvailableShopifyProductVariantConnectionSelection;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyOrderLineItem items. */
export type ShopifyOrderLineItemConnection = {

  __typename: 'ShopifyOrderLineItemConnection';

  /** A list of edges. */
  edges: ShopifyOrderLineItemEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyOrderLineItemConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyOrderLineItemEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyOrderLineItem connection. */
export type ShopifyOrderLineItemEdge = {

  __typename: 'ShopifyOrderLineItemEdge';

  /** The item at the end of the edge */
  node: ShopifyOrderLineItem;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyOrderLineItemEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyOrderLineItemSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyOrderLineItem = {

  __typename: 'ShopifyOrderLineItem';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  attributedStaffs: (Scalars['JSON'] | null);

  currentQuantity: (Scalars['Float'] | null);

  fulfillableQuantity: (Scalars['Float'] | null);

  fulfillmentService: (Scalars['String'] | null);

  fulfillmentStatus: (Scalars['String'] | null);

  grams: (Scalars['Float'] | null);

  productExists: (Scalars['Boolean'] | null);

  variantInventoryManagement: (Scalars['String'] | null);

  order: (ShopifyOrder | null);

  orderId: (Scalars['GadgetID'] | null);

  originLocation: (ShopifyLocation | null);

  originLocationId: (Scalars['GadgetID'] | null);

  product: (ShopifyProduct | null);

  productId: (Scalars['GadgetID'] | null);

  variant: (ShopifyProductVariant | null);

  variantId: (Scalars['GadgetID'] | null);

  price: (Scalars['String'] | null);

  quantity: (Scalars['Float'] | null);

  requiresShipping: (Scalars['Boolean'] | null);

  sku: (Scalars['String'] | null);

  title: (Scalars['String'] | null);

  giftCard: (Scalars['Boolean'] | null);

  name: (Scalars['String'] | null);

  variantTitle: (Scalars['String'] | null);

  vendor: (Scalars['String'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  priceSet: (Scalars['JSON'] | null);

  properties: (Scalars['JSON'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  discountAllocations: (Scalars['JSON'] | null);

  taxLines: (Scalars['JSON'] | null);

  taxable: (Scalars['Boolean'] | null);

  totalDiscount: (Scalars['String'] | null);

  totalDiscountSet: (Scalars['JSON'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyOrderLineItemSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  attributedStaffs?: boolean | null | undefined;

  currentQuantity?: boolean | null | undefined;

  fulfillableQuantity?: boolean | null | undefined;

  fulfillmentService?: boolean | null | undefined;

  fulfillmentStatus?: boolean | null | undefined;

  grams?: boolean | null | undefined;

  productExists?: boolean | null | undefined;

  variantInventoryManagement?: boolean | null | undefined;

  order?: AvailableShopifyOrderSelection;

  orderId?: boolean | null | undefined;

  originLocation?: AvailableShopifyLocationSelection;

  originLocationId?: boolean | null | undefined;

  product?: AvailableShopifyProductSelection;

  productId?: boolean | null | undefined;

  variant?: AvailableShopifyProductVariantSelection;

  variantId?: boolean | null | undefined;

  price?: boolean | null | undefined;

  quantity?: boolean | null | undefined;

  requiresShipping?: boolean | null | undefined;

  sku?: boolean | null | undefined;

  title?: boolean | null | undefined;

  giftCard?: boolean | null | undefined;

  name?: boolean | null | undefined;

  variantTitle?: boolean | null | undefined;

  vendor?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  priceSet?: boolean | null | undefined;

  properties?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  discountAllocations?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  taxable?: boolean | null | undefined;

  totalDiscount?: boolean | null | undefined;

  totalDiscountSet?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};



export type ShopifyOrder = {

  __typename: 'ShopifyOrder';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  statusPageUrl: (Scalars['String'] | null);

  totalCashRoundingAdjustment: (Scalars['JSON'] | null);

  fulfillmentsCount: (Scalars['JSON'] | null);

  retailLocation: (ShopifyLocation | null);

  retailLocationId: (Scalars['GadgetID'] | null);

  cancellation: (Scalars['JSON'] | null);

  risk: (Scalars['JSON'] | null);

  transactionsCount: (Scalars['JSON'] | null);

  shopifyProtect: (Scalars['JSON'] | null);

  taxExempt: (Scalars['Boolean'] | null);

  currentTotalAdditionalFeesSet: (Scalars['JSON'] | null);

  originalTotalAdditionalFeesSet: (Scalars['JSON'] | null);

  poNumber: (Scalars['String'] | null);

  additionalFees: (Scalars['JSON'] | null);

  merchantOfRecordAppId: (Scalars['Float'] | null);

  billingAddress: (Scalars['JSON'] | null);

  sourceIdentifier: (Scalars['String'] | null);

  sourceUrl: (Scalars['String'] | null);

  browserIp: (Scalars['String'] | null);

  buyerAcceptsMarketing: (Scalars['Boolean'] | null);

  cancelReason: (Scalars['String'] | null);

  cancelledAt: (Scalars['DateTime'] | null);

  cartToken: (Scalars['String'] | null);

  checkoutToken: (Scalars['String'] | null);

  clientDetails: (Scalars['JSON'] | null);

  closedAt: (Scalars['DateTime'] | null);

  currency: (Scalars['String'] | null);

  currentSubtotalPrice: (Scalars['String'] | null);

  currentSubtotalPriceSet: (Scalars['JSON'] | null);

  currentTotalDiscounts: (Scalars['String'] | null);

  currentTotalDiscountsSet: (Scalars['JSON'] | null);

  currentTotalDutiesSet: (Scalars['JSON'] | null);

  currentTotalPrice: (Scalars['String'] | null);

  currentTotalPriceSet: (Scalars['JSON'] | null);

  currentTotalTax: (Scalars['String'] | null);

  currentTotalTaxSet: (Scalars['JSON'] | null);

  customerLocale: (Scalars['String'] | null);

  discountApplications: (Scalars['JSON'] | null);

  discountCodes: (Scalars['JSON'] | null);

  email: (Scalars['String'] | null);

  estimatedTaxes: (Scalars['Boolean'] | null);

  financialStatus: (Scalars['String'] | null);

  fulfillmentStatus: (Scalars['String'] | null);

  landingSite: (Scalars['String'] | null);

  lineItems: ShopifyOrderLineItemConnection;

  name: (Scalars['String'] | null);

  note: (Scalars['String'] | null);

  noteAttributes: (Scalars['JSON'] | null);

  number: (Scalars['Float'] | null);

  orderNumber: (Scalars['Float'] | null);

  orderStatusUrl: (Scalars['String'] | null);

  originalTotalDutiesSet: (Scalars['JSON'] | null);

  paymentGatewayNames: (Scalars['JSON'] | null);

  phone: (Scalars['String'] | null);

  presentmentCurrency: (Scalars['String'] | null);

  processedAt: (Scalars['DateTime'] | null);

  shopifyCreatedAt: (Scalars['DateTime'] | null);

  referringSite: (Scalars['String'] | null);

  shippingAddress: (Scalars['JSON'] | null);

  sourceName: (Scalars['String'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  subtotalPrice: (Scalars['String'] | null);

  subtotalPriceSet: (Scalars['JSON'] | null);

  tags: (Scalars['JSON'] | null);

  taxLines: (Scalars['JSON'] | null);

  taxesIncluded: (Scalars['Boolean'] | null);

  test: (Scalars['Boolean'] | null);

  token: (Scalars['String'] | null);

  totalDiscounts: (Scalars['String'] | null);

  totalDiscountsSet: (Scalars['JSON'] | null);

  totalLineItemsPrice: (Scalars['String'] | null);

  totalLineItemsPriceSet: (Scalars['JSON'] | null);

  totalOutstanding: (Scalars['String'] | null);

  totalPrice: (Scalars['String'] | null);

  totalPriceSet: (Scalars['JSON'] | null);

  totalShippingPriceSet: (Scalars['JSON'] | null);

  totalTax: (Scalars['String'] | null);

  totalTaxSet: (Scalars['JSON'] | null);

  totalTipReceived: (Scalars['String'] | null);

  totalWeight: (Scalars['Float'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyOrderSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Shopify. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  statusPageUrl?: boolean | null | undefined;

  totalCashRoundingAdjustment?: boolean | null | undefined;

  fulfillmentsCount?: boolean | null | undefined;

  retailLocation?: AvailableShopifyLocationSelection;

  retailLocationId?: boolean | null | undefined;

  cancellation?: boolean | null | undefined;

  risk?: boolean | null | undefined;

  transactionsCount?: boolean | null | undefined;

  shopifyProtect?: boolean | null | undefined;

  taxExempt?: boolean | null | undefined;

  currentTotalAdditionalFeesSet?: boolean | null | undefined;

  originalTotalAdditionalFeesSet?: boolean | null | undefined;

  poNumber?: boolean | null | undefined;

  additionalFees?: boolean | null | undefined;

  merchantOfRecordAppId?: boolean | null | undefined;

  billingAddress?: boolean | null | undefined;

  sourceIdentifier?: boolean | null | undefined;

  sourceUrl?: boolean | null | undefined;

  browserIp?: boolean | null | undefined;

  buyerAcceptsMarketing?: boolean | null | undefined;

  cancelReason?: boolean | null | undefined;

  cancelledAt?: boolean | null | undefined;

  cartToken?: boolean | null | undefined;

  checkoutToken?: boolean | null | undefined;

  clientDetails?: boolean | null | undefined;

  closedAt?: boolean | null | undefined;

  currency?: boolean | null | undefined;

  currentSubtotalPrice?: boolean | null | undefined;

  currentSubtotalPriceSet?: boolean | null | undefined;

  currentTotalDiscounts?: boolean | null | undefined;

  currentTotalDiscountsSet?: boolean | null | undefined;

  currentTotalDutiesSet?: boolean | null | undefined;

  currentTotalPrice?: boolean | null | undefined;

  currentTotalPriceSet?: boolean | null | undefined;

  currentTotalTax?: boolean | null | undefined;

  currentTotalTaxSet?: boolean | null | undefined;

  customerLocale?: boolean | null | undefined;

  discountApplications?: boolean | null | undefined;

  discountCodes?: boolean | null | undefined;

  email?: boolean | null | undefined;

  estimatedTaxes?: boolean | null | undefined;

  financialStatus?: boolean | null | undefined;

  fulfillmentStatus?: boolean | null | undefined;

  landingSite?: boolean | null | undefined;

  lineItems?: AvailableShopifyOrderLineItemConnectionSelection;

  name?: boolean | null | undefined;

  note?: boolean | null | undefined;

  noteAttributes?: boolean | null | undefined;

  number?: boolean | null | undefined;

  orderNumber?: boolean | null | undefined;

  orderStatusUrl?: boolean | null | undefined;

  originalTotalDutiesSet?: boolean | null | undefined;

  paymentGatewayNames?: boolean | null | undefined;

  phone?: boolean | null | undefined;

  presentmentCurrency?: boolean | null | undefined;

  processedAt?: boolean | null | undefined;

  shopifyCreatedAt?: boolean | null | undefined;

  referringSite?: boolean | null | undefined;

  shippingAddress?: boolean | null | undefined;

  sourceName?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  subtotalPrice?: boolean | null | undefined;

  subtotalPriceSet?: boolean | null | undefined;

  tags?: boolean | null | undefined;

  taxLines?: boolean | null | undefined;

  taxesIncluded?: boolean | null | undefined;

  test?: boolean | null | undefined;

  token?: boolean | null | undefined;

  totalDiscounts?: boolean | null | undefined;

  totalDiscountsSet?: boolean | null | undefined;

  totalLineItemsPrice?: boolean | null | undefined;

  totalLineItemsPriceSet?: boolean | null | undefined;

  totalOutstanding?: boolean | null | undefined;

  totalPrice?: boolean | null | undefined;

  totalPriceSet?: boolean | null | undefined;

  totalShippingPriceSet?: boolean | null | undefined;

  totalTax?: boolean | null | undefined;

  totalTaxSet?: boolean | null | undefined;

  totalTipReceived?: boolean | null | undefined;

  totalWeight?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** Information about pagination in a connection. */
export type PageInfo = {

  __typename: 'PageInfo';

  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];

  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];

  /** When paginating backwards, the cursor to continue. */
  startCursor: (Scalars['String'] | null);

  /** When paginating forwards, the cursor to continue. */
  endCursor: (Scalars['String'] | null);
};



export type AvailablePageInfoSelection = {

  __typename?: boolean | null | undefined;

  /** When paginating forwards, are there more items? */
  hasNextPage?: boolean | null | undefined;

  /** When paginating backwards, are there more items? */
  hasPreviousPage?: boolean | null | undefined;

  /** When paginating backwards, the cursor to continue. */
  startCursor?: boolean | null | undefined;

  /** When paginating forwards, the cursor to continue. */
  endCursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProductVariant items. */
export type ShopifyProductVariantConnection = {

  __typename: 'ShopifyProductVariantConnection';

  /** A list of edges. */
  edges: ShopifyProductVariantEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductVariantConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductVariantEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProductVariant connection. */
export type ShopifyProductVariantEdge = {

  __typename: 'ShopifyProductVariantEdge';

  /** The item at the end of the edge */
  node: ShopifyProductVariant;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductVariantEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductVariantSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyLocation items. */
export type ShopifyLocationConnection = {

  __typename: 'ShopifyLocationConnection';

  /** A list of edges. */
  edges: ShopifyLocationEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyLocationConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyLocationEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyLocation connection. */
export type ShopifyLocationEdge = {

  __typename: 'ShopifyLocationEdge';

  /** The item at the end of the edge */
  node: ShopifyLocation;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyLocationEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyLocationSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyInventoryLevel items. */
export type ShopifyInventoryLevelConnection = {

  __typename: 'ShopifyInventoryLevelConnection';

  /** A list of edges. */
  edges: ShopifyInventoryLevelEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyInventoryLevelConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyInventoryLevelEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyInventoryLevel connection. */
export type ShopifyInventoryLevelEdge = {

  __typename: 'ShopifyInventoryLevelEdge';

  /** The item at the end of the edge */
  node: ShopifyInventoryLevel;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyInventoryLevelEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyInventoryLevelSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyInventoryLevel = {

  __typename: 'ShopifyInventoryLevel';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  canDeactivate: (Scalars['Boolean'] | null);

  deactivationAlert: (Scalars['String'] | null);

  adminGraphqlApiId: (Scalars['String'] | null);

  available: (Scalars['Float'] | null);

  shopifyUpdatedAt: (Scalars['DateTime'] | null);

  inventoryItem: (ShopifyInventoryItem | null);

  inventoryItemId: (Scalars['GadgetID'] | null);

  location: (ShopifyLocation | null);

  locationId: (Scalars['GadgetID'] | null);

  shop: (ShopifyShop | null);

  shopId: (Scalars['GadgetID'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyInventoryLevelSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  canDeactivate?: boolean | null | undefined;

  deactivationAlert?: boolean | null | undefined;

  adminGraphqlApiId?: boolean | null | undefined;

  available?: boolean | null | undefined;

  shopifyUpdatedAt?: boolean | null | undefined;

  inventoryItem?: AvailableShopifyInventoryItemSelection;

  inventoryItemId?: boolean | null | undefined;

  location?: AvailableShopifyLocationSelection;

  locationId?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyOrder items. */
export type ShopifyOrderConnection = {

  __typename: 'ShopifyOrderConnection';

  /** A list of edges. */
  edges: ShopifyOrderEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyOrderConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyOrderEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyOrder connection. */
export type ShopifyOrderEdge = {

  __typename: 'ShopifyOrderEdge';

  /** The item at the end of the edge */
  node: ShopifyOrder;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyOrderEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyOrderSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyProduct items. */
export type ShopifyProductConnection = {

  __typename: 'ShopifyProductConnection';

  /** A list of edges. */
  edges: ShopifyProductEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyProductConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyProductEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyProduct connection. */
export type ShopifyProductEdge = {

  __typename: 'ShopifyProductEdge';

  /** The item at the end of the edge */
  node: ShopifyProduct;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyProductEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyProductSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifySync items. */
export type ShopifySyncConnection = {

  __typename: 'ShopifySyncConnection';

  /** A list of edges. */
  edges: ShopifySyncEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifySyncConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifySyncEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifySync connection. */
export type ShopifySyncEdge = {

  __typename: 'ShopifySyncEdge';

  /** The item at the end of the edge */
  node: ShopifySync;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifySyncEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifySyncSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifySync = {

  __typename: 'ShopifySync';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state: Scalars['RecordState'];

  errorMessage: (Scalars['String'] | null);

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  /** DateTime that this sync was run from */
  syncSince: (Scalars['DateTime'] | null);

  domain: Scalars['String'];

  errorDetails: (Scalars['String'] | null);

  models: (Scalars['JSON'] | null);

  force: (Scalars['Boolean'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifySyncSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  /** The current state this record is in. Changed by invoking actions. Managed by Gadget. */
  state?: boolean | null | undefined;

  errorMessage?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  /** DateTime that this sync was run from */
  syncSince?: boolean | null | undefined;

  domain?: boolean | null | undefined;

  errorDetails?: boolean | null | undefined;

  models?: boolean | null | undefined;

  force?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of ShopifyGdprRequest items. */
export type ShopifyGdprRequestConnection = {

  __typename: 'ShopifyGdprRequestConnection';

  /** A list of edges. */
  edges: ShopifyGdprRequestEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyGdprRequestConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyGdprRequestEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyGdprRequest connection. */
export type ShopifyGdprRequestEdge = {

  __typename: 'ShopifyGdprRequestEdge';

  /** The item at the end of the edge */
  node: ShopifyGdprRequest;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyGdprRequestEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyGdprRequestSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type ShopifyGdprRequest = {

  __typename: 'ShopifyGdprRequest';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  topic: ShopifyGdprRequestTopicEnum;

  shop: ShopifyShop;

  shopId: Scalars['GadgetID'];

  payload: (Scalars['JSON'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableShopifyGdprRequestSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  topic?: boolean | null | undefined;

  shop?: AvailableShopifyShopSelection;

  shopId?: boolean | null | undefined;

  payload?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of Session items. */
export type SessionConnection = {

  __typename: 'SessionConnection';

  /** A list of edges. */
  edges: SessionEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableSessionConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableSessionEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a Session connection. */
export type SessionEdge = {

  __typename: 'SessionEdge';

  /** The item at the end of the edge */
  node: Session;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableSessionEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableSessionSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of ShopifyShop items. */
export type ShopifyShopConnection = {

  __typename: 'ShopifyShopConnection';

  /** A list of edges. */
  edges: ShopifyShopEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableShopifyShopConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableShopifyShopEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a ShopifyShop connection. */
export type ShopifyShopEdge = {

  __typename: 'ShopifyShopEdge';

  /** The item at the end of the edge */
  node: ShopifyShop;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableShopifyShopEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableShopifyShopSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type DraftedProduct = {

  __typename: 'DraftedProduct';

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id: Scalars['GadgetID'];

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt: Scalars['DateTime'];

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt: Scalars['DateTime'];

  orderId: (Scalars['String'] | null);

  productId: (Scalars['String'] | null);

  productTitle: (Scalars['String'] | null);

  relatedProduct: (Scalars['String'] | null);

  shop: (Scalars['String'] | null);

  swatchId: (Scalars['String'] | null);

  type: (Scalars['String'] | null);

  variant: (Scalars['String'] | null);

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all: Scalars['JSONObject'];
};



export type AvailableDraftedProductSelection = {

  __typename?: boolean | null | undefined;

  /** The globally unique, unchanging identifier for this record. Assigned and managed by Gadget. */
  id?: boolean | null | undefined;

  /** The time at which this record was first created. Set once upon record creation and never changed. Managed by Gadget. */
  createdAt?: boolean | null | undefined;

  /** The time at which this record was last changed. Set each time the record is successfully acted upon by an action. Managed by Gadget. */
  updatedAt?: boolean | null | undefined;

  orderId?: boolean | null | undefined;

  productId?: boolean | null | undefined;

  productTitle?: boolean | null | undefined;

  relatedProduct?: boolean | null | undefined;

  shop?: boolean | null | undefined;

  swatchId?: boolean | null | undefined;

  type?: boolean | null | undefined;

  variant?: boolean | null | undefined;

  /** Get all the fields for this record. Useful for not having to list out all the fields you want to retrieve, but slower. */
  _all?: boolean | null | undefined;
};


/** A connection to a list of DraftedProduct items. */
export type DraftedProductConnection = {

  __typename: 'DraftedProductConnection';

  /** A list of edges. */
  edges: DraftedProductEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableDraftedProductConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableDraftedProductEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a DraftedProduct connection. */
export type DraftedProductEdge = {

  __typename: 'DraftedProductEdge';

  /** The item at the end of the edge */
  node: DraftedProduct;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableDraftedProductEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: AvailableDraftedProductSelection;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** Represents one of the roles an identity in the system can be entitled to */
export type GadgetRole = {

  __typename: 'GadgetRole';

  key: Scalars['String'];

  name: Scalars['String'];

  selectable: Scalars['Boolean'];

  order: Scalars['Int'];
};



export type AvailableGadgetRoleSelection = {

  __typename?: boolean | null | undefined;

  key?: boolean | null | undefined;

  name?: boolean | null | undefined;

  selectable?: boolean | null | undefined;

  order?: boolean | null | undefined;
};



export type GadgetGlobalAction = {

  __typename: 'GadgetGlobalAction';

  name: Scalars['String'];

  apiIdentifier: Scalars['String'];

  namespace: Scalars['String'][];

  requiresInput: Scalars['Boolean'];

  acceptsInput: Scalars['Boolean'];

  triggers: GadgetTrigger[];

  inputFields: GadgetObjectField[];

  examples: (GadgetGlobalActionGraphQLType | null);
};



export type AvailableGadgetGlobalActionSelection = {

  __typename?: boolean | null | undefined;

  name?: boolean | null | undefined;

  apiIdentifier?: boolean | null | undefined;

  namespace?: boolean | null | undefined;

  requiresInput?: boolean | null | undefined;

  acceptsInput?: boolean | null | undefined;

  triggers?: AvailableGadgetTriggerSelection;

  inputFields?: AvailableGadgetObjectFieldSelection;

  examples?: AvailableGadgetGlobalActionGraphQLTypeSelection;
};



export type GadgetGlobalActionGraphQLType = {

  __typename: 'GadgetGlobalActionGraphQLType';

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation: Scalars['String'];

  exampleGraphQLMutation: Scalars['String'];

  inputGraphQLTypeSDL: (Scalars['String'] | null);

  outputGraphQLTypeSDL: Scalars['String'];

  inputTypeScriptInterface: (Scalars['String'] | null);

  outputTypeScriptInterface: Scalars['String'];

  exampleGraphQLVariables: Scalars['JSON'];

  exampleJSInputs: Scalars['JSON'];

  exampleImperativeInvocation: Scalars['String'];

  exampleReactHook: Scalars['String'];
};



export type AvailableGadgetGlobalActionGraphQLTypeSelection = {

  __typename?: boolean | null | undefined;

  /** @deprecated moved to exampleGraphQLMutation */
  exampleMutation?: boolean | null | undefined;

  exampleGraphQLMutation?: boolean | null | undefined;

  inputGraphQLTypeSDL?: boolean | null | undefined;

  outputGraphQLTypeSDL?: boolean | null | undefined;

  inputTypeScriptInterface?: boolean | null | undefined;

  outputTypeScriptInterface?: boolean | null | undefined;

  exampleGraphQLVariables?: boolean | null | undefined;

  exampleJSInputs?: boolean | null | undefined;

  exampleImperativeInvocation?: boolean | null | undefined;

  exampleReactHook?: boolean | null | undefined;
};


/** One upload target to use for the Direct Upload style of sending files to Gadget */
export type DirectUploadToken = {

  __typename: 'DirectUploadToken';

  /** The URL to upload a file to. */
  url: Scalars['String'];

  /** The token to pass to an action to reference the uploaded file. */
  token: Scalars['String'];
};



export type AvailableDirectUploadTokenSelection = {

  __typename?: boolean | null | undefined;

  /** The URL to upload a file to. */
  url?: boolean | null | undefined;

  /** The token to pass to an action to reference the uploaded file. */
  token?: boolean | null | undefined;
};


/** Information about the Shopify Connection */
export type Shopify = {

  __typename: 'Shopify';

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication: (Scalars['Boolean'] | null);

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes: Scalars['String'][];
};



export type AvailableShopifySelection = {

  __typename?: boolean | null | undefined;

  /** Whether the current session's shop requires a re-authentication with Shopify to acquire updated scopes */
  requiresReauthentication?: boolean | null | undefined;

  /** A list missing scopes compared to the Connection based on the current session's shop */
  missingScopes?: boolean | null | undefined;
};



export type InternalQueries = {

  __typename: 'InternalQueries';

  session: (InternalSessionRecord | null);

  listSession: InternalSessionRecordConnection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails: (Scalars['JSONObject'] | null);

  shopifyShop: (InternalShopifyShopRecord | null);

  listShopifyShop: InternalShopifyShopRecordConnection;

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);

  listShopifyGdprRequest: InternalShopifyGdprRequestRecordConnection;

  shopifyProduct: (InternalShopifyProductRecord | null);

  listShopifyProduct: InternalShopifyProductRecordConnection;

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);

  listShopifyProductVariant: InternalShopifyProductVariantRecordConnection;

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);

  listShopifyInventoryItem: InternalShopifyInventoryItemRecordConnection;

  shopifyLocation: (InternalShopifyLocationRecord | null);

  listShopifyLocation: InternalShopifyLocationRecordConnection;

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);

  listShopifyInventoryLevel: InternalShopifyInventoryLevelRecordConnection;

  shopifyOrder: (InternalShopifyOrderRecord | null);

  listShopifyOrder: InternalShopifyOrderRecordConnection;

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);

  listShopifyOrderLineItem: InternalShopifyOrderLineItemRecordConnection;

  shopifySync: (InternalShopifySyncRecord | null);

  listShopifySync: InternalShopifySyncRecordConnection;

  draftedProduct: (InternalDraftedProductRecord | null);

  listDraftedProduct: InternalDraftedProductRecordConnection;
};



export type AvailableInternalQueriesSelection = {

  __typename?: boolean | null | undefined;

  session?: boolean | null | undefined;

  listSession?: AvailableInternalSessionRecordConnectionSelection;

  /** Currently open platform transaction details, or null if no transaction is open */
  currentTransactionDetails?: boolean | null | undefined;

  shopifyShop?: boolean | null | undefined;

  listShopifyShop?: AvailableInternalShopifyShopRecordConnectionSelection;

  shopifyGdprRequest?: boolean | null | undefined;

  listShopifyGdprRequest?: AvailableInternalShopifyGdprRequestRecordConnectionSelection;

  shopifyProduct?: boolean | null | undefined;

  listShopifyProduct?: AvailableInternalShopifyProductRecordConnectionSelection;

  shopifyProductVariant?: boolean | null | undefined;

  listShopifyProductVariant?: AvailableInternalShopifyProductVariantRecordConnectionSelection;

  shopifyInventoryItem?: boolean | null | undefined;

  listShopifyInventoryItem?: AvailableInternalShopifyInventoryItemRecordConnectionSelection;

  shopifyLocation?: boolean | null | undefined;

  listShopifyLocation?: AvailableInternalShopifyLocationRecordConnectionSelection;

  shopifyInventoryLevel?: boolean | null | undefined;

  listShopifyInventoryLevel?: AvailableInternalShopifyInventoryLevelRecordConnectionSelection;

  shopifyOrder?: boolean | null | undefined;

  listShopifyOrder?: AvailableInternalShopifyOrderRecordConnectionSelection;

  shopifyOrderLineItem?: boolean | null | undefined;

  listShopifyOrderLineItem?: AvailableInternalShopifyOrderLineItemRecordConnectionSelection;

  shopifySync?: boolean | null | undefined;

  listShopifySync?: AvailableInternalShopifySyncRecordConnectionSelection;

  draftedProduct?: boolean | null | undefined;

  listDraftedProduct?: AvailableInternalDraftedProductRecordConnectionSelection;
};


/** A connection to a list of InternalSessionRecord items. */
export type InternalSessionRecordConnection = {

  __typename: 'InternalSessionRecordConnection';

  /** A list of edges. */
  edges: InternalSessionRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalSessionRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalSessionRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalSessionRecord connection. */
export type InternalSessionRecordEdge = {

  __typename: 'InternalSessionRecordEdge';

  /** The item at the end of the edge */
  node: InternalSessionRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalSessionRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyShopRecord items. */
export type InternalShopifyShopRecordConnection = {

  __typename: 'InternalShopifyShopRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyShopRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyShopRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyShopRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyShopRecord connection. */
export type InternalShopifyShopRecordEdge = {

  __typename: 'InternalShopifyShopRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyShopRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyShopRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyGdprRequestRecord items. */
export type InternalShopifyGdprRequestRecordConnection = {

  __typename: 'InternalShopifyGdprRequestRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyGdprRequestRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyGdprRequestRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyGdprRequestRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyGdprRequestRecord connection. */
export type InternalShopifyGdprRequestRecordEdge = {

  __typename: 'InternalShopifyGdprRequestRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyGdprRequestRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyGdprRequestRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductRecord items. */
export type InternalShopifyProductRecordConnection = {

  __typename: 'InternalShopifyProductRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductRecord connection. */
export type InternalShopifyProductRecordEdge = {

  __typename: 'InternalShopifyProductRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyProductVariantRecord items. */
export type InternalShopifyProductVariantRecordConnection = {

  __typename: 'InternalShopifyProductVariantRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyProductVariantRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyProductVariantRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyProductVariantRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyProductVariantRecord connection. */
export type InternalShopifyProductVariantRecordEdge = {

  __typename: 'InternalShopifyProductVariantRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyProductVariantRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyProductVariantRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyInventoryItemRecord items. */
export type InternalShopifyInventoryItemRecordConnection = {

  __typename: 'InternalShopifyInventoryItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyInventoryItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyInventoryItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyInventoryItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyInventoryItemRecord connection. */
export type InternalShopifyInventoryItemRecordEdge = {

  __typename: 'InternalShopifyInventoryItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyInventoryItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyInventoryItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyLocationRecord items. */
export type InternalShopifyLocationRecordConnection = {

  __typename: 'InternalShopifyLocationRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyLocationRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyLocationRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyLocationRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyLocationRecord connection. */
export type InternalShopifyLocationRecordEdge = {

  __typename: 'InternalShopifyLocationRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyLocationRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyLocationRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyInventoryLevelRecord items. */
export type InternalShopifyInventoryLevelRecordConnection = {

  __typename: 'InternalShopifyInventoryLevelRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyInventoryLevelRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyInventoryLevelRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyInventoryLevelRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyInventoryLevelRecord connection. */
export type InternalShopifyInventoryLevelRecordEdge = {

  __typename: 'InternalShopifyInventoryLevelRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyInventoryLevelRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyInventoryLevelRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyOrderRecord items. */
export type InternalShopifyOrderRecordConnection = {

  __typename: 'InternalShopifyOrderRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyOrderRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyOrderRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyOrderRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyOrderRecord connection. */
export type InternalShopifyOrderRecordEdge = {

  __typename: 'InternalShopifyOrderRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyOrderRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyOrderRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifyOrderLineItemRecord items. */
export type InternalShopifyOrderLineItemRecordConnection = {

  __typename: 'InternalShopifyOrderLineItemRecordConnection';

  /** A list of edges. */
  edges: InternalShopifyOrderLineItemRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifyOrderLineItemRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifyOrderLineItemRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifyOrderLineItemRecord connection. */
export type InternalShopifyOrderLineItemRecordEdge = {

  __typename: 'InternalShopifyOrderLineItemRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifyOrderLineItemRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifyOrderLineItemRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalShopifySyncRecord items. */
export type InternalShopifySyncRecordConnection = {

  __typename: 'InternalShopifySyncRecordConnection';

  /** A list of edges. */
  edges: InternalShopifySyncRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalShopifySyncRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalShopifySyncRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalShopifySyncRecord connection. */
export type InternalShopifySyncRecordEdge = {

  __typename: 'InternalShopifySyncRecordEdge';

  /** The item at the end of the edge */
  node: InternalShopifySyncRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalShopifySyncRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};


/** A connection to a list of InternalDraftedProductRecord items. */
export type InternalDraftedProductRecordConnection = {

  __typename: 'InternalDraftedProductRecordConnection';

  /** A list of edges. */
  edges: InternalDraftedProductRecordEdge[];

  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};



export type AvailableInternalDraftedProductRecordConnectionSelection = {

  __typename?: boolean | null | undefined;

  /** A list of edges. */
  edges?: AvailableInternalDraftedProductRecordEdgeSelection;

  /** Information to aid in pagination. */
  pageInfo?: AvailablePageInfoSelection;
};


/** An edge in a InternalDraftedProductRecord connection. */
export type InternalDraftedProductRecordEdge = {

  __typename: 'InternalDraftedProductRecordEdge';

  /** The item at the end of the edge */
  node: InternalDraftedProductRecord;

  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type AvailableInternalDraftedProductRecordEdgeSelection = {

  __typename?: boolean | null | undefined;

  /** The item at the end of the edge */
  node?: boolean | null | undefined;

  /** A cursor for use in pagination */
  cursor?: boolean | null | undefined;
};



export type Mutation = {

  __typename: 'Mutation';

  abortShopifySync: (AbortShopifySyncResult | null);

  bulkAbortShopifySyncs: (BulkAbortShopifySyncsResult | null);

  completeShopifySync: (CompleteShopifySyncResult | null);

  bulkCompleteShopifySyncs: (BulkCompleteShopifySyncsResult | null);

  errorShopifySync: (ErrorShopifySyncResult | null);

  bulkErrorShopifySyncs: (BulkErrorShopifySyncsResult | null);

  runShopifySync: (RunShopifySyncResult | null);

  bulkRunShopifySyncs: (BulkRunShopifySyncsResult | null);

  upsertShopifySync: (UpsertShopifySyncResult | null);

  bulkUpsertShopifySyncs: BulkUpsertShopifySyncsResult;

  createDraftedProduct: (CreateDraftedProductResult | null);

  bulkCreateDraftedProducts: (BulkCreateDraftedProductsResult | null);

  updateDraftedProduct: (UpdateDraftedProductResult | null);

  bulkUpdateDraftedProducts: (BulkUpdateDraftedProductsResult | null);

  deleteDraftedProduct: (DeleteDraftedProductResult | null);

  bulkDeleteDraftedProducts: (BulkDeleteDraftedProductsResult | null);

  upsertDraftedProduct: (UpsertDraftedProductResult | null);

  bulkUpsertDraftedProducts: BulkUpsertDraftedProductsResult;

  shopifyConnection: (ShopifyConnectionMutations | null);

  background: BackgroundMutations;

  internal: InternalMutations;

  inventory: InventoryMutations;

  order: OrderMutations;

  product: ProductMutations;
};



export type AvailableMutationSelection = {

  __typename?: boolean | null | undefined;

  abortShopifySync?: AvailableAbortShopifySyncResultSelection;

  bulkAbortShopifySyncs?: AvailableBulkAbortShopifySyncsResultSelection;

  completeShopifySync?: AvailableCompleteShopifySyncResultSelection;

  bulkCompleteShopifySyncs?: AvailableBulkCompleteShopifySyncsResultSelection;

  errorShopifySync?: AvailableErrorShopifySyncResultSelection;

  bulkErrorShopifySyncs?: AvailableBulkErrorShopifySyncsResultSelection;

  runShopifySync?: AvailableRunShopifySyncResultSelection;

  bulkRunShopifySyncs?: AvailableBulkRunShopifySyncsResultSelection;

  upsertShopifySync?: AvailableUpsertShopifySyncResultSelection;

  bulkUpsertShopifySyncs?: AvailableBulkUpsertShopifySyncsResultSelection;

  createDraftedProduct?: AvailableCreateDraftedProductResultSelection;

  bulkCreateDraftedProducts?: AvailableBulkCreateDraftedProductsResultSelection;

  updateDraftedProduct?: AvailableUpdateDraftedProductResultSelection;

  bulkUpdateDraftedProducts?: AvailableBulkUpdateDraftedProductsResultSelection;

  deleteDraftedProduct?: AvailableDeleteDraftedProductResultSelection;

  bulkDeleteDraftedProducts?: AvailableBulkDeleteDraftedProductsResultSelection;

  upsertDraftedProduct?: AvailableUpsertDraftedProductResultSelection;

  bulkUpsertDraftedProducts?: AvailableBulkUpsertDraftedProductsResultSelection;

  shopifyConnection?: AvailableShopifyConnectionMutationsSelection;

  background?: AvailableBackgroundMutationsSelection;

  internal?: AvailableInternalMutationsSelection;

  inventory?: AvailableInventoryMutationsSelection;

  order?: AvailableOrderMutationsSelection;

  product?: AvailableProductMutationsSelection;
};



export interface AbortShopifySyncResult extends UpsertShopifySyncResult {
  __typename: 'AbortShopifySyncResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifySync: (ShopifySync | null);
};



export type AvailableAbortShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the abort on the shopifySync model in bulk. */
export type BulkAbortShopifySyncsResult = {

  __typename: 'BulkAbortShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkAbortShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type CompleteShopifySyncResult = {

  __typename: 'CompleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);

  shopifySync: (ShopifySync | null);
};



export type AvailableCompleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the complete on the shopifySync model in bulk. */
export type BulkCompleteShopifySyncsResult = {

  __typename: 'BulkCompleteShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkCompleteShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export type ErrorShopifySyncResult = {

  __typename: 'ErrorShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);

  shopifySync: (ShopifySync | null);
};



export type AvailableErrorShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the error on the shopifySync model in bulk. */
export type BulkErrorShopifySyncsResult = {

  __typename: 'BulkErrorShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkErrorShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export interface RunShopifySyncResult extends UpsertShopifySyncResult {
  __typename: 'RunShopifySyncResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifySync: (ShopifySync | null);
};



export type AvailableRunShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifySync?: AvailableShopifySyncSelection;
};


/** The output when running the run on the shopifySync model in bulk. */
export type BulkRunShopifySyncsResult = {

  __typename: 'BulkRunShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkRunShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed shopifySync records by each sent bulk action. Returned in the same order as the input bulk action params. */
  shopifySyncs?: AvailableShopifySyncSelection;
};


/** The result of a bulk upsert operation for the shopifySync model */
export type BulkUpsertShopifySyncsResult = {

  __typename: 'BulkUpsertShopifySyncsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The results of each upsert action in the bulk operation */
  shopifySyncs: (ShopifySync | null)[];
};



export type AvailableBulkUpsertShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The results of each upsert action in the bulk operation */
  shopifySyncs?: AvailableShopifySyncSelection;
};



export interface CreateDraftedProductResult extends UpsertDraftedProductResult {
  __typename: 'CreateDraftedProductResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  draftedProduct: (DraftedProduct | null);
};



export type AvailableCreateDraftedProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  draftedProduct?: AvailableDraftedProductSelection;
};


/** The output when running the create on the draftedProduct model in bulk. */
export type BulkCreateDraftedProductsResult = {

  __typename: 'BulkCreateDraftedProductsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed draftedProduct records by each sent bulk action. Returned in the same order as the input bulk action params. */
  draftedProducts: (DraftedProduct | null)[];
};



export type AvailableBulkCreateDraftedProductsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed draftedProduct records by each sent bulk action. Returned in the same order as the input bulk action params. */
  draftedProducts?: AvailableDraftedProductSelection;
};



export interface UpdateDraftedProductResult extends UpsertDraftedProductResult {
  __typename: 'UpdateDraftedProductResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  draftedProduct: (DraftedProduct | null);
};



export type AvailableUpdateDraftedProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  draftedProduct?: AvailableDraftedProductSelection;
};


/** The output when running the update on the draftedProduct model in bulk. */
export type BulkUpdateDraftedProductsResult = {

  __typename: 'BulkUpdateDraftedProductsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The list of all changed draftedProduct records by each sent bulk action. Returned in the same order as the input bulk action params. */
  draftedProducts: (DraftedProduct | null)[];
};



export type AvailableBulkUpdateDraftedProductsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The list of all changed draftedProduct records by each sent bulk action. Returned in the same order as the input bulk action params. */
  draftedProducts?: AvailableDraftedProductSelection;
};



export type DeleteDraftedProductResult = {

  __typename: 'DeleteDraftedProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableDeleteDraftedProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};


/** The output when running the delete on the draftedProduct model in bulk. */
export type BulkDeleteDraftedProductsResult = {

  __typename: 'BulkDeleteDraftedProductsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];
};



export type AvailableBulkDeleteDraftedProductsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;
};


/** The result of a bulk upsert operation for the draftedProduct model */
export type BulkUpsertDraftedProductsResult = {

  __typename: 'BulkUpsertDraftedProductsResult';

  /** Boolean describing if all the bulk actions succeeded or not */
  success: Scalars['Boolean'];

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors: ExecutionError[];

  /** The results of each upsert action in the bulk operation */
  draftedProducts: (DraftedProduct | null)[];
};



export type AvailableBulkUpsertDraftedProductsResultSelection = {

  __typename?: boolean | null | undefined;

  /** Boolean describing if all the bulk actions succeeded or not */
  success?: boolean | null | undefined;

  /** Aggregated list of errors that any bulk action encountered while processing */
  errors?: AvailableExecutionErrorSelection;

  /** The results of each upsert action in the bulk operation */
  draftedProducts?: AvailableDraftedProductSelection;
};



export type ShopifyConnectionMutations = {

  __typename: 'ShopifyConnectionMutations';

  fetchOrInstallShop: (ShopifyConnectionFetchOrInstallShopResult | null);
};



export type AvailableShopifyConnectionMutationsSelection = {

  __typename?: boolean | null | undefined;

  fetchOrInstallShop?: AvailableShopifyConnectionFetchOrInstallShopResultSelection;
};



export type ShopifyConnectionFetchOrInstallShopResult = {

  __typename: 'ShopifyConnectionFetchOrInstallShopResult';

  isAuthenticated: Scalars['Boolean'];

  redirectToOauth: Scalars['Boolean'];

  missingScopes: Scalars['String'][];
};



export type AvailableShopifyConnectionFetchOrInstallShopResultSelection = {

  __typename?: boolean | null | undefined;

  isAuthenticated?: boolean | null | undefined;

  redirectToOauth?: boolean | null | undefined;

  missingScopes?: boolean | null | undefined;
};



export type BackgroundMutations = {

  __typename: 'BackgroundMutations';

  abortShopifySync: EnqueueBackgroundActionResult;

  bulkAbortShopifySyncs: BulkEnqueueBackgroundActionResult;

  completeShopifySync: EnqueueBackgroundActionResult;

  bulkCompleteShopifySyncs: BulkEnqueueBackgroundActionResult;

  errorShopifySync: EnqueueBackgroundActionResult;

  bulkErrorShopifySyncs: BulkEnqueueBackgroundActionResult;

  runShopifySync: EnqueueBackgroundActionResult;

  bulkRunShopifySyncs: BulkEnqueueBackgroundActionResult;

  upsertShopifySync: EnqueueBackgroundActionResult;

  bulkUpsertShopifySyncs: BulkEnqueueBackgroundActionResult;

  createDraftedProduct: EnqueueBackgroundActionResult;

  bulkCreateDraftedProducts: BulkEnqueueBackgroundActionResult;

  updateDraftedProduct: EnqueueBackgroundActionResult;

  bulkUpdateDraftedProducts: BulkEnqueueBackgroundActionResult;

  deleteDraftedProduct: EnqueueBackgroundActionResult;

  bulkDeleteDraftedProducts: BulkEnqueueBackgroundActionResult;

  upsertDraftedProduct: EnqueueBackgroundActionResult;

  bulkUpsertDraftedProducts: BulkEnqueueBackgroundActionResult;

  inventory: BackgroundInventoryMutations;

  order: BackgroundOrderMutations;

  product: BackgroundProductMutations;
};



export type AvailableBackgroundMutationsSelection = {

  __typename?: boolean | null | undefined;

  abortShopifySync?: AvailableEnqueueBackgroundActionResultSelection;

  bulkAbortShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;

  completeShopifySync?: AvailableEnqueueBackgroundActionResultSelection;

  bulkCompleteShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;

  errorShopifySync?: AvailableEnqueueBackgroundActionResultSelection;

  bulkErrorShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;

  runShopifySync?: AvailableEnqueueBackgroundActionResultSelection;

  bulkRunShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;

  upsertShopifySync?: AvailableEnqueueBackgroundActionResultSelection;

  bulkUpsertShopifySyncs?: AvailableBulkEnqueueBackgroundActionResultSelection;

  createDraftedProduct?: AvailableEnqueueBackgroundActionResultSelection;

  bulkCreateDraftedProducts?: AvailableBulkEnqueueBackgroundActionResultSelection;

  updateDraftedProduct?: AvailableEnqueueBackgroundActionResultSelection;

  bulkUpdateDraftedProducts?: AvailableBulkEnqueueBackgroundActionResultSelection;

  deleteDraftedProduct?: AvailableEnqueueBackgroundActionResultSelection;

  bulkDeleteDraftedProducts?: AvailableBulkEnqueueBackgroundActionResultSelection;

  upsertDraftedProduct?: AvailableEnqueueBackgroundActionResultSelection;

  bulkUpsertDraftedProducts?: AvailableBulkEnqueueBackgroundActionResultSelection;

  inventory?: AvailableBackgroundInventoryMutationsSelection;

  order?: AvailableBackgroundOrderMutationsSelection;

  product?: AvailableBackgroundProductMutationsSelection;
};


/** The value returned from enqueuing an action to run in the background */
export type EnqueueBackgroundActionResult = {

  __typename: 'EnqueueBackgroundActionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  backgroundAction: (BackgroundActionHandle | null);
};



export type AvailableEnqueueBackgroundActionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  backgroundAction?: AvailableBackgroundActionHandleSelection;
};


/** One action enqueued for execution in the background */
export type BackgroundActionHandle = {

  __typename: 'BackgroundActionHandle';

  /** The ID of the background action */
  id: Scalars['String'];
};



export type AvailableBackgroundActionHandleSelection = {

  __typename?: boolean | null | undefined;

  /** The ID of the background action */
  id?: boolean | null | undefined;
};


/** The value returned from bulk enqueuing actions to run in the background */
export type BulkEnqueueBackgroundActionResult = {

  __typename: 'BulkEnqueueBackgroundActionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  backgroundActions: BackgroundActionHandle[];
};



export type AvailableBulkEnqueueBackgroundActionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  backgroundActions?: AvailableBackgroundActionHandleSelection;
};



export type BackgroundInventoryMutations = {

  __typename: 'BackgroundInventoryMutations';

  updateInventoryToZero: EnqueueBackgroundActionResult;
};



export type AvailableBackgroundInventoryMutationsSelection = {

  __typename?: boolean | null | undefined;

  updateInventoryToZero?: AvailableEnqueueBackgroundActionResultSelection;
};



export type BackgroundOrderMutations = {

  __typename: 'BackgroundOrderMutations';

  readOrderLineItems: EnqueueBackgroundActionResult;
};



export type AvailableBackgroundOrderMutationsSelection = {

  __typename?: boolean | null | undefined;

  readOrderLineItems?: AvailableEnqueueBackgroundActionResultSelection;
};



export type BackgroundProductMutations = {

  __typename: 'BackgroundProductMutations';

  getVariantsByproduct: EnqueueBackgroundActionResult;

  readMetafieldByProduct: EnqueueBackgroundActionResult;

  readProductBySwatchId: EnqueueBackgroundActionResult;

  updateProductStatus: EnqueueBackgroundActionResult;
};



export type AvailableBackgroundProductMutationsSelection = {

  __typename?: boolean | null | undefined;

  getVariantsByproduct?: AvailableEnqueueBackgroundActionResultSelection;

  readMetafieldByProduct?: AvailableEnqueueBackgroundActionResultSelection;

  readProductBySwatchId?: AvailableEnqueueBackgroundActionResultSelection;

  updateProductStatus?: AvailableEnqueueBackgroundActionResultSelection;
};



export type InternalMutations = {

  __typename: 'InternalMutations';

  startTransaction: Scalars['String'];

  commitTransaction: Scalars['String'];

  rollbackTransaction: Scalars['String'];

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock: LockOperationResult;

  createSession: (InternalCreateSessionResult | null);

  updateSession: (InternalUpdateSessionResult | null);

  deleteSession: (InternalDeleteSessionResult | null);

  deleteManySession: (InternalDeleteManySessionResult | null);

  bulkCreateSessions: (InternalBulkCreateSessionsResult | null);

  upsertSession: (InternalUpsertSessionResult | null);

  createShopifyShop: (InternalCreateShopifyShopResult | null);

  updateShopifyShop: (InternalUpdateShopifyShopResult | null);

  deleteShopifyShop: (InternalDeleteShopifyShopResult | null);

  deleteManyShopifyShop: (InternalDeleteManyShopifyShopResult | null);

  bulkCreateShopifyShops: (InternalBulkCreateShopifyShopsResult | null);

  upsertShopifyShop: (InternalUpsertShopifyShopResult | null);

  triggerUpdateShopifyShop: (UpdateShopifyShopResult | null);

  triggerInstallShopifyShop: (InstallShopifyShopResult | null);

  triggerReinstallShopifyShop: (ReinstallShopifyShopResult | null);

  triggerUninstallShopifyShop: (UninstallShopifyShopResult | null);

  createShopifyGdprRequest: (InternalCreateShopifyGdprRequestResult | null);

  updateShopifyGdprRequest: (InternalUpdateShopifyGdprRequestResult | null);

  deleteShopifyGdprRequest: (InternalDeleteShopifyGdprRequestResult | null);

  deleteManyShopifyGdprRequest: (InternalDeleteManyShopifyGdprRequestResult | null);

  bulkCreateShopifyGdprRequests: (InternalBulkCreateShopifyGdprRequestsResult | null);

  upsertShopifyGdprRequest: (InternalUpsertShopifyGdprRequestResult | null);

  triggerCreateShopifyGdprRequest: (CreateShopifyGdprRequestResult | null);

  triggerUpdateShopifyGdprRequest: (UpdateShopifyGdprRequestResult | null);

  createShopifyProduct: (InternalCreateShopifyProductResult | null);

  updateShopifyProduct: (InternalUpdateShopifyProductResult | null);

  deleteShopifyProduct: (InternalDeleteShopifyProductResult | null);

  deleteManyShopifyProduct: (InternalDeleteManyShopifyProductResult | null);

  bulkCreateShopifyProducts: (InternalBulkCreateShopifyProductsResult | null);

  upsertShopifyProduct: (InternalUpsertShopifyProductResult | null);

  triggerCreateShopifyProduct: (CreateShopifyProductResult | null);

  triggerUpdateShopifyProduct: (UpdateShopifyProductResult | null);

  triggerDeleteShopifyProduct: (DeleteShopifyProductResult | null);

  createShopifyProductVariant: (InternalCreateShopifyProductVariantResult | null);

  updateShopifyProductVariant: (InternalUpdateShopifyProductVariantResult | null);

  deleteShopifyProductVariant: (InternalDeleteShopifyProductVariantResult | null);

  deleteManyShopifyProductVariant: (InternalDeleteManyShopifyProductVariantResult | null);

  bulkCreateShopifyProductVariants: (InternalBulkCreateShopifyProductVariantsResult | null);

  upsertShopifyProductVariant: (InternalUpsertShopifyProductVariantResult | null);

  triggerCreateShopifyProductVariant: (CreateShopifyProductVariantResult | null);

  triggerUpdateShopifyProductVariant: (UpdateShopifyProductVariantResult | null);

  triggerDeleteShopifyProductVariant: (DeleteShopifyProductVariantResult | null);

  createShopifyInventoryItem: (InternalCreateShopifyInventoryItemResult | null);

  updateShopifyInventoryItem: (InternalUpdateShopifyInventoryItemResult | null);

  deleteShopifyInventoryItem: (InternalDeleteShopifyInventoryItemResult | null);

  deleteManyShopifyInventoryItem: (InternalDeleteManyShopifyInventoryItemResult | null);

  bulkCreateShopifyInventoryItems: (InternalBulkCreateShopifyInventoryItemsResult | null);

  upsertShopifyInventoryItem: (InternalUpsertShopifyInventoryItemResult | null);

  triggerCreateShopifyInventoryItem: (CreateShopifyInventoryItemResult | null);

  triggerUpdateShopifyInventoryItem: (UpdateShopifyInventoryItemResult | null);

  triggerDeleteShopifyInventoryItem: (DeleteShopifyInventoryItemResult | null);

  createShopifyLocation: (InternalCreateShopifyLocationResult | null);

  updateShopifyLocation: (InternalUpdateShopifyLocationResult | null);

  deleteShopifyLocation: (InternalDeleteShopifyLocationResult | null);

  deleteManyShopifyLocation: (InternalDeleteManyShopifyLocationResult | null);

  bulkCreateShopifyLocations: (InternalBulkCreateShopifyLocationsResult | null);

  upsertShopifyLocation: (InternalUpsertShopifyLocationResult | null);

  triggerCreateShopifyLocation: (CreateShopifyLocationResult | null);

  triggerUpdateShopifyLocation: (UpdateShopifyLocationResult | null);

  triggerDeleteShopifyLocation: (DeleteShopifyLocationResult | null);

  createShopifyInventoryLevel: (InternalCreateShopifyInventoryLevelResult | null);

  updateShopifyInventoryLevel: (InternalUpdateShopifyInventoryLevelResult | null);

  deleteShopifyInventoryLevel: (InternalDeleteShopifyInventoryLevelResult | null);

  deleteManyShopifyInventoryLevel: (InternalDeleteManyShopifyInventoryLevelResult | null);

  bulkCreateShopifyInventoryLevels: (InternalBulkCreateShopifyInventoryLevelsResult | null);

  upsertShopifyInventoryLevel: (InternalUpsertShopifyInventoryLevelResult | null);

  triggerCreateShopifyInventoryLevel: (CreateShopifyInventoryLevelResult | null);

  triggerUpdateShopifyInventoryLevel: (UpdateShopifyInventoryLevelResult | null);

  triggerDeleteShopifyInventoryLevel: (DeleteShopifyInventoryLevelResult | null);

  createShopifyOrder: (InternalCreateShopifyOrderResult | null);

  updateShopifyOrder: (InternalUpdateShopifyOrderResult | null);

  deleteShopifyOrder: (InternalDeleteShopifyOrderResult | null);

  deleteManyShopifyOrder: (InternalDeleteManyShopifyOrderResult | null);

  bulkCreateShopifyOrders: (InternalBulkCreateShopifyOrdersResult | null);

  upsertShopifyOrder: (InternalUpsertShopifyOrderResult | null);

  triggerCreateShopifyOrder: (CreateShopifyOrderResult | null);

  triggerUpdateShopifyOrder: (UpdateShopifyOrderResult | null);

  triggerDeleteShopifyOrder: (DeleteShopifyOrderResult | null);

  createShopifyOrderLineItem: (InternalCreateShopifyOrderLineItemResult | null);

  updateShopifyOrderLineItem: (InternalUpdateShopifyOrderLineItemResult | null);

  deleteShopifyOrderLineItem: (InternalDeleteShopifyOrderLineItemResult | null);

  deleteManyShopifyOrderLineItem: (InternalDeleteManyShopifyOrderLineItemResult | null);

  bulkCreateShopifyOrderLineItems: (InternalBulkCreateShopifyOrderLineItemsResult | null);

  upsertShopifyOrderLineItem: (InternalUpsertShopifyOrderLineItemResult | null);

  triggerCreateShopifyOrderLineItem: (CreateShopifyOrderLineItemResult | null);

  triggerUpdateShopifyOrderLineItem: (UpdateShopifyOrderLineItemResult | null);

  triggerDeleteShopifyOrderLineItem: (DeleteShopifyOrderLineItemResult | null);

  createShopifySync: (InternalCreateShopifySyncResult | null);

  updateShopifySync: (InternalUpdateShopifySyncResult | null);

  deleteShopifySync: (InternalDeleteShopifySyncResult | null);

  deleteManyShopifySync: (InternalDeleteManyShopifySyncResult | null);

  bulkCreateShopifySyncs: (InternalBulkCreateShopifySyncsResult | null);

  upsertShopifySync: (InternalUpsertShopifySyncResult | null);

  triggerAbortShopifySync: (AbortShopifySyncResult | null);

  triggerCompleteShopifySync: (CompleteShopifySyncResult | null);

  triggerErrorShopifySync: (ErrorShopifySyncResult | null);

  triggerRunShopifySync: (RunShopifySyncResult | null);

  createDraftedProduct: (InternalCreateDraftedProductResult | null);

  updateDraftedProduct: (InternalUpdateDraftedProductResult | null);

  deleteDraftedProduct: (InternalDeleteDraftedProductResult | null);

  deleteManyDraftedProduct: (InternalDeleteManyDraftedProductResult | null);

  bulkCreateDraftedProducts: (InternalBulkCreateDraftedProductsResult | null);

  upsertDraftedProduct: (InternalUpsertDraftedProductResult | null);

  triggerCreateDraftedProduct: (CreateDraftedProductResult | null);

  triggerUpdateDraftedProduct: (UpdateDraftedProductResult | null);

  triggerDeleteDraftedProduct: (DeleteDraftedProductResult | null);

  inventory: InternalInventoryMutations;

  order: InternalOrderMutations;

  product: InternalProductMutations;
};



export type AvailableInternalMutationsSelection = {

  __typename?: boolean | null | undefined;

  startTransaction?: boolean | null | undefined;

  commitTransaction?: boolean | null | undefined;

  rollbackTransaction?: boolean | null | undefined;

  /** Acquire a backend lock, returning only once the lock has been acquired */
  acquireLock?: AvailableLockOperationResultSelection;

  createSession?: AvailableInternalCreateSessionResultSelection;

  updateSession?: AvailableInternalUpdateSessionResultSelection;

  deleteSession?: AvailableInternalDeleteSessionResultSelection;

  deleteManySession?: AvailableInternalDeleteManySessionResultSelection;

  bulkCreateSessions?: AvailableInternalBulkCreateSessionsResultSelection;

  upsertSession?: AvailableInternalUpsertSessionResultSelection;

  createShopifyShop?: AvailableInternalCreateShopifyShopResultSelection;

  updateShopifyShop?: AvailableInternalUpdateShopifyShopResultSelection;

  deleteShopifyShop?: AvailableInternalDeleteShopifyShopResultSelection;

  deleteManyShopifyShop?: AvailableInternalDeleteManyShopifyShopResultSelection;

  bulkCreateShopifyShops?: AvailableInternalBulkCreateShopifyShopsResultSelection;

  upsertShopifyShop?: AvailableInternalUpsertShopifyShopResultSelection;

  triggerUpdateShopifyShop?: AvailableUpdateShopifyShopResultSelection;

  triggerInstallShopifyShop?: AvailableInstallShopifyShopResultSelection;

  triggerReinstallShopifyShop?: AvailableReinstallShopifyShopResultSelection;

  triggerUninstallShopifyShop?: AvailableUninstallShopifyShopResultSelection;

  createShopifyGdprRequest?: AvailableInternalCreateShopifyGdprRequestResultSelection;

  updateShopifyGdprRequest?: AvailableInternalUpdateShopifyGdprRequestResultSelection;

  deleteShopifyGdprRequest?: AvailableInternalDeleteShopifyGdprRequestResultSelection;

  deleteManyShopifyGdprRequest?: AvailableInternalDeleteManyShopifyGdprRequestResultSelection;

  bulkCreateShopifyGdprRequests?: AvailableInternalBulkCreateShopifyGdprRequestsResultSelection;

  upsertShopifyGdprRequest?: AvailableInternalUpsertShopifyGdprRequestResultSelection;

  triggerCreateShopifyGdprRequest?: AvailableCreateShopifyGdprRequestResultSelection;

  triggerUpdateShopifyGdprRequest?: AvailableUpdateShopifyGdprRequestResultSelection;

  createShopifyProduct?: AvailableInternalCreateShopifyProductResultSelection;

  updateShopifyProduct?: AvailableInternalUpdateShopifyProductResultSelection;

  deleteShopifyProduct?: AvailableInternalDeleteShopifyProductResultSelection;

  deleteManyShopifyProduct?: AvailableInternalDeleteManyShopifyProductResultSelection;

  bulkCreateShopifyProducts?: AvailableInternalBulkCreateShopifyProductsResultSelection;

  upsertShopifyProduct?: AvailableInternalUpsertShopifyProductResultSelection;

  triggerCreateShopifyProduct?: AvailableCreateShopifyProductResultSelection;

  triggerUpdateShopifyProduct?: AvailableUpdateShopifyProductResultSelection;

  triggerDeleteShopifyProduct?: AvailableDeleteShopifyProductResultSelection;

  createShopifyProductVariant?: AvailableInternalCreateShopifyProductVariantResultSelection;

  updateShopifyProductVariant?: AvailableInternalUpdateShopifyProductVariantResultSelection;

  deleteShopifyProductVariant?: AvailableInternalDeleteShopifyProductVariantResultSelection;

  deleteManyShopifyProductVariant?: AvailableInternalDeleteManyShopifyProductVariantResultSelection;

  bulkCreateShopifyProductVariants?: AvailableInternalBulkCreateShopifyProductVariantsResultSelection;

  upsertShopifyProductVariant?: AvailableInternalUpsertShopifyProductVariantResultSelection;

  triggerCreateShopifyProductVariant?: AvailableCreateShopifyProductVariantResultSelection;

  triggerUpdateShopifyProductVariant?: AvailableUpdateShopifyProductVariantResultSelection;

  triggerDeleteShopifyProductVariant?: AvailableDeleteShopifyProductVariantResultSelection;

  createShopifyInventoryItem?: AvailableInternalCreateShopifyInventoryItemResultSelection;

  updateShopifyInventoryItem?: AvailableInternalUpdateShopifyInventoryItemResultSelection;

  deleteShopifyInventoryItem?: AvailableInternalDeleteShopifyInventoryItemResultSelection;

  deleteManyShopifyInventoryItem?: AvailableInternalDeleteManyShopifyInventoryItemResultSelection;

  bulkCreateShopifyInventoryItems?: AvailableInternalBulkCreateShopifyInventoryItemsResultSelection;

  upsertShopifyInventoryItem?: AvailableInternalUpsertShopifyInventoryItemResultSelection;

  triggerCreateShopifyInventoryItem?: AvailableCreateShopifyInventoryItemResultSelection;

  triggerUpdateShopifyInventoryItem?: AvailableUpdateShopifyInventoryItemResultSelection;

  triggerDeleteShopifyInventoryItem?: AvailableDeleteShopifyInventoryItemResultSelection;

  createShopifyLocation?: AvailableInternalCreateShopifyLocationResultSelection;

  updateShopifyLocation?: AvailableInternalUpdateShopifyLocationResultSelection;

  deleteShopifyLocation?: AvailableInternalDeleteShopifyLocationResultSelection;

  deleteManyShopifyLocation?: AvailableInternalDeleteManyShopifyLocationResultSelection;

  bulkCreateShopifyLocations?: AvailableInternalBulkCreateShopifyLocationsResultSelection;

  upsertShopifyLocation?: AvailableInternalUpsertShopifyLocationResultSelection;

  triggerCreateShopifyLocation?: AvailableCreateShopifyLocationResultSelection;

  triggerUpdateShopifyLocation?: AvailableUpdateShopifyLocationResultSelection;

  triggerDeleteShopifyLocation?: AvailableDeleteShopifyLocationResultSelection;

  createShopifyInventoryLevel?: AvailableInternalCreateShopifyInventoryLevelResultSelection;

  updateShopifyInventoryLevel?: AvailableInternalUpdateShopifyInventoryLevelResultSelection;

  deleteShopifyInventoryLevel?: AvailableInternalDeleteShopifyInventoryLevelResultSelection;

  deleteManyShopifyInventoryLevel?: AvailableInternalDeleteManyShopifyInventoryLevelResultSelection;

  bulkCreateShopifyInventoryLevels?: AvailableInternalBulkCreateShopifyInventoryLevelsResultSelection;

  upsertShopifyInventoryLevel?: AvailableInternalUpsertShopifyInventoryLevelResultSelection;

  triggerCreateShopifyInventoryLevel?: AvailableCreateShopifyInventoryLevelResultSelection;

  triggerUpdateShopifyInventoryLevel?: AvailableUpdateShopifyInventoryLevelResultSelection;

  triggerDeleteShopifyInventoryLevel?: AvailableDeleteShopifyInventoryLevelResultSelection;

  createShopifyOrder?: AvailableInternalCreateShopifyOrderResultSelection;

  updateShopifyOrder?: AvailableInternalUpdateShopifyOrderResultSelection;

  deleteShopifyOrder?: AvailableInternalDeleteShopifyOrderResultSelection;

  deleteManyShopifyOrder?: AvailableInternalDeleteManyShopifyOrderResultSelection;

  bulkCreateShopifyOrders?: AvailableInternalBulkCreateShopifyOrdersResultSelection;

  upsertShopifyOrder?: AvailableInternalUpsertShopifyOrderResultSelection;

  triggerCreateShopifyOrder?: AvailableCreateShopifyOrderResultSelection;

  triggerUpdateShopifyOrder?: AvailableUpdateShopifyOrderResultSelection;

  triggerDeleteShopifyOrder?: AvailableDeleteShopifyOrderResultSelection;

  createShopifyOrderLineItem?: AvailableInternalCreateShopifyOrderLineItemResultSelection;

  updateShopifyOrderLineItem?: AvailableInternalUpdateShopifyOrderLineItemResultSelection;

  deleteShopifyOrderLineItem?: AvailableInternalDeleteShopifyOrderLineItemResultSelection;

  deleteManyShopifyOrderLineItem?: AvailableInternalDeleteManyShopifyOrderLineItemResultSelection;

  bulkCreateShopifyOrderLineItems?: AvailableInternalBulkCreateShopifyOrderLineItemsResultSelection;

  upsertShopifyOrderLineItem?: AvailableInternalUpsertShopifyOrderLineItemResultSelection;

  triggerCreateShopifyOrderLineItem?: AvailableCreateShopifyOrderLineItemResultSelection;

  triggerUpdateShopifyOrderLineItem?: AvailableUpdateShopifyOrderLineItemResultSelection;

  triggerDeleteShopifyOrderLineItem?: AvailableDeleteShopifyOrderLineItemResultSelection;

  createShopifySync?: AvailableInternalCreateShopifySyncResultSelection;

  updateShopifySync?: AvailableInternalUpdateShopifySyncResultSelection;

  deleteShopifySync?: AvailableInternalDeleteShopifySyncResultSelection;

  deleteManyShopifySync?: AvailableInternalDeleteManyShopifySyncResultSelection;

  bulkCreateShopifySyncs?: AvailableInternalBulkCreateShopifySyncsResultSelection;

  upsertShopifySync?: AvailableInternalUpsertShopifySyncResultSelection;

  triggerAbortShopifySync?: AvailableAbortShopifySyncResultSelection;

  triggerCompleteShopifySync?: AvailableCompleteShopifySyncResultSelection;

  triggerErrorShopifySync?: AvailableErrorShopifySyncResultSelection;

  triggerRunShopifySync?: AvailableRunShopifySyncResultSelection;

  createDraftedProduct?: AvailableInternalCreateDraftedProductResultSelection;

  updateDraftedProduct?: AvailableInternalUpdateDraftedProductResultSelection;

  deleteDraftedProduct?: AvailableInternalDeleteDraftedProductResultSelection;

  deleteManyDraftedProduct?: AvailableInternalDeleteManyDraftedProductResultSelection;

  bulkCreateDraftedProducts?: AvailableInternalBulkCreateDraftedProductsResultSelection;

  upsertDraftedProduct?: AvailableInternalUpsertDraftedProductResultSelection;

  triggerCreateDraftedProduct?: AvailableCreateDraftedProductResultSelection;

  triggerUpdateDraftedProduct?: AvailableUpdateDraftedProductResultSelection;

  triggerDeleteDraftedProduct?: AvailableDeleteDraftedProductResultSelection;

  inventory?: AvailableInternalInventoryMutationsSelection;

  order?: AvailableInternalOrderMutationsSelection;

  product?: AvailableInternalProductMutationsSelection;
};



export type LockOperationResult = {

  __typename: 'LockOperationResult';

  /** Whether the lock operation succeeded */
  success: Scalars['Boolean'];

  /** Any errors encountered during the locking/unlocking operation */
  errors: ExecutionError[];
};



export type AvailableLockOperationResultSelection = {

  __typename?: boolean | null | undefined;

  /** Whether the lock operation succeeded */
  success?: boolean | null | undefined;

  /** Any errors encountered during the locking/unlocking operation */
  errors?: AvailableExecutionErrorSelection;
};



export type InternalCreateSessionResult = {

  __typename: 'InternalCreateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalCreateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalUpdateSessionResult = {

  __typename: 'InternalUpdateSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalUpdateSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalDeleteSessionResult = {

  __typename: 'InternalDeleteSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalDeleteSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalDeleteManySessionResult = {

  __typename: 'InternalDeleteManySessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManySessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateSessionsResult = {

  __typename: 'InternalBulkCreateSessionsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  sessions: (InternalSessionRecord | null)[];
};



export type AvailableInternalBulkCreateSessionsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  sessions?: boolean | null | undefined;
};



export type InternalUpsertSessionResult = {

  __typename: 'InternalUpsertSessionResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  session: (InternalSessionRecord | null);
};



export type AvailableInternalUpsertSessionResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  session?: boolean | null | undefined;
};



export type InternalCreateShopifyShopResult = {

  __typename: 'InternalCreateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalCreateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalUpdateShopifyShopResult = {

  __typename: 'InternalUpdateShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalUpdateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalDeleteShopifyShopResult = {

  __typename: 'InternalDeleteShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalDeleteShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyShopResult = {

  __typename: 'InternalDeleteManyShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyShopsResult = {

  __typename: 'InternalBulkCreateShopifyShopsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShops: (InternalShopifyShopRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyShopsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShops?: boolean | null | undefined;
};



export type InternalUpsertShopifyShopResult = {

  __typename: 'InternalUpsertShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyShop: (InternalShopifyShopRecord | null);
};



export type AvailableInternalUpsertShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyShop?: boolean | null | undefined;
};



export interface UpdateShopifyShopResult extends UpsertShopifyShopResult {
  __typename: 'UpdateShopifyShopResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyShop: (ShopifyShop | null);
};



export type AvailableUpdateShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyShop?: AvailableShopifyShopSelection;
};



export interface InstallShopifyShopResult extends UpsertShopifyShopResult {
  __typename: 'InstallShopifyShopResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyShop: (ShopifyShop | null);
};



export type AvailableInstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type ReinstallShopifyShopResult = {

  __typename: 'ReinstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);

  shopifyShop: (ShopifyShop | null);
};



export type AvailableReinstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type UninstallShopifyShopResult = {

  __typename: 'UninstallShopifyShopResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);

  shopifyShop: (ShopifyShop | null);
};



export type AvailableUninstallShopifyShopResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyShop?: AvailableShopifyShopSelection;
};



export type InternalCreateShopifyGdprRequestResult = {

  __typename: 'InternalCreateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalCreateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalUpdateShopifyGdprRequestResult = {

  __typename: 'InternalUpdateShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalUpdateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalDeleteShopifyGdprRequestResult = {

  __typename: 'InternalDeleteShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalDeleteShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyGdprRequestResult = {

  __typename: 'InternalDeleteManyShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyGdprRequestsResult = {

  __typename: 'InternalBulkCreateShopifyGdprRequestsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequests: (InternalShopifyGdprRequestRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyGdprRequestsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequests?: boolean | null | undefined;
};



export type InternalUpsertShopifyGdprRequestResult = {

  __typename: 'InternalUpsertShopifyGdprRequestResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyGdprRequest: (InternalShopifyGdprRequestRecord | null);
};



export type AvailableInternalUpsertShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyGdprRequest?: boolean | null | undefined;
};



export interface CreateShopifyGdprRequestResult extends UpsertShopifyGdprRequestResult {
  __typename: 'CreateShopifyGdprRequestResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyGdprRequest: (ShopifyGdprRequest | null);
};



export type AvailableCreateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};



export interface UpdateShopifyGdprRequestResult extends UpsertShopifyGdprRequestResult {
  __typename: 'UpdateShopifyGdprRequestResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyGdprRequest: (ShopifyGdprRequest | null);
};



export type AvailableUpdateShopifyGdprRequestResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyGdprRequest?: AvailableShopifyGdprRequestSelection;
};



export type InternalCreateShopifyProductResult = {

  __typename: 'InternalCreateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalCreateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalUpdateShopifyProductResult = {

  __typename: 'InternalUpdateShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalUpdateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalDeleteShopifyProductResult = {

  __typename: 'InternalDeleteShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalDeleteShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProductResult = {

  __typename: 'InternalDeleteManyShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProductsResult = {

  __typename: 'InternalBulkCreateShopifyProductsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProducts: (InternalShopifyProductRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProducts?: boolean | null | undefined;
};



export type InternalUpsertShopifyProductResult = {

  __typename: 'InternalUpsertShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProduct: (InternalShopifyProductRecord | null);
};



export type AvailableInternalUpsertShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProduct?: boolean | null | undefined;
};



export interface CreateShopifyProductResult extends UpsertShopifyProductResult {
  __typename: 'CreateShopifyProductResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyProduct: (ShopifyProduct | null);
};



export type AvailableCreateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyProduct?: AvailableShopifyProductSelection;
};



export interface UpdateShopifyProductResult extends UpsertShopifyProductResult {
  __typename: 'UpdateShopifyProductResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyProduct: (ShopifyProduct | null);
};



export type AvailableUpdateShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyProduct?: AvailableShopifyProductSelection;
};



export type DeleteShopifyProductResult = {

  __typename: 'DeleteShopifyProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableDeleteShopifyProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type InternalCreateShopifyProductVariantResult = {

  __typename: 'InternalCreateShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);
};



export type AvailableInternalCreateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: boolean | null | undefined;
};



export type InternalUpdateShopifyProductVariantResult = {

  __typename: 'InternalUpdateShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);
};



export type AvailableInternalUpdateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: boolean | null | undefined;
};



export type InternalDeleteShopifyProductVariantResult = {

  __typename: 'InternalDeleteShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);
};



export type AvailableInternalDeleteShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyProductVariantResult = {

  __typename: 'InternalDeleteManyShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyProductVariantsResult = {

  __typename: 'InternalBulkCreateShopifyProductVariantsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariants: (InternalShopifyProductVariantRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyProductVariantsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariants?: boolean | null | undefined;
};



export type InternalUpsertShopifyProductVariantResult = {

  __typename: 'InternalUpsertShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyProductVariant: (InternalShopifyProductVariantRecord | null);
};



export type AvailableInternalUpsertShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyProductVariant?: boolean | null | undefined;
};



export interface CreateShopifyProductVariantResult extends UpsertShopifyProductVariantResult {
  __typename: 'CreateShopifyProductVariantResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyProductVariant: (ShopifyProductVariant | null);
};



export type AvailableCreateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyProductVariant?: AvailableShopifyProductVariantSelection;
};



export interface UpdateShopifyProductVariantResult extends UpsertShopifyProductVariantResult {
  __typename: 'UpdateShopifyProductVariantResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyProductVariant: (ShopifyProductVariant | null);
};



export type AvailableUpdateShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyProductVariant?: AvailableShopifyProductVariantSelection;
};



export type DeleteShopifyProductVariantResult = {

  __typename: 'DeleteShopifyProductVariantResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableDeleteShopifyProductVariantResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type InternalCreateShopifyInventoryItemResult = {

  __typename: 'InternalCreateShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);
};



export type AvailableInternalCreateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyInventoryItemResult = {

  __typename: 'InternalUpdateShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);
};



export type AvailableInternalUpdateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyInventoryItemResult = {

  __typename: 'InternalDeleteShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);
};



export type AvailableInternalDeleteShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyInventoryItemResult = {

  __typename: 'InternalDeleteManyShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyInventoryItemsResult = {

  __typename: 'InternalBulkCreateShopifyInventoryItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItems: (InternalShopifyInventoryItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyInventoryItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItems?: boolean | null | undefined;
};



export type InternalUpsertShopifyInventoryItemResult = {

  __typename: 'InternalUpsertShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryItem: (InternalShopifyInventoryItemRecord | null);
};



export type AvailableInternalUpsertShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryItem?: boolean | null | undefined;
};



export interface CreateShopifyInventoryItemResult extends UpsertShopifyInventoryItemResult {
  __typename: 'CreateShopifyInventoryItemResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyInventoryItem: (ShopifyInventoryItem | null);
};



export type AvailableCreateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyInventoryItem?: AvailableShopifyInventoryItemSelection;
};



export interface UpdateShopifyInventoryItemResult extends UpsertShopifyInventoryItemResult {
  __typename: 'UpdateShopifyInventoryItemResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyInventoryItem: (ShopifyInventoryItem | null);
};



export type AvailableUpdateShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyInventoryItem?: AvailableShopifyInventoryItemSelection;
};



export type DeleteShopifyInventoryItemResult = {

  __typename: 'DeleteShopifyInventoryItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableDeleteShopifyInventoryItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type InternalCreateShopifyLocationResult = {

  __typename: 'InternalCreateShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (InternalShopifyLocationRecord | null);
};



export type AvailableInternalCreateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: boolean | null | undefined;
};



export type InternalUpdateShopifyLocationResult = {

  __typename: 'InternalUpdateShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (InternalShopifyLocationRecord | null);
};



export type AvailableInternalUpdateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: boolean | null | undefined;
};



export type InternalDeleteShopifyLocationResult = {

  __typename: 'InternalDeleteShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (InternalShopifyLocationRecord | null);
};



export type AvailableInternalDeleteShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyLocationResult = {

  __typename: 'InternalDeleteManyShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyLocationsResult = {

  __typename: 'InternalBulkCreateShopifyLocationsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocations: (InternalShopifyLocationRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyLocationsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocations?: boolean | null | undefined;
};



export type InternalUpsertShopifyLocationResult = {

  __typename: 'InternalUpsertShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyLocation: (InternalShopifyLocationRecord | null);
};



export type AvailableInternalUpsertShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyLocation?: boolean | null | undefined;
};



export interface CreateShopifyLocationResult extends UpsertShopifyLocationResult {
  __typename: 'CreateShopifyLocationResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyLocation: (ShopifyLocation | null);
};



export type AvailableCreateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyLocation?: AvailableShopifyLocationSelection;
};



export interface UpdateShopifyLocationResult extends UpsertShopifyLocationResult {
  __typename: 'UpdateShopifyLocationResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyLocation: (ShopifyLocation | null);
};



export type AvailableUpdateShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyLocation?: AvailableShopifyLocationSelection;
};



export type DeleteShopifyLocationResult = {

  __typename: 'DeleteShopifyLocationResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableDeleteShopifyLocationResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type InternalCreateShopifyInventoryLevelResult = {

  __typename: 'InternalCreateShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);
};



export type AvailableInternalCreateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: boolean | null | undefined;
};



export type InternalUpdateShopifyInventoryLevelResult = {

  __typename: 'InternalUpdateShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);
};



export type AvailableInternalUpdateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: boolean | null | undefined;
};



export type InternalDeleteShopifyInventoryLevelResult = {

  __typename: 'InternalDeleteShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);
};



export type AvailableInternalDeleteShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyInventoryLevelResult = {

  __typename: 'InternalDeleteManyShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyInventoryLevelsResult = {

  __typename: 'InternalBulkCreateShopifyInventoryLevelsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevels: (InternalShopifyInventoryLevelRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyInventoryLevelsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevels?: boolean | null | undefined;
};



export type InternalUpsertShopifyInventoryLevelResult = {

  __typename: 'InternalUpsertShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyInventoryLevel: (InternalShopifyInventoryLevelRecord | null);
};



export type AvailableInternalUpsertShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyInventoryLevel?: boolean | null | undefined;
};



export interface CreateShopifyInventoryLevelResult extends UpsertShopifyInventoryLevelResult {
  __typename: 'CreateShopifyInventoryLevelResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyInventoryLevel: (ShopifyInventoryLevel | null);
};



export type AvailableCreateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyInventoryLevel?: AvailableShopifyInventoryLevelSelection;
};



export interface UpdateShopifyInventoryLevelResult extends UpsertShopifyInventoryLevelResult {
  __typename: 'UpdateShopifyInventoryLevelResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyInventoryLevel: (ShopifyInventoryLevel | null);
};



export type AvailableUpdateShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyInventoryLevel?: AvailableShopifyInventoryLevelSelection;
};



export type DeleteShopifyInventoryLevelResult = {

  __typename: 'DeleteShopifyInventoryLevelResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableDeleteShopifyInventoryLevelResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type InternalCreateShopifyOrderResult = {

  __typename: 'InternalCreateShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (InternalShopifyOrderRecord | null);
};



export type AvailableInternalCreateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: boolean | null | undefined;
};



export type InternalUpdateShopifyOrderResult = {

  __typename: 'InternalUpdateShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (InternalShopifyOrderRecord | null);
};



export type AvailableInternalUpdateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: boolean | null | undefined;
};



export type InternalDeleteShopifyOrderResult = {

  __typename: 'InternalDeleteShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (InternalShopifyOrderRecord | null);
};



export type AvailableInternalDeleteShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyOrderResult = {

  __typename: 'InternalDeleteManyShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyOrdersResult = {

  __typename: 'InternalBulkCreateShopifyOrdersResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrders: (InternalShopifyOrderRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyOrdersResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrders?: boolean | null | undefined;
};



export type InternalUpsertShopifyOrderResult = {

  __typename: 'InternalUpsertShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrder: (InternalShopifyOrderRecord | null);
};



export type AvailableInternalUpsertShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrder?: boolean | null | undefined;
};



export interface CreateShopifyOrderResult extends UpsertShopifyOrderResult {
  __typename: 'CreateShopifyOrderResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyOrder: (ShopifyOrder | null);
};



export type AvailableCreateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyOrder?: AvailableShopifyOrderSelection;
};



export interface UpdateShopifyOrderResult extends UpsertShopifyOrderResult {
  __typename: 'UpdateShopifyOrderResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyOrder: (ShopifyOrder | null);
};



export type AvailableUpdateShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyOrder?: AvailableShopifyOrderSelection;
};



export type DeleteShopifyOrderResult = {

  __typename: 'DeleteShopifyOrderResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableDeleteShopifyOrderResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type InternalCreateShopifyOrderLineItemResult = {

  __typename: 'InternalCreateShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);
};



export type AvailableInternalCreateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: boolean | null | undefined;
};



export type InternalUpdateShopifyOrderLineItemResult = {

  __typename: 'InternalUpdateShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);
};



export type AvailableInternalUpdateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteShopifyOrderLineItemResult = {

  __typename: 'InternalDeleteShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);
};



export type AvailableInternalDeleteShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: boolean | null | undefined;
};



export type InternalDeleteManyShopifyOrderLineItemResult = {

  __typename: 'InternalDeleteManyShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifyOrderLineItemsResult = {

  __typename: 'InternalBulkCreateShopifyOrderLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItems: (InternalShopifyOrderLineItemRecord | null)[];
};



export type AvailableInternalBulkCreateShopifyOrderLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItems?: boolean | null | undefined;
};



export type InternalUpsertShopifyOrderLineItemResult = {

  __typename: 'InternalUpsertShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifyOrderLineItem: (InternalShopifyOrderLineItemRecord | null);
};



export type AvailableInternalUpsertShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifyOrderLineItem?: boolean | null | undefined;
};



export interface CreateShopifyOrderLineItemResult extends UpsertShopifyOrderLineItemResult {
  __typename: 'CreateShopifyOrderLineItemResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyOrderLineItem: (ShopifyOrderLineItem | null);
};



export type AvailableCreateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyOrderLineItem?: AvailableShopifyOrderLineItemSelection;
};



export interface UpdateShopifyOrderLineItemResult extends UpsertShopifyOrderLineItemResult {
  __typename: 'UpdateShopifyOrderLineItemResult';
  success: Scalars['Boolean'];
  errors: ExecutionError[];
  actionRun: (Scalars['String'] | null);
  shopifyOrderLineItem: (ShopifyOrderLineItem | null);
};



export type AvailableUpdateShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;

  shopifyOrderLineItem?: AvailableShopifyOrderLineItemSelection;
};



export type DeleteShopifyOrderLineItemResult = {

  __typename: 'DeleteShopifyOrderLineItemResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  actionRun: (Scalars['String'] | null);
};



export type AvailableDeleteShopifyOrderLineItemResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  actionRun?: boolean | null | undefined;
};



export type InternalCreateShopifySyncResult = {

  __typename: 'InternalCreateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalCreateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalUpdateShopifySyncResult = {

  __typename: 'InternalUpdateShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalUpdateShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalDeleteShopifySyncResult = {

  __typename: 'InternalDeleteShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalDeleteShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalDeleteManyShopifySyncResult = {

  __typename: 'InternalDeleteManyShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateShopifySyncsResult = {

  __typename: 'InternalBulkCreateShopifySyncsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySyncs: (InternalShopifySyncRecord | null)[];
};



export type AvailableInternalBulkCreateShopifySyncsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySyncs?: boolean | null | undefined;
};



export type InternalUpsertShopifySyncResult = {

  __typename: 'InternalUpsertShopifySyncResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  shopifySync: (InternalShopifySyncRecord | null);
};



export type AvailableInternalUpsertShopifySyncResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  shopifySync?: boolean | null | undefined;
};



export type InternalCreateDraftedProductResult = {

  __typename: 'InternalCreateDraftedProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  draftedProduct: (InternalDraftedProductRecord | null);
};



export type AvailableInternalCreateDraftedProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  draftedProduct?: boolean | null | undefined;
};



export type InternalUpdateDraftedProductResult = {

  __typename: 'InternalUpdateDraftedProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  draftedProduct: (InternalDraftedProductRecord | null);
};



export type AvailableInternalUpdateDraftedProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  draftedProduct?: boolean | null | undefined;
};



export type InternalDeleteDraftedProductResult = {

  __typename: 'InternalDeleteDraftedProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  draftedProduct: (InternalDraftedProductRecord | null);
};



export type AvailableInternalDeleteDraftedProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  draftedProduct?: boolean | null | undefined;
};



export type InternalDeleteManyDraftedProductResult = {

  __typename: 'InternalDeleteManyDraftedProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];
};



export type AvailableInternalDeleteManyDraftedProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;
};



export type InternalBulkCreateDraftedProductsResult = {

  __typename: 'InternalBulkCreateDraftedProductsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  draftedProducts: (InternalDraftedProductRecord | null)[];
};



export type AvailableInternalBulkCreateDraftedProductsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  draftedProducts?: boolean | null | undefined;
};



export type InternalUpsertDraftedProductResult = {

  __typename: 'InternalUpsertDraftedProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  draftedProduct: (InternalDraftedProductRecord | null);
};



export type AvailableInternalUpsertDraftedProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  draftedProduct?: boolean | null | undefined;
};



export type InternalInventoryMutations = {

  __typename: 'InternalInventoryMutations';

  triggerUpdateInventoryToZero: (InventoryUpdateInventoryToZeroResult | null);
};



export type AvailableInternalInventoryMutationsSelection = {

  __typename?: boolean | null | undefined;

  triggerUpdateInventoryToZero?: AvailableInventoryUpdateInventoryToZeroResultSelection;
};



export type InventoryUpdateInventoryToZeroResult = {

  __typename: 'InventoryUpdateInventoryToZeroResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableInventoryUpdateInventoryToZeroResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type InternalOrderMutations = {

  __typename: 'InternalOrderMutations';

  triggerReadOrderLineItems: (OrderReadOrderLineItemsResult | null);
};



export type AvailableInternalOrderMutationsSelection = {

  __typename?: boolean | null | undefined;

  triggerReadOrderLineItems?: AvailableOrderReadOrderLineItemsResultSelection;
};



export type OrderReadOrderLineItemsResult = {

  __typename: 'OrderReadOrderLineItemsResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableOrderReadOrderLineItemsResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type InternalProductMutations = {

  __typename: 'InternalProductMutations';

  triggerGetVariantsByproduct: (ProductGetVariantsByproductResult | null);

  triggerReadMetafieldByProduct: (ProductReadMetafieldByProductResult | null);

  triggerReadProductBySwatchId: (ProductReadProductBySwatchIdResult | null);

  triggerUpdateProductStatus: (ProductUpdateProductStatusResult | null);
};



export type AvailableInternalProductMutationsSelection = {

  __typename?: boolean | null | undefined;

  triggerGetVariantsByproduct?: AvailableProductGetVariantsByproductResultSelection;

  triggerReadMetafieldByProduct?: AvailableProductReadMetafieldByProductResultSelection;

  triggerReadProductBySwatchId?: AvailableProductReadProductBySwatchIdResultSelection;

  triggerUpdateProductStatus?: AvailableProductUpdateProductStatusResultSelection;
};



export type ProductGetVariantsByproductResult = {

  __typename: 'ProductGetVariantsByproductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableProductGetVariantsByproductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type ProductReadMetafieldByProductResult = {

  __typename: 'ProductReadMetafieldByProductResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableProductReadMetafieldByProductResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type ProductReadProductBySwatchIdResult = {

  __typename: 'ProductReadProductBySwatchIdResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableProductReadProductBySwatchIdResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type ProductUpdateProductStatusResult = {

  __typename: 'ProductUpdateProductStatusResult';

  success: Scalars['Boolean'];

  errors: ExecutionError[];

  result: (Scalars['JSON'] | null);
};



export type AvailableProductUpdateProductStatusResultSelection = {

  __typename?: boolean | null | undefined;

  success?: boolean | null | undefined;

  errors?: AvailableExecutionErrorSelection;

  result?: boolean | null | undefined;
};



export type InventoryMutations = {

  __typename: 'InventoryMutations';

  updateInventoryToZero: (InventoryUpdateInventoryToZeroResult | null);
};



export type AvailableInventoryMutationsSelection = {

  __typename?: boolean | null | undefined;

  updateInventoryToZero?: AvailableInventoryUpdateInventoryToZeroResultSelection;
};



export type OrderMutations = {

  __typename: 'OrderMutations';

  readOrderLineItems: (OrderReadOrderLineItemsResult | null);
};



export type AvailableOrderMutationsSelection = {

  __typename?: boolean | null | undefined;

  readOrderLineItems?: AvailableOrderReadOrderLineItemsResultSelection;
};



export type ProductMutations = {

  __typename: 'ProductMutations';

  getVariantsByproduct: (ProductGetVariantsByproductResult | null);

  readMetafieldByProduct: (ProductReadMetafieldByProductResult | null);

  readProductBySwatchId: (ProductReadProductBySwatchIdResult | null);

  updateProductStatus: (ProductUpdateProductStatusResult | null);
};



export type AvailableProductMutationsSelection = {

  __typename?: boolean | null | undefined;

  getVariantsByproduct?: AvailableProductGetVariantsByproductResultSelection;

  readMetafieldByProduct?: AvailableProductReadMetafieldByProductResultSelection;

  readProductBySwatchId?: AvailableProductReadProductBySwatchIdResultSelection;

  updateProductStatus?: AvailableProductUpdateProductStatusResultSelection;
};



export type Subscription = {

  __typename: 'Subscription';

  backgroundAction: (BackgroundAction | null);
};



export type AvailableSubscriptionSelection = {

  __typename?: boolean | null | undefined;

  backgroundAction?: AvailableBackgroundActionSelection;
};



export type BackgroundAction = {

  __typename: 'BackgroundAction';

  /** The ID of the background action */
  id: Scalars['String'];

  outcome: (BackgroundActionOutcome | null);

  result: (BackgroundActionResult | null);
};



export type AvailableBackgroundActionSelection = {

  __typename?: boolean | null | undefined;

  /** The ID of the background action */
  id?: boolean | null | undefined;

  outcome?: boolean | null | undefined;

  result?: AvailableBackgroundActionResultSelection;
};



export type ExplicitNestingRequired = never;

export type DeepFilterNever<T> = T extends Record<string, unknown> ? FilterNever<{
  [Key in keyof T]: T[Key] extends Record<string, unknown> ? DeepFilterNever<T[Key]> : T[Key];
}> : T;

/**
 * Given a schema we can select values from, apply a given selection to that schema to get the output type.
 **/
export type Select<Schema, Selection extends FieldSelection | null | undefined> = Selection extends null | undefined
  ? never
  : Schema extends (infer T)[]
  ? Select<T, Selection>[]
  : Schema extends null
  ? Select<Exclude<Schema, null>, Selection> | null
  : {
      [Key in keyof Selection & keyof Schema]: Selection[Key] extends true
        ? Schema[Key]
        : Selection[Key] extends FieldSelection
        ? Select<Schema[Key], Selection[Key]>
        : never;
    };

export type IDsList = {
  ids: string[];
}

/**
 * For finder functions which accept the `live: true` argument, this type decides if the return type will be one value or an async iterable stream of values
 * If {live: true}, returns an AsyncIterable<Result>
 * Anything else, returns a Promise<Result>
 **/
export type PromiseOrLiveIterator<Options extends { live?: boolean }, Result> = Options extends { live: true } ? AsyncIterable<Result> : Promise<Result>;
