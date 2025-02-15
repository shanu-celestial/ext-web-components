import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_BreadcrumbBar from './Ext/BreadcrumbBar.js';
import ElementParser from './ElementParser.js';

var EWCBreadcrumbbar =
/*#__PURE__*/
function (_Ext_BreadcrumbBar) {
  _inheritsLoose(EWCBreadcrumbbar, _Ext_BreadcrumbBar);

  function EWCBreadcrumbbar() {
    var _this;

    _this = _Ext_BreadcrumbBar.call(this, [], []) || this;
    _this.xtype = 'breadcrumbbar';
    return _this;
  }

  return EWCBreadcrumbbar;
}(Ext_BreadcrumbBar);

export { EWCBreadcrumbbar as default };

try {
  window.customElements.define('ext-breadcrumbbar', ElementParser.withParsedCallback(EWCBreadcrumbbar));
} catch (e) {
  window.customElements.define('ext-breadcrumbbar', EWCBreadcrumbbar);
}