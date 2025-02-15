import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_ItemSelector from './Ext/ux/ItemSelector.js';
import ElementParser from './ElementParser.js';

var EWCItemselectorfield =
/*#__PURE__*/
function (_Ext_ux_ItemSelector) {
  _inheritsLoose(EWCItemselectorfield, _Ext_ux_ItemSelector);

  function EWCItemselectorfield() {
    var _this;

    _this = _Ext_ux_ItemSelector.call(this, [], []) || this;
    _this.xtype = 'itemselectorfield';
    return _this;
  }

  return EWCItemselectorfield;
}(Ext_ux_ItemSelector);

export { EWCItemselectorfield as default };

try {
  window.customElements.define('ext-itemselectorfield', ElementParser.withParsedCallback(EWCItemselectorfield));
} catch (e) {
  window.customElements.define('ext-itemselectorfield', EWCItemselectorfield);
}