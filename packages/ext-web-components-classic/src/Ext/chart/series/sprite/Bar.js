import Ext_chart_series_sprite_StackedCartesian from '../../../../Ext/chart/series/sprite/StackedCartesian.js';

export default class Ext_chart_series_sprite_Bar extends Ext_chart_series_sprite_StackedCartesian {
  static PROPERTIES() { return [
    'animation',
    'dataMaxX',
    'dataMaxY',
    'dataMinX',
    'dataMinY',
    'dataStartY',
    'dataX',
    'dataY',
    'dirty',
    'field',
    'fillOpacity',
    'fillStyle',
    'flipXY',
    'globalAlpha',
    'globalCompositeOperation',
    'groupCount',
    'groupOffset',
    'hidden',
    'inGroupGapWidth',
    'labelOverflowPadding',
    'labels',
    'lineCap',
    'lineDash',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'listeners',
    'maxBarWidth',
    'minBarWidth',
    'minGapWidth',
    'miterLimit',
    'parent',
    'radius',
    'rangeX',
    'rangeY',
    'rotation',
    'rotationCenterX',
    'rotationCenterY',
    'rotationRads',
    'scaling',
    'scalingCenterX',
    'scalingCenterY',
    'scalingX',
    'scalingY',
    'selectionTolerance',
    'shadowBlur',
    'shadowColor',
    'shadowOffsetX',
    'shadowOffsetY',
    'store',
    'strokeOpacity',
    'strokeStyle',
    'surface',
    'transformFillStroke',
    'translation',
    'translationX',
    'translationY',
    'zIndex',
  ]};
  static EVENTS() { return [
    {name:'ready', parameters:'cmd,cmdAll'}
  ]};
  static getProperties(properties) {
    properties = properties.concat(Ext_chart_series_sprite_Bar.PROPERTIES());
    return Ext_chart_series_sprite_StackedCartesian.getProperties(properties);
  }
  static getEvents(events) {
    events = events.concat(Ext_chart_series_sprite_Bar.EVENTS());
    return Ext_chart_series_sprite_StackedCartesian.getEvents(events);
  }

  static get observedAttributes() {
    var attrs = super.observedAttributes
    Ext_chart_series_sprite_Bar.PROPERTIES().forEach(function (property, index, array) {
        attrs.push(property)
    })
    Ext_chart_series_sprite_Bar.EVENTS().forEach(function (eventparameter, index, array) {
        attrs.push('on' + eventparameter.name)
    })
    return attrs
  }

  constructor(properties, events) {
    super (
      properties.concat(Ext_chart_series_sprite_Bar.PROPERTIES()),
      events.concat(Ext_chart_series_sprite_Bar.EVENTS())
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }

}
