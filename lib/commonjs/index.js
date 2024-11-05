"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  requestBillingAgreement: true,
  requestOneTimePayment: true,
  getDeviceDataFromDataCollector: true,
  tokenizeCardData: true,
  requestVenmoNonce: true
};
exports.getDeviceDataFromDataCollector = getDeviceDataFromDataCollector;
exports.requestBillingAgreement = requestBillingAgreement;
exports.requestOneTimePayment = requestOneTimePayment;
exports.requestVenmoNonce = requestVenmoNonce;
exports.tokenizeCardData = tokenizeCardData;
var _reactNative = require("react-native");
var _types = require("./types");
Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _types[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});
const LINKING_ERROR = `The package 'expo-braintree' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const ExpoBraintree = _reactNative.NativeModules.ExpoBraintree ? _reactNative.NativeModules.ExpoBraintree : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
async function requestBillingAgreement(options) {
  try {
    const result = ExpoBraintree.requestBillingAgreement(options);
    return result;
  } catch (ex) {
    return ex;
  }
}
async function requestOneTimePayment(options) {
  try {
    const result = await ExpoBraintree.requestOneTimePayment(options);
    return result;
  } catch (ex) {
    return ex;
  }
}
async function getDeviceDataFromDataCollector(clientToken) {
  try {
    const result = await ExpoBraintree.getDeviceDataFromDataCollector(clientToken);
    return result;
  } catch (ex) {
    return ex;
  }
}
async function tokenizeCardData(options) {
  try {
    const result = await ExpoBraintree.tokenizeCardData(options);
    return result;
  } catch (ex) {
    return ex;
  }
}
async function requestVenmoNonce(options) {
  try {
    const result = await ExpoBraintree.requestVenmoNonce(options);
    return result;
  } catch (ex) {
    return ex;
  }
}
//# sourceMappingURL=index.js.map