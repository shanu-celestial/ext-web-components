import Ext_tree_View from './Ext/tree/View.js';
import ElementParser from './ElementParser.js';

export default class EWCTreeview extends Ext_tree_View {
  constructor() {
    super ([], []);
    this.xtype = 'treeview';
  }
}
try {
  window.customElements.define('ext-treeview', ElementParser.withParsedCallback(EWCTreeview));
}
catch(e) {
  window.customElements.define('ext-treeview', EWCTreeview);
}
