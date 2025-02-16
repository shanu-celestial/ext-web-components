import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Gadget from './Ext/Gadget.js';
import ElementParser from './ElementParser.js';

var EWCComponent =
/*#__PURE__*/
function (_Ext_Gadget) {
  _inheritsLoose(EWCComponent, _Ext_Gadget);

  function EWCComponent() {
    var _this;

    _this = _Ext_Gadget.call(this, [], []) || this;
    _this.xtype = 'component';
    return _this;
  }

  return EWCComponent;
}(Ext_Gadget);

export { EWCComponent as default };

try {
  window.customElements.define('ext-component', ElementParser.withParsedCallback(EWCComponent));
} catch (e) {
  window.customElements.define('ext-component', EWCComponent);
}