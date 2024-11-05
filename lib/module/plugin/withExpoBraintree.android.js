import { withAndroidManifest, AndroidConfig } from '@expo/config-plugins';
const {
  getMainActivityOrThrow
} = AndroidConfig.Manifest;
export const withExpoBraintreeAndroid = expoConfig => {
  return withAndroidManifest(expoConfig, config => {
    config.modResults = addPaypalIntentFilter(config.modResults);
    return config;
  });
};
// Add new intent filter
// <activity>
//   ...
//   <intent-filter>
//     <action android:name="android.intent.action.VIEW" />
//     <category android:name="android.intent.category.DEFAULT" />
//     <category android:name="android.intent.category.BROWSABLE" />
//     <data android:scheme="${applicationId}.braintree" />
//   </intent-filter>
// </activity>;
const intentActionView = 'android.intent.action.VIEW';
const intentCategoryDefault = 'android.intent.category.DEFAULT';
const intentCategoryBrowsable = 'android.intent.category.BROWSABLE';
const intentDataBraintree = '${applicationId}.braintree';
export const addPaypalIntentFilter = modResults => {
  const mainActivity = getMainActivityOrThrow(modResults);
  // We want always to add the data to the first intent filter
  const intentFilters = mainActivity['intent-filter'];
  if (!intentFilters?.length) {
    console.warn('withExpoBraintreeAndroid.addPaypalIntentFilter: No .Intent Filters');
    return modResults;
  }
  const {
    isIntentActionExist,
    isIntentCategoryBrowsableExist,
    isIntentCategoryDefaultExist,
    isIntentDataBraintreeExist
  } = checkAndroidManifestData(intentFilters);
  if (isIntentActionExist && isIntentCategoryBrowsableExist && isIntentCategoryDefaultExist && isIntentDataBraintreeExist) {
    console.warn('withExpoBraintreeAndroid: AndroidManifest not require any changes');
    return modResults;
  }
  intentFilters.push({
    action: [{
      $: {
        'android:name': intentActionView
      }
    }],
    category: [{
      $: {
        'android:name': intentCategoryDefault
      }
    }, {
      $: {
        'android:name': intentCategoryBrowsable
      }
    }],
    data: [{
      $: {
        'android:scheme': '${applicationId}.braintree'
      }
    }]
  });
  return modResults;
};
const checkAndroidManifestData = intentFilters => ({
  isIntentActionExist: isElementInAndroidManifestExist(intentFilters, intentActionView, 'action'),
  isIntentCategoryDefaultExist: isElementInAndroidManifestExist(intentFilters, intentCategoryDefault, 'category'),
  isIntentCategoryBrowsableExist: isElementInAndroidManifestExist(intentFilters, intentCategoryBrowsable, 'category'),
  isIntentDataBraintreeExist: isElementInAndroidManifestExist(intentFilters, intentDataBraintree, 'data')
});
const isElementInAndroidManifestExist = (intentFilters, value, type) => !!intentFilters?.some(intentFilter => intentFilter[type]?.find(item => {
  switch (type) {
    case 'action':
    case 'category':
      return item.$['android:name'] === value;
    case 'data':
      const typedItem = item;
      return typedItem.$['android:scheme'] === value;
  }
}));
//# sourceMappingURL=withExpoBraintree.android.js.map