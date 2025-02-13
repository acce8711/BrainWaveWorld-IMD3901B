AFRAME.registerComponent('dispense-button', {
    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.sceneEl = document.querySelector('a-scene');

        CONTEXT_AF.el.addEventListener('click', function () {
            const newEl = document.createElement('a-sphere');

            newEl.setAttribute('scale', '0.06 0.06 0.06');
            newEl.setAttribute('position', '0 0.467 1.592');
            newEl.setAttribute('material', {color: '#FBC02D'});
            newEl.setAttribute('id', 'test-ball');
            newEl.classList.add('interactive');
            newEl.setAttribute('pickup-ball', {});

            CONTEXT_AF.sceneEl.appendChild(newEl);
        })
    }
})