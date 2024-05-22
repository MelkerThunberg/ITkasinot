import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
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
  const [gifSrc, setGifSrc] = useState(null);

  const { mutate, data, reset } = useMutation({
    mutationFn: postCoinFlip,
    onSuccess: ({ success, message, result }) => {
      if (!success) {
        alert(message);
        playAgain();
        return;
      }
      refetchBalance();
      // Set the appropriate GIF based on the result
      setGifSrc(result === "heads" ? "../resources/heads.gif" : "../resources/tails.gif");
    },
  });

  const playAgain = () => {
    reset();
    setBetAmount(0);
    setGuess("heads");
    setGifSrc(null); // Reset GIF source when playing again
  };

  const result = data?.result;
  const winnings = data?.winnings;

  return (
    <div>
      <div></div>
      <h1 id="unusedh1">Coin flip</h1>

      {data && (
        <>
          <h3 style={{ color: result === guess ? "green" : "red" }}>
            {result !== "" && `Result: ${result}`}
          </h3>
          <h3 style={{ color: winnings > 0 ? "green" : "red" }}>
            {winnings !== 0 && `Winnings: ${winnings}`}
          </h3>
          <div className="container">
          {gifSrc && <img src={gifSrc} alt={result} />}
          </div>
        </>
      )}

      <br />
      {!data && (
        <>
          <label htmlFor="betAmount">Bet amount:</label>
          <input
            type="number"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
          />
          <br />

          <label htmlFor="guess">Guess:</label>
          <select value={guess} onChange={(e) => setGuess(e.target.value)}>
            <option value="heads">Heads</option>
            <option value="tails">Tails</option>
          </select>
          <br />

          <button onClick={() => mutate({ betAmount, guess })}>
            Flip coin
          </button>
        </>
      )}
      {data && <button onClick={playAgain}>Play again</button>}
    </div>
  );
}
