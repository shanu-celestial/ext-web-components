import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Weeks from '../../../Ext/calendar/view/Weeks.js';

var Ext_calendar_view_Month =
/*#__PURE__*/
function (_Ext_calendar_view_We) {
  _inheritsLoose(Ext_calendar_view_Month, _Ext_calendar_view_We);

  Ext_calendar_view_Month.PROPERTIES = function PROPERTIES() {
    return ['addForm', 'addOnSelect', 'allowSelection', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'compact', 'compactOptions', 'controller', 'controlStoreRange', 'dayFormat', 'defaultListenerScope', 'disabled', 'draggable', 'droppable', 'editForm', 'eventDefaults', 'firstDayOfWeek', 'focusCls', 'gestureNavigation', 'header', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'listeners', 'margin', 'name', 'nameable', 'overflowText', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'showOverflow', 'store', 'style', 'timezoneOffset', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'visibleDays', 'visibleWeeks', 'weekendDays', 'width'];
  };

  Ext_calendar_view_Month.EVENTS = function EVENTS() {
    return [{
      name: 'beforedisabledchange',
      parameters: 'sender,value,oldValue,undefined'
    }, {
      name: 'beforeeventadd',
      parameters: 'sender,context'
    }, {
      name: 'beforeeventdragstart',
      parameters: 'sender,context'
    }, {
      name: 'beforeeventedit',
      parameters: 'sender,context'
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
      name: 'eventadd',
      parameters: 'sender,context'
    }, {
      name: 'eventdrop',
      parameters: 'sender,context'
    }, {
      name: 'eventedit',
      parameters: 'sender,context'
    }, {
      name: 'eventtap',
      parameters: 'sender,context'
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
      name: 'select',
      parameters: 'sender,context'
    }, {
      name: 'selectrange',
      parameters: 'sender,context'
    }, {
      name: 'validateeventadd',
      parameters: 'sender,context'
    }, {
      name: 'validateeventdrop',
      parameters: 'sender,context'
    }, {
      name: 'validateeventedit',
      parameters: 'sender,context'
    }, {
      name: 'valuechange',
      parameters: 'sender,context'
    }, {
      name: 'widthchange',
      parameters: 'sender,value,oldValue'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_calendar_view_Month.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_calendar_view_Month.PROPERTIES());
    return Ext_calendar_view_Weeks.getProperties(properties);
  };

  Ext_calendar_view_Month.getEvents = function getEvents(events) {
    events = events.concat(Ext_calendar_view_Month.EVENTS());
    return Ext_calendar_view_Weeks.getEvents(events);
  };

  _createClass(Ext_calendar_view_Month, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_calendar_view_We.observedAttributes;
      Ext_calendar_view_Month.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_calendar_view_Month.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_calendar_view_Month(properties, events) {
    return _Ext_calendar_view_We.call(this, properties.concat(Ext_calendar_view_Month.PROPERTIES()), events.concat(Ext_calendar_view_Month.EVENTS())) || this;
  }

  var _proto = Ext_calendar_view_Month.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_calendar_view_We.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_calendar_view_We.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_calendar_view_Month;
}(Ext_calendar_view_Weeks);

export { Ext_calendar_view_Month as default };