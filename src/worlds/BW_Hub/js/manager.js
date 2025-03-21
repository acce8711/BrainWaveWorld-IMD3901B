AFRAME.registerComponent('manager', {
    schema: {
      holdingOrb: {type: 'boolean', default: false},
      holdingOrbId: {type: 'string'}
    },

    init: function () {
      const Context_AF = this;
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
