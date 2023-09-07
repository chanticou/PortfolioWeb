import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayMusic } from "../../redux/actions/index";
import "./index.css";

// const useAudio = (url) => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);

//   const toggle = () => setPlaying(!playing);

//   useEffect(() => {
//     playing ? audio.play() : audio.pause();
//   }, [playing]);

//   useEffect(() => {
//     audio.addEventListener("ended", () => setPlaying(false));
//     return () => {
//       audio.removeEventListener("ended", () => setPlaying(false));
//     };
//   }, []);

//   return [playing, toggle];
// };

export const Player = ({ url }) => {
  const dispatch = useDispatch();
  const { play, musicStr } = useSelector((state) => state);
  const [click, setClick] = useState(false);

  const handleClickPlayMusic = (e) => {
    setClick(true);
    dispatch(PlayMusic(url, click));
  };
  console.log();
  return (
    <div className="content_button_music">
      <button onClick={(e) => handleClickPlayMusic(e)} className="button_music">
        {musicStr}
      </button>
    </div>
  );
};
