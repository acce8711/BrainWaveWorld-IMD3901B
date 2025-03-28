AFRAME.registerComponent('temp-lifetime', {
    schema: {
        lifetime: {type: 'number', default: 100},
        currentTime: {type: 'number', default: 0}
    },
    init: function () {
        const CONTEXT_AF = this;
    },
    tick: function () {
        this.data.currentTime++;
        if (this.data.currentTime >= this.data.lifetime) {
            this.el.parentNode.removeChild(this.el);
        }
    }
})