System.register("chunks:///_virtual/Combo.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tools.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, SpriteFrame, Component, Tools;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      Tools = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "d8a0fdTOUhAzpwC/ut0DLTg", "Combo", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Combo = exports('default', (_dec = property({
        type: Sprite,
        tooltip: "數字顯示圖片，排序由最後一位到最高位"
      }), _dec2 = property({
        type: SpriteFrame,
        tooltip: "數字圖片"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Combo, _Component);

        function Combo() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_numberSprites", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_numberSpriteFrames", _descriptor2, _assertThisInitialized(_this));

          _this.m_number = 0;
          return _this;
        }

        var _proto = Combo.prototype;

        _proto.onLoad = function onLoad() {};

        _proto.Init = function Init() {
          this.m_number = 0;
          this.node.setPosition(18, this.node.getPosition().y, 0);
        };

        _proto.AddCombo = function AddCombo(hasTreasure) {
          this.m_number += 1;
          this.ChangeNumber();

          if (hasTreasure) {
            return;
          }
        };

        _proto.ChangeNumber = function ChangeNumber() {
          if (this.m_number >= 10) {
            var tempNumber = Tools.strip(this.m_number);

            for (var i = 0; i < this.m_numberSprites.length; i++) {
              var single = Tools.strip(tempNumber % 10);
              tempNumber = Tools.divide(Tools.strip(tempNumber - single), 10);
              this.m_numberSprites[i].spriteFrame = this.m_numberSpriteFrames[single];
            }

            this.m_numberSprites[1].node.active = true;
          } else {
            this.m_numberSprites[1].node.active = false;
            this.m_numberSprites[0].spriteFrame = this.m_numberSpriteFrames[this.m_number];
          }
        };

        _createClass(Combo, [{
          key: "Number",
          get: function get() {
            return this.m_number;
          }
        }]);

        return Combo;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_numberSprites", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_numberSpriteFrames", [_dec2], {
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

System.register("chunks:///_virtual/DataStructure.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './DataStruct.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, cclegacy, ConnectionDataStruct;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      ConnectionDataStruct = module.ConnectionDataStruct;
    }],
    execute: function () {
      cclegacy._RF.push({}, "66fc0fgAHtA6q+coV04Ukun", "DataStructure", undefined);

      var UserInfo = exports('UserInfo', function UserInfo() {
        this.aid = -1;
        this.delay = 0;
        this.apiId = -1;
      });
      var JPInof = exports('JPInof', function JPInof() {
        this.aid = -1;
        this.currency = 0;
        this.apiId = -1;
      });
      var BetInfo = exports('BetInfo', function BetInfo() {
        this.bet = 0;
        this.currency = 0;
      });
      var UpgradeResult = exports('UpgradeResult', function UpgradeResult() {
        this.needup = false;
      });
      var CheatInfo = exports('CheatInfo', function CheatInfo() {
        this.cheat = -1;
      });
      var ChangeBetInfo = exports('ChangeBetInfo', function ChangeBetInfo() {
        this.bet = 0;
        this.aid = -1;
      });
      var ChangeCurrencyInfo = exports('ChangeCurrencyInfo', function ChangeCurrencyInfo() {
        this.currency = 0;
        this.aid = -1;
      });
      var LoginData = exports('LoginData', function LoginData() {
        this.source = 0;
        this.token = "";
        this.os = "";
        this.browser = "";
        this.language = "";
        this.machine = "";
        this.OSVersion = "";
        this.BrowserVersion = "";
        this.Width = 0;
        this.Height = 0;
        this.Ratio = 0;
        this.BrowserTag = 0;
      });
      var ErrorMsg = exports('ErrorMsg', function ErrorMsg() {
        this.AccountID = "";
        this.ShowIndex = "";
        this.ClientMessage = "";
      });
      var MDLoginData = exports('MDLoginData', function MDLoginData() {
        this.SN = 0;
        this.browser = "";
        this.fid = "";
        this.language = "";
        this.os = "";
        this.source = 0;
        this.token = "";
      } //玩家旗標
      );
      var UserID = exports('UserID', function UserID() {
        this.token = "";
        this.lang = 0;
        this.aid = -1;
        this.currencynumber = 0;
        this.stamp = "";
      });
      var SignInInfo = exports('SignInInfo', function SignInInfo() {
        this.aid = 0;
        this.token = "";
        this.currencynumber = 0;
        this.index = "";
      });
      var ItemUserID = exports('ItemUserID', function ItemUserID() {
        this.aid = 0;
        this.token = "";
        this.lang = 0;
        this.currencynumber = 0;
      });
      var ErrorProtocolData = exports('ErrorProtocolData', /*#__PURE__*/function (_ConnectionDataStruct) {
        _inheritsLoose(ErrorProtocolData, _ConnectionDataStruct);

        function ErrorProtocolData() {
          var _this;

          _this = _ConnectionDataStruct.call(this) || this;
          _this.method = ConnectionDataStruct.RequestMethod.Post;
          _this.url = "/account/message";
          _this.info = "";
          _this.reqData = new ErrorMsg();
          return _this;
        }

        return ErrorProtocolData;
      }(ConnectionDataStruct.ProtocolData));
      var LoginProtocolData = exports('LoginProtocolData', /*#__PURE__*/function (_ConnectionDataStruct2) {
        _inheritsLoose(LoginProtocolData, _ConnectionDataStruct2);

        function LoginProtocolData() {
          var _this2;

          _this2 = _ConnectionDataStruct2.call(this) || this;
          _this2.method = ConnectionDataStruct.RequestMethod.Post;
          _this2.url = "/account/login";
          _this2.type = ConnectionDataStruct.ErrorHandleType.Handle;
          _this2.reqData = null;
          return _this2;
        }

        return LoginProtocolData;
      }(ConnectionDataStruct.ProtocolData));
      var InfoProtocolData = exports('InfoProtocolData', /*#__PURE__*/function (_ConnectionDataStruct3) {
        _inheritsLoose(InfoProtocolData, _ConnectionDataStruct3);

        function InfoProtocolData() {
          var _this3;

          _this3 = _ConnectionDataStruct3.call(this) || this;
          _this3.method = ConnectionDataStruct.RequestMethod.Post;
          _this3.url = "/game/info";
          _this3.type = ConnectionDataStruct.ErrorHandleType.Handle;
          _this3.reqData = null;
          return _this3;
        }

        return InfoProtocolData;
      }(ConnectionDataStruct.ProtocolData));
      var SpinProtocolData = exports('SpinProtocolData', /*#__PURE__*/function (_ConnectionDataStruct4) {
        _inheritsLoose(SpinProtocolData, _ConnectionDataStruct4);

        function SpinProtocolData() {
          var _this4;

          _this4 = _ConnectionDataStruct4.call(this) || this;
          _this4.method = ConnectionDataStruct.RequestMethod.Post;
          _this4.url = "/game/spin";
          _this4.type = ConnectionDataStruct.ErrorHandleType.Handle;
          _this4.reqData = null;
          return _this4;
        }

        return SpinProtocolData;
      }(ConnectionDataStruct.ProtocolData));
      var SyncStateProtocolData = exports('SyncStateProtocolData', /*#__PURE__*/function (_ConnectionDataStruct5) {
        _inheritsLoose(SyncStateProtocolData, _ConnectionDataStruct5);

        function SyncStateProtocolData() {
          var _this5;

          _this5 = _ConnectionDataStruct5.call(this) || this;
          _this5.method = ConnectionDataStruct.RequestMethod.Post;
          _this5.url = "/account/last";
          _this5.type = ConnectionDataStruct.ErrorHandleType.Handle;
          _this5.reqData = null;
          return _this5;
        }

        return SyncStateProtocolData;
      }(ConnectionDataStruct.ProtocolData));
      var ExchangechipsProtocolData = exports('ExchangechipsProtocolData', /*#__PURE__*/function (_ConnectionDataStruct6) {
        _inheritsLoose(ExchangechipsProtocolData, _ConnectionDataStruct6);

        function ExchangechipsProtocolData() {
          var _this6;

          _this6 = _ConnectionDataStruct6.call(this) || this;
          _this6.method = ConnectionDataStruct.RequestMethod.Post;
          _this6.url = "/account/exchangechips";
          _this6.reqData = null;
          return _this6;
        }

        return ExchangechipsProtocolData;
      }(ConnectionDataStruct.ProtocolData));
      var HeartBeatProtocolData = exports('HeartBeatProtocolData', /*#__PURE__*/function (_ConnectionDataStruct7) {
        _inheritsLoose(HeartBeatProtocolData, _ConnectionDataStruct7);

        function HeartBeatProtocolData() {
          var _this7;

          _this7 = _ConnectionDataStruct7.call(this) || this;
          _this7.method = ConnectionDataStruct.RequestMethod.Post;
          _this7.url = "/account/heart";
          _this7.reqData = null;
          return _this7;
        }

        return HeartBeatProtocolData;
      }(ConnectionDataStruct.ProtocolData));
      var ChangeCurrencyProtocolData = exports('ChangeCurrencyProtocolData', /*#__PURE__*/function (_ConnectionDataStruct8) {
        _inheritsLoose(ChangeCurrencyProtocolData, _ConnectionDataStruct8);

        function ChangeCurrencyProtocolData() {
          var _this8;

          _this8 = _ConnectionDataStruct8.call(this) || this;
          _this8.method = ConnectionDataStruct.RequestMethod.Post;
          _this8.type = ConnectionDataStruct.ErrorHandleType.Handle;
          _this8.url = "/game/changecurrency";
          _this8.reqData = null;
          return _this8;
        }

        return ChangeCurrencyProtocolData;
      }(ConnectionDataStruct.ProtocolData));
      var JPProtocolData = exports('JPProtocolData', /*#__PURE__*/function (_ConnectionDataStruct9) {
        _inheritsLoose(JPProtocolData, _ConnectionDataStruct9);

        function JPProtocolData() {
          var _this9;

          _this9 = _ConnectionDataStruct9.call(this) || this;
          _this9.method = ConnectionDataStruct.RequestMethod.Post;
          _this9.url = "/game/jpinfo";
          _this9.reqData = null;
          return _this9;
        }

        return JPProtocolData;
      }(ConnectionDataStruct.ProtocolData));
      var ChangeBetProtocolData = exports('ChangeBetProtocolData', /*#__PURE__*/function (_ConnectionDataStruct10) {
        _inheritsLoose(ChangeBetProtocolData, _ConnectionDataStruct10);

        function ChangeBetProtocolData() {
          var _this10;

          _this10 = _ConnectionDataStruct10.call(this) || this;
          _this10.method = ConnectionDataStruct.RequestMethod.Post;
          _this10.type = ConnectionDataStruct.ErrorHandleType.Handle;
          _this10.url = "/game/changebet";
          _this10.reqData = null;
          return _this10;
        }

        return ChangeBetProtocolData;
      }(ConnectionDataStruct.ProtocolData));
      var LogoutProtocolData = exports('LogoutProtocolData', /*#__PURE__*/function (_ConnectionDataStruct11) {
        _inheritsLoose(LogoutProtocolData, _ConnectionDataStruct11);

        function LogoutProtocolData() {
          var _this11;

          _this11 = _ConnectionDataStruct11.call(this) || this;
          _this11.method = ConnectionDataStruct.RequestMethod.Get;
          _this11.url = "/account/logout";
          _this11.info = new UserID();
          return _this11;
        }

        return LogoutProtocolData;
      }(ConnectionDataStruct.ProtocolData));
      var ItemUse = exports('ItemUse', function ItemUse() {
        this.aid = 0;
        this.token = "";
        this.itemindex = 0;
        this.itemid = 0;
        this.amount = 0;
        this.currencynumber = 0;
      });
      var ItemUseReq = exports('ItemUseReq', /*#__PURE__*/function (_ConnectionDataStruct12) {
        _inheritsLoose(ItemUseReq, _ConnectionDataStruct12);

        function ItemUseReq() {
          var _this12;

          _this12 = _ConnectionDataStruct12.call(this) || this;
          _this12.method = ConnectionDataStruct.RequestMethod.Get;
          _this12.url = "/item/usecard";
          _this12.type = ConnectionDataStruct.ErrorHandleType.Handle;
          _this12.info = new ItemUse();
          return _this12;
        }

        return ItemUseReq;
      }(ConnectionDataStruct.ProtocolData));
      var ItemDataReq = exports('ItemDataReq', /*#__PURE__*/function (_ConnectionDataStruct13) {
        _inheritsLoose(ItemDataReq, _ConnectionDataStruct13);

        function ItemDataReq() {
          var _this13;

          _this13 = _ConnectionDataStruct13.call(this) || this;
          _this13.method = ConnectionDataStruct.RequestMethod.Get;
          _this13.url = "/item/itemlist";
          _this13.info = new ItemUserID();
          return _this13;
        }

        return ItemDataReq;
      }(ConnectionDataStruct.ProtocolData));
      var ItemUpdate = exports('ItemUpdate', /*#__PURE__*/function (_ConnectionDataStruct14) {
        _inheritsLoose(ItemUpdate, _ConnectionDataStruct14);

        function ItemUpdate() {
          var _this14;

          _this14 = _ConnectionDataStruct14.call(this) || this;
          _this14.method = ConnectionDataStruct.RequestMethod.Get;
          _this14.url = "/item/checknew";
          _this14.info = new UserID();
          return _this14;
        }

        return ItemUpdate;
      }(ConnectionDataStruct.ProtocolData));
      var ItemAllGameDateReq = exports('ItemAllGameDateReq', /*#__PURE__*/function (_ConnectionDataStruct15) {
        _inheritsLoose(ItemAllGameDateReq, _ConnectionDataStruct15);

        function ItemAllGameDateReq() {
          var _this15;

          _this15 = _ConnectionDataStruct15.call(this) || this;
          _this15.method = ConnectionDataStruct.RequestMethod.Get;
          _this15.url = "/item/allgameitemlist";
          _this15.info = new ItemUserID();
          return _this15;
        }

        return ItemAllGameDateReq;
      }(ConnectionDataStruct.ProtocolData));
      var GetItemMail = exports('GetItemMail', /*#__PURE__*/function (_ConnectionDataStruct16) {
        _inheritsLoose(GetItemMail, _ConnectionDataStruct16);

        function GetItemMail() {
          var _this16;

          _this16 = _ConnectionDataStruct16.call(this) || this;
          _this16.method = ConnectionDataStruct.RequestMethod.Get;
          _this16.url = "/item/getmail";
          _this16.info = new ItemUserID();
          return _this16;
        }

        return GetItemMail;
      }(ConnectionDataStruct.ProtocolData));
      var GetItemMailRead = exports('GetItemMailRead', /*#__PURE__*/function (_ConnectionDataStruct17) {
        _inheritsLoose(GetItemMailRead, _ConnectionDataStruct17);

        function GetItemMailRead() {
          var _this17;

          _this17 = _ConnectionDataStruct17.call(this) || this;
          _this17.method = ConnectionDataStruct.RequestMethod.Get;
          _this17.url = "/item/setread";
          _this17.info = new ItemUserID();
          return _this17;
        }

        return GetItemMailRead;
      }(ConnectionDataStruct.ProtocolData));
      var SignInInfoReq = exports('SignInInfoReq', /*#__PURE__*/function (_ConnectionDataStruct18) {
        _inheritsLoose(SignInInfoReq, _ConnectionDataStruct18);

        function SignInInfoReq() {
          var _this18;

          _this18 = _ConnectionDataStruct18.call(this) || this;
          _this18.method = ConnectionDataStruct.RequestMethod.Get;
          _this18.url = "/vipsignup/signinfo";
          _this18.info = new UserID();
          return _this18;
        }

        return SignInInfoReq;
      }(ConnectionDataStruct.ProtocolData));
      var SignInReq = exports('SignInReq', /*#__PURE__*/function (_ConnectionDataStruct19) {
        _inheritsLoose(SignInReq, _ConnectionDataStruct19);

        function SignInReq() {
          var _this19;

          _this19 = _ConnectionDataStruct19.call(this) || this;
          _this19.method = ConnectionDataStruct.RequestMethod.Get;
          _this19.url = "/vipsignup/rewardinfo";
          _this19.info = new SignInInfo();
          return _this19;
        }

        return SignInReq;
      }(ConnectionDataStruct.ProtocolData));
      var MissionInfo = exports('MissionInfo', function MissionInfo() {
        this.aid = 0;
        this.token = "";
        this.isNow = true;
        this.lang = "";
        this.currencyNumber = 0;
      });
      var GetDailyMission = exports('GetDailyMission', /*#__PURE__*/function (_ConnectionDataStruct20) {
        _inheritsLoose(GetDailyMission, _ConnectionDataStruct20);

        function GetDailyMission() {
          var _this20;

          _this20 = _ConnectionDataStruct20.call(this) || this;
          _this20.method = ConnectionDataStruct.RequestMethod.Get;
          _this20.url = "/mission/getdailymission";
          _this20.info = new MissionInfo();
          return _this20;
        }

        return GetDailyMission;
      }(ConnectionDataStruct.ProtocolData));
      var AwardData = exports('AwardData', function AwardData() {
        this.s = 0;
        this.t = 0;
        this.w = 0;
        this.c = 0;
      });
      var SingleGem = exports('SingleGem', function SingleGem() {
        this.ps = null;
        this.pt = null;
        this.ai = null;
        this.sw = 0;
        this.hu = false;
      } //當盤面有無升級寶石
      );
      var GemData = exports('GemData', function GemData() {
        this.pq = null;
        this.pc = 0;
        this.gw = 0;
      });
      var SingleFree = exports('SingleFree', function SingleFree() {
        this.fgi = null;
        this.fsw = 0;
        this.fat = 0;
        this.fnm = 0;
      } //	FG當局總分
      );
      var FreeData = exports('FreeData', function FreeData() {
        this.fq = null;
        this.fm = 0;
        this.ftw = 0;
      } //	FG總贏分 不含MG
      );
      var SingleBonus = exports('SingleBonus', function SingleBonus() {
        this.bgi = null;
        this.bss = 0;
        this.bsc = 0;
      } //	替換數量
      );
      var BonusData = exports('BonusData', function BonusData() {
        this.bsb = null;
        this.bc = 0;
        this.btw = 0;
      } //	BG總贏分 不含MG
      );
      var BetMulData = exports('BetMulData', function BetMulData() {
        this.bmm = 0;
        this.bmtw = 0;
      } //	押注倍率總贏分
      );
      var JPData = exports('JPData', function JPData() {
        this.jt = 0;
        this.jtw = 0;
      } //	JP總贏分
      );
      var SpinAckQue = exports('SpinAckQue', function SpinAckQue() {
        this.gi = null;
        this.cp = false;
        this.cpi = 0;
        this.mw = 0;
        this.ww = 0;
        this.aw = 0;
        this.at = 0;
        this.nm = 0;
        this.act = 0;
        this.gwe = false;
        this.wt = 0;
        this.fi = null;
        this.bi = null;
        this.bmi = null;
        this.jpi = null;
        this.uc = 0;
        this.tuc = 0;
        this.si = "";
      } //當局編號
      );
      var LastAck = exports('LastAck', function LastAck() {
        this.lastspin = null;
        this.result = 0;
      });
      var ComboData = exports('ComboData', function ComboData() {
        this.Combolist = null;
        this.MUL = null;
      });
      var Ack = exports('Ack', function Ack() {
        this.info = void 0;
        this.jpinfo = null;
        this.serviceInfo = void 0;
      });
      var HistoryInfo = exports('HistoryInfo', function HistoryInfo() {
        this.Info = null;
        this.Id = "";
        this.IsFreeGame = false;
      });
      var ShareJP = exports('ShareJP', function ShareJP() {
        this.Fronts = null;
      });
      var JPInfo = exports('JPInfo', function JPInfo() {
        this.Share = null;
        this.Self = -1;
      });
      var MHBInfoReq = exports('MHBInfoReq', /*#__PURE__*/function (_ConnectionDataStruct21) {
        _inheritsLoose(MHBInfoReq, _ConnectionDataStruct21);

        function MHBInfoReq() {
          var _this21;

          _this21 = _ConnectionDataStruct21.call(this) || this;
          _this21.method = ConnectionDataStruct.RequestMethod.Get;
          _this21.url = "/fulljp/jpinfo";
          _this21.info = new MHBUserInfo();
          return _this21;
        }

        return MHBInfoReq;
      }(ConnectionDataStruct.ProtocolData));
      var MHBInfoAllReq = exports('MHBInfoAllReq', /*#__PURE__*/function (_ConnectionDataStruct22) {
        _inheritsLoose(MHBInfoAllReq, _ConnectionDataStruct22);

        function MHBInfoAllReq() {
          var _this22;

          _this22 = _ConnectionDataStruct22.call(this) || this;
          _this22.method = ConnectionDataStruct.RequestMethod.Get;
          _this22.url = "/fulljp/jpinfoall";
          _this22.info = new MHBUserInfo();
          return _this22;
        }

        return MHBInfoAllReq;
      }(ConnectionDataStruct.ProtocolData));
      var MHBHistoryReq = exports('MHBHistoryReq', /*#__PURE__*/function (_ConnectionDataStruct23) {
        _inheritsLoose(MHBHistoryReq, _ConnectionDataStruct23);

        function MHBHistoryReq() {
          var _this23;

          _this23 = _ConnectionDataStruct23.call(this) || this;
          _this23.method = ConnectionDataStruct.RequestMethod.Get;
          _this23.url = "/fulljp/jpHistory";
          _this23.info = new MHBUserInfo();
          return _this23;
        }

        return MHBHistoryReq;
      }(ConnectionDataStruct.ProtocolData));
      var MHBUserInfo = exports('MHBUserInfo', function MHBUserInfo() {
        this.aid = -1;
        this.token = "";
      });
      var JPUserInfo = exports('JPUserInfo', function JPUserInfo() {
        this.aid = -1;
        this.token = "";
        this.currencynumber = 0;
      });
      var JPInfoReq = exports('JPInfoReq', /*#__PURE__*/function (_ConnectionDataStruct24) {
        _inheritsLoose(JPInfoReq, _ConnectionDataStruct24);

        function JPInfoReq() {
          var _this24;

          _this24 = _ConnectionDataStruct24.call(this) || this;
          _this24.method = ConnectionDataStruct.RequestMethod.Get;
          _this24.url = "/unionjp/jpinfo";
          _this24.info = new JPUserInfo();
          return _this24;
        }

        return JPInfoReq;
      }(ConnectionDataStruct.ProtocolData));
      var JPHistoryReq = exports('JPHistoryReq', /*#__PURE__*/function (_ConnectionDataStruct25) {
        _inheritsLoose(JPHistoryReq, _ConnectionDataStruct25);

        function JPHistoryReq() {
          var _this25;

          _this25 = _ConnectionDataStruct25.call(this) || this;
          _this25.method = ConnectionDataStruct.RequestMethod.Get;
          _this25.url = "/unionjp/jphistory";
          _this25.info = new JPUserInfo();
          return _this25;
        }

        return JPHistoryReq;
      }(ConnectionDataStruct.ProtocolData));
      var JPBlockReq = exports('JPBlockReq', /*#__PURE__*/function (_ConnectionDataStruct26) {
        _inheritsLoose(JPBlockReq, _ConnectionDataStruct26);

        function JPBlockReq() {
          var _this26;

          _this26 = _ConnectionDataStruct26.call(this) || this;
          _this26.method = ConnectionDataStruct.RequestMethod.Get;
          _this26.url = "/unionjp/jpblock";
          _this26.info = new JPUserInfo();
          return _this26;
        }

        return JPBlockReq;
      }(ConnectionDataStruct.ProtocolData));
      var JPBAllReq = exports('JPBAllReq', /*#__PURE__*/function (_ConnectionDataStruct27) {
        _inheritsLoose(JPBAllReq, _ConnectionDataStruct27);

        function JPBAllReq() {
          var _this27;

          _this27 = _ConnectionDataStruct27.call(this) || this;
          _this27.method = ConnectionDataStruct.RequestMethod.Get;
          _this27.url = "/unionjp/jpinfoall";
          _this27.info = new JPUserInfo();
          return _this27;
        }

        return JPBAllReq;
      }(ConnectionDataStruct.ProtocolData));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EffectPlate.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './GameView.ts', './DataStructure.ts', './Symbol.ts', './Explode.ts', './Tools.ts', './SoundManager.ts', './GS_Define.ts', './SingleWin.ts', './Combo.ts', './Win.ts', './HistoryView.ts', './LocaleStringManager.ts', './GemPool.ts', './MultiEffect.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Animation, Prefab, v3, Sprite, tween, instantiate, AudioSource, log, UIOpacity, Tween, Component, FADE_TYPE, HistoryInfo, AwardData, Symbol, EIGHT_SIDED, Explode, Tools, SoundManager, GS_Define, SingleWin, Combo, Win, HistoryView, LocaleStringManager, GemPool, MultiEffect;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Animation = module.Animation;
      Prefab = module.Prefab;
      v3 = module.v3;
      Sprite = module.Sprite;
      tween = module.tween;
      instantiate = module.instantiate;
      AudioSource = module.AudioSource;
      log = module.log;
      UIOpacity = module.UIOpacity;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      FADE_TYPE = module.FADE_TYPE;
    }, function (module) {
      HistoryInfo = module.HistoryInfo;
      AwardData = module.AwardData;
    }, function (module) {
      Symbol = module.default;
    }, function (module) {
      EIGHT_SIDED = module.EIGHT_SIDED;
      Explode = module.default;
    }, function (module) {
      Tools = module.default;
    }, function (module) {
      SoundManager = module.default;
    }, function (module) {
      GS_Define = module.default;
    }, function (module) {
      SingleWin = module.default;
    }, function (module) {
      Combo = module.default;
    }, function (module) {
      Win = module.default;
    }, function (module) {
      HistoryView = module.default;
    }, function (module) {
      LocaleStringManager = module.default;
    }, function (module) {
      GemPool = module.default;
    }, function (module) {
      MultiEffect = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33;

      cclegacy._RF.push({}, "f7b79V90ZZETbMo3KKr0Zyu", "EffectPlate", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SIDED_TABLE = exports('SIDED_TABLE', [[EIGHT_SIDED.DOWN_LEFT, EIGHT_SIDED.LEFT, EIGHT_SIDED.TOP_LEFT], [EIGHT_SIDED.DOWN, EIGHT_SIDED.CENTER, EIGHT_SIDED.TOP], [EIGHT_SIDED.DOWN_RIGHT, EIGHT_SIDED.RIGHT, EIGHT_SIDED.TOP_RIGHT]]);
      var UPGRADE_ANIM_NAME = ["Upgrade6to4", "Upgrade4to5", "Upgrade5to6"];
      var EffectPlate = exports('default', (_dec = property({
        type: GemPool,
        tooltip: "寶石池"
      }), _dec2 = property({
        type: Node,
        tooltip: "寶石層"
      }), _dec3 = property({
        type: Node,
        tooltip: "特效層"
      }), _dec4 = property({
        type: Node,
        tooltip: "大獎表演"
      }), _dec5 = property({
        type: Node,
        tooltip: "個別寶石贏分"
      }), _dec6 = property({
        type: Animation,
        tooltip: "Combo動畫"
      }), _dec7 = property({
        type: Prefab,
        tooltip: "取的收集素材表演prefab"
      }), _dec8 = property({
        type: Prefab,
        tooltip: "餅乾消除表演prefab"
      }), _dec9 = property({
        type: Node,
        tooltip: "餅乾條,依消除順序"
      }), _dec10 = property({
        type: Prefab,
        tooltip: "bonus轉換成wild的表演prefab"
      }), _dec11 = property({
        type: Prefab,
        tooltip: "結算Prefab"
      }), _dec12 = property({
        type: Prefab,
        tooltip: "FG加倍表演"
      }), _dec13 = property({
        type: Prefab,
        tooltip: "大獎Prefab，由小到大"
      }), _dec14 = property({
        type: HistoryView,
        tooltip: "歷史紀錄"
      }), _dec15 = property({
        type: Animation,
        tooltip: "罐子背景"
      }), _dec16 = property({
        type: Animation,
        tooltip: "罐子糖果"
      }), _dec17 = property({
        type: Animation,
        tooltip: "罐子主體"
      }), _dec18 = property({
        type: Animation,
        tooltip: "罐子數字"
      }), _dec19 = property({
        type: Animation,
        tooltip: "罐子特效"
      }), _dec20 = property({
        type: Node,
        tooltip: "罐子本體"
      }), _dec21 = property({
        type: Animation,
        tooltip: "罐子背景 直版"
      }), _dec22 = property({
        type: Animation,
        tooltip: "罐子糖果 直版"
      }), _dec23 = property({
        type: Animation,
        tooltip: "罐子主體 直版"
      }), _dec24 = property({
        type: Animation,
        tooltip: "罐子數字 直版"
      }), _dec25 = property({
        type: Animation,
        tooltip: "罐子特效 直版"
      }), _dec26 = property({
        type: Animation,
        tooltip: "升級表演"
      }), _dec27 = property({
        type: Node,
        tooltip: "FG背景特效"
      }), _dec28 = property({
        type: Node,
        tooltip: "BG背景特效"
      }), _dec29 = property({
        type: Node,
        tooltip: "Lock條"
      }), _dec30 = property({
        type: Animation,
        tooltip: "取得輪盤表演，橫版"
      }), _dec31 = property({
        type: Animation,
        tooltip: "取得輪盤表演，直版"
      }), _dec32 = property({
        type: Node,
        tooltip: "取得輪盤表演節點，橫版"
      }), _dec33 = property({
        type: Node,
        tooltip: "取得輪盤表演節點，直版"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EffectPlate, _Component);

        function EffectPlate() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_gemPool", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_gemViewNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_effectViewNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_winViewNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_singleWinViewNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_comboAnim", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_getElementPrefab", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_brickPrefab", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_brickNodes", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_change2WildPrefab", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_congratPrefab", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_multiEffectPrefab", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_winPrefabs", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_historyView", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_boxBootomAnim", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_boxCandiesAnim", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_boxMainAnim", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_boxCountsAnim", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_boxCoverAnim", _descriptor19, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_candyBoxNode", _descriptor20, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_boxBootomAnim_S", _descriptor21, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_boxCandiesAnim_S", _descriptor22, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_boxMainAnim_S", _descriptor23, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_boxCountsAnim_S", _descriptor24, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_boxCoverAnim_S", _descriptor25, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_upgradeAnim", _descriptor26, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_fgBgEffectNode", _descriptor27, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_bgBgEffectNode", _descriptor28, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_lockBarNodes", _descriptor29, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_getWheelAnim_L", _descriptor30, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_getWheelAnim_S", _descriptor31, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_nodeMotion_L", _descriptor32, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_nodeMotion_S", _descriptor33, _assertThisInitialized(_this));

          _this.m_slotReels = null;
          _this.m_define = null;
          _this.m_explodeNodes = new Array();
          _this.m_gameView = null;
          _this.m_isDropExtraEnd = false;
          _this.m_comboData = null;
          _this.m_combo = 0;
          _this.m_winSoundId = null;
          _this.m_winNode = null;
          _this.m_multiEffectNode = null;
          _this.m_lastBrickNode = null;
          _this.m_congratFinalCb = null;
          _this.spritePos = new Array(10).fill(v3(0, 0));
          _this.cntGrm = void 0;
          _this.reward = [[2, 4, 6, 8, 10, 20, 30, 50, 100, 200, 400, 400, 400], [4, 5, 10, 20, 30, 50, 100, 250, 500, 750, 800, 800, 800], [5, 10, 20, 40, 80, 160, 500, 1000, 2000, 5000, 6000, 6000, 6000], [10, 30, 50, 60, 100, 750, 1000, 10000, 20000, 50000, 60000, 60000, 60000], [20, 50, 100, 500, 1000, 2000, 5000, 20000, 50000, 60000, 80000, 80000, 80000]];
          _this.m_isOpenCap = false;
          _this.m_isShowBoxEffect = false;
          return _this;
        }

        var _proto = EffectPlate.prototype;

        _proto.start = function start() {};

        _proto.OnRotation = function OnRotation(isLandscape) {
          if (isLandscape) {
            if (this.m_winNode && this.m_winNode.name === this.m_congratPrefab.name) {
              this.m_winNode.setScale(1, 1, 1);
            }

            if (this.m_multiEffectNode) {
              this.m_multiEffectNode.setScale(1, 1, 1);
            }
          } else {
            if (this.m_winNode && this.m_winNode.name === this.m_congratPrefab.name) {
              this.m_winNode.setScale(0.8, 0.8, 1);
            }

            if (this.m_multiEffectNode) {
              this.m_multiEffectNode.setScale(0.8, 0.8, 1);
            }
          }
        };

        _proto.Init = function Init(gameView, spinPlate, defin) {
          this.m_gameView = gameView;
          this.m_slotReels = spinPlate;
          this.m_define = defin;

          for (var i = 0; i < GS_Define.PLATE_SIZE; i++) {
            var colArray = new Array();

            for (var j = 0; j < GS_Define.PLATE_SIZE; j++) {
              var node = new Node();
              node.addComponent(Sprite);
              colArray.push(node);
            }

            this.m_explodeNodes.push(colArray);
          }

          this.m_historyView.Init(gameView);
          this.m_gemPool.Init(this.m_gemViewNode, this.m_effectViewNode, this.m_singleWinViewNode, gameView);
        }
        /**
         * TODO 產生消除特效的node
         * @param infos 獎勵資訊
         * @param tags 盤面的Tag，相同Tag的表示同一組
         * @param showIndex Spin Ack的當局編號
         * @param endCb 結束回調
         */
        ;

        _proto.CreateExplodeRune = function CreateExplodeRune(infos, tags, showIndex, endCb) {};

        _proto.explode = function explode(x, y, isFirst, len, bet) {
          var _this2 = this;

          var symbol = this.m_slotReels.GetSymbolByPosition(v3(x, y)).getComponent(Symbol);
          var expNode = this.m_gemPool.GetGem(v3(x, y));
          expNode.SetPosition(symbol.node.position);
          var explodeControl = expNode.GemNode.getComponent(Explode);
          var fireAnim = expNode.EffectNode.getComponent(Animation);
          explodeControl.SetSymbol(symbol.SymbolType, symbol.SpriteFrame, null);
          symbol.node.active = false;
          expNode.Show();
          explodeControl.ShowExplode(false);
          fireAnim.play();
          symbol.SetLight();
          tween(expNode).delay(0.4).call(function () {
            expNode.Hide(0);

            _this2.m_slotReels.hideSymbol(x, y);
          }).start(); //this.cntGrm[symbol.SymbolType]++;

          this.spritePos[symbol.SymbolType] = v3(x, y); //在在

          if (isFirst) {
            this.cntGrm[symbol.SymbolType] = len;
            var singleWin = expNode.WinNode.getComponent(SingleWin);
            var winAni = expNode.WinNode.getComponent(Animation);
            if (singleWin !== null) singleWin.Win = bet * this.reward[symbol.SymbolType][len - 4] / 10;

            if (winAni !== null) {
              expNode.WinNode.active = true;
              winAni.play();
            }
          }
        };

        _proto.historyInit = function historyInit() {
          this.cntGrm = new Array(10).fill(0);
        };

        _proto.Showhistory = function Showhistory(n, f) {
          var infoarray = new Array();
          var info = new HistoryInfo();
          var award = new AwardData();

          for (var i = 0; i < 5; ++i) {
            //log("進入歷史前：" + i + "號 " + this.cntGrm[i] + "個");
            if (this.cntGrm[i] > 0) {
              //log("進入歷史");
              award.s = i;
              award.c = this.cntGrm[i];
              award.w = n * this.reward[i][award.c - 4] / 10;
              if (f) award.w *= this.m_gameView.magnification;
              this.m_gameView.addWin(award.w);
              info.Info = award;
              infoarray.push(info);
              var symbol = this.m_slotReels.GetSymbolByPosition(this.spritePos[i]).getComponent(Symbol);
              this.m_historyView.AddHistoryRecords(infoarray, symbol.SpriteFrame, false);
            }
          }

          this.historyInit();
        };

        _proto.cookies = function cookies(n) {
          if (this.m_lastBrickNode) {
            this.m_lastBrickNode.removeFromParent();
            this.m_lastBrickNode.destroy();
            this.m_lastBrickNode = null;
          }

          var brickNode = this.m_brickNodes[GS_Define.PLATE_SIZE - 4].getChildByName("brick_" + n); //log("這是什麼brick_" + GS_Define.COLLECT_MAX);

          this.m_lastBrickNode = instantiate(this.m_brickPrefab);
          brickNode.addChild(this.m_lastBrickNode);
          brickNode.getComponent(Sprite).enabled = false;
          this.m_lastBrickNode.getComponent(Animation).play("Brick_Effect_crack"); //this.cookieAudio();
        };

        _proto.Wild = function Wild() {
          if (!this.node.getComponent(AudioSource)) this.node.addComponent(AudioSource);
          var audioSourse = this.node.getComponent(AudioSource);
          var audio = GS_Define.AudioClips.Wild;
          audioSourse.clip = audio;
          audioSourse.play();
        };

        _proto.RamSymbol = function RamSymbol() {
          if (!this.node.getComponent(AudioSource)) this.node.addComponent(AudioSource);
          var audioSourse = this.node.getComponent(AudioSource);
          var audio = GS_Define.AudioClips.Ram_symbol;
          audioSourse.clip = audio;
          audioSourse.play();
        };

        _proto.cookieAudio = function cookieAudio() {
          if (!this.node.getComponent(AudioSource)) this.node.addComponent(AudioSource);
          var audioSourse = this.node.getComponent(AudioSource);
          var audio = GS_Define.AudioClips.cookie;
          audioSourse.clip = audio;
          audioSourse.play();
        };

        _proto.Wheel_Rotate = function Wheel_Rotate() {
          if (!this.node.getComponent(AudioSource)) this.node.addComponent(AudioSource);
          var audioSourse = this.node.getComponent(AudioSource);
          var audio = GS_Define.AudioClips.Wheel_Rotate;
          audioSourse.clip = audio;
          audioSourse.play();
        };

        _proto.PlateUpgrade = function PlateUpgrade() {
          if (!this.node.getComponent(AudioSource)) this.node.addComponent(AudioSource);
          var audioSourse = this.node.getComponent(AudioSource);
          var audio = GS_Define.AudioClips.PlateUpgrade;
          audioSourse.clip = audio;
          audioSourse.play();
        };

        _proto.EnterFree = function EnterFree() {
          if (!this.node.getComponent(AudioSource)) this.node.addComponent(AudioSource);
          var audioSourse = this.node.getComponent(AudioSource);
          var audio = GS_Define.AudioClips.EnterFree;
          audioSourse.clip = audio;
          audioSourse.play();
        };

        _proto.CandyDrop = function CandyDrop() {
          if (!this.node.getComponent(AudioSource)) this.node.addComponent(AudioSource);
          var audioSourse = this.node.getComponent(AudioSource);
          var audio = GS_Define.AudioClips.Candy_drop;
          audioSourse.clip = audio;
          audioSourse.play();
        };

        _proto.TryMusic = function TryMusic() {
          if (!this.node.getComponent(AudioSource)) this.node.addComponent(AudioSource);
          var audioSourse = this.node.getComponent(AudioSource);
          var audio = GS_Define.AudioClips.Mg_Reel;
          audioSourse.clip = audio;
          audioSourse.play();
        };

        _proto.ComboInit = function ComboInit() {
          var combo = this.m_comboAnim.node.getComponent(Combo);
          combo.Init();
        };

        _proto.ShowCombo = function ShowCombo() {
          var _this3 = this;

          log("Combo");
          var combo = this.m_comboAnim.node.getComponent(Combo);
          combo.AddCombo(false);
          if (!this.node.getComponent(AudioSource)) this.node.addComponent(AudioSource);
          var audioSourse = this.node.getComponent(AudioSource);
          var audio;
          if (combo.Number === 1) audio = GS_Define.AudioClips.combo_1;else if (combo.Number === 2) audio = GS_Define.AudioClips.combo_2;else if (combo.Number === 2) audio = GS_Define.AudioClips.combo_3;else if (combo.Number === 2) audio = GS_Define.AudioClips.combo_4;else audio = GS_Define.AudioClips.combo_5;
          audioSourse.clip = audio;
          audioSourse.play(); //

          if (this.m_comboAnim) {
            if (combo.Number > 1) {
              this.m_comboAnim.play("Combo_normal");
              tween(this.m_comboAnim.node).delay(2).call(function () {
                _this3.m_comboAnim.play("Combo_end");
              }).start();
            }
          }
        };

        _proto.CleanHistoryView = function CleanHistoryView() {
          this.m_historyView.ClearRecords();
        };

        _proto.HideCombo = function HideCombo() {
          log("HideCombo game state EXPLODE", Date.now());
          this.m_combo = 0;
          var combo = this.m_comboAnim.node.getComponent(Combo);

          if (this.m_comboAnim) {
            if (combo.Number > 1) {
              this.m_comboAnim.play("Combo_end" + (this.m_slotReels.IsHardStop ? "_H" : ""));
              var animState = this.m_comboAnim.getState("Combo_end" + (this.m_slotReels.IsHardStop ? "_H" : ""));
              tween(this.m_comboAnim.node).delay(animState.duration).call(function () {
                combo.Init();
              }).start();
            } else {
              combo.Init();
            }
          }
        };

        _proto.ComboToLvl = function ComboToLvl(combo) {
          var lvl = -1;

          if (combo >= this.m_comboData.Combolist[this.m_comboData.Combolist.length - 1]) {
            lvl = this.m_comboData.Combolist.length - 1;
          } else {
            for (var i = 0; i < this.m_comboData.Combolist.length - 1; i++) {
              if (combo >= this.m_comboData.Combolist[i] && combo < this.m_comboData.Combolist[i + 1]) {
                lvl = i;
                break;
              }
            }
          }

          return lvl;
        };

        _proto.InitElement = function InitElement() {
          if (GS_Define.PLATE_SIZE > GS_Define.MIN_PLATE_SIZE) {
            for (var j = 0; j < GS_Define.PLATE_SIZE - GS_Define.MIN_PLATE_SIZE; j++) {
              for (var i = 1; i <= GS_Define.COLLECT_MAX; i++) {
                var node = this.m_brickNodes[j].getChildByName("brick_" + i);
                node.getComponent(Sprite).enabled = false;
              }

              this.m_brickNodes[j].active = false;
            }
          } //清除上次的最後一個餅乾


          if (this.m_lastBrickNode) {
            var parent = this.m_lastBrickNode.parent;
            var sprite = parent.getComponent(Sprite);
            sprite.enabled = true;
            this.m_lastBrickNode.removeFromParent();
            this.m_lastBrickNode.destroy();
            this.m_lastBrickNode = null;
          } //是否需要提示剩最後一個


          if (this.m_gameView.CollectionCount === GS_Define.COLLECT_MAX - 1) {
            this.ShowLastElementHint();
          }

          for (var _i = 1; _i <= GS_Define.COLLECT_MAX; _i++) {
            var _node = this.m_brickNodes[GS_Define.PLATE_SIZE - 4].getChildByName("brick_" + _i);

            _node.getComponent(Sprite).enabled = true;
            _node.active = true;
          }

          if (this.m_gameView.CollectionCount !== 0) {
            for (var _i2 = 1; _i2 <= this.m_gameView.CollectionCount; _i2++) {
              log(_i2);

              var _node2 = this.m_brickNodes[GS_Define.PLATE_SIZE - 4].getChildByName("brick_" + _i2);

              _node2.getComponent(Sprite).enabled = false;
              _node2.active = false;
            }
          }

          this.m_upgradeAnim.play("Upgrade" + GS_Define.PLATE_SIZE);
          var animName = "candy_%s_loop";

          if (this.m_gameView.CollectionCount < GS_Define.COLLECT_MAX) {
            if (this.m_gameView.CollectionCount === 0) {
              animName = "candies_normal";
            } else {
              animName = animName.replace("%s", "0" + this.m_gameView.CollectionCount);
            }
          } else {
            animName = animName.replace("%s", this.m_gameView.CollectionCount.toString());
          }

          this.m_boxCandiesAnim.play(animName);
          this.m_boxCandiesAnim_S.play(animName);
        };

        _proto.CloseCap = function CloseCap(isGetWheel) {
          if (this.m_isOpenCap) {
            this.m_isOpenCap = false;
            this.m_boxMainAnim.play("cap_end");
            var animState = this.m_boxMainAnim.getState("cap_end");
            this.m_boxBootomAnim.play("cap_B_end");
            this.m_boxMainAnim_S.play("cap_end");
            this.m_boxBootomAnim_S.play("cap_B_end");

            if (!isGetWheel) {
              tween(this.m_candyBoxNode.getComponent(UIOpacity)).delay(animState.duration + 0.5).to(0.5, {
                opacity: 0
              }).start();
            }
          }
        };

        _proto.HideCandyBox = function HideCandyBox() {
          tween(this.m_candyBoxNode.getComponent(UIOpacity)).to(0.5, {
            opacity: 0
          }).start();
        };

        _proto.OpenCap = function OpenCap() {
          if (!this.m_isOpenCap) {
            this.m_isOpenCap = true;
            this.m_boxMainAnim.play("cap_start");
            this.m_boxBootomAnim.play("cap_B_start");
            this.m_boxMainAnim_S.play("cap_start");
            this.m_boxBootomAnim_S.play("cap_B_start");
          }
        };

        _proto.BoxEffectEnd = function BoxEffectEnd() {
          if (this.m_isShowBoxEffect) {
            this.m_isShowBoxEffect = false;
            this.m_boxCoverAnim.play("FX_shine_end");
            this.m_boxCoverAnim_S.play("FX_shine_end");
            this.m_boxCandiesAnim.play("candies_end");
            this.m_boxCandiesAnim_S.play("candies_end");

            if (this.m_gameView.CollectionCount >= GS_Define.COLLECT_MAX) {
              this.m_gameView.CleanCollect();
            }
          }
        };

        _proto.ShowGetWheel = function ShowGetWheel(wheelShowCb) {
          var _this4 = this;

          var animState = null;
          this.m_getWheelAnim_L.play("JP_SymbolFX01_End");
          animState = this.m_getWheelAnim_L.getState("JP_SymbolFX01_End");
          this.m_getWheelAnim_S.play("JP_SymbolFX02_End");
          tween(this.node).delay(animState.duration).call(function () {
            _this4.m_nodeMotion_L.active = false;
            _this4.m_nodeMotion_S.active = false;

            _this4.HideCandyBox();

            if (wheelShowCb) {
              wheelShowCb();
            }
          }).start();
        };

        _proto.ShowLastElementHint = function ShowLastElementHint() {
          if (this.m_lastBrickNode) {
            this.m_lastBrickNode.removeFromParent();
            this.m_lastBrickNode.destroy();
            this.m_lastBrickNode = null;
          }

          var brickNode = this.m_brickNodes[GS_Define.PLATE_SIZE - 4].getChildByName("brick_" + GS_Define.COLLECT_MAX);
          this.m_lastBrickNode = instantiate(this.m_brickPrefab);
          brickNode.addChild(this.m_lastBrickNode);
          brickNode.getComponent(Sprite).enabled = false;
          this.m_lastBrickNode.getComponent(Animation).play("Brick_Effect_loop1");
        }
        /**
         * TODO 表演獲得升級素材
         * @param pos 升級素材位置
         * @param isLandscape 是否為橫版
         * @param isGetWheel 是否取得轉盤
         * @param addCb 增加收集素材數量
         * @param endCb 結束回調
         */
        ;

        _proto.ShowGetElement = function ShowGetElement(pos, isLandscape, isGetWheel, addCb, endCb) {};

        _proto.ShowGetElement_ = function ShowGetElement_(n) {
          var _this5 = this; // todo


          log("進入取得升級");
          this.OpenCap(); // 打開罐子

          var m_getElement = instantiate(this.m_getElementPrefab);
          this.node.addChild(m_getElement);
          m_getElement.setPosition(v3(520, 55));
          var anim = m_getElement.getComponent(Animation);
          if (anim) anim.play(); //收集糖果特效

          /*
          this.m_gameView.addCollection();
          this.ShowChangeBetHint();
            this.m_boxCandiesAnim.play("candy_01_start"); //把第x顆糖果放進去
          this.m_boxCandiesAnim_S.play("candy_01_start");
          */
          //this.m_boxCandiesAnim.play("candy_01_loop"); //第x顆糖果存在罐子中
          //this.m_boxCoverAnim.play("FX_shine_start"); //收集10顆亮了

          tween(this.node).delay(n).call(function () {
            _this5.CloseCap(false);
          }).start();
          /*
          let clips = this.m_boxCoverAnim.clips;
          if (clips) {
            // 打印動畫剪輯的數量和名稱
            log(`總共有 ${clips.length} 個動畫剪輯`);
            for (let clip of clips) {
              log(`動畫名稱: ${clip.name}`);
            }
          } else {
            log("沒有找到動畫剪輯");
          }*/
        };

        _proto.PutElement = function PutElement() {
          this.m_gameView.addCollection();
          this.ShowChangeBetHint(); //this.m_boxCandiesAnim.play("candy_01_start"); //把第x顆糖果放進去
          //this.m_boxCandiesAnim_S.play("candy_01_start");

          this.cookies(this.m_gameView.CollectionCount);
          var animName = "candy_%s_start";

          if (this.m_gameView.CollectionCount < GS_Define.COLLECT_MAX) {
            if (this.m_gameView.CollectionCount === 0) {
              animName = "candies_normal";
            } else {
              animName = animName.replace("%s", "0" + this.m_gameView.CollectionCount);
            }
          } else {
            animName = animName.replace("%s", this.m_gameView.CollectionCount.toString());
          }

          this.m_boxCandiesAnim.play(animName);
          this.m_boxCandiesAnim_S.play(animName);
        };

        _proto.ShowChangeBetHint = function ShowChangeBetHint() {
          this.m_boxCountsAnim.play("count_hint");
          this.m_boxCountsAnim_S.play("count_hint");
        };

        _proto.ShowUpGrade = function ShowUpGrade(endCb) {
          var _this6 = this;

          var animName = UPGRADE_ANIM_NAME[GS_Define.PLATE_SIZE - GS_Define.MIN_PLATE_SIZE];
          if (GS_Define.PLATE_SIZE !== GS_Define.MIN_PLATE_SIZE) ;else {
            tween(this.node).delay(Tools.divide(62, 60)).call(function () {}).start();
          }
          this.m_upgradeAnim.play(animName);
          var animState = this.m_upgradeAnim.getState(animName);
          tween(this.m_upgradeAnim.node).delay(animState.duration).call(function () {
            if (GS_Define.PLATE_SIZE > GS_Define.MIN_PLATE_SIZE) {
              _this6.m_brickNodes[GS_Define.PLATE_SIZE - 5].active = false;
            }

            if (GS_Define.PLATE_SIZE == GS_Define.MIN_PLATE_SIZE) {
              for (var i = 0; i < _this6.m_brickNodes.length; i++) {
                _this6.m_brickNodes[i].active = true;

                for (var j = 1; j < 11; j++) {
                  var node = _this6.m_brickNodes[i].getChildByName("brick_" + j);

                  node.getComponent(Sprite).enabled = true;
                  node.active = true;
                }
              }
            }

            _this6.m_upgradeAnim.play("Upgrade" + GS_Define.PLATE_SIZE);

            if (endCb) {
              endCb();
            }
          }).start();
        }
        /**
         * TODO BG置換表演
         * @param symbol 哪個symbol要置換成wild
         * @param total 要置換的數量
         * @param orgPlate 原始盤面
         * @param endCb 結束回調
         * @param extraNodes 置換提示的node
         */
        ;

        _proto.ShowBonus = function ShowBonus(symbol, total, orgPlate, endCb, extraNodes) {};

        _proto.ShowEnterFree = function ShowEnterFree() {
          log("進進");
          this.m_fgBgEffectNode.active = true;

          for (var i = 0; i < this.m_lockBarNodes.length; i++) {
            this.m_lockBarNodes[i].getComponent(UIOpacity).opacity = 128;
          }
        };

        _proto.LeaveFree = function LeaveFree() {
          this.m_fgBgEffectNode.active = false;

          for (var i = 0; i < this.m_lockBarNodes.length; i++) {
            this.m_lockBarNodes[i].getComponent(UIOpacity).opacity = 255;
          }
        };

        _proto.ShowEnterBonus = function ShowEnterBonus() {
          this.m_bgBgEffectNode.active = true;

          for (var i = 0; i < this.m_lockBarNodes.length; i++) {
            this.m_lockBarNodes[i].getComponent(UIOpacity).opacity = 128;
          }
        };

        _proto.LeaveBonus = function LeaveBonus() {
          this.m_bgBgEffectNode.active = false;

          for (var i = 0; i < this.m_lockBarNodes.length; i++) {
            this.m_lockBarNodes[i].getComponent(UIOpacity).opacity = 255;
          }
        };

        _proto.StopWin = function StopWin() {
          var _this7 = this;

          if (this.m_multiEffectNode) {
            var multiEffect = this.m_multiEffectNode.getComponent(MultiEffect);
            multiEffect.Stop();
          }

          if (this.m_winNode) {
            var win = this.m_winNode.getComponent(Win);
            win.Stop(this.m_gameView, function () {
              if (_this7.m_congratFinalCb) {
                _this7.m_congratFinalCb();

                _this7.m_congratFinalCb = null;
              }
            }, function () {
              Tween.stopAllByTarget(_this7.node);
            });
          }

          if (this.m_winSoundId !== null) {
            SoundManager.getInstance().Stop(this.m_winSoundId);
          }
        }
        /**
         * TODO 結算表演
         * @param totalWin 總贏分
         * @param lvl 等級
         * @param type 遊戲類型
         * @param multiNode 倍率節點
         * @param endCb 結束回調
         * @param multi 倍率數值
         */
        ;

        _proto.ShowCongrat = function ShowCongrat(totalWin, lvl, type, multiNode, endCb, multi) {};

        _proto.showWin = function showWin(b) {
          var _this8 = this;

          log("會win喔");
          var winn = instantiate(this.m_congratPrefab);
          this.node.addChild(winn);
          var w = winn.getComponent(Win);

          if (b) {
            var spriteAltas = LocaleStringManager.GetInstance().GetGameAtlas();
            var titleString = GS_Define.BASE_EVENT_PIC_NAME.BG;
            w.ChangeTitle(spriteAltas.getSpriteFrame(titleString), spriteAltas.getSpriteFrame(GS_Define.BASE_EVENT_PIC_NAME.TITLE));
          }

          if (w) {
            log("真的會win喔"); // 分數 時間 類型

            w.Show(this.m_gameView.getWin(), 4, 0, this.m_gameView, function () {
              tween(_this8.node).delay(1).call(function () {
                w.End(_this8.m_gameView, function () {
                  winn.removeFromParent();
                  winn.destroy();
                  winn = null;
                });
              }).start();
            });
          }
          /*
            let anim = winn.getComponent(Animation);
          if (anim) {
            anim.play();
            log("真的會win喔");
          }*/

        };

        _proto.ShowAward = function ShowAward(totalWin, lvl, endCb) {
          var _this9 = this;

          log("ShowAward", lvl);
          this.m_winNode = instantiate(this.m_winPrefabs[lvl]);
          this.m_winViewNode.addChild(this.m_winNode);
          var win = this.m_winNode.getComponent(Win);
          this.m_winSoundId = SoundManager.getInstance().Play(GS_Define.AWARD_SOUND[lvl]);
          var time = GS_Define.AWARD_SOUND[lvl].getDuration();
          this.m_gameView.ChangeFadeType(FADE_TYPE.OUT);
          win.Show(Tools.strip(totalWin), time, lvl, this.m_gameView, function () {
            tween(_this9.node).delay(0.5).call(function () {
              _this9.m_gameView.ChangeFadeType(FADE_TYPE.IN);

              _this9.m_winNode.removeFromParent();

              _this9.m_winNode.destroy();

              _this9.m_winNode = null;

              if (endCb) {
                endCb();
              }
            }).start();
          });
        };

        _proto.showAward = function showAward(totalWin, lvl) {
          var _this10 = this;

          log("ShowAward", lvl);
          this.m_winNode = instantiate(this.m_winPrefabs[lvl]);
          this.m_winViewNode.addChild(this.m_winNode);
          var win = this.m_winNode.getComponent(Win);
          this.m_winSoundId = SoundManager.getInstance().Play(GS_Define.AWARD_SOUND[lvl]);
          var time = GS_Define.AWARD_SOUND[lvl].getDuration();
          this.m_gameView.ChangeFadeType(FADE_TYPE.OUT);
          win.Show(Tools.strip(totalWin), time, lvl, this.m_gameView, function () {
            tween(_this10.node).delay(0.5).call(function () {
              _this10.m_gameView.ChangeFadeType(FADE_TYPE.IN);

              _this10.m_winNode.removeFromParent();

              _this10.m_winNode.destroy();

              _this10.m_winNode = null;
            }).start();
          });
        };

        _createClass(EffectPlate, [{
          key: "IsDropExtraEnd",
          get: function get() {
            return this.m_isDropExtraEnd;
          }
        }, {
          key: "ComboData",
          set: function set(v) {
            this.m_comboData = v;
          }
        }]);

        return EffectPlate;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_gemPool", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_gemViewNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_effectViewNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "m_winViewNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "m_singleWinViewNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "m_comboAnim", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "m_getElementPrefab", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "m_brickPrefab", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "m_brickNodes", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "m_change2WildPrefab", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "m_congratPrefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "m_multiEffectPrefab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "m_winPrefabs", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "m_historyView", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "m_boxBootomAnim", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "m_boxCandiesAnim", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "m_boxMainAnim", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "m_boxCountsAnim", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "m_boxCoverAnim", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "m_candyBoxNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "m_boxBootomAnim_S", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "m_boxCandiesAnim_S", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "m_boxMainAnim_S", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "m_boxCountsAnim_S", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "m_boxCoverAnim_S", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "m_upgradeAnim", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "m_fgBgEffectNode", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "m_bgBgEffectNode", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "m_lockBarNodes", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "m_getWheelAnim_L", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "m_getWheelAnim_S", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "m_nodeMotion_L", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "m_nodeMotion_S", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Explode.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Sprite, Animation, log, UIOpacity, tween, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Sprite = module.Sprite;
      Animation = module.Animation;
      log = module.log;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "c5857pRrTdN/IKtl7ZhaQk0", "Explode", undefined);

      var EIGHT_SIDED = exports('EIGHT_SIDED', {
        CENTER: -1,
        TOP: 0,
        RIGHT: 1,
        DOWN: 2,
        LEFT: 3,
        TOP_LEFT: 4,
        TOP_RIGHT: 5,
        DOWN_LEFT: 6,
        DOWN_RIGHT: 7
      });
      var QUICK_EXPLODE = ["GemEffect_H"];
      var NORMAL_EXPLODE = ["GemEffect"];
      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Explode = exports('default', (_dec = property({
        type: Node,
        tooltip: "寶石節點"
      }), _dec2 = property({
        type: Sprite,
        tooltip: "寶石顯示的Sprite"
      }), _dec3 = property({
        type: Sprite,
        tooltip: "背景寶石顯示的Sprite"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Explode, _Component);

        function Explode() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_gemNodes", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_gemSprites", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_gemBgSprites", _descriptor3, _assertThisInitialized(_this));

          _this.m_symbolNumber = 0;
          _this.m_pos = null;
          return _this;
        }

        var _proto = Explode.prototype;

        _proto.Init = function Init() {
          for (var i = 0; i < this.m_gemNodes.length; i++) {
            var anim = this.m_gemNodes[i].getComponent(Animation);

            if (Object.keys(anim["_nameToState"]).length == 0) {
              // 先檢查是否為空
              anim.onLoad(); // 再手動初始化。不可重複呼叫，否則動畫播放狀態將會被重置。
            }

            anim.play(QUICK_EXPLODE[0]);
            var animState = anim.getState(QUICK_EXPLODE[0]); // 362 getState

            animState.stop();
          }
        };

        _proto.SetSymbol = function SetSymbol(symbol, spriteFrame, bgSpriteFrame) {
          this.m_gemNodes.forEach(function (value, index, array) {
            value.active = false;
          });

          if (!this.m_gemNodes[symbol]) {
            log("symbol11111", symbol);
          }

          this.m_gemNodes[symbol].active = true;
          this.m_gemSprites[symbol].spriteFrame = spriteFrame;
          this.m_gemSprites[symbol].node.active = true;
          this.m_gemBgSprites[symbol].spriteFrame = bgSpriteFrame;
          this.m_gemBgSprites[symbol].node.getComponent(UIOpacity).opacity = 0;
          this.m_gemBgSprites[symbol].node.active = true;
          this.m_symbolNumber = symbol;
        };

        _proto.GetNormalAnimTime = function GetNormalAnimTime() {
          var animClips = this.m_gemNodes[this.m_symbolNumber].getComponent(Animation).clips;

          for (var i = 0; i < animClips.length; i++) {
            if (animClips[i].name === NORMAL_EXPLODE[0]) {
              return animClips[i].duration;
            }
          }

          return 0;
        };

        _proto.SetActive = function SetActive(nodes, active) {
          for (var i = 0; i < nodes.length; i++) {
            nodes[i].active = active;
          }
        };

        _proto.ShowExplode = function ShowExplode(isHardStop) {
          var animName = isHardStop ? QUICK_EXPLODE[0] : NORMAL_EXPLODE[0];
          var anim = this.m_gemNodes[this.m_symbolNumber].getComponent(Animation);
          anim.play(animName);
          var animState = anim.getState(animName);
          tween(this.node).delay(animState.duration).call(function () {
            /*if ( endCb )
                    {
                        endCb();
                    }*/
          }).start();
          return animState.duration;
        };

        _createClass(Explode, [{
          key: "Position",
          get: function get() {
            return this.m_pos;
          },
          set: function set(v) {
            this.m_pos = v;
          }
        }]);

        return Explode;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_gemNodes", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_gemSprites", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_gemBgSprites", [_dec3], {
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

System.register("chunks:///_virtual/ExplodeGem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _createClass, cclegacy, Tween;

  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      Tween = module.Tween;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a1ead8lVR9LzaIyK+32sSHt", "ExplodeGem", undefined);
      /**
       * 把寶石爆破、爆破特效及消除贏分綁在一起
       */


      var NodeType = exports('NodeType', {
        ALL: 0,
        GEM: 1,
        EFFECT: 2,
        WIN: 3
      });
      var ExplodeGem = exports('default', /*#__PURE__*/function () {
        function ExplodeGem(gem, effect, win) {
          this.m_gemNode = null;
          this.m_effectNode = null;
          this.m_winNode = null;
          this.m_hasWin = false;
          this.m_gemNode = gem;
          this.m_gemNode.active = false;
          this.m_effectNode = effect;
          this.m_effectNode.active = false;
          this.m_winNode = win;
          this.m_winNode.active = false;
        }
        /**
         * 
         * @param pos 座標
         */


        var _proto = ExplodeGem.prototype;

        _proto.SetPosition = function SetPosition(pos) {
          this.m_gemNode.setPosition(pos);
          this.m_effectNode.setPosition(pos);
          this.m_winNode.setPosition(pos);
        };

        _proto.Show = function Show() {
          this.m_gemNode.active = true;
          this.m_effectNode.active = true;
          Tween.stopAllByTarget(this.m_gemNode);
          Tween.stopAllByTarget(this.m_effectNode);
          Tween.stopAllByTarget(this.m_winNode);
        };

        _proto.Hide = function Hide(type) {
          switch (type) {
            case NodeType.ALL:
              this.m_gemNode.active = false;
              this.m_effectNode.active = false;
              this.m_winNode.active = false;
              break;

            case NodeType.GEM:
              this.m_gemNode.active = false;
              break;

            case NodeType.EFFECT:
              this.m_effectNode.active = false;
              break;

            case NodeType.WIN:
              this.m_winNode.active = false;
              break;
          }
        };

        _createClass(ExplodeGem, [{
          key: "HasWin",
          get: function get() {
            return this.m_hasWin;
          },
          set: function set(v) {
            this.m_hasWin = v;
          }
        }, {
          key: "GemNode",
          get: function get() {
            return this.m_gemNode;
          }
        }, {
          key: "EffectNode",
          get: function get() {
            return this.m_effectNode;
          }
        }, {
          key: "WinNode",
          get: function get() {
            return this.m_winNode;
          }
        }]);

        return ExplodeGem;
      }());

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/game", ['./Combo.ts', './DataStructure.ts', './EffectPlate.ts', './Explode.ts', './ExplodeGem.ts', './GS_Define.ts', './GameView.ts', './GemJPManager.ts', './GemPool.ts', './HistoryBar.ts', './HistoryView.ts', './MultiEffect.ts', './gem3Proto.mjs_cjs=&original=.js', './SingleWin.ts', './SlotReels.ts', './Symbol.ts', './Wheel.ts', './Win.ts'], function () {
  'use strict';

  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/GameView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FiniteState.ts', './TimeBool.ts', './GameAppA.ts', './SlotReels.ts', './DataStructure.ts', './EffectPlate.ts', './ConnectManager.ts', './LocaleStringManager.ts', './LocalStorageManager.ts', './EnvironmentConfig.ts', './GS_Define.ts', './Define.ts', './SoundManager.ts', './Tools.ts', './ConnectionManager.ts', './BottombarManager.ts', './MsgBox.ts', './LifeSocket.ts', './Wheel.ts', './GemJPManager.ts', './Wallet.ts', './AppManager.ts', './RetryManager.ts', './MHBManager.ts', './AutoShowManager.ts', './gem3Proto.mjs_cjs=&original=.js', './IframeCommandManager.ts', './gaiaProto.mjs_cjs=&original=.js', './ErrorMsgManager.ts', './gem3Proto.js', './gaiaProto.js'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Animation, SpriteAtlas, Node, Sprite, Button, Label, sys, input, Input, KeyCode, profiler, error, Tween, tween, Prefab, instantiate, v3, log, UIOpacity, screen, view, ResolutionPolicy, Component, FiniteState, TimeBool, GameAppA, SlotReels, SpinProtocolData, InfoProtocolData, ChangeBetProtocolData, LoginProtocolData, JPProtocolData, SyncStateProtocolData, EffectPlate, ConnectManager, LocaleStringManager, LocalStorageManager, EnvironmentConfig, GS_Define, GAMEVIEW_STATE, Define, SoundManager, Tools, ConnectionManager, BottombarManager, MsgBox, LifeSocket, Wheel, FeatureGameType, GemJPManager, walletManger, AppManager, RetryManager, MHBManager, AutoShowManager, iframeCommandManager, ErrorMsgManager, _cjsExports, _cjsExports$1;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      SpriteAtlas = module.SpriteAtlas;
      Node = module.Node;
      Sprite = module.Sprite;
      Button = module.Button;
      Label = module.Label;
      sys = module.sys;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      profiler = module.profiler;
      error = module.error;
      Tween = module.Tween;
      tween = module.tween;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      v3 = module.v3;
      log = module.log;
      UIOpacity = module.UIOpacity;
      screen = module.screen;
      view = module.view;
      ResolutionPolicy = module.ResolutionPolicy;
      Component = module.Component;
    }, function (module) {
      FiniteState = module.default;
    }, function (module) {
      TimeBool = module.default;
    }, function (module) {
      GameAppA = module.default;
    }, function (module) {
      SlotReels = module.default;
    }, function (module) {
      SpinProtocolData = module.SpinProtocolData;
      InfoProtocolData = module.InfoProtocolData;
      ChangeBetProtocolData = module.ChangeBetProtocolData;
      LoginProtocolData = module.LoginProtocolData;
      JPProtocolData = module.JPProtocolData;
      SyncStateProtocolData = module.SyncStateProtocolData;
    }, function (module) {
      EffectPlate = module.default;
    }, function (module) {
      ConnectManager = module.default;
    }, function (module) {
      LocaleStringManager = module.default;
    }, function (module) {
      LocalStorageManager = module.default;
    }, function (module) {
      EnvironmentConfig = module.default;
    }, function (module) {
      GS_Define = module.default;
      GAMEVIEW_STATE = module.GAMEVIEW_STATE;
    }, function (module) {
      Define = module.default;
    }, function (module) {
      SoundManager = module.default;
    }, function (module) {
      Tools = module.default;
    }, function (module) {
      ConnectionManager = module.default;
    }, function (module) {
      BottombarManager = module.default;
    }, function (module) {
      MsgBox = module.default;
    }, function (module) {
      LifeSocket = module.default;
    }, function (module) {
      Wheel = module.default;
      FeatureGameType = module.FeatureGameType;
    }, function (module) {
      GemJPManager = module.default;
    }, function (module) {
      walletManger = module.walletManger;
    }, function (module) {
      AppManager = module.default;
    }, function (module) {
      RetryManager = module.default;
    }, function (module) {
      MHBManager = module.default;
    }, function (module) {
      AutoShowManager = module.default;
    }, null, function (module) {
      iframeCommandManager = module.iframeCommandManager;
    }, null, function (module) {
      ErrorMsgManager = module.ErrorMsgManager;
    }, function (module) {
      _cjsExports = module.default;
    }, function (module) {
      _cjsExports$1 = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34;

      cclegacy._RF.push({}, "9799dZCiUpEJ66VxlO1iWdy", "GameView", undefined);

      var WIDTH = 1136;
      var HEIGHT = 640;
      var FADE_TYPE = exports('FADE_TYPE', {
        IN: 0,
        OUT: 1
      });
      var GAME_JP_TIME = exports('GAME_JP_TIME', 5);
      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GameView = exports('default', (_dec = property({
        type: Animation,
        tooltip: "旋轉"
      }), _dec2 = property({
        type: SpriteAtlas,
        tooltip: "標題合圖"
      }), _dec3 = property({
        type: Node,
        tooltip: "上方的遮罩"
      }), _dec4 = property({
        type: Node,
        tooltip: "下方的遮罩"
      }), _dec5 = property({
        type: Node,
        tooltip: "左方的遮罩"
      }), _dec6 = property({
        type: Node,
        tooltip: "右方的遮罩"
      }), _dec7 = property({
        type: Sprite,
        tooltip: "標題Sprite"
      }), _dec8 = property({
        type: Node,
        tooltip: "盤面本體"
      }), _dec9 = property({
        type: Button,
        tooltip: "盤面按鈕，點擊可以spin"
      }), _dec10 = property({
        type: Node,
        tooltip: "特效表演"
      }), _dec11 = property({
        type: Node,
        tooltip: "地bar定位點"
      }), _dec12 = property({
        type: GS_Define,
        tooltip: "Define，方便使用共用的連結"
      }), _dec13 = property({
        type: Node,
        tooltip: "遮罩整體"
      }), _dec14 = property({
        type: Node,
        tooltip: "遮罩動畫節點"
      }), _dec15 = property({
        type: Node,
        tooltip: "遮罩背景"
      }), _dec16 = property({
        type: Node,
        tooltip: "品牌logo"
      }), _dec17 = property({
        type: Label,
        tooltip: "升級素材收集數量"
      }), _dec18 = property({
        type: Node,
        tooltip: "橫版收集素材的底框"
      }), _dec19 = property({
        type: Node,
        tooltip: "顯示DC狀態"
      }), _dec20 = property({
        type: Wheel,
        tooltip: "轉盤"
      }), _dec21 = property({
        type: GemJPManager,
        tooltip: "jp 管理"
      }), _dec22 = property({
        type: Node,
        tooltip: "jp相關節點，需統一控制是否顯示"
      }), _dec23 = property({
        type: Node,
        tooltip: "倍率節點，需統一控制是否顯示"
      }), _dec24 = property({
        type: Label,
        tooltip: "FG、BG的數值提示"
      }), _dec25 = property({
        type: Sprite,
        tooltip: "事件提示文字，橫版-直版"
      }), _dec26 = property({
        type: Sprite,
        tooltip: "升級提示文字圖"
      }), _dec27 = property({
        type: Sprite,
        tooltip: "當局贏分圖示"
      }), _dec28 = property({
        type: Sprite,
        tooltip: "直版當局贏分提示"
      }), _dec29 = property({
        type: Label,
        tooltip: "BG及FG的次數提示"
      }), _dec30 = property({
        type: Node,
        tooltip: "升級素材提示"
      }), _dec31 = property({
        type: Node,
        tooltip: "直版次數提示"
      }), _dec32 = property({
        type: Node,
        tooltip: "直版的素材累計版"
      }), _dec33 = property({
        type: Sprite,
        tooltip: "BG更換symbol提示"
      }), _dec34 = property({
        type: Sprite,
        tooltip: "直版升級提示"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GameView, _Component);

        function GameView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_rotationAnim", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_titleSpriteAtlas", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_topMaskNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_downMaskNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_leftMaskNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_rightMaskNode", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_titleSprite", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_slotReelsNode", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_plateSpineBtn", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_effectPlateNode", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_barNode", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_define", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_loading", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_loadingBar", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_loadingMask", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_loadingLogoNode", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_collectionCountLabels", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_collectionBgNode", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_drawCallCtrl", _descriptor19, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_wheel", _descriptor20, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_jpManager", _descriptor21, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_jpNodes", _descriptor22, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_hintNodes", _descriptor23, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_OddsLabels", _descriptor24, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_eventHintSprites", _descriptor25, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_upgradeSprite", _descriptor26, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_nowWinSprite", _descriptor27, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_portraitNowWinSprite", _descriptor28, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_roundHintLabels", _descriptor29, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_elementHintNodes", _descriptor30, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_roundHintNode", _descriptor31, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_portraitelementBoardNode", _descriptor32, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_changeHintSprites", _descriptor33, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_portraitUpgradeSprite", _descriptor34, _assertThisInitialized(_this));

          _this.m_slotReels = null;
          _this.m_effectPlate = null;
          _this.m_state = new FiniteState(GAMEVIEW_STATE.LOAD_BUNDLE);
          _this.m_isAutoSpin = false;
          _this.m_aId = -1;
          _this.m_spinAckQue = null;
          _this.m_plateIndex = -1;
          _this.m_bottomBar = null;
          _this.m_isLandscape = false;
          _this.m_totalWin = 0;
          _this.m_isGetGameInfo = false;
          _this.m_autoplayInfos = null;
          _this.m_isCheckChips = false;
          _this.m_isFirstPlateSpin = true;
          _this.m_spaceTime = 0;
          _this.m_processTick = 0;
          _this.m_isBgFadeIn = false;
          _this.m_bgFadeInTime = 1;
          _this.m_gameJPTimer = null;
          _this.m_oldExchangeChips = 0;
          _this.m_exchangeValidStamp = "";
          _this.m_lastClickTime = undefined;
          _this.m_bgAudioId = null;
          _this.m_bgAudioName = null;
          _this.m_isBgFadeOut = false;
          _this.m_explodeCount = 0;
          _this.m_spinClickEvent = 0;
          _this.m_token = "";
          _this.m_changeBgAudio = null;
          _this.m_isSpined = false;
          _this.m_showIndex = "";
          _this.m_verifyShowIndex = "";
          _this.m_isLogin = false;
          _this.m_fakeSpinAck = null;
          _this.m_isGapLogin = false;
          _this.m_isReqChangeBet = false;
          _this.magnification = 0;
          _this.isSpinFinish = false;
          _this.isLeaveFree = false;
          _this.isLeaveBonus = false;
          _this.wheelResult = -1;
          _this.cntPress = 0;
          _this.randN = 1;
          _this.m_mailInfos = new Array();
          _this.m_isWinBoardEnd = true;
          _this.m_collectionCount = 0;
          _this.m_isInFreeGame = false;
          _this.m_isInBonusGame = false;
          _this.m_fgOdds = 1;
          _this.m_fgRound = -1;
          _this.m_bonusRound = -1;
          _this.m_isGetJp = false;
          _this.m_spinJpAck = null;
          _this.m_oldBetIndex = -1;
          _this.m_isChange = false;
          _this.m_isWheelSpin = true;
          _this.m_isShowGetWheel = false;
          _this.m_isBottombarFinished = false;
          _this.m_fullJpWin = 0;
          _this.isinWheel = false;
          return _this;
        }

        var _proto = GameView.prototype;

        _proto.onLoad = function onLoad() {
          var _this2 = this;

          GS_Define.IsProto = EnvironmentConfig.ENV_TYPE != Define.EVN.TEST;
          Define.CURRENCY_CHANGE_ENABLE = true;
          GameAppA.SetBaseConfig("gem3");

          var serviceSetting = function serviceSetting() {
            ConnectionManager.getInstance().AddSetting(Define.PROTOCOL.CLICK_EVENT, ConnectionManager.CONNECT_TYPE.TYPE_HTTP, null, null, EnvironmentConfig.CLICK_URL);
            ConnectionManager.getInstance().AddSetting(Define.PROTOCOL.MAIL_REQ, ConnectionManager.CONNECT_TYPE.TYPE_HTTP, null, null, EnvironmentConfig.MAIL_URL);
            ConnectionManager.getInstance().AddSetting(Define.PROTOCOL.PHASE_EVENT, ConnectionManager.CONNECT_TYPE.TYPE_HTTP, null, null, EnvironmentConfig.PHASE_URL);
            ConnectionManager.getInstance().AddSetting(Define.PROTOCOL.VERIFY_EVENT, ConnectionManager.CONNECT_TYPE.TYPE_HTTP, null, null, EnvironmentConfig.VERIFY_URL);
          };

          serviceSetting();
          GameAppA.SetChangeCb(function (route) {
            serviceSetting();
          });
          ConnectionManager.getInstance().SetDefaultOnCommandFunc(function () {});
          ConnectManager.GetInstance().GameType = "gem3";
          ConnectManager.GetInstance().IsProto = GS_Define.IsProto;
          ConnectManager.GetInstance().SelectIp();

          ConnectManager.GetInstance().ErrorCb = function (errorType) {
            RetryManager.GetInstance().TimeoutHandle(errorType, function () {
              if (_this2.m_isAutoSpin) {
                _this2.m_isAutoSpin = false;

                _this2.ShowAutoPlayHint();
              }
            });
          }; //Note:斷線重連


          ConnectManager.GetInstance().LoginFailCallback = function () {
            MsgBox.getInstance().ShowMessageBox(Define.StringKey.MSGBOX_LOGIN_FAIL, Define.StringKey.MSGBOX_TITLE_SYSTEM_INFO, Tools.CloseGameTab, Tools.GetErrorCode(Define.ErrorStatus.Game, Define.ErrorStatus.Unknow));
          };

          if (!sys.isNative) {
            window.onbeforeunload = function () {// this.ReqLogout();
            };

            window.onerror = function (errorMessage, scriptURI, lineNumber, columnNumber, errorObj) {
              var id = "-1";
              var apiId = 0;

              if (Define.APP) {
                id = Define.APP.GetAID();
                apiId = Number(Define.APP.GetApiID());
              }

              var params = ConnectionManager.FormErrorParams(id, apiId, Define.GAME_ID.GEM3, GS_Define.Ver, errorObj);
              ConnectionManager.getInstance().SendErrorLog(params);
            };
          }

          this.m_gameJPTimer = new TimeBool();
          this.m_gameJPTimer.UseDT(true);
        };

        _proto.start = function start() {
          var _this3 = this;

          input.on(Input.EventType.KEY_DOWN, function (event) {
            switch (event.keyCode) {
              case KeyCode.SPACE:
                _this3.m_bottomBar.SendSpinLog();

                if (_this3.m_bottomBar.BtnState == _this3.m_bottomBar.SlotBottomBarState.IDLE) {
                  _this3.m_spinClickEvent = Define.BTN_CLICK_EVENT.SPACE_SPIN;

                  _this3.ClickSpin();
                } else if (_this3.m_state.Current() === GAMEVIEW_STATE.GET_WHEEL && !_this3.m_isWheelSpin) {
                  _this3.m_isWheelSpin = true;

                  _this3.m_wheel.StartSpin();
                } else if (_this3.m_state.Current() == GAMEVIEW_STATE.AWARD || _this3.m_state.Current() == GAMEVIEW_STATE.LEAVE_FREE || _this3.m_state.Current() == GAMEVIEW_STATE.LEAVE_BONUS || _this3.m_state.Current() == GAMEVIEW_STATE.GET_MULTI || _this3.m_state.Current() == GAMEVIEW_STATE.GET_JP) {
                  _this3.ClickStopSpin();
                }

                break;
            }
          });
          input.on(Input.EventType.KEY_UP, function (event) {
            switch (event.keyCode) {
              case KeyCode.SPACE:
                _this3.m_spaceTime = 0;
                break;

              case KeyCode.KEY_D:
                if (profiler.isShowingStats()) {
                  profiler.hideStats();
                } else {
                  profiler.showStats();
                }

                break;
            }
          });

          if (this.m_loading) {
            var node = this.m_loading.getChildByName("logo_" + LocaleStringManager.CurrLang);

            if (!node) {
              node = this.m_loading.getChildByName("logo_" + Define.Lang.EN);
            }

            node.active = true;
            this.m_loadingBar.active = true;
          }

          this.OnRotation();
          Tools.AddOnRotationCb(function () {
            _this3.OnRotation();
          });

          if (AppManager.LobbyBridge) {
            AppManager.LobbyBridge.once(AppManager.Lobby2Game.GameClose, function (args) {
              error("Receive Close Event:", args);

              _this3.OnExit();
            });
            AppManager.AddLeaveCbs(function () {
              _this3.OnExit();
            });
          }

          var setting = {
            lastReqCb: function lastReqCb(retryCb) {
              _this3.LastReq(retryCb);
            },
            loginCb: function loginCb() {
              //是否完成登入
              if (!_this3.m_isLogin) {
                if (Define.APP) {
                  _this3.Login(Define.APP.GetAToken());
                } else {
                  var tokenString = Tools.GetLinkParameterByName("search", "token=") || "test" + Date.now().toString();

                  _this3.Login(tokenString);
                }
              } else {
                _this3.ReqGameInfo(function (ack) {
                  _this3.OnRecvAck(ack);

                  RetryManager.GetInstance().Reset();
                });
              }
            },
            hintCb: function hintCb(str, isConnectSpeed) {
              _this3.m_bottomBar.ShowSpeedMsg(str, isConnectSpeed);
            },
            restartSpeedCb: function restartSpeedCb() {
              _this3.m_bottomBar.UpdateConnectSprite(false);
            },
            extraCb: function extraCb() {
              if (_this3.m_isReqChangeBet) {
                _this3.ChangeBet();
              }
            }
          };
          RetryManager.GetInstance().SetCb(setting);
          ErrorMsgManager.GetInstance().SetCb({
            StopCb: function StopCb(canSetChips) {
              if (_this3.m_isAutoSpin) {
                _this3.m_isAutoSpin = false;

                _this3.ShowAutoPlayHint();
              }

              _this3.m_bottomBar.SetSpinState(_this3.m_bottomBar.SlotBottomBarState.IDLE);

              if (canSetChips) {
                _this3.m_bottomBar.SyncChips(_this3.m_spinAckQue.nm, function () {
                  if (_this3.m_isAutoSpin) {
                    _this3.m_isAutoSpin = false;

                    _this3.ShowAutoPlayHint();
                  }
                }, true);
              }

              _this3.m_slotReels.RecoverPlate();

              _this3.m_state.NextState(GAMEVIEW_STATE.IDLE);
            }
          });
        };

        _proto.OnExit = function OnExit() {
          Tween.stopAllByTarget(this.node);
          SoundManager.getInstance().StopAll();
          this.m_loading.active = true;
          this.m_state.NextState(GAMEVIEW_STATE.GAME_CLOSE);
          LifeSocket.GetInstance().Close();
          MsgBox.getInstance().OnExit();

          if (Define.ALIVE_INTERVAL) {
            clearInterval(Define.ALIVE_INTERVAL);
            Define.ALIVE_INTERVAL = null;
          }

          this.m_bottomBar.LeaveGame();
          tween(this.node).delay(0.5).call(function () {
            Tools.CloseGameTab(false);
          }).start();
          GS_Define.OnExit();
        };

        _proto.LastReq = function (_LastReq) {
          function LastReq(_x) {
            return _LastReq.apply(this, arguments);
          }

          LastReq.toString = function () {
            return _LastReq.toString();
          };

          return LastReq;
        }(function (retryCb) {
          var _this4 = this;

          var data = new _cjsExports.gem3Proto.LastReq();
          data.aid = this.m_aId;
          data.token = Define.APP ? Define.APP.GetAToken() : this.m_token;
          var req = new SyncStateProtocolData();

          if (GS_Define.IsProto) {
            req.reqData = _cjsExports.gem3Proto.LastReq.encode(data).finish();
          } else {
            req.reqData = data;
          }

          ConnectManager.GetInstance().SendCommand(req, function (ack) {
            log("sync data", ack);

            if (typeof ack == "boolean") {
              return;
            }

            if (ack instanceof ArrayBuffer) {
              var bytes = new Uint8Array(ack);
              ack = _cjsExports.gem3Proto.ResData.decode(bytes);
            }

            log("sync ack decode", ack); //server回傳非成功

            if (ack.ret == undefined) {
              //proto會把0、null變成undefined
              ack.ret = GS_Define.SERVER_RET_TYPE.SERVER_SUCCESS;
            }

            if (ack.ret != GS_Define.SERVER_RET_TYPE.SERVER_SUCCESS) {
              retryCb == null ? void 0 : retryCb();
              return;
            }

            var info = null;

            if (ack.data.lastSpin) {
              info = ack.data.lastSpin;
            } else {
              info = _cjsExports.gem3Proto.LastSpinAck.decode(ack.data.encode);
            }

            if (info.result == 0 || info.result == undefined) {
              if (info.lastSpin.ShowIndex && info.lastSpin.ShowIndex !== _this4.m_showIndex) {
                _this4.m_fakeSpinAck = _this4.ConvertSpinAck({
                  info: info.lastSpin
                });
                _this4.m_isSpined = true;
              } else {
                var betValue = _this4.m_bottomBar.GetNowBetValue();

                _this4.m_bottomBar.SetChips(_this4.m_bottomBar.GetChips() + betValue);

                _this4.m_isSpined = false;

                _this4.m_slotReels.RecoverPlate();
              }

              if (_this4.m_isSpined) {
                if (_this4.m_fakeSpinAck) {
                  _this4.OnRecvSpinAck(_this4.m_fakeSpinAck);

                  _this4.m_fakeSpinAck = null;
                }
              } else {
                _this4.m_state.NextState(GAMEVIEW_STATE.IDLE);

                _this4.m_bottomBar.SetSpinState(_this4.m_bottomBar.SlotBottomBarState.IDLE);
              }

              RetryManager.GetInstance().Reset();
            } else {
              retryCb && retryCb();
            }
          }, false);
        });

        _proto.CreateBottomBar = function CreateBottomBar() {
          var _this5 = this;

          var path = Tools.GetFilePath(Define.BarPath);
          Define.CommonBundle.load(path, Prefab, function (err, prefab) {
            if (err) {
              _this5.CreateBottomBar();

              return;
            }

            var bar = instantiate(prefab);

            _this5.m_barNode.addChild(bar);

            _this5.m_bottomBar = bar.getComponent(BottombarManager);
            _this5.m_bottomBar.VerString = "v_" + Define.VERSION + "_" + GS_Define.Ver;
            _this5.m_bottomBar.RatioUrl = EnvironmentConfig.RATIO_URL;

            _this5.m_bottomBar.SetTouchEvet(function (event) {
              _this5.BarTouchCb(event);
            });

            _this5.m_bottomBar.SetWinValue(0);

            _this5.m_bottomBar.IsSendBetChange = true;

            _this5.m_bottomBar.SetSpinState(_this5.m_bottomBar.SlotBottomBarState.IDLE);

            _this5.m_bottomBar.SetUseEftWinValue("/num/num_JP", [v3(0, 320), v3(0, 320)], 70, 0);

            var spriteFrame = Tools.UsingLogoSpriteFrame();

            if (spriteFrame) {
              _this5.m_loadingLogoNode.active = true;
              _this5.m_loadingLogoNode.getComponent(Sprite).spriteFrame = spriteFrame;
            }

            _this5.CreateAutoPlayPanel();

            _this5.m_bottomBar.SetFollowNode(_this5.node);

            iframeCommandManager.AddCb({
              StopAutoCb: function StopAutoCb() {
                if (_this5.m_isAutoSpin) {
                  _this5.m_isAutoSpin = false;

                  _this5.ShowAutoPlayHint();
                }
              }
            });

            _this5.m_wheel.Init();

            _this5.m_plateSpineBtn.node.on(Node.EventType.TOUCH_END, function (evt) {
              _this5.m_bottomBar.SendSpinLog();

              if (!_this5.m_isAutoSpin) {
                var canTouch = false;
                var nowTime = Date.now();

                if (_this5.m_lastClickTime != undefined) {
                  var duration = nowTime - _this5.m_lastClickTime;

                  if (duration > 1000) {
                    canTouch = true;
                  }
                } else {
                  _this5.m_lastClickTime = nowTime;
                  canTouch = true;
                }

                if (!canTouch) {
                  return;
                }

                _this5.BarTouchCb(evt);
              }
            });
          });
        };

        _proto.CreateAutoPlayPanel = function CreateAutoPlayPanel() {
          var _this6 = this;

          var path = Tools.GetFilePath(Define.AutoPlaySettingPanel);
          Define.CommonBundle.load(path, Prefab, function (err, prefab) {
            if (err) {
              _this6.CreateAutoPlayPanel();

              return;
            }

            _this6.m_bottomBar.AutoplayPrefab = prefab;

            _this6.m_bottomBar.SetAutoplayConfirmCb(function (otherInfos) {
              _this6.OnStartAutoPlay(otherInfos);
            });

            _this6.m_isBottombarFinished = true;
          });
        };

        _proto.update = function update(dt) {
          var _this7 = this; //log("改了" + this.isSpinFinish);


          if (this.isSpinFinish) {
            this.isSpinFinish = false;

            if (this.wheelResult === 0) {
              tween(this.node).delay(1.8).call(function () {
                _this7.EventChange(true, FeatureGameType.FG);

                _this7.m_state.NextState(GAMEVIEW_STATE.ENTER_FREE);

                _this7.m_effectPlate.EnterFree();
              }).start();
            } else if (this.wheelResult === 1) {
              tween(this.node).delay(1.8).call(function () {
                _this7.EventChange(true, FeatureGameType.BG);

                log("game state ENTER_BONUS");
                _this7.m_fgRound = -1;

                _this7.ChangeFadeType(FADE_TYPE.OUT, GS_Define.AudioClips.Fg_Bg);

                _this7.m_isInBonusGame = true; //this.m_fgOdds = this.m_spinAckQue.fi.fm;

                _this7.m_fgOdds = _this7.magnification; //次數

                for (var i = 0; i < _this7.m_roundHintLabels.length; i++) {
                  _this7.m_roundHintLabels[i].string = _this7.magnification + "/" + _this7.magnification;
                }

                _this7.m_effectPlate.ShowEnterBonus(); //this.m_state.NextState(GAMEVIEW_STATE.ENTER_BONUS);

              }).start();
            }

            this.wheelResult = -1;
          }

          if (this.isLeaveFree && this.m_slotReels.isFinish) {
            //這這這
            this.m_isInFreeGame = false;
            this.isLeaveFree = false;
            this.m_slotReels.isFinish = false;
            this.EventChange(false, FeatureGameType.FG);
            this.m_effectPlate.LeaveFree();
            this.m_effectPlate.showWin(false); //GS_Define.PLATE_SIZE = 5;

            this.isinWheel = false;
            tween(this.node).delay(4).call(function () {
              _this7.ChangeFadeType(FADE_TYPE.OUT, GS_Define.AudioClips.Mg_Reel);
            }).start();
          } else if (this.isLeaveBonus && this.m_slotReels.isFinish) {
            this.m_isInBonusGame = false;
            this.isLeaveBonus = false;
            this.m_slotReels.isFinish = false;
            this.EventChange(false, FeatureGameType.BG);
            this.m_effectPlate.LeaveBonus();
            this.m_effectPlate.showWin(true); //GS_Define.PLATE_SIZE = 5;

            this.isinWheel = false;
            tween(this.node).delay(4).call(function () {
              _this7.ChangeFadeType(FADE_TYPE.OUT, GS_Define.AudioClips.Mg_Reel);
            }).start();
          }

          RetryManager.GetInstance().Process(dt);

          if (this.m_gameJPTimer) {
            //&& this.m_isGetFirstJp )
            this.m_gameJPTimer.Update(dt * 1000);

            if (this.m_gameJPTimer.ToBool()) {
              this.m_gameJPTimer.Start(GAME_JP_TIME * 1000);
              this.ReqJP();
            }
          }

          if (this.m_isBgFadeIn) {
            if (this.m_bgAudioId !== null) {
              var vol = SoundManager.getInstance().GetVolume(this.m_bgAudioId);
              vol += dt;

              if (vol > this.m_bgFadeInTime) {
                vol = this.m_bgFadeInTime;
                this.m_isBgFadeIn = false;
              } else if (GS_Define.AudioClips.Mg_Reel && this.m_bgAudioName === GS_Define.AudioClips.Mg_Reel.name) {
                if (vol > 0.5) {
                  vol = 0.5;
                  this.m_isBgFadeIn = false;
                }
              }

              SoundManager.getInstance().SetVolume(this.m_bgAudioId, vol);
            } else {
              this.m_isBgFadeIn = false;
            }
          }

          if (this.m_isBgFadeOut) {
            if (this.m_bgAudioId !== null) {
              var _vol = SoundManager.getInstance().GetVolume(this.m_bgAudioId);

              _vol -= dt;

              if (_vol <= 0) {
                _vol = 0;
                this.m_isBgFadeOut = false;

                if (this.m_changeBgAudio) {
                  SoundManager.getInstance().Stop(this.m_bgAudioId);
                  this.ChangeBgMusic(this.m_changeBgAudio);
                  SoundManager.getInstance().SetVolume(this.m_bgAudioId, 0);
                  this.m_changeBgAudio = null;
                  this.ChangeFadeType(FADE_TYPE.IN);
                } else {
                  SoundManager.getInstance().SetVolume(this.m_bgAudioId, _vol);
                }
              } else {
                SoundManager.getInstance().SetVolume(this.m_bgAudioId, _vol);
              }
            } else {
              this.m_isBgFadeOut = false;
            }
          }

          var currentState = this.m_state.Tick();

          switch (currentState) {
            case GAMEVIEW_STATE.GAME_CLOSE:
              if (this.m_state.IsEntering()) {
                log("GAMEVIEW_STATE.GAME_CLOSE");
              }

              break;

            case GAMEVIEW_STATE.LOAD_BUNDLE:
              if (this.m_state.IsEntering()) {
                log("GAMEVIEW_STATE.LOAD_BUNDLE");

                if (!Define.CommonBundle || !Define.GameBundle) {
                  //先載入bundle
                  AppManager.LoadVersion("game");
                }
              }

              if (Define.CommonBundle && Define.GameBundle) {
                this.m_state.NextState(GAMEVIEW_STATE.CREATE_BAR);
              }

              break;

            case GAMEVIEW_STATE.CREATE_BAR:
              if (this.m_state.IsEntering()) {
                log("GAMEVIEW_STATE.CREATE_BAR");
                this.CreateBottomBar();
              }

              if (this.m_isBottombarFinished && LocaleStringManager.GetInstance().IsLoaded() && LocaleStringManager.GetInstance().IsGameLoaded()) {
                this.SetTxtByLocale();
                this.m_slotReels = this.m_slotReelsNode.getComponent(SlotReels);
                this.m_effectPlate = this.m_effectPlateNode.getComponent(EffectPlate);
                this.m_jpManager.Init(this);
                this.m_slotReels.Init(this);
                this.m_effectPlate.Init(this, this.m_slotReels, this.m_define);
                this.m_wheel.GameView = this;
                this.m_state.NextState(GAMEVIEW_STATE.LOGIN);
              }

              break;

            case GAMEVIEW_STATE.LOGIN:
              if (this.m_state.IsEntering()) {
                log("GAMEVIEW_STATE.LOGIN");

                if (EnvironmentConfig.ENV_TYPE === Define.EVN.TEST) {
                  var tokenString = Tools.GetLinkParameterByName("token") || "test" + Date.now().toString();

                  if (tokenString) {
                    SoundManager.getInstance().checkSoundFormat(Define.SOUND_FILE); // 檢查旗標處理OGG或MP3路徑

                    SoundManager.getInstance().LoadAudioAsset(Define.SOUND_FILE, function () {}, Define.AudioClips);
                    this.Login(tokenString);
                  }
                } else {
                  if (Define.APP) {
                    this.Login(Define.APP.GetAToken());
                  }
                }
              }

              if (this.m_isGetGameInfo && LocaleStringManager.GetInstance().IsLoaded() && LocaleStringManager.GetInstance().IsGameLoaded()) {
                RetryManager.GetInstance().IsLogin = true;
                this.m_bottomBar.SetTxt();
                this.m_bottomBar.SetAutoPlayPanelTxt();
                this.m_bottomBar.SetAutoPlaySettingPanelFreeGameString(Define.StringKey.AUTO_PLAY_PANEL_ENTER_FREEGAME);
                this.OnRotation();
                this.m_jpManager.ChangeBet(this.m_bottomBar.GetNowBetIndex());
                this.m_bottomBar.ShowGameScene();
                this.m_loading.active = false;
                this.m_state.NextState(GAMEVIEW_STATE.IDLE); //音效

                var load = function load(path, cb) {
                  Define.GameBundle.load(path, function (error1, audioClip) {
                    if (error1) {
                      error(error1.message || error1);
                      load(path, cb);
                      return;
                    }

                    cb && cb(audioClip);
                  });
                };

                var _loop = function _loop(key) {
                  if (GS_Define.AudioClips.hasOwnProperty(key)) {
                    load(GS_Define.AudioPathPre + key, function (audioClip) {
                      GS_Define.AudioClips[key] = audioClip;

                      if (key === "Mg_Reel" && _this7.m_bgAudioId === null) {
                        _this7.ChangeBgMusic(GS_Define.AudioClips.Mg_Reel);

                        SoundManager.getInstance().SetVolume(_this7.m_bgAudioId, 0);

                        _this7.ChangeFadeType(FADE_TYPE.IN);
                      } else if (key === "Common_big_win") {
                        GS_Define.AWARD_SOUND[0] = audioClip;
                      } else if (key === "Common_mega_win") {
                        GS_Define.AWARD_SOUND[1] = audioClip;
                      } else if (key === "Common_super_win") {
                        GS_Define.AWARD_SOUND[2] = audioClip;
                      }
                    });
                  }
                };

                for (var key in GS_Define.AudioClips) {
                  _loop(key);
                }

                AppManager.LoadingComplete();
              }

              break;

            case GAMEVIEW_STATE.IDLE:
              if (this.m_state.IsEntering()) {
                log("game state idle");

                if (!this.m_isInFreeGame && !this.m_isInBonusGame) {
                  this.m_bottomBar.IsGameIdle = true;
                } else {
                  this.m_bottomBar.IsGameIdle = false;
                }
              }

              AutoShowManager.GetInstance().StartAutoShow();

              if (this.m_mailInfos && this.m_mailInfos.length > 0) {
                while (this.m_mailInfos.length > 0) {
                  var content = JSON.parse(this.m_mailInfos.shift().Content);
                  ConnectionManager.getInstance().ShowMailInfo(content);
                }
              }

              break;

            case GAMEVIEW_STATE.SPIN:
              log("轉啊轉" + this.m_state.IsEntering());

              if (this.m_state.IsEntering()) {
                log("轉啊轉進去了");
                this.m_bottomBar.IsGameIdle = false;

                var _vol2 = SoundManager.getInstance().GetVolume(this.m_bgAudioId);

                if (_vol2 < 1) {
                  this.ChangeFadeType(FADE_TYPE.IN);
                }

                log("game state SPIN", Date.now(), this.m_fgRound);
                Tween.stopAllByTarget(this.node);

                if (this.m_isInBonusGame) {
                  this.m_state.NextState(GAMEVIEW_STATE.ENTER_BONUS);
                } else if (this.m_isInFreeGame) {
                  this.m_fgRound++;

                  for (var i = 0; i < this.m_roundHintLabels.length; i++) {
                    this.m_roundHintLabels[i].string = Tools.strip(10 - this.m_fgRound - 1) + "/10";
                  }

                  this.m_spinAckQue.gi = this.m_spinAckQue.fi.fq[this.m_fgRound].fgi; //提前開始清除盤面

                  this.m_slotReels.StartSpin();
                  this.OnRecvSpinAck();
                } else if (this.m_bottomBar.GetChips() >= Tools.strip(this.m_bottomBar.GetNowBetValue())) {
                  log("這裡嗎");
                  this.StartSpin();
                } else {
                  var betList = this.m_bottomBar.GetBetList();

                  if (this.m_bottomBar.GetChips() < Tools.strip(betList[0])) {
                    MsgBox.getInstance().ShowMessageBox(Define.StringKey.MSGBOX_MONEY_NOT_ENOUGH);
                  } else {
                    MsgBox.getInstance().ShowMessageBox(Define.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET);
                  }

                  if (this.m_isAutoSpin) {
                    this.m_isAutoSpin = false;
                    this.ShowAutoPlayHint();
                  }

                  this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.IDLE);
                  this.m_state.NextState(GAMEVIEW_STATE.IDLE);
                }
              }

              break;

            case GAMEVIEW_STATE.FIRST_PLATE:
              if (this.m_state.IsEntering()) {
                log("game state FIRST_PLATE");

                if (this.m_slotReels.IsPlateCleaned) {
                  this.m_slotReels.ShowNewPlate();
                }
              }

              if (this.m_slotReels.IsInitStop) {
                this.ChangeState();
              }

              break;

            case GAMEVIEW_STATE.EXPLODE:
              if (this.m_state.IsEntering()) {
                log("game state EXPLODE", this.m_plateIndex);
                var winInfos = this.m_spinAckQue.gi.pq[this.m_plateIndex].ai;
                var tag = this.ConvertString2Number(this.m_spinAckQue.gi.pq[this.m_plateIndex].pt);

                if (winInfos && tag) {
                  //累計已爆炸的數量
                  for (var _i = 0; _i < winInfos.length; _i++) {
                    this.m_explodeCount += winInfos[_i].c;
                  }

                  this.m_effectPlate.CreateExplodeRune(winInfos, tag, this.m_spinAckQue.si, function () {
                    //TODO 更新地bar營分顯示
                    _this7.m_state.NextState(GAMEVIEW_STATE.TILE_MATCHING);
                  });
                } else {
                  this.m_state.NextState(GAMEVIEW_STATE.TILE_MATCHING);
                }
              }

              break;

            case GAMEVIEW_STATE.TILE_MATCHING:
              if (this.m_state.IsEntering()) {
                log("game state TILE_MATCHING", Date.now());
                this.m_slotReels.TileMatching();
              }

              if (this.m_slotReels.IsMatchingFinished) {
                this.m_state.NextState(GAMEVIEW_STATE.PATCH_UP);
              }

              break;

            case GAMEVIEW_STATE.PATCH_UP:
              if (this.m_state.IsEntering()) {
                log("game state PATCH_UP", Date.now());
                this.m_slotReels.PatchUp();
              }

              if (this.m_slotReels.IsPatchUpFinished) {
                log("PATCH_UP end");
                this.m_plateIndex += 1;
                var firstPlate = null;
                var firstTag = null;
                var secondPlate = null;
                var hasNextPlate = false;

                if (this.m_plateIndex < this.m_spinAckQue.gi.pc - 1) {
                  firstPlate = this.ConvertString2Number(this.m_spinAckQue.gi.pq[this.m_plateIndex].ps);
                  firstTag = this.ConvertString2Number(this.m_spinAckQue.gi.pq[this.m_plateIndex].pt);
                  hasNextPlate = this.m_plateIndex < this.m_spinAckQue.gi.pc - 1;

                  if (hasNextPlate) {
                    secondPlate = this.ConvertString2Number(this.m_spinAckQue.gi.pq[this.m_plateIndex + 1].ps);
                  }
                }

                if (firstPlate && firstTag && (hasNextPlate && secondPlate || !hasNextPlate && !secondPlate)) {
                  this.m_slotReels.ChangeToNext(firstPlate, firstTag, secondPlate);
                }

                this.ChangeState();
              }

              break;

            case GAMEVIEW_STATE.MHB_SHOW:
              if (this.m_state.IsEntering()) {
                log("game state MHB_SHOW");

                if (this.m_fullJpWin > 0) {
                  MHBManager.GetInstance().ShowMhbResult(this.m_fullJpWin, function () {
                    _this7.ChangeState();
                  });
                  this.m_fullJpWin = 0;
                } else {
                  this.ChangeState();
                }
              }

              break;

            case GAMEVIEW_STATE.GET_ELEMENT:
              if (this.m_state.IsEntering()) {
                log("game state GET_ELEMENT");
                var isGetWheel = Boolean((this.m_spinAckQue.fi && !this.m_isInFreeGame || this.m_spinAckQue.bi && this.m_bonusRound === -1 || this.m_spinAckQue.bmi || this.m_spinAckQue.jpi) && this.m_spinAckQue.gwe);

                var _tag = this.ConvertString2Number(this.m_spinAckQue.gi.pq[this.m_plateIndex].pt);

                var pos = new Array();

                for (var col = 0; col < GS_Define.PLATE_SIZE; col++) {
                  for (var row = 0; row < GS_Define.PLATE_SIZE; row++) {
                    if (_tag[col][row] === GS_Define.UPGRADE_TAG) {
                      pos.push(v3(col, row, 0));
                    }
                  }
                }

                var isLast = this.m_collectionCount + pos.length >= GS_Define.COLLECT_MAX || this.m_collectionCount + pos.length === this.m_spinAckQue.tuc;
                this.m_effectPlate.ShowGetElement(pos, this.m_isLandscape, isLast && isGetWheel, function () {
                  _this7.m_collectionCount++;

                  if (_this7.m_collectionCount > _this7.m_spinAckQue.tuc) {
                    _this7.m_collectionCount = _this7.m_spinAckQue.tuc;
                  }

                  _this7.SetCollect();
                }, function () {
                  if (_this7.m_collectionCount === GS_Define.COLLECT_MAX - 1) {
                    _this7.m_effectPlate.ShowLastElementHint();
                  }

                  _this7.m_effectPlate.CloseCap(isLast && isGetWheel);

                  _this7.ChangeState();
                });
              }

              break;

            case GAMEVIEW_STATE.UPGRADE:
              if (this.m_state.IsEntering()) {
                log("game state UPGRADE");
                GS_Define.PLATE_SIZE += 1;

                if (GS_Define.PLATE_SIZE > 6) {
                  GS_Define.PLATE_SIZE = 4;
                }

                tween(this.m_slotReels.node.getComponent(UIOpacity)).to(0.5, {
                  opacity: 0
                }).call(function () {
                  _this7.m_slotReels.ChangePlateSize();

                  _this7.m_effectPlate.ShowUpGrade(function () {
                    tween(_this7.m_slotReels.node.getComponent(UIOpacity)).to(0.5, {
                      opacity: 255
                    }).call(function () {
                      _this7.ChangeFadeType(FADE_TYPE.IN);

                      _this7.ChangeState();
                    }).start();
                  });
                }).start();
              }

              break;

            case GAMEVIEW_STATE.GET_WHEEL:
              if (this.m_state.IsEntering()) {
                log("game state GET_WHEEL");
                this.m_isShowGetWheel = true;
                this.m_effectPlate.BoxEffectEnd();
                var gameType = null;
                var info = -1;
                gameType = FeatureGameType.FG; //免費遊戲

                this.wheelResult = Math.floor(Math.random() * 2);
                this.wheelResult = 0;
                if (this.cntPress > 10) this.wheelResult = 1; //info = this.m_spinAckQue.bmi.bmm;
                //info = this.m_bottomBar.GetNowBetValue();

                if (this.wheelResult === 0) {
                  gameType = FeatureGameType.FG;
                  info = Math.floor(Math.random() * 4) + 1;
                  this.magnification = info + 1; //倍率
                } else if (this.wheelResult === 1) {
                  gameType = FeatureGameType.BG;
                  info = Math.floor(Math.random() * 4) + 1;
                  this.magnification = info + 1; //倍率
                }
                /*
                if (this.m_spinAckQue.fi) {
                  gameType = FeatureGameType.FG;
                  info = this.m_spinAckQue.fi.fm - 1;
                } else if (this.m_spinAckQue.bi) {
                  gameType = FeatureGameType.BG;
                  info = this.m_spinAckQue.bi.bc - 1;
                } else if (this.m_spinAckQue.bmi) {
                  gameType = FeatureGameType.MUL;
                  info = this.m_spinAckQue.bmi.bmm;
                } else if (this.m_spinAckQue.jpi) {
                  gameType = this.m_spinAckQue.jpi.jt + FeatureGameType.MUL;
                  info = this.m_spinAckQue.jpi.jt + FeatureGameType.MUL;
                } else {
                }*/


                this.m_wheel.SetGameType(gameType, info, function () {
                  _this7.ChangeState();

                  _this7.m_wheel.node.active = false;
                });
                this.m_wheel.LockSpin();
                this.ChangeFadeType(FADE_TYPE.OUT);
                this.m_effectPlate.ShowGetWheel(function () {
                  _this7.m_isShowGetWheel = false;

                  if (_this7.m_isChange) {
                    _this7.OnRotation();
                  }

                  _this7.m_wheel.Show(_this7.m_isAutoSpin);
                });
              }

              break;

            case GAMEVIEW_STATE.ENTER_FREE:
              if (this.m_state.IsEntering()) {
                log("game state ENTER_FREE");
                this.ChangeFadeType(FADE_TYPE.OUT, GS_Define.AudioClips.Fg_Bg);

                if (this.m_isAutoSpin) {
                  if (this.m_autoplayInfos.isCheckFree) {
                    this.m_isAutoSpin = false;
                    this.ShowAutoPlayHint();
                  }
                }

                this.m_isInFreeGame = true; //this.m_fgOdds = this.m_spinAckQue.fi.fm;

                this.m_fgOdds = this.magnification; //倍率

                this.SetOddsLabels("X" + this.m_fgOdds.toString());

                for (var _i2 = 0; _i2 < this.m_roundHintLabels.length; _i2++) {
                  this.m_roundHintLabels[_i2].string = 10 + "/10";
                }

                this.m_fgRound = -1;
                this.m_bottomBar.SetEnterFree();
                this.m_effectPlate.ShowEnterFree();
                this.ChangeState();
              }

              break;

            case GAMEVIEW_STATE.LEAVE_FREE:
              //這這這
              if (this.m_state.IsEntering()) {
                log("game state LEAVE_FREE"); //TODO 離開free表演
              }

              break;

            case GAMEVIEW_STATE.ENTER_BONUS:
              if (this.m_state.IsEntering()) {
                log("game state ENTER_BONUS");
                var plate = this.ConvertString2Number(this.m_spinAckQue.gi.pq[this.m_spinAckQue.gi.pc - 1].ps); //let plate = this.m_slotReels.getMySymbol();

                log(plate, this.m_bonusRound);

                if (plate) {
                  this.m_bonusRound++;

                  for (var _i3 = 0; _i3 < this.m_roundHintLabels.length; _i3++) {
                    this.m_roundHintLabels[_i3].string = this.m_spinAckQue.bi.bc - this.m_bonusRound - 1 + "/" + this.m_spinAckQue.bi.bc;
                  }

                  var changeSymbol = this.m_spinAckQue.bi.bsb[this.m_bonusRound].bss;
                  var symbolSpriteFrames = this.m_define["Symbol" + GS_Define.PLATE_SIZE + "SpriteFrame"];
                  this.SetBgChangeHint(true, symbolSpriteFrames[changeSymbol]);
                  var extraNodes = new Array();

                  for (var _i4 = 0; _i4 < this.m_changeHintSprites.length; _i4++) {
                    extraNodes.push(this.m_changeHintSprites[_i4].node);
                  }

                  this.m_effectPlate.ShowBonus(changeSymbol, this.m_spinAckQue.bi.bsb[this.m_bonusRound].bsc, plate, function () {
                    _this7.m_plateIndex = 0;
                    _this7.m_spinAckQue.gi = _this7.m_spinAckQue.bi.bsb[_this7.m_bonusRound].bgi;

                    var firstPlate = _this7.ConvertString2Number(_this7.m_spinAckQue.gi.pq[_this7.m_plateIndex].ps);

                    var firstTag = _this7.ConvertString2Number(_this7.m_spinAckQue.gi.pq[_this7.m_plateIndex].pt);

                    var secondPlate = null;
                    var hasNextPlate = _this7.m_spinAckQue.gi.pq.length > 1 && _this7.m_spinAckQue.gi.pc > 1 && _this7.m_spinAckQue.gi.pc > _this7.m_plateIndex + 1;

                    if (hasNextPlate) {
                      secondPlate = _this7.ConvertString2Number(_this7.m_spinAckQue.gi.pq[_this7.m_plateIndex + 1].ps);
                    }

                    if (firstPlate && firstTag && (hasNextPlate && secondPlate || !hasNextPlate && !secondPlate)) {
                      _this7.m_slotReels.SetPlateInfo(firstPlate, firstTag, secondPlate);
                    }

                    _this7.ChangeState();
                  }, extraNodes);
                }
              }

              break;

            case GAMEVIEW_STATE.LEAVE_BONUS:
              if (this.m_state.IsEntering()) {
                log("game state LEAVE_BONUS"); //TODO 離開bonus表演
              }

              break;

            case GAMEVIEW_STATE.GET_MULTI:
              if (this.m_state.IsEntering()) {
                log("game state GET_MULTI");
                this.m_effectPlate.HideCombo();
                this.AddWin(this.m_spinAckQue.bmi.bmtw);

                if (this.m_spinAckQue.bmi.bmtw > 0) {
                  var lvl = this.ComputeAwardLvl(this.m_spinAckQue.bmi.bmtw);
                  lvl = lvl === -1 ? 0 : lvl;
                  this.m_effectPlate.ShowCongrat(this.m_spinAckQue.bmi.bmtw, lvl, FeatureGameType.MUL, this.m_isLandscape ? this.m_OddsLabels[0].node : this.m_OddsLabels[1].node, function () {
                    _this7.ChangeState();
                  });
                  tween(this.node).delay(1).call(function () {
                    _this7.m_bottomBar.SetSpinState(_this7.m_bottomBar.SlotBottomBarState.GET_AWARD_NO_AUTO);
                  }).start();
                } else {
                  this.ChangeState();
                }
              }

              break;

            case GAMEVIEW_STATE.GET_JP:
              if (this.m_state.IsEntering()) {
                log("game state GET_JP");
                this.m_effectPlate.HideCombo();

                if (this.m_spinAckQue.jpi.jtw > 0) {
                  var _lvl = 1;

                  if (this.m_spinAckQue.jpi.jt + FeatureGameType.MUL === FeatureGameType.MAJOR || this.m_spinAckQue.jpi.jt + FeatureGameType.MUL === FeatureGameType.GRAND) {
                    _lvl = 2;
                  }

                  this.m_effectPlate.ShowCongrat(this.m_spinAckQue.jpi.jtw, _lvl, this.m_spinAckQue.jpi.jt + FeatureGameType.MUL, this.m_isLandscape ? this.m_OddsLabels[0].node : this.m_OddsLabels[1].node, function () {
                    var jps = _this7.m_spinJpAck.Share.Fronts;
                    jps.unshift(_this7.m_spinJpAck.Self);

                    _this7.m_jpManager.UnLockJp();

                    _this7.m_jpManager.SetJpNum(jps);

                    _this7.m_isGetJp = false;

                    _this7.AddWin(_this7.m_spinAckQue.jpi.jtw);

                    _this7.ChangeState();
                  });
                  tween(this.node).delay(1).call(function () {
                    _this7.m_bottomBar.SetSpinState(_this7.m_bottomBar.SlotBottomBarState.GET_AWARD_NO_AUTO);
                  }).start();
                } else {
                  this.m_isGetJp = false;
                  this.ChangeState();
                }
              }

              break;

            case GAMEVIEW_STATE.AWARD:
              if (this.m_state.IsEntering()) {
                log("game state AWARD", this.m_spinAckQue.gi.gw);

                if (!(this.m_spinAckQue.bi && this.m_bonusRound === -1)) {
                  this.m_effectPlate.HideCombo();
                }

                var totalWin = this.m_isInFreeGame ? Tools.divide(this.m_spinAckQue.gi.gw, this.m_fgOdds) : Tools.strip(this.m_spinAckQue.gi.gw);

                if (totalWin > 0) {
                  var _lvl2 = this.ComputeAwardLvl();

                  if (_lvl2 !== -1) {
                    this.m_effectPlate.ShowAward(totalWin, _lvl2, function () {
                      _this7.ChangeState();
                    });
                    tween(this.node).delay(0.5).call(function () {
                      _this7.m_bottomBar.SetSpinState(_this7.m_bottomBar.SlotBottomBarState.GET_AWARD_NO_AUTO);
                    }).start();
                  } else {
                    this.ChangeState();
                  }
                } else {
                  this.ChangeState();
                }
              }

              break;

            case GAMEVIEW_STATE.END:
              if (this.m_state.IsEntering()) {
                if (this.m_totalWin !== 0 && !this.m_isInFreeGame) {
                  this.m_totalWin = 0;
                  this.m_bottomBar.SetChips(this.m_spinAckQue.nm);
                }

                if (this.m_isInFreeGame) ;else if (this.m_isAutoSpin) {
                  var lessChip = Tools.strip(this.m_bottomBar.GetValueOfPoint_Less());
                  var greatChip = Tools.strip(this.m_bottomBar.GetValueOfPoint_Great());

                  if (!this.m_bottomBar.IsAutoPlayByTimes() || //選財產小於
                  lessChip != -1 && Tools.strip(this.m_bottomBar.GetChips()) <= lessChip || //選財產大於
                  greatChip != -1 && Tools.strip(this.m_bottomBar.GetChips()) >= greatChip || //贏分倍率
                  Tools.strip(this.m_bottomBar.GetValueOfSingleWin()) > 0 && Tools.strip(this.m_spinAckQue.aw) >= Tools.strip(this.m_bottomBar.GetValueOfSingleWin())) {
                    if (Define.APP) {
                      ConnectionManager.getInstance().SendBtnClickEvent(ConnectionManager.FormBtnClickParams(Number(Define.APP.GetAID()), Number(Define.APP.GetApiID()), Define.GAME_ID.GEM3, GS_Define.Ver, Define.BTN_CLICK_EVENT.WISEAUTO_FORCE_NON_MANUAL_STOP, Define.PHASE_RESULT.SUCCESS, this.m_isLandscape));
                    }

                    this.m_isAutoSpin = false;
                    this.ShowAutoPlayHint();
                  }
                } //TODO 同步Spin Ack的當局總分

                if (this.m_isAutoSpin && this.m_spinAckQue.gi.gw > 0) {
                  this.m_processTick = 0;
                } else {
                  this.m_processTick = 0;
                }
              }

              this.m_processTick = this.m_processTick - dt * 1000;

              if (this.m_processTick <= 0) {
                this.ChangeState();
              }

              break;
          }
        };

        _proto.ChangeFadeType = function ChangeFadeType(type, changeAudioName) {
          if (changeAudioName === void 0) {
            changeAudioName = null;
          }

          this.m_changeBgAudio = changeAudioName;

          if (type === FADE_TYPE.IN) {
            this.m_isBgFadeIn = true;
            this.m_isBgFadeOut = false;
          } else if (type == FADE_TYPE.OUT) {
            this.m_isBgFadeIn = false;
            this.m_isBgFadeOut = true;
          }
        };

        _proto.CleanCollect = function CleanCollect() {
          this.m_collectionCount = 0;
          this.SetCollect();
        };

        _proto.AddWin = function AddWin(win) {//TODO 增加贏分並讓地bar顯示
        };

        _proto.getWin = function getWin() {
          return this.m_bottomBar.GetWinValue();
        };

        _proto.inFree = function inFree() {
          var _this8 = this;

          this.m_bottomBar.SyncChips(this.m_bottomBar.GetChips() + this.m_bottomBar.GetNowBetValue(), function () {
            if (_this8.m_isAutoSpin) {
              _this8.m_isAutoSpin = false;

              _this8.ShowAutoPlayHint();
            }
          }, true);
        };

        _proto.addWin = function addWin(win) {
          var _this9 = this; //log("有加加加嗎");


          this.m_bottomBar.SetWinValue(this.m_bottomBar.GetWinValue() + win);
          this.m_bottomBar.SyncChips(this.m_bottomBar.GetChips() + win, function () {
            if (_this9.m_isAutoSpin) {
              _this9.m_isAutoSpin = false;

              _this9.ShowAutoPlayHint();
            }
          }, true);
        };

        _proto.StartSpin = function StartSpin() {
          var _this10 = this;

          if (this.IsInFreeGame) this.inFree();
          RetryManager.GetInstance().IsReqSpin = true;
          var betValue = this.m_bottomBar.GetNowBetValue();
          this.m_bottomBar.SetChips(this.m_bottomBar.GetChips() - betValue);
          var data = new _cjsExports.gem3Proto.SpinReq();
          data.Bet = Tools.strip(betValue);
          data.Currency = walletManger.CurencyID;

          if (Define.APP) {
            Define.APP.GetApiID();
          }

          var reqData = new _cjsExports.gem3Proto.GameReqData();
          reqData.apiid = Define.APP ? Number(Define.APP.GetApiID()) : -1;
          reqData.aid = this.m_aId;
          reqData.token = this.m_token;
          var req = new SpinProtocolData();

          if (GS_Define.IsProto) {
            reqData.encode = _cjsExports.gem3Proto.SpinReq.encode(data).finish();
            req.reqData = _cjsExports.gem3Proto.GameReqData.encode(reqData).finish();
          } else {
            reqData.spin = data;
            req.reqData = reqData;
          }

          ConnectManager.GetInstance().SendCommand(req, function (ack) {
            _this10.OnRecvAck(ack);
          });
          this.m_bottomBar.AutoPlayByTimes(); //提前開始清除盤面

          this.m_slotReels.StartSpin();

          if (this.IsHardStop) {
            this.m_bottomBar.SetSpinWithSpeed();
          }

          if (this.m_isAutoSpin) {
            this.m_bottomBar.SetSpinWithAuto();
          }
        }
        /**
         * 獎勵等級
         * @param win 贏分
         * @returns 等級
         */
        ;

        _proto.ComputeAwardLvl = function ComputeAwardLvl(win) {
          var totalWin = 0;

          if (win) {
            totalWin = win;
          } else if (this.m_isInFreeGame) {
            totalWin = Tools.divide(this.m_spinAckQue.gi.gw, this.m_fgOdds);
          } else {
            totalWin = Tools.strip(this.m_spinAckQue.gi.gw);
          }

          var lvl = -1;

          if (totalWin > 0) {
            var bet = this.m_bottomBar.GetNowBetValue();
            var odd = Tools.divide(totalWin, bet);

            for (var i = 0; i < GS_Define.LINE_AWARD_SETTING.length; i++) {
              if (i === GS_Define.LINE_AWARD_SETTING.length - 1) {
                if (odd >= GS_Define.LINE_AWARD_SETTING[i].betRate) {
                  lvl = i;
                  break;
                }
              } else {
                if (odd >= GS_Define.LINE_AWARD_SETTING[i].betRate && odd < GS_Define.LINE_AWARD_SETTING[i + 1].betRate) {
                  lvl = i;
                  break;
                }
              }
            }
          }

          return lvl;
        };

        _proto.ChangeState = function ChangeState() {
          var _this11 = this;

          log("ChangeState", this.m_state.Current(), Date.now());

          if (this.m_isChange) {
            this.OnRotation();
          }

          switch (this.m_state.Current()) {
            case GAMEVIEW_STATE.FIRST_PLATE:
              if (this.m_spinAckQue.gi.pq[this.m_plateIndex].hu) {
                this.m_state.NextState(GAMEVIEW_STATE.GET_ELEMENT);
              } else if (this.m_spinAckQue.gi.pq.length > 1 && this.m_spinAckQue.gi.pc > 1 && this.m_spinAckQue.gi.pc > this.m_plateIndex + 1) {
                this.m_state.NextState(GAMEVIEW_STATE.EXPLODE);
              } else if ((this.m_spinAckQue.fi && !this.m_isInFreeGame || this.m_spinAckQue.bi && this.m_bonusRound === -1 || this.m_spinAckQue.bmi || this.m_spinAckQue.jpi) && this.m_spinAckQue.gwe) {
                this.m_state.NextState(GAMEVIEW_STATE.GET_WHEEL);
              } else if (this.m_isInFreeGame && this.m_fgRound + 1 === this.m_spinAckQue.fi.fq.length) {
                this.m_state.NextState(GAMEVIEW_STATE.LEAVE_FREE);
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.END);
              }

              break;

            case GAMEVIEW_STATE.PATCH_UP:
              log("Patch Up", this.m_plateIndex, this.m_bonusRound);

              if (this.m_plateIndex >= this.m_spinAckQue.gi.pc - 1) {
                this.m_state.NextState(GAMEVIEW_STATE.MHB_SHOW);
              } else if (this.m_spinAckQue.gi.pq[this.m_plateIndex].hu) {
                this.m_state.NextState(GAMEVIEW_STATE.GET_ELEMENT);
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.EXPLODE);
              }

              break;

            case GAMEVIEW_STATE.MHB_SHOW:
              if (this.m_spinAckQue.bi && this.m_bonusRound !== -1 && this.m_bonusRound + 1 !== this.m_spinAckQue.bi.bc) {
                this.m_state.NextState(GAMEVIEW_STATE.ENTER_BONUS);
              } else if (this.m_spinAckQue.bi && this.m_bonusRound + 1 === this.m_spinAckQue.bi.bc) {
                this.m_state.NextState(GAMEVIEW_STATE.LEAVE_BONUS);
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.AWARD);
              }

              break;

            case GAMEVIEW_STATE.GET_ELEMENT:
              if (this.m_spinAckQue.gi.pq[this.m_plateIndex].ai && this.m_spinAckQue.gi.pq[this.m_plateIndex].sw > 0) {
                this.m_state.NextState(GAMEVIEW_STATE.EXPLODE);
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.TILE_MATCHING);
              }

              break;

            case GAMEVIEW_STATE.UPGRADE:
              this.m_state.NextState(GAMEVIEW_STATE.END);
              break;

            case GAMEVIEW_STATE.GET_WHEEL:
              if (this.m_spinAckQue.fi && !this.m_isInFreeGame && this.m_spinAckQue.gwe) {
                this.EventChange(true, FeatureGameType.FG);
                this.m_state.NextState(GAMEVIEW_STATE.ENTER_FREE);
              } else if (this.m_spinAckQue.bi && this.m_bonusRound + 1 !== this.m_spinAckQue.bi.bc && this.m_spinAckQue.gwe) {
                this.EventChange(true, FeatureGameType.BG);
                this.m_effectPlate.ShowEnterBonus();
                this.m_isInBonusGame = true;
                this.m_bottomBar.SetEnterFree();

                for (var i = 0; i < this.m_roundHintLabels.length; i++) {
                  this.m_roundHintLabels[i].string = this.m_spinAckQue.bi.bc + "/" + this.m_spinAckQue.bi.bc;
                }

                if (this.m_isAutoSpin) {
                  tween(this.node).delay(0.5).call(function () {
                    _this11.m_state.NextState(GAMEVIEW_STATE.ENTER_BONUS);
                  }).start();
                } else {
                  this.m_state.NextState(GAMEVIEW_STATE.IDLE);
                  this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.IDLE);
                }
              } else if (this.m_spinAckQue.bmi && this.m_spinAckQue.gwe) {
                this.m_state.NextState(GAMEVIEW_STATE.GET_MULTI);
              } else if (this.m_spinAckQue.jpi && this.m_spinAckQue.gwe) {
                this.m_state.NextState(GAMEVIEW_STATE.GET_JP);
              }

              break;

            case GAMEVIEW_STATE.ENTER_FREE:
              if (this.m_isAutoSpin) {
                this.m_state.NextState(GAMEVIEW_STATE.SPIN);
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.IDLE);
                this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.IDLE);
              }

              break;

            case GAMEVIEW_STATE.LEAVE_FREE:
              this.EventChange(false, FeatureGameType.FG);

              if (this.m_spinAckQue.cp) {
                this.m_state.NextState(GAMEVIEW_STATE.UPGRADE);
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.END);
              }

              break;

            case GAMEVIEW_STATE.ENTER_BONUS:
              if (this.m_plateIndex + 1 === this.m_spinAckQue.gi.pq.length) {
                if (this.m_bonusRound + 1 === this.m_spinAckQue.bi.bc) {
                  this.m_state.NextState(GAMEVIEW_STATE.LEAVE_BONUS);
                } else {
                  this.m_state.NextState(GAMEVIEW_STATE.ENTER_BONUS);
                }
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.EXPLODE);
              }

              break;

            case GAMEVIEW_STATE.LEAVE_BONUS:
              this.EventChange(false, FeatureGameType.BG);

              if (this.m_spinAckQue.cp) {
                this.m_state.NextState(GAMEVIEW_STATE.UPGRADE);
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.END);
              }

              break;

            case GAMEVIEW_STATE.GET_MULTI:
              if (this.m_spinAckQue.cp) {
                this.m_state.NextState(GAMEVIEW_STATE.UPGRADE);
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.END);
              }

              break;

            case GAMEVIEW_STATE.GET_JP:
              if (this.m_spinAckQue.cp) {
                this.m_state.NextState(GAMEVIEW_STATE.UPGRADE);
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.END);
              }

              break;

            case GAMEVIEW_STATE.AWARD:
              if ((this.m_spinAckQue.fi && !this.m_isInFreeGame || this.m_spinAckQue.bi && this.m_bonusRound === -1 || this.m_spinAckQue.bmi || this.m_spinAckQue.jpi) && this.m_spinAckQue.gwe) {
                this.m_state.NextState(GAMEVIEW_STATE.GET_WHEEL);
              } else if (this.m_isInFreeGame && this.m_fgRound + 1 === this.m_spinAckQue.fi.fq.length) {
                this.m_state.NextState(GAMEVIEW_STATE.LEAVE_FREE);
              } else if (this.m_spinAckQue.cp && !this.m_isInFreeGame) {
                this.m_state.NextState(GAMEVIEW_STATE.UPGRADE);
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.END);
              }

              break;

            case GAMEVIEW_STATE.END:
              if (this.m_isInFreeGame && this.m_fgRound + 1 !== this.m_spinAckQue.fi.fq.length) {
                this.m_state.NextState(GAMEVIEW_STATE.SPIN);

                if (this.m_isAutoSpin) {
                  this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.CLICK_AUTOPLAY);
                } else {
                  this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.CLICK_SPIN);
                }
              } else if (this.m_isAutoSpin) {
                this.m_state.NextState(GAMEVIEW_STATE.SPIN);
                this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.CLICK_AUTOPLAY);
              } else {
                this.m_state.NextState(GAMEVIEW_STATE.IDLE);
                this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.IDLE);
              }

              break;
          }
        };

        _proto.GetDisplayValue = function GetDisplayValue(num) {
          return this.m_bottomBar.GetDisplayValue(num);
        };

        _proto.SetBgChangeHint = function SetBgChangeHint(active, spriteFrame) {
          for (var i = 0; i < this.m_changeHintSprites.length; i++) {
            this.m_changeHintSprites[i].node.active = active;
            this.m_changeHintSprites[i].enabled = active;

            if (spriteFrame) {
              this.m_changeHintSprites[i].spriteFrame = spriteFrame;
            }
          }
        };

        _proto.SetElementHintBoard = function SetElementHintBoard(active) {
          for (var i = 0; i < this.m_elementHintNodes.length; i++) {
            this.m_elementHintNodes[i].active = active;
            this.m_collectionCountLabels[i].node.active = active;
          }

          this.m_collectionBgNode.active = active;
        };

        _proto.EventChange = function EventChange(isEvent, eventType) {
          log("EventChange", isEvent);

          for (var i = 0; i < this.m_jpNodes.length; i++) {
            this.m_jpNodes[i].active = !isEvent;
          }

          var spriteAltas = LocaleStringManager.GetInstance().GetGameAtlas();
          this.m_roundHintNode.active = isEvent;

          if (eventType === FeatureGameType.FG) {
            //this.SetOddsLabels("X" + this.m_spinAckQue.fi.fm.toString(), isEvent);
            this.SetOddsLabels("X" + this.magnification.toString(), isEvent); //倍率

            this.m_eventHintSprites[0].spriteFrame = spriteAltas.getSpriteFrame(GS_Define.BASE_EVENT_PIC_NAME.FG);
            this.m_eventHintSprites[1].spriteFrame = spriteAltas.getSpriteFrame(GS_Define.BASE_EVENT_PIC_NAME.FG_S + "_S");
            this.SetElementHintBoard(!isEvent);
            this.m_portraitelementBoardNode.active = !isEvent;
            this.SetBgChangeHint(false);
            this.SetHintNodes(isEvent);
          } else if (eventType === FeatureGameType.BG) {
            this.SetOddsLabels("X", false);
            this.m_eventHintSprites[0].spriteFrame = spriteAltas.getSpriteFrame(GS_Define.BASE_EVENT_PIC_NAME.BG);
            this.m_eventHintSprites[1].spriteFrame = spriteAltas.getSpriteFrame(GS_Define.BASE_EVENT_PIC_NAME.BG_S + "_S");
            this.SetElementHintBoard(!isEvent);
            this.m_portraitelementBoardNode.active = !isEvent;
            this.SetBgChangeHint(false);
            this.SetHintNodes(isEvent);
          }
        } //要求遊戲資訊
        ;

        _proto.ReqGameInfo = function ReqGameInfo(responseCb) {
          var data = new _cjsExports.gem3Proto.GameReqData();
          data.aid = this.m_aId;
          var apiId = "-1";

          if (Define.APP) {
            apiId = Define.APP.GetApiID();
          }

          data.apiid = Number(apiId);
          data.token = this.m_token;
          var req = new InfoProtocolData();

          if (GS_Define.IsProto) {
            req.reqData = _cjsExports.gem3Proto.GameReqData.encode(data).finish();
          } else {
            req.reqData = data;
          }

          ConnectManager.GetInstance().SendCommand(req, function (ack) {
            responseCb == null ? void 0 : responseCb(ack);
          });
        };

        _proto.ConvertSpinAck = function ConvertSpinAck(data) {
          var ack = data.info;
          var spinAck = {
            gi: null,
            cp: ack.ChangePlate ? ack.ChangePlate : false,
            cpi: ack.ChangePlateSize ? ack.ChangePlateSize : 0,
            mw: ack.Mainwin ? ack.Mainwin : 0,
            ww: ack.Wheelwin ? ack.Wheelwin : 0,
            aw: ack.TotalWin ? ack.TotalWin : 0,
            at: ack.AwardType ? ack.AwardType : 0,
            nm: ack.NowMoney ? ack.NowMoney : 0,
            act: ack.AckType ? ack.AckType : 0,
            gwe: ack.GetWheel ? ack.GetWheel : false,
            wt: ack.WheelType ? ack.WheelType : 0,
            fi: null,
            bi: null,
            bmi: null,
            jpi: null,
            uc: ack.Upcount ? ack.Upcount : 0,
            tuc: ack.TotalUpcount ? ack.TotalUpcount : 0,
            si: ack.ShowIndex ? ack.ShowIndex : ""
          };

          if (ack.GemInfo) {
            var gi = ack.GemInfo;
            spinAck.gi = {
              pq: this.GetSingleGemList(gi.PlateQueue),
              pc: gi.Count ? gi.Count : 0,
              gw: gi.GemWin ? gi.GemWin : 0
            };
          }

          if (ack.FreeInfo) {
            var fi = ack.FreeInfo;
            spinAck.fi = {
              fq: [],
              fm: fi.FreeMul ? fi.FreeMul : 0,
              ftw: fi.FreeTotalWin ? fi.FreeTotalWin : 0
            };

            for (var i = 0; i < fi.FreeQueue.length; i++) {
              spinAck.fi.fq.push({
                fgi: {
                  pq: this.GetSingleGemList(fi.FreeQueue[i].FreeGemInfo.PlateQueue),
                  pc: fi.FreeQueue[i].FreeGemInfo.Count ? fi.FreeQueue[i].FreeGemInfo.Count : 0,
                  gw: fi.FreeQueue[i].FreeGemInfo.GemWin ? fi.FreeQueue[i].FreeGemInfo.GemWin : 0
                },
                fsw: fi.FreeQueue[i].FreeSingleWin ? fi.FreeQueue[i].FreeSingleWin : 0,
                fat: fi.FreeQueue[i].AwardType ? fi.FreeQueue[i].AwardType : 0,
                fnm: fi.FreeQueue[i].NowMoney ? fi.FreeQueue[i].NowMoney : 0
              });
            }
          }

          if (ack.BonusInfo) {
            var bi = ack.BonusInfo;
            spinAck.bi = {
              bsb: [],
              bc: bi.BonusCount ? bi.BonusCount : 0,
              btw: bi.BonusTotalWin ? bi.BonusTotalWin : 0
            };

            for (var _i5 = 0; _i5 < bi.BonusQueue.length; _i5++) {
              spinAck.bi.bsb.push({
                bgi: {
                  pq: this.GetSingleGemList(bi.BonusQueue[_i5].BonusGem.PlateQueue),
                  pc: bi.BonusQueue[_i5].BonusGem.Count ? bi.BonusQueue[_i5].BonusGem.Count : 0,
                  gw: bi.BonusQueue[_i5].BonusGem.GemWin ? bi.BonusQueue[_i5].BonusGem.GemWin : 0
                },
                bss: bi.BonusQueue[_i5].BonusSymbol ? bi.BonusQueue[_i5].BonusSymbol : 0,
                bsc: bi.BonusQueue[_i5].BonusSymbolCount ? bi.BonusQueue[_i5].BonusSymbolCount : 0
              });
            }
          }

          if (ack.JPInfo) {
            spinAck.jpi = {
              jt: ack.JPInfo.JPType ? ack.JPInfo.JPType : 0,
              jtw: ack.JPInfo.JPTotalWin ? ack.JPInfo.JPTotalWin : 0
            };
          }

          if (ack.BetMulInfo) {
            spinAck.bmi = {
              bmm: ack.BetMulInfo.BetMul ? ack.BetMulInfo.BetMul : 0,
              bmtw: ack.BetMulInfo.BetMulTotalWin ? ack.BetMulInfo.BetMulTotalWin : 0
            };
          }

          var serviceInfo = {};

          if (data.serviceProto) {
            serviceInfo = _cjsExports$1.gaiaProto.ServiceData.decode(data.serviceProto);
          }

          var result = {
            info: spinAck,
            jpinfo: data.jpinfo ? {
              Share: {
                Fronts: data.jpinfo.Fronts ? data.jpinfo.Fronts : []
              },
              Self: data.jpinfo.Self ? data.jpinfo.Self : 0
            } : null,
            serviceInfo: serviceInfo
          };
          return result;
        };

        _proto.GetSingleGemList = function GetSingleGemList(data) {
          var result = [];

          for (var i = 0; i < data.length; i++) {
            var sg = {
              ps: [],
              pt: [],
              ai: null,
              sw: data[i].SingleWin ? data[i].SingleWin : 0,
              hu: data[i].HasUp ? data[i].HasUp : false
            };

            for (var j = 0; j < data[i].PlateSymbol.length; j++) {
              sg.ps.push(data[i].PlateSymbol[j]);
            }

            for (var _j = 0; _j < data[i].PlateSymbol.length; _j++) {
              sg.pt.push(data[i].PlateTag[_j]);
            }

            if (data[i].AwardInfos && data[i].AwardInfos.length > 0) {
              sg.ai = [];

              for (var _j2 = 0; _j2 < data[i].AwardInfos.length; _j2++) {
                sg.ai.push({
                  s: data[i].AwardInfos[_j2].Symbol ? data[i].AwardInfos[_j2].Symbol : 0,
                  t: data[i].AwardInfos[_j2].Tag ? data[i].AwardInfos[_j2].Tag : 0,
                  w: data[i].AwardInfos[_j2].Win ? data[i].AwardInfos[_j2].Win : 0,
                  c: data[i].AwardInfos[_j2].Count ? data[i].AwardInfos[_j2].Count : 0
                });
              }
            }

            result.push(sg);
          }

          return result;
        };

        _proto.ConvertGameWalletInfoList = function ConvertGameWalletInfoList(data) {
          var result = [];

          for (var i = 0; i < data.length; i++) {
            var wallet = data[i].Info;
            wallet.BetPropList = data[i].BetPropList;
            result.push(wallet);
          }

          return result;
        } //Tag: Server回應
        ;

        _proto.OnRecvAck = function OnRecvAck(ack) {
          var _this12 = this;

          log("Sever ack", ack, typeof ack);

          if (typeof ack == "boolean") {
            return;
          }

          if (ack instanceof ArrayBuffer) {
            var bytes = new Uint8Array(ack);
            ack = _cjsExports.gem3Proto.ResData.decode(bytes);
          }

          log("Sever ack decode", ack); //server回傳非成功

          if (ack.ret == undefined) {
            //proto會把0、null變成undefined
            ack.ret = GS_Define.SERVER_RET_TYPE.SERVER_SUCCESS;
          }

          log(ack.ret, GS_Define.SERVER_RET_TYPE.SERVER_SUCCESS, ack.ret !== GS_Define.SERVER_RET_TYPE.SERVER_SUCCESS);

          if (ack.ret !== GS_Define.SERVER_RET_TYPE.SERVER_SUCCESS) {
            var msgKey = Define.StringKey.MSGBOX_CONNECT_FAIL;

            if (ack.ret == GS_Define.SERVER_RET_TYPE.SERVER_MAINTAIN) {
              msgKey = Define.StringKey.MSGBOX_SERVER_MAINTAIN;
            }

            MsgBox.getInstance().ShowMessageBox(msgKey, Define.StringKey.MSGBOX_TITLE_SYSTEM_INFO, Tools.CloseGameTab, Tools.GetErrorCode(Define.ErrorStatus.Game, ack.ret));
            return;
          }

          var ackType = ack.type;

          if (ackType == undefined) {
            //proto會把0、null變成undefined
            ackType = GS_Define.AckType.login;
          }

          switch (ackType) {
            case GS_Define.AckType.login:
              {
                var info = null;

                if (ack.data.loginData) {
                  info = ack.data.loginData;
                } else {
                  info = _cjsExports.gem3Proto.LoginDataAck.decode(ack.data.encode);
                }

                if (info.result == 0 || info.result == undefined) {
                  this.m_isLogin = true;
                  this.m_aId = info.aid; //要求遊戲資訊

                  this.ReqGameInfo(function (ack) {
                    _this12.OnRecvAck(ack);
                  });
                  var apiId = Tools.GetLinkParameterByName("apiId");
                  var siteId = 0;

                  if (!apiId) {
                    apiId = "0";
                  }

                  if (Define.APP) {
                    apiId = Define.APP.GetApiID();
                    siteId = Define.APP.GetSiteID();
                  }

                  this.m_bottomBar.AutoPlayPanelInit(this.m_aId.toString(), apiId, Define.GAME_ID.GEM3.toString(), siteId);

                  if (RetryManager.GetInstance().CheckTrigger()) {
                    RetryManager.GetInstance().Reset();
                  }
                } else if (info.result == GS_Define.LOGIN_RESULT_TYPE.API_LOGIN_REPEAT_FAIL) {
                  this.Login(this.m_token);
                } else {
                  MsgBox.getInstance().ShowMessageBoxFormat(Define.StringKey.MSGBOX_LOGIN_FAIL, Define.StringKey.MSGBOX_TITLE_SYSTEM_INFO, null, Tools.CloseGameTab, Tools.GetErrorCode(Define.ErrorStatus.Game, info.result));
                }

                break;
              }

            case GS_Define.AckType.info:
              {
                var _info = null;

                if (ack.data.gameInfo) {
                  _info = ack.data.gameInfo;
                } else {
                  _info = _cjsExports.gem3Proto.GameInfoAck.decode(ack.data.encode);
                }

                if (_info.CanIntoArcade) {
                  this.m_bottomBar.Init(this.m_bottomBar.node, [], 1, this.ConvertGameWalletInfoList(_info.WalletInfo), this.m_bottomBar.GetChips());
                  var betList = this.m_bottomBar.GetBetList();
                  var key = this.m_aId + ":" + Define.GAME_ID.GEM3 + ":Bet";
                  var betIndex = Tools.GetFirstBetIndex(Define.API_ID);
                  var localBetIndex = LocalStorageManager.GetInt(key);

                  if (_info.LockBet) {
                    for (var i = 0; i < betList.length; i++) {
                      if (_info.LockBet === betList[i]) {
                        this.m_oldBetIndex = i;
                        betIndex = i;
                        break;
                      }
                    }

                    if (this.m_oldBetIndex === -1 && localBetIndex !== null) {
                      betIndex = localBetIndex;
                      this.m_oldBetIndex = localBetIndex;
                    }
                  } else if (localBetIndex !== null && betList[localBetIndex]) {
                    betIndex = localBetIndex;
                    this.m_oldBetIndex = localBetIndex;
                  }

                  this.m_bottomBar.SetNowBet(betList[betIndex]);
                  this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.IDLE);
                  var walletId = this.m_bottomBar.Wallet.CurencyID;
                  var rate = this.m_bottomBar.Wallet.GetWalletByID(walletId);
                  this.m_jpManager.RateList = rate.BetPropList;
                  var currencyID = this.m_bottomBar.Wallet.CurencyID;
                  var walletInfo = this.m_bottomBar.Wallet.GetWalletByID(currencyID);
                  this.m_jpManager.ChangeCurrency(walletInfo);
                  GS_Define.PLATE_SIZE = _info.Nowsize ? _info.Nowsize : 0;
                  this.m_collectionCount = _info.Upcount ? _info.Upcount : 0;
                  this.SetCollect();
                  this.m_slotReels.ChangePlateSize();
                  this.ReqJP();
                  this.m_gameJPTimer.Clear();
                  this.m_gameJPTimer.Start(1 * 1000);
                  this.ChangeBet();
                }

                break;
              }

            case GS_Define.AckType.spin:
              {
                var _info2 = null;

                if (ack.data.spinAll) {
                  _info2 = ack.data.spinAll;
                } else {
                  _info2 = _cjsExports.gem3Proto.SpinAllData.decode(ack.data.encode);
                }

                this.OnRecvSpinAck(this.ConvertSpinAck(_info2));
                break;
              }

            case GS_Define.AckType.jpInfo:
              {
                var _info3 = null;

                if (ack.data.jpinfo) {
                  _info3 = ack.data.jpinfo;
                } else {
                  _info3 = _cjsExports.gem3Proto.JPInfoAck.decode(ack.data.encode);
                }

                if (!this.m_isGetJp) {
                  var jpInfo = {
                    Share: {
                      Fronts: _info3.Fronts ? _info3.Fronts : []
                    },
                    Self: _info3.Self ? _info3.Self : 0
                  };
                  var jps = null;
                  jps = jpInfo.Share.Fronts;
                  jps.unshift(jpInfo.Self);
                  this.m_jpManager.SetJp(jps);
                }

                break;
              }

            case GS_Define.AckType.changeBet:
              {
                var _info4 = null;

                if (ack.data.changebet) {
                  _info4 = ack.data.changebet;
                } else {
                  _info4 = _cjsExports.gem3Proto.ChangeBetAck.decode(ack.data.encode);
                }

                if (_info4.Result === 0 || _info4.Result == undefined) {
                  this.m_isReqChangeBet = false;
                  this.m_oldBetIndex = this.m_bottomBar.GetNowBetIndex();
                  this.m_collectionCount = _info4.UpCount ? _info4.UpCount : 0;
                  this.SetCollect();
                  this.m_effectPlate.InitElement();
                  this.m_effectPlate.ShowChangeBetHint();
                  this.m_jpManager.ChangeBet(this.m_bottomBar.GetNowBetIndex());

                  if (this.m_state.Current() === GAMEVIEW_STATE.LOGIN) {
                    this.m_isGetGameInfo = true;
                  } else {
                    this.m_loading.active = false;
                  }

                  if (RetryManager.GetInstance().CheckTrigger()) {
                    RetryManager.GetInstance().Reset();
                  }
                }

                break;
              }
          }
        };

        _proto.OnRecvSpinAck = function OnRecvSpinAck(ack) {
          var _this13 = this;

          if (ack === void 0) {
            ack = null;
          }

          if (ack) {
            this.m_spinAckQue = ack.info;
          } // log( "OnRecvSpinAck", this.m_spinAckQue );


          RetryManager.GetInstance().IsReqSpin = false;

          if (this.m_spinAckQue.act == Define.GENERAL_RET.SUCCESS) {
            if (this.m_bottomBar.GetNowBetIndex() >= 0) {
              this.m_oldBetIndex = this.m_bottomBar.GetNowBetIndex();
            } // MHB


            if (ack) {
              var _ack$serviceInfo, _ack$serviceInfo2;

              this.m_fullJpWin = (_ack$serviceInfo = ack.serviceInfo) != null && _ack$serviceInfo.fullJpWin ? (_ack$serviceInfo2 = ack.serviceInfo) == null ? void 0 : _ack$serviceInfo2.fullJpWin : 0;
            }

            this.m_explodeCount = 0;
            this.m_isCheckChips = false;
            this.m_bonusRound = -1;

            if (!this.m_isInFreeGame) {
              this.m_isCheckChips = false;
              this.m_totalWin = 0;
              Tween.stopAllByTarget(this.node);
              tween(this.node).delay(0.2).call(function () {
                _this13.m_bottomBar.SetWinValue(0);

                _this13.m_effectPlate.CleanHistoryView();
              }).start();
            }

            this.m_isGetJp = this.m_spinAckQue.jpi && ack.jpinfo ? true : false;
            this.m_spinJpAck = ack ? ack.jpinfo : null; //盤面設定

            this.m_showIndex = this.m_spinAckQue.si;
            this.m_bottomBar.SetLogIndex(this.m_spinAckQue.si, false);
            this.m_plateIndex = 0;
            var firstPlate = this.ConvertString2Number(this.m_spinAckQue.gi.pq[this.m_plateIndex].ps);
            var firstTag = this.ConvertString2Number(this.m_spinAckQue.gi.pq[this.m_plateIndex].pt);
            var secondPlate = null;
            var hasNextPlate = this.m_spinAckQue.gi.pq.length > 1 && this.m_spinAckQue.gi.pc > 1 && this.m_spinAckQue.gi.pc > this.m_plateIndex + 1;

            if (hasNextPlate) {
              secondPlate = this.ConvertString2Number(this.m_spinAckQue.gi.pq[this.m_plateIndex + 1].ps);
            }

            if (firstPlate && firstTag && (hasNextPlate && secondPlate || !hasNextPlate && !secondPlate)) {
              this.m_slotReels.SetPlateInfo(firstPlate, firstTag, secondPlate);
              this.m_state.NextState(GAMEVIEW_STATE.FIRST_PLATE);
            } else {
              this.m_state.NextState(GAMEVIEW_STATE.IDLE);
            }

            if (this.m_isGetJp && this.m_spinAckQue.jpi) {
              this.m_jpManager.SetJpNumBySpin(this.m_spinAckQue.jpi.jt - 1, this.m_spinAckQue.jpi.jtw);
            }
          } else {
            ErrorMsgManager.GetInstance().ShowSpinErr(this.m_spinAckQue.act, this.m_bottomBar.GetChips(), this.m_bottomBar.GetBetList()[0], ack.serviceInfo);
          }
        } //設定語系
        ;

        _proto.SetTxtByLocale = function SetTxtByLocale() {
          var spriteAtlas = LocaleStringManager.GetInstance().GetGameAtlas();
          this.m_titleSprite.spriteFrame = this.m_titleSpriteAtlas.getSpriteFrame("LOGO_" + LocaleStringManager.CurrLang);
          this.m_upgradeSprite.spriteFrame = spriteAtlas.getSpriteFrame("UP");
          this.m_portraitUpgradeSprite.spriteFrame = spriteAtlas.getSpriteFrame("UP");
          this.m_nowWinSprite.spriteFrame = spriteAtlas.getSpriteFrame("history_txt");
          this.m_portraitNowWinSprite.spriteFrame = spriteAtlas.getSpriteFrame("history_txt_s");
          this.m_jpManager.SetTxtByLocale();
          this.m_wheel.SetTxtByLocale();
        };

        _proto.OnRotation = function OnRotation() {
          log("OnRotation");
          var state = this.m_state.Current();

          if (state == GAMEVIEW_STATE.GET_ELEMENT || state == GAMEVIEW_STATE.LEAVE_FREE || this.m_isShowGetWheel) {
            var size = screen.windowSize;
            var isToLandscape = size.width > size.height;

            if (this.m_isLandscape && !isToLandscape) {
              //橫轉直
              view.setDesignResolutionSize(WIDTH, HEIGHT, ResolutionPolicy.FIXED_WIDTH);
            } else if (!this.m_isLandscape && isToLandscape) {
              //直轉橫
              view.setDesignResolutionSize(HEIGHT, WIDTH, ResolutionPolicy.FIXED_HEIGHT);
            }

            this.m_isChange = true;
            return;
          }

          this.m_isChange = false;
          var size = screen.windowSize;
          this.m_isLandscape = size.width > size.height; //直版

          if (!this.m_isLandscape) {
            if (size.height / size.width <= WIDTH / HEIGHT) {
              view.setDesignResolutionSize(HEIGHT, WIDTH, ResolutionPolicy.FIXED_HEIGHT);
            } else {
              view.setDesignResolutionSize(HEIGHT, WIDTH, ResolutionPolicy.FIXED_WIDTH);
            }

            this.m_topMaskNode.setPosition(0, 800, 0);
            this.m_downMaskNode.setPosition(0, -750, 0);
            this.m_leftMaskNode.setPosition(-568, 0, 0);
            this.m_rightMaskNode.setPosition(568, 0, 0);
            var anim = this.node.getComponent(Animation);
            anim.play("GameView_S");
            this.m_rotationAnim.play("MainGame_S");

            if (this.m_loadingMask) {
              this.m_loadingMask.getComponent(Animation).play("mask_S");
            }
          } //橫版
          else {
              if (size.width / size.height <= WIDTH / HEIGHT) {
                view.setDesignResolutionSize(WIDTH, HEIGHT, ResolutionPolicy.FIXED_WIDTH);
              } else {
                view.setDesignResolutionSize(WIDTH, HEIGHT, ResolutionPolicy.FIXED_HEIGHT);
              }

              this.m_topMaskNode.setPosition(0, 568, 0);
              this.m_downMaskNode.setPosition(0, -568, 0);
              this.m_leftMaskNode.setPosition(-800, 0, 0);
              this.m_rightMaskNode.setPosition(800, 0, 0);
              var anim = this.node.getComponent(Animation);
              anim.play("GameView_L");
              this.m_rotationAnim.play("MainGame_L");

              if (this.m_loadingMask) {
                this.m_loadingMask.getComponent(Animation).play("mask_L");
              }
            }

          if (this.m_effectPlate) {
            this.m_effectPlate.OnRotation(this.m_isLandscape);
          }

          if (this.m_bottomBar) {
            this.m_bottomBar.ChangePos(this.m_isLandscape, function () {}, true);
          }

          MsgBox.getInstance().OnRotate(this.m_isLandscape);
        };

        _proto.BarTouchCb = function BarTouchCb(event) {
          var _this14 = this;

          var name = event.target.name;
          log("BarTouchCb", name);

          switch (name) {
            case this.m_plateSpineBtn.node.name:
              // 盤面開始鍵
              if (this.m_state.Current() == GAMEVIEW_STATE.IDLE && !this.m_isAutoSpin) {
                if (!this.m_isFirstPlateSpin) {
                  this.m_spinClickEvent = Define.BTN_CLICK_EVENT.CLICK_PLATE;
                  this.ClickSpin();
                } else {
                  this.m_isFirstPlateSpin = false;
                  var setting = {};
                  setting.contextKey = Define.StringKey.MSGBOX_TOUCHPANEL_SPIN;
                  setting.titleKey = MsgBox.DEFAULT_TITLE_KEY;
                  setting.showCancelBtn = false;
                  setting.showConfirmBtn = true;
                  setting.showCloseBtn = true;

                  setting.confirmCB = function () {
                    _this14.m_spinClickEvent = Define.BTN_CLICK_EVENT.CLICK_PLATE;

                    _this14.ClickSpin();
                  };

                  MsgBox.getInstance().PushMessageBoxSetting(setting);
                }
              } else {
                if (this.m_bottomBar.IsSkipSmallFlash()) {
                  this.ClickSpin();
                } else {
                  this.ClickStopSpin();
                }
              }

              break;

            case BottombarManager.UIName.BTN_SPIN:
              log("JILI按鈕就是你");

              if (this.m_bottomBar.BtnState == this.m_bottomBar.SlotBottomBarState.IDLE) {
                this.m_spinClickEvent = Define.BTN_CLICK_EVENT.SPIN;
                this.ClickSpin();
              }

              break;

            case BottombarManager.UIName.BTN_SPINSTOP:
              this.ClickStopSpin();
              break;

            case BottombarManager.UIName.BTN_WISEAUTOPLAY:
              if (this.m_isAutoSpin) {
                this.m_isAutoSpin = false;
                this.ShowAutoPlayHint();
                this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.CLICK_CANCEL);
              }

              this.m_bottomBar.ShowAutoplaySettingView(this.m_bottomBar.GetChips());
              break;

            case BottombarManager.UIName.BTN_AUTOSTOP_C:
            case BottombarManager.UIName.BTN_AUTOSTOP:
              //按下取消自動按鍵
              if (this.m_isAutoSpin) {
                this.m_isAutoSpin = false;
                this.ShowAutoPlayHint();
              }

              this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.CLICK_CANCEL);

              if (this.m_state.Current() == GAMEVIEW_STATE.AWARD || this.m_state.Current() == GAMEVIEW_STATE.LEAVE_FREE || this.m_state.Current() == GAMEVIEW_STATE.LEAVE_BONUS || this.m_state.Current() == GAMEVIEW_STATE.GET_MULTI || this.m_state.Current() == GAMEVIEW_STATE.GET_JP) {
                this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.GET_AWARD_NO_AUTO);
              }

              break;

            default:
              var number = Number(name);

              if (!isNaN(number) && this.m_oldBetIndex !== -1 && number !== this.m_oldBetIndex) {
                this.ChangeBet();
              } else if (name === BottombarManager.BetValueChange) {
                this.ChangeBet();
              }

              break;
          }
        };

        _proto.ChangeBet = function ChangeBet() {
          var _this15 = this;

          this.m_isReqChangeBet = true;
          var data = new _cjsExports.gem3Proto.ChangeBetReq();
          data.bet = this.m_bottomBar.GetNowBetValue();
          var reqData = new _cjsExports.gem3Proto.GameReqData();
          reqData.apiid = Define.APP ? Number(Define.APP.GetApiID()) : -1;
          reqData.aid = this.m_aId;
          reqData.token = this.m_token;
          var req = new ChangeBetProtocolData();

          if (GS_Define.IsProto) {
            reqData.encode = _cjsExports.gem3Proto.ChangeBetReq.encode(data).finish();
            req.reqData = _cjsExports.gem3Proto.GameReqData.encode(reqData).finish();
          } else {
            reqData.changebet = data;
            req.reqData = reqData;
          }

          ConnectManager.GetInstance().SendCommand(req, function (ack) {
            _this15.m_loading.active = false;

            _this15.OnRecvAck(ack);
          }, true);
          this.m_jpManager.ChangeBet(this.m_bottomBar.GetNowBetIndex());
        } // 消除的特效 (會稍微閃爍)
        // 收集巧克力特效 (建立一個prefab 放大1.1倍 移到右邊)
        // 餅乾reset的問題
        // big mega... win 動畫 (太久了 拿掉)
        // 盤面升級 3 -> 4
        // bonus game
        ;

        _proto.wheel_Rotate = function wheel_Rotate() {
          this.m_effectPlate.Wheel_Rotate();
        };

        _proto.ramSymbol = function ramSymbol() {
          this.m_effectPlate.RamSymbol();
        };

        _proto.candyDrop = function candyDrop() {
          this.m_effectPlate.CandyDrop();
        };

        _proto.tryMusic = function tryMusic() {
          //this.m_effectPlate.TryMusic();
          this.ChangeFadeType(FADE_TYPE.OUT, GS_Define.AudioClips.Mg_Reel);
        };

        _proto.ClickSpin = function ClickSpin() {
          //TODO Spin相關檢查及跳轉狀態
          //this.m_effectPlate.showAward(10, 1); //跳出big win(0) mega win(1) xx win(2)
          //this.tryMusic();
          //this.cntPress = 9;
          this.cntPress++;
          this.m_effectPlate.ComboInit();
          this.m_effectPlate.historyInit(); // 是否為免費遊戲

          if (this.m_isInFreeGame) {
            //log("案之前" + this.m_fgRound);
            // 控制免費遊戲10次
            this.m_fgRound++;

            for (var i = 0; i < this.m_roundHintLabels.length; i++) {
              this.m_roundHintLabels[i].string = Tools.strip(10 - this.m_fgRound - 1) + "/10";
            }

            this.isLeaveFree = false;
            this.StartSpin();

            if (this.m_fgRound === 9) {
              //先設1測試，原來為9
              //離開free game
              log("進去了沒：" + this.m_fgRound);
              this.isLeaveFree = true;
              this.m_effectPlate.PlateUpgrade(); //餅乾消10個才進
              //this.ChangeFadeType(FADE_TYPE.OUT, GS_Define.AudioClips.Mg_Reel);

              this.m_collectionCount = 0;
              this.SetCollect();
              this.SetElementHintBoard(true);
              this.m_effectPlate.ShowChangeBetHint();
              /*
              this.m_isInFreeGame = false;
              this.EventChange(false, FeatureGameType.FG);
              this.m_effectPlate.LeaveFree();
              this.m_effectPlate.showWin();
              */
            }
          } else if (this.m_isInBonusGame) {
            this.m_effectPlate.Wild();
            this.m_fgRound++;

            for (var _i6 = 0; _i6 < this.m_roundHintLabels.length; _i6++) {
              this.m_roundHintLabels[_i6].string = this.magnification - this.m_fgRound - 1 + "/" + this.magnification;
            } //變


            this.isLeaveBonus = false;
            this.m_slotReels.ShowNewPlate();

            if (this.m_fgRound === this.magnification - 1) {
              //離開bonus game
              log("bo進去了沒：" + this.m_fgRound);
              this.isLeaveBonus = true; //this.m_effectPlate.PlateUpgrade(); //餅乾消10個才進
              //this.ChangeFadeType(FADE_TYPE.OUT, GS_Define.AudioClips.Mg_Reel);

              this.m_collectionCount = 0;
              this.SetCollect();
              this.SetElementHintBoard(true);
              this.m_effectPlate.ShowChangeBetHint();
              /*
              this.m_isInFreeGame = false;
              this.EventChange(false, FeatureGameType.FG);
              this.m_effectPlate.LeaveFree();
              this.m_effectPlate.showWin();
              */
            }
          } else this.m_state.NextState(GAMEVIEW_STATE.SPIN); //this.EventChange(true, FeatureGameType.FG);
          //this.m_state.NextState(GAMEVIEW_STATE.ENTER_FREE);

        };

        _proto.showgetelement = function showgetelement(n) {
          var _this16 = this; //log("game state GET_ELEMENT");


          this.m_effectPlate.ShowGetElement_(n);

          for (var i = 0; i < n; ++i) {
            tween(this.node).delay(i).call(function () {
              _this16.m_effectPlate.PutElement();
            }).start();
          }
        };

        _proto.addCollection = function addCollection() {
          this.m_collectionCount++;
          if (this.m_collectionCount > 10) this.m_collectionCount = 10;
          this.SetCollect();
          this.SetElementHintBoard(true); // 機率進入轉盤
          // let randN = Math.floor(Math.random() * 100);
          //let randN = 1; //先設0: 100%進入for測試

          if (!this.isinWheel) {
            if (this.m_collectionCount == 10 || this.randN === 0) {
              log("轉爛");
              this.isinWheel = true; //this.m_isAutoSpin = false;

              this.m_state.NextState(GAMEVIEW_STATE.GET_WHEEL); //轉轉轉盤

              /*
              tween(this.node)
              .delay(10)
              .call(() => {
                this.EventChange(true, FeatureGameType.FG);
                this.m_state.NextState(GAMEVIEW_STATE.ENTER_FREE);
              })
              .start();*/
            }
          }
        };

        _proto.getBMI = function getBMI() {
          return this.m_spinAckQue.bmi;
        };

        _proto.showHistory = function showHistory(f) {
          this.m_effectPlate.Showhistory(this.m_bottomBar.GetNowBetValue(), f);
        };

        _proto.gethistory = function gethistory() {
          var winInfos = this.m_spinAckQue.gi.pq[this.m_plateIndex].ai;
          return winInfos;
        };

        _proto.ShowExplode = function ShowExplode(x, y, isFirst, len) {
          this.m_effectPlate.explode(x, y, isFirst, len, this.m_bottomBar.GetNowBetValue());
        };

        _proto.Showcombo = function Showcombo() {
          this.m_effectPlate.ShowCombo();
        };

        _proto.ClickStopSpin = function ClickStopSpin() {
          if (this.m_state.Current() == GAMEVIEW_STATE.AWARD || this.m_state.Current() == GAMEVIEW_STATE.LEAVE_FREE || this.m_state.Current() == GAMEVIEW_STATE.LEAVE_BONUS || this.m_state.Current() == GAMEVIEW_STATE.GET_MULTI || this.m_state.Current() == GAMEVIEW_STATE.GET_JP) {
            this.m_effectPlate.StopWin();
            this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.CLICK_STOP_NO_AUTO);
          } else if (!this.m_isAutoSpin) {
            this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.CLICK_STOP);
          } else {
            this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY);
          }

          SoundManager.getInstance().Play(Define.AudioClips.COMMON_BTN);
        };

        _proto.ChangeBgMusic = function ChangeBgMusic(audioClip) {
          if (this.m_bgAudioId !== null) {
            SoundManager.getInstance().Stop(this.m_bgAudioId);
            this.m_bgAudioId = null;
          }

          this.m_bgAudioId = SoundManager.getInstance().Play(audioClip, true);
          this.m_bgAudioName = audioClip.name;
        };

        _proto.OnStartAutoPlay = function OnStartAutoPlay(otherInfos) {
          if (this.m_bottomBar.GetChips() >= Tools.strip(this.m_bottomBar.GetNowBetValue()) || this.m_isInFreeGame || this.m_isInBonusGame) {
            this.m_isAutoSpin = true;
            this.ShowAutoPlayHint();
            this.m_autoplayInfos = JSON.parse(otherInfos);

            if (this.m_state.Current() == GAMEVIEW_STATE.IDLE) {
              this.m_state.NextState(GAMEVIEW_STATE.SPIN);
            }

            this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.CLICK_AUTOPLAY);
            Define.SetCanUseItemCard(false, Define.GameReason.PLAYING);
          } else {
            var betList = this.m_bottomBar.GetBetList();

            if (this.m_bottomBar.GetChips() < Tools.strip(betList[0])) {
              MsgBox.getInstance().ShowMessageBox(Define.StringKey.MSGBOX_MONEY_NOT_ENOUGH);
            } else {
              MsgBox.getInstance().ShowMessageBox(Define.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET);
            }

            if (this.m_isAutoSpin) {
              this.m_bottomBar.SetSpinState(this.m_bottomBar.SlotBottomBarState.IDLE);
              this.m_isAutoSpin = false;
              this.ShowAutoPlayHint();
            }

            this.m_state.NextState(GAMEVIEW_STATE.IDLE);
          }
        };

        _proto.Login = function Login(token) {
          var _this17 = this;

          AppManager.Token = token;
          this.m_isLogin = false;
          this.m_token = token;
          var cheatString = Tools.GetLinkParameterByName("ct");
          var data = new _cjsExports.gem3Proto.LoginDataReq();
          data.Token = token;
          data.OSType = sys.os;
          data.OSVersion = sys.osVersion;
          data.Browser = String(sys.browserType);
          data.Language = LocaleStringManager.CurrLang;
          data.BrowserVersion = String(sys.browserVersion);
          data.Width = window.screen.width;
          data.Height = window.screen.height;
          data.Ratio = window.devicePixelRatio;
          data.Machine = Tools.GetDeviceName();
          data.BrowserTag = Tools.GetBrowserTag();

          if (cheatString && Number(cheatString)) {
            data.Cheat = Number(cheatString);
          }

          var req = new LoginProtocolData();

          if (GS_Define.IsProto) {
            req.reqData = _cjsExports.gem3Proto.LoginDataReq.encode(data).finish();
          } else {
            req.reqData = data;
          }

          ConnectManager.GetInstance().SendCommand(req, function (ack) {
            _this17.OnRecvAck(ack);
          });
        };

        _proto.SetOddsLabels = function SetOddsLabels(string, active) {
          for (var i = 0; i < this.m_OddsLabels.length; i++) {
            this.m_OddsLabels[i].string = string;

            if (active !== undefined) {
              this.m_OddsLabels[i].node.active = active;
            }
          }
        };

        _proto.SetHintNodes = function SetHintNodes(active) {
          for (var i = 0; i < this.m_hintNodes.length; i++) {
            this.m_hintNodes[i].active = active;
          }
        };

        _proto.SetCollect = function SetCollect() {
          for (var i = 0; i < this.m_collectionCountLabels.length; i++) {
            this.m_collectionCountLabels[i].string = this.m_collectionCount + "/" + GS_Define.COLLECT_MAX;
          }
        };

        _proto.ReqJP = function ReqJP() {
          var _this18 = this;

          var data = new _cjsExports.gem3Proto.JPInfoReq();
          data.currency = walletManger.CurencyID;
          var reqData = new _cjsExports.gem3Proto.GameReqData();
          reqData.apiid = Define.APP ? Number(Define.APP.GetApiID()) : -1;
          reqData.aid = this.m_aId;
          reqData.token = this.m_token;
          var req = new JPProtocolData();

          if (GS_Define.IsProto) {
            reqData.encode = _cjsExports.gem3Proto.JPInfoReq.encode(data).finish();
            req.reqData = _cjsExports.gem3Proto.GameReqData.encode(reqData).finish();
          } else {
            reqData.jpinfo = data;
            req.reqData = reqData;
          }

          ConnectManager.GetInstance().SendCommand(req, function (ack) {
            _this18.OnRecvAck(ack);
          });
        };

        _proto.ConvertString2Number = function ConvertString2Number(input) {
          var numberArray = new Array();

          if (input.length === GS_Define.PLATE_SIZE) {
            for (var i = 0; i < input.length; i++) {
              var tempArray = new Array();
              var info = input[i];

              if (info.length === GS_Define.PLATE_SIZE) {
                for (var j = 0; j < GS_Define.PLATE_SIZE; j++) {
                  tempArray.push(Number(info.slice(0, 1)));
                  info = info.slice(1);
                }

                numberArray.push(tempArray);
              } else {
                log(info, info.length);
                numberArray = null;
                MsgBox.getInstance().ShowMessageBox(Define.StringKey.MSGBOX_SPIN_STATE_ERR, Define.StringKey.MSGBOX_TITLE_SYSTEM_INFO, Tools.CloseGameTab, Tools.GetErrorCode(Define.ErrorStatus.Game, Define.ErrorStatus.Unknow));
                break;
              }
            }
          } else {
            numberArray = null;
            MsgBox.getInstance().ShowMessageBox(Define.StringKey.MSGBOX_SPIN_STATE_ERR, Define.StringKey.MSGBOX_TITLE_SYSTEM_INFO, Tools.CloseGameTab, Tools.GetErrorCode(Define.ErrorStatus.Game, Define.ErrorStatus.Unknow));
          }

          return numberArray;
        };

        _proto.ShowAutoPlayHint = function ShowAutoPlayHint() {
          if (this.m_isAutoSpin) {
            this.m_bottomBar.ShowSpeedMsg(LocaleStringManager.GetInstance().GetString(Define.StringKey.AUTO_PLAY_START_AUTO));
          } else {
            this.m_bottomBar.ShowSpeedMsg(LocaleStringManager.GetInstance().GetString(Define.StringKey.AUTO_PLAY_STOP_AUTO));
          }
        };

        _createClass(GameView, [{
          key: "IsWheelSpin",
          get: function get() {
            return this.m_isWheelSpin;
          },
          set: function set(v) {
            this.m_isWheelSpin = v;
          }
        }, {
          key: "CollectionCount",
          get: function get() {
            return this.m_collectionCount;
          }
        }, {
          key: "IsHardStop",
          get: function get() {
            if (this.m_bottomBar) {
              return this.m_bottomBar.IsHardStop;
            }

            return false;
          }
          /**回傳從Spin到現在所累積的爆破數*/

        }, {
          key: "ExplodeCount",
          get: function get() {
            return this.m_explodeCount;
          }
          /**回傳當前盤面的爆破數*/

        }, {
          key: "NowExplodeCount",
          get: function get() {
            if (this.m_spinAckQue && this.m_spinAckQue.gi.pq[this.m_plateIndex] && this.m_spinAckQue.gi.pq[this.m_plateIndex].ai) {
              var awardInfos = this.m_spinAckQue.gi.pq[this.m_plateIndex].ai;
              var count = 0;

              for (var i = 0; i < awardInfos.length; i++) {
                count = Tools.strip(count + awardInfos[i].c);
              }

              return count;
            }

            return 0;
          }
        }, {
          key: "IsInFreeGame",
          get: function get() {
            return this.m_isInFreeGame;
          }
        }, {
          key: "FGOdds",
          get: function get() {
            return this.m_fgOdds;
          }
        }, {
          key: "IsLandscape",
          get: function get() {
            return this.m_isLandscape;
          }
        }, {
          key: "CurrencyUnit",
          get: function get() {
            if (this.m_bottomBar && this.m_bottomBar.Wallet) {
              return this.m_bottomBar.Wallet.Unit;
            }

            return 1;
          } // MustHitBy

        }]);

        return GameView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_rotationAnim", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_titleSpriteAtlas", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_topMaskNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "m_downMaskNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "m_leftMaskNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "m_rightMaskNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "m_titleSprite", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "m_slotReelsNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "m_plateSpineBtn", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "m_effectPlateNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "m_barNode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "m_define", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "m_loading", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "m_loadingBar", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "m_loadingMask", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "m_loadingLogoNode", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "m_collectionCountLabels", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "m_collectionBgNode", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "m_drawCallCtrl", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "m_wheel", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "m_jpManager", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "m_jpNodes", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "m_hintNodes", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "m_OddsLabels", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "m_eventHintSprites", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "m_upgradeSprite", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "m_nowWinSprite", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "m_portraitNowWinSprite", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "m_roundHintLabels", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "m_elementHintNodes", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "m_roundHintNode", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "m_portraitelementBoardNode", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "m_changeHintSprites", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "m_portraitUpgradeSprite", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GemJPManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tools.ts', './GameView.ts', './GS_Define.ts', './LocaleStringManager.ts', './Wallet.ts'], function (exports) {
  'use strict';

  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, Label, Node, Tween, tween, UIOpacity, UIRenderer, color, Component, Tools, GAME_JP_TIME, GS_Define, LocaleStringManager, walletInfo;

  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Label = module.Label;
      Node = module.Node;
      Tween = module.Tween;
      tween = module.tween;
      UIOpacity = module.UIOpacity;
      UIRenderer = module.UIRenderer;
      color = module.color;
      Component = module.Component;
    }, function (module) {
      Tools = module.default;
    }, function (module) {
      GAME_JP_TIME = module.GAME_JP_TIME;
    }, function (module) {
      GS_Define = module.default;
    }, function (module) {
      LocaleStringManager = module.default;
    }, function (module) {
      walletInfo = module.walletInfo;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;

      cclegacy._RF.push({}, "a848dTYKjVN3qgcfkSwDQoL", "GemJPManager", undefined);

      var JP_Prefix = ["MINI_txt", "MINOR_txt", "MAJOR_txt", "GRAND_txt"];
      var DEFAULT_INDEX = 3;
      var TARGET_BET = 5;
      var WalletAndRate = exports('WalletAndRate', /*#__PURE__*/function (_walletInfo) {
        _inheritsLoose(WalletAndRate, _walletInfo);

        function WalletAndRate() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _walletInfo.call.apply(_walletInfo, [this].concat(args)) || this;
          _this.BetPropList = null;
          return _this;
        }

        return WalletAndRate;
      }(walletInfo));
      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GemJPManager = exports('default', (_dec = property({
        type: GS_Define,
        tooltip: "定義資源"
      }), _dec2 = property({
        type: Sprite,
        tooltip: "JP標題"
      }), _dec3 = property({
        type: Label,
        tooltip: "jp 數值"
      }), _dec4 = property({
        type: Sprite,
        tooltip: "JP文字，從小到大"
      }), _dec5 = property({
        type: Label,
        tooltip: "jp 數值，直版"
      }), _dec6 = property({
        type: Sprite,
        tooltip: "JP直版文字，從小到大"
      }), _dec7 = property({
        type: Node,
        tooltip: "JP底框，Grand"
      }), _dec8 = property({
        type: Node,
        tooltip: "JP鎖，Grand"
      }), _dec9 = property({
        type: Node,
        tooltip: "JP底框，Major"
      }), _dec10 = property({
        type: Node,
        tooltip: "JP鎖，Major"
      }), _dec11 = property({
        type: Node,
        tooltip: "JP底框，Minor"
      }), _dec12 = property({
        type: Node,
        tooltip: "JP鎖，Minor"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GemJPManager, _Component);

        function GemJPManager() {
          var _this2;

          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          _this2 = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this2, "m_define", _descriptor, _assertThisInitialized(_this2));

          _initializerDefineProperty(_this2, "m_jpTitleSprite", _descriptor2, _assertThisInitialized(_this2));

          _initializerDefineProperty(_this2, "m_jpLabels", _descriptor3, _assertThisInitialized(_this2));

          _initializerDefineProperty(_this2, "m_jpWordSprites", _descriptor4, _assertThisInitialized(_this2));

          _initializerDefineProperty(_this2, "m_jpProtraitLabels", _descriptor5, _assertThisInitialized(_this2));

          _initializerDefineProperty(_this2, "m_jpProtraitWordSprites", _descriptor6, _assertThisInitialized(_this2));

          _initializerDefineProperty(_this2, "m_jpGrandBoardNodes", _descriptor7, _assertThisInitialized(_this2));

          _initializerDefineProperty(_this2, "m_jpGrandLockNodes", _descriptor8, _assertThisInitialized(_this2));

          _initializerDefineProperty(_this2, "m_jpMajorBoardNodes", _descriptor9, _assertThisInitialized(_this2));

          _initializerDefineProperty(_this2, "m_jpMajorLockNodes", _descriptor10, _assertThisInitialized(_this2));

          _initializerDefineProperty(_this2, "m_jpMinorBoardNodes", _descriptor11, _assertThisInitialized(_this2));

          _initializerDefineProperty(_this2, "m_jpMinorLockNodes", _descriptor12, _assertThisInitialized(_this2));

          _this2.m_JPValueVec = [0, 0, 0, 0];
          _this2.m_rateList = null;
          _this2.m_betLvl = 0;
          _this2.m_rate = 0;
          _this2.m_isJpLock = false;
          _this2.m_gameView = null;
          _this2.m_isChangeCurrency = false;
          return _this2;
        }

        var _proto = GemJPManager.prototype;

        _proto.Init = function Init(gameView) {
          this.m_gameView = gameView;
        };

        _proto.ChangeCurrency = function ChangeCurrency(walletInfo) {
          this.m_isChangeCurrency = true;
          var ratio = walletInfo.ratio ? walletInfo.ratio : 1;
          var betList = JSON.parse(JSON.stringify(walletInfo.bet));

          if (ratio !== 1) {
            betList.forEach(function (value, index, array) {
              betList[index] = Tools.divide(value, ratio);
            });
          }

          var fiveIndex = DEFAULT_INDEX;

          for (var i = 0; i < betList.length; i++) {
            if (betList[i] === TARGET_BET) {
              fiveIndex = i;
              break;
            }
          }

          var spriteAtlas = LocaleStringManager.GetInstance().GetGameAtlas();
          var realBet = walletInfo.bet[fiveIndex].toString();
          realBet = realBet.replace(".", "");

          if (spriteAtlas) {
            for (var _i = 0; _i < this.m_jpGrandLockNodes.length; _i++) {
              var lockNode = this.m_jpGrandLockNodes[_i].getChildByName("Unlock_num");

              var sprite = lockNode.getComponent(Sprite);
              sprite.spriteFrame = spriteAtlas.getSpriteFrame("Unlock_" + realBet);
              lockNode = this.m_jpMajorLockNodes[_i].getChildByName("Unlock_num");
              sprite = lockNode.getComponent(Sprite);
              sprite.spriteFrame = spriteAtlas.getSpriteFrame("Unlock_" + realBet);
              lockNode = this.m_jpMinorLockNodes[_i].getChildByName("Unlock_num");
              sprite = lockNode.getComponent(Sprite);
              sprite.spriteFrame = spriteAtlas.getSpriteFrame("Unlock_" + realBet);
            }
          }
        };

        _proto.ChangeBet = function ChangeBet(betLvl) {
          if (betLvl < 0) {
            betLvl = 0;
          }

          this.m_betLvl = betLvl;

          if (this.m_rateList === null || this.m_rateList[this.m_betLvl] === null) {
            this.m_rate = 1;
          } else {
            this.m_rate = this.m_rateList[this.m_betLvl];

            if (this.m_rate === 0) {
              for (var i = 0; i < this.m_rateList.length; i++) {
                if (this.m_rateList[i] !== 0) {
                  this.m_rate = this.m_rateList[i];
                  break;
                }
              }
            }
          }

          this.ResetJp();
          this.CheckJp();
        };

        _proto.SetJpNum = function SetJpNum(jps) {
          Tween.stopAllByTarget(this.node);

          for (var i = 0; i < this.m_jpLabels.length; i++) {
            this.SetJpValue(i, jps[i]);
          }
        };

        _proto.SetJpNumBySpin = function SetJpNumBySpin(index, jp) {
          if (jp > 0 && index < this.m_jpLabels.length && index < this.m_jpProtraitLabels.length && index >= 0) {
            this.m_isJpLock = true;
            Tween.stopAllByTarget(this.node);

            for (var i = 0; i < this.m_jpLabels.length; i++) {
              this.SetJpValue(i, this.m_JPValueVec[i]);
            }

            this.SetJpValue(index, jp, true);
          }
        };

        _proto.UnLockJp = function UnLockJp() {
          this.m_isJpLock = false;
        };

        _proto.SetJp = function SetJp(jps) {
          for (var i = 0; i < this.m_jpLabels.length; i++) {
            this.m_JPValueVec[i] = Tools.strip(jps[i]);
          }

          if (!this.m_isChangeCurrency) {
            this.SetJpValueWithRunning();
          } else {
            this.m_isChangeCurrency = false;
            this.SetJpNum(this.m_JPValueVec);
          }
        };

        _proto.SetTxtByLocale = function SetTxtByLocale() {
          var spriteAtlas = LocaleStringManager.GetInstance().GetGameAtlas();
          this.m_jpTitleSprite.spriteFrame = spriteAtlas.getSpriteFrame("JP_txt_frame");

          for (var i = 0; i < this.m_jpWordSprites.length; i++) {
            this.m_jpWordSprites[i].spriteFrame = spriteAtlas.getSpriteFrame(JP_Prefix[i]);
            this.m_jpProtraitWordSprites[i].spriteFrame = spriteAtlas.getSpriteFrame(JP_Prefix[i]);
          }

          var lockSpriteFrame = spriteAtlas.getSpriteFrame("Unlock");

          for (var _i2 = 0; _i2 < this.m_jpGrandLockNodes.length; _i2++) {
            var lockNode = this.m_jpGrandLockNodes[_i2].getChildByName("Unlock_Hint");

            var sprite = lockNode.getComponent(Sprite);
            sprite.spriteFrame = lockSpriteFrame;
            lockNode = this.m_jpMajorLockNodes[_i2].getChildByName("Unlock_Hint");
            sprite = lockNode.getComponent(Sprite);
            sprite.spriteFrame = lockSpriteFrame;
            lockNode = this.m_jpMinorLockNodes[_i2].getChildByName("Unlock_Hint");
            sprite = lockNode.getComponent(Sprite);
            sprite.spriteFrame = lockSpriteFrame;
          }
        };

        _proto.CheckJp = function CheckJp() {
          if (this.m_rateList === null || this.m_rateList[this.m_betLvl] === null || this.m_rateList[this.m_betLvl] === 0) {
            for (var i = 0; i < this.m_jpGrandLockNodes.length; i++) {
              tween(this.m_jpGrandLockNodes[i].getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
              tween(this.m_jpMajorLockNodes[i].getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
              tween(this.m_jpMinorLockNodes[i].getComponent(UIOpacity)).to(0.2, {
                opacity: 255
              }).start();
            }

            for (var _i3 = 0; _i3 < this.m_jpGrandBoardNodes.length; _i3++) {
              this.m_jpGrandBoardNodes[_i3].getComponent(UIRenderer).color = color(135, 135, 135);
              this.m_jpMajorBoardNodes[_i3].getComponent(UIRenderer).color = color(135, 135, 135);
              this.m_jpMinorBoardNodes[_i3].getComponent(UIRenderer).color = color(135, 135, 135);
            }

            for (var _i4 = 1; _i4 < this.m_jpLabels.length; _i4++) {
              this.m_jpLabels[_i4].node.getComponent(UIRenderer).color = color(135, 135, 135);
              this.m_jpProtraitLabels[_i4].node.getComponent(UIRenderer).color = color(135, 135, 135);
            }
          } else {
            for (var _i5 = 0; _i5 < this.m_jpGrandLockNodes.length; _i5++) {
              tween(this.m_jpGrandLockNodes[_i5].getComponent(UIOpacity)).to(0.2, {
                opacity: 0
              }).start();
              tween(this.m_jpMajorLockNodes[_i5].getComponent(UIOpacity)).to(0.2, {
                opacity: 0
              }).start();
              tween(this.m_jpMinorLockNodes[_i5].getComponent(UIOpacity)).to(0.2, {
                opacity: 0
              }).start();
            }

            for (var _i6 = 0; _i6 < this.m_jpGrandBoardNodes.length; _i6++) {
              this.m_jpGrandBoardNodes[_i6].getComponent(UIRenderer).color = color(255, 255, 255);
              this.m_jpMajorBoardNodes[_i6].getComponent(UIRenderer).color = color(255, 255, 255);
              this.m_jpMinorBoardNodes[_i6].getComponent(UIRenderer).color = color(255, 255, 255);
            }

            for (var _i7 = 1; _i7 < this.m_jpLabels.length; _i7++) {
              this.m_jpLabels[_i7].node.getComponent(UIRenderer).color = color(255, 255, 255);
              this.m_jpProtraitLabels[_i7].node.getComponent(UIRenderer).color = color(255, 255, 255);
            }
          }
        };

        _proto.ResetJp = function ResetJp() {
          Tween.stopAllByTarget(this.node);

          for (var i = 0; i < this.m_jpLabels.length; i++) {
            this.SetJpValue(i, this.m_JPValueVec[i]);
          }
        };

        _proto.SetJpValueWithRunning = function SetJpValueWithRunning() {
          var _this3 = this;

          Tween.stopAllByTarget(this.node);

          if (this.m_isJpLock) {
            return;
          }

          var times = Tools.divide(GAME_JP_TIME - 0.1, 0.02);
          var value = new Array();
          var step = new Array();

          for (var i = 0; i < this.m_jpLabels.length; i++) {
            if (i === 0) {
              var nowValue = Tools.GetLabelNumber(this.m_jpLabels[i].node);
              var reelValue = Tools.times(nowValue, this.m_gameView.CurrencyUnit);
              value.push(reelValue);
              var dif = Tools.strip(this.m_JPValueVec[i] - value[i]);
              step.push(Tools.divide(dif, times));
            } else {
              var _nowValue = Tools.divide(Tools.GetLabelNumber(this.m_jpLabels[i].node), this.m_rate);

              var _reelValue = Tools.times(_nowValue, this.m_gameView.CurrencyUnit);

              value.push(_reelValue);

              var _dif = Tools.strip(this.m_JPValueVec[i] - value[i]);

              _dif = Tools.times(_dif, this.m_rate) >= 0.01 ? _dif : 0;
              step.push(Tools.divide(_dif, times));
            }
          }

          var addAction = tween().repeat(times, tween().call(function () {
            for (var _i8 = 0; _i8 < _this3.m_jpLabels.length; _i8++) {
              value[_i8] = Tools.strip(value[_i8] + step[_i8]);

              _this3.SetJpValue(_i8, value[_i8]);
            }
          }).delay(0.02));
          tween(this.node).show().then(addAction).call(function () {
            for (var _i9 = 0; _i9 < _this3.m_jpLabels.length; _i9++) {
              _this3.SetJpValue(_i9, _this3.m_JPValueVec[_i9]);
            }
          }).start();
        };

        _proto.SetJpValue = function SetJpValue(index, value, isFromSpin) {
          var jp = Tools.times(value, isFromSpin ? 1 : index === 0 ? 1 : this.m_rate);
          this.m_jpLabels[index].string = Tools.FormatNumberThousands(this.m_gameView.GetDisplayValue(jp), Tools.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          this.m_jpProtraitLabels[index].string = Tools.FormatNumberThousands(this.m_gameView.GetDisplayValue(jp), Tools.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
        };

        _createClass(GemJPManager, [{
          key: "RateList",
          set: function set(v) {
            this.m_rateList = v;
          }
        }]);

        return GemJPManager;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_define", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_jpTitleSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_jpLabels", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "m_jpWordSprites", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "m_jpProtraitLabels", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "m_jpProtraitWordSprites", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "m_jpGrandBoardNodes", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "m_jpGrandLockNodes", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "m_jpMajorBoardNodes", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "m_jpMajorLockNodes", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "m_jpMinorBoardNodes", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "m_jpMinorLockNodes", [_dec12], {
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

System.register("chunks:///_virtual/GemPool.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './ExplodeGem.ts', './GS_Define.ts', './SingleWin.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, instantiate, Component, ExplodeGem, GS_Define, SingleWin;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      ExplodeGem = module.default;
    }, function (module) {
      GS_Define = module.default;
    }, function (module) {
      SingleWin = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "1a194+IkOtPqIc80fuKuNtN", "GemPool", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GemPool = exports('default', (_dec = property({
        type: Prefab,
        tooltip: "寶石prefab"
      }), _dec2 = property({
        type: Prefab,
        tooltip: "特效prefab"
      }), _dec3 = property({
        type: Prefab,
        tooltip: "個寶石贏分prefab"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GemPool, _Component);

        function GemPool() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_gemPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_effectPrefab", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_singleWinPrefab", _descriptor3, _assertThisInitialized(_this));

          _this.m_gemPool = null;
          _this.m_gemView = null;
          _this.m_effectView = null;
          _this.m_winView = null;
          return _this;
        }

        var _proto = GemPool.prototype;

        _proto.Init = function Init(gemView, effectView, winView, gameView) {
          this.m_gemView = gemView;
          this.m_effectView = effectView;
          this.m_winView = winView;
          this.m_gemPool = new Array();

          for (var col = 0; col < GS_Define.MAX_PLATE_SIZE; col++) {
            var temp = new Array();

            for (var row = 0; row < GS_Define.MAX_PLATE_SIZE; row++) {
              var gem = instantiate(this.m_gemPrefab);
              this.m_gemView.addChild(gem);
              var effect = instantiate(this.m_effectPrefab);
              this.m_effectView.addChild(effect);
              var win = instantiate(this.m_singleWinPrefab);
              this.m_winView.addChild(win);
              var singleWin = win.getComponent(SingleWin);
              singleWin.Init(gameView);
              var explodeGem = new ExplodeGem(gem, effect, win);
              temp.push(explodeGem);
            }

            this.m_gemPool.push(temp);
          }
        }
        /**
         * 取得對應的爆破表演，找不到回傳null
         * @param pos 第幾行的第幾個
         */
        ;

        _proto.GetGem = function GetGem(pos) {
          if (pos.x >= 0 && pos.x < GS_Define.PLATE_SIZE && pos.y >= 0 && pos.y < GS_Define.PLATE_SIZE) {
            return this.m_gemPool[pos.x][pos.y];
          }

          return null;
        };

        return GemPool;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_gemPrefab", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_effectPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_singleWinPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GS_Define.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, SpriteFrame, SpriteAtlas, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      SpriteFrame = module.SpriteFrame;
      SpriteAtlas = module.SpriteAtlas;
      Component = module.Component;
    }],
    execute: function () {
      exports({
        DelayType: void 0,
        GAMEVIEW_STATE: void 0
      });

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _class3;

      cclegacy._RF.push({}, "14845kHAi9LO5Lx+jwLnHuP", "GS_Define", undefined);

      var GAMEVIEW_STATE;

      (function (GAMEVIEW_STATE) {
        GAMEVIEW_STATE[GAMEVIEW_STATE["GAME_CLOSE"] = 0] = "GAME_CLOSE";
        GAMEVIEW_STATE[GAMEVIEW_STATE["LOAD_BUNDLE"] = 1] = "LOAD_BUNDLE";
        GAMEVIEW_STATE[GAMEVIEW_STATE["CREATE_BAR"] = 2] = "CREATE_BAR";
        GAMEVIEW_STATE[GAMEVIEW_STATE["LOGIN"] = 3] = "LOGIN";
        GAMEVIEW_STATE[GAMEVIEW_STATE["IDLE"] = 4] = "IDLE";
        GAMEVIEW_STATE[GAMEVIEW_STATE["SPIN"] = 5] = "SPIN";
        GAMEVIEW_STATE[GAMEVIEW_STATE["STOP"] = 6] = "STOP";
        GAMEVIEW_STATE[GAMEVIEW_STATE["FIRST_PLATE"] = 7] = "FIRST_PLATE";
        GAMEVIEW_STATE[GAMEVIEW_STATE["EXPLODE"] = 8] = "EXPLODE";
        GAMEVIEW_STATE[GAMEVIEW_STATE["TILE_MATCHING"] = 9] = "TILE_MATCHING";
        GAMEVIEW_STATE[GAMEVIEW_STATE["PATCH_UP"] = 10] = "PATCH_UP";
        GAMEVIEW_STATE[GAMEVIEW_STATE["GET_ELEMENT"] = 11] = "GET_ELEMENT";
        GAMEVIEW_STATE[GAMEVIEW_STATE["UPGRADE"] = 12] = "UPGRADE";
        GAMEVIEW_STATE[GAMEVIEW_STATE["GET_WHEEL"] = 13] = "GET_WHEEL";
        GAMEVIEW_STATE[GAMEVIEW_STATE["ENTER_FREE"] = 14] = "ENTER_FREE";
        GAMEVIEW_STATE[GAMEVIEW_STATE["LEAVE_FREE"] = 15] = "LEAVE_FREE";
        GAMEVIEW_STATE[GAMEVIEW_STATE["ENTER_BONUS"] = 16] = "ENTER_BONUS";
        GAMEVIEW_STATE[GAMEVIEW_STATE["LEAVE_BONUS"] = 17] = "LEAVE_BONUS";
        GAMEVIEW_STATE[GAMEVIEW_STATE["GET_MULTI"] = 18] = "GET_MULTI";
        GAMEVIEW_STATE[GAMEVIEW_STATE["GET_JP"] = 19] = "GET_JP";
        GAMEVIEW_STATE[GAMEVIEW_STATE["AWARD"] = 20] = "AWARD";
        GAMEVIEW_STATE[GAMEVIEW_STATE["END"] = 21] = "END";
        GAMEVIEW_STATE[GAMEVIEW_STATE["MHB_SHOW"] = 22] = "MHB_SHOW";
      })(GAMEVIEW_STATE || (GAMEVIEW_STATE = exports('GAMEVIEW_STATE', {})));

      var DelayType;

      (function (DelayType) {
        DelayType[DelayType["Normal"] = 0] = "Normal";
        DelayType[DelayType["Get"] = 1] = "Get";
        DelayType[DelayType["NotGet"] = 2] = "NotGet";
      })(DelayType || (DelayType = exports('DelayType', {})));

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var GS_Define = exports('default', (_dec = property({
        type: SpriteFrame,
        tooltip: "4*4寶石圖片，由小到大排"
      }), _dec2 = property({
        type: SpriteFrame,
        tooltip: "5*5寶石圖片，由小到大排"
      }), _dec3 = property({
        type: SpriteFrame,
        tooltip: "6*6寶石圖片，由小到大排"
      }), _dec4 = property({
        type: SpriteFrame,
        tooltip: "寶石光影圖片，由小到大排，6*6的放最後"
      }), _dec5 = property({
        type: SpriteFrame,
        tooltip: "Wild圖"
      }), _dec6 = property({
        type: SpriteFrame,
        tooltip: "升級素材圖片"
      }), _dec7 = property({
        type: SpriteAtlas,
        tooltip: "主場合圖"
      }), _dec8 = property({
        type: SpriteAtlas,
        tooltip: "結算合圖"
      }), ccclass(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GS_Define, _Component);

        function GS_Define() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "Symbol4SpriteFrame", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Symbol5SpriteFrame", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "Symbol6SpriteFrame", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "SymbolBgSpriteFrame", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "WildSpriteFrame", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "UpgradeSpriteFrames", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "MgTxtSpriteAtlas", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "CongratsTxtSpriteAtlas", _descriptor8, _assertThisInitialized(_this));

          return _this;
        }

        GS_Define.OnExit = function OnExit() {
          this.AudioClips = {
            combo_1: null,
            Ram_symbol: null,
            Common_big_win: null,
            Common_mega_win: null,
            Common_super_win: null,
            Mg_Reel: null,
            Fg_Bg: null,
            EnterFree: null,
            PlateUpgrade: null,
            scatter: null,
            combo_2: null,
            combo_3: null,
            combo_4: null,
            combo_5: null,
            Wheel_Rotate: null,
            Wheel_end: null,
            cookie: null,
            Candy_drop: null,
            Wild: null,
            Wild_chang: null,
            turntable_stop: null
          };
        };

        return GS_Define;
      }(Component), _class3.Ver = "028", _class3.FACK_SPIN_ACK = {
        "gi": {
          "pq": [{
            "ps": ["6666", "6666", "6612", "4123"],
            "pt": ["7777", "7777", "7700", "0000"],
            "ai": null,
            "sw": 0,
            "hu": true
          }, {
            "ps": ["6142", "1031", "1204", "4123"],
            "pt": ["7000", "0000", "0000", "0000"],
            "ai": null,
            "sw": 0,
            "hu": true
          }, {
            "ps": ["0142", "1031", "1204", "4123"],
            "pt": ["0000", "0000", "0000", "0000"],
            "ai": null,
            "sw": 0,
            "hu": false
          }],
          "pc": 3,
          "gw": 0
        },
        "cp": true,
        "cpi": 5,
        "gwe": true,
        "wt": 2,
        "fi": null,
        "bi": {
          "bsb": [{
            "bgi": {
              "pq": [{
                "ps": ["0542", "5035", "5204", "4523"],
                "pt": ["0000", "1000", "1000", "1100"],
                "ai": [{
                  "s": 4,
                  "t": 1,
                  "w": 6,
                  "c": 4
                }],
                "sw": 6,
                "hu": false
              }, {
                "ps": ["0542", "0354", "2044", "2330"],
                "pt": ["0110", "0011", "0011", "0000"],
                "ai": [{
                  "s": 4,
                  "t": 1,
                  "w": 24,
                  "c": 6
                }],
                "sw": 24,
                "hu": false
              }, {
                "ps": ["0221", "0321", "2010", "2330"],
                "pt": ["0000", "0000", "0000", "0000"],
                "ai": null,
                "sw": 0,
                "hu": false
              }],
              "pc": 3,
              "gw": 30
            },
            "bss": 1,
            "bsc": 5
          }, {
            "bgi": {
              "pq": [{
                "ps": ["0225", "0325", "2050", "2330"],
                "pt": ["0111", "0011", "0010", "0000"],
                "ai": [{
                  "s": 2,
                  "t": 1,
                  "w": 4.8,
                  "c": 6
                }],
                "sw": 4.8,
                "hu": false
              }, {
                "ps": ["0111", "0331", "2001", "2330"],
                "pt": ["0111", "0001", "0001", "0000"],
                "ai": [{
                  "s": 1,
                  "t": 1,
                  "w": 1.2,
                  "c": 5
                }],
                "sw": 1.2,
                "hu": false
              }, {
                "ps": ["0233", "0332", "2004", "2330"],
                "pt": ["0011", "0110", "0000", "0000"],
                "ai": [{
                  "s": 3,
                  "t": 1,
                  "w": 3,
                  "c": 4
                }],
                "sw": 3,
                "hu": false
              }, {
                "ps": ["0242", "0230", "2004", "2330"],
                "pt": ["0000", "0000", "0000", "0000"],
                "ai": null,
                "sw": 0,
                "hu": false
              }],
              "pc": 4,
              "gw": 9
            },
            "bss": 1,
            "bsc": 3
          }, {
            "bgi": {
              "pq": [{
                "ps": ["0252", "0230", "2005", "2330"],
                "pt": ["0222", "0201", "0111", "0001"],
                "ai": [{
                  "s": 0,
                  "t": 1,
                  "w": 0.6,
                  "c": 5
                }, {
                  "s": 2,
                  "t": 2,
                  "w": 1.8,
                  "c": 4
                }],
                "sw": 2.4,
                "hu": false
              }, {
                "ps": ["0020", "0310", "2133", "2330"],
                "pt": ["0000", "0000", "0011", "0110"],
                "ai": [{
                  "s": 3,
                  "t": 1,
                  "w": 3,
                  "c": 4
                }],
                "sw": 3,
                "hu": false
              }, {
                "ps": ["0020", "0310", "2140", "2021"],
                "pt": ["0000", "0000", "0000", "0000"],
                "ai": null,
                "sw": 0,
                "hu": false
              }],
              "pc": 3,
              "gw": 5.4
            },
            "bss": 4,
            "bsc": 2
          }, {
            "bgi": {
              "pq": [{
                "ps": ["5525", "5315", "2145", "2521"],
                "pt": ["1111", "1001", "1001", "1110"],
                "ai": [{
                  "s": 2,
                  "t": 1,
                  "w": 225,
                  "c": 11
                }],
                "sw": 225,
                "hu": false
              }, {
                "ps": ["1112", "3144", "1400", "1120"],
                "pt": ["1110", "0100", "0000", "0000"],
                "ai": [{
                  "s": 1,
                  "t": 1,
                  "w": 0.6,
                  "c": 4
                }],
                "sw": 0.6,
                "hu": false
              }, {
                "ps": ["2100", "3443", "1400", "1120"],
                "pt": ["0000", "0000", "0000", "0000"],
                "ai": null,
                "sw": 0,
                "hu": false
              }],
              "pc": 3,
              "gw": 225.6
            },
            "bss": 0,
            "bsc": 7
          }],
          "bc": 4,
          "btw": 270
        },
        "bmi": null,
        "jpi": null,
        "uc": 11,
        "tuc": 11,
        "mw": 0,
        "ww": 270,
        "aw": 270,
        "at": 34,
        "si": "15723-387760-91551023",
        "nm": 5000267,
        "act": 0
      }, _class3.SYMBOL_NUM = 7, _class3.SCATTER_SYMBOL = 6, _class3.WILD_SYMBOL = 5, _class3.PLATE_SIZE = 4, _class3.MIN_PLATE_SIZE = 4, _class3.MAX_PLATE_SIZE = 6, _class3.UPGRADE_TAG = 7, _class3.COLLECT_MAX = 10, _class3.IsProto = false, _class3.SPIN_ACK_TYPE = {
        AT_SUCCESS: 0,
        // 成功
        AT_MONEY_NOT_ENOUGH: 302,
        // 錢不夠
        AT_MONEY_ABNORMAL: 301,
        // 金額異常
        AT_MONEY_NOT_ENOUGH_SINGLE: 305
      }, _class3.AWARD_TYPE = {
        AWARD_TYPE_NON: 0x0,
        // 沒中獎 (0)
        AWARD_TYPE_COMBO: 0x1,
        // 中獎 (1)
        AWARD_TYPE_GET_WHEEL: 0x2,
        // 得到 輪盤 (2)
        AWARD_TYPE_GET_FREE: 0x4,
        // 得到 FG (4)
        AWARD_TYPE_IN_FREE: 0x8,
        // 正在遊玩 FG (8)
        AWARD_TYPE_LEAVE_FREE: 0x10,
        // 離開 FG (16)
        AWARD_TYPE_GET_BOUNS: 0x20,
        // 得到 BG (32)
        AWARD_TYPE_GET_BET_MUL: 0x40,
        // 得到 押注倍率 (64)
        AWARD_TYPE_GET_JP: 0x80,
        // 得到 JP (128)
        AWARD_TYPE_GET_SELF_JP: 0x100,
        // 得到 個人JP (256)
        AWARD_TYPE_GET_SHARE_JP: 0x200,
        // 得到 共用JP (512)
        AWARD_TYPE_MAX: 0x7fff
      }, _class3.AudioPathPre = "Sound/", _class3.AudioClips = {
        combo_1: null,
        Ram_symbol: null,
        Common_big_win: null,
        Common_mega_win: null,
        Common_super_win: null,
        Mg_Reel: null,
        Fg_Bg: null,
        EnterFree: null,
        PlateUpgrade: null,
        scatter: null,
        combo_2: null,
        combo_3: null,
        combo_4: null,
        combo_5: null,
        Wheel_Rotate: null,
        Wheel_end: null,
        cookie: null,
        Candy_drop: null,
        Wild: null,
        Wild_chang: null,
        turntable_stop: null
      }, _class3.ExplodeSoundMatch = [8, 10, 12, 14, 16], _class3.ExplodeSoundList = ["Explode7", "Explode13", "Explode16", "Explode10", "Explode17"], _class3.ExplodeSoundTime = [0.5, 0.6, 0.63, 1, 1.2], _class3.EXPLODE_HIDE_FRAME = [13, 18, 31, 31, 33, 40], _class3.DropSoundVol = [1, 0.75, 0.5, 0.35, 0.2, 0.1, 0.05], _class3.AckType = {
        login: 0,
        exchangeChips: 2,
        info: 11,
        spin: 12,
        jpInfo: 14,
        changeBet: 15,
        changeCurrency: 16,
        heartBeat: 98,
        serverMsg: 99
      }, _class3.SERVER_RET_TYPE = {
        SERVER_SUCCESS: 0,
        //正常				
        SERVER_ERROR_SEATE: 799,
        // 錯誤狀態				
        SERVER_NOUSE: 899,
        // 無用				
        SERVER_MAINTAIN: 231,
        // 維護中				
        SERVER_SHUTDOWN: 232,
        // 關機中				
        SERVER_NEED_UID: 233,
        //需要UID				
        SERVER_NEED_LOGIN: 234,
        //沒有玩家				
        SERVER_TOKEN_ERROR: 235 //TOKEN 錯誤				

      }, _class3.LOGIN_RESULT_TYPE = {
        LOGIN_SUCCESS: 0,
        //登入成功
        LOGIN_FAIL: 1,
        // 登入失敗
        API_VERIFY_FAIL: 235,
        // TOKEN驗證失敗
        API_LOGIN_REPEAT_FAIL: 2002 // 重複登入

      }, _class3.StringKey = {
        CHANGE_BET_HINT: "CHANGE_BET_HINT",
        FEATURE_LEFT: "FEATURE_LEFT",
        FEATURE_RIGHT: "FEATURE_RIGHT"
      }, _class3.LINE_AWARD_SETTING = [// { betRate: 5, soundName: "Common_coin_small", runScoreTime: 1 },
      {
        betRate: 5,
        soundName: "Common_big_win",
        runScoreTime: 5
      }, {
        betRate: 15,
        soundName: "Common_mega_win",
        runScoreTime: 5
      }, {
        betRate: 40,
        soundName: "Common_super_win",
        runScoreTime: 5
      }], _class3.BASE_EVENT_PIC_NAME = {
        FG: "fg",
        FG_S: "freespin",
        BG: "bg",
        BG_S: "bonusspin",
        MUL: "bet",
        JP_MINI: "JP_MINI",
        JP_MINOR: "JP_MINOR",
        JP_MAJOR: "JP_MAJOR",
        JP_GRAND: "JP_GRAND",
        TITLE: "youwin"
      }, _class3.ITEM_PATH = "Plist/Item_card", _class3.USE_ITEM_REASON = {
        NORMAL: 0,
        USING: 1
      }, _class3.AWARD_SOUND = [_class3.AudioClips.Common_big_win, _class3.AudioClips.Common_mega_win, _class3.AudioClips.Common_super_win], _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Symbol4SpriteFrame", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Symbol5SpriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "Symbol6SpriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "SymbolBgSpriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "WildSpriteFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "UpgradeSpriteFrames", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "MgTxtSpriteAtlas", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "CongratsTxtSpriteAtlas", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HistoryBar.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tools.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, UITransform, Tween, tween, easing, v3, Component, Tools;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Sprite = module.Sprite;
      UITransform = module.UITransform;
      Tween = module.Tween;
      tween = module.tween;
      easing = module.easing;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      Tools = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3;

      cclegacy._RF.push({}, "702d3sWYFdOO7BE5QS+9KH3", "HistoryBar", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HistoryBar = exports('default', (_dec = property(Label), _dec2 = property(Label), _dec3 = property(Sprite), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HistoryBar, _Component);

        function HistoryBar() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_connectNumLabel", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_moneyLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_symbolSprite", _descriptor3, _assertThisInitialized(_this));

          _this.m_symbolPos = null;
          _this.m_connectPos = null;
          _this.m_moneyPos = null;
          _this.m_actionEndCb = null;
          return _this;
        }

        var _proto = HistoryBar.prototype;

        _proto.SetWinInfo = function SetWinInfo(info, symbolSpriteFrame, gameView) {
          this.m_connectNumLabel.string = info.c.toString();
          this.m_moneyLabel.string = Tools.FormatNumberThousands(gameView.GetDisplayValue(info.w), Tools.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
          this.m_symbolSprite.spriteFrame = symbolSpriteFrame;
        };

        _proto.PlayEffect = function PlayEffect() {};

        _proto.AddChildOnLayer = function AddChildOnLayer(rootNodes) {
          rootNodes[0].addChild(this.node);
          this.m_symbolPos = this.m_symbolSprite.node.getPosition();
          var symbolPos = this.m_symbolSprite.node.parent.getComponent(UITransform).convertToWorldSpaceAR(this.m_symbolSprite.node.getPosition());
          var symbolPos1 = rootNodes[1].getComponent(UITransform).convertToNodeSpaceAR(symbolPos);
          this.m_symbolSprite.node.setPosition(symbolPos1);
          this.m_symbolSprite.node.removeFromParent();
          rootNodes[1].addChild(this.m_symbolSprite.node);
          this.m_connectPos = this.m_connectNumLabel.node.getPosition();
          var connectPos = this.m_connectNumLabel.node.parent.getComponent(UITransform).convertToWorldSpaceAR(this.m_connectNumLabel.node.getPosition());
          var connectPos1 = rootNodes[2].getComponent(UITransform).convertToNodeSpaceAR(connectPos);
          this.m_connectNumLabel.node.setPosition(connectPos1);
          this.m_connectNumLabel.node.removeFromParent();
          rootNodes[2].addChild(this.m_connectNumLabel.node);
          this.m_moneyPos = this.m_moneyLabel.node.getPosition();
          var moneyPos = this.m_moneyLabel.node.parent.getComponent(UITransform).convertToWorldSpaceAR(this.m_moneyLabel.node.getPosition());
          var moneyPos1 = rootNodes[4].getComponent(UITransform).convertToNodeSpaceAR(moneyPos);
          this.m_moneyLabel.node.setPosition(moneyPos1);
          this.m_moneyLabel.node.removeFromParent();
          rootNodes[4].addChild(this.m_moneyLabel.node);
        };

        _proto.MovePos = function MovePos(pos) {
          Tween.stopAllByTarget(this.m_connectNumLabel.node);
          Tween.stopAllByTarget(this.m_moneyLabel.node);
          Tween.stopAllByTarget(this.m_symbolSprite.node);
          Tween.stopAllByTarget(this.node);
          var connectPos = this.m_connectPos.add(pos);
          this.m_connectNumLabel.node.setPosition(connectPos);
          var symbolPos = this.m_symbolPos.add(pos);
          this.m_symbolSprite.node.setPosition(symbolPos);
          var moneyPos = this.m_moneyPos.add(pos);
          this.m_moneyLabel.node.setPosition(moneyPos);
          this.node.setPosition(pos);

          if (this.m_actionEndCb) {
            this.m_actionEndCb();
            this.m_actionEndCb = null;
          }
        };

        _proto.MoveAction = function MoveAction(pos, time, cb) {
          var _this2 = this;

          if (cb === void 0) {
            cb = null;
          }

          this.m_actionEndCb = cb;
          var connectPos = this.m_connectNumLabel.node.getPosition();
          connectPos = connectPos.add(pos);
          tween(this.m_connectNumLabel.node).by(time, {
            position: pos
          }, {
            easing: easing.quadIn
          }).by(Tools.divide(3, 60), {
            position: v3(0, 9, 0)
          }).by(Tools.divide(3, 60), {
            position: v3(0, -9, 0)
          }).call(function () {
            _this2.m_connectNumLabel.node.setPosition(connectPos);
          }).start();
          var moneyPos = this.m_moneyLabel.node.getPosition();
          moneyPos = moneyPos.add(pos);
          tween(this.m_moneyLabel.node).by(time, {
            position: pos
          }, {
            easing: easing.quadIn
          }).by(Tools.divide(3, 60), {
            position: v3(0, 9, 0)
          }).by(Tools.divide(3, 60), {
            position: v3(0, -9, 0)
          }).call(function () {
            _this2.m_moneyLabel.node.setPosition(moneyPos);
          }).start();
          var symbolPos = this.m_symbolSprite.node.getPosition();
          symbolPos = symbolPos.add(pos);
          tween(this.m_symbolSprite.node).by(time, {
            position: pos
          }, {
            easing: easing.quadIn
          }).by(Tools.divide(3, 60), {
            position: v3(0, 9, 0)
          }).by(Tools.divide(3, 60), {
            position: v3(0, -9, 0)
          }).call(function () {
            _this2.m_symbolSprite.node.setPosition(symbolPos);
          }).start();
          var nodePos = this.node.getPosition();
          nodePos = nodePos.add(pos);
          tween(this.node).by(time, {
            position: pos
          }, {
            easing: easing.quadIn
          }).by(Tools.divide(3, 60), {
            position: v3(0, 9, 0)
          }).by(Tools.divide(3, 60), {
            position: v3(0, -9, 0)
          }).call(function () {
            _this2.node.setPosition(nodePos);

            if (_this2.m_actionEndCb) {
              _this2.m_actionEndCb();

              _this2.m_actionEndCb = null;
            }
          }).start();
        };

        _proto.Release = function Release() {
          this.m_connectNumLabel.node.removeFromParent();
          this.m_connectNumLabel.node.destroy();
          this.m_moneyLabel.node.removeFromParent();
          this.m_moneyLabel.node.destroy();
          this.m_symbolSprite.node.removeFromParent();
          this.m_symbolSprite.node.destroy();
          this.node.removeFromParent();
          this.node.destroy();
        };

        return HistoryBar;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_connectNumLabel", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_moneyLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_symbolSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/HistoryView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './HistoryBar.ts', './Tools.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, Sprite, Label, UITransform, instantiate, v3, Component, HistoryBar, Tools;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Sprite = module.Sprite;
      Label = module.Label;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      v3 = module.v3;
      Component = module.Component;
    }, function (module) {
      HistoryBar = module.default;
    }, function (module) {
      Tools = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

      cclegacy._RF.push({}, "c5aefKpfJpKu58GY5yUNQAt", "HistoryView", undefined);

      var BAR_HEIGHT = 80;
      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var HistoryView = exports('default', (_dec = property(Prefab), _dec2 = property(Node), _dec3 = property({
        type: Sprite,
        tooltip: "直版symbol"
      }), _dec4 = property({
        type: Label,
        tooltip: "直版各別贏分"
      }), _dec5 = property({
        type: Label,
        tooltip: "直版連結數"
      }), _dec6 = property({
        type: Label,
        tooltip: "每局總贏分"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(HistoryView, _Component);

        function HistoryView() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_barPrefab", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_LandscapeView", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_symbolSprite", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_singleWinLabel", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_countLabel", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_totalWinLabels", _descriptor6, _assertThisInitialized(_this));

          _this.m_landscapeRecords = new Array();
          _this.m_landscapeRecordNodes = new Array();
          _this.m_landscapeLimitCount = 0;
          _this.m_viewHeight = 0;
          _this.m_landscapeLayerNodes = new Array();
          _this.m_totalWin = 0;
          _this.m_gameView = null;
          return _this;
        }

        var _proto = HistoryView.prototype;

        _proto.onLoad = function onLoad() {
          this.m_viewHeight = this.m_LandscapeView.getComponent(UITransform).contentSize.height;
          this.m_landscapeLimitCount = Math.floor(this.m_viewHeight / BAR_HEIGHT);
        };

        _proto.start = function start() {
          for (var i = 0; i < 5; i++) {
            var node = new Node(i.toString());
            node.addComponent(UITransform);
            node.getComponent(UITransform).setAnchorPoint(0.5, 0);
            this.m_LandscapeView.addChild(node);
            this.m_landscapeLayerNodes.push(node);
          }
        };

        _proto.Init = function Init(gameView) {
          this.m_gameView = gameView;
          this.ClearRecords();
        };

        _proto.ClearRecords = function ClearRecords() {
          var _this2 = this;

          var _loop = function _loop() {
            _this2.m_landscapeRecords.shift();

            var node = _this2.m_landscapeRecordNodes.shift();

            var bar = node.getComponent(HistoryBar);
            bar.MoveAction(v3(0, _this2.m_viewHeight * -1, 0), 0.2, function () {
              bar.Release();
            });
          };

          while (this.m_landscapeRecordNodes.length > 0) {
            _loop();
          }

          this.m_totalWin = 0;
          this.m_symbolSprite.node.active = false;
          this.m_singleWinLabel.node.active = false;
          this.m_countLabel.node.active = false;
          this.ShowTotalWinPerRound();
        };

        _proto.AddHistoryRecords = function AddHistoryRecords(info, symbolSpriteFrame, isHardStop) {
          var _this3 = this;

          for (var i = 0; i < info.length; i++) {
            this.m_totalWin = Tools.strip(this.m_totalWin + info[i].Info.w);
          } //移到定位


          for (var _i = 0; _i < this.m_landscapeRecordNodes.length; _i++) {
            var bar = this.m_landscapeRecordNodes[_i].getComponent(HistoryBar);
          } //移除多餘的，一次一整組


          var landscapeRemoveNodes = new Array();

          while (this.m_landscapeRecords.length + info.length > this.m_landscapeLimitCount) {
            this.m_landscapeRecords.shift();
            var node = this.m_landscapeRecordNodes.shift();
            landscapeRemoveNodes.push(node);
          } //產生新bar


          for (var _i2 = 0; _i2 < info.length; _i2++) {
            var _node = instantiate(this.m_barPrefab);

            this.m_landscapeRecordNodes.push(_node);
            this.m_landscapeRecords.push(info[_i2]);

            _node.setPosition(0, this.m_viewHeight + _i2 * BAR_HEIGHT, 0);

            var _bar = _node.getComponent(HistoryBar);

            _bar.AddChildOnLayer(this.m_landscapeLayerNodes);

            _bar.SetWinInfo(info[_i2].Info, symbolSpriteFrame, this.m_gameView);
          } //掉落動畫


          var moveTime = isHardStop ? 0.1 : 0.2;

          var _loop2 = function _loop2() {
            var node = landscapeRemoveNodes.pop();
            var bar = node.getComponent(HistoryBar);
            bar.MoveAction(v3(0, _this3.m_viewHeight * -1, 0), moveTime, function () {
              bar.Release();
            });
          };

          while (landscapeRemoveNodes.length > 0) {
            _loop2();
          }

          for (var _i3 = 0; _i3 < this.m_landscapeRecordNodes.length; _i3++) {
            var _y = _i3 * BAR_HEIGHT;

            if (this.m_landscapeRecordNodes[_i3].getPosition().y != _y) {
              var targetY = _y - this.m_landscapeRecordNodes[_i3].getPosition().y;

              var _bar2 = this.m_landscapeRecordNodes[_i3].getComponent(HistoryBar);

              _bar2.MoveAction(v3(0, targetY, 0), moveTime);
            }
          } //直版


          this.m_symbolSprite.spriteFrame = symbolSpriteFrame;
          this.m_countLabel.string = info[info.length - 1].Info.c.toString();
          this.m_singleWinLabel.string = Tools.FormatNumberThousands(this.m_gameView.GetDisplayValue(info[info.length - 1].Info.w), Tools.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
          this.m_symbolSprite.node.active = true;
          this.m_singleWinLabel.node.active = true;
          this.m_countLabel.node.active = true;
          this.ShowTotalWinPerRound();
        };

        _proto.ShowTotalWinPerRound = function ShowTotalWinPerRound() {
          for (var i = 0; i < this.m_totalWinLabels.length; i++) {
            this.m_totalWinLabels[i].string = Tools.FormatNumberThousands(this.m_gameView.GetDisplayValue(this.m_totalWin), Tools.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);

            if (this.m_totalWin === 0) {
              this.m_totalWinLabels[i].node.active = false;
            } else {
              this.m_totalWinLabels[i].node.active = true;
            }
          }
        };

        return HistoryView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_barPrefab", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_LandscapeView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_symbolSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "m_singleWinLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "m_countLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "m_totalWinLabels", [_dec6], {
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

System.register("chunks:///_virtual/MultiEffect.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tools.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, v3, tween, instantiate, Label, log, easing, Component, Tools;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      v3 = module.v3;
      tween = module.tween;
      instantiate = module.instantiate;
      Label = module.Label;
      log = module.log;
      easing = module.easing;
      Component = module.Component;
    }, function (module) {
      Tools = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "c832bRoqUtKAp6QU3B4NDAP", "MultiEffect", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var MultiEffect = exports('default', (_dec = property({
        type: Animation,
        tooltip: "動畫表演"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MultiEffect, _Component);

        function MultiEffect() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_anim", _descriptor, _assertThisInitialized(_this));

          _this.m_multiLabel = null;
          _this.m_isStartMoving = false;
          _this.m_time = 0;
          _this.m_orgPos = null;
          _this.m_speedX = 0;
          _this.m_speedY = 160;
          _this.m_angle = 95;
          _this.m_gravity = 320;
          _this.m_finalPos = null;
          _this.m_addDelay = Tools.divide(20, 60);
          _this.m_animState = null;
          _this.m_addCb = null;
          _this.m_endCb = null;
          _this.m_animName = "end";
          _this.m_timeUp = 6;
          return _this;
        }

        var _proto = MultiEffect.prototype;

        _proto.start = function start() {};

        _proto.update = function update(dt) {
          var _this2 = this;

          if (this.m_isStartMoving) {
            this.m_time = Tools.strip(this.m_time + dt);
            var x = this.m_speedX * this.m_time * Math.cos(this.m_angle / 180 * Math.PI);
            var t = this.m_time * this.m_timeUp;
            var y = this.m_speedY * Math.sin(this.m_angle / 180 * Math.PI) * t - this.m_gravity * t * t / 2;
            var pos = this.m_orgPos.add(v3(x, y, 0));
            this.node.setPosition(pos);

            if (pos.y < this.m_finalPos.y && pos.x < this.m_finalPos.x) {
              this.node.setPosition(this.m_finalPos);
              this.m_multiLabel.node.active = false;
              this.m_isStartMoving = false;
              tween(this.node).call(function () {
                if (_this2.m_addCb) {
                  _this2.m_addCb();
                }

                _this2.m_multiLabel.node.active = false;
              }).delay(Tools.strip(this.m_animState.duration - this.m_time + 0.5)).call(function () {
                if (_this2.m_endCb) {
                  _this2.m_endCb();
                }
              }).start();
            }
          }
        };

        _proto.SetMultiNumber = function SetMultiNumber(multiNode) {
          var node = instantiate(multiNode);
          node.setPosition(0, 0, 0);
          this.node.addChild(node);
          this.m_multiLabel = node.getComponent(Label);
        };

        _proto.Show = function Show() {
          this.m_anim.play("start");
        };

        _proto.Stop = function Stop() {
          this.m_anim.play("loop");
        };

        _proto.ShowMultiEffect = function ShowMultiEffect(pos, addCb, endCb, isLandscape) {
          var _this3 = this;

          log(pos, this.node.getPosition());
          this.m_anim.play(this.m_animName);
          this.m_animState = this.m_anim.getState(this.m_animName);
          this.m_animState.pause();
          this.m_finalPos = pos;
          this.m_addCb = addCb;
          this.m_endCb = endCb;
          var difX = pos.x - this.node.getPosition().x;
          this.m_speedX = difX / (Math.cos(this.m_angle / 180 * Math.PI) * this.m_addDelay) * 0.20;
          log(this.m_speedX);

          if (isLandscape) {
            tween(this.node).delay(0.5).call(function () {
              _this3.m_animState.resume();

              _this3.m_orgPos = _this3.node.getPosition();
              _this3.m_time = 0;
              _this3.m_isStartMoving = true;
            }).start();
          } else {
            tween(this.node).delay(0.5).call(function () {
              _this3.m_animState.resume();
            }).to(this.m_addDelay, {
              position: pos
            }, {
              easing: easing.sineIn
            }).call(function () {
              if (addCb) {
                addCb();
              }

              _this3.m_multiLabel.node.active = false;
            }).delay(Tools.strip(this.m_animState.duration - this.m_addDelay + 0.5)).call(function () {
              if (endCb) {
                endCb();
              }
            }).start();
          }
        };

        return MultiEffect;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_anim", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SingleWin.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tools.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Animation, Label, log, Component, Tools;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      Label = module.Label;
      log = module.log;
      Component = module.Component;
    }, function (module) {
      Tools = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "18d99lrEsNN95YZ0It/JMWb", "SingleWin", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SingleWin = exports('default', (_dec = property({
        type: Animation,
        tooltip: "動畫"
      }), _dec2 = property({
        type: Label,
        tooltip: "贏分Label"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SingleWin, _Component);

        function SingleWin() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_anim", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_winLabel", _descriptor2, _assertThisInitialized(_this));

          _this.m_win = 0;
          _this.m_gameView = null;
          return _this;
        }

        var _proto = SingleWin.prototype;

        _proto.start = function start() {};

        _proto.Init = function Init(gameView) {
          this.m_gameView = gameView;
        };

        _proto.GetAnimTime = function GetAnimTime(isHardStop) {
          var animClips = this.m_anim.clips;

          for (var i = 0; i < animClips.length; i++) {
            if (isHardStop && animClips[i].name === "WinNum_H") {
              return animClips[i].duration;
            } else if (!isHardStop && animClips[i].name === "WinNum") {
              return animClips[i].duration;
            }
          }
        };

        _proto.PlayAnim = function PlayAnim(isHardStop) {
          log("PlayAnim", this.m_winLabel.node.getPosition());
          this.node.active = true;

          if (isHardStop) {
            this.m_anim.play("WinNum_H");
          } else {
            this.m_anim.play();
          }
        };

        _proto.ChangeWinNumber = function ChangeWinNumber() {
          this.m_winLabel.string = Tools.FormatNumberThousands(this.m_gameView.GetDisplayValue(this.m_win), Tools.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO);
        };

        _createClass(SingleWin, [{
          key: "Win",
          get: function get() {
            return this.m_win;
          },
          set: function set(v) {
            this.m_win = Tools.strip(v);
            this.ChangeWinNumber();
          }
        }]);

        return SingleWin;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_anim", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_winLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SlotReels.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tools.ts', './GS_Define.ts', './Symbol.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createForOfIteratorHelperLoose, _createClass, cclegacy, _decorator, Prefab, Vec3, UITransform, Size, instantiate, v3, log, Tween, tween, Animation, Component, Tools, GS_Define, Symbol;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createForOfIteratorHelperLoose = module.createForOfIteratorHelperLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Vec3 = module.Vec3;
      UITransform = module.UITransform;
      Size = module.Size;
      instantiate = module.instantiate;
      v3 = module.v3;
      log = module.log;
      Tween = module.Tween;
      tween = module.tween;
      Animation = module.Animation;
      Component = module.Component;
    }, function (module) {
      Tools = module.default;
    }, function (module) {
      GS_Define = module.default;
    }, function (module) {
      Symbol = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;

      cclegacy._RF.push({}, "11710II3s1GB42Su1br6l7W", "SlotReels", undefined);

      var Z_INDEX = {
        SYMBOL: 1,
        EFFECT: 2
      };
      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var SlotReels = exports('default', (_dec = property({
        type: GS_Define,
        tooltip: "GSDefine.ts"
      }), _dec2 = property({
        type: Prefab,
        tooltip: "symbol彈跳的prefab"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SlotReels, _Component);

        function SlotReels() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_define", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_symbolPrefab", _descriptor2, _assertThisInitialized(_this));

          _this.m_spinSpeed = 0.5;
          _this.m_intervalTime = 0.1;
          _this.m_viewSize = null;
          _this.m_symbolSize = null;
          _this.m_startPos = [new Vec3(1, 1, 0), new Vec3(0, 1, 0), new Vec3(0, 1, 0)];
          _this.m_reelPositionOffset = [new Vec3(2, -2.25, 0), new Vec3(2, -2.25, 0), new Vec3(2, -2.25, 0), new Vec3(2, -2.25, 0), new Vec3(2, -2.25, 0), new Vec3(2, -2.25, 0)];
          _this.m_symbol = new Array();
          _this.m_isInitStop = true;
          _this.m_isPatchUpFinished = false;
          _this.m_plate = new Array();
          _this.m_comboPlate = new Array();
          _this.m_tag = new Array();
          _this.m_moveCount = new Array();
          _this.m_gameView = null;
          _this.m_isHardStop = false;
          _this.m_isMatchingFinished = false;
          _this.m_isPlateCleaned = false;
          _this.m_orgPos = null;
          _this.m_symbolSpriteFrames = null;
          _this.combocnt = 0;
          _this.hasCombo = false;
          _this.isFinish = false;
          return _this;
        }

        var _proto = SlotReels.prototype;

        _proto.onLoad = function onLoad() {
          this.m_symbolSpriteFrames = this.m_define.Symbol4SpriteFrame;
        };

        _proto.start = function start() {
          this.m_viewSize = this.node.getComponent(UITransform).contentSize;
          this.m_symbolSize = new Size(104, 88);
          this.m_orgPos = new Array();
          var startX = this.m_startPos[GS_Define.PLATE_SIZE - 4].x * this.m_symbolSize.width;
          var startY = this.m_startPos[GS_Define.PLATE_SIZE - 4].y * this.m_symbolSize.height;

          for (var col = 0; col < GS_Define.PLATE_SIZE; col++) {
            var symbolArray = new Array();
            var pos = new Array();

            for (var row = 0; row < GS_Define.PLATE_SIZE; row++) {
              var value = Math.floor(Math.random() * 5);
              var node = instantiate(this.m_symbolPrefab);
              this.node.addChild(node);
              Tools.SetZIndex(node, Z_INDEX.SYMBOL);
              var symbol = node.getComponent(Symbol);
              symbol.SymbolType = value;
              symbol.ChangeSymbol(this.m_symbolSpriteFrames[value]);
              symbolArray.push(node);
              var x = this.m_symbolSize.width * (col + 0.5) + this.m_reelPositionOffset[col].x - this.m_viewSize.width / 2 + startX;
              var y = this.m_symbolSize.height * (row + 0.5) + this.m_reelPositionOffset[col].y - this.m_viewSize.height / 2 + startY;
              x = Tools.strip(x);
              y = Tools.strip(y);
              node.setPosition(x, y, 0);
              pos.push(v3(x, y, 0));

              if (col == 0 && row == 0) {
                log(x, y);
              }
            }

            this.m_symbol.push(symbolArray);
            this.m_orgPos.push(pos);
          }
        };

        _proto.Init = function Init(gameView) {
          this.m_gameView = gameView;
        };

        _proto.RecoverPlate = function RecoverPlate() {
          for (var col = 0; col < GS_Define.PLATE_SIZE; col++) {
            for (var row = 0; row < GS_Define.PLATE_SIZE; row++) {
              Tween.stopAllByTarget(this.m_symbol[col][row]);
              this.m_symbol[col][row].setPosition(this.m_orgPos[col][row]);
            }
          }
        }
        /**
         * 設定盤面資訊，需先呼叫StartSpin
         * @param plate 當前盤面
         * @param tag 當前盤面連結資訊
         * @param combo 下個盤面
         */
        ;

        _proto.SetPlateInfo = function SetPlateInfo(plate, tag, combo) {
          this.m_plate = plate;
          this.m_tag = tag;
          this.m_comboPlate = combo;
        } //顯示初始盤面，盤面上的symbol向下離開盤面
        ;

        _proto.StartSpin = function StartSpin() {
          var _this2 = this;

          this.isFinish = false;
          this.m_plate = null;
          this.m_tag = null;
          this.m_comboPlate = null;
          this.m_isHardStop = this.m_gameView.IsHardStop;
          this.m_isInitStop = false;
          this.m_isPlateCleaned = false;

          for (var i = 0; i < this.m_symbol.length; i++) {
            for (var j = 0; j < this.m_symbol[i].length; j++) {
              this.m_symbol[i][j].active = true;
            }
          }

          var finish = 0;
          var spinSpeed = this.m_spinSpeed;

          for (var _i = 0; _i < GS_Define.PLATE_SIZE; _i++) {
            for (var _j = 0; _j < GS_Define.PLATE_SIZE; _j++) {
              var action = tween().by(spinSpeed, {
                position: v3(0, -(this.m_viewSize.height * 2), 0)
              });
              tween(this.m_symbol[_i][_j]).by(spinSpeed, {
                position: v3(0, -(this.m_viewSize.height * 2), 0)
              }).call(function () {
                finish += 1;

                if (finish == GS_Define.PLATE_SIZE * GS_Define.PLATE_SIZE) {
                  if (_this2.m_plate !== null && _this2.m_tag !== null) {
                    _this2.ShowNewPlate();
                  } else {
                    _this2.m_isPlateCleaned = true;
                  }
                }
              }).start();
            }
          }
        };

        _proto.getMySymbol = function getMySymbol() {
          return this.m_symbol;
        } //TODO產生新的盤面從上面掉落
        ;

        _proto.ShowNewPlate = function ShowNewPlate() {
          var _this3 = this; // 產生新的盤面


          this.isFinish = false;
          Tween.stopAllByTarget(this.node);
          this.combocnt = 0;
          this.hasCombo = false;

          if (!this.m_gameView.m_isInBonusGame) {
            //this.m_gameView.candyDrop();
            this.m_gameView.ramSymbol();
            var cnadyCnt = 0;
            var startX = this.m_startPos[GS_Define.PLATE_SIZE - 4].x * this.m_symbolSize.width;
            var startY = this.m_startPos[GS_Define.PLATE_SIZE - 4].y * this.m_symbolSize.height;

            for (var col = 0; col < GS_Define.PLATE_SIZE; col++) {
              var symbolArray = new Array();
              var pos = new Array();

              for (var row = 0; row < GS_Define.PLATE_SIZE; row++) {
                var special = Math.floor(Math.random() * 50);
                var value = Math.floor(Math.random() * 5);
                var node = instantiate(this.m_symbolPrefab);
                this.node.addChild(node);
                Tools.SetZIndex(node, Z_INDEX.SYMBOL);
                var symbol = node.getComponent(Symbol);

                if (this.m_gameView.cntPress === 10) {
                  if (cnadyCnt < 10) {
                    cnadyCnt++;
                    symbol.SymbolType = 6;
                    symbol.ChangeSymbol(this.m_symbolSpriteFrames[6]);
                  } else {
                    symbol.SymbolType = value;
                    symbol.ChangeSymbol(this.m_symbolSpriteFrames[value]);
                  }
                } else if (this.m_gameView.cntPress === 22) {
                  //22
                  if (cnadyCnt < 1) {
                    this.m_gameView.randN = 0;
                    cnadyCnt++;
                    symbol.SymbolType = 6;
                    symbol.ChangeSymbol(this.m_symbolSpriteFrames[6]);
                  } else {
                    symbol.SymbolType = value;
                    symbol.ChangeSymbol(this.m_symbolSpriteFrames[value]);
                  }
                } else if (special === -1 && !this.m_gameView.m_isInFreeGame) {
                  //special設為 -1 不給掉
                  symbol.SymbolType = 6;
                  symbol.ChangeSymbol(this.m_symbolSpriteFrames[6]);
                } else {
                  symbol.SymbolType = value;
                  symbol.ChangeSymbol(this.m_symbolSpriteFrames[value]);
                }

                symbolArray.push(node);
                var x = this.m_symbolSize.width * (col + 0.5) + this.m_reelPositionOffset[col].x - this.m_viewSize.width / 2 + startX;
                var y = this.m_symbolSize.height * (row + 0.5) + this.m_reelPositionOffset[col].y - this.m_viewSize.height / 2 + startY + this.m_viewSize.height * 2;
                x = Tools.strip(x);
                y = Tools.strip(y);
                node.setPosition(x, y, 0);
                pos.push(v3(x, y, 0));

                if (col == 0 && row == 0) {
                  log(x, y);
                }
              }

              this.m_symbol[col] = symbolArray;
            } // 從上面掉落


            var spinSpeed = this.m_spinSpeed; // 第二排

            tween(this.m_symbol[1][0]).by(spinSpeed, {
              position: v3(0, -(this.m_viewSize.height * 2), 0)
            }).call(function () {
              var animation = _this3.m_symbol[1][0].getComponent(Animation);

              if (animation) {
                animation.play("gem_bounce");
              }
            }).start();
            tween(this.node).delay(0.05).call(function () {
              tween(_this3.m_symbol[1][1]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[1][1].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
            tween(this.node).delay(0.1).call(function () {
              tween(_this3.m_symbol[1][2]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[1][2].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
            tween(this.node).delay(0.15).call(function () {
              tween(_this3.m_symbol[1][3]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[1][3].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start(); // 第一排

            tween(this.node).delay(0.1).call(function () {
              tween(_this3.m_symbol[0][0]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[0][0].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
            tween(this.node).delay(0.15).call(function () {
              tween(_this3.m_symbol[0][1]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[0][1].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
            tween(this.node).delay(0.2).call(function () {
              tween(_this3.m_symbol[0][2]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[0][2].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
            tween(this.node).delay(0.25).call(function () {
              tween(_this3.m_symbol[0][3]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[0][3].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start(); // 第三排

            tween(this.node).delay(0.2).call(function () {
              tween(_this3.m_symbol[2][0]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[2][0].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
            tween(this.node).delay(0.25).call(function () {
              tween(_this3.m_symbol[2][1]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[2][1].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
            tween(this.node).delay(0.3).call(function () {
              tween(_this3.m_symbol[2][2]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[2][2].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
            tween(this.node).delay(0.35).call(function () {
              tween(_this3.m_symbol[2][3]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[2][3].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start(); // 第四排

            tween(this.node).delay(0.3).call(function () {
              tween(_this3.m_symbol[3][0]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[3][0].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
            tween(this.node).delay(0.35).call(function () {
              tween(_this3.m_symbol[3][1]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[3][1].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
            tween(this.node).delay(0.4).call(function () {
              tween(_this3.m_symbol[3][2]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[3][2].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
            tween(this.node).delay(0.45).call(function () {
              tween(_this3.m_symbol[3][3]).by(spinSpeed, {
                position: v3(0, -(_this3.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this3.m_symbol[3][3].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            }).start();
          } else {
            var _value = Math.floor(Math.random() * 5);

            for (var i = 0; i < GS_Define.PLATE_SIZE; i++) {
              for (var j = 0; j < GS_Define.PLATE_SIZE; j++) {
                if (this.m_symbol[i][j].getComponent(Symbol).SymbolType === _value) {
                  var symbolSpriteFrames = this.m_define["Symbol" + GS_Define.PLATE_SIZE + "SpriteFrame"];
                  this.m_gameView.SetBgChangeHint(true, symbolSpriteFrames[_value]);
                  this.m_symbol[i][j].getComponent(Symbol).SymbolType = 5;
                  this.m_symbol[i][j].getComponent(Symbol).ChangeSymbol(this.m_symbolSpriteFrames[5]);
                }
              }
            }
          }

          var isSpecial = false;
          var cntSpecial = 0;
          var connectedValues; // 重複

          for (var t = 0; t <= 20; t += 2.5) {
            // 收集巧克力
            tween(this.node).delay(1 + t).call(function () {
              isSpecial = false;
              cntSpecial = 0;

              for (var _i2 = 0; _i2 < GS_Define.PLATE_SIZE; _i2++) {
                for (var _j2 = 0; _j2 < GS_Define.PLATE_SIZE; _j2++) {
                  if (_this3.m_symbol[_i2][_j2].getComponent(Symbol).SymbolType === 6) {
                    isSpecial = true;
                    cntSpecial++;

                    _this3.m_gameView.candyDrop();

                    tween(_this3.m_symbol[_i2][_j2]).to(0.3, {
                      position: v3(250, 85)
                    }).start();
                  }
                }
              }

              if (isSpecial) _this3.m_gameView.showgetelement(cntSpecial);
            }).start(); // 計算與消除

            tween(this.node).delay(1.5 + t).call(function () {
              connectedValues = _this3.findConnectedNumbers();

              if (_this3.m_gameView.cntPress !== 10 && _this3.m_gameView.cntPress !== 22 // 22先改15
              ) {
                  if (connectedValues.length > 0) {
                    for (var ii = 0; ii < GS_Define.PLATE_SIZE; ii++) {
                      for (var jj = 0; jj < GS_Define.PLATE_SIZE; jj++) {
                        _this3.m_symbol[ii][jj].getComponent(Symbol).SetDark();
                      }
                    }
                  } else _this3.isFinish = true;

                  log("有成功判嗎" + connectedValues.length);

                  for (var _iterator = _createForOfIteratorHelperLoose(connectedValues), _step; !(_step = _iterator()).done;) {
                    var values = _step.value;

                    _this3.m_gameView.Showcombo();

                    var isFirst = true;

                    for (var _iterator2 = _createForOfIteratorHelperLoose(values), _step2; !(_step2 = _iterator2()).done;) {
                      var _value2 = _step2.value;

                      _this3.m_gameView.ShowExplode(_value2.x, _value2.y, isFirst, values.length);

                      isFirst = false;
                    }

                    _this3.m_gameView.showHistory(_this3.m_gameView.IsInFreeGame);
                  }
                }
            }).start(); // 掉落

            tween(this.node).delay(2 + t).call(function () {
              for (var ii = 0; ii < GS_Define.PLATE_SIZE; ii++) {
                for (var jj = 0; jj < GS_Define.PLATE_SIZE; jj++) {
                  _this3.m_symbol[ii][jj].getComponent(Symbol).SetLight();
                }
              }

              if (connectedValues.length > 0 || isSpecial) _this3.TileMatching();else return;
            }).start(); // 補齊

            tween(this.node).delay(2.5 + t).call(function () {
              if (connectedValues.length > 0 || isSpecial) _this3.PatchUp();
            }).start();
          }
          /*
          // 收集巧克力
          let isSpecial = false;
          let cntSpecial = 0;
          tween(this.node)
            .delay(1)
            .call(() => {
              for (let i = 0; i < GS_Define.PLATE_SIZE; i++) {
                for (let j = 0; j < GS_Define.PLATE_SIZE; j++) {
                  if (this.m_symbol[i][j].getComponent(Symbol).SymbolType === 6) {
                    isSpecial = true;
                    cntSpecial++;
                      tween(this.m_symbol[i][j])
                      .to(0.3, { position: v3(250, 85) })
                      .start();
                  }
                }
              }
              if (isSpecial) this.m_gameView.showgetelement(cntSpecial);
            })
            .start();
            tween(this.node)
            .delay(1.5)
            .call(() => {
              for (const values of connectedValues) {
                this.m_gameView.Showcombo();
                for (const value of values) {
                  this.m_gameView.ShowExplode(value.x, value.y);
                }
                this.m_gameView.showHistory();
              }
            })
            .start();
            // 掉落
          tween(this.node)
            .delay(2)
            .call(() => {
              if (connectedValues.length > 0 || isSpecial) this.TileMatching();
              else return;
            })
            .start();
            // 補齊
          tween(this.node)
            .delay(2.5)
            .call(() => {
              if (connectedValues.length > 0 || isSpecial) this.PatchUp();
            })
            .start();
            // 第二次
          // 消除
            tween(this.node)
            .delay(4)
            .call(() => {
              connectedValues = this.findConnectedNumbers();
              log("第二次找：" + connectedValues.length);
              if (connectedValues.length > 0) {
                for (const values of connectedValues) {
                  this.m_gameView.Showcombo();
                  for (const value of values) {
                    this.m_gameView.ShowExplode(value.x, value.y);
                  }
                  this.m_gameView.showHistory();
                }
              }
            })
            .start();
            // 掉落
          tween(this.node)
            .delay(4.5)
            .call(() => {
              if (connectedValues.length > 0 || isSpecial) this.TileMatching();
              else return;
            })
            .start();
            // 補齊
          tween(this.node)
            .delay(5)
            .call(() => {
              if (connectedValues.length > 0 || isSpecial) this.PatchUp();
            })
            .start();
            // 第三次
          // 消除
          tween(this.node)
            .delay(6.5)
            .call(() => {
              connectedValues = this.findConnectedNumbers();
              log("第三次找：" + connectedValues.length);
              if (connectedValues.length > 0) {
                for (const values of connectedValues) {
                  this.m_gameView.Showcombo();
                  for (const value of values) {
                    this.m_gameView.ShowExplode(value.x, value.y);
                  }
                  this.m_gameView.showHistory();
                }
              }
            })
            .start();
            // 掉落
          tween(this.node)
            .delay(7)
            .call(() => {
              if (connectedValues.length > 0 || isSpecial) this.TileMatching();
              else return;
            })
            .start();
            // 補齊
          tween(this.node)
            .delay(7.5)
            .call(() => {
              if (connectedValues.length > 0 || isSpecial) this.PatchUp();
            })
            .start();
            // 第四次
          // 消除
          tween(this.node)
            .delay(9)
            .call(() => {
              connectedValues = this.findConnectedNumbers();
              if (connectedValues.length > 0) {
                for (const values of connectedValues) {
                  this.m_gameView.Showcombo();
                  for (const value of values) {
                    this.m_gameView.ShowExplode(value.x, value.y);
                  }
                  this.m_gameView.showHistory();
                }
              }
            })
            .start();
            // 掉落
          tween(this.node)
            .delay(9.5)
            .call(() => {
              if (connectedValues.length > 0 || isSpecial) this.TileMatching();
              else return;
            })
            .start();
            // 補齊
          tween(this.node)
            .delay(10)
            .call(() => {
              if (connectedValues.length > 0 || isSpecial) this.PatchUp();
            })
            .start();
            // 第五次
          // 消除
          tween(this.node)
            .delay(11.5)
            .call(() => {
              connectedValues = this.findConnectedNumbers();
              if (connectedValues.length > 0) {
                for (const values of connectedValues) {
                  this.m_gameView.Showcombo();
                  for (const value of values) {
                    this.m_gameView.ShowExplode(value.x, value.y);
                  }
                  this.m_gameView.showHistory();
                }
              }
            })
            .start();
            // 掉落
          tween(this.node)
            .delay(12)
            .call(() => {
              if (connectedValues.length > 0 || isSpecial) this.TileMatching();
              else return;
            })
            .start();
            // 補齊
          tween(this.node)
            .delay(12.5)
            .call(() => {
              if (connectedValues.length > 0 || isSpecial) this.PatchUp();
            })
            .start();*/

        }
        /*
        findConnectedNumbers(): Vec3[][] {
          const visited: boolean[][] = Array.from(
            { length: GS_Define.PLATE_SIZE },
            () => Array(GS_Define.PLATE_SIZE).fill(false)
          );
          //const connectedValues: Set<number> = new Set<number>();
          const connectedPositions: Vec3[][] = [];
            for (let x = 0; x < GS_Define.PLATE_SIZE; ++x) {
            for (let y = 0; y < GS_Define.PLATE_SIZE; ++y) {
              if (!visited[x][y]) {
                const positions: Vec3[] = [];
                let count = 0;
                if (this.m_symbol[x][y].getComponent(Symbol).SymbolType !== 5) {
                  count = this.dfs(
                    visited,
                    x,
                    y,
                    this.m_symbol[x][y].getComponent(Symbol).SymbolType,
                    positions
                  );
                }
                  if (count >= GS_Define.PLATE_SIZE) connectedPositions.push(positions);
              }
            }
          }
            return connectedPositions;
        }*/
        ;

        _proto.findConnectedNumbers = function findConnectedNumbers() {
          var visited = Array.from({
            length: GS_Define.PLATE_SIZE
          }, function () {
            return Array(GS_Define.PLATE_SIZE).fill(false);
          });
          var connectedPositions = [];

          for (var x = 0; x < GS_Define.PLATE_SIZE; ++x) {
            for (var y = 0; y < GS_Define.PLATE_SIZE; ++y) {
              if (!visited[x][y]) {
                var symbolType = this.m_symbol[x][y].getComponent(Symbol).SymbolType; // 跳過 SymbolType 為 5 的元素

                if (symbolType !== 5 && symbolType !== 6) {
                  // SymbolType 6 被視為阻擋
                  var positions = [];
                  var count = this.dfs(visited, x, y, symbolType, positions);

                  if (count >= GS_Define.PLATE_SIZE) {
                    connectedPositions.push(positions);
                  }
                }
              }
            }
          }

          return connectedPositions;
        };

        _proto.hideSymbol = function hideSymbol(x, y) {
          var symbol = this.m_symbol[x][y].getComponent(Symbol);
          symbol.SymbolType = -1;
          symbol.ChangeSymbol(this.m_symbolSpriteFrames[-1]);
        }
        /*
        dfs(
          visited: boolean[][],
          x: number,
          y: number,
          currentValue: number,
          positions: Vec3[]
        ): number {
          // 方向向量：上、下、左、右
          const directions: number[][] = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
          ];
          visited[x][y] = true;
          positions.push(new Vec3(x, y, 0));
          let count = 1;
            for (const direction of directions) {
            const newX = x + direction[0];
            const newY = y + direction[1];
              if (
              this.isValid_(newX, newY, visited) &&
              this.m_symbol[newX][newY].getComponent(Symbol).SymbolType !== 6
            ) {
              if (
                this.m_symbol[newX][newY].getComponent(Symbol).SymbolType ===
                  currentValue ||
                this.m_symbol[newX][newY].getComponent(Symbol).SymbolType === 5
              )
                count += this.dfs(visited, newX, newY, currentValue, positions);
            }
          }
            return count;
        }*/
        ;

        _proto.dfs = function dfs(visited, x, y, currentValue, positions) {
          var directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
          visited[x][y] = true;
          positions.push(new Vec3(x, y, 0));
          var count = 1;

          for (var _i3 = 0, _directions = directions; _i3 < _directions.length; _i3++) {
            var direction = _directions[_i3];
            var newX = x + direction[0];
            var newY = y + direction[1];

            if (this.isValid_(newX, newY, visited) && this.m_symbol[newX][newY].getComponent(Symbol).SymbolType !== 6) {
              var neighborSymbolType = this.m_symbol[newX][newY].getComponent(Symbol).SymbolType;

              if (neighborSymbolType === currentValue || neighborSymbolType === 5 // 將 SymbolType 5 視為匹配任何 currentValue
              ) {
                  count += this.dfs(visited, newX, newY, currentValue, positions);
                }
            }
          }

          return count;
        };

        _proto.isValid_ = function isValid_(x, y, visited) {
          return x >= 0 && x < GS_Define.PLATE_SIZE && y >= 0 && y < GS_Define.PLATE_SIZE && !visited[x][y];
        } //TODO盤面上未被消除的symbol掉落到定位
        ;

        _proto.TileMatching = function TileMatching() {
          log("進入TileMatching");

          for (var i = 0; i < this.m_symbol.length; i++) {
            var cnt = 0;

            for (var j = 0; j < this.m_symbol[i].length; j++) {
              if (this.m_symbol[i][j].getComponent(Symbol).SymbolType === -1 || this.m_symbol[i][j].getComponent(Symbol).SymbolType === 6) ++cnt;else {
                tween(this.m_symbol[i][j]).by(0.5, {
                  position: v3(0, -this.m_symbolSize.height * cnt, 0)
                }).call(function () {}).start();

                if (cnt > 0) {
                  var tmp = this.m_symbol[i][j - cnt];
                  this.m_symbol[i][j - cnt] = this.m_symbol[i][j];
                  this.m_symbol[i][j] = tmp;
                  /*this.m_symbol[i][j + cnt] = this.m_symbol[i][j];
                  this.m_symbol[i][j] = null;*/
                }
              }
            }
          }
        } //TODO 天降新的Symbol補齊盤面
        ;

        _proto.PatchUp = function PatchUp() {
          var _this4 = this;

          log("進入PatchUp");
          var cntArray = [];

          for (var i = 0; i < this.m_symbol.length; i++) {
            var cnt = 0;

            for (var j = 0; j < this.m_symbol[i].length; j++) {
              if (this.m_symbol[i][j].getComponent(Symbol).SymbolType === -1 || this.m_symbol[i][j].getComponent(Symbol).SymbolType === 6) ++cnt;
            }

            cntArray.push(cnt);
          }

          log("有幾個：" + cntArray);
          var startX = this.m_startPos[GS_Define.PLATE_SIZE - 4].x * this.m_symbolSize.width;
          var startY = this.m_startPos[GS_Define.PLATE_SIZE - 4].y * this.m_symbolSize.height;

          var _loop = function _loop(_i4) {
            var _loop2 = function _loop2(_j3) {
              var special = Math.floor(Math.random() * 50); ////////////////50

              var value = Math.floor(Math.random() * 5);
              var node = instantiate(_this4.m_symbolPrefab);

              _this4.node.addChild(node);

              Tools.SetZIndex(node, Z_INDEX.SYMBOL);
              var symbol = node.getComponent(Symbol);

              if (special === -1 && !_this4.m_gameView.m_isInFreeGame) {
                symbol.SymbolType = 6;
                symbol.ChangeSymbol(_this4.m_symbolSpriteFrames[6]);
              } else {
                symbol.SymbolType = value;
                symbol.ChangeSymbol(_this4.m_symbolSpriteFrames[value]);
              }

              var x = _this4.m_symbolSize.width * (_i4 + 0.5) + _this4.m_reelPositionOffset[_i4].x - _this4.m_viewSize.width / 2 + startX;
              var y = _this4.m_symbolSize.height * (GS_Define.PLATE_SIZE - 1 - _j3 + 0.5) + _this4.m_reelPositionOffset[_i4].y - _this4.m_viewSize.height / 2 + startY + _this4.m_viewSize.height * 2;
              x = Tools.strip(x);
              y = Tools.strip(y);
              node.setPosition(x, y, 0);
              _this4.m_symbol[_i4][GS_Define.PLATE_SIZE - 1 - _j3] = node;
              tween(_this4.m_symbol[_i4][GS_Define.PLATE_SIZE - 1 - _j3]).by(1, {
                position: v3(0, -(_this4.m_viewSize.height * 2), 0)
              }).call(function () {
                var animation = _this4.m_symbol[_i4][GS_Define.PLATE_SIZE - 1 - _j3].getComponent(Animation);

                if (animation) {
                  animation.play("gem_bounce");
                }
              }).start();
            };

            for (var _j3 = 0; _j3 < cntArray[_i4]; _j3++) {
              _loop2(_j3);
            }
          };

          for (var _i4 = 0; _i4 < GS_Define.PLATE_SIZE; _i4++) {
            _loop(_i4);
          }
        };

        _proto.ShowDarkOrLightSymbol = function ShowDarkOrLightSymbol(isDard) {
          if (this.m_isHardStop) {
            return;
          }

          for (var col = 0; col < GS_Define.PLATE_SIZE; col++) {
            for (var row = 0; row < GS_Define.PLATE_SIZE; row++) {
              var symbol = this.m_symbol[col][row].getComponent(Symbol);

              if (isDard) {
                symbol.SetDark();
              } else {
                symbol.SetLight();
              }
            }
          }
        } //換成下個盤面
        ;

        _proto.ChangeToNext = function ChangeToNext(plate, tag, combo) {
          this.m_plate = plate;
          this.m_tag = tag;
          this.m_comboPlate = combo;
        } //TODO 調整盤面大小
        ;

        _proto.ChangePlateSize = function ChangePlateSize() {};

        _proto.ResetPos = function ResetPos() {
          var startX = this.m_startPos[GS_Define.PLATE_SIZE - 4].x * this.m_symbolSize.width;
          var startY = this.m_startPos[GS_Define.PLATE_SIZE - 4].y * this.m_symbolSize.height;

          while (this.m_orgPos.length > 0) {
            var pos = this.m_orgPos.pop();

            while (pos.length > 0) {
              pos.pop();
            }
          }

          for (var col = 0; col < GS_Define.PLATE_SIZE; col++) {
            var _pos = new Array();

            for (var row = 0; row < GS_Define.PLATE_SIZE; row++) {
              var x = this.m_symbolSize.width * (col + 0.5) + this.m_reelPositionOffset[col].x - this.m_viewSize.width / 2 + startX;
              var y = this.m_symbolSize.height * (row + 0.5) + this.m_reelPositionOffset[col].y - this.m_viewSize.height / 2 + startY;
              this.m_symbol[col][row].setPosition(x, y, 0);

              _pos.push(v3(x, y, 0));
            }

            this.m_orgPos.push(_pos);
          }
        } //請自行注意順序，要從後面往前消
        ;

        _proto.RemoveSymbol = function RemoveSymbol(pos) {
          log("看看吧：");

          if (this.m_symbol && this.m_symbol[pos.x] && this.m_symbol[pos.x][pos.y]) {
            log("有吧");
            this.m_symbol[pos.x][pos.y].removeFromParent();
            this.m_symbol[pos.x].splice(pos.y, 1);
          }
        } //依給予的x、y取得symbol的node
        ;

        _proto.GetSymbolByPosition = function GetSymbolByPosition(pos) {
          if (0 <= pos.x && pos.x < GS_Define.PLATE_SIZE && 0 <= pos.y && pos.y < GS_Define.PLATE_SIZE) {
            return this.m_symbol[pos.x][pos.y];
          }

          return null;
        };

        _proto.GetSymbolSpriteFrame = function GetSymbolSpriteFrame(index) {
          if (index >= 0 && index < this.m_symbolSpriteFrames.length) {
            return this.m_symbolSpriteFrames[index];
          } else {
            return null;
          }
        };

        _proto.Change2Wild = function Change2Wild(pos) {
          if (pos.x >= 0 && pos.x < GS_Define.PLATE_SIZE && pos.y >= 0 && pos.y < GS_Define.PLATE_SIZE) {
            var symbol = this.m_symbol[pos.x][pos.y].getComponent(Symbol);
            symbol.SymbolType = GS_Define.WILD_SYMBOL;
            symbol.ChangeSymbol(this.m_symbolSpriteFrames[GS_Define.WILD_SYMBOL]);
          }
        };

        _createClass(SlotReels, [{
          key: "IsHardStop",
          get: function get() {
            return this.m_isHardStop;
          }
        }, {
          key: "IsPlateCleaned",
          get: function get() {
            return this.m_isPlateCleaned;
          }
        }, {
          key: "IsPatchUpFinished",
          get: function get() {
            return this.m_isPatchUpFinished;
          }
        }, {
          key: "IsMatchingFinished",
          get: function get() {
            return this.m_isMatchingFinished;
          }
        }, {
          key: "IsInitStop",
          get: function get() {
            return this.m_isInitStop;
          }
        }]);

        return SlotReels;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_define", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_symbolPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Symbol.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, UIRenderer, color, Component;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      UIRenderer = module.UIRenderer;
      color = module.color;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;

      cclegacy._RF.push({}, "e741es7sLRB0pWyhSIrZSpK", "Symbol", undefined);
      /**
       * 寶石跳動、升級素材飛行使用
       */


      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var Symbol = exports('default', (_dec = property(Sprite), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Symbol, _Component);

        function Symbol() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_sprite", _descriptor, _assertThisInitialized(_this));

          _this.m_animCb = null;
          _this.m_symbolType = -1;
          return _this;
        }

        var _proto = Symbol.prototype;

        _proto.SetDark = function SetDark() {
          this.m_sprite.node.getComponent(UIRenderer).color = color(135, 126, 98);
        };

        _proto.SetLight = function SetLight() {
          this.m_sprite.node.getComponent(UIRenderer).color = color(255, 255, 255);
        };

        _proto.ChangeSymbol = function ChangeSymbol(spriteFrame) {
          this.m_sprite.spriteFrame = spriteFrame;
        };

        _proto.AnimCallback = function AnimCallback(event) {
          if (this.m_animCb) {
            this.m_animCb(event);
          }
        };

        _createClass(Symbol, [{
          key: "SpriteFrame",
          get: function get() {
            return this.m_sprite.spriteFrame;
          }
        }, {
          key: "AnimCb",
          set: function set(v) {
            this.m_animCb = v;
          }
        }, {
          key: "SymbolType",
          get: function get() {
            return this.m_symbolType;
          },
          set: function set(v) {
            this.m_symbolType = v;
          }
        }]);

        return Symbol;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_sprite", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Wheel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tools.ts', './SoundManager.ts', './GameView.ts', './LocaleStringManager.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Button, Animation, Sprite, log, tween, v3, error, Tween, Component, Tools, SoundManager, FADE_TYPE, LocaleStringManager;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      Animation = module.Animation;
      Sprite = module.Sprite;
      log = module.log;
      tween = module.tween;
      v3 = module.v3;
      error = module.error;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      Tools = module.default;
    }, function (module) {
      SoundManager = module.default;
    }, function (module) {
      FADE_TYPE = module.FADE_TYPE;
    }, function (module) {
      LocaleStringManager = module.default;
    }],
    execute: function () {
      exports('FeatureGameType', void 0);

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;

      cclegacy._RF.push({}, "3f20akvdN5H5K6By+GvWPk/", "Wheel", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var State;

      (function (State) {
        State[State["NONE"] = 0] = "NONE";
        State[State["START_SPIN"] = 1] = "START_SPIN";
        State[State["SPINNING"] = 2] = "SPINNING";
        State[State["END_SPIN"] = 3] = "END_SPIN";
        State[State["SHOW_GET_AWARD"] = 4] = "SHOW_GET_AWARD";
        State[State["END"] = 5] = "END";
      })(State || (State = {}));

      var FeatureGameType;

      (function (FeatureGameType) {
        FeatureGameType[FeatureGameType["FG"] = 0] = "FG";
        FeatureGameType[FeatureGameType["BG"] = 1] = "BG";
        FeatureGameType[FeatureGameType["MUL"] = 2] = "MUL";
        FeatureGameType[FeatureGameType["MINI"] = 3] = "MINI";
        FeatureGameType[FeatureGameType["MINOR"] = 4] = "MINOR";
        FeatureGameType[FeatureGameType["MAJOR"] = 5] = "MAJOR";
        FeatureGameType[FeatureGameType["GRAND"] = 6] = "GRAND";
      })(FeatureGameType || (FeatureGameType = exports('FeatureGameType', {})));

      var OutBaseAngle = 72;
      var InBaseAngle = 90;
      var Type2AngleIndex = {
        0: [1, 4],
        1: [0, 2],
        2: [3],
        // null
        3: [3],
        4: [3],
        5: [3],
        6: [3]
      };
      var Round2Index = ["x1", "x2", "x3", "x4", "x5"];
      var InnerAngleIndex = {
        x2: 0,
        x5: 1,
        x3: 2,
        x4: 3
      };
      var JpAngleIndex = {};
      var SPIN_FILE_NAME = "Wheel_frame_SPIN";
      var STOP_FILE_NAME = "Wheel_frame_STOP";
      var Wheel = exports('default', (_dec = property({
        type: Node,
        tooltip: "背景"
      }), _dec2 = property({
        type: Node,
        tooltip: "外圈轉輪"
      }), _dec3 = property({
        type: Node,
        tooltip: "外輪中獎遮罩"
      }), _dec4 = property({
        type: Node,
        tooltip: "內圈轉輪"
      }), _dec5 = property({
        type: Node,
        tooltip: "內輪中獎遮罩"
      }), _dec6 = property({
        type: Button,
        tooltip: "spin鈕"
      }), _dec7 = property({
        type: Animation,
        tooltip: "spin的特效"
      }), _dec8 = property({
        type: Sprite,
        tooltip: "轉輪標題"
      }), _dec9 = property({
        type: Sprite,
        tooltip: "FG文字"
      }), _dec10 = property({
        type: Sprite,
        tooltip: "BG文字"
      }), _dec11 = property({
        type: Sprite,
        tooltip: "JP文字"
      }), _dec12 = property({
        type: Sprite,
        tooltip: "內輪的文字"
      }), _dec13 = property({
        type: Sprite,
        tooltip: "spin的圖片"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Wheel, _Component);

        function Wheel() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_bgNode", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_outerWheelNode", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_outHitMaskNode", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_innerWheelNode", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_inHitMaskNode", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_spinBtn", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_spinAnim", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_wheelTitleSprite", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_fgSprites", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_bgSprites", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_jpSprites", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_innerSprites", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_spinSprite", _descriptor13, _assertThisInitialized(_this));

          _this.m_currentTouchName = null;
          _this.m_gameType = null;
          _this.m_angleIndex = -1;
          _this.m_outFinalAngle = 0;
          _this.m_outNowAngle = 0;
          _this.m_inFinalAngle = 0;
          _this.m_inNowAngle = 0;
          _this.m_isOutStart = false;
          _this.m_isInStart = false;
          _this.m_outTime = 0;
          _this.m_inTime = 0;
          _this.m_maxSpeed = 720;
          _this.m_upTime = 0.2;
          _this.m_upSpeedUp = 0;
          _this.m_baseRound = 2;
          _this.m_slowTotalTime = 4.5;
          _this.m_outSlowTotalTime = 0;
          _this.m_inSlowTotalTime = 0;
          _this.m_outSlowTime = 0;
          _this.m_inSlowTime = 0;
          _this.m_outSlowAngle = 0;
          _this.m_inSlowAngle = 0;
          _this.m_isOutOver = false;
          _this.m_isInOver = false;
          _this.m_wheelEndCb = null;
          _this.m_hasSetting = false;
          _this.m_isShowing = false;
          _this.m_gameView = null;
          _this.m_soundId = null;
          return _this;
        }

        var _proto = Wheel.prototype;

        _proto.start = function start() {};

        _proto.Init = function Init() {
          var _this2 = this;

          JpAngleIndex[FeatureGameType.MINI] = 1;
          JpAngleIndex[FeatureGameType.MINOR] = 2;
          JpAngleIndex[FeatureGameType.MAJOR] = 3;
          JpAngleIndex[FeatureGameType.GRAND] = 0;
          this.m_spinBtn.node.on(Node.EventType.TOUCH_START, function (event) {
            event.propagationImmediateStopped = true;
            event.propagationStopped = true;

            if (_this2.m_currentTouchName == null && _this2.m_spinBtn.interactable) {
              _this2.m_currentTouchName = event.target.name;
            } else {
              if (event.target && event.target.active == false) {
                _this2.m_currentTouchName = event.target.name;
              }
            }
          });
          this.m_spinBtn.node.on(Node.EventType.TOUCH_CANCEL, function (event) {
            if (_this2.m_currentTouchName == event.target.name) {
              _this2.m_currentTouchName = null;
            }
          });
          this.m_spinBtn.node.on(Node.EventType.TOUCH_END, function (event) {
            if (_this2.m_currentTouchName != event.target.name) {
              return;
            }

            _this2.m_currentTouchName = null;
            log("this.m_gameView.IsWheelSpin", _this2.m_gameView.IsWheelSpin);

            if (!_this2.m_isShowing) {
              if (!_this2.m_gameView.IsWheelSpin) {
                var angle = -_this2.m_outerWheelNode.angle;

                if (angle > 0 && _this2.m_hasSetting) {
                  tween(_this2.m_outerWheelNode).to(angle / 90, {
                    eulerAngles: v3(0, 0, 0)
                  }).call(function () {
                    _this2.StartSpin();
                  }).start();
                } else {
                  _this2.StartSpin();
                }
              } else {
                _this2.StopSpin();
              }
            }
          });
          this.m_upSpeedUp = Tools.divide(this.m_maxSpeed, this.m_upTime);
        };

        _proto.update = function update(dt) {
          //外輪
          if (this.m_isOutStart) {
            this.m_outTime = Tools.strip(this.m_outTime + dt); //加速

            if (this.m_outTime < this.m_upTime) {
              this.m_outNowAngle = Tools.divide(Tools.times(this.m_upSpeedUp, this.m_outTime, this.m_outTime), 2);
              this.m_outerWheelNode.angle = -this.m_outNowAngle;
            } //均速，加減速補齊的量也在此跑完
            else if (this.m_outNowAngle < Tools.strip(this.m_outFinalAngle - this.m_outSlowAngle)) {
                this.m_outNowAngle = Tools.strip(Tools.divide(Tools.times(this.m_maxSpeed, this.m_upTime), 2) + Tools.times(this.m_maxSpeed, Tools.strip(this.m_outTime - this.m_upTime)));

                if (this.m_outNowAngle > Tools.strip(this.m_outFinalAngle - this.m_outSlowAngle)) {
                  this.m_outNowAngle = Tools.strip(this.m_outFinalAngle - this.m_outSlowAngle);
                }

                this.m_outerWheelNode.angle = -this.m_outNowAngle;
              } //緩減速
              else if (-this.m_outerWheelNode.angle < this.m_outFinalAngle) {
                  this.m_outSlowTime = Tools.strip(this.m_outSlowTime + dt);
                  var outAngle = 0;

                  if (this.m_outSlowTime > this.m_outSlowTotalTime) {
                    this.m_outSlowTime = this.m_outSlowTotalTime;
                    outAngle = this.m_outFinalAngle;
                  } else {
                    outAngle = Tools.strip(this.m_outNowAngle + Tools.strip(Tools.times(this.m_maxSpeed, this.m_outSlowTime) - Tools.times(this.m_maxSpeed, Tools.divide(Tools.times(this.m_outSlowTime, this.m_outSlowTime), this.m_outSlowTotalTime, 2))));
                  }

                  if (outAngle > this.m_outFinalAngle) {
                    outAngle = this.m_outFinalAngle;
                  }

                  this.m_outerWheelNode.angle = -outAngle;
                } else {
                  this.m_outerWheelNode.angle = -this.m_outFinalAngle;
                  this.m_isOutStart = false;
                  log("out stop", this.m_outTime);
                  this.ShowInner();
                }
          } //內輪


          if (this.m_isInStart) {
            this.m_inTime = Tools.strip(this.m_inTime + dt);

            if (this.m_inTime < this.m_upTime) {
              this.m_inNowAngle = -Tools.divide(Tools.times(this.m_upSpeedUp, this.m_inTime, this.m_inTime), 2);
              this.m_innerWheelNode.angle = -this.m_inNowAngle;
            } //均速，加減速補齊的量也在此跑完
            else if (this.m_inNowAngle > Tools.strip(this.m_inFinalAngle - this.m_inSlowAngle)) {
                this.m_inNowAngle = -Tools.strip(Tools.divide(Tools.times(this.m_maxSpeed, this.m_upTime), 2) + Tools.times(this.m_maxSpeed, Tools.strip(this.m_inTime - this.m_upTime)));

                if (this.m_inNowAngle < Tools.strip(this.m_inFinalAngle - this.m_inSlowAngle)) {
                  this.m_inNowAngle = Tools.strip(this.m_inFinalAngle - this.m_inSlowAngle);
                }

                this.m_innerWheelNode.angle = -this.m_inNowAngle;
              } //緩減速
              else if (-this.m_innerWheelNode.angle > this.m_inFinalAngle) {
                  this.m_inSlowTime = Tools.strip(this.m_inSlowTime + dt);
                  var inAngle = 0;

                  if (this.m_inSlowTime > this.m_inSlowTotalTime) {
                    this.m_inSlowTime = this.m_inSlowTotalTime;
                    inAngle = this.m_inFinalAngle;
                  } else {
                    inAngle = Tools.strip(this.m_inNowAngle - Tools.strip(Tools.times(this.m_maxSpeed, this.m_inSlowTime) - Tools.times(this.m_maxSpeed, Tools.divide(Tools.times(this.m_inSlowTime, this.m_inSlowTime), this.m_inSlowTotalTime, 2))));
                  }

                  if (inAngle < this.m_inFinalAngle) {
                    inAngle = this.m_inFinalAngle;
                  }

                  log("slow", (inAngle - this.m_innerWheelNode.angle) / dt);
                  this.m_innerWheelNode.angle = -inAngle;
                } else {
                  this.m_innerWheelNode.angle = -this.m_inFinalAngle;
                  this.m_isInStart = false;
                  log("this.m_inTime", this.m_inTime);
                  this.Hide();
                }
          }
        };

        _proto.LockSpin = function LockSpin() {
          this.m_isShowing = true;
          this.m_bgNode.active = true;
        };

        _proto.Show = function Show(isAuto) {
          var _this3 = this;

          this.m_gameView.wheel_Rotate();
          log("有近show");
          this.node.active = true;
          this.node.getComponent(Animation).play("Wheel_Effect_Start");
          var animState = this.node.getComponent(Animation).getState("Wheel_Effect_Start");
          tween(this.node).delay(animState.duration).call(function () {
            _this3.node.getComponent(Animation).play("Wheel_Effect_Loop");

            _this3.m_gameView.IsWheelSpin = false;

            if (isAuto) {
              tween(_this3.node).delay(0.5).call(function () {
                _this3.StartSpin();

                _this3.m_isShowing = false;
              }).start();
            } else {
              _this3.StartCountDown();

              _this3.m_isShowing = false;
            }
          }).start();
        };

        _proto.SetGameType = function SetGameType(type, innerNumber, endCb) {
          var spriteAtlas = LocaleStringManager.GetInstance().GetGameAtlas();
          var indexArray = Type2AngleIndex[type];
          this.m_wheelEndCb = endCb;
          this.m_spinSprite.spriteFrame = spriteAtlas.getSpriteFrame(SPIN_FILE_NAME);

          if (indexArray) {
            this.m_gameType = type;
            this.m_angleIndex = Math.floor(Math.random() * indexArray.length);
            this.m_outerWheelNode.angle = 0;
            this.m_isOutOver = Math.random() > 0.5;
            var rand = Math.random() * 0.5;
            var outRandDelta = Tools.strip((OutBaseAngle - 2) * 0.5 * (0.5 + rand) * (this.m_isOutOver ? 1 : -1)); //偏移量

            var outExtra = Tools.times(Type2AngleIndex[this.m_gameType][this.m_angleIndex], OutBaseAngle) + outRandDelta; //減速的位移量

            this.m_outSlowAngle = Tools.strip( //緩減速位移量
            Tools.divide(Tools.times(this.m_slowTotalTime, this.m_maxSpeed), 2)); //加減訴的位移量

            var outUpSlowAngle = Tools.strip(Tools.times(this.m_maxSpeed, this.m_upTime, 0.5) + this.m_outSlowAngle); //加減速的位移量補到整數圈

            var outRound = Math.ceil(outUpSlowAngle / 360); //總位移量，加減速位移量+均速位移量+偏移量

            this.m_outFinalAngle = Tools.strip(Tools.times(outRound, 360) + Tools.times(this.m_maxSpeed, this.m_baseRound) + outExtra);
            this.m_outHitMaskNode.angle = -(outRandDelta - 0.5); //增加偏移量，到特定的位置

            this.m_outSlowAngle += outExtra; //因增加偏移量，所以不能用原訂的時間

            this.m_outSlowTotalTime = Tools.divide(Tools.times(this.m_outSlowAngle, 2), this.m_maxSpeed);
            log("outer", this.m_outFinalAngle, this.m_outSlowAngle, outExtra);
            this.m_innerWheelNode.angle = 0;
            this.m_isInOver = Math.random() > 0.5;
            var inExtra = 0;
            rand = Math.random() * 0.5;
            var inRandDelta = Tools.strip((InBaseAngle - 2) * 0.5 * (0.5 + rand) * (this.m_isInOver ? 1 : -1));
            log("inRandDelta", inRandDelta);

            switch (this.m_gameType) {
              case FeatureGameType.FG:
              case FeatureGameType.BG:
                {
                  var index = Round2Index[innerNumber];
                  inExtra = Tools.times(InnerAngleIndex[index], InBaseAngle) + inRandDelta;
                }
                break;

              case FeatureGameType.MINI:
              case FeatureGameType.MINOR:
              case FeatureGameType.MAJOR:
              case FeatureGameType.GRAND:
                {
                  var _index = JpAngleIndex[innerNumber];
                  inExtra = Tools.times(_index, InBaseAngle) + inRandDelta;
                }
                break;
            }

            switch (this.m_gameType) {
              case FeatureGameType.FG:
                for (var i = 0; i < this.m_innerSprites.length; i++) {
                  this.m_innerSprites[i].spriteFrame = spriteAtlas.getSpriteFrame("Wheel_txt_FG_" + "0" + (i + 1));
                }

                break;

              case FeatureGameType.BG:
                for (var _i = 0; _i < this.m_innerSprites.length; _i++) {
                  this.m_innerSprites[_i].spriteFrame = spriteAtlas.getSpriteFrame("Wheel_txt_BG_" + "0" + (_i + 1));
                }

                break;

              case FeatureGameType.MINI:
              case FeatureGameType.MINOR:
              case FeatureGameType.MAJOR:
              case FeatureGameType.GRAND:
                for (var _i2 = 0; _i2 < this.m_innerSprites.length; _i2++) {
                  this.m_innerSprites[_i2].spriteFrame = spriteAtlas.getSpriteFrame("Wheel_txt_JP_" + "0" + (_i2 + 1));
                }

                break;
            } //減速的位移量


            this.m_inSlowAngle = Tools.divide(Tools.times(this.m_slowTotalTime, this.m_maxSpeed), 2);
            var inUpSlowAngle = Tools.strip(Tools.times(this.m_maxSpeed, this.m_upTime, 0.5) + this.m_inSlowAngle);
            var inRound = Math.ceil(inUpSlowAngle / 360);
            this.m_inFinalAngle = -Tools.strip(Tools.times(inRound, 360) + Tools.times(this.m_maxSpeed, this.m_baseRound) + inExtra);
            this.m_inHitMaskNode.angle = inRandDelta;
            this.m_inSlowAngle += inExtra; //因增加偏移量，所以不能用原訂的時間

            this.m_inSlowTotalTime = Tools.divide(Tools.times(this.m_inSlowAngle, 2), this.m_maxSpeed);
            this.m_inSlowAngle = -this.m_inSlowAngle;
            this.m_hasSetting = true;
          } else {
            error("type not exist");
          }
        };

        _proto.StopSpin = function StopSpin() {
          log("StopSpin ??????");

          if (this.m_isOutStart) {
            if (this.m_soundId) {
              SoundManager.getInstance().Stop(this.m_soundId);
              this.m_soundId = null;
            }

            this.m_isOutStart = false;
            this.m_outerWheelNode.angle = -this.m_outFinalAngle;
            this.ShowInner(false);
          } else if (this.m_isInStart) {
            if (this.m_soundId) {
              SoundManager.getInstance().Stop(this.m_soundId);
              this.m_soundId = null;
            }

            this.m_isInStart = false;
            this.m_innerWheelNode.angle = -this.m_inFinalAngle;
            this.Hide();
            this.m_gameView.isSpinFinish = true; /////////////////轉完了

            log("改了" + this.m_gameView.isSpinFinish);
          }
        };

        _proto.StartSpin = function StartSpin() {
          log("開轉");
          {
            log("開轉轉StartSpin");
            this.m_spinAnim.play();
            this.m_gameView.IsWheelSpin = true;
            this.m_gameView.ChangeFadeType(FADE_TYPE.OUT);
            Tween.stopAllByTarget(this.node);
            this.node.getComponent(Animation).play("Wheel_Effect_Loop");
            this.m_outTime = 0;
            this.m_inTime = 0;
            this.m_outNowAngle = 0;
            this.m_inNowAngle = 0;
            this.m_outSlowTime = 0;
            this.m_inSlowTime = 0;
            this.m_hasSetting = false;
            this.m_isOutStart = true;
            var spriteAtlas = LocaleStringManager.GetInstance().GetGameAtlas();
            this.m_spinSprite.spriteFrame = spriteAtlas.getSpriteFrame(STOP_FILE_NAME);
          }
        };

        _proto.SetTxtByLocale = function SetTxtByLocale() {
          var spriteAtlas = LocaleStringManager.GetInstance().GetGameAtlas();
          this.m_wheelTitleSprite.spriteFrame = spriteAtlas.getSpriteFrame("a03");

          for (var i = 0; i < this.m_fgSprites.length; i++) {
            this.m_fgSprites[i].spriteFrame = spriteAtlas.getSpriteFrame("Wheel_txt_FG");
          }

          for (var _i3 = 0; _i3 < this.m_bgSprites.length; _i3++) {
            this.m_bgSprites[_i3].spriteFrame = spriteAtlas.getSpriteFrame("Wheel_txt_BG");
          }

          for (var _i4 = 0; _i4 < this.m_jpSprites.length; _i4++) {
            this.m_jpSprites[_i4].spriteFrame = spriteAtlas.getSpriteFrame("Wheel_txt_JP");
          }
        };

        _proto.ShowInner = function ShowInner(isShowDelay) {
          var _this4 = this;

          if (isShowDelay === void 0) {
            isShowDelay = true;
          }

          var delayAction = tween().delay(0);
          var delayTime = 0;
          this.node.getComponent(Animation).play("Wheel_Effect_Start2");
          var animState = this.node.getComponent(Animation).getState("Wheel_Effect_Start2");
          animState.pause();

          if (isShowDelay) {
            delayAction = tween().delay(0.5);
            delayTime = 0.5;
          }

          tween(this.node).delay(delayTime).call(function () {
            animState.resume();
          }).delay(0.5).call(function () {
            _this4.node.getComponent(Animation).play("Wheel_Effect_Loop");

            _this4.m_isInStart = true;
          }).start();
        };

        _proto.StartCountDown = function StartCountDown() {
          var _this5 = this; //log("有屬嗎");


          tween(this.node).delay(3).call(function () {
            _this5.StartSpin();
          }).start();
        };

        _proto.Hide = function Hide() {
          var _this6 = this;

          this.node.getComponent(Animation).play("Wheel_Effect_End");
          var animState = this.node.getComponent(Animation).getState("Wheel_Effect_End");
          tween(this.node).delay(animState.duration).call(function () {
            _this6.m_bgNode.active = false;

            if (_this6.m_wheelEndCb) {
              _this6.m_wheelEndCb();
            }
          }).start();
        };

        _createClass(Wheel, [{
          key: "GameView",
          set: function set(v) {
            this.m_gameView = v;
          }
        }]);

        return Wheel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_bgNode", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_outerWheelNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_outHitMaskNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "m_innerWheelNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "m_inHitMaskNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "m_spinBtn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "m_spinAnim", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "m_wheelTitleSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "m_fgSprites", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "m_bgSprites", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "m_jpSprites", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "m_innerSprites", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "m_spinSprite", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Win.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Tools.ts', './TimeBool.ts'], function (exports) {
  'use strict';

  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Enum, Label, Sprite, Animation, log, tween, Tween, Component, Tools, TimeBool;

  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Label = module.Label;
      Sprite = module.Sprite;
      Animation = module.Animation;
      log = module.log;
      tween = module.tween;
      Tween = module.Tween;
      Component = module.Component;
    }, function (module) {
      Tools = module.default;
    }, function (module) {
      TimeBool = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

      cclegacy._RF.push({}, "f63c7j4tj9OIasCZMzWdqT1", "Win", undefined);

      var ccclass = _decorator.ccclass,
          property = _decorator.property;
      var ADVANCE_TIME = [0.33, 0.7, 0.65];
      var WinType = Enum({
        None: 0,
        Congrats: 1,
        Win: 2
      });
      var Win = exports('default', (_dec = property({
        type: Enum(WinType),
        tooltip: "使用的類別"
      }), _dec2 = property({
        type: Label,
        tooltip: "贏分"
      }), _dec3 = property({
        type: Sprite,
        tooltip: "獎勵的標題"
      }), _dec4 = property({
        type: Sprite,
        tooltip: "總贏分"
      }), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Win, _Component);

        function Win() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_this, "m_type", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_winLabel", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_titleSprite", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "m_totalWinSprite", _descriptor4, _assertThisInitialized(_this));

          _this.m_win = 0;
          _this.m_showWin = 0;
          _this.m_endCb = null;
          _this.m_isStop = false;
          _this.m_timer = null;
          return _this;
        }

        var _proto = Win.prototype;

        _proto.start = function start() {};

        _proto.update = function update(dt) {
          if (this.m_timer) {
            this.m_timer.Update(dt * 1000);

            if (this.m_timer.ToBool()) {
              if (this.m_type === WinType.Win) {
                this.node.getComponent(Animation).play("Loop");
              }
            }
          }
        };

        _proto.GetWinNode = function GetWinNode() {
          return this.m_winLabel.node;
        };

        _proto.ChangeTitle = function ChangeTitle(spriteFrame, totalWinSpriteFrame) {
          if (this.m_titleSprite) {
            this.m_titleSprite.spriteFrame = spriteFrame;
          }

          if (this.m_totalWinSprite) {
            this.m_totalWinSprite.spriteFrame = totalWinSpriteFrame;
          }
        };

        _proto.Show = function Show(win, duration, lvl, gameView, endCb) {
          var _this2 = this;

          log("99999999999", duration, Tools.strip(duration - ADVANCE_TIME[lvl]));
          var times = Math.abs(Tools.divide(lvl === null ? duration : Tools.strip(duration - ADVANCE_TIME[lvl]), 0.02));
          var step = Math.abs(Tools.divide(win, times));
          this.m_win = win;
          this.m_endCb = endCb;
          this.m_showWin = 0;

          switch (this.m_type) {
            case WinType.Congrats:
              this.node.getComponent(Animation).play("Settle_main_start");
              break;

            case WinType.Win:
              this.node.getComponent(Animation).play("Start");
              var animState = this.node.getComponent(Animation).getState("Start");
              this.m_timer = new TimeBool();
              this.m_timer.UseDT(true);
              this.m_timer.Clear();
              this.m_timer.Start(Tools.times(animState.duration, 1000));
              break;
          }

          tween(this.node).repeat(times, tween().call(function () {
            _this2.m_showWin = Tools.strip(_this2.m_showWin + step);

            if (_this2.m_showWin >= win || Math.abs(win - _this2.m_showWin) < step) {
              _this2.m_showWin = Tools.strip(win);
            }

            _this2.m_winLabel.string = Tools.FormatNumberThousands(gameView.GetDisplayValue(_this2.m_showWin), Tools.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }).delay(0.02)).call(function () {
            if (_this2.m_endCb) {
              _this2.m_endCb();

              _this2.m_endCb = null;
            }
          }).start();
        };

        _proto.AddWin = function AddWin(extraWin, gameView) {
          this.m_win = Tools.strip(this.m_win + extraWin);
          this.m_winLabel.string = Tools.FormatNumberThousands(gameView.GetDisplayValue(this.m_win), Tools.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
        };

        _proto.End = function End(gameView, endCb) {
          this.m_isStop = true;
          Tween.stopAllByTarget(this.node);
          this.m_winLabel.string = Tools.FormatNumberThousands(gameView.GetDisplayValue(this.m_win), Tools.FORMAT_NUMBER_TYPE.PERMANENT_DOT);

          if (this.m_type !== WinType.None) {
            var animState;

            if (this.m_type === WinType.Congrats) {
              this.node.getComponent(Animation).play("Settle_main_end");
              animState = this.node.getComponent(Animation).getState("Settle_main_end");
            } else if (this.m_type === WinType.Win) {
              this.node.getComponent(Animation).play("End");
              animState = this.node.getComponent(Animation).getState("End");
            }

            animState.pause();
            tween(this.node).delay(0.5).call(function () {
              animState.resume();
            }).delay(animState.duration).call(function () {
              if (endCb) {
                endCb();
              }
            }).start();
          } else {
            if (endCb) {
              endCb();
            }
          }
        };

        _proto.Stop = function Stop(gameView, endCb, stopActionCb) {
          if (this.m_isStop) {
            return;
          }

          this.m_isStop = true;

          if (this.m_endCb) {
            if (stopActionCb) {
              stopActionCb();
            }

            Tween.stopAllByTarget(this.node);
            this.m_winLabel.string = Tools.FormatNumberThousands(gameView.GetDisplayValue(this.m_win), Tools.FORMAT_NUMBER_TYPE.PERMANENT_DOT);

            if (this.m_endCb) {
              this.m_endCb();
              this.m_endCb = null;
            }
          }
        };

        return Win;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m_type", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return WinType.None;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m_winLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "m_titleSprite", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "m_totalWinSprite", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/game', 'chunks:///_virtual/game'); 
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