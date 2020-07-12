"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Members = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Members, _BaseComponent);

  function Members() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Members);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Members.__proto__ || Object.getPrototypeOf(Members)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["lists"], _this.config = {
      navigationBarTitleText: '会员页'
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Members, [{
    key: "_constructor",
    value: function _constructor(props) {
      _get(Members.prototype.__proto__ || Object.getPrototypeOf(Members.prototype), "_constructor", this).call(this, props);
      this.state = {
        lists: []
      };
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(res) {
      if (res.from === 'button') {
        // 来自页面内转发按钮
        console.log(res.target);
      }
      return {
        title: '自定义转发标题',
        path: '/page/user?id=123'
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this.$router);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log('did');
      this.handleRefresh();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log('willUnmount');
    }
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {
      console.log('didShow');
    }
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {
      console.log('didHide');
    }
  }, {
    key: "onReachBottom",
    value: function onReachBottom() {
      console.log('button');
      this.handleRefresh();
    }

    /**
     * 更新list列表
     */

  }, {
    key: "handleRefresh",
    value: function handleRefresh() {
      var _this2 = this;

      setTimeout(function () {
        var lists = _this2.state.lists;

        var length = lists.length;
        var result = [];
        if (length === 0) {
          result = Object.keys(Array.apply(_this2, { length: 20 }));
        } else {
          var data = [];
          for (var i = length; i < length + 10; i++) {
            data.push(i);
          }
          result = [].concat(_toConsumableArray(lists), data);
        }
        _this2.setState(function () {
          return {
            lists: result
          };
        });
      }, 1000);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;

      var lists = this.__state.lists;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Members;
}(_index.Component), _class.properties = {}, _class.$$events = [], _temp2);
exports.default = Members;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Members, true));