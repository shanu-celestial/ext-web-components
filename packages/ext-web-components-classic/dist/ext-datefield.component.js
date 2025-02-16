import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Date from './Ext/form/Date.js';
import ElementParser from './ElementParser.js';

var EWCDatefield =
/*#__PURE__*/
function (_Ext_form_Date) {
  _inheritsLoose(EWCDatefield, _Ext_form_Date);

  function EWCDatefield() {
    var _this;

    _this = _Ext_form_Date.call(this, [], []) || this;
    _this.xtype = 'datefield';
    return _this;
  }

  return EWCDatefield;
}(Ext_form_Date);

export { EWCDatefield as default };

try {
  window.customElements.define('ext-datefield', ElementParser.withParsedCallback(EWCDatefield));
} catch (e) {
  window.customElements.define('ext-datefield', EWCDatefield);
}