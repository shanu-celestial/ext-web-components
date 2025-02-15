import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_Field from './Ext/ux/colorpick/Field.js';
import ElementParser from './ElementParser.js';

var EWCColorfield =
/*#__PURE__*/
function (_Ext_ux_colorpick_Fie) {
  _inheritsLoose(EWCColorfield, _Ext_ux_colorpick_Fie);

  function EWCColorfield() {
    var _this;

    _this = _Ext_ux_colorpick_Fie.call(this, [], []) || this;
    _this.xtype = 'colorfield';
    return _this;
  }

  return EWCColorfield;
}(Ext_ux_colorpick_Field);

export { EWCColorfield as default };

try {
  window.customElements.define('ext-colorfield', ElementParser.withParsedCallback(EWCColorfield));
} catch (e) {
  window.customElements.define('ext-colorfield', EWCColorfield);
}