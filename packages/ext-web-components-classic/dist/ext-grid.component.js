import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_grid_GridPanel from './Ext/grid/GridPanel.js';
import ElementParser from './ElementParser.js';

var EWCGrid =
/*#__PURE__*/
function (_Ext_grid_GridPanel) {
  _inheritsLoose(EWCGrid, _Ext_grid_GridPanel);

  function EWCGrid() {
    var _this;

    _this = _Ext_grid_GridPanel.call(this, [], []) || this;
    _this.xtype = 'grid';
    return _this;
  }

  return EWCGrid;
}(Ext_grid_GridPanel);

export { EWCGrid as default };

try {
  window.customElements.define('ext-grid', ElementParser.withParsedCallback(EWCGrid));
} catch (e) {
  window.customElements.define('ext-grid', EWCGrid);
}