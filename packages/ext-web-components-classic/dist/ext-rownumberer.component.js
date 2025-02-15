import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_RowNumberer from './Ext/grid/RowNumberer.js';
import ElementParser from './ElementParser.js';

var EWCRownumberer =
/*#__PURE__*/
function (_Ext_grid_RowNumberer) {
  _inheritsLoose(EWCRownumberer, _Ext_grid_RowNumberer);

  function EWCRownumberer() {
    var _this;

    _this = _Ext_grid_RowNumberer.call(this, [], []) || this;
    _this.xtype = 'rownumberer';
    return _this;
  }

  return EWCRownumberer;
}(Ext_grid_RowNumberer);

export { EWCRownumberer as default };

try {
  window.customElements.define('ext-rownumberer', ElementParser.withParsedCallback(EWCRownumberer));
} catch (e) {
  window.customElements.define('ext-rownumberer', EWCRownumberer);
}