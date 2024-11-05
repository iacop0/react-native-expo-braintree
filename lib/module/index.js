import { NativeModules, Platform } from 'react-native';
const LINKING_ERROR = `The package 'expo-braintree' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const ExpoBraintree = NativeModules.ExpoBraintree ? NativeModules.ExpoBraintree : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
export async function requestBillingAgreement(options) {
  try {
    const result = ExpoBraintree.requestBillingAgreement(options);
    return result;
  } catch (ex) {
    return ex;
  }
}
export async function requestOneTimePayment(options) {
  try {
    const result = await ExpoBraintree.requestOneTimePayment(options);
    return result;
  } catch (ex) {
    return ex;
  }
}
export async function getDeviceDataFromDataCollector(clientToken) {
  try {
    const result = await ExpoBraintree.getDeviceDataFromDataCollector(clientToken);
    return result;
  } catch (ex) {
    return ex;
  }
}
export async function tokenizeCardData(options) {
  try {
    const result = await ExpoBraintree.tokenizeCardData(options);
    return result;
  } catch (ex) {
    return ex;
  }
}
export async function requestVenmoNonce(options) {
  try {
    const result = await ExpoBraintree.requestVenmoNonce(options);
    return result;
  } catch (ex) {
    return ex;
  }
}
export * from './types';
//# sourceMappingURL=index.js.map