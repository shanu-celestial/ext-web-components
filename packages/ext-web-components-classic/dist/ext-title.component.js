import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_panel_Title from './Ext/panel/Title.js';
import ElementParser from './ElementParser.js';

var EWCTitle =
/*#__PURE__*/
function (_Ext_panel_Title) {
  _inheritsLoose(EWCTitle, _Ext_panel_Title);

  function EWCTitle() {
    var _this;

    _this = _Ext_panel_Title.call(this, [], []) || this;
    _this.xtype = 'title';
    return _this;
  }

  return EWCTitle;
}(Ext_panel_Title);

export { EWCTitle as default };

try {
  window.customElements.define('ext-title', ElementParser.withParsedCallback(EWCTitle));
} catch (e) {
  window.customElements.define('ext-title', EWCTitle);
}