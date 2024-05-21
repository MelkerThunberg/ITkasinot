import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useCurrentUser } from "../hooks/useCurrentUser";

const postTest = ({ betAmount }) =>
  fetch("http://localhost:4000/game/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      betAmount,
    }),
    credentials: "include",
  }).then((res) => res.json());

export default function Test() {
  const { refetch: refetchBalance } = useCurrentUser();
  const [betAmount, setBetAmount] = useState(0);
  const { mutate, data, reset } = useMutation({
    mutationFn: postTest,
    onSuccess: ({ success, message }) => {
      if (!success) {
        alert(message);
        playAgain();
        return;
      }
      refetchBalance();
      setBetAmount(betAmount * 2); // Dubbla insatsen automatiskt
    },
  });

  const playAgain = () => {
    reset();
    setBetAmount(betAmount * 2); // Dubbla insatsen automatiskt
  };

  const result = data?.result;
  const winnings = data?.winnings;

  return (
    <div>
      <h1 id="unusedh1">Test</h1>
      {data && (
        <>
          <h3 style={{ color: winnings > 0 ? "green" : "red" }}>
            {winnings !== 0 && `Winnings: ${winnings}`}
          </h3>
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
          <button onClick={() => mutate({ betAmount })}>
            Flip coin
          </button>
        </>
      )}
      {data && <button onClick={playAgain}>Play again</button>}
    </div>
  );
}
