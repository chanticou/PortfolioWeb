import { PLAY_MUSIC } from "../../actions_types";

let music = null; // Declara la variable de música fuera de la acción

export function PlayMusic(url) {
  return async function (dispatch, getState) {
    const { play } = getState(); // Obtén el estado actual de reproducción
    let str;
    if (!music) {
      music = new Audio(url);
    }

    if (play) {
      music.pause();
      str = "Play";
    } else {
      music.play();
      str = "Pause";
    }

    dispatch({
      type: PLAY_MUSIC,
      payload: !play,
      string: str,
    });
  };
}
