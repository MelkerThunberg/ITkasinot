import React, { useState, useEffect } from "react";
import "../Styles/blackjack.css";
import Navbar from "../components/navbar.jsx";

import card2Clubs from "../../resources/English_pattern_2_of_clubs.svg.png";
import card2Diamonds from "../../resources/English_pattern_2_of_diamonds.svg.png";
import card2Hearts from "../../resources/English_pattern_2_of_hearts.svg.png";
import card2Spades from "../../resources/English_pattern_2_of_spades.svg.png";
import card3Clubs from "../../resources/English_pattern_3_of_clubs.svg.png";
import card3Diamonds from "../../resources/English_pattern_3_of_diamonds.svg.png";
import card3Hearts from "../../resources/English_pattern_3_of_hearts.svg.png";
import card3Spades from "../../resources/English_pattern_3_of_spades.svg.png";
import card4Clubs from "../../resources/English_pattern_4_of_clubs.svg.png";
import card4Diamonds from "../../resources/English_pattern_4_of_diamonds.svg.png";
import card4Hearts from "../../resources/English_pattern_4_of_hearts.svg.png";
import card4Spades from "../../resources/English_pattern_4_of_spades.svg.png";
import card5Clubs from "../../resources/English_pattern_5_of_clubs.svg.png";
import card5Diamonds from "../../resources/English_pattern_5_of_diamonds.svg.png";
import card5Hearts from "../../resources/English_pattern_5_of_hearts.svg.png";
import card5Spades from "../../resources/English_pattern_5_of_spades.svg.png";
import card6Clubs from "../../resources/English_pattern_6_of_clubs.svg.png";
import card6Diamonds from "../../resources/English_pattern_6_of_diamonds.svg.png";
import card6Hearts from "../../resources/English_pattern_6_of_hearts.svg.png";
import card6Spades from "../../resources/English_pattern_6_of_spades.svg.png";
import card7Clubs from "../../resources/English_pattern_7_of_clubs.svg.png";
import card7Diamonds from "../../resources/English_pattern_7_of_diamonds.svg.png";
import card7Hearts from "../../resources/English_pattern_7_of_hearts.svg.png";
import card7Spades from "../../resources/English_pattern_7_of_spades.svg.png";
import card8Clubs from "../../resources/English_pattern_8_of_clubs.svg.png";
import card8Diamonds from "../../resources/English_pattern_8_of_diamonds.svg.png";
import card8Hearts from "../../resources/English_pattern_8_of_hearts.svg.png";
import card8Spades from "../../resources/English_pattern_8_of_spades.svg.png";
import card9Clubs from "../../resources/English_pattern_9_of_clubs.svg.png";
import card9Diamonds from "../../resources/English_pattern_9_of_diamonds.svg.png";
import card9Hearts from "../../resources/English_pattern_9_of_hearts.svg.png";
import card9Spades from "../../resources/English_pattern_9_of_spades.svg.png";
import card10Clubs from "../../resources/English_pattern_10_of_clubs.svg.png";
import card10Diamonds from "../../resources/English_pattern_10_of_diamonds.svg.png";
import card10Hearts from "../../resources/English_pattern_10_of_hearts.svg.png";
import card10Spades from "../../resources/English_pattern_10_of_spades.svg.png";
import cardJackClubs from "../../resources/English_pattern_jack_of_clubs.svg.png";
import cardJackDiamonds from "../../resources/English_pattern_jack_of_diamonds.svg.png";
import cardJackHearts from "../../resources/English_pattern_jack_of_hearts.svg.png";
import cardJackSpades from "../../resources/English_pattern_jack_of_spades.svg.png";
import cardQueenClubs from "../../resources/English_pattern_queen_of_clubs.svg.png";
import cardQueenDiamonds from "../../resources/English_pattern_queen_of_diamonds.svg.png";
import cardQueenHearts from "../../resources/English_pattern_queen_of_hearts.svg.png";
import cardQueenSpades from "../../resources/English_pattern_queen_of_spades.svg.png";
import cardKingClubs from "../../resources/English_pattern_king_of_clubs.svg.png";
import cardKingDiamonds from "../../resources/English_pattern_king_of_diamonds.svg.png";
import cardKingHearts from "../../resources/English_pattern_king_of_hearts.svg.png";
import cardKingSpades from "../../resources/English_pattern_king_of_spades.svg.png";
import cardAceClubs from "../../resources/English_pattern_ace_of_clubs.svg.png";
import cardAceDiamonds from "../../resources/English_pattern_ace_of_diamonds.svg.png";
import cardAceHearts from "../../resources/English_pattern_ace_of_hearts.svg.png";
import cardAceSpades from "../../resources/English_pattern_ace_of_spades.svg.png";

