import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Table from './Ext/panel/Table.js';
import ElementParser from './ElementParser.js';

var EWCTablepanel =
/*#__PURE__*/
function (_Ext_panel_Table) {
  _inheritsLoose(EWCTablepanel, _Ext_panel_Table);

  function EWCTablepanel() {
    var _this;

    _this = _Ext_panel_Table.call(this, [], []) || this;
    _this.xtype = 'tablepanel';
    return _this;
  }

  return EWCTablepanel;
}(Ext_panel_Table);

export { EWCTablepanel as default };

try {
  window.customElements.define('ext-tablepanel', ElementParser.withParsedCallback(EWCTablepanel));
} catch (e) {
  window.customElements.define('ext-tablepanel', EWCTablepanel);
}