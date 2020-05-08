const initialState = {
  x: 300,
  pipes: [
    {
      topHeight: 200,
    },
  ],
};

export default (state = initialState, { type } = {}) => {
  switch (type) {
    case "RUNNING":
      return { ...state, x: state.x - 10 };
    case "GENERATE":
      const topHeight = ~~(Math.random() * 200) + 50;
      return { ...state, pipes: [...state.pipes, { topHeight }] };
    case "GAME_OVER":
      return initialState;
    default:
      return state;
  }
};
