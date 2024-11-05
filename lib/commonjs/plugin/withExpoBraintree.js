"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withExpoBraintreePlugin = exports.default = void 0;
var _configPlugins = require("@expo/config-plugins");
var _withExpoBraintree = require("./withExpoBraintree.android");
var _withExpoBraintree2 = require("./withExpoBraintree.ios");
const pkg = require('react-native-expo-braintree/package.json');
const withExpoBraintreePlugin = (config, props) => {
  // Android mods
  config = (0, _withExpoBraintree.withExpoBraintreeAndroid)(config);
  // IOS mods
  config = (0, _withExpoBraintree2.withSwiftBraintreeWrapperFile)(config);
  config = (0, _withExpoBraintree2.withExpoBraintreeAppDelegate)(config, props);
  config = (0, _withExpoBraintree2.withExpoBraintreePlist)(config);
  config = (0, _withExpoBraintree2.withVenmoScheme)(config);
  return config;
};
exports.withExpoBraintreePlugin = withExpoBraintreePlugin;
var _default = exports.default = (0, _configPlugins.createRunOncePlugin)(withExpoBraintreePlugin, pkg.name, pkg.version);
//# sourceMappingURL=withExpoBraintree.js.map