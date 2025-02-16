import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_LoadMask from './Ext/LoadMask.js';
import ElementParser from './ElementParser.js';

var EWCLoadmask =
/*#__PURE__*/
function (_Ext_LoadMask) {
  _inheritsLoose(EWCLoadmask, _Ext_LoadMask);

  function EWCLoadmask() {
    var _this;

    _this = _Ext_LoadMask.call(this, [], []) || this;
    _this.xtype = 'loadmask';
    return _this;
  }

  return EWCLoadmask;
}(Ext_LoadMask);

export { EWCLoadmask as default };

try {
  window.customElements.define('ext-loadmask', ElementParser.withParsedCallback(EWCLoadmask));
} catch (e) {
  window.customElements.define('ext-loadmask', EWCLoadmask);
}