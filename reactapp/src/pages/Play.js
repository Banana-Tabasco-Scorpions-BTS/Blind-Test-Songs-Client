import React, { useRef, useState, useEffect } from "react";
import { RoundEnd } from "../components/RoundEnd";
import { RoundOngoing } from "../components/RoundOngoing";
import { RoundStart } from "../components/RoundStart";
import { Result } from "../components/Result";
import { useLocation } from "react-router-dom";

export function Play(props) {
  const [currentView, setCurrentView] = useState("round_start");
  const [guess, setGuess] = useState("");
  const [round, setRound] = useState(0);
  const [trackURL, setTrackURL] = useState();
  const [gameID, setGameID] = useState();
  const [user, setUser] = useState("");
  const [roundSuccess, setRoundSuccess] = useState(false);

  const [songInfo, setSongInfo] = useState();
  const [score, setScore] = useState();
  const [previousScore, setPreviousScore] = useState();

  const location = useLocation();

  useEffect(() => {
    setTrackURL(location.state.trackURL);
    setUser(location.state.user);
    setGameID(location.state.gameID);
  }, []);

  return (
    <section className="container">
      {(() => {
        if (currentView === "round_start") {
          return (
            <div className="round_start">
              <RoundStart
                setRound={setRound}
                gameID={gameID}
                round={round}
                setCurrentView={setCurrentView}
                setRoundSuccess={setRoundSuccess}
              />
            </div>
          );
        }
        if (currentView === "round_ongoing") {
          return (
            <div className="round_ongoing">
              <RoundOngoing
                gameID={gameID}
                guess={guess}
                trackURL={trackURL}
                setGuess={setGuess}
                setCurrentView={setCurrentView}
                songInfo={songInfo}
                setSongInfo={setSongInfo}
                score={score}
                setScore={setScore}
                roundSuccess={roundSuccess}
                setRoundSuccess={setRoundSuccess}
              />
            </div>
          );
        }
        if (currentView === "round_end") {
          return (
            <div className="round_end">
              <RoundEnd
                setCurrentView={setCurrentView}
                songInfo={songInfo}
                score={score}
                gameID={gameID}
                setTrackURL={setTrackURL}
                round={round}
                setRound={setRound}
                setPreviousScore={setPreviousScore}
                roundSuccess={roundSuccess}
              />
            </div>
          );
        }
        if (currentView === "result") {
          return (
            <div className="result">
              <Result
                setCurrentView={setCurrentView}
                user={user}
                score={score}
                previousScore={previousScore}
                setGameID={setGameID}
                setTrackURL={setTrackURL}
                setRound={setRound}
                setScore={setScore}
              />
            </div>
          );
        }
      })()}
    </section>
  );
}
