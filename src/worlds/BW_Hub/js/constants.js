
const EMOTION_ORB_INFO = {
    RADIUS: 0.07,
    X_POS: 0,
    Y_POS: 0.59,
    Z_POS: 2.13,
};

const CYLINDER_Y_SIZE = 1;

const DELTA_VISUALIZATION_EVENT = 'updateDeltaVisualization';

const ROOM_VISUALIZATION_NAMES = {
    DELTA: 'delta',
    ALPHA: 'alpha',
    GAMMA: 'gamma'
}

const EMOTION_ORB_COLOUR_MAP = {
    PINK: 'peaceful',
    YELLOW: 'joyful',
    BLUE: 'sad',
    GREEN: 'unsettled',
    ORANGE: 'focused'
}

const DEFAULT_CENTRAL_ORB_DATA = [
    {name: EMOTION_ORB_COLOUR_MAP.ORANGE, votes: 3},
    {name: EMOTION_ORB_COLOUR_MAP.GREEN, votes: 2},
    {name: EMOTION_ORB_COLOUR_MAP.BLUE, votes: 2},
    {name: EMOTION_ORB_COLOUR_MAP.YELLOW, votes: 8},
    {name: EMOTION_ORB_COLOUR_MAP.PINK, votes: 11}
  ];

const DEFAULT_DELTA_VISUALIZATION_DATA = [
    {name: EMOTION_ORB_COLOUR_MAP.ORANGE, votes: 2},
    {name: EMOTION_ORB_COLOUR_MAP.GREEN, votes: 0},
    {name: EMOTION_ORB_COLOUR_MAP.BLUE, votes: 0},
    {name: EMOTION_ORB_COLOUR_MAP.YELLOW, votes: 2},
    {name: EMOTION_ORB_COLOUR_MAP.PINK, votes: 4}
];

const DEFAULT_ALPHA_VISUALIZATION_DATA = [
    {name: EMOTION_ORB_COLOUR_MAP.ORANGE, votes: 0},
    {name: EMOTION_ORB_COLOUR_MAP.GREEN, votes: 1},
    {name: EMOTION_ORB_COLOUR_MAP.BLUE, votes: 2},
    {name: EMOTION_ORB_COLOUR_MAP.YELLOW, votes: 3},
    {name: EMOTION_ORB_COLOUR_MAP.PINK, votes: 5}
];

const DEFAULT_GAMMA_VISUALIZATION_DATA = [
    {name: EMOTION_ORB_COLOUR_MAP.ORANGE, votes: 1},
    {name: EMOTION_ORB_COLOUR_MAP.GREEN, votes: 1},
    {name: EMOTION_ORB_COLOUR_MAP.BLUE, votes: 0},
    {name: EMOTION_ORB_COLOUR_MAP.YELLOW, votes: 3},
    {name: EMOTION_ORB_COLOUR_MAP.PINK, votes: 2}
];

//function displays 2D UI text
function displayText() {

}