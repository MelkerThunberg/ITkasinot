import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";
import "../Styles/coinflip.css";

const postCoinFlip = ({ betAmount, guess }) =>
  fetch("http://localhost:4000/game/coinflip", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      betAmount,
      guess,
    }),
    credentials: "include",
  }).then((res) => res.json());

export default function Coinflip() {
  const { refetch: refetchBalance } = useCurrentUser();

  const [betAmount, setBetAmount] = useState(0);
  const [guess, setGuess] = useState("heads");
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [animationClass, setAnimationClass] = useState("");

  const { mutate, data, reset } = useMutation({
    mutationFn: postCoinFlip,
    onSuccess: ({ success, message, result }) => {
      if (!success) {
        alert(message);
        playAgain();
        return;
      }
      refetchBalance();
      setResult(result);
      setAnimationClass(result === "heads" ? "heads" : "tails");

      setTimeout(() => {
        setShowResult(true); // Display the result text after animation finishes
      }, 2000);
    },
  });

  const playAgain = () => {
    reset();
    setBetAmount(0);
    setGuess("heads");
    setResult("");
    setShowResult(false);
    setAnimationClass(""); // Reset animation class
  };

  return (
    <div className="coinflip-container">
      <h1 id="unusedh1">Coin flip</h1>

      <div id="coin" className={animationClass} key={+new Date()}>
        <div className="side-a">
          <h2>TAIL</h2>
        </div>
        <div className="side-b">
          <h2>HEAD</h2>
        </div>
      </div>

      {showResult && data && (
        <>
          <h3 style={{ color: result === guess ? "green" : "red" }}>
            {result !== "" && `Result: ${result}`}
          </h3>
          <h3 style={{ color: data.winnings > 0 ? "green" : "red" }}>
            {data.winnings !== 0 && `Winnings: ${data.winnings}`}
          </h3>
        </>
      )}

      {!data && (
        <>
          <label htmlFor="betAmount">Bet amount:</label>
          <input
            type="number"
            value={betAmount}
            step={100}
            onChange={(e) => setBetAmount(e.target.value)}
          />
          <br />

          <label htmlFor="guess">Guess:</label>
          <select value={guess} onChange={(e) => setGuess(e.target.value)}>
            <option value="heads">Heads</option>
            <option value="tails">Tails</option>
          </select>
          <br />

          <button id="btn" onClick={() => mutate({ betAmount, guess })}>
            Flip coin
          </button>
        </>
      )}
      {data && <button onClick={playAgain}>Play again</button>}
    </div>
  );
}
