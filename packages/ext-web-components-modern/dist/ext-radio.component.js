import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_form_Radio from './Ext/form/Radio.js';
import ElementParser from './ElementParser.js';

var EWCRadio =
/*#__PURE__*/
function (_Ext_form_Radio) {
  _inheritsLoose(EWCRadio, _Ext_form_Radio);

  function EWCRadio() {
    var _this;

    _this = _Ext_form_Radio.call(this, [], []) || this;
    _this.xtype = 'radio';
    return _this;
  }

  return EWCRadio;
}(Ext_form_Radio);

export { EWCRadio as default };

try {
  window.customElements.define('ext-radio', ElementParser.withParsedCallback(EWCRadio));
} catch (e) {
  window.customElements.define('ext-radio', EWCRadio);
}