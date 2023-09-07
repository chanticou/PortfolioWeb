import * as actions from "../../actions_types";

const initialState = {
  play: false,
  musicStr: "Play",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.PLAY_MUSIC:
      return {
        ...action.state,
        play: action.payload,
        musicStr: action.string,
      };
    default:
      return state;
  }
}
