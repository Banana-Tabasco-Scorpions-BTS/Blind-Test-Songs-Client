import React, { useEffect, useRef } from "react";

export function Player(props) {
  const { songsdata } = props;
  const url = songsdata[1].url;
  const audio = useRef()

  function getSoundAndFadeAudio(audio) {
    let volume;

    let fadeUp = setInterval(() => {
      if (volume !== 0) volume = audio.current.volume * 100 + 2;
      audio.current.volume = Math.round(volume) / 100;
      if (volume >= 95) clearInterval(fadeUp);
    }, 150);

    let fadeDown = setInterval(() => {
      if (audio.current.currentTime > audio.current.duration - 5) {
        volume = audio.current.volume * 100 -2;
        audio.current.volume = Math.round(volume) / 100;
        if (volume < 5) clearInterval(fadeDown);
      }
    }, 150)
  }

  useEffect(() => {
    console.log(audio)
    audio.current.volume = 0;
    getSoundAndFadeAudio(audio)
  }, [audio])

  return (
    <div>

      <audio hidden controls autoPlay ref={audio}>
        <source src={url} type="audio/mp3" ></source>
      </audio>

    </div>
  )
}
