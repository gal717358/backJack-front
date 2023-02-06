import React, { useState, useEffect, useCallback } from 'react';
import api from 'utils/Api';
// import useStyles from './useStyles';

const HomePage = () => {
  // const classes = useStyles();

  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerTotal, setPlayerTotal] = useState(0);
  const [dealerTotal, setDealerTotal] = useState(0);
  const [gameMessage, setGameMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    fetch('http://localhost:3001/start')
      .then((res) => res.json())
      .then((data) => {
        setPlayerCards(data.playerCards);
        setDealerCards(data.dealerCards);
        setPlayerTotal(data.playerTotal);
        setDealerTotal(data.dealerTotal);
        setGameMessage('Your turn. Would you like to hit or stay?');
      });
  };
  const startGameTest = useCallback(() => {
    api.startGame().then((res) => console.log(res));
  }, []);

  startGameTest();

  const playAgain = () => {
    startGame();
    setGameOver(false);
  };

  useEffect(() => {
    startGame();
  }, []);

  const hit = () => {
    fetch('http://localhost:3001/hit')
      .then((res) => res.json())
      .then((data) => {
        setPlayerCards(data.playerCards);
        setPlayerTotal(data.playerTotal);
        if (data.playerTotal > 21) {
          setGameMessage('You busted! Dealer wins.');
          setGameOver(true);
        }
      });
  };

  const stay = () => {
    fetch('http://localhost:3001/stay')
      .then((res) => res.json())
      .then((data) => {
        setDealerCards(data.dealerCards);
        setDealerTotal(data.dealerTotal);
        if (data.dealerTotal > 21) {
          setGameMessage('Dealer busted! You win.');
          setGameOver(true);
        } else if (data.playerTotal > data.dealerTotal) {
          setGameMessage('You win!');
          setGameOver(true);
        } else {
          setGameMessage('Dealer wins.');
          setGameOver(true);
        }
      });
  };

  return (
    <div className='game-container'>
      <div className='player-cards'>
        <h3>Player</h3>
        <div>{playerCards.map((card) => card)}</div>
        <div>Total: {playerTotal}</div>
      </div>
      <div className='dealer-cards'>
        <h3>Dealer</h3>
        <div>{!gameOver ? `${dealerCards[0]} ***` : dealerCards}</div>
      </div>
      <h3>{dealerTotal}</h3>
      <div className='game-message'>{gameMessage}</div>
      {!gameOver && (
        <div className='game-actions'>
          <button type='button' onClick={hit}>
            Hit
          </button>
          <button type='button' onClick={stay}>
            Stay
          </button>
        </div>
      )}
      <button type='button' onClick={playAgain}>
        play again{' '}
      </button>
    </div>
  );
};
export default HomePage;
