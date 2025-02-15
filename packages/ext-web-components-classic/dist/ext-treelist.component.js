import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_list_Tree from './Ext/list/Tree.js';
import ElementParser from './ElementParser.js';

var EWCTreelist =
/*#__PURE__*/
function (_Ext_list_Tree) {
  _inheritsLoose(EWCTreelist, _Ext_list_Tree);

  function EWCTreelist() {
    var _this;

    _this = _Ext_list_Tree.call(this, [], []) || this;
    _this.xtype = 'treelist';
    return _this;
  }

  return EWCTreelist;
}(Ext_list_Tree);

export { EWCTreelist as default };

try {
  window.customElements.define('ext-treelist', ElementParser.withParsedCallback(EWCTreelist));
} catch (e) {
  window.customElements.define('ext-treelist', EWCTreelist);
}