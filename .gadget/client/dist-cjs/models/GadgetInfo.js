"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var GadgetInfo_exports = {};
__export(GadgetInfo_exports, {
  DefaultGadgetInfoSelection: () => DefaultGadgetInfoSelection,
  GadgetInfoManager: () => GadgetInfoManager
});
module.exports = __toCommonJS(GadgetInfo_exports);
var import_builder = require("../builder.js");
const DefaultGadgetInfoSelection = {
  __typename: true,
  id: true,
  createdAt: true,
  syncStatus: true,
  updatedAt: true
};
const modelApiIdentifier = "gadgetInfo";
const pluralModelApiIdentifier = "gadgetInfos";
;
;
;
;
;
;
;
;
;
const GadgetInfoManager = (0, import_builder.buildModelManager)(
  modelApiIdentifier,
  pluralModelApiIdentifier,
  DefaultGadgetInfoSelection,
  [
    {
      type: "findOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: modelApiIdentifier,
      modelApiIdentifier,
      findByVariableName: "id",
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: "findMany",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: "findFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: "maybeFindFirst",
      operationName: pluralModelApiIdentifier,
      modelApiIdentifier,
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: "findOne",
      operationName: pluralModelApiIdentifier,
      functionName: "findById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier,
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: "maybeFindOne",
      operationName: pluralModelApiIdentifier,
      functionName: "maybeFindById",
      findByField: "id",
      findByVariableName: "id",
      modelApiIdentifier,
      defaultSelection: DefaultGadgetInfoSelection,
      namespace: null
    },
    {
      type: "action",
      operationName: "createGadgetInfo",
      operationReturnType: "CreateGadgetInfo",
      functionName: "create",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: { gadgetInfo: { required: false, type: "CreateGadgetInfoInput" } },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultGadgetInfoSelection
    },
    {
      type: "action",
      operationName: "bulkCreateGadgetInfos",
      functionName: "bulkCreate",
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: "create",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: "[BulkCreateGadgetInfosInput!]" }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultGadgetInfoSelection
    },
    {
      type: "action",
      operationName: "updateGadgetInfo",
      operationReturnType: "UpdateGadgetInfo",
      functionName: "update",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        id: { required: true, type: "GadgetID" },
        gadgetInfo: { required: false, type: "UpdateGadgetInfoInput" }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultGadgetInfoSelection
    },
    {
      type: "action",
      operationName: "bulkUpdateGadgetInfos",
      functionName: "bulkUpdate",
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: "update",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: "[BulkUpdateGadgetInfosInput!]" }
      },
      paramOnlyVariables: [],
      defaultSelection: DefaultGadgetInfoSelection
    },
    {
      type: "action",
      operationName: "deleteGadgetInfo",
      operationReturnType: "DeleteGadgetInfo",
      functionName: "delete",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: true,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: true,
      variables: { id: { required: true, type: "GadgetID" } },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: [],
      hasReturnType: false,
      acceptsModelInput: false,
      hasCreateOrUpdateEffect: false,
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "bulkDeleteGadgetInfos",
      functionName: "bulkDelete",
      isBulk: true,
      isDeleter: true,
      hasReturnType: false,
      acceptsModelInput: false,
      operatesWithRecordIdentity: true,
      singleActionFunctionName: "delete",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: { ids: { required: true, type: "[GadgetID!]" } },
      paramOnlyVariables: [],
      defaultSelection: null
    },
    {
      type: "action",
      operationName: "upsertGadgetInfo",
      operationReturnType: "UpsertGadgetInfo",
      functionName: "upsert",
      namespace: null,
      modelApiIdentifier,
      operatesWithRecordIdentity: false,
      modelSelectionField: modelApiIdentifier,
      isBulk: false,
      isDeleter: false,
      variables: {
        on: { required: false, type: "[String!]" },
        gadgetInfo: { required: false, type: "UpsertGadgetInfoInput" }
      },
      hasAmbiguousIdentifier: false,
      paramOnlyVariables: ["on"],
      hasReturnType: {
        "... on CreateGadgetInfoResult": { hasReturnType: false },
        "... on UpdateGadgetInfoResult": { hasReturnType: false }
      },
      acceptsModelInput: true,
      hasCreateOrUpdateEffect: true,
      defaultSelection: DefaultGadgetInfoSelection
    },
    {
      type: "action",
      operationName: "bulkUpsertGadgetInfos",
      functionName: "bulkUpsert",
      isBulk: true,
      isDeleter: false,
      hasReturnType: false,
      acceptsModelInput: true,
      operatesWithRecordIdentity: false,
      singleActionFunctionName: "upsert",
      modelApiIdentifier,
      modelSelectionField: pluralModelApiIdentifier,
      namespace: null,
      variables: {
        inputs: { required: true, type: "[BulkUpsertGadgetInfosInput!]" }
      },
      paramOnlyVariables: ["on"],
      defaultSelection: DefaultGadgetInfoSelection
    }
  ]
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DefaultGadgetInfoSelection,
  GadgetInfoManager
});
//# sourceMappingURL=GadgetInfo.js.map
