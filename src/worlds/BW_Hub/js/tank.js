AFRAME.registerComponent('tank', {
    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.el.addEventListener('click', function () {
            const testBall = document.querySelector('#test-ball');
            const targetBall = document.querySelector('#target-ball');

            targetBall.setAttribute('scale', '0.2 0.2 0.2');
            testBall.parentNode.removeChild(testBall);
        })
    }
})