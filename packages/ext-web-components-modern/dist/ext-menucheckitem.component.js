import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_CheckItem from './Ext/menu/CheckItem.js';
import ElementParser from './ElementParser.js';

var EWCMenucheckitem =
/*#__PURE__*/
function (_Ext_menu_CheckItem) {
  _inheritsLoose(EWCMenucheckitem, _Ext_menu_CheckItem);

  function EWCMenucheckitem() {
    var _this;

    _this = _Ext_menu_CheckItem.call(this, [], []) || this;
    _this.xtype = 'menucheckitem';
    return _this;
  }

  return EWCMenucheckitem;
}(Ext_menu_CheckItem);

export { EWCMenucheckitem as default };

try {
  window.customElements.define('ext-menucheckitem', ElementParser.withParsedCallback(EWCMenucheckitem));
} catch (e) {
  window.customElements.define('ext-menucheckitem', EWCMenucheckitem);
}