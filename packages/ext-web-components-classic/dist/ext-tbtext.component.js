import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_toolbar_TextItem from './Ext/toolbar/TextItem.js';
import ElementParser from './ElementParser.js';

var EWCTbtext =
/*#__PURE__*/
function (_Ext_toolbar_TextItem) {
  _inheritsLoose(EWCTbtext, _Ext_toolbar_TextItem);

  function EWCTbtext() {
    var _this;

    _this = _Ext_toolbar_TextItem.call(this, [], []) || this;
    _this.xtype = 'tbtext';
    return _this;
  }

  return EWCTbtext;
}(Ext_toolbar_TextItem);

export { EWCTbtext as default };

try {
  window.customElements.define('ext-tbtext', ElementParser.withParsedCallback(EWCTbtext));
} catch (e) {
  window.customElements.define('ext-tbtext', EWCTbtext);
}