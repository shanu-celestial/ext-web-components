import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_GMapPanel from './Ext/ux/GMapPanel.js';
import ElementParser from './ElementParser.js';

var EWCGmappanel =
/*#__PURE__*/
function (_Ext_ux_GMapPanel) {
  _inheritsLoose(EWCGmappanel, _Ext_ux_GMapPanel);

  function EWCGmappanel() {
    var _this;

    _this = _Ext_ux_GMapPanel.call(this, [], []) || this;
    _this.xtype = 'gmappanel';
    return _this;
  }

  return EWCGmappanel;
}(Ext_ux_GMapPanel);

export { EWCGmappanel as default };

try {
  window.customElements.define('ext-gmappanel', ElementParser.withParsedCallback(EWCGmappanel));
} catch (e) {
  window.customElements.define('ext-gmappanel', EWCGmappanel);
}