import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_FieldSet from './Ext/form/FieldSet.js';
import ElementParser from './ElementParser.js';

var EWCFieldset =
/*#__PURE__*/
function (_Ext_form_FieldSet) {
  _inheritsLoose(EWCFieldset, _Ext_form_FieldSet);

  function EWCFieldset() {
    var _this;

    _this = _Ext_form_FieldSet.call(this, [], []) || this;
    _this.xtype = 'fieldset';
    return _this;
  }

  return EWCFieldset;
}(Ext_form_FieldSet);

export { EWCFieldset as default };

try {
  window.customElements.define('ext-fieldset', ElementParser.withParsedCallback(EWCFieldset));
} catch (e) {
  window.customElements.define('ext-fieldset', EWCFieldset);
}