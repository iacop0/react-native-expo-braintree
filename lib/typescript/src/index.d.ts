import type { BTCardTokenizationNonceResult, BTPayPalAccountNonceResult, BTPayPalError, BTPayPalGetDeviceDataResult, BTVenmoError, BTVenmoNonceResult, RequestBillingAgreementOptions, RequestOneTimePaymentOptions, RequestVenmoNonceOptions, TokenizeCardOptions } from './types';
export declare function requestBillingAgreement(options: RequestBillingAgreementOptions): Promise<BTPayPalAccountNonceResult | BTPayPalError>;
export declare function requestOneTimePayment(options: RequestOneTimePaymentOptions): Promise<BTPayPalAccountNonceResult | BTPayPalError>;
export declare function getDeviceDataFromDataCollector(clientToken: string, hasUserLocationConsent?: boolean, riskCorrelationId?: string): Promise<BTPayPalGetDeviceDataResult | BTPayPalError>;
export declare function tokenizeCardData(options: TokenizeCardOptions): Promise<BTCardTokenizationNonceResult | BTPayPalError>;
export declare function requestVenmoNonce(options: RequestVenmoNonceOptions): Promise<BTVenmoNonceResult | BTVenmoError>;
export * from './types';
//# sourceMappingURL=index.d.ts.map