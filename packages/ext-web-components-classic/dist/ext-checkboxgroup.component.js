import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_CheckboxGroup from './Ext/form/CheckboxGroup.js';
import ElementParser from './ElementParser.js';

var EWCCheckboxgroup =
/*#__PURE__*/
function (_Ext_form_CheckboxGro) {
  _inheritsLoose(EWCCheckboxgroup, _Ext_form_CheckboxGro);

  function EWCCheckboxgroup() {
    var _this;

    _this = _Ext_form_CheckboxGro.call(this, [], []) || this;
    _this.xtype = 'checkboxgroup';
    return _this;
  }

  return EWCCheckboxgroup;
}(Ext_form_CheckboxGroup);

export { EWCCheckboxgroup as default };

try {
  window.customElements.define('ext-checkboxgroup', ElementParser.withParsedCallback(EWCCheckboxgroup));
} catch (e) {
  window.customElements.define('ext-checkboxgroup', EWCCheckboxgroup);
}