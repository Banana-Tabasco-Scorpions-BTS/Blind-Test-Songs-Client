import React, { useEffect, useRef } from "react";

export function Player(props) {
  const { trackURL } = props;
  const audio = useRef();

  function getSoundAndFadeAudio(audio) {
    let volume;

    let fadeUp = setInterval(() => {
      if (audio.current === null) return;
      if (volume !== 0) volume = audio.current.volume * 100 + 2;
      audio.current.volume = Math.round(volume) / 100;
      if (volume >= 95) clearInterval(fadeUp);
    }, 150);

    let fadeDown = setInterval(() => {
      if (audio.current === null) return;
      // The audio preview is 30sec, change the minus value to match to the timer
      // TODO: needs a better implementation, check the timer to fade out
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

  return (
    <div>
      //mute
      <audio hidden controls autoPlay ref={audio}>
        <source src={trackURL} type="audio/mp3"></source>
      </audio>
    </div>
  );
}
