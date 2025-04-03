//component is responsible for dispensing an emotion orb from a emotion dispenser
AFRAME.registerComponent('dispense-emotion', {
    schema: {
        orbColour: {type: 'color'},
        enabled: {type: 'boolean', default: true},
        emotion: {type: 'string'}
    },

    init: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.world = CIRCLES.getCirclesWorldName();
        CONTEXT_AF.socketId = undefined;

        CONTEXT_AF.el.sceneEl.addEventListener(CIRCLES.EVENTS.WS_CONNECTED, function () {
            CONTEXT_AF.socketId = CIRCLES.getCirclesWebSocket().id;
            console.log('websocket id: ' + CONTEXT_AF.socketId);
        })

        CONTEXT_AF.createNetworkingSystem = function () {
            CONTEXT_AF.socket = CIRCLES.getCirclesWebSocket();
            CONTEXT_AF.socketId = CONTEXT_AF.socket.id;
        }

              //check if circle networking is ready. If not, add an eent to listen for when it is ...
        if (CIRCLES.isCirclesWebsocketReady()) {
            CONTEXT_AF.createNetworkingSystem();
        }
        else {
            const wsReadyFunc = function() {
                CONTEXT_AF.createNetworkingSystem();
                CONTEXT_AF.el.sceneEl.removeEventListener(CIRCLES.EVENTS.WS_CONNECTED, wsReadyFunc);
            };
            CONTEXT_AF.el.sceneEl.addEventListener(CIRCLES.EVENTS.WS_CONNECTED, wsReadyFunc);
        }

        CONTEXT_AF.el.addEventListener('click', function() {
            //dispose a ball if the slot is empty
            if(CONTEXT_AF.data.enabled) {
                CONTEXT_AF.createOrb();
                CONTEXT_AF.el.setAttribute('dispense-emotion', {enabled: false})
            }
            //display error text if the slot is filled
            else
                console.log("filled slot");
        })
    },

    //function creates an orb and positions it in the dispenser slot
    createOrb: function () {
        const CONTEXT_AF = this;
        CONTEXT_AF.parent = CONTEXT_AF.el.parentNode;

        //create orb and append to the parent container
        const orbEl = document.createElement('a-entity');

        orbEl.setAttribute('geometry', {primitive: 'sphere',
                                        radius: EMOTION_ORB_INFO.RADIUS});
        orbEl.object3D.position.set(EMOTION_ORB_INFO.X_POS, EMOTION_ORB_INFO.Y_POS, EMOTION_ORB_INFO.Z_POS);
        orbEl.setAttribute('material', {color: CONTEXT_AF.data.orbColour});
        orbEl.setAttribute('emotion-pick-up', {animate:true});
        orbEl.setAttribute('circles-interactive-object', {type: 'outline'});
        orbEl.setAttribute('id', CONTEXT_AF.data.emotion);
        orbEl.setAttribute('circles-networked-basic', {});
        orbEl.setAttribute('circles-object-world', {world: CONTEXT_AF.world, id: `${CONTEXT_AF.data.emotion}-${CONTEXT_AF.socketId}`});

        CONTEXT_AF.parent.appendChild(orbEl);
    }
});
