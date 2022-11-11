import React, { useEffect, useState, useRef } from "react";
import "./Player.css";

export function Player(props) {
  const { trackURL } = props;
  const audio = useRef();
  const volumeRef = useRef(50);
  let volume;

  const [audioMuted, setAudioMute] = useState(false);

  function getSoundAndFadeAudio(audio) {
    let fadeUp = setInterval(() => {
      if (audio.current === null) return;
      if (volume !== 0) volume = audio.current.volume * 100 + 2;
      audio.current.volume = Math.round(volume) / 100;
      if (volume >= 95) clearInterval(fadeUp);
    }, 150);

    let fadeDown = setInterval(() => {
      if (audio.current === null) return;
      if (audio.current.currentTime > audio.current.duration - 10) {
        volume = audio.current.volume * 100 - 2;
        audio.current.volume = Math.round(volume) / 100;
        if (volume < 5) clearInterval(fadeDown);
      }
    }, 150);
  }

  useEffect(() => {
    audio.current.volume = 0;
    getSoundAndFadeAudio(audio);
  }, [audio]);

  let onMute = () => {
    if (audio.current === null) return;
    audio.current.muted = !audioMuted;
    setAudioMute(!audioMuted);
  };

  return (
    <div>
      <audio hidden controls autoPlay ref={audio}>
        <source src={trackURL} type="audio/mp3"></source>
      </audio>
      <button onClick={onMute} id="mute-button">
        {" "}
        🔇{" "}
      </button>
      <button id="volume-button">
        {" "}
        🔉
        <input
          type="range"
          min={0}
          max={1}
          step={0.1}
          value={volume}
          onChange={(event) => {
            volumeRef.current = event.target.value;
            audio.current.volume = volumeRef.current;
          }}
        />{" "}
        🔊
      </button>
    </div>
  );
}
