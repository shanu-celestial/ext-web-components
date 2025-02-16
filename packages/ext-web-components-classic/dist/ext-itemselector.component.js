import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ux_ItemSelector from './Ext/ux/ItemSelector.js';
import ElementParser from './ElementParser.js';

var EWCItemselector =
/*#__PURE__*/
function (_Ext_ux_ItemSelector) {
  _inheritsLoose(EWCItemselector, _Ext_ux_ItemSelector);

  function EWCItemselector() {
    var _this;

    _this = _Ext_ux_ItemSelector.call(this, [], []) || this;
    _this.xtype = 'itemselector';
    return _this;
  }

  return EWCItemselector;
}(Ext_ux_ItemSelector);

export { EWCItemselector as default };

try {
  window.customElements.define('ext-itemselector', ElementParser.withParsedCallback(EWCItemselector));
} catch (e) {
  window.customElements.define('ext-itemselector', EWCItemselector);
}