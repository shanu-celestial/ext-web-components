import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_colorpick_ColorPreview from './Ext/ux/colorpick/ColorPreview.js';
import ElementParser from './ElementParser.js';

var EWCColorpickercolorpreview =
/*#__PURE__*/
function (_Ext_ux_colorpick_Col) {
  _inheritsLoose(EWCColorpickercolorpreview, _Ext_ux_colorpick_Col);

  function EWCColorpickercolorpreview() {
    var _this;

    _this = _Ext_ux_colorpick_Col.call(this, [], []) || this;
    _this.xtype = 'colorpickercolorpreview';
    return _this;
  }

  return EWCColorpickercolorpreview;
}(Ext_ux_colorpick_ColorPreview);

export { EWCColorpickercolorpreview as default };

try {
  window.customElements.define('ext-colorpickercolorpreview', ElementParser.withParsedCallback(EWCColorpickercolorpreview));
} catch (e) {
  window.customElements.define('ext-colorpickercolorpreview', EWCColorpickercolorpreview);
}