import Ext_Window from './Ext/Window.js';
import ElementParser from './ElementParser.js';

export default class EWCWindow extends Ext_Window {
  constructor() {
    super ([], []);
    this.xtype = 'window';
  }
}
try {
  window.customElements.define('ext-window', ElementParser.withParsedCallback(EWCWindow));
}
catch(e) {
  window.customElements.define('ext-window', EWCWindow);
}
