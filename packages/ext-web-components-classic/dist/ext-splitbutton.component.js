import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_SplitButton from './Ext/SplitButton.js';
import ElementParser from './ElementParser.js';

var EWCSplitbutton =
/*#__PURE__*/
function (_Ext_SplitButton) {
  _inheritsLoose(EWCSplitbutton, _Ext_SplitButton);

  function EWCSplitbutton() {
    var _this;

    _this = _Ext_SplitButton.call(this, [], []) || this;
    _this.xtype = 'splitbutton';
    return _this;
  }

  return EWCSplitbutton;
}(Ext_SplitButton);

export { EWCSplitbutton as default };

try {
  window.customElements.define('ext-splitbutton', ElementParser.withParsedCallback(EWCSplitbutton));
} catch (e) {
  window.customElements.define('ext-splitbutton', EWCSplitbutton);
}