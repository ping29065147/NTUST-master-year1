System.register("chunks:///_virtual/EventManager.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8dccaaPZhdByYg1z39qEnsG", "EventManager", undefined);

      var CommonEventName = exports('CommonEventName', {
        /**觸發FreeSpin */
        TriggerFreeSpin: "TriggerFreeSpin",

        /**獲得FreeSpin表演結束 */
        ShowGetFreeSpinEnd: "ShowGetFreeSpinEnd",

        /**FreeSpin結束 */
        FreeSpinEnd: "FreeSpinEnd",

        /**FeatureViewComponent初始化 */
        FeatureViewComponentInit: "FeatureViewComponentInit"
      });
      /**
       * 遊戲內事件管理
       */

      var EventManager = exports('default', /*#__PURE__*/function () {
        function EventManager() {
          this.m_listeners = {};
        }

        EventManager.GetInstance = function GetInstance() {
          if (!EventManager.m_instance) {
            EventManager.m_instance = new EventManager();
          }

          return EventManager.m_instance;
        }
        /**
         * 監聽列表
         */
        ;

        var _proto = EventManager.prototype;
        /**
         * 註冊
         * @param event 事件
         * @param target 模組
         */

        _proto.Register = function Register(event, target) {
          if (!this.m_listeners[event]) {
            var listeners = [];
            this.m_listeners[event] = listeners;
          } // 檢查有無重複的target


          var isExist = false;
          var length = this.m_listeners[event].length;

          for (var index = 0; index < length; index++) {
            var listener = this.m_listeners[event][index];

            if (target === listener) {
              isExist = true;
              break;
            }
          } // 無，則加入


          if (!isExist) {
            var _listeners = this.m_listeners[event];

            _listeners.push(target);
          }
        }
        /**
         * 單一移除
         * @param event 事件
         * @param target 模組
         */
        ;

        _proto.UnRegister = function UnRegister(event, target) {
          if (!this.m_listeners[event]) {
            return;
          }

          var listeners = this.m_listeners[event];
          var length = listeners.length;

          for (var index = 0; index < length; index++) {
            if (target === listeners[index]) {
              listeners.splice(index, 1);
              break;
            }
          }
        }
        /**
         * 全部清除
         */
        ;

        _proto.ClearAll = function ClearAll() {
          this.m_listeners = {};
        }
        /**
         * 發送
         * @param event 事件
         * @param args 參數
         */
        ;

        _proto.Dispatch = function Dispatch(event) {
          if (!this.m_listeners[event]) {
            return;
          }

          var listeners = this.m_listeners[event];
          var length = listeners.length;

          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          for (var index = 0; index < length; index++) {
            var listener = listeners[index];

            if (listener && listener.OnEvent) {
              listener.OnEvent.apply(listener, [event].concat(args));
            }
          }
        };

        return EventManager;
      }());
      EventManager.m_instance = null;

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FeatureManagerComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './long.mjs_cjs=&original=.js', './index.mjs_cjs=&original=.js', './EventManager.ts', './index.js', './long.js'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _initializerDefineProperty, _inheritsLoose, _assertThisInitialized, cclegacy, _decorator, CCBoolean, SpriteFrame, SpriteAtlas, CCString, UIRenderer, assetManager, js, Prefab, instantiate, error, sys, Component, EventManager, CommonEventName, _cjsExports, _cjsExports$1;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      CCBoolean = module.CCBoolean;
      SpriteFrame = module.SpriteFrame;
      SpriteAtlas = module.SpriteAtlas;
      CCString = module.CCString;
      UIRenderer = module.UIRenderer;
      assetManager = module.assetManager;
      js = module.js;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      error = module.error;
      sys = module.sys;
      Component = module.Component;
    }, null, null, function (module) {
      EventManager = module.default;
      CommonEventName = module.CommonEventName;
    }, function (module) {
      _cjsExports = module.default;
    }, function (module) {
      _cjsExports$1 = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _class4, _class5, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19;

      cclegacy._RF.push({}, "0f9b8sVUN9PFKdVaLccBqKc", "FeatureManagerComponent", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var TadaApiID = {
        Equal: [3]
      };
      var SkinType = exports('SkinType', {
        JILI: 0,
        TADA: 1,
        ACE_ROYALE: 2,
        JILI_START: 3,
        TADA_CASINO: 4,
        NONE: 5,
        UFA: 6
      });
      var StyleSetting = exports('StyleSetting', (_dec = ccclass("StyleSetting"), _dec2 = property({
        type: CCBoolean,
        tooltip: "是否有骰子造型"
      }), _dec(_class = (_class2 = function StyleSetting() {
        _initializerDefineProperty(this, "HasDice", _descriptor, this);
      }, _descriptor = _applyDecoratedDescriptor(_class2.prototype, "HasDice", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _class2)) || _class));
      var FeatureManagerComponent = exports('default', (_dec3 = property({
        type: String,
        tooltip: "遊戲主場prefab路徑"
      }), _dec4 = property({
        type: String,
        tooltip: "遊戲多語系圖片路徑"
      }), _dec5 = property({
        type: String,
        tooltip: "遊戲ID"
      }), _dec6 = property({
        type: String,
        tooltip: "Logo名稱，只要給到底線之前"
      }), _dec7 = property({
        type: Boolean,
        tooltip: "鎖定橫版"
      }), _dec8 = property({
        type: Boolean,
        tooltip: "鎖定直版"
      }), _dec9 = property({
        type: Boolean,
        tooltip: "是否為街機"
      }), _dec10 = property({
        type: SpriteFrame,
        tooltip: "不分語系LOGO"
      }), _dec11 = property({
        type: SpriteAtlas,
        tooltip: "遊戲Logo合圖"
      }), _dec12 = property({
        type: CCString,
        tooltip: "展示頁"
      }), _dec13 = property({
        type: String,
        tooltip: "敘述圖名稱"
      }), _dec14 = property({
        type: SpriteFrame,
        tooltip: "特色圖"
      }), _dec15 = property({
        type: SpriteFrame,
        tooltip: "背景圖，0:直,1:橫"
      }), _dec16 = property({
        type: SpriteFrame,
        tooltip: "腳色"
      }), _dec17 = property({
        type: Number,
        tooltip: "辣椒數"
      }), _dec18 = property({
        type: CCBoolean,
        tooltip: "是否開啟晚3秒ShowGameScene進入遊戲"
      }), _dec19 = property({
        type: StyleSetting,
        tooltip: "是否有其他特色樣式"
      }), _dec20 = property({
        type: CCBoolean,
        tooltip: "是否開啟Long型別"
      }), ccclass(_class4 = (_class5 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FeatureManagerComponent, _Component);

        function FeatureManagerComponent() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_scenePrefabPath", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_gameImgPath", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_gameId", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_logoName", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_isLockLandScope", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_isLockPortrait", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_isStreet", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_singleLogo", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_logoSpriteAtlas", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_pagePrefabPaths", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_infoNames", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_featureSpriteFrames", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_bgSpriteFrames", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_characterSpriteFrame", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_chilliNum", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_isWatting", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_styleSetting", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_isLong", _descriptor19, _assertThisInitialized(_this));

          _this.m_startSceneTime = -1;
          _this.m_otherBundle = null;
          _this.m_commonBundle = null;
          _this.m_gameBundle = null;
          _this.m_pagePrefabs = [];
          _this.m_apiId = 0;
          _this.m_isTaDa = false;
          return _this;
        }

        var _proto = FeatureManagerComponent.prototype;

        _proto.onLoad = function onLoad() {
          if (this.m_isLong) {
            _cjsExports.util.Long = _cjsExports$1;

            _cjsExports.configure();
          }

          this.m_isTaDa = this.IsTada();
          this.Config();
          this.Log(100);
        };

        _proto.start = function start() {
          this.m_startSceneTime = this.m_isWatting ? Date.now() : -1;
          this.LoadVersion("game");
        };

        _proto.Config = function Config() {
          // 覆寫3.6.2版本UIRenderer.prototype.fillBuffers，強制透明度為0的效果不被渲染。
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          UIRenderer.prototype.fillBuffers = function fillBuffers(render) {
            if (this._renderFlag && render._pOpacity > 0) {
              this._render(render);
            }
          };
        };

        _proto.update = function update() {} //Bundle載入
        ;

        _proto.LoadVersion = function LoadVersion(gameBundleName) {
          var _this2 = this;

          var commonPath = "assets/common/Astt/" + (this.m_isTaDa ? "tada" : "jili");
          var otherPath = "assets/common/Astt/other";
          var gamePath = "assets/" + gameBundleName;
          var commonVersion = "";
          var otherVersion = "";
          var gameVersion = "";

          try {
            if (typeof LobbyData !== "undefined") {
              gamePath = LobbyData.bundleDomin + gameBundleName;
              gameVersion = LobbyData.versionJson[gameBundleName];
              commonPath = LobbyData.bundleDomin + (this.m_isTaDa ? "tada" : "jili");
              commonVersion = LobbyData.versionJson[this.m_isTaDa ? "tada" : "jili"];
              otherPath = LobbyData.bundleDomin + "other";
              otherVersion = LobbyData.versionJson["other"];
            }
          } catch (error) {//沒有就當作非APP
          } //共用


          this.LoadBundle(otherPath, otherVersion, function (bundle) {
            _this2.m_otherBundle = bundle;

            _this2.CheckBundles();
          });
          this.LoadBundle(commonPath, commonVersion, function (bundle) {
            _this2.m_commonBundle = bundle;

            _this2.CheckBundles();
          }); //遊戲

          this.LoadBundle(gamePath, gameVersion, function (bundle) {
            _this2.m_gameBundle = bundle;

            _this2.CheckBundles();
          });
        };

        _proto.CheckBundles = function CheckBundles() {
          if (this.m_otherBundle && this.m_commonBundle && this.m_gameBundle) {
            this.LoadIntroView();
          }
        };

        _proto.LoadBundle = function LoadBundle(path, version, endCb) {
          var _this3 = this;

          assetManager.loadBundle(path, {
            version: version
          }, function (err, bundle) {
            if (err) {
              _this3.LoadBundle(path, version, endCb);

              return;
            }

            endCb(bundle);
          });
        };

        _proto.LoadIntroView = function LoadIntroView() {
          var _this4 = this;

          var path = "Astt/%s/Intro/Prefab/IntroView";

          if (this.m_isTaDa) {
            path = js.formatStr(path, "framework_americas");
          } else {
            path = js.formatStr(path, "framework");
          }

          this.m_commonBundle.load(path, Prefab, function (err, asset) {
            if (err) {
              _this4.LoadIntroView();

              return;
            }

            var node = instantiate(asset);

            _this4.node.addChild(node);

            if (_this4.m_pagePrefabPaths.length > 0) {
              for (var i = 0; i < _this4.m_pagePrefabPaths.length; i++) {
                _this4.LoadIntroCell(_this4.m_pagePrefabPaths[i], i);
              }
            } else {
              _this4.Complete();
            }
          });
        };

        _proto.LoadIntroCell = function LoadIntroCell(path, idx) {
          var _this5 = this;

          this.m_gameBundle.load(path, Prefab, function (err, asset) {
            if (err) {
              _this5.LoadIntroCell(path, idx);

              return;
            }

            _this5.m_pagePrefabs[idx] = asset;

            _this5.CheckIntroCells();
          });
        };

        _proto.CheckIntroCells = function CheckIntroCells() {
          for (var i = 0; i < this.m_pagePrefabPaths.length; i++) {
            if (!this.m_pagePrefabs[i]) {
              return;
            }
          }

          this.Complete();
        };

        _proto.Complete = function Complete() {
          EventManager.GetInstance().Dispatch(CommonEventName.FeatureViewComponentInit, {
            ScenePrefabPath: this.m_scenePrefabPath,
            GameImgPath: this.m_gameImgPath,
            GameId: this.m_gameId,
            LogoName: this.m_logoName,
            PagePrefabs: this.m_pagePrefabs,
            FeatureSpriteFrames: this.m_featureSpriteFrames,
            IsLockLandScope: this.m_isLockLandScope,
            IsLockPortrait: this.m_isLockPortrait,
            LogoSpriteAtlas: this.m_logoSpriteAtlas,
            BgSpriteFrames: this.m_bgSpriteFrames,
            CharacterSpriteFrame: this.m_characterSpriteFrame,
            InfoNames: this.m_infoNames,
            ChilliNum: this.m_chilliNum,
            SingleLogo: this.m_singleLogo,
            IsStreet: this.m_isStreet,
            StartSceneTime: this.m_startSceneTime,
            OtherBundle: this.m_otherBundle,
            CommonBundle: this.m_commonBundle,
            GameBundle: this.m_gameBundle,
            ApiID: this.m_apiId.toString(),
            IsTaDa: this.m_isTaDa,
            StyleSetting: this.m_styleSetting
          });
        };

        _proto.IsTada = function IsTada() {
          var gs = (this.GetLinkParameterByName("gs") || "gnidnawcs").split("").reverse().join("");
          var apiId = Number(this.GetLinkParameterByName("apiId"));
          var isTaDa = gs.search("tada") !== -1;

          if (!isNaN(apiId)) {
            this.m_apiId = Number(apiId);

            for (var i = 0; i < TadaApiID.Equal.length; i++) {
              if (apiId === TadaApiID.Equal[i]) {
                isTaDa = true;
                break;
              }
            }
          }

          var tadaSkin = this.GetLinkParameterByName("tadaSkin");

          if (tadaSkin && tadaSkin === "1") {
            isTaDa = true;
          }

          var skin = this.GetLinkParameterByName("skin");

          if (skin && (skin == SkinType.TADA.toString() || skin == SkinType.TADA_CASINO.toString())) {
            isTaDa = true;
          }

          return isTaDa;
        };

        _proto.GetLinkParameterByName = function GetLinkParameterByName(name, url) {
          if (url === void 0) {
            url = null;
          }

          if (!url) {
            if (typeof LobbyData !== "undefined") {
              try {
                url = LobbyData.url;

                if (url === "") {
                  error("No URL!");
                }
              } catch (error) {
                error(JSON.stringify(error));
              }
            } else {
              url = window.location.href;
            }
          }

          name = name.replace(/[[\]]/g, "\\$&");
          var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
          var results = regex.exec(url);
          if (!results) return null;
          if (!results[2]) return "";
          return decodeURIComponent(results[2].replace(/\+/g, " "));
        };

        _proto.Log = function Log(eventId) {
          if (sys.isNative) {
            return;
          }

          var host = "https://" + window.location.host + "/";
          var ipFirst = /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/;

          if (host.indexOf("localhost") != -1 || ipFirst.test(host) == true) {
            return;
          }

          var apiId = this.GetLinkParameterByName("apiId");
          var SSOKey = this.GetLinkParameterByName("ssoKey");
          var gs = (this.GetLinkParameterByName("domain_platform") || this.GetLinkParameterByName("gs") || "gnidnawcs").split("").reverse().join("");
          var url = "https://" + gs + "/webservice/event/trigger?";
          url += "AccountID=-1&BrowserSystem=-1&DeviceSystem=-1&GameID=" + this.m_gameId + "&GameVersion=" + new Date().getTime() + "&EventID=" + eventId + "&EventStatus=0&SSOKey=" + SSOKey + "&CreateTime=" + new Date().toISOString() + "&ApiId=" + apiId;
          this.Send(url);
        };

        _proto.Send = function Send(url) {
          var headers = {
            Accept: "application/json, text/javascript, text/plain"
          };
          var xhr = new XMLHttpRequest();
          xhr.open("GET", url, true);

          if (headers) {
            Object.keys(headers).forEach(function (key) {
              return xhr.setRequestHeader(key, headers[key]);
            });
          }

          xhr.timeout = 5000;

          xhr.onload = function (evt) {};

          xhr.onerror = function (evt) {// this.Send( url );
          };

          xhr.ontimeout = function (evt) {// this.Send( url );
          };

          xhr.send();
        };

        return FeatureManagerComponent;
      }(Component), (_descriptor2 = _applyDecoratedDescriptor(_class5.prototype, "m_scenePrefabPath", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "m_gameImgPath", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class5.prototype, "m_gameId", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class5.prototype, "m_logoName", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class5.prototype, "m_isLockLandScope", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class5.prototype, "m_isLockPortrait", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class5.prototype, "m_isStreet", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class5.prototype, "m_singleLogo", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class5.prototype, "m_logoSpriteAtlas", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class5.prototype, "m_pagePrefabPaths", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class5.prototype, "m_infoNames", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class5.prototype, "m_featureSpriteFrames", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class5.prototype, "m_bgSpriteFrames", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class5.prototype, "m_characterSpriteFrame", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class5.prototype, "m_chilliNum", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class5.prototype, "m_isWatting", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class5.prototype, "m_styleSetting", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new StyleSetting();
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class5.prototype, "m_isLong", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class5)) || _class4));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LobbyIngameUiDefine.ts", ['cc'], function (exports) {
  'use strict';

  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        AppLobby: void 0,
        LobbyIngameUiDefine: void 0,
        init: init
      });

      cclegacy._RF.push({}, "fbab3WVpnpP+550dGeK2VIC", "LobbyIngameUiDefine", undefined);

      var AppLobby;

      function init() {
        AppLobby = exports('AppLobby', globalThis.LobbyCommon);
      }

      var LobbyIngameUiDefine;

      (function (_LobbyIngameUiDefine) {})(LobbyIngameUiDefine || (LobbyIngameUiDefine = exports('LobbyIngameUiDefine', {})));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./EventManager.ts', './FeatureManagerComponent.ts', './SwipeScreen.ts', './LobbyIngameUiDefine.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SwipeScreen.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, cclegacy, _decorator, sys, director, find, Node, UITransform, Size, Button, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      sys = module.sys;
      director = module.director;
      find = module.find;
      Node = module.Node;
      UITransform = module.UITransform;
      Size = module.Size;
      Button = module.Button;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

      cclegacy._RF.push({}, "2a74aT/eRxGAIKffArEoQrQ", "SwipeScreen", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;

      var iOSDevice = function iOSDevice(name, height, width, ratio, statusHeight, homeHeight) {
        this.name = name;
        this.height = height;
        this.width = width;
        this.ratio = ratio;
        this.statusHeight = statusHeight;
        this.homeHeight = homeHeight;
      };

      var deviceList = [new iOSDevice("iPhone 6.5-inch", 896, 414, 3, 44, 34), new iOSDevice("iPhone 6.1-inch", 896, 414, 2, 44, 34), new iOSDevice("iPhone 5.8-inch", 812, 375, 3, 44, 34), new iOSDevice("iPhone 5.5-inch", 736, 414, 3, 18, 0), new iOSDevice("iPhone 4.7-inch", 667, 375, 2, 20, 0), new iOSDevice("iPhone 4-inch", 568, 320, 2, 20, 0), new iOSDevice("iPhone 3.5-inch", 480, 320, 2, 20, 0), new iOSDevice("iPhone(Legacy) & iPod Touch", 480, 320, 1, 20, 0), new iOSDevice("iPad Pro 12.9-inch", 1366, 1024, 2, 20, 0), new iOSDevice("iPad Pro 10.5-inch", 1112, 834, 2, 20, 0), new iOSDevice("iPad 9.7-inch Retina", 1024, 768, 2, 20, 0), new iOSDevice("iPad", 1024, 768, 1, 20, 0), new iOSDevice("iPad Mini Retina", 1024, 768, 2, 20, 0), new iOSDevice("iPad Mini", 1024, 768, 1, 20, 0)];
      var HtmlId = {
        BackGround: "mask",
        CloseTip: "mask_close_tip",
        Close: "mask_close",
        Bar: "bar"
      };
      var CloseContent = {
        tw: ["滑動無效時, 請點擊此處進入遊戲. ❎", "請解除豎排方向鎖定, 並將手機水平放置."],
        cn: ["滑动无效时, 请点击此处进入游戏. ❎", "请解除竖排方向锁定, 并将手机水平放置."],
        th: ["เมื่อสไลด์ไม่ถูกต้อง กรุณาคลิกที่นี่เพื่อเข้าสู่เกม ❎", "โปรดทำการปลดล็อกรูปแบบทิศทาง เพื่อสามารถเปลี่ยนรูปแบบทิศทางตามระดับโทรศัพท์ได้"],
        vn: ["Nếu không thể lthao tác, hãy chạm vào đây để vào game. ❎", "Hãy mở khóa xoay hướng, đồng thời xoay ngang màn hình."],
        id: ["Klik di sini untuk masuk ke permainan, ketika tidak bisa di scroll. ❎", "Silakan buka kunci posisi vertikal, dan letakkan telepon seluler secara horizontal."],
        mm: ["When the slide is invalid, please click here. ❎", "Please unlock the vertical direction and place the phone horizontally."],
        jp: ["スライドで入れない場合は、ここをタップしてください。 ❎", "垂直固定を解除し、端末を水平方向に置いてください。"],
        en: ["If swiping does not work, please tap here. ❎", "Please unlock screen rotation and hold the phone horizontally."]
      };
      var Lang = {
        tw: ["tw", "zh-TW"],
        cn: ["cn", "zh-CN"],
        en: ["en", "en-US"],
        th: ["th", "th-TH"],
        vn: ["vn", "vi-VN"],
        id: ["id", "id-ID"],
        hi: ["hi", "hi-IN"],
        ta: ["ta", "ta-IN"],
        mm: ["mm", "my-MM"],
        jp: ["jp", "ja-JP"]
      };
      var PortraitApiId = [1131];
      var BlockApiId = [1864, 1002 //測試用
      ];
      var SwipeScreen = exports('default', (_dec = property(Boolean), _dec2 = property(Boolean), _dec3 = property(Boolean), _dec4 = property(Boolean), _dec5 = property(Number), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SwipeScreen, _Component);

        function SwipeScreen() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "isLandscape", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "isPortrait", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "isIOS", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "isAndroid", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "android_Apiid", _descriptor5, _assertThisInitialized(_this));

          _this.m_mask = null;
          _this.m_isScrolling = false;
          _this.m_isblock = false;
          _this.m_scrollInterval = void 0;
          _this.m_scrollTimeOut = void 0;
          _this.m_backGround = null;
          _this.m_isLandscape = true;
          return _this;
        }

        var _proto = SwipeScreen.prototype;

        _proto.onLoad = function onLoad() {
          if (sys.isNative) {
            return;
          }

          this.Init();
        };

        _proto.GetDeviceName = function GetDeviceName() {
          if (sys.os === sys.OS.IOS) {
            var device = this.GetiOSDevice();

            if (device) {
              return device.name;
            }
          } else if (sys.os === sys.OS.ANDROID) {
            var regex = /Mozilla\/5.0\s*\([^()]*?(Android[^()]*?);\s*([^()]*?)\)/g;
            var m = regex.exec(navigator.userAgent);

            if (m) {
              if (m.length > 2) {
                return m[2].split(" Build")[0];
              }
            }
          }

          return "unknown";
        };

        _proto.CreateHtmlTag = function CreateHtmlTag() {
          if (this.m_backGround) {
            return;
          }

          this.node.active = true;
          var body = document.body;
          body.style.overflow = "visible"; //body不啟用(內容會被修剪，但不會顯示捲軸，當超出元素的範圍時隱藏內容)。

          /**
           * container(內容會被修剪，但不會顯示捲軸，當超出元素的範圍時隱藏內容)
           * container(將cocos容器改為固定元素)
           */

          var container = document.getElementById("Cocos3dGameContainer");
          container.style.overflow = "hidden";
          container.style.position = "fixed";
          var bar = document.createElement("div");
          bar.id = HtmlId.Bar;
          bar.style.position = "absolute";
          bar.style.height = "100vh";
          var backGround = document.createElement("div");
          backGround.id = HtmlId.BackGround; // backGround.className = "mask";

          backGround.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
          backGround.style.height = "150vh";
          backGround.style.width = "100vw";
          backGround.style.zIndex = "99";
          backGround.style.display = "none";
          backGround.style.position = "absolute";
          backGround.style.top = "0%";
          backGround.style.left = "0%";
          this.m_backGround = backGround;
          var closeTip = document.createElement("div");
          closeTip.id = HtmlId.CloseTip;
          closeTip.style.width = "70vw";
          closeTip.style.top = "28vh";
          closeTip.style.left = "50vw";
          closeTip.style.transform = "translate(-50%, -50%)";
          closeTip.style.fontSize = "18px";
          closeTip.style.fontWeight = "bold";
          closeTip.style.color = "#FFFFFF";
          closeTip.style.position = "fixed";
          var divStyle1 = document.createElement("div");
          divStyle1.style.top = "16vh";
          divStyle1.style.left = "50vw";
          divStyle1.style.transform = "translate(-50%, -50%)";
          divStyle1.style.position = "fixed";
          var close = document.createElement("div");
          close.id = HtmlId.Close;
          close.style.width = "90vw";
          close.style.fontSize = "24px";
          close.style.fontWeight = "bold";
          close.style.color = "#EEE8AA";
          close.style.wordWrap = "break-word";
          var divStyle2 = document.createElement("div");
          divStyle2.style.fontSize = "48px";
          divStyle2.style.fontWeight = "bold";
          divStyle2.style.color = "#EEE8AA";
          var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
          svg.style.width = "150px";
          svg.style.height = "150px";
          svg.style.position = "fixed";
          svg.style.top = "75vh";
          svg.style.left = "50vw";
          svg.style.transform = "translate(-50%, -50%)";
          svg.style.animationDuration = "2s";
          svg.style.animationName = "fullscreen-swipe";
          svg.style.animationIterationCount = "infinite";
          var cssAnimation = document.createElement("style");
          var rules = document.createTextNode("@keyframes fullscreen-swipe {" + "from { top:80% }" + "to { top:50% }" + "}");
          cssAnimation.appendChild(rules);
          svg.appendChild(cssAnimation);
          svg.setAttribute("viewBox", "0 0 547.371 547.371");
          var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("fill", "#FFFFFF");
          path.setAttribute("d", "M136.623,52.13v164.027l-23.875,23.877c-54.503,54.479-54.503,143.151,0,197.627l57.317,57.292c33.806,33.808,78.743,52.416,126.521,52.416c98.658,0,178.912-80.254,178.912-178.911V208.522c0-28.752-23.381-52.131-52.156-52.131c-10.713,0-20.695,3.258-28.984,8.836c-7.143-20.308-26.51-34.902-49.211-34.902c-10.713,0-20.695,3.26-28.984,8.838c-7.141-20.307-26.509-34.901-49.21-34.901c-9.487,0-18.402,2.555-26.065,7.012V52.132c0-28.75-23.38-52.131-52.131-52.131C160.003,0.001,136.623,23.38,136.623,52.13z M214.845,52.13v169.425c0,7.192,5.839,13.032,13.033,13.032s13.033-5.84,13.033-13.032v-65.162c0-14.39,11.703-26.066,26.064-26.066c14.362,0,26.063,11.678,26.063,26.066v39.098c0,7.193,5.84,13.033,13.033,13.033s13.033-5.84,13.033-13.033v-13.033c0-14.389,11.703-26.063,26.064-26.063c14.363,0,26.064,11.676,26.064,26.063v26.064c0,7.192,5.84,13.033,13.033,13.033s13.033-5.841,13.033-13.033c0-14.39,11.703-26.064,26.064-26.064c14.359,0,26.064,11.676,26.064,26.064v159.938c0,84.27-68.578,152.848-152.848,152.848c-40.819,0-79.188-15.899-108.066-44.78l-57.317-57.292c-22.155-22.183-33.233-51.271-33.233-80.385c0-29.115,11.078-58.203,33.233-80.387l5.448-5.446v72.8c0,7.192,5.839,13.033,13.032,13.033c7.194,0,13.033-5.841,13.033-13.033V52.13c0-14.389,11.704-26.065,26.065-26.065C203.141,26.063,214.845,37.743,214.845,52.13z");
          body.appendChild(backGround);
          backGround.appendChild(closeTip);
          backGround.appendChild(divStyle1);
          svg.appendChild(path);
          backGround.appendChild(svg);
          divStyle1.appendChild(close);
          divStyle1.appendChild(divStyle2);
          body.appendChild(bar);
        };

        _proto.Init = function Init() {
          var _this2 = this;

          var pwa = false;

          if (typeof LobbyData !== "undefined") {
            pwa = LobbyData.pwa;
          } // if (sys.os == sys.OS.IOS && /iPhone OS 15/.test(window.navigator.userAgent)) {
          //     this.isIOS = false;
          // }


          var apiid = Math.floor(Number(this.GetLinkParameterByName("apiId")));

          if (this.isPortrait) {
            // 強制直版遊戲，根據不同廠商，決定是否開啟安卓全螢幕、IOS滑動功能
            this.m_isblock = PortraitApiId.indexOf(apiid) >= 0;
          } else if (this.isAndroid && this.android_Apiid.length > 0) {
            if (this.android_Apiid.indexOf(apiid) >= 0) {
              this.isAndroid = false;
            }
          }

          if (!this.m_isblock) {
            this.m_isblock = BlockApiId.indexOf(apiid) >= 0;
          }

          if (!pwa && !this.m_isblock) {
            this.AddGameViewMask();
            this.isIOS = false;

            if (sys.os == sys.OS.IOS && this.IsWebview() == false && this.isIOS) {
              this.CreateHtmlTag(); // if ( this.IsIOS15() )
              // {
              //     this.m_backGround.style.visibility = "hidden";
              // }

              this.SetCloseContent();
              this.m_backGround.style.display = "inline";
              this.SetShowMask();

              if (this.IsChrome() == true) {
                var device = this.GetiOSDevice();

                if (device != null) {
                  var portraitHeight = (screen.height - device.statusHeight - device.homeHeight - 20) * 0.99;
                  var landscapeHeight = (screen.width - device.statusHeight - 20) * 0.99;

                  document.body.onresize = function () {
                    var height = 0;

                    if (window.innerHeight >= window.innerWidth) {
                      height = portraitHeight;
                    } else {
                      height = landscapeHeight;
                    }

                    if (height <= window.innerHeight) {
                      _this2.HideMask();
                    } else {
                      _this2.ShowMask();
                    }
                  }; // iOS 上滑全屏後, 點擊位置偏移


                  window.addEventListener("scroll", function () {
                    return _this2.m_isScrolling = true;
                  }, {
                    capture: false,
                    passive: true
                  });
                  this.m_backGround.addEventListener("touchend", function () {
                    return _this2.ScrollReset();
                  });
                } else {
                  this.HideMask();
                }
              } else {
                var onResize = document.body.onresize;

                document.body.onresize = function () {
                  onResize && onResize(null, null);
                  var pageWidth = document.documentElement.scrollWidth;
                  var pageHeight = document.documentElement.scrollHeight;
                  var isLandscape = pageWidth > pageHeight;

                  if (document.getElementById(HtmlId.Bar).clientHeight == window.innerHeight) {
                    _this2.HideMask();
                  } else {
                    _this2.SetShowMask(isLandscape);
                  } // iOS 上滑全屏後, 點擊位置偏移


                  window.addEventListener("scroll", function () {
                    return _this2.m_isScrolling = true;
                  }, {
                    capture: false,
                    passive: true
                  });

                  _this2.m_backGround.addEventListener("touchend", function () {
                    return _this2.ScrollReset();
                  });

                  _this2.m_isLandscape = pageWidth > pageHeight;
                };
              }
            } else if (sys.os == sys.OS.ANDROID && this.IsWebview() == false && this.isAndroid) {
              if (sys.browserType == sys.BrowserType.MOBILE_QQ || sys.browserType == sys.BrowserType.UC) ;else {
                var onresize_for_android = function onresize_for_android() {
                  if (_this2.HasFullscreen() && !_this2.IsFullscreen()) {
                    _this2.m_mask.active = true;
                  }
                };

                document.body.onresize = onresize_for_android;
                onresize_for_android();
              }
            }
          }
        };

        _proto.SetShowMask = function SetShowMask(isLandscape) {
          if (isLandscape === void 0) {
            isLandscape = undefined;
          }

          if (!this.IsIOS15orOver()) {
            this.ShowMask();
          } else {
            //iOS 15以上
            if (isLandscape === undefined) {
              //一開始先初始化設定
              var pageWidth = document.documentElement.scrollWidth;
              var pageHeight = document.documentElement.scrollHeight;
              this.m_isLandscape = pageWidth > pageHeight;

              if (this.m_isLandscape) {
                //橫版
                if (!this.IsIOS15Version(0) && !this.IsIOS15Version(1) && !this.IsIOS15Version(2) && !this.IsIOS15Version(3)) {
                  //iOS 15.4以上
                  this.m_backGround.style.visibility = "visible";
                } else {
                  this.m_backGround.style.visibility = "hidden";
                }
              } else {
                //直版
                if (this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3)) {
                  this.m_backGround.style.visibility = "visible";
                } else {
                  this.m_backGround.style.visibility = "hidden";
                }
              }
            } else {
              document.getElementById(HtmlId.Bar).clientHeight + " " + window.innerHeight;

              if (isLandscape !== this.m_isLandscape || document.getElementById(HtmlId.Bar).clientHeight !== window.innerHeight) {
                //直橫改變
                if (isLandscape) {
                  //橫版
                  if (!this.IsIOS15Version(0) && !this.IsIOS15Version(1) && !this.IsIOS15Version(2) && !this.IsIOS15Version(3)) {
                    //iOS 15.4以上
                    this.m_backGround.style.visibility = "visible";
                  } else {
                    this.m_backGround.style.visibility = "hidden";
                  }
                } else {
                  //直版
                  if (this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3)) {
                    this.m_backGround.style.visibility = "visible";
                  } else {
                    this.m_backGround.style.visibility = "hidden";
                  }
                }
              }
            }
          }
        };

        _proto.SetCloseContent = function SetCloseContent() {
          var _this3 = this;

          var lang = this.GetLang("lang");
          lang = this.ChangeLang(lang);
          var mask_close = document.getElementById(HtmlId.Close);
          var mask_close_tip = this.isLandscape ? document.getElementById(HtmlId.CloseTip) : null;

          if (CloseContent[lang]) {
            mask_close.textContent = CloseContent[lang][0];
            mask_close_tip && (mask_close_tip.textContent = CloseContent[lang][1]);
          } else {
            mask_close.textContent = CloseContent[Lang.en[0]][0];
            mask_close_tip && (mask_close_tip.textContent = CloseContent[Lang.en[0]][1]);
          }

          if (!mask_close.onclick) {
            mask_close.onclick = function () {
              _this3.HideMask();
            };
          }
        };

        _proto.GetLang = function GetLang(name) {
          var url = sys.localStorage.getItem("LobbyLanguage");

          if (!url || url == "") {
            if (typeof LobbyData !== "undefined") {
              url = LobbyData.url;
            } else {
              url = window.location.href;
            }

            if (url.indexOf("?") != -1) {
              var ary = url.split("?")[1].split("&");

              for (var index = 0; index < ary.length; index++) {
                if (ary[index].split("=")[0] == name) {
                  return ary[index].split("=")[1];
                }
              }
            }

            return Lang.en[0];
          }

          return url;
        };

        _proto.ChangeLang = function ChangeLang(lang) {
          switch (lang) {
            case Lang.tw[1]:
              return Lang.tw[0];

            case Lang.cn[1]:
              return Lang.cn[0];

            case Lang.th[1]:
              return Lang.th[0];

            case Lang.vn[1]:
              return Lang.vn[0];

            case Lang.id[1]:
              return Lang.id[0];

            case Lang.hi[1]:
              return Lang.hi[0];

            case Lang.ta[1]:
              return Lang.ta[0];

            case Lang.mm[1]:
              return Lang.mm[0];

            case Lang.jp[1]:
              return Lang.jp[0];

            default:
              return Lang.en[0];
          }
        };

        _proto.ShowMask = function ShowMask() {
          var _this4 = this;

          var container = document.getElementById("Cocos3dGameContainer");
          var div = container.getElementsByTagName("div");
          var index = 0;

          for (var i = 0; i < div.length; i++) {
            var _iframe = div[i].getElementsByTagName("iframe");

            if (_iframe && _iframe.length > 0) {
              index = i;
              break;
            }
          }

          var iframe = div[index];

          if (iframe && iframe.style.visibility !== "hidden") {
            return;
          }

          this.m_backGround.style.visibility = "visible";

          if (this.m_mask) {
            this.m_mask.active = true;
          }

          window.scrollTo(0, 0);

          if (this.m_scrollInterval) {
            clearInterval(this.m_scrollInterval);
          }

          this.m_scrollInterval = setInterval(function () {
            if (_this4.m_isScrolling) {
              _this4.m_isScrolling = false;

              _this4.ScrollReset();
            }
          }, 250);
        };

        _proto.ScrollReset = function ScrollReset() {
          var _this5 = this;

          window.scrollTo(0, 0);

          if (this.m_scrollTimeOut) {
            clearTimeout(this.m_scrollTimeOut);
          }

          this.m_scrollTimeOut = setTimeout(function () {
            window.scrollTo(0, 0);
            clearInterval(_this5.m_scrollInterval);
            _this5.m_scrollInterval = null;
          }, 250);
        };

        _proto.HideMask = function HideMask() {
          var _this6 = this;

          window.scrollTo(0, 0);

          if (this.m_backGround) {
            this.m_backGround.style.visibility = "hidden";
          }

          this.scheduleOnce(function () {
            if (_this6.m_mask) {
              _this6.m_mask.active = false;
            }
          }, 0.0);
        };

        _proto.AddGameViewMask = function AddGameViewMask() {
          var _this7 = this;

          var scene = director.getScene();

          if (this.m_mask || scene.getChildByName("ScrollForMask")) {
            if (!this.m_mask && scene.getChildByName("ScrollForMask")) {
              this.m_mask = find("ScrollForMask");
            }

            return;
          }

          this.m_mask = new Node();
          this.m_mask.name = "ScrollForMask";
          this.m_mask.addComponent(UITransform).setContentSize(new Size(2000, 2000));
          this.m_mask.addComponent(Button);
          this.m_mask.active = false;
          scene.addChild(this.m_mask);
          this.m_mask.setSiblingIndex(scene.children.length); //擋全螢幕後會觸發到其他元件的touch事件

          this.m_mask.on(Node.EventType.TOUCH_END, function () {
            if (sys.os == sys.OS.IOS && _this7.IsWebview() == false) {
              var mask = _this7.m_backGround;

              if (mask && mask.style.visibility == "hidden") {
                _this7.m_mask.active = false;
              }
            } else if (sys.os == sys.OS.ANDROID && _this7.IsWebview() == false) {
              _this7.Fullscreen();
            }
          });
        };

        _proto.IsWebview = function IsWebview() {
          var useragent = navigator.userAgent;
          var rules = ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)", "Android.*(wv|.0.0.0)"];
          var regex = new RegExp("(" + rules.join("|") + ")", "ig");
          return Boolean(useragent.match(regex));
        };

        _proto.IsChrome = function IsChrome() {
          return /CriOS/.test(navigator.userAgent);
        };

        _proto.GetiOSDevice = function GetiOSDevice() {
          for (var _iterator = _createForOfIteratorHelperLoose(deviceList), _step; !(_step = _iterator()).done;) {
            var device = _step.value;

            if (screen.height === device.height && screen.width === device.width && window.devicePixelRatio === device.ratio) {
              return device;
            }
          }

          return null;
        };

        _proto.HasFullscreen = function HasFullscreen() {
          var fullscreenEnabled = document["fullscreenEnabled"] || document["mozFullScreenEnabled"] || document["webkitFullscreenEnabled"] || document["msFullscreenEnabled"];
          return fullscreenEnabled != null;
        };

        _proto.IsFullscreen = function IsFullscreen() {
          var fullscreenElement = document["fullscreenElement"] || document["webkitFullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"];
          return fullscreenElement != null;
        };

        _proto.Fullscreen = function Fullscreen() {
          try {
            var launchFullScreen = document.documentElement.requestFullscreen || document.documentElement["webkitRequestFullscreen"] ||
            /* Chrome, Safari and Opera */
            document.documentElement["mozRequestFullScreen"] ||
            /* Firefox */
            document.documentElement["msRequestFullscreen"];
            /* IE/Edge */

            var exitFullScreen = document.exitFullscreen || document["webkitExitFullscreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"];

            if (this.HasFullscreen()) {
              if (this.IsFullscreen()) {
                exitFullScreen.call(document);
              } else {
                launchFullScreen.call(document.documentElement);
              }
            } else {
              console.log("not support fullscreen.");
            }

            this.m_mask.active = false;
          } catch (error) {
            this.m_mask.active = false;
          }
        };

        _proto.GetLinkParameterByName = function GetLinkParameterByName(name) {
          var url = window.location.href;
          name = name.replace(/[[]]/g, "\\$&");
          var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
              results = regex.exec(url);
          if (!results) return null;
          if (!results[2]) return "";
          return decodeURIComponent(results[2].replace(/\+/g, " "));
        };

        _proto.IsIOS15orOver = function IsIOS15orOver() {
          // if ( sys.os == sys.OS.IOS )
          // {
          //     let ua = window.navigator.userAgent;
          //     let i = ua.indexOf( " OS " ) + 4;
          //     let version = ua.substring( i, ua.indexOf( "_", i ) );
          //     if ( Number( version ) >= 15 )
          //     {
          //         return true;
          //     }
          //     else
          //     {
          //         return false;
          //     }
          // }
          // else
          // {
          //     return false;
          // }
          return sys.os == sys.OS.IOS && /iPhone OS 15/.test(window.navigator.userAgent);
        };

        _proto.IsIOS15Version = function IsIOS15Version(version) {
          return sys.os == sys.OS.IOS && window.navigator.userAgent.search("iPhone OS 15_" + version) !== -1;
        };

        return SwipeScreen;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isLandscape", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isPortrait", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "isIOS", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "isAndroid", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "android_Apiid", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});