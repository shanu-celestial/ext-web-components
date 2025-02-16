import Ext_ux_desktop_Video from './Ext/ux/desktop/Video.js';
import ElementParser from './ElementParser.js';

export default class EWCVideo extends Ext_ux_desktop_Video {
  constructor() {
    super ([], []);
    this.xtype = 'video';
  }
}
try {
  window.customElements.define('ext-video', ElementParser.withParsedCallback(EWCVideo));
}
catch(e) {
  window.customElements.define('ext-video', EWCVideo);
}
