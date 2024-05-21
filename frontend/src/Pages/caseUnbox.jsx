import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import RewardBox from "../components/rewardBox.jsx";
import { useCurrentUser } from "../hooks/useCurrentUser.jsx";
import "../Styles/caseUnbox.css";

const rewards = [
  {
    name: "$10",
    amount: 10,
    text: "$10.",
    imageUrl: "../resources/csgo_skins/nightwish.png",
  },
  {
    name: "$20",
    amount: 20,
    text: "$20.",
    imageUrl: "../resources/csgo_skins/neon_revolution.png",
  },
  {
    name: "$30",
    amount: 30,
    text: "$30.",
    imageUrl: "../resources/csgo_skins/printstream_deagle.png",
  },
  {
    name: "$50",
    amount: 50,
    text: "$50.",
    imageUrl: "../resources/csgo_skins/hydra_gloves_emerald.png",
  },
  {
    name: "$100",
    amount: 100,
    text: "$100.",
    imageUrl: "../resources/csgo_skins/AWP_Asiimov.png",
  },
  {
    name: "$1000",
    amount: 1000,
    text: "$1000.",
    imageUrl: "../resources/csgo_skins/butterfly_crimson_web.png",
  },
];

const postCaseUnbox = () =>
  fetch("http://localhost:4000/game/caseunbox", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => res.json());

export default function CaseOpening() {
  const { user, refetch: refetchBalance } = useCurrentUser();
  const balance = user?.balance || 0;
  const [isAnimating, setIsAnimating] = useState(false);

  const { mutate } = useMutation({
    mutationFn: postCaseUnbox,
    onSuccess: ({ success, message, reward }) => {
      if (!success) {
        alert(message);
        return;
      }

      spinAnimation(reward);
    },
  });

  const spin = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    mutate();
  };

  const spinAnimation = (rewardAmount) => {
    let spinCount = 0; // Counter for the number of spins
    let spinInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * rewards.length); // Choose a random reward
      const reward = rewards[randomIndex];
      setReward(reward); // Update the reward shown to the player
      spinCount++;

      if (spinCount > 10) {
        clearInterval(spinInterval);
        const reward = rewards.find((r) => r.amount === rewardAmount);
        setResult(reward.name);
        setReward(reward);
        refetchBalance();
        setIsAnimating(false);
      }
    }, 200);
  };

  const spinCost = 100;

  // State for reward and reward message
  const [reward, setReward] = useState({});
  const [result, setResult] = useState("");

  return (
    <div>
      <h1 className="RewardsHeader">IN THIS CASE</h1>
      <div className="reward-grid">
        {rewards.map((reward, index) => (
          <RewardBox key={index} reward={reward} />
        ))}
      </div>
      <div className="CaseOpening">
        <h1>Case Opening</h1>
        <p>
          Balance: $<span id="saldo">{balance}</span>{" "}
        </p>
        <button disabled={isAnimating} onClick={spin}>
          Open Case (${spinCost})
        </button>
        <div id="case">
          {reward.imageUrl && (
            <img src={reward.imageUrl} alt={reward.name} id="reward" />
          )}
        </div>
        <p id="result">Your drop: {result}</p>
      </div>
    </div>
  );
}
