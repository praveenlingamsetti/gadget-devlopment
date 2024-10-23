import "path";
import { UpdateShopifyShopActionContext } from "./models/ShopifyShop";
import { InstallShopifyShopActionContext } from "./models/ShopifyShop";
import { ReinstallShopifyShopActionContext } from "./models/ShopifyShop";
import { UninstallShopifyShopActionContext } from "./models/ShopifyShop";
import { CreateShopifyGdprRequestActionContext } from "./models/ShopifyGdprRequest";
import { UpdateShopifyGdprRequestActionContext } from "./models/ShopifyGdprRequest";
import { CreateShopifyProductActionContext } from "./models/ShopifyProduct";
import { UpdateShopifyProductActionContext } from "./models/ShopifyProduct";
import { DeleteShopifyProductActionContext } from "./models/ShopifyProduct";
import { CreateShopifyProductVariantActionContext } from "./models/ShopifyProductVariant";
import { UpdateShopifyProductVariantActionContext } from "./models/ShopifyProductVariant";
import { DeleteShopifyProductVariantActionContext } from "./models/ShopifyProductVariant";
import { CreateShopifyInventoryItemActionContext } from "./models/ShopifyInventoryItem";
import { UpdateShopifyInventoryItemActionContext } from "./models/ShopifyInventoryItem";
import { DeleteShopifyInventoryItemActionContext } from "./models/ShopifyInventoryItem";
import { CreateShopifyLocationActionContext } from "./models/ShopifyLocation";
import { UpdateShopifyLocationActionContext } from "./models/ShopifyLocation";
import { DeleteShopifyLocationActionContext } from "./models/ShopifyLocation";
import { CreateShopifyInventoryLevelActionContext } from "./models/ShopifyInventoryLevel";
import { UpdateShopifyInventoryLevelActionContext } from "./models/ShopifyInventoryLevel";
import { DeleteShopifyInventoryLevelActionContext } from "./models/ShopifyInventoryLevel";
import { CreateShopifyOrderActionContext } from "./models/ShopifyOrder";
import { UpdateShopifyOrderActionContext } from "./models/ShopifyOrder";
import { DeleteShopifyOrderActionContext } from "./models/ShopifyOrder";
import { CreateShopifyOrderLineItemActionContext } from "./models/ShopifyOrderLineItem";
import { UpdateShopifyOrderLineItemActionContext } from "./models/ShopifyOrderLineItem";
import { DeleteShopifyOrderLineItemActionContext } from "./models/ShopifyOrderLineItem";
import { AbortShopifySyncActionContext } from "./models/ShopifySync";
import { CompleteShopifySyncActionContext } from "./models/ShopifySync";
import { ErrorShopifySyncActionContext } from "./models/ShopifySync";
import { RunShopifySyncActionContext } from "./models/ShopifySync";
import { CreateDraftedProductActionContext } from "./models/DraftedProduct";
import { UpdateDraftedProductActionContext } from "./models/DraftedProduct";
import { DeleteDraftedProductActionContext } from "./models/DraftedProduct";
import { CreateGadgetInfoActionContext } from "./models/GadgetInfo";
import { UpdateGadgetInfoActionContext } from "./models/GadgetInfo";
import { DeleteGadgetInfoActionContext } from "./models/GadgetInfo";
import { InventoryUpdateInventoryToZeroGlobalActionContext } from "./global-actions";
import { OrderReadOrderLineItemsGlobalActionContext } from "./global-actions";
import { ProductGetVariantsByproductGlobalActionContext } from "./global-actions";
import { ProductReadMetafieldByProductGlobalActionContext } from "./global-actions";
import { ProductReadProductBySwatchIdGlobalActionContext } from "./global-actions";
import { ProductUpdateProductStatusGlobalActionContext } from "./global-actions";
// @ts-ignore 
declare module "../../../api/models/shopifyShop/actions/update" {
    export type ActionRun = (params: UpdateShopifyShopActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UpdateShopifyShopActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyShop/actions/install" {
    export type ActionRun = (params: InstallShopifyShopActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: InstallShopifyShopActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyShop/actions/reinstall" {
    export type ActionRun = (params: ReinstallShopifyShopActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: ReinstallShopifyShopActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyShop/actions/uninstall" {
    export type ActionRun = (params: UninstallShopifyShopActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UninstallShopifyShopActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyGdprRequest/actions/create" {
    export type ActionRun = (params: CreateShopifyGdprRequestActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: CreateShopifyGdprRequestActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyGdprRequest/actions/update" {
    export type ActionRun = (params: UpdateShopifyGdprRequestActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UpdateShopifyGdprRequestActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyProduct/actions/create" {
    export type ActionRun = (params: CreateShopifyProductActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: CreateShopifyProductActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyProduct/actions/update" {
    export type ActionRun = (params: UpdateShopifyProductActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UpdateShopifyProductActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyProduct/actions/delete" {
    export type ActionRun = (params: DeleteShopifyProductActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: DeleteShopifyProductActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyProductVariant/actions/create" {
    export type ActionRun = (params: CreateShopifyProductVariantActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: CreateShopifyProductVariantActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyProductVariant/actions/update" {
    export type ActionRun = (params: UpdateShopifyProductVariantActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UpdateShopifyProductVariantActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyProductVariant/actions/delete" {
    export type ActionRun = (params: DeleteShopifyProductVariantActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: DeleteShopifyProductVariantActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyInventoryItem/actions/create" {
    export type ActionRun = (params: CreateShopifyInventoryItemActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: CreateShopifyInventoryItemActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyInventoryItem/actions/update" {
    export type ActionRun = (params: UpdateShopifyInventoryItemActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UpdateShopifyInventoryItemActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyInventoryItem/actions/delete" {
    export type ActionRun = (params: DeleteShopifyInventoryItemActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: DeleteShopifyInventoryItemActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyLocation/actions/create" {
    export type ActionRun = (params: CreateShopifyLocationActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: CreateShopifyLocationActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyLocation/actions/update" {
    export type ActionRun = (params: UpdateShopifyLocationActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UpdateShopifyLocationActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyLocation/actions/delete" {
    export type ActionRun = (params: DeleteShopifyLocationActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: DeleteShopifyLocationActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyInventoryLevel/actions/create" {
    export type ActionRun = (params: CreateShopifyInventoryLevelActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: CreateShopifyInventoryLevelActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyInventoryLevel/actions/update" {
    export type ActionRun = (params: UpdateShopifyInventoryLevelActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UpdateShopifyInventoryLevelActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyInventoryLevel/actions/delete" {
    export type ActionRun = (params: DeleteShopifyInventoryLevelActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: DeleteShopifyInventoryLevelActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyOrder/actions/create" {
    export type ActionRun = (params: CreateShopifyOrderActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: CreateShopifyOrderActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyOrder/actions/update" {
    export type ActionRun = (params: UpdateShopifyOrderActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UpdateShopifyOrderActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyOrder/actions/delete" {
    export type ActionRun = (params: DeleteShopifyOrderActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: DeleteShopifyOrderActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyOrderLineItem/actions/create" {
    export type ActionRun = (params: CreateShopifyOrderLineItemActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: CreateShopifyOrderLineItemActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyOrderLineItem/actions/update" {
    export type ActionRun = (params: UpdateShopifyOrderLineItemActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UpdateShopifyOrderLineItemActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifyOrderLineItem/actions/delete" {
    export type ActionRun = (params: DeleteShopifyOrderLineItemActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: DeleteShopifyOrderLineItemActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifySync/actions/abort" {
    export type ActionRun = (params: AbortShopifySyncActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: AbortShopifySyncActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifySync/actions/complete" {
    export type ActionRun = (params: CompleteShopifySyncActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: CompleteShopifySyncActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifySync/actions/error" {
    export type ActionRun = (params: ErrorShopifySyncActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: ErrorShopifySyncActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/shopifySync/actions/run" {
    export type ActionRun = (params: RunShopifySyncActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: RunShopifySyncActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/draftedProduct/actions/create" {
    export type ActionRun = (params: CreateDraftedProductActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: CreateDraftedProductActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/draftedProduct/actions/update" {
    export type ActionRun = (params: UpdateDraftedProductActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UpdateDraftedProductActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/draftedProduct/actions/delete" {
    export type ActionRun = (params: DeleteDraftedProductActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: DeleteDraftedProductActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/gadgetInfo/actions/create" {
    export type ActionRun = (params: CreateGadgetInfoActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: CreateGadgetInfoActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/gadgetInfo/actions/update" {
    export type ActionRun = (params: UpdateGadgetInfoActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: UpdateGadgetInfoActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/models/gadgetInfo/actions/delete" {
    export type ActionRun = (params: DeleteGadgetInfoActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: DeleteGadgetInfoActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/actions/inventory/updateInventoryToZero" {
    export type ActionRun = (params: InventoryUpdateInventoryToZeroGlobalActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: InventoryUpdateInventoryToZeroGlobalActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/actions/order/readOrderLineItems" {
    export type ActionRun = (params: OrderReadOrderLineItemsGlobalActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: OrderReadOrderLineItemsGlobalActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/actions/product/getVariantsByproduct" {
    export type ActionRun = (params: ProductGetVariantsByproductGlobalActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: ProductGetVariantsByproductGlobalActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/actions/product/readMetafieldByProduct" {
    export type ActionRun = (params: ProductReadMetafieldByProductGlobalActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: ProductReadMetafieldByProductGlobalActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/actions/product/readProductBySwatchId" {
    export type ActionRun = (params: ProductReadProductBySwatchIdGlobalActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: ProductReadProductBySwatchIdGlobalActionContext) => Promise<any>;
}
// @ts-ignore 
declare module "../../../api/actions/product/updateProductStatus" {
    export type ActionRun = (params: ProductUpdateProductStatusGlobalActionContext) => Promise<any>;
    export type ActionOnSuccess = (params: ProductUpdateProductStatusGlobalActionContext) => Promise<any>;
}
