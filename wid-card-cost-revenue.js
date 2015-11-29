'use strict';

(function () {

  Polymer({

    is: 'wid-card-cost-revenue',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior, Polymer.WidCardThemeBehavior],

    properties: {

      /**
       * name
       * @type {String}
       */
      name: {
        type: String
      },

      /**
       * icon
       * @type {String}
       */
      icon: {
        type: String
      },

      /**
       * month_names
       * @type {Object}
       */
      monthNames: {
        type: Object
      },

      /**
       * month01
       * @type {Object}
       */
      month01: {
        type: Object
      },

      /**
       * month02
       * @type {Object}
       */
      month02: {
        type: Object
      },

      /**
       * month03
       * @type {Object}
       */
      month03: {
        type: Object
      }

    },

    _getCostPercentage: function _getCostPercentage(revenue, cost) {
      return (parseFloat(cost) * 100 / parseFloat(revenue)).toFixed(2) + ' %';
    },

    _getCurrencyValue: function _getCurrencyValue(value) {
      return '$' + value;
    }

  });
})();