import { AndroidConfig, type ConfigPlugin } from '@expo/config-plugins';
interface IntentFilterProps {
    host: string;
    pathPrefix: string;
}
export declare const withExpoBraintreeAndroid: ConfigPlugin<IntentFilterProps>;
export declare const addPaypalIntentFilter: (modResults: AndroidConfig.Manifest.AndroidManifest) => AndroidConfig.Manifest.AndroidManifest;
export declare const addPaypalAppLinks: (modResults: AndroidConfig.Manifest.AndroidManifest, host: string, pathPrefix: string) => AndroidConfig.Manifest.AndroidManifest;
export {};
//# sourceMappingURL=withExpoBraintree.android.d.ts.map