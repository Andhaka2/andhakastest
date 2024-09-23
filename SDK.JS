var TonConnectSDK;
(() => {
  var e = {
    4043: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.tonConnectSdkVersion = undefined;
      t.tonConnectSdkVersion = "3.0.5";
    },
    614: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.WrongAddressError = undefined;
      var r = n(3748);
      Object.defineProperty(t, "WrongAddressError", {
        enumerable: true,
        get: function () {
          return r.WrongAddressError;
        }
      });
    },
    3748: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.WrongAddressError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "Passed address is in incorrect format.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.WrongAddressError = o;
    },
    9499: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.ParseHexError = undefined;
      var r = n(3020);
      Object.defineProperty(t, "ParseHexError", {
        enumerable: true,
        get: function () {
          return r.ParseHexError;
        }
      });
    },
    3020: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.ParseHexError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "Passed hex is in incorrect format.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.ParseHexError = o;
    },
    1068: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.DappMetadataError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "Passed DappMetadata is in incorrect format.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.DappMetadataError = o;
    },
    2764: function (e, t, n) {
      "use strict";

      var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (!(o && !("get" in o ? !t.__esModule : o.writable || o.configurable))) {
          o = {
            enumerable: true,
            get: function () {
              return t[n];
            }
          };
        }
        Object.defineProperty(e, r, o);
      } : function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        e[r] = t[n];
      });
      var o = this && this.__exportStar || function (e, t) {
        for (var n in e) if (!("default" === n || Object.prototype.hasOwnProperty.call(t, n))) {
          r(t, e, n);
        }
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.UnknownError = t.TonConnectError = undefined;
      o(n(2205), t);
      o(n(8474), t);
      o(n(3536), t);
      o(n(3847), t);
      o(n(614), t);
      o(n(9499), t);
      var i = n(6473);
      Object.defineProperty(t, "TonConnectError", {
        enumerable: true,
        get: function () {
          return i.TonConnectError;
        }
      });
      var s = n(3861);
      Object.defineProperty(t, "UnknownError", {
        enumerable: true,
        get: function () {
          return s.UnknownError;
        }
      });
    },
    8674: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.UserRejectsError = undefined;
      var r = n(657);
      Object.defineProperty(t, "UserRejectsError", {
        enumerable: true,
        get: function () {
          return r.UserRejectsError;
        }
      });
    },
    8351: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.ManifestContentErrorError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "Passed `tonconnect-manifest.json` contains errors. Check format of your manifest. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.ManifestContentErrorError = o;
    },
    3008: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.ManifestNotFoundError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "Manifest not found. Make sure you added `tonconnect-manifest.json` to the root of your app or passed correct manifestUrl. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.ManifestNotFoundError = o;
    },
    657: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.UserRejectsError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "User rejects the action in the wallet.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.UserRejectsError = o;
    },
    3283: function (e, t, n) {
      "use strict";

      var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (!(o && !("get" in o ? !t.__esModule : o.writable || o.configurable))) {
          o = {
            enumerable: true,
            get: function () {
              return t[n];
            }
          };
        }
        Object.defineProperty(e, r, o);
      } : function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        e[r] = t[n];
      });
      var o = this && this.__exportStar || function (e, t) {
        for (var n in e) if (!("default" === n || Object.prototype.hasOwnProperty.call(t, n))) {
          r(t, e, n);
        }
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      o(n(8674), t);
    },
    2205: function (e, t, n) {
      "use strict";

      var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (!(o && !("get" in o ? !t.__esModule : o.writable || o.configurable))) {
          o = {
            enumerable: true,
            get: function () {
              return t[n];
            }
          };
        }
        Object.defineProperty(e, r, o);
      } : function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        e[r] = t[n];
      });
      var o = this && this.__exportStar || function (e, t) {
        for (var n in e) if (!("default" === n || Object.prototype.hasOwnProperty.call(t, n))) {
          r(t, e, n);
        }
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      o(n(3283), t);
      o(n(354), t);
    },
    3031: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.BadRequestError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "Request to the wallet contains errors.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.BadRequestError = o;
    },
    354: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.UnknownAppError = t.BadRequestError = undefined;
      var r = n(3031);
      Object.defineProperty(t, "BadRequestError", {
        enumerable: true,
        get: function () {
          return r.BadRequestError;
        }
      });
      var o = n(801);
      Object.defineProperty(t, "UnknownAppError", {
        enumerable: true,
        get: function () {
          return o.UnknownAppError;
        }
      });
    },
    801: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.UnknownAppError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "App tries to send rpc request to the injected wallet while not connected.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.UnknownAppError = o;
    },
    3536: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.LocalstorageNotFoundError = undefined;
      var r = n(7701);
      Object.defineProperty(t, "LocalstorageNotFoundError", {
        enumerable: true,
        get: function () {
          return r.LocalstorageNotFoundError;
        }
      });
    },
    7701: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.LocalstorageNotFoundError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "Storage was not specified in the `DappMetadata` and default `localStorage` was not detected in the environment.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.LocalstorageNotFoundError = o;
    },
    6473: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.TonConnectError = undefined;
      class n extends Error {
        constructor(e, t) {
          super(e, t);
          this.message = `${n.prefix} ${this.constructor.name}${this.info ? ": " + this.info : ""}${e ? "\n" + e : ""}`;
          Object.setPrototypeOf(this, n.prototype);
        }
        get info() {
          return "";
        }
      }
      t.TonConnectError = n;
      n.prefix = "[TON_CONNECT_SDK_ERROR]";
    },
    3861: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.UnknownError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.UnknownError = o;
    },
    8474: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.WalletNotInjectedError = t.WalletNotConnectedError = t.WalletAlreadyConnectedError = undefined;
      var r = n(4512);
      Object.defineProperty(t, "WalletAlreadyConnectedError", {
        enumerable: true,
        get: function () {
          return r.WalletAlreadyConnectedError;
        }
      });
      var o = n(5268);
      Object.defineProperty(t, "WalletNotConnectedError", {
        enumerable: true,
        get: function () {
          return o.WalletNotConnectedError;
        }
      });
      var i = n(6067);
      Object.defineProperty(t, "WalletNotInjectedError", {
        enumerable: true,
        get: function () {
          return i.WalletNotInjectedError;
        }
      });
    },
    4512: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.WalletAlreadyConnectedError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "Wallet connection called but wallet already connected. To avoid the error, disconnect the wallet before doing a new connection.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.WalletAlreadyConnectedError = o;
    },
    5268: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.WalletNotConnectedError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "Send transaction or other protocol methods called while wallet is not connected.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.WalletNotConnectedError = o;
    },
    6067: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.WalletNotInjectedError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "There is an attempt to connect to the injected wallet while it is not exists in the webpage.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.WalletNotInjectedError = o;
    },
    4610: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.WalletNotSupportFeatureError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "Wallet doesn't support requested feature method.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.WalletNotSupportFeatureError = o;
    },
    8814: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.FetchWalletsError = undefined;
      const r = n(6473);
      class o extends r.TonConnectError {
        get info() {
          return "An error occurred while fetching the wallets list.";
        }
        constructor(...e) {
          super(...e);
          Object.setPrototypeOf(this, o.prototype);
        }
      }
      t.FetchWalletsError = o;
    },
    3847: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.FetchWalletsError = undefined;
      var r = n(8814);
      Object.defineProperty(t, "FetchWalletsError", {
        enumerable: true,
        get: function () {
          return r.FetchWalletsError;
        }
      });
    },
    1920: function (e, t, n) {
      "use strict";

      var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (!(o && !("get" in o ? !t.__esModule : o.writable || o.configurable))) {
          o = {
            enumerable: true,
            get: function () {
              return t[n];
            }
          };
        }
        Object.defineProperty(e, r, o);
      } : function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        e[r] = t[n];
      });
      var o = this && this.__exportStar || function (e, t) {
        for (var n in e) if (!("default" === n || Object.prototype.hasOwnProperty.call(t, n))) {
          r(t, e, n);
        }
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.encodeTelegramUrlParameters = t.isTelegramUrl = t.toUserFriendlyAddress = t.SEND_TRANSACTION_ERROR_CODES = t.CONNECT_EVENT_ERROR_CODES = t.CONNECT_ITEM_ERROR_CODES = t.CHAIN = t.BrowserEventDispatcher = t.createVersionInfo = t.createResponseVersionEvent = t.createRequestVersionEvent = t.createTransactionSignedEvent = t.createTransactionSigningFailedEvent = t.createTransactionSentForSignatureEvent = t.createDisconnectionEvent = t.createConnectionRestoringCompletedEvent = t.createConnectionRestoringErrorEvent = t.createConnectionRestoringStartedEvent = t.createConnectionCompletedEvent = t.createConnectionErrorEvent = t.createConnectionStartedEvent = t.WalletsListManager = t.default = undefined;
      o(n(8884), t);
      o(n(5622), t);
      o(n(2764), t);
      var i = n(8884);
      Object.defineProperty(t, "default", {
        enumerable: true,
        get: function () {
          return i.TonConnect;
        }
      });
      var s = n(7419);
      Object.defineProperty(t, "WalletsListManager", {
        enumerable: true,
        get: function () {
          return s.WalletsListManager;
        }
      });
      var a = n(16);
      Object.defineProperty(t, "createConnectionStartedEvent", {
        enumerable: true,
        get: function () {
          return a.createConnectionStartedEvent;
        }
      });
      Object.defineProperty(t, "createConnectionErrorEvent", {
        enumerable: true,
        get: function () {
          return a.createConnectionErrorEvent;
        }
      });
      Object.defineProperty(t, "createConnectionCompletedEvent", {
        enumerable: true,
        get: function () {
          return a.createConnectionCompletedEvent;
        }
      });
      Object.defineProperty(t, "createConnectionRestoringStartedEvent", {
        enumerable: true,
        get: function () {
          return a.createConnectionRestoringStartedEvent;
        }
      });
      Object.defineProperty(t, "createConnectionRestoringErrorEvent", {
        enumerable: true,
        get: function () {
          return a.createConnectionRestoringErrorEvent;
        }
      });
      Object.defineProperty(t, "createConnectionRestoringCompletedEvent", {
        enumerable: true,
        get: function () {
          return a.createConnectionRestoringCompletedEvent;
        }
      });
      Object.defineProperty(t, "createDisconnectionEvent", {
        enumerable: true,
        get: function () {
          return a.createDisconnectionEvent;
        }
      });
      Object.defineProperty(t, "createTransactionSentForSignatureEvent", {
        enumerable: true,
        get: function () {
          return a.createTransactionSentForSignatureEvent;
        }
      });
      Object.defineProperty(t, "createTransactionSigningFailedEvent", {
        enumerable: true,
        get: function () {
          return a.createTransactionSigningFailedEvent;
        }
      });
      Object.defineProperty(t, "createTransactionSignedEvent", {
        enumerable: true,
        get: function () {
          return a.createTransactionSignedEvent;
        }
      });
      Object.defineProperty(t, "createRequestVersionEvent", {
        enumerable: true,
        get: function () {
          return a.createRequestVersionEvent;
        }
      });
      Object.defineProperty(t, "createResponseVersionEvent", {
        enumerable: true,
        get: function () {
          return a.createResponseVersionEvent;
        }
      });
      Object.defineProperty(t, "createVersionInfo", {
        enumerable: true,
        get: function () {
          return a.createVersionInfo;
        }
      });
      var c = n(9467);
      Object.defineProperty(t, "BrowserEventDispatcher", {
        enumerable: true,
        get: function () {
          return c.BrowserEventDispatcher;
        }
      });
      var l = n(9461);
      Object.defineProperty(t, "CHAIN", {
        enumerable: true,
        get: function () {
          return l.CHAIN;
        }
      });
      Object.defineProperty(t, "CONNECT_ITEM_ERROR_CODES", {
        enumerable: true,
        get: function () {
          return l.CONNECT_ITEM_ERROR_CODES;
        }
      });
      Object.defineProperty(t, "CONNECT_EVENT_ERROR_CODES", {
        enumerable: true,
        get: function () {
          return l.CONNECT_EVENT_ERROR_CODES;
        }
      });
      Object.defineProperty(t, "SEND_TRANSACTION_ERROR_CODES", {
        enumerable: true,
        get: function () {
          return l.SEND_TRANSACTION_ERROR_CODES;
        }
      });
      var u = n(6754);
      Object.defineProperty(t, "toUserFriendlyAddress", {
        enumerable: true,
        get: function () {
          return u.toUserFriendlyAddress;
        }
      });
      var d = n(5370);
      Object.defineProperty(t, "isTelegramUrl", {
        enumerable: true,
        get: function () {
          return d.isTelegramUrl;
        }
      });
      Object.defineProperty(t, "encodeTelegramUrlParameters", {
        enumerable: true,
        get: function () {
          return d.encodeTelegramUrlParameters;
        }
      });
    },
    5622: function (e, t, n) {
      "use strict";

      var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (!(o && !("get" in o ? !t.__esModule : o.writable || o.configurable))) {
          o = {
            enumerable: true,
            get: function () {
              return t[n];
            }
          };
        }
        Object.defineProperty(e, r, o);
      } : function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        e[r] = t[n];
      });
      var o = this && this.__exportStar || function (e, t) {
        for (var n in e) if (!("default" === n || Object.prototype.hasOwnProperty.call(t, n))) {
          r(t, e, n);
        }
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      o(n(75), t);
      o(n(2913), t);
    },
    4354: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
    },
    2913: function (e, t, n) {
      "use strict";

      var r = this && this.__createBinding || (Object.create ? function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        var o = Object.getOwnPropertyDescriptor(t, n);
        if (!(o && !("get" in o ? !t.__esModule : o.writable || o.configurable))) {
          o = {
            enumerable: true,
            get: function () {
              return t[n];
            }
          };
        }
        Object.defineProperty(e, r, o);
      } : function (e, t, n, r) {
        if (undefined === r) {
          r = n;
        }
        e[r] = t[n];
      });
      var o = this && this.__exportStar || function (e, t) {
        for (var n in e) if (!("default" === n || Object.prototype.hasOwnProperty.call(t, n))) {
          r(t, e, n);
        }
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      o(n(4354), t);
      o(n(3989), t);
    },
    3989: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
    },
    75: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.isWalletInfoInjected = t.isWalletInfoRemote = t.isWalletInfoInjectable = t.isWalletInfoCurrentlyEmbedded = t.isWalletInfoCurrentlyInjected = undefined;
      var r = n(9546);
      Object.defineProperty(t, "isWalletInfoCurrentlyInjected", {
        enumerable: true,
        get: function () {
          return r.isWalletInfoCurrentlyInjected;
        }
      });
      Object.defineProperty(t, "isWalletInfoCurrentlyEmbedded", {
        enumerable: true,
        get: function () {
          return r.isWalletInfoCurrentlyEmbedded;
        }
      });
      Object.defineProperty(t, "isWalletInfoInjectable", {
        enumerable: true,
        get: function () {
          return r.isWalletInfoInjectable;
        }
      });
      Object.defineProperty(t, "isWalletInfoRemote", {
        enumerable: true,
        get: function () {
          return r.isWalletInfoRemote;
        }
      });
      Object.defineProperty(t, "isWalletInfoInjected", {
        enumerable: true,
        get: function () {
          return r.isWalletInfoInjected;
        }
      });
    },
    1431: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.isWalletConnectionSourceJS = undefined;
      t.isWalletConnectionSourceJS = function (e) {
        return "jsBridgeKey" in e;
      };
    },
    9546: (e, t) => {
      "use strict";

      function n(e) {
        return "jsBridgeKey" in e && e.injected;
      }
      function r(e) {
        return "jsBridgeKey" in e;
      }
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.isWalletInfoInjected = t.isWalletInfoRemote = t.isWalletInfoInjectable = t.isWalletInfoCurrentlyEmbedded = t.isWalletInfoCurrentlyInjected = undefined;
      t.isWalletInfoCurrentlyInjected = n;
      t.isWalletInfoCurrentlyEmbedded = function (e) {
        return "jsBridgeKey" in e && e.injected && e.embedded;
      };
      t.isWalletInfoInjectable = r;
      t.isWalletInfoRemote = function (e) {
        return "bridgeUrl" in e;
      };
      t.isWalletInfoInjected = function (e) {
        return "jsBridgeKey" in e;
      };
    },
    4527: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.connectErrorsParser = undefined;
      const r = n(2764);
      const o = n(8351);
      const i = n(3008);
      const s = n(3861);
      const a = n(9461);
      const c = {
        [a.CONNECT_EVENT_ERROR_CODES.UNKNOWN_ERROR]: s.UnknownError,
        [a.CONNECT_EVENT_ERROR_CODES.USER_REJECTS_ERROR]: r.UserRejectsError,
        [a.CONNECT_EVENT_ERROR_CODES.BAD_REQUEST_ERROR]: r.BadRequestError,
        [a.CONNECT_EVENT_ERROR_CODES.UNKNOWN_APP_ERROR]: r.UnknownAppError,
        [a.CONNECT_EVENT_ERROR_CODES.MANIFEST_NOT_FOUND_ERROR]: i.ManifestNotFoundError,
        [a.CONNECT_EVENT_ERROR_CODES.MANIFEST_CONTENT_ERROR]: o.ManifestContentErrorError
      };
      t.connectErrorsParser = new class {
        parseError(e) {
          let t = s.UnknownError;
          if (e.code in c) {
            t = c[e.code] || s.UnknownError;
          }
          return new t(e.message);
        }
      }();
    },
    2437: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.RpcParser = undefined;
      t.RpcParser = class {
        isError(e) {
          return "error" in e;
        }
      };
    },
    7791: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.sendTransactionParser = undefined;
      const r = n(9461);
      const o = n(2764);
      const i = n(3861);
      const s = n(2437);
      const a = {
        [r.SEND_TRANSACTION_ERROR_CODES.UNKNOWN_ERROR]: i.UnknownError,
        [r.SEND_TRANSACTION_ERROR_CODES.USER_REJECTS_ERROR]: o.UserRejectsError,
        [r.SEND_TRANSACTION_ERROR_CODES.BAD_REQUEST_ERROR]: o.BadRequestError,
        [r.SEND_TRANSACTION_ERROR_CODES.UNKNOWN_APP_ERROR]: o.UnknownAppError
      };
      class c extends s.RpcParser {
        convertToRpcRequest(e) {
          return {
            method: "sendTransaction",
            params: [JSON.stringify(e)]
          };
        }
        parseAndThrowError(e) {
          let t = i.UnknownError;
          if (e.error.code in a) {
            t = a[e.error.code] || i.UnknownError;
          }
          throw new t(e.error.message);
        }
        convertFromRpcResponse(e) {
          return {
            boc: e.result
          };
        }
      }
      t.sendTransactionParser = new c();
    },
    9478: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.BridgeGateway = undefined;
      const o = n(9461);
      const i = n(6473);
      const s = n(9493);
      const a = n(5370);
      n(618);
      n(3783);
      const c = n(6011);
      const l = n(1583);
      const u = n(1484);
      const d = n(6764);
      const h = n(9252);
      t.BridgeGateway = class {
        constructor(e, t, n, o, c) {
          this.bridgeUrl = t;
          this.sessionId = n;
          this.listener = o;
          this.errorsListener = c;
          this.ssePath = "events";
          this.postPath = "message";
          this.heartbeatMessage = "heartbeat";
          this.defaultTtl = 300;
          this.defaultReconnectDelay = 2e3;
          this.defaultResendDelay = 5e3;
          0;
          this.eventSource = u.createResource((e, t) => r(this, undefined, undefined, function* () {
            const n = {
              bridgeUrl: this.bridgeUrl,
              ssePath: this.ssePath,
              sessionId: this.sessionId,
              bridgeGatewayStorage: this.bridgeGatewayStorage,
              errorHandler: this.errorsHandler.bind(this),
              messageHandler: this.messagesHandler.bind(this),
              signal: e,
              openingDeadlineMS: t
            };
            return yield function (e) {
              return r(this, undefined, undefined, function* () {
                0;
                return yield d.timeout((t, n, o) => r(this, undefined, undefined, function* () {
                  var s;
                  0;
                  const c = h.createAbortController(o.signal).signal;
                  if (c.aborted) {
                    return void n(new i.TonConnectError("Bridge connection aborted"));
                  }
                  0;
                  const l = new URL(a.addPathToUrl(e.bridgeUrl, e.ssePath));
                  l.searchParams.append("client_id", e.sessionId);
                  const u = yield e.bridgeGatewayStorage.getLastEventId();
                  if (u) {
                    l.searchParams.append("last_event_id", u);
                  }
                  if (c.aborted) {
                    return void n(new i.TonConnectError("Bridge connection aborted"));
                  }
                  const d = new EventSource(l.toString());
                  d.onerror = o => r(this, undefined, undefined, function* () {
                    if (c.aborted) {
                      d.close();
                      return void n(new i.TonConnectError("Bridge connection aborted"));
                    }
                    try {
                      const n = yield e.errorHandler(d, o);
                      if (n !== d) {
                        d.close();
                      }
                      if (n && n !== d) {
                        t(n);
                      }
                    } catch (e) {
                      d.close();
                      n(e);
                    }
                  });
                  d.onopen = () => {
                    if (c.aborted) {
                      d.close();
                      return void n(new i.TonConnectError("Bridge connection aborted"));
                    }
                    t(d);
                  };
                  d.onmessage = t => {
                    if (c.aborted) {
                      d.close();
                      return void n(new i.TonConnectError("Bridge connection aborted"));
                    }
                    e.messageHandler(t);
                  };
                  if (!(null === (s = e.signal) || undefined === s)) {
                    s.addEventListener("abort", () => {
                      d.close();
                      n(new i.TonConnectError("Bridge connection aborted"));
                    });
                  }
                }), {
                  timeout: e.openingDeadlineMS,
                  signal: e.signal
                });
              });
            }(n);
          }), e => r(this, undefined, undefined, function* () {
            e.close();
          }));
          this.bridgeGatewayStorage = new s.HttpBridgeGatewayStorage(e, t);
        }
        get isReady() {
          const e = this.eventSource.current();
          return (null == e ? undefined : e.readyState) === EventSource.OPEN;
        }
        get isClosed() {
          const e = this.eventSource.current();
          return (null == e ? undefined : e.readyState) !== EventSource.OPEN;
        }
        get isConnecting() {
          const e = this.eventSource.current();
          return (null == e ? undefined : e.readyState) === EventSource.CONNECTING;
        }
        registerSession(e) {
          return r(this, undefined, undefined, function* () {
            yield this.eventSource.create(null == e ? undefined : e.signal, null == e ? undefined : e.openingDeadlineMS);
          });
        }
        send(e, t, n, s) {
          var l;
          return r(this, undefined, undefined, function* () {
            const u = {};
            if ("number" == typeof s) {
              u.ttl = s;
            } else {
              u.ttl = null == s ? undefined : s.ttl;
              u.signal = null == s ? undefined : s.signal;
              u.attempts = null == s ? undefined : s.attempts;
            }
            0;
            const d = new URL(a.addPathToUrl(this.bridgeUrl, this.postPath));
            d.searchParams.append("client_id", this.sessionId);
            d.searchParams.append("to", t);
            d.searchParams.append("ttl", ((null == u ? undefined : u.ttl) || this.defaultTtl).toString());
            d.searchParams.append("topic", n);
            const h = o.Base64.encode(e);
            0;
            yield c.callForSuccess(e => r(this, undefined, undefined, function* () {
              const t = yield this.post(d, h, e.signal);
              if (!t.ok) {
                throw new i.TonConnectError(`Bridge send failed, status ${t.status}`);
              }
            }), {
              attempts: null !== (l = null == u ? undefined : u.attempts) && undefined !== l ? l : Number.MAX_SAFE_INTEGER,
              delayMs: this.defaultResendDelay,
              signal: null == u ? undefined : u.signal
            });
          });
        }
        pause() {
          this.eventSource.dispose().catch(e => (0, l.logError)(`Bridge pause failed, ${e}`));
        }
        unPause() {
          return r(this, undefined, undefined, function* () {
            yield this.eventSource.recreate(0);
          });
        }
        close() {
          return r(this, undefined, undefined, function* () {
            yield this.eventSource.dispose().catch(e => (0, l.logError)(`Bridge close failed, ${e}`));
          });
        }
        setListener(e) {
          this.listener = e;
        }
        setErrorsListener(e) {
          this.errorsListener = e;
        }
        post(e, t, n) {
          return r(this, undefined, undefined, function* () {
            const r = yield fetch(e, {
              method: "post",
              body: t,
              signal: n
            });
            if (!r.ok) {
              throw new i.TonConnectError(`Bridge send failed, status ${r.status}`);
            }
            return r;
          });
        }
        errorsHandler(e, t) {
          return r(this, undefined, undefined, function* () {
            if (this.isConnecting) {
              e.close();
              throw new i.TonConnectError("Bridge error, failed to connect");
            }
            if (!this.isReady) {
              if (this.isClosed) {
                e.close();
                0;
                l.logDebug(`Bridge reconnecting, ${this.defaultReconnectDelay}ms delay`);
                return yield this.eventSource.recreate(this.defaultReconnectDelay);
              }
              throw new i.TonConnectError("Bridge error, unknown state");
            }
            try {
              this.errorsListener(t);
            } catch (e) {}
          });
        }
        messagesHandler(e) {
          return r(this, undefined, undefined, function* () {
            if (e.data === this.heartbeatMessage) {
              return;
            }
            yield this.bridgeGatewayStorage.storeLastEventId(e.lastEventId);
            if (this.isClosed) {
              return;
            }
            let t;
            try {
              t = JSON.parse(e.data);
            } catch (e) {
              throw new i.TonConnectError(`Bridge message parse failed, message ${e.data}`);
            }
            this.listener(t);
          });
        }
      };
    },
    8977: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.BridgeProvider = undefined;
      const o = n(9461);
      const i = n(6473);
      const s = n(9478);
      const a = n(9465);
      const c = n(6180);
      const l = n(3160);
      const u = n(1583);
      const d = n(5370);
      const h = n(6011);
      const f = n(9252);
      class p {
        constructor(e, t) {
          this.storage = e;
          this.walletConnectionSource = t;
          this.type = "http";
          this.standardUniversalLink = "tc://";
          this.pendingRequests = new Map();
          this.session = null;
          this.gateway = null;
          this.pendingGateways = [];
          this.listeners = [];
          this.defaultOpeningDeadlineMS = 12e3;
          this.defaultRetryTimeoutMS = 2e3;
          this.connectionStorage = new c.BridgeConnectionStorage(e);
        }
        static fromStorage(e) {
          return r(this, undefined, undefined, function* () {
            const t = new c.BridgeConnectionStorage(e);
            const n = yield t.getHttpConnection();
            0;
            return a.isPendingConnectionHttp(n) ? new p(e, n.connectionSource) : new p(e, {
              bridgeUrl: n.session.bridgeUrl
            });
          });
        }
        connect(e, t) {
          var n;
          0;
          const i = f.createAbortController(null == t ? undefined : t.signal);
          if (!(null === (n = this.abortController) || undefined === n)) {
            n.abort();
          }
          this.abortController = i;
          this.closeGateways();
          const s = new o.SessionCrypto();
          this.session = {
            sessionCrypto: s,
            bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
          };
          this.connectionStorage.storeConnection({
            type: "http",
            connectionSource: this.walletConnectionSource,
            sessionCrypto: s
          }).then(() => r(this, undefined, undefined, function* () {
            if (!i.signal.aborted) {
              0;
              yield h.callForSuccess(e => {
                var n;
                return this.openGateways(s, {
                  openingDeadlineMS: null !== (n = null == t ? undefined : t.openingDeadlineMS) && undefined !== n ? n : this.defaultOpeningDeadlineMS,
                  signal: null == e ? undefined : e.signal
                });
              }, {
                attempts: Number.MAX_SAFE_INTEGER,
                delayMs: this.defaultRetryTimeoutMS,
                signal: i.signal
              });
            }
          }));
          const a = "universalLink" in this.walletConnectionSource && this.walletConnectionSource.universalLink ? this.walletConnectionSource.universalLink : this.standardUniversalLink;
          return this.generateUniversalLink(a, e);
        }
        restoreConnection(e) {
          var t;
          var n;
          return r(this, undefined, undefined, function* () {
            0;
            const r = f.createAbortController(null == e ? undefined : e.signal);
            if (!(null === (t = this.abortController) || undefined === t)) {
              t.abort();
            }
            this.abortController = r;
            if (r.signal.aborted) {
              return;
            }
            this.closeGateways();
            const o = yield this.connectionStorage.getHttpConnection();
            if (!o) {
              return;
            }
            if (r.signal.aborted) {
              return;
            }
            const c = null !== (n = null == e ? undefined : e.openingDeadlineMS) && undefined !== n ? n : this.defaultOpeningDeadlineMS;
            0;
            if (a.isPendingConnectionHttp(o)) {
              this.session = {
                sessionCrypto: o.sessionCrypto,
                bridgeUrl: "bridgeUrl" in this.walletConnectionSource ? this.walletConnectionSource.bridgeUrl : ""
              };
              return yield this.openGateways(o.sessionCrypto, {
                openingDeadlineMS: c,
                signal: null == r ? undefined : r.signal
              });
            }
            if (Array.isArray(this.walletConnectionSource)) {
              throw new i.TonConnectError("Internal error. Connection source is array while WalletConnectionSourceHTTP was expected.");
            }
            this.session = o.session;
            if (this.gateway) {
              0;
              u.logDebug("Gateway is already opened, closing previous gateway");
              yield this.gateway.close();
            }
            this.gateway = new s.BridgeGateway(this.storage, this.walletConnectionSource.bridgeUrl, o.session.sessionCrypto.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this));
            if (!r.signal.aborted) {
              this.listeners.forEach(e => e(o.connectEvent));
              try {
                0;
                yield h.callForSuccess(e => this.gateway.registerSession({
                  openingDeadlineMS: c,
                  signal: e.signal
                }), {
                  attempts: Number.MAX_SAFE_INTEGER,
                  delayMs: this.defaultRetryTimeoutMS,
                  signal: r.signal
                });
              } catch (e) {
                return void (yield this.disconnect({
                  signal: r.signal
                }));
              }
            }
          });
        }
        sendRequest(e, t) {
          const n = {};
          if ("function" == typeof t) {
            n.onRequestSent = t;
          } else {
            n.onRequestSent = null == t ? undefined : t.onRequestSent;
            n.signal = null == t ? undefined : t.signal;
            n.attempts = null == t ? undefined : t.attempts;
          }
          return new Promise((t, s) => r(this, undefined, undefined, function* () {
            var r;
            if (!this.gateway || !this.session || !("walletPublicKey" in this.session)) {
              throw new i.TonConnectError("Trying to send bridge request without session");
            }
            const a = (yield this.connectionStorage.getNextRpcRequestId()).toString();
            yield this.connectionStorage.increaseNextRpcRequestId();
            0;
            u.logDebug("Send http-bridge request:", Object.assign(Object.assign({}, e), {
              id: a
            }));
            0;
            const c = this.session.sessionCrypto.encrypt(JSON.stringify(Object.assign(Object.assign({}, e), {
              id: a
            })), o.hexToByteArray(this.session.walletPublicKey));
            try {
              yield this.gateway.send(c, this.session.walletPublicKey, e.method, {
                attempts: null == n ? undefined : n.attempts,
                signal: null == n ? undefined : n.signal
              });
              if (!(null === (r = null == n ? undefined : n.onRequestSent) || undefined === r)) {
                r.call(n);
              }
              this.pendingRequests.set(a.toString(), t);
            } catch (e) {
              s(e);
            }
          }));
        }
        closeConnection() {
          this.closeGateways();
          this.listeners = [];
          this.session = null;
          this.gateway = null;
        }
        disconnect(e) {
          return r(this, undefined, undefined, function* () {
            return new Promise(t => r(this, undefined, undefined, function* () {
              let n = false;
              let r = null;
              const o = () => {
                if (!n) {
                  n = true;
                  this.removeBridgeAndSession().then(t);
                }
              };
              try {
                this.closeGateways();
                0;
                const t = f.createAbortController(null == e ? undefined : e.signal);
                r = setTimeout(() => {
                  t.abort();
                }, this.defaultOpeningDeadlineMS);
                yield this.sendRequest({
                  method: "disconnect",
                  params: []
                }, {
                  onRequestSent: o,
                  signal: t.signal,
                  attempts: 1
                });
              } catch (e) {
                0;
                u.logDebug("Disconnect error:", e);
                if (!n) {
                  this.removeBridgeAndSession().then(t);
                }
              } finally {
                if (r) {
                  clearTimeout(r);
                }
                o();
              }
            }));
          });
        }
        listen(e) {
          this.listeners.push(e);
          return () => this.listeners = this.listeners.filter(t => t !== e);
        }
        pause() {
          var e;
          if (!(null === (e = this.gateway) || undefined === e)) {
            e.pause();
          }
          this.pendingGateways.forEach(e => e.pause());
        }
        unPause() {
          return r(this, undefined, undefined, function* () {
            const e = this.pendingGateways.map(e => e.unPause());
            if (this.gateway) {
              e.push(this.gateway.unPause());
            }
            yield Promise.all(e);
          });
        }
        pendingGatewaysListener(e, t, n) {
          return r(this, undefined, undefined, function* () {
            if (this.pendingGateways.includes(e)) {
              this.closeGateways({
                except: e
              });
              if (this.gateway) {
                0;
                u.logDebug("Gateway is already opened, closing previous gateway");
                yield this.gateway.close();
              }
              this.session.bridgeUrl = t;
              this.gateway = e;
              this.gateway.setErrorsListener(this.gatewayErrorsListener.bind(this));
              this.gateway.setListener(this.gatewayListener.bind(this));
              return this.gatewayListener(n);
            }
            yield e.close();
          });
        }
        gatewayListener(e) {
          return r(this, undefined, undefined, function* () {
            0;
            const t = JSON.parse(this.session.sessionCrypto.decrypt(o.Base64.decode(e.message).toUint8Array(), o.hexToByteArray(e.from)));
            0;
            u.logDebug("Wallet message received:", t);
            if (!("event" in t)) {
              const e = t.id.toString();
              const n = this.pendingRequests.get(e);
              return n ? (n(t), void this.pendingRequests.delete(e)) : void (0, u.logDebug)(`Response id ${e} doesn't match any request's id`);
            }
            if (undefined !== t.id) {
              const e = yield this.connectionStorage.getLastWalletEventId();
              if (undefined !== e && t.id <= e) {
                0;
                return void u.logError(`Received event id (=${t.id}) must be greater than stored last wallet event id (=${e}) `);
              }
              if ("connect" !== t.event) {
                yield this.connectionStorage.storeLastWalletEventId(t.id);
              }
            }
            const n = this.listeners;
            if ("connect" === t.event) {
              yield this.updateSession(t, e.from);
            }
            if ("disconnect" === t.event) {
              0;
              u.logDebug("Removing bridge and session: received disconnect event");
              yield this.removeBridgeAndSession();
            }
            n.forEach(e => e(t));
          });
        }
        gatewayErrorsListener(e) {
          return r(this, undefined, undefined, function* () {
            throw new i.TonConnectError(`Bridge error ${JSON.stringify(e)}`);
          });
        }
        updateSession(e, t) {
          return r(this, undefined, undefined, function* () {
            this.session = Object.assign(Object.assign({}, this.session), {
              walletPublicKey: t
            });
            const n = e.payload.items.find(e => "ton_addr" === e.name);
            const r = Object.assign(Object.assign({}, e), {
              payload: Object.assign(Object.assign({}, e.payload), {
                items: [n]
              })
            });
            yield this.connectionStorage.storeConnection({
              type: "http",
              session: this.session,
              lastWalletEventId: e.id,
              connectEvent: r,
              nextRpcRequestId: 0
            });
          });
        }
        removeBridgeAndSession() {
          return r(this, undefined, undefined, function* () {
            this.closeConnection();
            yield this.connectionStorage.removeConnection();
          });
        }
        generateUniversalLink(e, t) {
          0;
          return d.isTelegramUrl(e) ? this.generateTGUniversalLink(e, t) : this.generateRegularUniversalLink(e, t);
        }
        generateRegularUniversalLink(e, t) {
          const n = new URL(e);
          n.searchParams.append("v", l.PROTOCOL_VERSION.toString());
          n.searchParams.append("id", this.session.sessionCrypto.sessionId);
          n.searchParams.append("r", JSON.stringify(t));
          return n.toString();
        }
        generateTGUniversalLink(e, t) {
          const n = this.generateRegularUniversalLink("about:blank", t).split("?")[1];
          0;
          const r = "tonconnect-" + d.encodeTelegramUrlParameters(n);
          const o = this.convertToDirectLink(e);
          const i = new URL(o);
          i.searchParams.append("startapp", r);
          return i.toString();
        }
        convertToDirectLink(e) {
          const t = new URL(e);
          if (t.searchParams.has("attach")) {
            t.searchParams.delete("attach");
            t.pathname += "/start";
          }
          return t.toString();
        }
        openGateways(e, t) {
          return r(this, undefined, undefined, function* () {
            return Array.isArray(this.walletConnectionSource) ? (this.pendingGateways.map(e => e.close().catch()), this.pendingGateways = this.walletConnectionSource.map(t => {
              const n = new s.BridgeGateway(this.storage, t.bridgeUrl, e.sessionId, () => {}, () => {});
              n.setListener(e => this.pendingGatewaysListener(n, t.bridgeUrl, e));
              return n;
            }), void (yield Promise.allSettled(this.pendingGateways.map(e => (0, h.callForSuccess)(n => {
              var r;
              return this.pendingGateways.some(t => t === e) ? e.registerSession({
                openingDeadlineMS: null !== (r = null == t ? undefined : t.openingDeadlineMS) && undefined !== r ? r : this.defaultOpeningDeadlineMS,
                signal: n.signal
              }) : e.close();
            }, {
              attempts: Number.MAX_SAFE_INTEGER,
              delayMs: this.defaultRetryTimeoutMS,
              signal: null == t ? undefined : t.signal
            }))))) : (this.gateway && ((0, u.logDebug)("Gateway is already opened, closing previous gateway"), yield this.gateway.close()), this.gateway = new s.BridgeGateway(this.storage, this.walletConnectionSource.bridgeUrl, e.sessionId, this.gatewayListener.bind(this), this.gatewayErrorsListener.bind(this)), yield this.gateway.registerSession({
              openingDeadlineMS: null == t ? undefined : t.openingDeadlineMS,
              signal: null == t ? undefined : t.signal
            }));
          });
        }
        closeGateways(e) {
          var t;
          if (!(null === (t = this.gateway) || undefined === t)) {
            t.close();
          }
          this.pendingGateways.filter(t => t !== (null == e ? undefined : e.except)).forEach(e => e.close());
          this.pendingGateways = [];
        }
      }
      t.BridgeProvider = p;
    },
    9465: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.isPendingConnectionHttp = undefined;
      t.isPendingConnectionHttp = function (e) {
        return !("connectEvent" in e);
      };
    },
    1328: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.InjectedProvider = undefined;
      const o = n(6067);
      const i = n(5283);
      const s = n(6180);
      const a = n(9590);
      const c = n(3160);
      const l = n(1583);
      class u {
        constructor(e, t) {
          this.injectedWalletKey = t;
          this.type = "injected";
          this.unsubscribeCallback = null;
          this.listenSubscriptions = false;
          this.listeners = [];
          const n = u.window;
          if (!u.isWindowContainsWallet(n, t)) {
            throw new o.WalletNotInjectedError();
          }
          this.connectionStorage = new s.BridgeConnectionStorage(e);
          this.injectedWallet = n[t].tonconnect;
        }
        static fromStorage(e) {
          return r(this, undefined, undefined, function* () {
            const t = new s.BridgeConnectionStorage(e);
            const n = yield t.getInjectedConnection();
            return new u(e, n.jsBridgeKey);
          });
        }
        static isWalletInjected(e) {
          return u.isWindowContainsWallet(this.window, e);
        }
        static isInsideWalletBrowser(e) {
          return !!u.isWindowContainsWallet(this.window, e) && this.window[e].tonconnect.isWalletBrowser;
        }
        static getCurrentlyInjectedWallets() {
          return this.window ? (0, a.tryGetWindowKeys)().filter(([e, t]) => (0, i.isJSBridgeWithMetadata)(t)).map(([e, t]) => ({
            name: t.tonconnect.walletInfo.name,
            appName: t.tonconnect.walletInfo.app_name,
            aboutUrl: t.tonconnect.walletInfo.about_url,
            imageUrl: t.tonconnect.walletInfo.image,
            tondns: t.tonconnect.walletInfo.tondns,
            jsBridgeKey: e,
            injected: true,
            embedded: t.tonconnect.isWalletBrowser,
            platforms: t.tonconnect.walletInfo.platforms
          })) : [];
        }
        static isWindowContainsWallet(e, t) {
          return !!e && t in e && "object" == typeof e[t] && "tonconnect" in e[t];
        }
        connect(e) {
          this._connect(c.PROTOCOL_VERSION, e);
        }
        restoreConnection() {
          return r(this, undefined, undefined, function* () {
            try {
              0;
              l.logDebug("Injected Provider restoring connection...");
              const e = yield this.injectedWallet.restoreConnection();
              0;
              l.logDebug("Injected Provider restoring connection response", e);
              if ("connect" === e.event) {
                this.makeSubscriptions();
                this.listeners.forEach(t => t(e));
              } else {
                yield this.connectionStorage.removeConnection();
              }
            } catch (e) {
              yield this.connectionStorage.removeConnection();
              console.error(e);
            }
          });
        }
        closeConnection() {
          if (this.listenSubscriptions) {
            this.injectedWallet.disconnect();
          }
          this.closeAllListeners();
        }
        disconnect() {
          return r(this, undefined, undefined, function* () {
            return new Promise(e => {
              const t = () => {
                this.closeAllListeners();
                this.connectionStorage.removeConnection().then(e);
              };
              try {
                this.injectedWallet.disconnect();
                t();
              } catch (e) {
                0;
                l.logDebug(e);
                this.sendRequest({
                  method: "disconnect",
                  params: []
                }, t);
              }
            });
          });
        }
        closeAllListeners() {
          var e;
          this.listenSubscriptions = false;
          this.listeners = [];
          if (!(null === (e = this.unsubscribeCallback) || undefined === e)) {
            e.call(this);
          }
        }
        listen(e) {
          this.listeners.push(e);
          return () => this.listeners = this.listeners.filter(t => t !== e);
        }
        sendRequest(e, t) {
          var n;
          return r(this, undefined, undefined, function* () {
            const r = {};
            if ("function" == typeof t) {
              r.onRequestSent = t;
            } else {
              r.onRequestSent = null == t ? undefined : t.onRequestSent;
              r.signal = null == t ? undefined : t.signal;
            }
            const o = (yield this.connectionStorage.getNextRpcRequestId()).toString();
            yield this.connectionStorage.increaseNextRpcRequestId();
            0;
            l.logDebug("Send injected-bridge request:", Object.assign(Object.assign({}, e), {
              id: o
            }));
            const i = this.injectedWallet.send(Object.assign(Object.assign({}, e), {
              id: o
            }));
            i.then(e => (0, l.logDebug)("Wallet message received:", e));
            if (!(null === (n = null == r ? undefined : r.onRequestSent) || undefined === n)) {
              n.call(r);
            }
            return i;
          });
        }
        _connect(e, t) {
          return r(this, undefined, undefined, function* () {
            try {
              0;
              l.logDebug(`Injected Provider connect request: protocolVersion: ${e}, message:`, t);
              const n = yield this.injectedWallet.connect(e, t);
              0;
              l.logDebug("Injected Provider connect response:", n);
              if ("connect" === n.event) {
                yield this.updateSession();
                this.makeSubscriptions();
              }
              this.listeners.forEach(e => e(n));
            } catch (e) {
              0;
              l.logDebug("Injected Provider connect error:", e);
              const t = {
                event: "connect_error",
                payload: {
                  code: 0,
                  message: null == e ? undefined : e.toString()
                }
              };
              this.listeners.forEach(e => e(t));
            }
          });
        }
        makeSubscriptions() {
          this.listenSubscriptions = true;
          this.unsubscribeCallback = this.injectedWallet.listen(e => {
            0;
            l.logDebug("Wallet message received:", e);
            if (this.listenSubscriptions) {
              this.listeners.forEach(t => t(e));
            }
            if ("disconnect" === e.event) {
              this.disconnect();
            }
          });
        }
        updateSession() {
          return this.connectionStorage.storeConnection({
            type: "injected",
            jsBridgeKey: this.injectedWalletKey,
            nextRpcRequestId: 0
          });
        }
      }
      t.InjectedProvider = u;
      0;
      u.window = a.getWindow();
    },
    5283: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.isJSBridgeWithMetadata = undefined;
      const r = n(6415);
      t.isJSBridgeWithMetadata = function (e) {
        try {
          0;
          return !(!r.hasProperty(e, "tonconnect") || !(0, r.hasProperty)(e.tonconnect, "walletInfo")) && (0, r.hasProperties)(e.tonconnect.walletInfo, ["name", "app_name", "image", "about_url", "platforms"]);
        } catch (e) {
          return false;
        }
      };
    },
    3041: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.FALLBACK_WALLETS_LIST = undefined;
      t.FALLBACK_WALLETS_LIST = [{
        app_name: "telegram-wallet",
        name: "Wallet",
        image: "https://wallet.tg/images/logo-288.png",
        about_url: "https://wallet.tg/",
        universal_url: "https://t.me/wallet?attach=wallet",
        bridge: [{
          type: "sse",
          url: "https://bridge.ton.space/bridge"
        }],
        platforms: ["ios", "android", "macos", "windows", "linux"]
      }, {
        app_name: "tonkeeper",
        name: "Tonkeeper",
        image: "https://tonkeeper.com/assets/tonconnect-icon.png",
        tondns: "tonkeeper.ton",
        about_url: "https://tonkeeper.com",
        universal_url: "https://app.tonkeeper.com/ton-connect",
        deepLink: "tonkeeper-tc://",
        bridge: [{
          type: "sse",
          url: "https://bridge.tonapi.io/bridge"
        }, {
          type: "js",
          key: "tonkeeper"
        }],
        platforms: ["ios", "android", "chrome", "firefox", "macos"]
      }, {
        app_name: "mytonwallet",
        name: "MyTonWallet",
        image: "https://static.mytonwallet.io/icon-256.png",
        about_url: "https://mytonwallet.io",
        universal_url: "https://connect.mytonwallet.org",
        bridge: [{
          type: "js",
          key: "mytonwallet"
        }, {
          type: "sse",
          url: "https://tonconnectbridge.mytonwallet.org/bridge/"
        }],
        platforms: ["chrome", "windows", "macos", "linux", "ios", "android", "firefox"]
      }, {
        app_name: "openmask",
        name: "OpenMask",
        image: "https://raw.githubusercontent.com/OpenProduct/openmask-extension/main/public/openmask-logo-288.png",
        about_url: "https://www.openmask.app/",
        bridge: [{
          type: "js",
          key: "openmask"
        }],
        platforms: ["chrome"]
      }, {
        app_name: "tonhub",
        name: "Tonhub",
        image: "https://tonhub.com/tonconnect_logo.png",
        about_url: "https://tonhub.com",
        universal_url: "https://tonhub.com/ton-connect",
        bridge: [{
          type: "js",
          key: "tonhub"
        }, {
          type: "sse",
          url: "https://connect.tonhubapi.com/tonconnect"
        }],
        platforms: ["ios", "android"]
      }, {
        app_name: "dewallet",
        name: "DeWallet",
        image: "https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png",
        about_url: "https://delabwallet.com",
        universal_url: "https://t.me/dewallet?attach=wallet",
        bridge: [{
          type: "sse",
          url: "https://sse-bridge.delab.team/bridge"
        }],
        platforms: ["ios", "android"]
      }, {
        app_name: "xtonwallet",
        name: "XTONWallet",
        image: "https://xtonwallet.com/assets/img/icon-256-back.png",
        about_url: "https://xtonwallet.com",
        bridge: [{
          type: "js",
          key: "xtonwallet"
        }],
        platforms: ["chrome", "firefox"]
      }, {
        app_name: "tonwallet",
        name: "TON Wallet",
        image: "https://wallet.ton.org/assets/ui/qr-logo.png",
        about_url: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
        bridge: [{
          type: "js",
          key: "tonwallet"
        }],
        platforms: ["chrome"]
      }, {
        app_name: "bitgetTonWallet",
        name: "Bitget Wallet",
        image: "https://raw.githubusercontent.com/bitkeepwallet/download/main/logo/png/bitget_wallet_logo_0_gas_fee.png",
        about_url: "https://web3.bitget.com",
        deepLink: "bitkeep://",
        bridge: [{
          type: "js",
          key: "bitgetTonWallet"
        }, {
          type: "sse",
          url: "https://bridge.tonapi.io/bridge"
        }],
        platforms: ["ios", "android", "chrome"],
        universal_url: "https://bkcode.vip/ton-connect"
      }, {
        app_name: "safepalwallet",
        name: "SafePal",
        image: "https://s.pvcliping.com/web/public_image/SafePal_x288.png",
        tondns: "",
        about_url: "https://www.safepal.com",
        universal_url: "https://link.safepal.io/ton-connect",
        deepLink: "safepal-tc://",
        bridge: [{
          type: "sse",
          url: "https://ton-bridge.safepal.com/tonbridge/v1/bridge"
        }, {
          type: "js",
          key: "safepalwallet"
        }],
        platforms: ["ios", "android", "chrome", "firefox"]
      }, {
        app_name: "okxTonWallet",
        name: "OKX Wallet",
        image: "https://static.okx.com/cdn/assets/imgs/247/58E63FEA47A2B7D7.png",
        about_url: "https://www.okx.com/web3",
        universal_url: "https://www.okx.com/download?appendQuery=true&deeplink=okx://web3/wallet/tonconnect",
        bridge: [{
          type: "js",
          key: "okxTonWallet"
        }, {
          type: "sse",
          url: "https://www.okx.com/tonbridge/discover/rpc/bridge"
        }],
        platforms: ["chrome", "safari", "firefox", "ios", "android"]
      }, {
        app_name: "okxTonWalletTr",
        name: "OKX TR Wallet",
        image: "https://static.okx.com/cdn/assets/imgs/247/587A8296F0BB640F.png",
        about_url: "https://tr.okx.com/web3",
        universal_url: "https://tr.okx.com/download?appendQuery=true&deeplink=okxtr://web3/wallet/tonconnect",
        bridge: [{
          type: "js",
          key: "okxTonWallet"
        }, {
          type: "sse",
          url: "https://www.okx.com/tonbridge/discover/rpc/bridge"
        }],
        platforms: ["chrome", "safari", "firefox", "ios", "android"]
      }];
    },
    3160: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.PROTOCOL_VERSION = undefined;
      t.PROTOCOL_VERSION = 2;
    },
    6180: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.BridgeConnectionStorage = undefined;
      const o = n(9461);
      const i = n(2764);
      const s = n(9465);
      t.BridgeConnectionStorage = class {
        constructor(e) {
          this.storage = e;
          this.storeKey = "ton-connect-storage_bridge-connection";
        }
        storeConnection(e) {
          return r(this, undefined, undefined, function* () {
            if ("injected" === e.type) {
              return this.storage.setItem(this.storeKey, JSON.stringify(e));
            }
            0;
            if (!s.isPendingConnectionHttp(e)) {
              const t = {
                sessionKeyPair: e.session.sessionCrypto.stringifyKeypair(),
                walletPublicKey: e.session.walletPublicKey,
                bridgeUrl: e.session.bridgeUrl
              };
              const n = {
                type: "http",
                connectEvent: e.connectEvent,
                session: t,
                lastWalletEventId: e.lastWalletEventId,
                nextRpcRequestId: e.nextRpcRequestId
              };
              return this.storage.setItem(this.storeKey, JSON.stringify(n));
            }
            const t = {
              type: "http",
              connectionSource: e.connectionSource,
              sessionCrypto: e.sessionCrypto.stringifyKeypair()
            };
            return this.storage.setItem(this.storeKey, JSON.stringify(t));
          });
        }
        removeConnection() {
          return r(this, undefined, undefined, function* () {
            return this.storage.removeItem(this.storeKey);
          });
        }
        getConnection() {
          return r(this, undefined, undefined, function* () {
            const e = yield this.storage.getItem(this.storeKey);
            if (!e) {
              return null;
            }
            const t = JSON.parse(e);
            if ("injected" === t.type) {
              return t;
            }
            if ("connectEvent" in t) {
              const e = new o.SessionCrypto(t.session.sessionKeyPair);
              return {
                type: "http",
                connectEvent: t.connectEvent,
                lastWalletEventId: t.lastWalletEventId,
                nextRpcRequestId: t.nextRpcRequestId,
                session: {
                  sessionCrypto: e,
                  bridgeUrl: t.session.bridgeUrl,
                  walletPublicKey: t.session.walletPublicKey
                }
              };
            }
            return {
              type: "http",
              sessionCrypto: new o.SessionCrypto(t.sessionCrypto),
              connectionSource: t.connectionSource
            };
          });
        }
        getHttpConnection() {
          return r(this, undefined, undefined, function* () {
            const e = yield this.getConnection();
            if (!e) {
              throw new i.TonConnectError("Trying to read HTTP connection source while nothing is stored");
            }
            if ("injected" === e.type) {
              throw new i.TonConnectError("Trying to read HTTP connection source while injected connection is stored");
            }
            return e;
          });
        }
        getHttpPendingConnection() {
          return r(this, undefined, undefined, function* () {
            const e = yield this.getConnection();
            if (!e) {
              throw new i.TonConnectError("Trying to read HTTP connection source while nothing is stored");
            }
            if ("injected" === e.type) {
              throw new i.TonConnectError("Trying to read HTTP connection source while injected connection is stored");
            }
            0;
            if (!s.isPendingConnectionHttp(e)) {
              throw new i.TonConnectError("Trying to read HTTP-pending connection while http connection is stored");
            }
            return e;
          });
        }
        getInjectedConnection() {
          return r(this, undefined, undefined, function* () {
            const e = yield this.getConnection();
            if (!e) {
              throw new i.TonConnectError("Trying to read Injected bridge connection source while nothing is stored");
            }
            if ("http" === (null == e ? undefined : e.type)) {
              throw new i.TonConnectError("Trying to read Injected bridge connection source while HTTP connection is stored");
            }
            return e;
          });
        }
        storedConnectionType() {
          return r(this, undefined, undefined, function* () {
            const e = yield this.storage.getItem(this.storeKey);
            return e ? JSON.parse(e).type : null;
          });
        }
        storeLastWalletEventId(e) {
          return r(this, undefined, undefined, function* () {
            const t = yield this.getConnection();
            if (t && "http" === t.type && !(0, s.isPendingConnectionHttp)(t)) {
              t.lastWalletEventId = e;
              return this.storeConnection(t);
            }
          });
        }
        getLastWalletEventId() {
          return r(this, undefined, undefined, function* () {
            const e = yield this.getConnection();
            if (e && "lastWalletEventId" in e) {
              return e.lastWalletEventId;
            }
          });
        }
        increaseNextRpcRequestId() {
          return r(this, undefined, undefined, function* () {
            const e = yield this.getConnection();
            if (e && "nextRpcRequestId" in e) {
              const t = e.nextRpcRequestId || 0;
              e.nextRpcRequestId = t + 1;
              return this.storeConnection(e);
            }
          });
        }
        getNextRpcRequestId() {
          return r(this, undefined, undefined, function* () {
            const e = yield this.getConnection();
            return e && "nextRpcRequestId" in e && e.nextRpcRequestId || 0;
          });
        }
      };
    },
    2245: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.DefaultStorage = undefined;
      const o = n(9590);
      t.DefaultStorage = class {
        constructor() {
          0;
          this.localStorage = o.tryGetLocalStorage();
        }
        getItem(e) {
          return r(this, undefined, undefined, function* () {
            return this.localStorage.getItem(e);
          });
        }
        removeItem(e) {
          return r(this, undefined, undefined, function* () {
            this.localStorage.removeItem(e);
          });
        }
        setItem(e, t) {
          return r(this, undefined, undefined, function* () {
            this.localStorage.setItem(e, t);
          });
        }
      };
    },
    9493: function (e, t) {
      "use strict";

      var n = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.HttpBridgeGatewayStorage = undefined;
      t.HttpBridgeGatewayStorage = class {
        constructor(e, t) {
          this.storage = e;
          this.storeKey = "ton-connect-storage_http-bridge-gateway::" + t;
        }
        storeLastEventId(e) {
          return n(this, undefined, undefined, function* () {
            return this.storage.setItem(this.storeKey, e);
          });
        }
        removeLastEventId() {
          return n(this, undefined, undefined, function* () {
            return this.storage.removeItem(this.storeKey);
          });
        }
        getLastEventId() {
          return n(this, undefined, undefined, function* () {
            return (yield this.storage.getItem(this.storeKey)) || null;
          });
        }
      };
    },
    9934: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.InMemoryStorage = undefined;
      class n {
        constructor() {
          this.storage = {};
        }
        static getInstance() {
          if (!n.instance) {
            n.instance = new n();
          }
          return n.instance;
        }
        get length() {
          return Object.keys(this.storage).length;
        }
        clear() {
          this.storage = {};
        }
        getItem(e) {
          var t;
          return null !== (t = this.storage[e]) && undefined !== t ? t : null;
        }
        key(e) {
          var t;
          const n = Object.keys(this.storage);
          return e < 0 || e >= n.length ? null : null !== (t = n[e]) && undefined !== t ? t : null;
        }
        removeItem(e) {
          delete this.storage[e];
        }
        setItem(e, t) {
          this.storage[e] = t;
        }
      }
      t.InMemoryStorage = n;
    },
    8884: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      var o = this && this.__rest || function (e, t) {
        var n = {};
        for (var r in e) if (Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0) {
          n[r] = e[r];
        }
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) {
            if (t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o])) {
              n[r[o]] = e[r[o]];
            }
          }
        }
        return n;
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.TonConnect = undefined;
      const i = n(1068);
      const s = n(8351);
      const a = n(3008);
      const c = n(6473);
      const l = n(4512);
      const u = n(5268);
      const d = n(1431);
      const h = n(4527);
      const f = n(7791);
      const p = n(8977);
      const g = n(1328);
      const v = n(6180);
      const y = n(2245);
      const b = n(9590);
      const E = n(7419);
      const w = n(1002);
      const _ = n(6011);
      const m = n(1583);
      const C = n(9252);
      const O = n(9489);
      const R = n(4043);
      class S {
        constructor(e) {
          this.walletsList = new E.WalletsListManager();
          this._wallet = null;
          this.provider = null;
          this.statusChangeSubscriptions = [];
          this.statusChangeErrorSubscriptions = [];
          this.dappSettings = {
            manifestUrl: (null == e ? undefined : e.manifestUrl) || (0, b.getWebPageManifest)(),
            storage: (null == e ? undefined : e.storage) || new y.DefaultStorage()
          };
          this.walletsList = new E.WalletsListManager({
            walletsListSource: null == e ? undefined : e.walletsListSource,
            cacheTTLMs: null == e ? undefined : e.walletsListCacheTTLMs
          });
          this.tracker = new O.TonConnectTracker({
            eventDispatcher: null == e ? undefined : e.eventDispatcher,
            tonConnectSdkVersion: R.tonConnectSdkVersion
          });
          if (!this.dappSettings.manifestUrl) {
            throw new i.DappMetadataError("Dapp tonconnect-manifest.json must be specified if window.location.origin is undefined. See more https://github.com/ton-connect/docs/blob/main/requests-responses.md#app-manifest");
          }
          this.bridgeConnectionStorage = new v.BridgeConnectionStorage(this.dappSettings.storage);
          if (!(null == e ? undefined : e.disableAutoPauseConnection)) {
            this.addWindowFocusAndBlurSubscriptions();
          }
        }
        static getWallets() {
          return this.walletsList.getWallets();
        }
        get connected() {
          return null !== this._wallet;
        }
        get account() {
          var e;
          return (null === (e = this._wallet) || undefined === e ? undefined : e.account) || null;
        }
        get wallet() {
          return this._wallet;
        }
        set wallet(e) {
          this._wallet = e;
          this.statusChangeSubscriptions.forEach(e => e(this._wallet));
        }
        getWallets() {
          return this.walletsList.getWallets();
        }
        onStatusChange(e, t) {
          this.statusChangeSubscriptions.push(e);
          if (t) {
            this.statusChangeErrorSubscriptions.push(t);
          }
          return () => {
            this.statusChangeSubscriptions = this.statusChangeSubscriptions.filter(t => t !== e);
            if (t) {
              this.statusChangeErrorSubscriptions = this.statusChangeErrorSubscriptions.filter(e => e !== t);
            }
          };
        }
        connect(e, t) {
          var n;
          var r;
          const o = {};
          if ("object" == typeof t && "tonProof" in t) {
            o.request = t;
          }
          if ("object" == typeof t && ("openingDeadlineMS" in t || "signal" in t || "request" in t)) {
            o.request = null == t ? undefined : t.request;
            o.openingDeadlineMS = null == t ? undefined : t.openingDeadlineMS;
            o.signal = null == t ? undefined : t.signal;
          }
          if (this.connected) {
            throw new l.WalletAlreadyConnectedError();
          }
          0;
          const i = C.createAbortController(null == o ? undefined : o.signal);
          if (!(null === (n = this.abortController) || undefined === n)) {
            n.abort();
          }
          this.abortController = i;
          if (i.signal.aborted) {
            throw new c.TonConnectError("Connection was aborted");
          }
          if (!(null === (r = this.provider) || undefined === r)) {
            r.closeConnection();
          }
          this.provider = this.createProvider(e);
          i.signal.addEventListener("abort", () => {
            var e;
            if (!(null === (e = this.provider) || undefined === e)) {
              e.closeConnection();
            }
            this.provider = null;
          });
          this.tracker.trackConnectionStarted();
          return this.provider.connect(this.createConnectRequest(null == o ? undefined : o.request), {
            openingDeadlineMS: null == o ? undefined : o.openingDeadlineMS,
            signal: i.signal
          });
        }
        restoreConnection(e) {
          var t;
          var n;
          return r(this, undefined, undefined, function* () {
            this.tracker.trackConnectionRestoringStarted();
            0;
            const o = C.createAbortController(null == e ? undefined : e.signal);
            if (!(null === (t = this.abortController) || undefined === t)) {
              t.abort();
            }
            this.abortController = o;
            if (o.signal.aborted) {
              return void this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
            }
            const [i, s] = yield Promise.all([this.bridgeConnectionStorage.storedConnectionType(), this.walletsList.getEmbeddedWallet()]);
            if (o.signal.aborted) {
              return void this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
            }
            let a = null;
            try {
              switch (i) {
                case "http":
                  a = yield p.BridgeProvider.fromStorage(this.dappSettings.storage);
                  break;
                case "injected":
                  a = yield g.InjectedProvider.fromStorage(this.dappSettings.storage);
                  break;
                default:
                  if (!s) {
                    return;
                  }
                  a = this.createProvider(s);
              }
            } catch (e) {
              this.tracker.trackConnectionRestoringError("Provider is not restored");
              yield this.bridgeConnectionStorage.removeConnection();
              if (!(null == a)) {
                a.closeConnection();
              }
              return void (a = null);
            }
            if (o.signal.aborted) {
              if (!(null == a)) {
                a.closeConnection();
              }
              return void this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
            }
            if (!a) {
              0;
              m.logError("Provider is not restored");
              return void this.tracker.trackConnectionRestoringError("Provider is not restored");
            }
            if (!(null === (n = this.provider) || undefined === n)) {
              n.closeConnection();
            }
            this.provider = a;
            a.listen(this.walletEventsListener.bind(this));
            const c = () => {
              this.tracker.trackConnectionRestoringError("Connection restoring was aborted");
              if (!(null == a)) {
                a.closeConnection();
              }
              a = null;
            };
            o.signal.addEventListener("abort", c);
            0;
            const l = _.callForSuccess(t => r(this, undefined, undefined, function* () {
              yield null == a ? undefined : a.restoreConnection({
                openingDeadlineMS: null == e ? undefined : e.openingDeadlineMS,
                signal: t.signal
              });
              o.signal.removeEventListener("abort", c);
              if (this.connected) {
                this.tracker.trackConnectionRestoringCompleted(this.wallet);
              } else {
                this.tracker.trackConnectionRestoringError("Connection restoring failed");
              }
            }), {
              attempts: Number.MAX_SAFE_INTEGER,
              delayMs: 2e3,
              signal: null == e ? undefined : e.signal
            });
            const u = new Promise(e => setTimeout(() => e(), 12e3));
            return Promise.race([l, u]);
          });
        }
        sendTransaction(e, t) {
          return r(this, undefined, undefined, function* () {
            const n = {};
            if ("function" == typeof t) {
              n.onRequestSent = t;
            } else {
              n.onRequestSent = null == t ? undefined : t.onRequestSent;
              n.signal = null == t ? undefined : t.signal;
            }
            0;
            const r = C.createAbortController(null == n ? undefined : n.signal);
            if (r.signal.aborted) {
              throw new c.TonConnectError("Transaction sending was aborted");
            }
            this.checkConnection();
            0;
            w.checkSendTransactionSupport(this.wallet.device.features, {
              requiredMessagesNumber: e.messages.length
            });
            this.tracker.trackTransactionSentForSignature(this.wallet, e);
            const {
              validUntil: i
            } = e;
            const s = o(e, ["validUntil"]);
            const a = e.from || this.account.address;
            const l = e.network || this.account.chain;
            const u = yield this.provider.sendRequest(f.sendTransactionParser.convertToRpcRequest(Object.assign(Object.assign({}, s), {
              valid_until: i,
              from: a,
              network: l
            })), {
              onRequestSent: n.onRequestSent,
              signal: r.signal
            });
            if (f.sendTransactionParser.isError(u)) {
              this.tracker.trackTransactionSigningFailed(this.wallet, e, u.error.message, u.error.code);
              return f.sendTransactionParser.parseAndThrowError(u);
            }
            const d = f.sendTransactionParser.convertFromRpcResponse(u);
            this.tracker.trackTransactionSigned(this.wallet, e, d);
            return d;
          });
        }
        disconnect(e) {
          var t;
          return r(this, undefined, undefined, function* () {
            if (!this.connected) {
              throw new u.WalletNotConnectedError();
            }
            0;
            const n = C.createAbortController(null == e ? undefined : e.signal);
            const r = this.abortController;
            this.abortController = n;
            if (n.signal.aborted) {
              throw new c.TonConnectError("Disconnect was aborted");
            }
            this.onWalletDisconnected("dapp");
            yield null === (t = this.provider) || undefined === t ? undefined : t.disconnect({
              signal: n.signal
            });
            if (!(null == r)) {
              r.abort();
            }
          });
        }
        pauseConnection() {
          var e;
          if ("http" === (null === (e = this.provider) || undefined === e ? undefined : e.type)) {
            this.provider.pause();
          }
        }
        unPauseConnection() {
          var e;
          return "http" !== (null === (e = this.provider) || undefined === e ? undefined : e.type) ? Promise.resolve() : this.provider.unPause();
        }
        addWindowFocusAndBlurSubscriptions() {
          0;
          const e = b.getDocument();
          if (e) {
            try {
              e.addEventListener("visibilitychange", () => {
                if (e.hidden) {
                  this.pauseConnection();
                } else {
                  this.unPauseConnection().catch();
                }
              });
            } catch (e) {
              0;
              m.logError("Cannot subscribe to the document.visibilitychange: ", e);
            }
          }
        }
        createProvider(e) {
          let t;
          t = !Array.isArray(e) && (0, d.isWalletConnectionSourceJS)(e) ? new g.InjectedProvider(this.dappSettings.storage, e.jsBridgeKey) : new p.BridgeProvider(this.dappSettings.storage, e);
          t.listen(this.walletEventsListener.bind(this));
          return t;
        }
        walletEventsListener(e) {
          switch (e.event) {
            case "connect":
              this.onWalletConnected(e.payload);
              break;
            case "connect_error":
              this.onWalletConnectError(e.payload);
              break;
            case "disconnect":
              this.onWalletDisconnected("wallet");
          }
        }
        onWalletConnected(e) {
          const t = e.items.find(e => "ton_addr" === e.name);
          const n = e.items.find(e => "ton_proof" === e.name);
          if (!t) {
            throw new c.TonConnectError("ton_addr connection item was not found");
          }
          const r = {
            device: e.device,
            provider: this.provider.type,
            account: {
              address: t.address,
              chain: t.network,
              walletStateInit: t.walletStateInit,
              publicKey: t.publicKey
            }
          };
          if (n) {
            r.connectItems = {
              tonProof: n
            };
          }
          this.wallet = r;
          this.tracker.trackConnectionCompleted(r);
        }
        onWalletConnectError(e) {
          const t = h.connectErrorsParser.parseError(e);
          this.statusChangeErrorSubscriptions.forEach(e => e(t));
          0;
          m.logDebug(t);
          this.tracker.trackConnectionError(e.message, e.code);
          if (t instanceof a.ManifestNotFoundError || t instanceof s.ManifestContentErrorError) {
            0;
            m.logError(t);
            throw t;
          }
        }
        onWalletDisconnected(e) {
          this.tracker.trackDisconnection(this.wallet, e);
          this.wallet = null;
        }
        checkConnection() {
          if (!this.connected) {
            throw new u.WalletNotConnectedError();
          }
        }
        createConnectRequest(e) {
          const t = [{
            name: "ton_addr"
          }];
          if (null == e ? undefined : e.tonProof) {
            t.push({
              name: "ton_proof",
              payload: e.tonProof
            });
          }
          return {
            manifestUrl: this.dappSettings.manifestUrl,
            items: t
          };
        }
      }
      t.TonConnect = S;
      S.walletsList = new E.WalletsListManager();
      S.isWalletInjected = e => g.InjectedProvider.isWalletInjected(e);
      S.isInsideWalletBrowser = e => g.InjectedProvider.isInsideWalletBrowser(e);
    },
    9467: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.BrowserEventDispatcher = undefined;
      const o = n(9590);
      t.BrowserEventDispatcher = class {
        constructor() {
          0;
          this.window = o.getWindow();
        }
        dispatchEvent(e, t) {
          var n;
          return r(this, undefined, undefined, function* () {
            const r = new CustomEvent(e, {
              detail: t
            });
            if (!(null === (n = this.window) || undefined === n)) {
              n.dispatchEvent(r);
            }
          });
        }
        addEventListener(e, t, n) {
          var o;
          return r(this, undefined, undefined, function* () {
            if (!(null === (o = this.window) || undefined === o)) {
              o.addEventListener(e, t, n);
            }
            return () => {
              var n;
              return null === (n = this.window) || undefined === n ? undefined : n.removeEventListener(e, t);
            };
          });
        }
      };
    },
    9489: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.TonConnectTracker = undefined;
      const o = n(16);
      const i = n(9467);
      t.TonConnectTracker = class {
        constructor(e) {
          var t;
          this.eventPrefix = "ton-connect-";
          this.tonConnectUiVersion = null;
          this.eventDispatcher = null !== (t = null == e ? undefined : e.eventDispatcher) && undefined !== t ? t : new i.BrowserEventDispatcher();
          this.tonConnectSdkVersion = e.tonConnectSdkVersion;
          this.init().catch();
        }
        get version() {
          0;
          return o.createVersionInfo({
            ton_connect_sdk_lib: this.tonConnectSdkVersion,
            ton_connect_ui_lib: this.tonConnectUiVersion
          });
        }
        init() {
          return r(this, undefined, undefined, function* () {
            try {
              yield this.setRequestVersionHandler();
              this.tonConnectUiVersion = yield this.requestTonConnectUiVersion();
            } catch (e) {}
          });
        }
        setRequestVersionHandler() {
          return r(this, undefined, undefined, function* () {
            yield this.eventDispatcher.addEventListener("ton-connect-request-version", () => r(this, undefined, undefined, function* () {
              0;
              yield this.eventDispatcher.dispatchEvent("ton-connect-response-version", o.createResponseVersionEvent(this.tonConnectSdkVersion));
            }));
          });
        }
        requestTonConnectUiVersion() {
          return r(this, undefined, undefined, function* () {
            return new Promise((e, t) => r(this, undefined, undefined, function* () {
              try {
                yield this.eventDispatcher.addEventListener("ton-connect-ui-response-version", t => {
                  e(t.detail.version);
                }, {
                  once: true
                });
                0;
                yield this.eventDispatcher.dispatchEvent("ton-connect-ui-request-version", o.createRequestVersionEvent());
              } catch (e) {
                t(e);
              }
            }));
          });
        }
        dispatchUserActionEvent(e) {
          try {
            this.eventDispatcher.dispatchEvent(`${this.eventPrefix}${e.type}`, e).catch();
          } catch (e) {}
        }
        trackConnectionStarted(...e) {
          try {
            0;
            const t = o.createConnectionStartedEvent(this.version, ...e);
            this.dispatchUserActionEvent(t);
          } catch (e) {}
        }
        trackConnectionCompleted(...e) {
          try {
            0;
            const t = o.createConnectionCompletedEvent(this.version, ...e);
            this.dispatchUserActionEvent(t);
          } catch (e) {}
        }
        trackConnectionError(...e) {
          try {
            0;
            const t = o.createConnectionErrorEvent(this.version, ...e);
            this.dispatchUserActionEvent(t);
          } catch (e) {}
        }
        trackConnectionRestoringStarted(...e) {
          try {
            0;
            const t = o.createConnectionRestoringStartedEvent(this.version, ...e);
            this.dispatchUserActionEvent(t);
          } catch (e) {}
        }
        trackConnectionRestoringCompleted(...e) {
          try {
            0;
            const t = o.createConnectionRestoringCompletedEvent(this.version, ...e);
            this.dispatchUserActionEvent(t);
          } catch (e) {}
        }
        trackConnectionRestoringError(...e) {
          try {
            0;
            const t = o.createConnectionRestoringErrorEvent(this.version, ...e);
            this.dispatchUserActionEvent(t);
          } catch (e) {}
        }
        trackDisconnection(...e) {
          try {
            0;
            const t = o.createDisconnectionEvent(this.version, ...e);
            this.dispatchUserActionEvent(t);
          } catch (e) {}
        }
        trackTransactionSentForSignature(...e) {
          try {
            0;
            const t = o.createTransactionSentForSignatureEvent(this.version, ...e);
            this.dispatchUserActionEvent(t);
          } catch (e) {}
        }
        trackTransactionSigned(...e) {
          try {
            0;
            const t = o.createTransactionSignedEvent(this.version, ...e);
            this.dispatchUserActionEvent(t);
          } catch (e) {}
        }
        trackTransactionSigningFailed(...e) {
          try {
            0;
            const t = o.createTransactionSigningFailedEvent(this.version, ...e);
            this.dispatchUserActionEvent(t);
          } catch (e) {}
        }
      };
    },
    16: (e, t) => {
      "use strict";

      function n(e) {
        return {
          ton_connect_sdk_lib: e.ton_connect_sdk_lib,
          ton_connect_ui_lib: e.ton_connect_ui_lib
        };
      }
      function r(e, t) {
        var r;
        var o;
        var i;
        var s;
        var a;
        var c;
        var l;
        var u;
        const d = (null === (r = null == t ? undefined : t.connectItems) || undefined === r ? undefined : r.tonProof) && "proof" in t.connectItems.tonProof ? "ton_proof" : "ton_addr";
        return {
          wallet_address: null !== (i = null === (o = null == t ? undefined : t.account) || undefined === o ? undefined : o.address) && undefined !== i ? i : null,
          wallet_type: null !== (s = null == t ? undefined : t.device.appName) && undefined !== s ? s : null,
          wallet_version: null !== (a = null == t ? undefined : t.device.appVersion) && undefined !== a ? a : null,
          auth_type: d,
          custom_data: Object.assign({
            chain_id: null !== (l = null === (c = null == t ? undefined : t.account) || undefined === c ? undefined : c.chain) && undefined !== l ? l : null,
            provider: null !== (u = null == t ? undefined : t.provider) && undefined !== u ? u : null
          }, {
            ton_connect_sdk_lib: e.ton_connect_sdk_lib,
            ton_connect_ui_lib: e.ton_connect_ui_lib
          })
        };
      }
      function o(e, t) {
        var n;
        var r;
        var o;
        var i;
        return {
          valid_until: null !== (n = String(t.validUntil)) && undefined !== n ? n : null,
          from: null !== (i = null !== (r = t.from) && undefined !== r ? r : null === (o = null == e ? undefined : e.account) || undefined === o ? undefined : o.address) && undefined !== i ? i : null,
          messages: t.messages.map(e => {
            var t;
            var n;
            return {
              address: null !== (t = e.address) && undefined !== t ? t : null,
              amount: null !== (n = e.amount) && undefined !== n ? n : null
            };
          })
        };
      }
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.createDisconnectionEvent = t.createTransactionSigningFailedEvent = t.createTransactionSignedEvent = t.createTransactionSentForSignatureEvent = t.createConnectionRestoringErrorEvent = t.createConnectionRestoringCompletedEvent = t.createConnectionRestoringStartedEvent = t.createConnectionErrorEvent = t.createConnectionCompletedEvent = t.createConnectionStartedEvent = t.createVersionInfo = t.createResponseVersionEvent = t.createRequestVersionEvent = undefined;
      t.createRequestVersionEvent = function () {
        return {
          type: "request-version"
        };
      };
      t.createResponseVersionEvent = function (e) {
        return {
          type: "response-version",
          version: e
        };
      };
      t.createVersionInfo = n;
      t.createConnectionStartedEvent = function (e) {
        return {
          type: "connection-started",
          custom_data: {
            ton_connect_sdk_lib: e.ton_connect_sdk_lib,
            ton_connect_ui_lib: e.ton_connect_ui_lib
          }
        };
      };
      t.createConnectionCompletedEvent = function (e, t) {
        return Object.assign({
          type: "connection-completed",
          is_success: true
        }, r(e, t));
      };
      t.createConnectionErrorEvent = function (e, t, r) {
        return {
          type: "connection-error",
          is_success: false,
          error_message: t,
          error_code: null != r ? r : null,
          custom_data: {
            ton_connect_sdk_lib: e.ton_connect_sdk_lib,
            ton_connect_ui_lib: e.ton_connect_ui_lib
          }
        };
      };
      t.createConnectionRestoringStartedEvent = function (e) {
        return {
          type: "connection-restoring-started",
          custom_data: {
            ton_connect_sdk_lib: e.ton_connect_sdk_lib,
            ton_connect_ui_lib: e.ton_connect_ui_lib
          }
        };
      };
      t.createConnectionRestoringCompletedEvent = function (e, t) {
        return Object.assign({
          type: "connection-restoring-completed",
          is_success: true
        }, r(e, t));
      };
      t.createConnectionRestoringErrorEvent = function (e, t) {
        return {
          type: "connection-restoring-error",
          is_success: false,
          error_message: t,
          custom_data: {
            ton_connect_sdk_lib: e.ton_connect_sdk_lib,
            ton_connect_ui_lib: e.ton_connect_ui_lib
          }
        };
      };
      t.createTransactionSentForSignatureEvent = function (e, t, n) {
        return Object.assign(Object.assign({
          type: "transaction-sent-for-signature"
        }, r(e, t)), o(t, n));
      };
      t.createTransactionSignedEvent = function (e, t, n, i) {
        return Object.assign(Object.assign({
          type: "transaction-signed",
          is_success: true,
          signed_transaction: i.boc
        }, r(e, t)), o(t, n));
      };
      t.createTransactionSigningFailedEvent = function (e, t, n, i, s) {
        return Object.assign(Object.assign({
          type: "transaction-signing-failed",
          is_success: false,
          error_message: i,
          error_code: null != s ? s : null
        }, r(e, t)), o(t, n));
      };
      t.createDisconnectionEvent = function (e, t, n) {
        return Object.assign({
          type: "disconnection",
          scope: n
        }, r(e, t));
      };
    },
    6754: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.toUserFriendlyAddress = undefined;
      const r = n(2764);
      const o = n(9461);
      t.toUserFriendlyAddress = function (e, t = false) {
        const {
          wc: n,
          hex: i
        } = function (e) {
          if (!e.includes(":")) {
            throw new r.WrongAddressError(`Wrong address ${e}. Address must include ":".`);
          }
          const t = e.split(":");
          if (2 !== t.length) {
            throw new r.WrongAddressError(`Wrong address ${e}. Address must include ":" only once.`);
          }
          const n = parseInt(t[0]);
          if (0 !== n && -1 !== n) {
            throw new r.WrongAddressError(`Wrong address ${e}. WC must be eq 0 or -1, but ${n} received.`);
          }
          const o = t[1];
          if (64 !== (null == o ? undefined : o.length)) {
            throw new r.WrongAddressError(`Wrong address ${e}. Hex part must be 64bytes length, but ${null == o ? undefined : o.length} received.`);
          }
          return {
            wc: n,
            hex: s(o)
          };
        }(e);
        let a = 81;
        if (t) {
          a |= 128;
        }
        const c = new Int8Array(34);
        c[0] = a;
        c[1] = n;
        c.set(i, 2);
        const l = new Uint8Array(36);
        l.set(c);
        l.set(function (e) {
          let t = 0;
          const n = new Uint8Array(e.length + 2);
          n.set(e);
          for (let e of n) {
            let n = 128;
            for (; n > 0;) {
              t <<= 1;
              if (e & n) {
                t += 1;
              }
              n >>= 1;
              if (t > 65535) {
                t &= 65535;
                t ^= 4129;
              }
            }
          }
          return new Uint8Array([Math.floor(t / 256), t % 256]);
        }(c), 34);
        return o.Base64.encode(l).replace(/\+/g, "-").replace(/\//g, "_");
      };
      const i = {};
      for (let e = 0; e <= 255; e++) {
        let t = e.toString(16);
        if (t.length < 2) {
          t = "0" + t;
        }
        i[t] = e;
      }
      function s(e) {
        const t = (e = e.toLowerCase()).length;
        if (t % 2 != 0) {
          throw new r.ParseHexError("Hex string must have length a multiple of 2: " + e);
        }
        const n = t / 2;
        const o = new Uint8Array(n);
        for (let t = 0; t < n; t++) {
          const n = 2 * t;
          const s = e.substring(n, n + 2);
          if (!i.hasOwnProperty(s)) {
            throw new r.ParseHexError("Invalid hex character: " + s);
          }
          o[t] = i[s];
        }
        return o;
      }
    },
    6011: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.callForSuccess = undefined;
      const o = n(9572);
      const i = n(2764);
      const s = n(9252);
      t.callForSuccess = function (e, t) {
        var n;
        var a;
        return r(this, undefined, undefined, function* () {
          const r = null !== (n = null == t ? undefined : t.attempts) && undefined !== n ? n : 10;
          const c = null !== (a = null == t ? undefined : t.delayMs) && undefined !== a ? a : 200;
          0;
          const l = s.createAbortController(null == t ? undefined : t.signal);
          if ("function" != typeof e) {
            throw new i.TonConnectError("Expected a function, got " + typeof e);
          }
          let u;
          let d = 0;
          for (; d < r;) {
            if (l.signal.aborted) {
              throw new i.TonConnectError(`Aborted after attempts ${d}`);
            }
            try {
              return yield e({
                signal: l.signal
              });
            } catch (e) {
              u = e;
              d++;
              if (d < r) {
                0;
                yield o.delay(c);
              }
            }
          }
          throw u;
        });
      };
    },
    9252: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.createAbortController = undefined;
      t.createAbortController = function (e) {
        const t = new AbortController();
        if (null == e ? undefined : e.aborted) {
          t.abort();
        } else if (!(null == e)) {
          e.addEventListener("abort", () => t.abort(), {
            once: true
          });
        }
        return t;
      };
    },
    9572: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.delay = undefined;
      const o = n(2764);
      t.delay = function (e, t) {
        return r(this, undefined, undefined, function* () {
          return new Promise((n, r) => {
            var i;
            var s;
            if (null === (i = null == t ? undefined : t.signal) || undefined === i ? undefined : i.aborted) {
              return void r(new o.TonConnectError("Delay aborted"));
            }
            const a = setTimeout(() => n(), e);
            if (!(null === (s = null == t ? undefined : t.signal) || undefined === s)) {
              s.addEventListener("abort", () => {
                clearTimeout(a);
                r(new o.TonConnectError("Delay aborted"));
              });
            }
          });
        });
      };
    },
    1002: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.checkSendTransactionSupport = undefined;
      const r = n(1583);
      const o = n(4610);
      t.checkSendTransactionSupport = function (e, t) {
        const n = e.includes("SendTransaction");
        const i = e.find(e => e && "object" == typeof e && "SendTransaction" === e.name);
        if (!n && !i) {
          throw new o.WalletNotSupportFeatureError("Wallet doesn't support SendTransaction feature.");
        }
        if (i && undefined !== i.maxMessages) {
          if (i.maxMessages < t.requiredMessagesNumber) {
            throw new o.WalletNotSupportFeatureError(`Wallet is not able to handle such SendTransaction request. Max support messages number is ${i.maxMessages}, but ${t.requiredMessagesNumber} is required.`);
          }
        } else {
          0;
          r.logWarning("Connected wallet didn't provide information about max allowed messages in the SendTransaction request. Request may be rejected by the wallet.");
        }
      };
    },
    1583: (e, t) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.logWarning = t.logError = t.logDebug = undefined;
      t.logDebug = function (...e) {
        try {
          console.debug("[TON_CONNECT_SDK]", ...e);
        } catch (e) {}
      };
      t.logError = function (...e) {
        try {
          console.error("[TON_CONNECT_SDK]", ...e);
        } catch (e) {}
      };
      t.logWarning = function (...e) {
        try {
          console.warn("[TON_CONNECT_SDK]", ...e);
        } catch (e) {}
      };
    },
    1484: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.createResource = undefined;
      const o = n(2764);
      const i = n(9572);
      const s = n(9252);
      t.createResource = function (e, t) {
        let n = null;
        let a = null;
        let c = null;
        let l = null;
        let u = null;
        const d = (i, ...d) => r(this, undefined, undefined, function* () {
          l = null != i ? i : null;
          if (!(null == u)) {
            u.abort();
          }
          0;
          u = s.createAbortController(i);
          if (u.signal.aborted) {
            throw new o.TonConnectError("Resource creation was aborted");
          }
          a = null != d ? d : null;
          const r = e(u.signal, ...d);
          c = r;
          const h = yield r;
          if (c !== r && h !== n) {
            yield t(h);
            throw new o.TonConnectError("Resource creation was aborted by a new resource creation");
          }
          n = h;
          return n;
        });
        return {
          create: d,
          current: () => null != n ? n : null,
          dispose: () => r(this, undefined, undefined, function* () {
            try {
              const e = n;
              n = null;
              const r = c;
              c = null;
              try {
                if (!(null == u)) {
                  u.abort();
                }
              } catch (e) {}
              yield Promise.allSettled([e ? t(e) : Promise.resolve(), r ? t(yield r) : Promise.resolve()]);
            } catch (e) {}
          }),
          recreate: e => r(this, undefined, undefined, function* () {
            const t = n;
            const r = c;
            const s = a;
            const u = l;
            0;
            yield i.delay(e);
            if (t === n && r === c && s === a && u === l) {
              return yield d(l, ...(null != s ? s : []));
            }
            throw new o.TonConnectError("Resource recreation was aborted by a new resource creation");
          })
        };
      };
    },
    6764: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.timeout = undefined;
      const o = n(2764);
      const i = n(9252);
      t.timeout = function (e, t) {
        const n = null == t ? undefined : t.timeout;
        const s = null == t ? undefined : t.signal;
        0;
        const a = i.createAbortController(s);
        return new Promise((t, i) => r(this, undefined, undefined, function* () {
          if (a.signal.aborted) {
            return void i(new o.TonConnectError("Operation aborted"));
          }
          let r;
          if (undefined !== n) {
            r = setTimeout(() => {
              a.abort();
              i(new o.TonConnectError(`Timeout after ${n}ms`));
            }, n);
          }
          a.signal.addEventListener("abort", () => {
            clearTimeout(r);
            i(new o.TonConnectError("Operation aborted"));
          }, {
            once: true
          });
          const s = {
            timeout: n,
            abort: a.signal
          };
          yield e((...e) => {
            clearTimeout(r);
            t(...e);
          }, () => {
            clearTimeout(r);
            i();
          }, s);
        }));
      };
    },
    6415: (e, t) => {
      "use strict";

      function n(e, t) {
        return !(!e || "object" != typeof e) && t.every(t => t in e);
      }
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.hasProperties = t.hasProperty = undefined;
      t.hasProperty = function (e, t) {
        return n(e, [t]);
      };
      t.hasProperties = n;
    },
    5370: (e, t) => {
      "use strict";

      function n(e) {
        return "/" === e.slice(-1) ? e.slice(0, -1) : e;
      }
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.encodeTelegramUrlParameters = t.isTelegramUrl = t.addPathToUrl = t.removeUrlLastSlash = undefined;
      t.removeUrlLastSlash = n;
      t.addPathToUrl = function (e, t) {
        return ("/" === e.slice(-1) ? e.slice(0, -1) : e) + "/" + t;
      };
      t.isTelegramUrl = function (e) {
        if (!e) {
          return false;
        }
        const t = new URL(e);
        return "tg:" === t.protocol || "t.me" === t.hostname;
      };
      t.encodeTelegramUrlParameters = function (e) {
        return e.replaceAll(".", "%2E").replaceAll("-", "%2D").replaceAll("_", "%5F").replaceAll("&", "-").replaceAll("=", "__").replaceAll("%", "--");
      };
    },
    9590: (e, t, n) => {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.tryGetLocalStorage = t.getWebPageManifest = t.getDocument = t.tryGetWindowKeys = t.getWindow = undefined;
      const r = n(9934);
      const o = n(2764);
      function i() {
        if ("undefined" != typeof window) {
          return window;
        }
      }
      t.getWindow = i;
      t.tryGetWindowKeys = function () {
        const e = i();
        if (!e) {
          return [];
        }
        try {
          return Object.keys(e);
        } catch (e) {
          return [];
        }
      };
      t.getDocument = function () {
        if ("undefined" != typeof document) {
          return document;
        }
      };
      t.getWebPageManifest = function () {
        var e;
        const t = null === (e = i()) || undefined === e ? undefined : e.location.origin;
        return t ? t + "/tonconnect-manifest.json" : "";
      };
      t.tryGetLocalStorage = function () {
        if (function () {
          try {
            return "undefined" != typeof localStorage;
          } catch (e) {
            return false;
          }
        }()) {
          return localStorage;
        }
        if ("undefined" != typeof process && null != process.versions && null != process.versions.node) {
          throw new o.TonConnectError("`localStorage` is unavailable, but it is required for TonConnect. For more details, see https://github.com/ton-connect/sdk/tree/main/packages/sdk#init-connector");
        }
        return r.InMemoryStorage.getInstance();
      };
    },
    7419: function (e, t, n) {
      "use strict";

      var r = this && this.__awaiter || function (e, t, n, r) {
        return new (n || (n = Promise))(function (o, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (e) {
              i(e);
            }
          }
          function a(e) {
            try {
              c(r.throw(e));
            } catch (e) {
              i(e);
            }
          }
          function c(e) {
            var t;
            if (e.done) {
              o(e.value);
            } else {
              t = e.value;
              (t instanceof n ? t : new n(function (e) {
                e(t);
              })).then(s, a);
            }
          }
          c((r = r.apply(e, t || [])).next());
        });
      };
      Object.defineProperty(t, "__esModule", {
        value: true
      });
      t.WalletsListManager = undefined;
      const o = n(8814);
      const i = n(9546);
      const s = n(1328);
      const a = n(1583);
      const c = n(3041);
      t.WalletsListManager = class {
        constructor(e) {
          this.walletsListCache = null;
          this.walletsListCacheCreationTimestamp = null;
          this.walletsListSource = "https://raw.githubusercontent.com/ton-blockchain/wallets-list/main/wallets-v2.json";
          if (null == e ? undefined : e.walletsListSource) {
            this.walletsListSource = e.walletsListSource;
          }
          if (null == e ? undefined : e.cacheTTLMs) {
            this.cacheTTLMs = e.cacheTTLMs;
          }
        }
        getWallets() {
          return r(this, undefined, undefined, function* () {
            if (this.cacheTTLMs && this.walletsListCacheCreationTimestamp && Date.now() > this.walletsListCacheCreationTimestamp + this.cacheTTLMs) {
              this.walletsListCache = null;
            }
            if (!this.walletsListCache) {
              this.walletsListCache = this.fetchWalletsList();
              this.walletsListCache.then(() => {
                this.walletsListCacheCreationTimestamp = Date.now();
              }).catch(() => {
                this.walletsListCache = null;
                this.walletsListCacheCreationTimestamp = null;
              });
            }
            return this.walletsListCache;
          });
        }
        getEmbeddedWallet() {
          return r(this, undefined, undefined, function* () {
            const e = (yield this.getWallets()).filter(i.isWalletInfoCurrentlyEmbedded);
            return 1 !== e.length ? null : e[0];
          });
        }
        fetchWalletsList() {
          return r(this, undefined, undefined, function* () {
            let e = [];
            try {
              const t = yield fetch(this.walletsListSource);
              e = yield t.json();
              if (!Array.isArray(e)) {
                throw new o.FetchWalletsError("Wrong wallets list format, wallets list must be an array.");
              }
              const n = e.filter(e => !this.isCorrectWalletConfigDTO(e));
              if (n.length) {
                0;
                a.logError(`Wallet(s) ${n.map(e => e.name).join(", ")} config format is wrong. They were removed from the wallets list.`);
                e = e.filter(e => this.isCorrectWalletConfigDTO(e));
              }
            } catch (t) {
              0;
              a.logError(t);
              e = c.FALLBACK_WALLETS_LIST;
            }
            let t = [];
            try {
              t = s.InjectedProvider.getCurrentlyInjectedWallets();
            } catch (e) {
              0;
              a.logError(e);
            }
            return this.mergeWalletsLists(this.walletConfigDTOListToWalletConfigList(e), t);
          });
        }
        walletConfigDTOListToWalletConfigList(e) {
          return e.map(e => {
            const t = {
              name: e.name,
              appName: e.app_name,
              imageUrl: e.image,
              aboutUrl: e.about_url,
              tondns: e.tondns,
              platforms: e.platforms
            };
            e.bridge.forEach(n => {
              if ("sse" === n.type) {
                t.bridgeUrl = n.url;
                t.universalLink = e.universal_url;
                t.deepLink = e.deepLink;
              }
              if ("js" === n.type) {
                const e = n.key;
                t.jsBridgeKey = e;
                t.injected = s.InjectedProvider.isWalletInjected(e);
                t.embedded = s.InjectedProvider.isInsideWalletBrowser(e);
              }
            });
            return t;
          });
        }
        mergeWalletsLists(e, t) {
          return [...new Set(e.concat(t).map(e => e.name)).values()].map(n => {
            const r = e.find(e => e.name === n);
            const o = t.find(e => e.name === n);
            return Object.assign(Object.assign({}, r && Object.assign({}, r)), o && Object.assign({}, o));
          });
        }
        isCorrectWalletConfigDTO(e) {
          if (!e || "object" != typeof e) {
            return false;
          }
          if (!("name" in e && "image" in e && "about_url" in e && "platforms" in e && "app_name" in e)) {
            return false;
          }
          if (!e.platforms || !Array.isArray(e.platforms) || !e.platforms.length) {
            return false;
          }
          if (!("bridge" in e) || !Array.isArray(e.bridge) || !e.bridge.length) {
            return false;
          }
          const t = e.bridge;
          if (t.some(e => !e || "object" != typeof e || !("type" in e))) {
            return false;
          }
          const n = t.find(e => "sse" === e.type);
          if (n && (!("url" in n) || !n.url || !e.universal_url)) {
            return false;
          }
          const r = t.find(e => "js" === e.type);
          return !!(!r || "key" in r && r.key);
        }
      };
    },
    251: function (e) {
      !function (t, n) {
        "use strict";

        if (e.exports) {
          e.exports = n();
        } else {
          if (!t.nacl) {
            t.nacl = {};
          }
          t.nacl.util = n();
        }
      }(this, function () {
        "use strict";

        var e = {};
        function t(e) {
          if (!/^(?:[A-Za-z0-9+\/]{2}[A-Za-z0-9+\/]{2})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/.test(e)) {
            throw new TypeError("invalid encoding");
          }
        }
        e.decodeUTF8 = function (e) {
          if ("string" != typeof e) {
            throw new TypeError("expected string");
          }
          var t;
          var n = unescape(encodeURIComponent(e));
          var r = new Uint8Array(n.length);
          for (t = 0; t < n.length; t++) {
            r[t] = n.charCodeAt(t);
          }
          return r;
        };
        e.encodeUTF8 = function (e) {
          var t;
          var n = [];
          for (t = 0; t < e.length; t++) {
            n.push(String.fromCharCode(e[t]));
          }
          return decodeURIComponent(escape(n.join("")));
        };
        if ("undefined" == typeof atob) {
          if (undefined !== Buffer.from) {
            e.encodeBase64 = function (e) {
              return Buffer.from(e).toString("base64");
            };
            e.decodeBase64 = function (e) {
              t(e);
              return new Uint8Array(Array.prototype.slice.call(Buffer.from(e, "base64"), 0));
            };
          } else {
            e.encodeBase64 = function (e) {
              return new Buffer(e).toString("base64");
            };
            e.decodeBase64 = function (e) {
              t(e);
              return new Uint8Array(Array.prototype.slice.call(new Buffer(e, "base64"), 0));
            };
          }
        } else {
          e.encodeBase64 = function (e) {
            var t;
            var n = [];
            var r = e.length;
            for (t = 0; t < r; t++) {
              n.push(String.fromCharCode(e[t]));
            }
            return btoa(n.join(""));
          };
          e.decodeBase64 = function (e) {
            t(e);
            var n;
            var r = atob(e);
            var o = new Uint8Array(r.length);
            for (n = 0; n < r.length; n++) {
              o[n] = r.charCodeAt(n);
            }
            return o;
          };
        }
        return e;
      });
    },
    717: (e, t, n) => {
      !function (e) {
        "use strict";

        var t = function (e) {
          var t;
          var n = new Float64Array(16);
          if (e) {
            for (t = 0; t < e.length; t++) {
              n[t] = e[t];
            }
          }
          return n;
        };
        var r = function () {
          throw new Error("no PRNG");
        };
        var o = new Uint8Array(16);
        var i = new Uint8Array(32);
        i[0] = 9;
        var s = t();
        var a = t([1]);
        var c = t([56129, 1]);
        var l = t([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]);
        var u = t([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]);
        var d = t([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]);
        var h = t([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);
        var f = t([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);
        function p(e, t, n, r) {
          e[t] = n >> 24 & 255;
          e[t + 1] = n >> 16 & 255;
          e[t + 2] = n >> 8 & 255;
          e[t + 3] = 255 & n;
          e[t + 4] = r >> 24 & 255;
          e[t + 5] = r >> 16 & 255;
          e[t + 6] = r >> 8 & 255;
          e[t + 7] = 255 & r;
        }
        function g(e, t, n, r, o) {
          var i;
          var s = 0;
          for (i = 0; i < o; i++) {
            s |= e[t + i] ^ n[r + i];
          }
          return (1 & s - 1 >>> 8) - 1;
        }
        function v(e, t, n, r) {
          return g(e, t, n, r, 16);
        }
        function y(e, t, n, r) {
          return g(e, t, n, r, 32);
        }
        function b(e, t, n, r) {
          !function (e, t, n, r) {
            var o;
            var i = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24;
            var s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24;
            var a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24;
            var c = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24;
            var l = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24;
            var u = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24;
            var d = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24;
            var h = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24;
            var f = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24;
            var p = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24;
            var g = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24;
            var v = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24;
            var y = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24;
            var b = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24;
            var E = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24;
            var w = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24;
            var _ = i;
            var m = s;
            var C = a;
            var O = c;
            var R = l;
            var S = u;
            var T = d;
            var P = h;
            var j = f;
            var N = p;
            var A = g;
            var U = v;
            var I = y;
            var M = b;
            var k = E;
            var W = w;
            for (var D = 0; D < 20; D += 2) {
              _ ^= (o = (I ^= (o = (j ^= (o = (R ^= (o = _ + I | 0) << 7 | o >>> 25) + _ | 0) << 9 | o >>> 23) + R | 0) << 13 | o >>> 19) + j | 0) << 18 | o >>> 14;
              S ^= (o = (m ^= (o = (M ^= (o = (N ^= (o = S + m | 0) << 7 | o >>> 25) + S | 0) << 9 | o >>> 23) + N | 0) << 13 | o >>> 19) + M | 0) << 18 | o >>> 14;
              A ^= (o = (T ^= (o = (C ^= (o = (k ^= (o = A + T | 0) << 7 | o >>> 25) + A | 0) << 9 | o >>> 23) + k | 0) << 13 | o >>> 19) + C | 0) << 18 | o >>> 14;
              W ^= (o = (U ^= (o = (P ^= (o = (O ^= (o = W + U | 0) << 7 | o >>> 25) + W | 0) << 9 | o >>> 23) + O | 0) << 13 | o >>> 19) + P | 0) << 18 | o >>> 14;
              _ ^= (o = (O ^= (o = (C ^= (o = (m ^= (o = _ + O | 0) << 7 | o >>> 25) + _ | 0) << 9 | o >>> 23) + m | 0) << 13 | o >>> 19) + C | 0) << 18 | o >>> 14;
              S ^= (o = (R ^= (o = (P ^= (o = (T ^= (o = S + R | 0) << 7 | o >>> 25) + S | 0) << 9 | o >>> 23) + T | 0) << 13 | o >>> 19) + P | 0) << 18 | o >>> 14;
              A ^= (o = (N ^= (o = (j ^= (o = (U ^= (o = A + N | 0) << 7 | o >>> 25) + A | 0) << 9 | o >>> 23) + U | 0) << 13 | o >>> 19) + j | 0) << 18 | o >>> 14;
              W ^= (o = (k ^= (o = (M ^= (o = (I ^= (o = W + k | 0) << 7 | o >>> 25) + W | 0) << 9 | o >>> 23) + I | 0) << 13 | o >>> 19) + M | 0) << 18 | o >>> 14;
            }
            _ = _ + i | 0;
            m = m + s | 0;
            C = C + a | 0;
            O = O + c | 0;
            R = R + l | 0;
            S = S + u | 0;
            T = T + d | 0;
            P = P + h | 0;
            j = j + f | 0;
            N = N + p | 0;
            A = A + g | 0;
            U = U + v | 0;
            I = I + y | 0;
            M = M + b | 0;
            k = k + E | 0;
            W = W + w | 0;
            e[0] = _ >>> 0 & 255;
            e[1] = _ >>> 8 & 255;
            e[2] = _ >>> 16 & 255;
            e[3] = _ >>> 24 & 255;
            e[4] = m >>> 0 & 255;
            e[5] = m >>> 8 & 255;
            e[6] = m >>> 16 & 255;
            e[7] = m >>> 24 & 255;
            e[8] = C >>> 0 & 255;
            e[9] = C >>> 8 & 255;
            e[10] = C >>> 16 & 255;
            e[11] = C >>> 24 & 255;
            e[12] = O >>> 0 & 255;
            e[13] = O >>> 8 & 255;
            e[14] = O >>> 16 & 255;
            e[15] = O >>> 24 & 255;
            e[16] = R >>> 0 & 255;
            e[17] = R >>> 8 & 255;
            e[18] = R >>> 16 & 255;
            e[19] = R >>> 24 & 255;
            e[20] = S >>> 0 & 255;
            e[21] = S >>> 8 & 255;
            e[22] = S >>> 16 & 255;
            e[23] = S >>> 24 & 255;
            e[24] = T >>> 0 & 255;
            e[25] = T >>> 8 & 255;
            e[26] = T >>> 16 & 255;
            e[27] = T >>> 24 & 255;
            e[28] = P >>> 0 & 255;
            e[29] = P >>> 8 & 255;
            e[30] = P >>> 16 & 255;
            e[31] = P >>> 24 & 255;
            e[32] = j >>> 0 & 255;
            e[33] = j >>> 8 & 255;
            e[34] = j >>> 16 & 255;
            e[35] = j >>> 24 & 255;
            e[36] = N >>> 0 & 255;
            e[37] = N >>> 8 & 255;
            e[38] = N >>> 16 & 255;
            e[39] = N >>> 24 & 255;
            e[40] = A >>> 0 & 255;
            e[41] = A >>> 8 & 255;
            e[42] = A >>> 16 & 255;
            e[43] = A >>> 24 & 255;
            e[44] = U >>> 0 & 255;
            e[45] = U >>> 8 & 255;
            e[46] = U >>> 16 & 255;
            e[47] = U >>> 24 & 255;
            e[48] = I >>> 0 & 255;
            e[49] = I >>> 8 & 255;
            e[50] = I >>> 16 & 255;
            e[51] = I >>> 24 & 255;
            e[52] = M >>> 0 & 255;
            e[53] = M >>> 8 & 255;
            e[54] = M >>> 16 & 255;
            e[55] = M >>> 24 & 255;
            e[56] = k >>> 0 & 255;
            e[57] = k >>> 8 & 255;
            e[58] = k >>> 16 & 255;
            e[59] = k >>> 24 & 255;
            e[60] = W >>> 0 & 255;
            e[61] = W >>> 8 & 255;
            e[62] = W >>> 16 & 255;
            e[63] = W >>> 24 & 255;
          }(e, t, n, r);
        }
        function E(e, t, n, r) {
          !function (e, t, n, r) {
            var o;
            var i = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24;
            var s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24;
            var a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24;
            var c = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24;
            var l = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24;
            var u = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24;
            var d = 255 & t[0] | (255 & t[1]) << 8 | (255 & t[2]) << 16 | (255 & t[3]) << 24;
            var h = 255 & t[4] | (255 & t[5]) << 8 | (255 & t[6]) << 16 | (255 & t[7]) << 24;
            var f = 255 & t[8] | (255 & t[9]) << 8 | (255 & t[10]) << 16 | (255 & t[11]) << 24;
            var p = 255 & t[12] | (255 & t[13]) << 8 | (255 & t[14]) << 16 | (255 & t[15]) << 24;
            var g = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24;
            var v = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24;
            var y = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24;
            var b = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24;
            var E = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24;
            var w = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24;
            for (var _ = 0; _ < 20; _ += 2) {
              i ^= (o = (y ^= (o = (f ^= (o = (l ^= (o = i + y | 0) << 7 | o >>> 25) + i | 0) << 9 | o >>> 23) + l | 0) << 13 | o >>> 19) + f | 0) << 18 | o >>> 14;
              u ^= (o = (s ^= (o = (b ^= (o = (p ^= (o = u + s | 0) << 7 | o >>> 25) + u | 0) << 9 | o >>> 23) + p | 0) << 13 | o >>> 19) + b | 0) << 18 | o >>> 14;
              g ^= (o = (d ^= (o = (a ^= (o = (E ^= (o = g + d | 0) << 7 | o >>> 25) + g | 0) << 9 | o >>> 23) + E | 0) << 13 | o >>> 19) + a | 0) << 18 | o >>> 14;
              w ^= (o = (v ^= (o = (h ^= (o = (c ^= (o = w + v | 0) << 7 | o >>> 25) + w | 0) << 9 | o >>> 23) + c | 0) << 13 | o >>> 19) + h | 0) << 18 | o >>> 14;
              i ^= (o = (c ^= (o = (a ^= (o = (s ^= (o = i + c | 0) << 7 | o >>> 25) + i | 0) << 9 | o >>> 23) + s | 0) << 13 | o >>> 19) + a | 0) << 18 | o >>> 14;
              u ^= (o = (l ^= (o = (h ^= (o = (d ^= (o = u + l | 0) << 7 | o >>> 25) + u | 0) << 9 | o >>> 23) + d | 0) << 13 | o >>> 19) + h | 0) << 18 | o >>> 14;
              g ^= (o = (p ^= (o = (f ^= (o = (v ^= (o = g + p | 0) << 7 | o >>> 25) + g | 0) << 9 | o >>> 23) + v | 0) << 13 | o >>> 19) + f | 0) << 18 | o >>> 14;
              w ^= (o = (E ^= (o = (b ^= (o = (y ^= (o = w + E | 0) << 7 | o >>> 25) + w | 0) << 9 | o >>> 23) + y | 0) << 13 | o >>> 19) + b | 0) << 18 | o >>> 14;
            }
            e[0] = i >>> 0 & 255;
            e[1] = i >>> 8 & 255;
            e[2] = i >>> 16 & 255;
            e[3] = i >>> 24 & 255;
            e[4] = u >>> 0 & 255;
            e[5] = u >>> 8 & 255;
            e[6] = u >>> 16 & 255;
            e[7] = u >>> 24 & 255;
            e[8] = g >>> 0 & 255;
            e[9] = g >>> 8 & 255;
            e[10] = g >>> 16 & 255;
            e[11] = g >>> 24 & 255;
            e[12] = w >>> 0 & 255;
            e[13] = w >>> 8 & 255;
            e[14] = w >>> 16 & 255;
            e[15] = w >>> 24 & 255;
            e[16] = d >>> 0 & 255;
            e[17] = d >>> 8 & 255;
            e[18] = d >>> 16 & 255;
            e[19] = d >>> 24 & 255;
            e[20] = h >>> 0 & 255;
            e[21] = h >>> 8 & 255;
            e[22] = h >>> 16 & 255;
            e[23] = h >>> 24 & 255;
            e[24] = f >>> 0 & 255;
            e[25] = f >>> 8 & 255;
            e[26] = f >>> 16 & 255;
            e[27] = f >>> 24 & 255;
            e[28] = p >>> 0 & 255;
            e[29] = p >>> 8 & 255;
            e[30] = p >>> 16 & 255;
            e[31] = p >>> 24 & 255;
          }(e, t, n, r);
        }
        var w = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);
        function _(e, t, n, r, o, i, s) {
          var a;
          var c;
          var l = new Uint8Array(16);
          var u = new Uint8Array(64);
          for (c = 0; c < 16; c++) {
            l[c] = 0;
          }
          for (c = 0; c < 8; c++) {
            l[c] = i[c];
          }
          for (; o >= 64;) {
            b(u, l, s, w);
            for (c = 0; c < 64; c++) {
              e[t + c] = n[r + c] ^ u[c];
            }
            a = 1;
            for (c = 8; c < 16; c++) {
              a = a + (255 & l[c]) | 0;
              l[c] = 255 & a;
              a >>>= 8;
            }
            o -= 64;
            t += 64;
            r += 64;
          }
          if (o > 0) {
            b(u, l, s, w);
            for (c = 0; c < o; c++) {
              e[t + c] = n[r + c] ^ u[c];
            }
          }
          return 0;
        }
        function m(e, t, n, r, o) {
          var i;
          var s;
          var a = new Uint8Array(16);
          var c = new Uint8Array(64);
          for (s = 0; s < 16; s++) {
            a[s] = 0;
          }
          for (s = 0; s < 8; s++) {
            a[s] = r[s];
          }
          for (; n >= 64;) {
            b(c, a, o, w);
            for (s = 0; s < 64; s++) {
              e[t + s] = c[s];
            }
            i = 1;
            for (s = 8; s < 16; s++) {
              i = i + (255 & a[s]) | 0;
              a[s] = 255 & i;
              i >>>= 8;
            }
            n -= 64;
            t += 64;
          }
          if (n > 0) {
            b(c, a, o, w);
            for (s = 0; s < n; s++) {
              e[t + s] = c[s];
            }
          }
          return 0;
        }
        function C(e, t, n, r, o) {
          var i = new Uint8Array(32);
          E(i, r, o, w);
          var s = new Uint8Array(8);
          for (var a = 0; a < 8; a++) {
            s[a] = r[a + 16];
          }
          return m(e, t, n, s, i);
        }
        function O(e, t, n, r, o, i, s) {
          var a = new Uint8Array(32);
          E(a, i, s, w);
          var c = new Uint8Array(8);
          for (var l = 0; l < 8; l++) {
            c[l] = i[l + 16];
          }
          return _(e, t, n, r, o, c, a);
        }
        var R = function (e) {
          var t;
          var n;
          var r;
          var o;
          var i;
          var s;
          var a;
          var c;
          this.buffer = new Uint8Array(16);
          this.r = new Uint16Array(10);
          this.h = new Uint16Array(10);
          this.pad = new Uint16Array(8);
          this.leftover = 0;
          this.fin = 0;
          t = 255 & e[0] | (255 & e[1]) << 8;
          this.r[0] = 8191 & t;
          n = 255 & e[2] | (255 & e[3]) << 8;
          this.r[1] = 8191 & (t >>> 13 | n << 3);
          r = 255 & e[4] | (255 & e[5]) << 8;
          this.r[2] = 7939 & (n >>> 10 | r << 6);
          o = 255 & e[6] | (255 & e[7]) << 8;
          this.r[3] = 8191 & (r >>> 7 | o << 9);
          i = 255 & e[8] | (255 & e[9]) << 8;
          this.r[4] = 255 & (o >>> 4 | i << 12);
          this.r[5] = i >>> 1 & 8190;
          s = 255 & e[10] | (255 & e[11]) << 8;
          this.r[6] = 8191 & (i >>> 14 | s << 2);
          a = 255 & e[12] | (255 & e[13]) << 8;
          this.r[7] = 8065 & (s >>> 11 | a << 5);
          c = 255 & e[14] | (255 & e[15]) << 8;
          this.r[8] = 8191 & (a >>> 8 | c << 8);
          this.r[9] = c >>> 5 & 127;
          this.pad[0] = 255 & e[16] | (255 & e[17]) << 8;
          this.pad[1] = 255 & e[18] | (255 & e[19]) << 8;
          this.pad[2] = 255 & e[20] | (255 & e[21]) << 8;
          this.pad[3] = 255 & e[22] | (255 & e[23]) << 8;
          this.pad[4] = 255 & e[24] | (255 & e[25]) << 8;
          this.pad[5] = 255 & e[26] | (255 & e[27]) << 8;
          this.pad[6] = 255 & e[28] | (255 & e[29]) << 8;
          this.pad[7] = 255 & e[30] | (255 & e[31]) << 8;
        };
        function S(e, t, n, r, o, i) {
          var s = new R(i);
          s.update(n, r, o);
          s.finish(e, t);
          return 0;
        }
        function T(e, t, n, r, o, i) {
          var s = new Uint8Array(16);
          S(s, 0, n, r, o, i);
          return g(e, t, s, 0, 16);
        }
        function P(e, t, n, r, o) {
          var i;
          if (n < 32) {
            return -1;
          }
          O(e, 0, t, 0, n, r, o);
          S(e, 16, e, 32, n - 32, e);
          for (i = 0; i < 16; i++) {
            e[i] = 0;
          }
          return 0;
        }
        function j(e, t, n, r, o) {
          var i;
          var s = new Uint8Array(32);
          if (n < 32) {
            return -1;
          }
          C(s, 0, 32, r, o);
          if (0 !== T(t, 16, t, 32, n - 32, s)) {
            return -1;
          }
          O(e, 0, t, 0, n, r, o);
          for (i = 0; i < 32; i++) {
            e[i] = 0;
          }
          return 0;
        }
        function N(e, t) {
          var n;
          for (n = 0; n < 16; n++) {
            e[n] = 0 | t[n];
          }
        }
        function A(e) {
          var t;
          var n;
          var r = 1;
          for (t = 0; t < 16; t++) {
            n = e[t] + r + 65535;
            r = Math.floor(n / 65536);
            e[t] = n - 65536 * r;
          }
          e[0] += r - 1 + 37 * (r - 1);
        }
        function U(e, t, n) {
          var r;
          var o = ~(n - 1);
          for (var i = 0; i < 16; i++) {
            r = o & (e[i] ^ t[i]);
            e[i] ^= r;
            t[i] ^= r;
          }
        }
        function I(e, n) {
          var r;
          var o;
          var i;
          var s = t();
          var a = t();
          for (r = 0; r < 16; r++) {
            a[r] = n[r];
          }
          A(a);
          A(a);
          A(a);
          for (o = 0; o < 2; o++) {
            s[0] = a[0] - 65517;
            for (r = 1; r < 15; r++) {
              s[r] = a[r] - 65535 - (s[r - 1] >> 16 & 1);
              s[r - 1] &= 65535;
            }
            s[15] = a[15] - 32767 - (s[14] >> 16 & 1);
            i = s[15] >> 16 & 1;
            s[14] &= 65535;
            U(a, s, 1 - i);
          }
          for (r = 0; r < 16; r++) {
            e[2 * r] = 255 & a[r];
            e[2 * r + 1] = a[r] >> 8;
          }
        }
        function M(e, t) {
          var n = new Uint8Array(32);
          var r = new Uint8Array(32);
          I(n, e);
          I(r, t);
          return g(n, 0, r, 0, 32);
        }
        function k(e) {
          var t = new Uint8Array(32);
          I(t, e);
          return 1 & t[0];
        }
        function W(e, t) {
          var n;
          for (n = 0; n < 16; n++) {
            e[n] = t[2 * n] + (t[2 * n + 1] << 8);
          }
          e[15] &= 32767;
        }
        function D(e, t, n) {
          for (var r = 0; r < 16; r++) {
            e[r] = t[r] + n[r];
          }
        }
        function x(e, t, n) {
          for (var r = 0; r < 16; r++) {
            e[r] = t[r] - n[r];
          }
        }
        function L(e, t, n) {
          var r;
          var o;
          var i = 0;
          var s = 0;
          var a = 0;
          var c = 0;
          var l = 0;
          var u = 0;
          var d = 0;
          var h = 0;
          var f = 0;
          var p = 0;
          var g = 0;
          var v = 0;
          var y = 0;
          var b = 0;
          var E = 0;
          var w = 0;
          var _ = 0;
          var m = 0;
          var C = 0;
          var O = 0;
          var R = 0;
          var S = 0;
          var T = 0;
          var P = 0;
          var j = 0;
          var N = 0;
          var A = 0;
          var U = 0;
          var I = 0;
          var M = 0;
          var k = 0;
          var W = n[0];
          var D = n[1];
          var x = n[2];
          var L = n[3];
          var B = n[4];
          var K = n[5];
          var q = n[6];
          var F = n[7];
          var G = n[8];
          var H = n[9];
          var V = n[10];
          var $ = n[11];
          var J = n[12];
          var Y = n[13];
          var z = n[14];
          var Q = n[15];
          i += (r = t[0]) * W;
          s += r * D;
          a += r * x;
          c += r * L;
          l += r * B;
          u += r * K;
          d += r * q;
          h += r * F;
          f += r * G;
          p += r * H;
          g += r * V;
          v += r * $;
          y += r * J;
          b += r * Y;
          E += r * z;
          w += r * Q;
          s += (r = t[1]) * W;
          a += r * D;
          c += r * x;
          l += r * L;
          u += r * B;
          d += r * K;
          h += r * q;
          f += r * F;
          p += r * G;
          g += r * H;
          v += r * V;
          y += r * $;
          b += r * J;
          E += r * Y;
          w += r * z;
          _ += r * Q;
          a += (r = t[2]) * W;
          c += r * D;
          l += r * x;
          u += r * L;
          d += r * B;
          h += r * K;
          f += r * q;
          p += r * F;
          g += r * G;
          v += r * H;
          y += r * V;
          b += r * $;
          E += r * J;
          w += r * Y;
          _ += r * z;
          m += r * Q;
          c += (r = t[3]) * W;
          l += r * D;
          u += r * x;
          d += r * L;
          h += r * B;
          f += r * K;
          p += r * q;
          g += r * F;
          v += r * G;
          y += r * H;
          b += r * V;
          E += r * $;
          w += r * J;
          _ += r * Y;
          m += r * z;
          C += r * Q;
          l += (r = t[4]) * W;
          u += r * D;
          d += r * x;
          h += r * L;
          f += r * B;
          p += r * K;
          g += r * q;
          v += r * F;
          y += r * G;
          b += r * H;
          E += r * V;
          w += r * $;
          _ += r * J;
          m += r * Y;
          C += r * z;
          O += r * Q;
          u += (r = t[5]) * W;
          d += r * D;
          h += r * x;
          f += r * L;
          p += r * B;
          g += r * K;
          v += r * q;
          y += r * F;
          b += r * G;
          E += r * H;
          w += r * V;
          _ += r * $;
          m += r * J;
          C += r * Y;
          O += r * z;
          R += r * Q;
          d += (r = t[6]) * W;
          h += r * D;
          f += r * x;
          p += r * L;
          g += r * B;
          v += r * K;
          y += r * q;
          b += r * F;
          E += r * G;
          w += r * H;
          _ += r * V;
          m += r * $;
          C += r * J;
          O += r * Y;
          R += r * z;
          S += r * Q;
          h += (r = t[7]) * W;
          f += r * D;
          p += r * x;
          g += r * L;
          v += r * B;
          y += r * K;
          b += r * q;
          E += r * F;
          w += r * G;
          _ += r * H;
          m += r * V;
          C += r * $;
          O += r * J;
          R += r * Y;
          S += r * z;
          T += r * Q;
          f += (r = t[8]) * W;
          p += r * D;
          g += r * x;
          v += r * L;
          y += r * B;
          b += r * K;
          E += r * q;
          w += r * F;
          _ += r * G;
          m += r * H;
          C += r * V;
          O += r * $;
          R += r * J;
          S += r * Y;
          T += r * z;
          P += r * Q;
          p += (r = t[9]) * W;
          g += r * D;
          v += r * x;
          y += r * L;
          b += r * B;
          E += r * K;
          w += r * q;
          _ += r * F;
          m += r * G;
          C += r * H;
          O += r * V;
          R += r * $;
          S += r * J;
          T += r * Y;
          P += r * z;
          j += r * Q;
          g += (r = t[10]) * W;
          v += r * D;
          y += r * x;
          b += r * L;
          E += r * B;
          w += r * K;
          _ += r * q;
          m += r * F;
          C += r * G;
          O += r * H;
          R += r * V;
          S += r * $;
          T += r * J;
          P += r * Y;
          j += r * z;
          N += r * Q;
          v += (r = t[11]) * W;
          y += r * D;
          b += r * x;
          E += r * L;
          w += r * B;
          _ += r * K;
          m += r * q;
          C += r * F;
          O += r * G;
          R += r * H;
          S += r * V;
          T += r * $;
          P += r * J;
          j += r * Y;
          N += r * z;
          A += r * Q;
          y += (r = t[12]) * W;
          b += r * D;
          E += r * x;
          w += r * L;
          _ += r * B;
          m += r * K;
          C += r * q;
          O += r * F;
          R += r * G;
          S += r * H;
          T += r * V;
          P += r * $;
          j += r * J;
          N += r * Y;
          A += r * z;
          U += r * Q;
          b += (r = t[13]) * W;
          E += r * D;
          w += r * x;
          _ += r * L;
          m += r * B;
          C += r * K;
          O += r * q;
          R += r * F;
          S += r * G;
          T += r * H;
          P += r * V;
          j += r * $;
          N += r * J;
          A += r * Y;
          U += r * z;
          I += r * Q;
          E += (r = t[14]) * W;
          w += r * D;
          _ += r * x;
          m += r * L;
          C += r * B;
          O += r * K;
          R += r * q;
          S += r * F;
          T += r * G;
          P += r * H;
          j += r * V;
          N += r * $;
          A += r * J;
          U += r * Y;
          I += r * z;
          M += r * Q;
          w += (r = t[15]) * W;
          s += 38 * (m += r * x);
          a += 38 * (C += r * L);
          c += 38 * (O += r * B);
          l += 38 * (R += r * K);
          u += 38 * (S += r * q);
          d += 38 * (T += r * F);
          h += 38 * (P += r * G);
          f += 38 * (j += r * H);
          p += 38 * (N += r * V);
          g += 38 * (A += r * $);
          v += 38 * (U += r * J);
          y += 38 * (I += r * Y);
          b += 38 * (M += r * z);
          E += 38 * (k += r * Q);
          i = (r = (i += 38 * (_ += r * D)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536));
          s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          a = (r = a + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          f = (r = f + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          E = (r = E + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          w = (r = w + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          i = (r = (i += o - 1 + 37 * (o - 1)) + (o = 1) + 65535) - 65536 * (o = Math.floor(r / 65536));
          s = (r = s + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          a = (r = a + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          c = (r = c + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          l = (r = l + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          u = (r = u + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          d = (r = d + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          h = (r = h + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          f = (r = f + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          p = (r = p + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          g = (r = g + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          v = (r = v + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          y = (r = y + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          b = (r = b + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          E = (r = E + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          w = (r = w + o + 65535) - 65536 * (o = Math.floor(r / 65536));
          i += o - 1 + 37 * (o - 1);
          e[0] = i;
          e[1] = s;
          e[2] = a;
          e[3] = c;
          e[4] = l;
          e[5] = u;
          e[6] = d;
          e[7] = h;
          e[8] = f;
          e[9] = p;
          e[10] = g;
          e[11] = v;
          e[12] = y;
          e[13] = b;
          e[14] = E;
          e[15] = w;
        }
        function B(e, t) {
          L(e, t, t);
        }
        function K(e, n) {
          var r;
          var o = t();
          for (r = 0; r < 16; r++) {
            o[r] = n[r];
          }
          for (r = 253; r >= 0; r--) {
            B(o, o);
            if (2 !== r && 4 !== r) {
              L(o, o, n);
            }
          }
          for (r = 0; r < 16; r++) {
            e[r] = o[r];
          }
        }
        function q(e, n) {
          var r;
          var o = t();
          for (r = 0; r < 16; r++) {
            o[r] = n[r];
          }
          for (r = 250; r >= 0; r--) {
            B(o, o);
            if (1 !== r) {
              L(o, o, n);
            }
          }
          for (r = 0; r < 16; r++) {
            e[r] = o[r];
          }
        }
        function F(e, n, r) {
          var o;
          var i;
          var s = new Uint8Array(32);
          var a = new Float64Array(80);
          var l = t();
          var u = t();
          var d = t();
          var h = t();
          var f = t();
          var p = t();
          for (i = 0; i < 31; i++) {
            s[i] = n[i];
          }
          s[31] = 127 & n[31] | 64;
          s[0] &= 248;
          W(a, r);
          for (i = 0; i < 16; i++) {
            u[i] = a[i];
            h[i] = l[i] = d[i] = 0;
          }
          l[0] = h[0] = 1;
          for (i = 254; i >= 0; --i) {
            U(l, u, o = s[i >>> 3] >>> (7 & i) & 1);
            U(d, h, o);
            D(f, l, d);
            x(l, l, d);
            D(d, u, h);
            x(u, u, h);
            B(h, f);
            B(p, l);
            L(l, d, l);
            L(d, u, f);
            D(f, l, d);
            x(l, l, d);
            B(u, l);
            x(d, h, p);
            L(l, d, c);
            D(l, l, h);
            L(d, d, l);
            L(l, h, p);
            L(h, u, a);
            B(u, f);
            U(l, u, o);
            U(d, h, o);
          }
          for (i = 0; i < 16; i++) {
            a[i + 16] = l[i];
            a[i + 32] = d[i];
            a[i + 48] = u[i];
            a[i + 64] = h[i];
          }
          var g = a.subarray(32);
          var v = a.subarray(16);
          K(g, g);
          L(v, v, g);
          I(e, v);
          return 0;
        }
        function G(e, t) {
          return F(e, t, i);
        }
        function H(e, t) {
          r(t, 32);
          return F(e, t, i);
        }
        function V(e, t, n) {
          var r = new Uint8Array(32);
          F(r, n, t);
          return E(e, o, r, w);
        }
        R.prototype.blocks = function (e, t, n) {
          var r;
          var o;
          var i;
          var s;
          var a;
          var c;
          var l;
          var u;
          var d;
          var h;
          var f;
          var p;
          var g;
          var v;
          var y;
          var b;
          var E;
          var w;
          var _;
          var m = this.fin ? 0 : 2048;
          var C = this.h[0];
          var O = this.h[1];
          var R = this.h[2];
          var S = this.h[3];
          var T = this.h[4];
          var P = this.h[5];
          var j = this.h[6];
          var N = this.h[7];
          var A = this.h[8];
          var U = this.h[9];
          var I = this.r[0];
          var M = this.r[1];
          var k = this.r[2];
          var W = this.r[3];
          var D = this.r[4];
          var x = this.r[5];
          var L = this.r[6];
          var B = this.r[7];
          var K = this.r[8];
          for (var q = this.r[9]; n >= 16;) {
            h = d = 0;
            h += (C += 8191 & (r = 255 & e[t + 0] | (255 & e[t + 1]) << 8)) * I;
            h += (O += 8191 & (r >>> 13 | (o = 255 & e[t + 2] | (255 & e[t + 3]) << 8) << 3)) * (5 * q);
            h += (R += 8191 & (o >>> 10 | (i = 255 & e[t + 4] | (255 & e[t + 5]) << 8) << 6)) * (5 * K);
            h += (S += 8191 & (i >>> 7 | (s = 255 & e[t + 6] | (255 & e[t + 7]) << 8) << 9)) * (5 * B);
            d = (h += (T += 8191 & (s >>> 4 | (a = 255 & e[t + 8] | (255 & e[t + 9]) << 8) << 12)) * (5 * L)) >>> 13;
            h &= 8191;
            h += (P += a >>> 1 & 8191) * (5 * x);
            h += (j += 8191 & (a >>> 14 | (c = 255 & e[t + 10] | (255 & e[t + 11]) << 8) << 2)) * (5 * D);
            h += (N += 8191 & (c >>> 11 | (l = 255 & e[t + 12] | (255 & e[t + 13]) << 8) << 5)) * (5 * W);
            h += (A += 8191 & (l >>> 8 | (u = 255 & e[t + 14] | (255 & e[t + 15]) << 8) << 8)) * (5 * k);
            f = d += (h += (U += u >>> 5 | m) * (5 * M)) >>> 13;
            f += C * M;
            f += O * I;
            f += R * (5 * q);
            f += S * (5 * K);
            d = (f += T * (5 * B)) >>> 13;
            f &= 8191;
            f += P * (5 * L);
            f += j * (5 * x);
            f += N * (5 * D);
            f += A * (5 * W);
            d += (f += U * (5 * k)) >>> 13;
            f &= 8191;
            p = d;
            p += C * k;
            p += O * M;
            p += R * I;
            p += S * (5 * q);
            d = (p += T * (5 * K)) >>> 13;
            p &= 8191;
            p += P * (5 * B);
            p += j * (5 * L);
            p += N * (5 * x);
            p += A * (5 * D);
            g = d += (p += U * (5 * W)) >>> 13;
            g += C * W;
            g += O * k;
            g += R * M;
            g += S * I;
            d = (g += T * (5 * q)) >>> 13;
            g &= 8191;
            g += P * (5 * K);
            g += j * (5 * B);
            g += N * (5 * L);
            g += A * (5 * x);
            v = d += (g += U * (5 * D)) >>> 13;
            v += C * D;
            v += O * W;
            v += R * k;
            v += S * M;
            d = (v += T * I) >>> 13;
            v &= 8191;
            v += P * (5 * q);
            v += j * (5 * K);
            v += N * (5 * B);
            v += A * (5 * L);
            y = d += (v += U * (5 * x)) >>> 13;
            y += C * x;
            y += O * D;
            y += R * W;
            y += S * k;
            d = (y += T * M) >>> 13;
            y &= 8191;
            y += P * I;
            y += j * (5 * q);
            y += N * (5 * K);
            y += A * (5 * B);
            b = d += (y += U * (5 * L)) >>> 13;
            b += C * L;
            b += O * x;
            b += R * D;
            b += S * W;
            d = (b += T * k) >>> 13;
            b &= 8191;
            b += P * M;
            b += j * I;
            b += N * (5 * q);
            b += A * (5 * K);
            E = d += (b += U * (5 * B)) >>> 13;
            E += C * B;
            E += O * L;
            E += R * x;
            E += S * D;
            d = (E += T * W) >>> 13;
            E &= 8191;
            E += P * k;
            E += j * M;
            E += N * I;
            E += A * (5 * q);
            w = d += (E += U * (5 * K)) >>> 13;
            w += C * K;
            w += O * B;
            w += R * L;
            w += S * x;
            d = (w += T * D) >>> 13;
            w &= 8191;
            w += P * W;
            w += j * k;
            w += N * M;
            w += A * I;
            _ = d += (w += U * (5 * q)) >>> 13;
            _ += C * q;
            _ += O * K;
            _ += R * B;
            _ += S * L;
            d = (_ += T * x) >>> 13;
            _ &= 8191;
            _ += P * D;
            _ += j * W;
            _ += N * k;
            _ += A * M;
            C = h = 8191 & (d = (d = ((d += (_ += U * I) >>> 13) << 2) + d | 0) + (h &= 8191) | 0);
            O = f += d >>>= 13;
            R = p &= 8191;
            S = g &= 8191;
            T = v &= 8191;
            P = y &= 8191;
            j = b &= 8191;
            N = E &= 8191;
            A = w &= 8191;
            U = _ &= 8191;
            t += 16;
            n -= 16;
          }
          this.h[0] = C;
          this.h[1] = O;
          this.h[2] = R;
          this.h[3] = S;
          this.h[4] = T;
          this.h[5] = P;
          this.h[6] = j;
          this.h[7] = N;
          this.h[8] = A;
          this.h[9] = U;
        };
        R.prototype.finish = function (e, t) {
          var n;
          var r;
          var o;
          var i;
          var s = new Uint16Array(10);
          if (this.leftover) {
            i = this.leftover;
            for (this.buffer[i++] = 1; i < 16; i++) {
              this.buffer[i] = 0;
            }
            this.fin = 1;
            this.blocks(this.buffer, 0, 16);
          }
          n = this.h[1] >>> 13;
          this.h[1] &= 8191;
          for (i = 2; i < 10; i++) {
            this.h[i] += n;
            n = this.h[i] >>> 13;
            this.h[i] &= 8191;
          }
          this.h[0] += 5 * n;
          n = this.h[0] >>> 13;
          this.h[0] &= 8191;
          this.h[1] += n;
          n = this.h[1] >>> 13;
          this.h[1] &= 8191;
          this.h[2] += n;
          s[0] = this.h[0] + 5;
          n = s[0] >>> 13;
          s[0] &= 8191;
          for (i = 1; i < 10; i++) {
            s[i] = this.h[i] + n;
            n = s[i] >>> 13;
            s[i] &= 8191;
          }
          s[9] -= 8192;
          r = (1 ^ n) - 1;
          for (i = 0; i < 10; i++) {
            s[i] &= r;
          }
          r = ~r;
          for (i = 0; i < 10; i++) {
            this.h[i] = this.h[i] & r | s[i];
          }
          this.h[0] = 65535 & (this.h[0] | this.h[1] << 13);
          this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10);
          this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7);
          this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4);
          this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14);
          this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11);
          this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8);
          this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5);
          o = this.h[0] + this.pad[0];
          this.h[0] = 65535 & o;
          for (i = 1; i < 8; i++) {
            o = (this.h[i] + this.pad[i] | 0) + (o >>> 16) | 0;
            this.h[i] = 65535 & o;
          }
          e[t + 0] = this.h[0] >>> 0 & 255;
          e[t + 1] = this.h[0] >>> 8 & 255;
          e[t + 2] = this.h[1] >>> 0 & 255;
          e[t + 3] = this.h[1] >>> 8 & 255;
          e[t + 4] = this.h[2] >>> 0 & 255;
          e[t + 5] = this.h[2] >>> 8 & 255;
          e[t + 6] = this.h[3] >>> 0 & 255;
          e[t + 7] = this.h[3] >>> 8 & 255;
          e[t + 8] = this.h[4] >>> 0 & 255;
          e[t + 9] = this.h[4] >>> 8 & 255;
          e[t + 10] = this.h[5] >>> 0 & 255;
          e[t + 11] = this.h[5] >>> 8 & 255;
          e[t + 12] = this.h[6] >>> 0 & 255;
          e[t + 13] = this.h[6] >>> 8 & 255;
          e[t + 14] = this.h[7] >>> 0 & 255;
          e[t + 15] = this.h[7] >>> 8 & 255;
        };
        R.prototype.update = function (e, t, n) {
          var r;
          var o;
          if (this.leftover) {
            if ((o = 16 - this.leftover) > n) {
              o = n;
            }
            for (r = 0; r < o; r++) {
              this.buffer[this.leftover + r] = e[t + r];
            }
            n -= o;
            t += o;
            this.leftover += o;
            if (this.leftover < 16) {
              return;
            }
            this.blocks(this.buffer, 0, 16);
            this.leftover = 0;
          }
          if (n >= 16) {
            o = n - n % 16;
            this.blocks(e, t, o);
            t += o;
            n -= o;
          }
          if (n) {
            for (r = 0; r < n; r++) {
              this.buffer[this.leftover + r] = e[t + r];
            }
            this.leftover += n;
          }
        };
        var Y = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];
        function z(e, t, n, r) {
          var o;
          var i;
          var s;
          var a;
          var c;
          var l;
          var u;
          var d;
          var h;
          var f;
          var p;
          var g;
          var v;
          var y;
          var b;
          var E;
          var w;
          var _;
          var m;
          var C;
          var O;
          var R;
          var S;
          var T;
          var P;
          var j;
          var N = new Int32Array(16);
          var A = new Int32Array(16);
          var U = e[0];
          var I = e[1];
          var M = e[2];
          var k = e[3];
          var W = e[4];
          var D = e[5];
          var x = e[6];
          var L = e[7];
          var B = t[0];
          var K = t[1];
          var q = t[2];
          var F = t[3];
          var G = t[4];
          var H = t[5];
          var V = t[6];
          var $ = t[7];
          for (var J = 0; r >= 128;) {
            for (m = 0; m < 16; m++) {
              C = 8 * m + J;
              N[m] = n[C + 0] << 24 | n[C + 1] << 16 | n[C + 2] << 8 | n[C + 3];
              A[m] = n[C + 4] << 24 | n[C + 5] << 16 | n[C + 6] << 8 | n[C + 7];
            }
            for (m = 0; m < 80; m++) {
              o = U;
              i = I;
              s = M;
              a = k;
              c = W;
              l = D;
              u = x;
              h = B;
              f = K;
              p = q;
              g = F;
              v = G;
              y = H;
              b = V;
              S = 65535 & (R = $);
              T = R >>> 16;
              P = 65535 & (O = L);
              j = O >>> 16;
              S += 65535 & (R = (G >>> 14 | W << 18) ^ (G >>> 18 | W << 14) ^ (W >>> 9 | G << 23));
              T += R >>> 16;
              P += 65535 & (O = (W >>> 14 | G << 18) ^ (W >>> 18 | G << 14) ^ (G >>> 9 | W << 23));
              j += O >>> 16;
              S += 65535 & (R = G & H ^ ~G & V);
              T += R >>> 16;
              P += 65535 & (O = W & D ^ ~W & x);
              j += O >>> 16;
              O = Y[2 * m];
              S += 65535 & (R = Y[2 * m + 1]);
              T += R >>> 16;
              P += 65535 & O;
              j += O >>> 16;
              O = N[m % 16];
              T += (R = A[m % 16]) >>> 16;
              P += 65535 & O;
              j += O >>> 16;
              P += (T += (S += 65535 & R) >>> 16) >>> 16;
              S = 65535 & (R = _ = 65535 & S | T << 16);
              T = R >>> 16;
              P = 65535 & (O = w = 65535 & P | (j += P >>> 16) << 16);
              j = O >>> 16;
              S += 65535 & (R = (B >>> 28 | U << 4) ^ (U >>> 2 | B << 30) ^ (U >>> 7 | B << 25));
              T += R >>> 16;
              P += 65535 & (O = (U >>> 28 | B << 4) ^ (B >>> 2 | U << 30) ^ (B >>> 7 | U << 25));
              j += O >>> 16;
              T += (R = B & K ^ B & q ^ K & q) >>> 16;
              P += 65535 & (O = U & I ^ U & M ^ I & M);
              j += O >>> 16;
              d = 65535 & (P += (T += (S += 65535 & R) >>> 16) >>> 16) | (j += P >>> 16) << 16;
              E = 65535 & S | T << 16;
              S = 65535 & (R = g);
              T = R >>> 16;
              P = 65535 & (O = a);
              j = O >>> 16;
              T += (R = _) >>> 16;
              P += 65535 & (O = w);
              j += O >>> 16;
              I = o;
              M = i;
              k = s;
              W = a = 65535 & (P += (T += (S += 65535 & R) >>> 16) >>> 16) | (j += P >>> 16) << 16;
              D = c;
              x = l;
              L = u;
              U = d;
              K = h;
              q = f;
              F = p;
              G = g = 65535 & S | T << 16;
              H = v;
              V = y;
              $ = b;
              B = E;
              if (m % 16 == 15) {
                for (C = 0; C < 16; C++) {
                  O = N[C];
                  S = 65535 & (R = A[C]);
                  T = R >>> 16;
                  P = 65535 & O;
                  j = O >>> 16;
                  O = N[(C + 9) % 16];
                  S += 65535 & (R = A[(C + 9) % 16]);
                  T += R >>> 16;
                  P += 65535 & O;
                  j += O >>> 16;
                  w = N[(C + 1) % 16];
                  S += 65535 & (R = ((_ = A[(C + 1) % 16]) >>> 1 | w << 31) ^ (_ >>> 8 | w << 24) ^ (_ >>> 7 | w << 25));
                  T += R >>> 16;
                  P += 65535 & (O = (w >>> 1 | _ << 31) ^ (w >>> 8 | _ << 24) ^ w >>> 7);
                  j += O >>> 16;
                  w = N[(C + 14) % 16];
                  T += (R = ((_ = A[(C + 14) % 16]) >>> 19 | w << 13) ^ (w >>> 29 | _ << 3) ^ (_ >>> 6 | w << 26)) >>> 16;
                  P += 65535 & (O = (w >>> 19 | _ << 13) ^ (_ >>> 29 | w << 3) ^ w >>> 6);
                  j += O >>> 16;
                  j += (P += (T += (S += 65535 & R) >>> 16) >>> 16) >>> 16;
                  N[C] = 65535 & P | j << 16;
                  A[C] = 65535 & S | T << 16;
                }
              }
            }
            S = 65535 & (R = B);
            T = R >>> 16;
            P = 65535 & (O = U);
            j = O >>> 16;
            O = e[0];
            T += (R = t[0]) >>> 16;
            P += 65535 & O;
            j += O >>> 16;
            j += (P += (T += (S += 65535 & R) >>> 16) >>> 16) >>> 16;
            e[0] = U = 65535 & P | j << 16;
            t[0] = B = 65535 & S | T << 16;
            S = 65535 & (R = K);
            T = R >>> 16;
            P = 65535 & (O = I);
            j = O >>> 16;
            O = e[1];
            T += (R = t[1]) >>> 16;
            P += 65535 & O;
            j += O >>> 16;
            j += (P += (T += (S += 65535 & R) >>> 16) >>> 16) >>> 16;
            e[1] = I = 65535 & P | j << 16;
            t[1] = K = 65535 & S | T << 16;
            S = 65535 & (R = q);
            T = R >>> 16;
            P = 65535 & (O = M);
            j = O >>> 16;
            O = e[2];
            T += (R = t[2]) >>> 16;
            P += 65535 & O;
            j += O >>> 16;
            j += (P += (T += (S += 65535 & R) >>> 16) >>> 16) >>> 16;
            e[2] = M = 65535 & P | j << 16;
            t[2] = q = 65535 & S | T << 16;
            S = 65535 & (R = F);
            T = R >>> 16;
            P = 65535 & (O = k);
            j = O >>> 16;
            O = e[3];
            T += (R = t[3]) >>> 16;
            P += 65535 & O;
            j += O >>> 16;
            j += (P += (T += (S += 65535 & R) >>> 16) >>> 16) >>> 16;
            e[3] = k = 65535 & P | j << 16;
            t[3] = F = 65535 & S | T << 16;
            S = 65535 & (R = G);
            T = R >>> 16;
            P = 65535 & (O = W);
            j = O >>> 16;
            O = e[4];
            T += (R = t[4]) >>> 16;
            P += 65535 & O;
            j += O >>> 16;
            j += (P += (T += (S += 65535 & R) >>> 16) >>> 16) >>> 16;
            e[4] = W = 65535 & P | j << 16;
            t[4] = G = 65535 & S | T << 16;
            S = 65535 & (R = H);
            T = R >>> 16;
            P = 65535 & (O = D);
            j = O >>> 16;
            O = e[5];
            T += (R = t[5]) >>> 16;
            P += 65535 & O;
            j += O >>> 16;
            j += (P += (T += (S += 65535 & R) >>> 16) >>> 16) >>> 16;
            e[5] = D = 65535 & P | j << 16;
            t[5] = H = 65535 & S | T << 16;
            S = 65535 & (R = V);
            T = R >>> 16;
            P = 65535 & (O = x);
            j = O >>> 16;
            O = e[6];
            T += (R = t[6]) >>> 16;
            P += 65535 & O;
            j += O >>> 16;
            j += (P += (T += (S += 65535 & R) >>> 16) >>> 16) >>> 16;
            e[6] = x = 65535 & P | j << 16;
            t[6] = V = 65535 & S | T << 16;
            S = 65535 & (R = $);
            T = R >>> 16;
            P = 65535 & (O = L);
            j = O >>> 16;
            O = e[7];
            T += (R = t[7]) >>> 16;
            P += 65535 & O;
            j += O >>> 16;
            j += (P += (T += (S += 65535 & R) >>> 16) >>> 16) >>> 16;
            e[7] = L = 65535 & P | j << 16;
            t[7] = $ = 65535 & S | T << 16;
            J += 128;
            r -= 128;
          }
          return r;
        }
        function Q(e, t, n) {
          var r;
          var o = new Int32Array(8);
          var i = new Int32Array(8);
          var s = new Uint8Array(256);
          var a = n;
          o[0] = 1779033703;
          o[1] = 3144134277;
          o[2] = 1013904242;
          o[3] = 2773480762;
          o[4] = 1359893119;
          o[5] = 2600822924;
          o[6] = 528734635;
          o[7] = 1541459225;
          i[0] = 4089235720;
          i[1] = 2227873595;
          i[2] = 4271175723;
          i[3] = 1595750129;
          i[4] = 2917565137;
          i[5] = 725511199;
          i[6] = 4215389547;
          i[7] = 327033209;
          z(o, i, t, n);
          n %= 128;
          for (r = 0; r < n; r++) {
            s[r] = t[a - n + r];
          }
          s[n] = 128;
          s[(n = 256 - 128 * (n < 112 ? 1 : 0)) - 9] = 0;
          p(s, n - 8, a / 536870912 | 0, a << 3);
          z(o, i, s, n);
          for (r = 0; r < 8; r++) {
            p(e, 8 * r, o[r], i[r]);
          }
          return 0;
        }
        function X(e, n) {
          var r = t();
          var o = t();
          var i = t();
          var s = t();
          var a = t();
          var c = t();
          var l = t();
          var d = t();
          var h = t();
          x(r, e[1], e[0]);
          x(h, n[1], n[0]);
          L(r, r, h);
          D(o, e[0], e[1]);
          D(h, n[0], n[1]);
          L(o, o, h);
          L(i, e[3], n[3]);
          L(i, i, u);
          L(s, e[2], n[2]);
          D(s, s, s);
          x(a, o, r);
          x(c, s, i);
          D(l, s, i);
          D(d, o, r);
          L(e[0], a, c);
          L(e[1], d, l);
          L(e[2], l, c);
          L(e[3], a, d);
        }
        function Z(e, t, n) {
          var r;
          for (r = 0; r < 4; r++) {
            U(e[r], t[r], n);
          }
        }
        function ee(e, n) {
          var r = t();
          var o = t();
          var i = t();
          K(i, n[2]);
          L(r, n[0], i);
          L(o, n[1], i);
          I(e, o);
          e[31] ^= k(r) << 7;
        }
        function te(e, t, n) {
          var r;
          var o;
          N(e[0], s);
          N(e[1], a);
          N(e[2], a);
          N(e[3], s);
          for (o = 255; o >= 0; --o) {
            Z(e, t, r = n[o / 8 | 0] >> (7 & o) & 1);
            X(t, e);
            X(e, e);
            Z(e, t, r);
          }
        }
        function ne(e, n) {
          var r = [t(), t(), t(), t()];
          N(r[0], d);
          N(r[1], h);
          N(r[2], a);
          L(r[3], d, h);
          te(e, r, n);
        }
        function re(e, n, o) {
          var i;
          var s = new Uint8Array(64);
          var a = [t(), t(), t(), t()];
          if (!o) {
            r(n, 32);
          }
          Q(s, n, 32);
          s[0] &= 248;
          s[31] &= 127;
          s[31] |= 64;
          ne(a, s);
          ee(e, a);
          for (i = 0; i < 32; i++) {
            n[i + 32] = e[i];
          }
          return 0;
        }
        var oe = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
        function ie(e, t) {
          var n;
          var r;
          var o;
          var i;
          for (r = 63; r >= 32; --r) {
            n = 0;
            o = r - 32;
            for (i = r - 12; o < i; ++o) {
              t[o] += n - 16 * t[r] * oe[o - (r - 32)];
              n = Math.floor((t[o] + 128) / 256);
              t[o] -= 256 * n;
            }
            t[o] += n;
            t[r] = 0;
          }
          n = 0;
          for (o = 0; o < 32; o++) {
            t[o] += n - (t[31] >> 4) * oe[o];
            n = t[o] >> 8;
            t[o] &= 255;
          }
          for (o = 0; o < 32; o++) {
            t[o] -= n * oe[o];
          }
          for (r = 0; r < 32; r++) {
            t[r + 1] += t[r] >> 8;
            e[r] = 255 & t[r];
          }
        }
        function se(e) {
          var t;
          var n = new Float64Array(64);
          for (t = 0; t < 64; t++) {
            n[t] = e[t];
          }
          for (t = 0; t < 64; t++) {
            e[t] = 0;
          }
          ie(e, n);
        }
        function ae(e, n, r, o) {
          var i;
          var s;
          var a = new Uint8Array(64);
          var c = new Uint8Array(64);
          var l = new Uint8Array(64);
          var u = new Float64Array(64);
          var d = [t(), t(), t(), t()];
          Q(a, o, 32);
          a[0] &= 248;
          a[31] &= 127;
          a[31] |= 64;
          var h = r + 64;
          for (i = 0; i < r; i++) {
            e[64 + i] = n[i];
          }
          for (i = 0; i < 32; i++) {
            e[32 + i] = a[32 + i];
          }
          Q(l, e.subarray(32), r + 32);
          se(l);
          ne(d, l);
          ee(e, d);
          for (i = 32; i < 64; i++) {
            e[i] = o[i];
          }
          Q(c, e, r + 64);
          se(c);
          for (i = 0; i < 64; i++) {
            u[i] = 0;
          }
          for (i = 0; i < 32; i++) {
            u[i] = l[i];
          }
          for (i = 0; i < 32; i++) {
            for (s = 0; s < 32; s++) {
              u[i + s] += c[i] * a[s];
            }
          }
          ie(e.subarray(32), u);
          return h;
        }
        function ce(e, n, r, o) {
          var i;
          var c = new Uint8Array(32);
          var u = new Uint8Array(64);
          var d = [t(), t(), t(), t()];
          var h = [t(), t(), t(), t()];
          if (r < 64) {
            return -1;
          }
          if (function (e, n) {
            var r = t();
            var o = t();
            var i = t();
            var c = t();
            var u = t();
            var d = t();
            var h = t();
            N(e[2], a);
            W(e[1], n);
            B(i, e[1]);
            L(c, i, l);
            x(i, i, e[2]);
            D(c, e[2], c);
            B(u, c);
            B(d, u);
            L(h, d, u);
            L(r, h, i);
            L(r, r, c);
            q(r, r);
            L(r, r, i);
            L(r, r, c);
            L(r, r, c);
            L(e[0], r, c);
            B(o, e[0]);
            L(o, o, c);
            if (M(o, i)) {
              L(e[0], e[0], f);
            }
            B(o, e[0]);
            L(o, o, c);
            return M(o, i) ? -1 : (k(e[0]) === n[31] >> 7 && x(e[0], s, e[0]), L(e[3], e[0], e[1]), 0);
          }(h, o)) {
            return -1;
          }
          for (i = 0; i < r; i++) {
            e[i] = n[i];
          }
          for (i = 0; i < 32; i++) {
            e[i + 32] = o[i];
          }
          Q(u, e, r);
          se(u);
          te(d, h, u);
          ne(h, n.subarray(32));
          X(d, h);
          ee(c, d);
          r -= 64;
          if (g(n, 0, c, 0, 32)) {
            for (i = 0; i < r; i++) {
              e[i] = 0;
            }
            return -1;
          }
          for (i = 0; i < r; i++) {
            e[i] = n[i + 64];
          }
          return r;
        }
        var le;
        function ve(e, t) {
          if (e.length !== 32) {
            throw new Error("bad key size");
          }
          if (t.length !== 24) {
            throw new Error("bad nonce size");
          }
        }
        function ye() {
          for (var e = 0; e < arguments.length; e++) {
            if (!(arguments[e] instanceof Uint8Array)) {
              throw new TypeError("unexpected type, use Uint8Array");
            }
          }
        }
        function be(e) {
          for (var t = 0; t < e.length; t++) {
            e[t] = 0;
          }
        }
        e.lowlevel = {
          crypto_core_hsalsa20: E,
          crypto_stream_xor: O,
          crypto_stream: C,
          crypto_stream_salsa20_xor: _,
          crypto_stream_salsa20: m,
          crypto_onetimeauth: S,
          crypto_onetimeauth_verify: T,
          crypto_verify_16: v,
          crypto_verify_32: y,
          crypto_secretbox: P,
          crypto_secretbox_open: j,
          crypto_scalarmult: F,
          crypto_scalarmult_base: G,
          crypto_box_beforenm: V,
          crypto_box_afternm: P,
          crypto_box: function (e, t, n, r, o, i) {
            var s = new Uint8Array(32);
            V(s, o, i);
            return P(e, t, n, r, s);
          },
          crypto_box_open: function (e, t, n, r, o, i) {
            var s = new Uint8Array(32);
            V(s, o, i);
            return j(e, t, n, r, s);
          },
          crypto_box_keypair: H,
          crypto_hash: Q,
          crypto_sign: ae,
          crypto_sign_keypair: re,
          crypto_sign_open: ce,
          crypto_secretbox_KEYBYTES: 32,
          crypto_secretbox_NONCEBYTES: 24,
          crypto_secretbox_ZEROBYTES: 32,
          crypto_secretbox_BOXZEROBYTES: 16,
          crypto_scalarmult_BYTES: 32,
          crypto_scalarmult_SCALARBYTES: 32,
          crypto_box_PUBLICKEYBYTES: 32,
          crypto_box_SECRETKEYBYTES: 32,
          crypto_box_BEFORENMBYTES: 32,
          crypto_box_NONCEBYTES: 24,
          crypto_box_ZEROBYTES: 32,
          crypto_box_BOXZEROBYTES: 16,
          crypto_sign_BYTES: 64,
          crypto_sign_PUBLICKEYBYTES: 32,
          crypto_sign_SECRETKEYBYTES: 64,
          crypto_sign_SEEDBYTES: 32,
          crypto_hash_BYTES: 64,
          gf: t,
          D: l,
          L: oe,
          pack25519: I,
          unpack25519: W,
          M: L,
          A: D,
          S: B,
          Z: x,
          pow2523: q,
          add: X,
          set25519: N,
          modL: ie,
          scalarmult: te,
          scalarbase: ne
        };
        e.randomBytes = function (e) {
          var t = new Uint8Array(e);
          r(t, e);
          return t;
        };
        e.secretbox = function (e, t, n) {
          ye(e, t, n);
          ve(n, t);
          var r = new Uint8Array(32 + e.length);
          var o = new Uint8Array(r.length);
          for (var i = 0; i < e.length; i++) {
            r[i + 32] = e[i];
          }
          P(o, r, r.length, t, n);
          return o.subarray(16);
        };
        e.secretbox.open = function (e, t, n) {
          ye(e, t, n);
          ve(n, t);
          var r = new Uint8Array(16 + e.length);
          var o = new Uint8Array(r.length);
          for (var i = 0; i < e.length; i++) {
            r[i + 16] = e[i];
          }
          return r.length < 32 || 0 !== j(o, r, r.length, t, n) ? null : o.subarray(32);
        };
        e.secretbox.keyLength = 32;
        e.secretbox.nonceLength = 24;
        e.secretbox.overheadLength = 16;
        e.scalarMult = function (e, t) {
          ye(e, t);
          if (32 !== e.length) {
            throw new Error("bad n size");
          }
          if (32 !== t.length) {
            throw new Error("bad p size");
          }
          var n = new Uint8Array(32);
          F(n, e, t);
          return n;
        };
        e.scalarMult.base = function (e) {
          ye(e);
          if (32 !== e.length) {
            throw new Error("bad n size");
          }
          var t = new Uint8Array(32);
          F(t, e, i);
          return t;
        };
        e.scalarMult.scalarLength = 32;
        e.scalarMult.groupElementLength = 32;
        e.box = function (t, n, r, o) {
          var i = e.box.before(r, o);
          return e.secretbox(t, n, i);
        };
        e.box.before = function (e, t) {
          ye(e, t);
          (function (e, t) {
            if (32 !== e.length) {
              throw new Error("bad public key size");
            }
            if (32 !== t.length) {
              throw new Error("bad secret key size");
            }
          })(e, t);
          var n = new Uint8Array(32);
          V(n, e, t);
          return n;
        };
        e.box.after = e.secretbox;
        e.box.open = function (t, n, r, o) {
          var i = e.box.before(r, o);
          return e.secretbox.open(t, n, i);
        };
        e.box.open.after = e.secretbox.open;
        e.box.keyPair = function () {
          var e = new Uint8Array(32);
          var t = new Uint8Array(32);
          H(e, t);
          return {
            publicKey: e,
            secretKey: t
          };
        };
        e.box.keyPair.fromSecretKey = function (e) {
          ye(e);
          if (32 !== e.length) {
            throw new Error("bad secret key size");
          }
          var t = new Uint8Array(32);
          F(t, e, i);
          return {
            publicKey: t,
            secretKey: new Uint8Array(e)
          };
        };
        e.box.publicKeyLength = 32;
        e.box.secretKeyLength = 32;
        e.box.sharedKeyLength = 32;
        e.box.nonceLength = 24;
        e.box.overheadLength = e.secretbox.overheadLength;
        e.sign = function (e, t) {
          ye(e, t);
          if (t.length !== 64) {
            throw new Error("bad secret key size");
          }
          var n = new Uint8Array(64 + e.length);
          ae(n, e, e.length, t);
          return n;
        };
        e.sign.open = function (e, t) {
          ye(e, t);
          if (t.length !== 32) {
            throw new Error("bad public key size");
          }
          var n = new Uint8Array(e.length);
          var r = ce(n, e, e.length, t);
          if (r < 0) {
            return null;
          }
          var o = new Uint8Array(r);
          for (var i = 0; i < o.length; i++) {
            o[i] = n[i];
          }
          return o;
        };
        e.sign.detached = function (t, n) {
          var r = e.sign(t, n);
          var o = new Uint8Array(64);
          for (var i = 0; i < o.length; i++) {
            o[i] = r[i];
          }
          return o;
        };
        e.sign.detached.verify = function (e, t, n) {
          ye(e, t, n);
          if (t.length !== 64) {
            throw new Error("bad signature size");
          }
          if (n.length !== 32) {
            throw new Error("bad public key size");
          }
          var r;
          var o = new Uint8Array(64 + e.length);
          var i = new Uint8Array(64 + e.length);
          for (r = 0; r < 64; r++) {
            o[r] = t[r];
          }
          for (r = 0; r < e.length; r++) {
            o[r + 64] = e[r];
          }
          return ce(i, o, o.length, n) >= 0;
        };
        e.sign.keyPair = function () {
          var e = new Uint8Array(32);
          var t = new Uint8Array(64);
          re(e, t);
          return {
            publicKey: e,
            secretKey: t
          };
        };
        e.sign.keyPair.fromSecretKey = function (e) {
          ye(e);
          if (e.length !== 64) {
            throw new Error("bad secret key size");
          }
          var t = new Uint8Array(32);
          for (var n = 0; n < t.length; n++) {
            t[n] = e[32 + n];
          }
          return {
            publicKey: t,
            secretKey: new Uint8Array(e)
          };
        };
        e.sign.keyPair.fromSeed = function (e) {
          ye(e);
          if (32 !== e.length) {
            throw new Error("bad seed size");
          }
          var t = new Uint8Array(32);
          var n = new Uint8Array(64);
          for (var r = 0; r < 32; r++) {
            n[r] = e[r];
          }
          re(t, n, true);
          return {
            publicKey: t,
            secretKey: n
          };
        };
        e.sign.publicKeyLength = 32;
        e.sign.secretKeyLength = 64;
        e.sign.seedLength = 32;
        e.sign.signatureLength = 64;
        e.hash = function (e) {
          ye(e);
          var t = new Uint8Array(64);
          Q(t, e, e.length);
          return t;
        };
        e.hash.hashLength = 64;
        e.verify = function (e, t) {
          ye(e, t);
          return 0 !== e.length && 0 !== t.length && e.length === t.length && 0 === g(e, 0, t, 0, e.length);
        };
        e.setPRNG = function (e) {
          r = e;
        };
        if ((le = "undefined" != typeof self ? self.crypto || self.msCrypto : null) && le.getRandomValues) {
          e.setPRNG(function (e, t) {
            var n;
            var r = new Uint8Array(t);
            for (n = 0; n < t; n += 65536) {
              le.getRandomValues(r.subarray(n, n + Math.min(t - n, 65536)));
            }
            for (n = 0; n < t; n++) {
              e[n] = r[n];
            }
            be(r);
          });
        } else if ((le = n(5338)) && le.randomBytes) {
          e.setPRNG(function (e, t) {
            var n;
            var r = le.randomBytes(t);
            for (n = 0; n < t; n++) {
              e[n] = r[n];
            }
            be(r);
          });
        }
      }(e.exports ? e.exports : self.nacl = self.nacl || {});
    },
    618: () => {},
    3783: () => {},
    5338: () => {},
    9461: (e, t, n) => {
      "use strict";

      var r;
      var o;
      var i;
      var s;
      var a;
      var c;
      var l = n(251);
      var u = n(717);
      t.CONNECT_EVENT_ERROR_CODES = undefined;
      (r = t.CONNECT_EVENT_ERROR_CODES || (t.CONNECT_EVENT_ERROR_CODES = {}))[r.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR";
      r[r.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR";
      r[r.MANIFEST_NOT_FOUND_ERROR = 2] = "MANIFEST_NOT_FOUND_ERROR";
      r[r.MANIFEST_CONTENT_ERROR = 3] = "MANIFEST_CONTENT_ERROR";
      r[r.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR";
      r[r.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR";
      r[r.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED";
      t.CONNECT_ITEM_ERROR_CODES = undefined;
      (o = t.CONNECT_ITEM_ERROR_CODES || (t.CONNECT_ITEM_ERROR_CODES = {}))[o.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR";
      o[o.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED";
      t.SEND_TRANSACTION_ERROR_CODES = undefined;
      (i = t.SEND_TRANSACTION_ERROR_CODES || (t.SEND_TRANSACTION_ERROR_CODES = {}))[i.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR";
      i[i.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR";
      i[i.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR";
      i[i.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR";
      i[i.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED";
      t.SIGN_DATA_ERROR_CODES = undefined;
      (s = t.SIGN_DATA_ERROR_CODES || (t.SIGN_DATA_ERROR_CODES = {}))[s.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR";
      s[s.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR";
      s[s.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR";
      s[s.USER_REJECTS_ERROR = 300] = "USER_REJECTS_ERROR";
      s[s.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED";
      t.DISCONNECT_ERROR_CODES = undefined;
      (a = t.DISCONNECT_ERROR_CODES || (t.DISCONNECT_ERROR_CODES = {}))[a.UNKNOWN_ERROR = 0] = "UNKNOWN_ERROR";
      a[a.BAD_REQUEST_ERROR = 1] = "BAD_REQUEST_ERROR";
      a[a.UNKNOWN_APP_ERROR = 100] = "UNKNOWN_APP_ERROR";
      a[a.METHOD_NOT_SUPPORTED = 400] = "METHOD_NOT_SUPPORTED";
      t.CHAIN = undefined;
      (c = t.CHAIN || (t.CHAIN = {})).MAINNET = "-239";
      c.TESTNET = "-3";
      const d = {
        encode: function (e, t = false) {
          let n;
          if (e instanceof Uint8Array) {
            n = e;
          } else {
            if ("string" != typeof e) {
              e = JSON.stringify(e);
            }
            n = l.decodeUTF8(e);
          }
          return function (e, t) {
            const n = l.encodeBase64(e);
            return t ? encodeURIComponent(n) : n;
          }(n, t);
        },
        decode: function (e, t = false) {
          const n = function (e, t) {
            if (t) {
              e = decodeURIComponent(e);
            }
            return l.decodeBase64(e);
          }(e, t);
          return {
            toString: () => l.encodeUTF8(n),
            toObject() {
              try {
                return JSON.parse(l.encodeUTF8(n));
              } catch (e) {
                return null;
              }
            },
            toUint8Array: () => n
          };
        }
      };
      function h(e, t) {
        const n = new Uint8Array(e.length + t.length);
        n.set(e);
        n.set(t, e.length);
        return n;
      }
      function f(e, t) {
        if (t >= e.length) {
          throw new Error("Index is out of buffer");
        }
        return [e.slice(0, t), e.slice(t)];
      }
      function p(e) {
        let t = "";
        e.forEach(e => {
          t += ("0" + (255 & e).toString(16)).slice(-2);
        });
        return t;
      }
      function g(e) {
        if (e.length % 2 != 0) {
          throw new Error(`Cannot convert ${e} to bytesArray`);
        }
        const t = new Uint8Array(e.length / 2);
        for (let n = 0; n < e.length; n += 2) {
          t[n / 2] = parseInt(e.slice(n, n + 2), 16);
        }
        return t;
      }
      t.Base64 = d;
      t.SessionCrypto = class {
        constructor(e) {
          this.nonceLength = 24;
          this.keyPair = e ? this.createKeypairFromString(e) : this.createKeypair();
          this.sessionId = p(this.keyPair.publicKey);
        }
        createKeypair() {
          return u.box.keyPair();
        }
        createKeypairFromString(e) {
          return {
            publicKey: g(e.publicKey),
            secretKey: g(e.secretKey)
          };
        }
        createNonce() {
          return u.randomBytes(this.nonceLength);
        }
        encrypt(e, t) {
          const n = new TextEncoder().encode(e);
          const r = this.createNonce();
          return h(r, u.box(n, r, t, this.keyPair.secretKey));
        }
        decrypt(e, t) {
          const [n, r] = f(e, this.nonceLength);
          const o = u.box.open(r, n, t, this.keyPair.secretKey);
          if (!o) {
            throw new Error(`Decryption error: \n message: ${e.toString()} \n sender pubkey: ${t.toString()} \n keypair pubkey: ${this.keyPair.publicKey.toString()} \n keypair secretkey: ${this.keyPair.secretKey.toString()}`);
          }
          return new TextDecoder().decode(o);
        }
        stringifyKeypair() {
          return {
            publicKey: p(this.keyPair.publicKey),
            secretKey: p(this.keyPair.secretKey)
          };
        }
      };
      t.concatUint8Arrays = h;
      t.hexToByteArray = g;
      t.isNode = function () {
        return "undefined" != typeof process && null != process.versions && null != process.versions.node;
      };
      t.splitToUint8Arrays = f;
      t.toHexString = p;
    }
  };
  var t = {};
  var n = function n(r) {
    var o = t[r];
    if (undefined !== o) {
      return o.exports;
    }
    var i = t[r] = {
      exports: {}
    };
    e[r].call(i.exports, i, i.exports, n);
    return i.exports;
  }(1920);
  TonConnectSDK = n;
})();
//# sourceMappingURL=tonconnect-sdk.min.js.map