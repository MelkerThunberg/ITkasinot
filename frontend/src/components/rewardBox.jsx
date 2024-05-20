import React from "react";
import { Link } from "react-router-dom";
import "./rewardBox.css"; // Importera CSS-filen för rewardBox-stilen

export default function RewardBox({ reward }) {
    return (
        <div className="reward-box">
            <img src={reward.imageUrl} alt={reward.name} className="reward-image" />
            <p className="reward-text">{reward.text}</p>
        </div>
    );
}
