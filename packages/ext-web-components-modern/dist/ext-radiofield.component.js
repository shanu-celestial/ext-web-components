import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Radio from './Ext/form/Radio.js';
import ElementParser from './ElementParser.js';

var EWCRadiofield =
/*#__PURE__*/
function (_Ext_form_Radio) {
  _inheritsLoose(EWCRadiofield, _Ext_form_Radio);

  function EWCRadiofield() {
    var _this;

    _this = _Ext_form_Radio.call(this, [], []) || this;
    _this.xtype = 'radiofield';
    return _this;
  }

  return EWCRadiofield;
}(Ext_form_Radio);

export { EWCRadiofield as default };

try {
  window.customElements.define('ext-radiofield', ElementParser.withParsedCallback(EWCRadiofield));
} catch (e) {
  window.customElements.define('ext-radiofield', EWCRadiofield);
}