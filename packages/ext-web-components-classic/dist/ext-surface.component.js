import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_draw_Surface from './Ext/draw/Surface.js';
import ElementParser from './ElementParser.js';

var EWCSurface =
/*#__PURE__*/
function (_Ext_draw_Surface) {
  _inheritsLoose(EWCSurface, _Ext_draw_Surface);

  function EWCSurface() {
    var _this;

    _this = _Ext_draw_Surface.call(this, [], []) || this;
    _this.xtype = 'surface';
    return _this;
  }

  return EWCSurface;
}(Ext_draw_Surface);

export { EWCSurface as default };

try {
  window.customElements.define('ext-surface', ElementParser.withParsedCallback(EWCSurface));
} catch (e) {
  window.customElements.define('ext-surface', EWCSurface);
}