import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_calendar_view_Day from './Ext/calendar/view/Day.js';
import ElementParser from './ElementParser.js';

var EWCCalendar_dayview =
/*#__PURE__*/
function (_Ext_calendar_view_Da) {
  _inheritsLoose(EWCCalendar_dayview, _Ext_calendar_view_Da);

  function EWCCalendar_dayview() {
    var _this;

    _this = _Ext_calendar_view_Da.call(this, [], []) || this;
    _this.xtype = 'calendar-dayview';
    return _this;
  }

  return EWCCalendar_dayview;
}(Ext_calendar_view_Day);

export { EWCCalendar_dayview as default };

try {
  window.customElements.define('ext-calendar-dayview', ElementParser.withParsedCallback(EWCCalendar_dayview));
} catch (e) {
  window.customElements.define('ext-calendar-dayview', EWCCalendar_dayview);
}