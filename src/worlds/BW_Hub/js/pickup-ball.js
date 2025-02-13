AFRAME.registerComponent('pickup-ball', {
    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.playerEl = document.querySelector('#Player1Cam');

        CONTEXT_AF.el.addEventListener('click', function () {
            const newEl = document.createElement('a-sphere');
            newEl.setAttribute('scale', '0.1 0.1 0.1');
            newEl.setAttribute('position', '0 -0.2 -0.5');
            newEl.setAttribute('material', {color: '#FBC02D'});
            newEl.setAttribute('id', 'test-ball');

            debugger
            CONTEXT_AF.playerEl.appendChild(newEl);
            CONTEXT_AF.el.parentNode.removeChild(CONTEXT_AF.el);
        })
    }
})