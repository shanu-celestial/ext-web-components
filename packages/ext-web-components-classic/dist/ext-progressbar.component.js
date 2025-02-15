import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_ProgressBar from './Ext/ProgressBar.js';
import ElementParser from './ElementParser.js';

var EWCProgressbar =
/*#__PURE__*/
function (_Ext_ProgressBar) {
  _inheritsLoose(EWCProgressbar, _Ext_ProgressBar);

  function EWCProgressbar() {
    var _this;

    _this = _Ext_ProgressBar.call(this, [], []) || this;
    _this.xtype = 'progressbar';
    return _this;
  }

  return EWCProgressbar;
}(Ext_ProgressBar);

export { EWCProgressbar as default };

try {
  window.customElements.define('ext-progressbar', ElementParser.withParsedCallback(EWCProgressbar));
} catch (e) {
  window.customElements.define('ext-progressbar', EWCProgressbar);
}