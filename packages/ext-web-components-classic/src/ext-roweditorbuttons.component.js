import Ext_grid_RowEditorButtons from './Ext/grid/RowEditorButtons.js';
import ElementParser from './ElementParser.js';

export default class EWCRoweditorbuttons extends Ext_grid_RowEditorButtons {
  constructor() {
    super ([], []);
    this.xtype = 'roweditorbuttons';
  }
}
try {
  window.customElements.define('ext-roweditorbuttons', ElementParser.withParsedCallback(EWCRoweditorbuttons));
}
catch(e) {
  window.customElements.define('ext-roweditorbuttons', EWCRoweditorbuttons);
}
