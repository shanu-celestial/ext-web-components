import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_dashboard_Dashboard from './Ext/dashboard/Dashboard.js';
import ElementParser from './ElementParser.js';

var EWCDashboard =
/*#__PURE__*/
function (_Ext_dashboard_Dashbo) {
  _inheritsLoose(EWCDashboard, _Ext_dashboard_Dashbo);

  function EWCDashboard() {
    var _this;

    _this = _Ext_dashboard_Dashbo.call(this, [], []) || this;
    _this.xtype = 'dashboard';
    return _this;
  }

  return EWCDashboard;
}(Ext_dashboard_Dashboard);

export { EWCDashboard as default };

try {
  window.customElements.define('ext-dashboard', ElementParser.withParsedCallback(EWCDashboard));
} catch (e) {
  window.customElements.define('ext-dashboard', EWCDashboard);
}