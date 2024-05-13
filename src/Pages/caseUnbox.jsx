import  { useState } from 'react';
import Navbar from '../components/navbar.jsx';
import '../Styles/caseUnbox.css';

export default function CaseOpening() {
    const [saldo, setSaldo] = useState(100); // State for the player's balance
    const [isRunning, setIsRunning] = useState(false); // State to keep track of whether the game is running

    // A list of different rewards with their names, values, and messages to the player
    const rewards = [
        { name: '$10', amount: 10, text: 'Your drop: $10.' },
        { name: '$20', amount: 20, text: 'Your drop: $20.' },
        { name: '$30', amount: 30, text: 'Your drop: $30.' },
        { name: '$50', amount: 50, text: 'Your drop: $50.' },
        { name: '$100', amount: 100, text: 'Your drop: $100.' },
        { name: '$1000', amount: 1000, text: 'Your drop: $1000.' },
        { name: '$0', amount: 0, text: 'Your drop: $0' },
    ];

    // Function to open the case and choose a random reward
    const openCase = () => {
        if (isRunning) return; // If the game is already running, exit the function

        if (saldo < 10) {
            alert("Insufficient funds!"); // Show a warning if the player doesn't have enough money
            return;
        }

        setIsRunning(true); // Set isRunning to true when the game starts

        let updatedSaldo = saldo - 10; // Update balance after the player opens the case

        let spinCount = 0; // Counter for the number of spins
        let spinInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * rewards.length); // Choose a random reward
            const reward = rewards[randomIndex];
            setReward(reward.name); // Update the reward shown to the player
            spinCount++;

            if (spinCount > 10) { // When spin count reaches 10
                clearInterval(spinInterval); // Stop the interval to end the animation

                // Find the final reward based on the selected reward name
                const finalReward = rewards.find(r => r.name === reward.name); 
                updatedSaldo += finalReward.amount; // Update balance with the reward value

                // Update reward message and result text for the player
                setResult(finalReward.text);
                setSaldo(updatedSaldo); // Update balance with the new balance after the player gets the reward
                setIsRunning(false); // Set isRunning to false when the game is finished
            }
        }, 200); // Animation lasts for 200 milliseconds
    };

     // State for reward and reward message
    const [reward, setReward] = useState('');
    const [result, setResult] = useState('');

    return (
        <div className="CaseOpening">
            <Navbar />
            <h1>Case Opening</h1>
            <p>Balance: $<span id="saldo">{saldo}</span> </p>
            <button onClick={openCase}>Open Case ($10)</button>
            <div id="case">
                <div id="reward">{reward}</div>
            </div>
            <p id="result">{result}</p>
        </div>
    );
}
