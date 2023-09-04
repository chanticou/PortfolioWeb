import React, { useState, useEffect } from "react";
import "./index.css";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div className="content_button_music">
      <button className="button_music" onClick={toggle}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};
