import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Checkbox from './Ext/form/Checkbox.js';
import ElementParser from './ElementParser.js';

var EWCCheckboxfield =
/*#__PURE__*/
function (_Ext_form_Checkbox) {
  _inheritsLoose(EWCCheckboxfield, _Ext_form_Checkbox);

  function EWCCheckboxfield() {
    var _this;

    _this = _Ext_form_Checkbox.call(this, [], []) || this;
    _this.xtype = 'checkboxfield';
    return _this;
  }

  return EWCCheckboxfield;
}(Ext_form_Checkbox);

export { EWCCheckboxfield as default };

try {
  window.customElements.define('ext-checkboxfield', ElementParser.withParsedCallback(EWCCheckboxfield));
} catch (e) {
  window.customElements.define('ext-checkboxfield', EWCCheckboxfield);
}