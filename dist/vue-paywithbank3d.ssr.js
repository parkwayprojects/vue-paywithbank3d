'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}var payWithBank3D = {
  install: function install(Vue, _ref) {
    var merchantKey = _ref.merchantKey;
    Vue.mixin({
      mounted: function mounted() {
        var payWithBank3DJS = 'https://parkwaycdnstorage.blob.core.windows.net/bank3d/bank3d.min.js';
        var script = document.createElement('script');
        script.src = payWithBank3DJS;

        if (!document.querySelector("[src=\"".concat(payWithBank3DJS, "\"]"))) {
          document.body.appendChild(script);
        }
      }
    });
    Vue.prototype.$paywithbank3d = {
      open: function open(options) {
        var payment = window.Bank3D.createPayment(_objectSpread2({
          merchantKey: merchantKey
        }, options));
        payment.open();
      }
    };
  }
};exports.default=payWithBank3D;