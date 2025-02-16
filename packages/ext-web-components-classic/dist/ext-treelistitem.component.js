import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_TreeItem from './Ext/list/TreeItem.js';
import ElementParser from './ElementParser.js';

var EWCTreelistitem =
/*#__PURE__*/
function (_Ext_list_TreeItem) {
  _inheritsLoose(EWCTreelistitem, _Ext_list_TreeItem);

  function EWCTreelistitem() {
    var _this;

    _this = _Ext_list_TreeItem.call(this, [], []) || this;
    _this.xtype = 'treelistitem';
    return _this;
  }

  return EWCTreelistitem;
}(Ext_list_TreeItem);

export { EWCTreelistitem as default };

try {
  window.customElements.define('ext-treelistitem', ElementParser.withParsedCallback(EWCTreelistitem));
} catch (e) {
  window.customElements.define('ext-treelistitem', EWCTreelistitem);
}