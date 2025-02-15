import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_menu_DatePicker from './Ext/menu/DatePicker.js';
import ElementParser from './ElementParser.js';

var EWCDatemenu =
/*#__PURE__*/
function (_Ext_menu_DatePicker) {
  _inheritsLoose(EWCDatemenu, _Ext_menu_DatePicker);

  function EWCDatemenu() {
    var _this;

    _this = _Ext_menu_DatePicker.call(this, [], []) || this;
    _this.xtype = 'datemenu';
    return _this;
  }

  return EWCDatemenu;
}(Ext_menu_DatePicker);

export { EWCDatemenu as default };

try {
  window.customElements.define('ext-datemenu', ElementParser.withParsedCallback(EWCDatemenu));
} catch (e) {
  window.customElements.define('ext-datemenu', EWCDatemenu);
}