import { createRunOncePlugin } from '@expo/config-plugins';
import { withExpoBraintreeAndroid } from './withExpoBraintree.android';
import { withExpoBraintreeAppDelegate, withExpoBraintreePlist, withSwiftBraintreeWrapperFile, withVenmoScheme } from './withExpoBraintree.ios';
const pkg = require('react-native-expo-braintree/package.json');
export const withExpoBraintreePlugin = (config, props) => {
  // Android mods
  config = withExpoBraintreeAndroid(config);
  // IOS mods
  config = withSwiftBraintreeWrapperFile(config);
  config = withExpoBraintreeAppDelegate(config, props);
  config = withExpoBraintreePlist(config);
  config = withVenmoScheme(config);
  return config;
};
export default createRunOncePlugin(withExpoBraintreePlugin, pkg.name, pkg.version);
//# sourceMappingURL=withExpoBraintree.js.map