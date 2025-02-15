import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Editor from './Ext/Editor.js';
import ElementParser from './ElementParser.js';

var EWCEditor =
/*#__PURE__*/
function (_Ext_Editor) {
  _inheritsLoose(EWCEditor, _Ext_Editor);

  function EWCEditor() {
    var _this;

    _this = _Ext_Editor.call(this, [], []) || this;
    _this.xtype = 'editor';
    return _this;
  }

  return EWCEditor;
}(Ext_Editor);

export { EWCEditor as default };

try {
  window.customElements.define('ext-editor', ElementParser.withParsedCallback(EWCEditor));
} catch (e) {
  window.customElements.define('ext-editor', EWCEditor);
}