export default function Blackjack() {
  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [hiddenDealerCard, setHiddenDealerCard] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [hiddenDealerCardValue, setHiddenDealerCardValue] = useState(0);
  const [message, setMessage] = useState("");
  const [dealerImageHand, setDealerImageHand] = useState([]);
  const [playerImageHand, setPlayerImageHand] = useState([]);
  const [hiddenDealerCardImage, setHiddenDealerCardImage] = useState();
  const [gameOver, setGameOver] = useState(false);

  // Ace calculation test
  const [playerAceCount, setPlayerAceCount] = useState(0);
  const [dealerAceCount, setDealerAceCount] = useState(0);

  const [deck, setDeck] = useState([
    { value: "2♥︎", image: card2Hearts },
    { value: "3♥︎", image: card3Hearts },
    { value: "4♥︎", image: card4Hearts },
    { value: "5♥︎", image: card5Hearts },
    { value: "6♥︎", image: card6Hearts },
    { value: "7♥︎", image: card7Hearts },
    { value: "8♥︎", image: card8Hearts },
    { value: "9♥︎", image: card9Hearts },
    { value: "10♥︎", image: card10Hearts },
    { value: "J♥︎", image: cardJackHearts },
    { value: "Q♥︎", image: cardQueenHearts },
    { value: "K♥︎", image: cardKingHearts },
    { value: "A♥︎", image: cardAceHearts },
    { value: "2♠︎", image: card2Spades },
    { value: "3♠︎", image: card3Spades },
    { value: "4♠︎", image: card4Spades },
    { value: "5♠︎", image: card5Spades },
    { value: "6♠︎", image: card6Spades },
    { value: "7♠︎", image: card7Spades },
    { value: "8♠︎", image: card8Spades },
    { value: "9♠︎", image: card9Spades },
    { value: "10♠︎", image: card10Spades },
    { value: "J♠︎", image: cardJackSpades },
    { value: "Q♠︎", image: cardQueenSpades },
    { value: "K♠︎", image: cardKingSpades },
    { value: "A♠︎", image: cardAceSpades },
    { value: "2♣︎", image: card2Clubs },
    { value: "3♣︎", image: card3Clubs },
    { value: "4♣︎", image: card4Clubs },
    { value: "5♣︎", image: card5Clubs },
    { value: "6♣︎", image: card6Clubs },
    { value: "7♣︎", image: card7Clubs },
    { value: "8♣︎", image: card8Clubs },
    { value: "9♣︎", image: card9Clubs },
    { value: "10♣︎", image: card10Clubs },
    { value: "J♣︎", image: cardJackClubs },     // Alla värde på 10 blir denna -kanske inte!
    { value: "Q♣︎", image: cardQueenClubs },
    { value: "K♣︎", image: cardKingClubs },
    { value: "A♣︎", image: cardAceClubs },
    { value: "2♦︎", image: card2Diamonds },
    { value: "3♦︎", image: card3Diamonds },
    { value: "4♦︎", image: card4Diamonds },
    { value: "5♦︎", image: card5Diamonds },
    { value: "6♦︎", image: card6Diamonds },
    { value: "7♦︎", image: card7Diamonds },   
    { value: "8♦︎", image: card8Diamonds },
    { value: "9♦︎", image: card9Diamonds },
    { value: "10♦︎", image: card10Diamonds },
    { value: "J♦︎", image: cardJackDiamonds },
    { value: "Q♦︎", image: cardQueenDiamonds },
    { value: "K♦︎", image: cardKingDiamonds },
    { value: "A♦︎", image: cardAceDiamonds },
  ]);

  useEffect(() => {
    if (gameOver) {
      setPlayerAceCount(0);
    }
  }, [gameOver]);

  const countCardValue = (card /*, currentScore*/) => {
    const value = card.value;

    if (
      value === "A♥︎" ||
      value === "A♠︎" ||
      value === "A♣︎" ||
      value === "A♦︎"
    ) {
      return 11;
    }
    if (
      value === "J♥︎" ||
      value === "J♠︎" ||
      value === "J♣︎" ||
      value === "J♦︎" ||
      value === "Q♥︎" ||
      value === "Q♠︎" ||
      value === "Q♣︎" ||
      value === "Q♦︎" ||
      value === "K♥︎" ||
      value === "K♠︎" ||
      value === "K♣︎" ||
      value === "K♦︎" ||
      value === "10♥︎" ||
      value === "10♠︎" ||
      value === "10♣︎" ||
      value === "10♦︎"
    ) {
      return 10;
    }
    if (
      value === "9♥︎" ||
      value === "9♠︎" ||
      value === "9♣︎" ||
      value === "9♦︎"
    ) {
      return 9;
    }
    if (
      value === "8♥︎" ||
      value === "8♠︎" ||
      value === "8♣︎" ||
      value === "8♦︎"
    ) {
      return 8;
    }
    if (
      value === "7♥︎" ||
      value === "7♠︎" ||
      value === "7♣︎" ||
      value === "7♦︎"
    ) {
      return 7;
    }
    if (
      value === "6♥︎" ||
      value === "6♠︎" ||
      value === "6♣︎" ||
      value === "6♦︎"
    ) {
      return 6;
    }
    if (
      value === "5♥︎" ||
      value === "5♠︎" ||
      value === "5♣︎" ||
      value === "5♦︎"
    ) {
      return 5;
    }
    if (
      value === "4♥︎" ||
      value === "4♠︎" ||
      value === "4♣︎" ||
      value === "4♦︎"
    ) {
      return 4;
    }
    if (
      value === "3♥︎" ||
      value === "3♠︎" ||
      value === "3♣︎" ||
      value === "3♦︎"
    ) {
      return 3;
    }
    if (
      value === "2♥︎" ||
      value === "2♠︎" ||
      value === "2♣︎" ||
      value === "2♦︎"
    ) {
      return 2;
    }
  };

  const reducePlayerAce = (playerScore, playerAceCount) => {
    while (playerScore > 21 && playerAceCount > 0) {
      setPlayerScore(playerScore - 10);
      setPlayerAceCount(playerAceCount - 1);
  }
  }
  const reduceDealerAce = (dealerScore, dealerAceCount) => {
    while (dealerScore > 21 && dealerAceCount > 0) {
      setDealerScore(dealerScore - 10);
      setDealerAceCount(dealerAceCount - 1);
  }
  }

  const dealDeck = (array) => {

    let random = Math.floor(Math.random() * array.length);
    let card = array[random];
    array.splice(random, 1);
    let cardValue = countCardValue(card);
    console.log(array.length);
    return { card: card.value, cardValue: cardValue, image: card.image };
  };

  const showhiddenDealerCard = () => {
    setDealerHand([...dealerHand, hiddenDealerCard]);
    setDealerScore(dealerScore + hiddenDealerCardValue);
    setDealerImageHand([...dealerImageHand, hiddenDealerCardImage]);
  };

  const dealCards = () => {
    setDealerAceCount(0);
    setPlayerAceCount(0);
    const playerCard1 = dealDeck([...deck]);
    const dealerCard1 = dealDeck([...deck]);
    const playerCard2 = dealDeck([...deck]);
    const dealerCard2 = dealDeck([...deck]);

    if (
      playerCard1.card === "A♠︎" ||
      playerCard1.card === "A♣︎" ||
      playerCard1.card === "A♦︎" ||
      playerCard1.card === "A♥︎" ||
      playerCard2.card === "A♠︎" ||
      playerCard2.card === "A♣︎" ||
      playerCard2.card === "A♦︎" ||
      playerCard2.card === "A♥︎"
    ) {
      setPlayerAceCount(playerAceCount + 1);
    }
    if (
      dealerCard1.card === "A♠︎" ||
      dealerCard1.card === "A♣︎" ||
      dealerCard1.card === "A♦︎" ||
      dealerCard1.card === "A♥︎" ||
      dealerCard2.card === "A♠︎" ||
      dealerCard2.card === "A♣︎" ||
      dealerCard2.card === "A♦︎" ||
      dealerCard2.card === "A♥︎"
    ) {
      setDealerAceCount(dealerAceCount + 1);
    }
    const playerScore = playerCard1.cardValue + playerCard2.cardValue;
    const dealerScore = dealerCard1.cardValue + dealerCard2.cardValue;
    const dealerImage = dealerCard1.image;
    const playerImage = [playerCard1.image, playerCard2.image];

    setPlayerHand([playerCard1.card, playerCard2.card]);
    setPlayerScore(playerScore);
    setPlayerImageHand(playerImage);

    setDealerHand([dealerCard1.card]);
    setDealerScore(dealerCard1.cardValue);
    setDealerImageHand([dealerImage]);

    setHiddenDealerCard(dealerCard2.card);
    setHiddenDealerCardValue(dealerCard2.cardValue);
    setHiddenDealerCardImage(dealerCard2.image);

    setGameOver(false);
    setMessage("");

    if (playerScore === 21) {
      showhiddenDealerCard();

      if (dealerScore === 21) {
        setMessage("Push!");
        setGameOver(true);
      } else {
        setMessage("Blackjack! Player wins!");
        setGameOver(true);
      }
    }
  };

  const hit = () => {
    const newCard = dealDeck(deck);
    setPlayerHand([...playerHand, newCard.card]);
    const newScore = playerScore + newCard.cardValue;
    setPlayerScore(newScore);

    setPlayerImageHand([...playerImageHand, newCard.image]);

    reducePlayerAce();

    if (newScore > 21) { // Borde va rätt
      setMessage("Player busts! Dealer wins!");
      gameOverFunc()


      // Ta bort insatsen
    }
    if (newScore === 21) {
      stand();
    }
  };

  // När spelaren får 20 och stannar så drar dealern ett till kort när den har Knäckt och 9a gömd (19) samma på (18).
  // Borde stanna eftersom den har över 17
  // När både spelaren och dealern får samma fungerar det
  // Blir push

  // När spelaren får 21 genom 2a, J, 9 så stannar spelaren då har dealern 4a, Q, 4a men sedan vinner dealern FEL????

  // När spelaren får 21 och dealern bj så vinner dealern RÄTT!!

  // Dealern plockar ett till kort när den redan har högre värde än spelaren troligtviss pga det är under 17 dealern(16) spelaren(14)

  // Dealer plockar kort fast den har över 17 när spelaren har 20

  // Bugg med vissar samma kort flera gånger kommer ibland
  // Tar inte bort kort från leken på rätt sätt och åtterställs eller inte leken

  const stand = () => {
    showhiddenDealerCard();
    reduceDealerAce();

    let newScore = dealerScore;

    const updatedDealerHand = [...dealerHand];
    const updatedDealerHandImage = [...dealerImageHand];

    while (newScore < 17 || (newScore < playerScore && newScore <= 21)) {
      const newCard = dealDeck(deck);
      updatedDealerHand.push(newCard.card);
      reduceDealerAce();
      updatedDealerHandImage.push(newCard.image);
      setDealerHand(updatedDealerHand);
      setDealerImageHand(updatedDealerHandImage);

      newScore += newCard.cardValue;
    }
    setDealerHand(updatedDealerHand);
    setDealerScore(newScore);

    // När spelaren får 21 och sedan dealern också får 21 så vinner dealern FEL!
    if (newScore > 21) {    // Borde va rätt
      setMessage("Dealer busts! Player wins!");
      gameOverFunc()

    } else if (playerScore > newScore) {
      setMessage("Player wins!");
      // setMessage("Dealer wins!");

      gameOverFunc()

    } else if (playerScore < newScore) {
      setMessage("Dealer wins!");
      // setMessage("Player wins!");
      gameOverFunc()

    } else if (newScore === playerScore) {  // Fungerar nog inte
      setMessage("Push!");
      gameOverFunc()
    }
  };
  const gameOverFunc = () =>  {
    setGameOver(true);
    setDealerAceCount(0);
    setPlayerAceCount(0);
  }
  

  return (
    <div>
      <Navbar />
      <div className="content-container-blackjack">
        <div className="button-container">
          <button onClick={dealCards}>Deal Cards</button>
          <button onClick={hit} disabled={gameOver}>
            Hit
          </button>
          <button onClick={stand} disabled={gameOver}>
            Stand
          </button>
        </div>
        <div>
          <h2 id="player-hand">Player Hand: {playerScore} :: {playerAceCount}</h2>
          <div className="card-container">
            {playerImageHand.map((image, index) => (
              <div key={index} className="card">
                <img src={image} alt={`Player Card ${index}`} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 id="dealer-hand">Dealer Hand: {dealerScore} :: {dealerAceCount}</h2>
          <div className="card-container">
            {dealerImageHand.map((image, index) => (
              <div key={index} className="card">
                <img src={image} alt={`Dealer Card ${index}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="message-container">
          <p>{message}</p>
          {message && (
            <button onClick={dealCards} id="deal-again">
              Deal Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
