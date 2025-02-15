import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_header_Base from '../../../Ext/calendar/header/Base.js';

var Ext_calendar_header_Weeks =
/*#__PURE__*/
function (_Ext_calendar_header_) {
  _inheritsLoose(Ext_calendar_header_Weeks, _Ext_calendar_header_);

  Ext_calendar_header_Weeks.PROPERTIES = function PROPERTIES() {
    return ['ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cellCls', 'cls', 'compact', 'compactOptions', 'controller', 'defaultListenerScope', 'disabled', 'focusCls', 'format', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'visibleDays', 'width'];
  };

  Ext_calendar_header_Weeks.EVENTS = function EVENTS() {
    return [{
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeheightchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforehiddenchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforewidthchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'blur',
      parameters: 'sender,event'
    }, {
      name: 'disabledchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'focus',
      parameters: 'sender,event'
    }, {
      name: 'focusenter',
      parameters: 'sender,event'
    }, {
      name: 'focusleave',
      parameters: 'sender,event'
    }, {
      name: 'heightchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'hiddenchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_calendar_header_Weeks.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_header_Weeks.PROPERTIES());
    return Ext_calendar_header_Base.getProperties(properties);
  };

  Ext_calendar_header_Weeks.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_header_Weeks.EVENTS());
    return Ext_calendar_header_Base.getEvents(events);
  };

  _createClass(Ext_calendar_header_Weeks, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_header_.observedAttributes;
      Ext_calendar_header_Weeks.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_header_Weeks.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_header_Weeks(properties, events) {
    return _Ext_calendar_header_.call(this, properties.concat(Ext_calendar_header_Weeks.PROPERTIES()), events.concat(Ext_calendar_header_Weeks.EVENTS())) || this;
  }

  var _proto = Ext_calendar_header_Weeks.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_header_.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_header_.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_header_Weeks;
}(Ext_calendar_header_Base);

export { Ext_calendar_header_Weeks as default };