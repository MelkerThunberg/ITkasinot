import { useState } from "react";
import "../Styles/dailybonus.css";
import { useCurrentUser } from "../hooks/useCurrentUser.jsx";
import { useMutation } from "@tanstack/react-query";

const PostDailyBonus = () => {
    fetch("http://localhost:4000/game/dailybonus", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  }).then((res) => res.json());
  const [claimed, setClaimed] = useState(false);
  const { user, refetch: refetchBalance } = useCurrentUser();
  const claimCooldown = 10 * 60 * 1000; // 10 minutes in milliseconds
  const lastClaimTimestamp = localStorage.getItem("lastClaimTimestamp");

  const claimDailyBonus = useMutation(async () => {
    // Check if enough time has passed since the last claim
    if (lastClaimTimestamp && Date.now() - parseInt(lastClaimTimestamp) < claimCooldown) {
      console.log("You can claim only once every 10 minutes.");
      return;
    }
    console.log("Claiming daily bonus...");
    const updatedUser = { ...user, balance: user.balance + 10 };
    await updateUser(updatedUser); 
    setClaimed(true);
    localStorage.setItem("lastClaimTimestamp", Date.now().toString());
    refetchBalance();
  });

  const handleClaim = () => {
    claimDailyBonus.mutate();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (lastClaimTimestamp && Date.now() - parseInt(lastClaimTimestamp) >= claimCooldown) {
        setClaimed(false);
        clearInterval(timer);
      }
    }, 1000); 
    return () => clearInterval(timer);
  }, [lastClaimTimestamp, claimCooldown]);

  return (
    <div className="daily-bonus-container">
      {claimed ? (
        <p>Daily bonus claimed! You received $10.</p>
      ) : (
        <button onClick={handleClaim} disabled={claimDailyBonus.isLoading}>
          {claimDailyBonus.isLoading ? 'Claiming...' : 'Claim Daily Bonus'}
        </button>
      )}
    </div>
  );
};

export default PostDailyBonus;
