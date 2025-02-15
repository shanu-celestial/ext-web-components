import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Img from './Ext/Img.js';
import ElementParser from './ElementParser.js';

var EWCImagecomponent =
/*#__PURE__*/
function (_Ext_Img) {
  _inheritsLoose(EWCImagecomponent, _Ext_Img);

  function EWCImagecomponent() {
    var _this;

    _this = _Ext_Img.call(this, [], []) || this;
    _this.xtype = 'imagecomponent';
    return _this;
  }

  return EWCImagecomponent;
}(Ext_Img);

export { EWCImagecomponent as default };

try {
  window.customElements.define('ext-imagecomponent', ElementParser.withParsedCallback(EWCImagecomponent));
} catch (e) {
  window.customElements.define('ext-imagecomponent', EWCImagecomponent);
}