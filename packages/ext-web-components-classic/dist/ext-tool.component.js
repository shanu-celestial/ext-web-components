import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Tool from './Ext/panel/Tool.js';
import ElementParser from './ElementParser.js';

var EWCTool =
/*#__PURE__*/
function (_Ext_panel_Tool) {
  _inheritsLoose(EWCTool, _Ext_panel_Tool);

  function EWCTool() {
    var _this;

    _this = _Ext_panel_Tool.call(this, [], []) || this;
    _this.xtype = 'tool';
    return _this;
  }

  return EWCTool;
}(Ext_panel_Tool);

export { EWCTool as default };

try {
  window.customElements.define('ext-tool', ElementParser.withParsedCallback(EWCTool));
} catch (e) {
  window.customElements.define('ext-tool', EWCTool);
}