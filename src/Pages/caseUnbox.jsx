import React, { useState, useRef } from 'react';

export default function CaseOpening() {
    const [saldo, setSaldo] = useState(100); 
    const [isRunning, setIsRunning] = useState(false); 
    const rewards = [
        { name: '$10', amount: 10, text: 'Your drop: $10.' },
        { name: '$20', amount: 20, text: 'Your drop: $20.' },
        { name: '$30', amount: 30, text: 'Your drop: $30.' },
        { name: '$50', amount: 50, text: 'Your drop: $50.' },
        { name: '$100', amount: 100, text: 'Your drop: $100.' },
        { name: '$1000', amount: 1000, text: 'Your drop: $1000.' },
        { name: '$0', amount: 0, text: 'Your drop: $0' },
    ];

    const openCase = () => {
        if (isRunning) return; 

        if (saldo < 10) {
            alert("Insufficient funds!");
            return;
        }

        setIsRunning(true); 

        let updatedSaldo = saldo - 10;

        let spinCount = 0;
        let spinInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * rewards.length);
            const reward = rewards[randomIndex];
            setReward(reward.name);
            spinCount++;

            if (spinCount > 10) {
                clearInterval(spinInterval);

                const finalReward = rewards.find(r => r.name === reward.name); 
                updatedSaldo += finalReward.amount;

                setRewardText(finalReward.text);
                setResult(finalReward.text);
                setSaldo(updatedSaldo);
                setIsRunning(false); 
            }
        }, 200);
    };

    const [reward, setReward] = useState('');
    const [rewardText, setRewardText] = useState('');
    const [result, setResult] = useState('');

    return (
        <div>
            <h1>Case Opening Game</h1>
            <p>Saldo: $<span id="saldo">{saldo}</span> </p>
            <button onClick={openCase}>Öppna case ($10)</button>
            <div id="case">
                <div id="reward">{reward}</div>
            </div>
            <p id="result">{result}</p>
        </div>
    );
}
