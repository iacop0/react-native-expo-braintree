"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VENMO_EXCEPTION_TYPES = exports.VENMO_ERROR_TYPES = exports.PAYPAL_EXCEPTION_TYPES = exports.PAYPAL_ERROR_TYPES = exports.EXCEPTION_TYPES = exports.ERROR_TYPES = exports.BoolValue = exports.BTVenmoPaymntMethodUsage = exports.BTPayPalRequestUserAction = exports.BTPayPalCheckoutIntent = void 0;
let EXCEPTION_TYPES = exports.EXCEPTION_TYPES = /*#__PURE__*/function (EXCEPTION_TYPES) {
  EXCEPTION_TYPES["SWIFT_EXCEPTION"] = "ExpoBraintree:`SwiftException";
  EXCEPTION_TYPES["USER_CANCEL_EXCEPTION"] = "ExpoBraintree:`UserCancelException";
  EXCEPTION_TYPES["TOKENIZE_EXCEPTION"] = "ExpoBraintree:`TokenizeException";
  return EXCEPTION_TYPES;
}({});
let PAYPAL_EXCEPTION_TYPES = exports.PAYPAL_EXCEPTION_TYPES = /*#__PURE__*/function (PAYPAL_EXCEPTION_TYPES) {
  PAYPAL_EXCEPTION_TYPES["PAYPAL_DISABLED_IN_CONFIGURATION"] = "ExpoBraintree:`Paypal disabled in configuration";
  return PAYPAL_EXCEPTION_TYPES;
}({});
let VENMO_EXCEPTION_TYPES = exports.VENMO_EXCEPTION_TYPES = /*#__PURE__*/function (VENMO_EXCEPTION_TYPES) {
  VENMO_EXCEPTION_TYPES["VENMO_DISABLED_IN_CONFIGURATION"] = "ExpoBraintree:`VENMO disabled in configuration";
  return VENMO_EXCEPTION_TYPES;
}({});
let ERROR_TYPES = exports.ERROR_TYPES = /*#__PURE__*/function (ERROR_TYPES) {
  ERROR_TYPES["API_CLIENT_INITIALIZATION_ERROR"] = "API_CLIENT_INITIALIZATION_ERROR";
  ERROR_TYPES["TOKENIZE_VAULT_PAYMENT_ERROR"] = "TOKENIZE_VAULT_PAYMENT_ERROR";
  ERROR_TYPES["USER_CANCEL_TRANSACTION_ERROR"] = "USER_CANCEL_TRANSACTION_ERROR";
  ERROR_TYPES["DATA_COLLECTOR_ERROR"] = "DATA_COLLECTOR_ERROR";
  ERROR_TYPES["CARD_TOKENIZATION_ERROR"] = "CARD_TOKENIZATION_ERROR";
  return ERROR_TYPES;
}({});
let PAYPAL_ERROR_TYPES = exports.PAYPAL_ERROR_TYPES = /*#__PURE__*/function (PAYPAL_ERROR_TYPES) {
  PAYPAL_ERROR_TYPES["PAYPAL_DISABLED_IN_CONFIGURATION_ERROR"] = "PAYPAL_DISABLED_IN_CONFIGURATION_ERROR";
  return PAYPAL_ERROR_TYPES;
}({});
let VENMO_ERROR_TYPES = exports.VENMO_ERROR_TYPES = /*#__PURE__*/function (VENMO_ERROR_TYPES) {
  VENMO_ERROR_TYPES["VENMO_DISABLED_IN_CONFIGURATION"] = "VENMO_DISABLED_IN_CONFIGURATION_ERROR";
  return VENMO_ERROR_TYPES;
}({});
let BTPayPalCheckoutIntent = exports.BTPayPalCheckoutIntent = /*#__PURE__*/function (BTPayPalCheckoutIntent) {
  BTPayPalCheckoutIntent["authorize"] = "authorize";
  BTPayPalCheckoutIntent["order"] = "order";
  BTPayPalCheckoutIntent["sale"] = "sale";
  return BTPayPalCheckoutIntent;
}({});
let BTPayPalRequestUserAction = exports.BTPayPalRequestUserAction = /*#__PURE__*/function (BTPayPalRequestUserAction) {
  BTPayPalRequestUserAction["none"] = "none";
  BTPayPalRequestUserAction["payNow"] = "payNow";
  return BTPayPalRequestUserAction;
}({});
let BoolValue = exports.BoolValue = /*#__PURE__*/function (BoolValue) {
  BoolValue["true"] = "true";
  BoolValue["false"] = "false";
  return BoolValue;
}({});
let BTVenmoPaymntMethodUsage = exports.BTVenmoPaymntMethodUsage = /*#__PURE__*/function (BTVenmoPaymntMethodUsage) {
  BTVenmoPaymntMethodUsage["multiUse"] = "multiUse";
  BTVenmoPaymntMethodUsage["singleUse"] = "singleUse";
  return BTVenmoPaymntMethodUsage;
}({});
//# sourceMappingURL=types.js.map