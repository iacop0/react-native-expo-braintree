package com.paypalreborn

enum class EXCEPTION_TYPES(val value: String) {
  KOTLIN_EXCEPTION("ReactNativePaypalReborn:`KotlinException"),
  USER_CANCEL_EXCEPTION("ReactNativePaypalReborn:`UserCancelException"),
  TOKENIZE_EXCEPTION("ReactNativePaypalReborn:`TokenizeException"),
  PAYPAL_DISABLED_IN_CONFIGURATION("ReactNativePaypalReborn:`Paypal disabled in configuration")
}

enum class ERROR_TYPES(val value: String) {
  API_CLIENT_INITIALIZATION_ERROR("API_CLIENT_INITIALIZATION_ERROR"),
  TOKENIZE_VAULT_PAYMENT_ERROR("TOKENIZE_VAULT_PAYMENT_ERROR"),
  USER_CANCEL_TRANSACTION_ERROR("USER_CANCEL_TRANSACTION_ERROR"),
  PAYPAL_DISABLED_IN_CONFIGURATION_ERROR("PAYPAL_DISABLED_IN_CONFIGURATION_ERROR"),
  DATA_COLLECTOR_ERROR("DATA_COLLECTOR_ERROR"),
  CARD_TOKENIZATION_ERROR("CARD_TOKENIZATION_ERROR")
}
