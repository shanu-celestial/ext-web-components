import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import Ext_Map from './Ext/Map.js';
import ElementParser from './ElementParser.js';

var EWCGoogle_map =
/*#__PURE__*/
function (_Ext_Map) {
  _inheritsLoose(EWCGoogle_map, _Ext_Map);

  function EWCGoogle_map() {
    var _this;

    _this = _Ext_Map.call(this, [], []) || this;
    _this.xtype = 'google-map';
    return _this;
  }

  return EWCGoogle_map;
}(Ext_Map);

export { EWCGoogle_map as default };

try {
  window.customElements.define('ext-google-map', ElementParser.withParsedCallback(EWCGoogle_map));
} catch (e) {
  window.customElements.define('ext-google-map', EWCGoogle_map);
}