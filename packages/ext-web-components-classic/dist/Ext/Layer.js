import _createClass from "@babel/runtime/helpers/createClass";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dom_Element from '../Ext/dom/Element.js';

var Ext_Layer =
/*#__PURE__*/
function (_Ext_dom_Element) {
  _inheritsLoose(Ext_Layer, _Ext_dom_Element);

  Ext_Layer.PROPERTIES = function PROPERTIES() {
    return ['cls', 'constrain', 'dh', 'hideMode', 'listeners', 'shadow', 'shadowOffset', 'shim', 'useDisplay', 'visibilityCls', 'zindex'];
  };

  Ext_Layer.EVENTS = function EVENTS() {
    return [{
      name: 'abort',
      parameters: 'e,t'
    }, {
      name: 'blur',
      parameters: 'e,t'
    }, {
      name: 'change',
      parameters: 'e,t'
    }, {
      name: 'click',
      parameters: 'e,t'
    }, {
      name: 'contextmenu',
      parameters: 'e,t'
    }, {
      name: 'dblclick',
      parameters: 'e,t'
    }, {
      name: 'DOMActivate',
      parameters: 'e,t'
    }, {
      name: 'DOMAttrModified',
      parameters: 'e,t'
    }, {
      name: 'DOMCharacterDataModified',
      parameters: 'e,t'
    }, {
      name: 'DOMFocusIn',
      parameters: 'e,t'
    }, {
      name: 'DOMFocusOut',
      parameters: 'e,t'
    }, {
      name: 'DOMNodeInserted',
      parameters: 'e,t'
    }, {
      name: 'DOMNodeInsertedIntoDocument',
      parameters: 'e,t'
    }, {
      name: 'DOMNodeRemoved',
      parameters: 'e,t'
    }, {
      name: 'DOMNodeRemovedFromDocument',
      parameters: 'e,t'
    }, {
      name: 'DOMSubtreeModified',
      parameters: 'e,t'
    }, {
      name: 'doubletap',
      parameters: 'event,node,options'
    }, {
      name: 'error',
      parameters: 'e,t'
    }, {
      name: 'focus',
      parameters: 'e,t'
    }, {
      name: 'focusmove',
      parameters: 'e,t'
    }, {
      name: 'keydown',
      parameters: 'e,t'
    }, {
      name: 'keypress',
      parameters: 'e,t'
    }, {
      name: 'keyup',
      parameters: 'e,t'
    }, {
      name: 'load',
      parameters: 'e,t'
    }, {
      name: 'longpress',
      parameters: 'event,node,options'
    }, {
      name: 'mousedown',
      parameters: 'e,t'
    }, {
      name: 'mouseenter',
      parameters: 'e,t'
    }, {
      name: 'mouseleave',
      parameters: 'e,t'
    }, {
      name: 'mousemove',
      parameters: 'e,t'
    }, {
      name: 'mouseout',
      parameters: 'e,t'
    }, {
      name: 'mouseover',
      parameters: 'e,t'
    }, {
      name: 'mouseup',
      parameters: 'e,t'
    }, {
      name: 'painted',
      parameters: 'sender'
    }, {
      name: 'pinch',
      parameters: 'event,node,options'
    }, {
      name: 'pinchend',
      parameters: 'event,node,options'
    }, {
      name: 'pinchstart',
      parameters: 'event,node,options'
    }, {
      name: 'reset',
      parameters: 'e,t'
    }, {
      name: 'resize',
      parameters: 'sender,info'
    }, {
      name: 'rotate',
      parameters: 'event,node,options'
    }, {
      name: 'rotateend',
      parameters: 'event,node,options'
    }, {
      name: 'rotatestart',
      parameters: 'event,node,options'
    }, {
      name: 'scroll',
      parameters: 'e,t'
    }, {
      name: 'select',
      parameters: 'e,t'
    }, {
      name: 'singletap',
      parameters: 'event,node,options'
    }, {
      name: 'submit',
      parameters: 'e,t'
    }, {
      name: 'swipe',
      parameters: 'event,node,options'
    }, {
      name: 'taphold',
      parameters: 'event,node,options'
    }, {
      name: 'unload',
      parameters: 'e,t'
    }, {
      name: 'ready',
      parameters: 'cmd,cmdAll'
    }];
  };

  Ext_Layer.getProperties = function getProperties(properties) {
    properties = properties.concat(Ext_Layer.PROPERTIES());
    return Ext_dom_Element.getProperties(properties);
  };

  Ext_Layer.getEvents = function getEvents(events) {
    events = events.concat(Ext_Layer.EVENTS());
    return Ext_dom_Element.getEvents(events);
  };

  _createClass(Ext_Layer, null, [{
    key: "observedAttributes",
    get: function get() {
      var attrs = _Ext_dom_Element.observedAttributes;
      Ext_Layer.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property);
      });
      Ext_Layer.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name);
      });
      return attrs;
    }
  }]);

  function Ext_Layer(properties, events) {
    return _Ext_dom_Element.call(this, properties.concat(Ext_Layer.PROPERTIES()), events.concat(Ext_Layer.EVENTS())) || this;
  }

  var _proto = Ext_Layer.prototype;

  _proto.connectedCallback = function connectedCallback() {
    _Ext_dom_Element.prototype.connectedCallback.call(this);
  };

  _proto.attributeChangedCallback = function attributeChangedCallback(attrName, oldVal, newVal) {
    _Ext_dom_Element.prototype.attributeChangedCallback.call(this, attrName, oldVal, newVal);
  };

  return Ext_Layer;
}(Ext_dom_Element);

export { Ext_Layer as default };