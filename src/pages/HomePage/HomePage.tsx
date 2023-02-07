/* eslint-disable react/no-array-index-key */
import { useState, useEffect, useCallback, useMemo } from 'react';
import api from 'utils/Api';
import Card from 'shared/Card';
import backCard from 'assets/images/backCard.png';
import Button from 'shared/Button';
import useStyles from './useStyles';

type StayDataType = {
  dealerCards: string[];
  dealerTotal: number;
  playerTotal: number;
};
type SymbolTyp = {
  [key: string]: {
    color: string;
  };
};
const obj: SymbolTyp = {
  '♠': { color: 'black' },
  '♣': { color: 'black' },
  '♥': { color: 'red' },
  '♦': { color: 'red' },
};
const HomePage = () => {
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerTotal, setPlayerTotal] = useState(0);
  const [dealerTotal, setDealerTotal] = useState(0);
  const [gameMessage, setGameMessage] = useState('');
  const [gameOver, setGameOver] = useState(false);
  const classes = useStyles();

  const startGame = useCallback(() => {
    api
      .startGame()
      .then((data) => {
        setPlayerCards(data.playerCards);
        setDealerCards(data.dealerCards);
        setPlayerTotal(data.playerTotal);
        setDealerTotal(data.dealerTotal);
        setGameMessage('Your turn. Would you like to hit or stay?');
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const playAgain = useCallback(() => {
    startGame();
    setGameOver(false);
  }, [startGame]);

  useEffect(() => {
    startGame();
  }, [startGame]);

  const onHit = useCallback(() => {
    api
      .hit()
      .then((data) => {
        setPlayerCards(data.playerCards);
        setPlayerTotal(data.playerTotal);
        if (data.playerTotal > 21) {
          setGameMessage('You busted! Dealer wins.');
          setGameOver(true);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const calculateCardsValue = useCallback((data: StayDataType) => {
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
  }, []);

  const onStay = useCallback(() => {
    api
      .stay()
      .then((data) => {
        setDealerCards(data.dealerCards);
        setDealerTotal(data.dealerTotal);
        calculateCardsValue(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [calculateCardsValue]);

  const getSymbol = useCallback(() => {
    const symbols = Object.keys(obj);
    const random = Math.floor(Math.random() * symbols.length);
    return symbols[random];
  }, []);

  const dealerHands = useMemo(() => {
    if (!gameOver) {
      const symbol = getSymbol();
      return (
        <>
          <Card
            value={dealerCards[0]}
            symbol={symbol}
            color={obj[symbol].color}
          />
          <img
            src={backCard}
            alt='backCard'
            className={classes.backCardStyle}
          />
        </>
      );
    }
    return dealerCards?.map((card, index) => {
      const symbol = getSymbol();
      return (
        <Card
          key={index}
          value={card}
          symbol={symbol}
          color={obj[symbol].color}
        />
      );
    });
  }, [classes.backCardStyle, dealerCards, gameOver, getSymbol]);

  return (
    <section className={classes.root}>
      <div className='player-cards'>
        <div className={classes.cardsContainer}>{dealerHands}</div>
        <div className={classes.scoreWrapper}>
          <h3 className={classes.playerTitleStyle}>Dealer Hands</h3>
          {gameOver && <h3>Total: {dealerTotal}</h3>}
        </div>
      </div>

      <div className='player-cards'>
        <div className={classes.scoreWrapper}>
          <h3 className={classes.playerTitleStyle}>Your Hand</h3>
          <h3>Total: {playerTotal}</h3>
        </div>
        <div className={classes.cardsContainer}>
          {playerCards?.map((card, index) => {
            const symbol = getSymbol();
            return (
              <Card
                key={index}
                value={card}
                symbol={symbol}
                color={obj[symbol].color}
              />
            );
          })}
        </div>
      </div>
      <h2 className='game-message'>{gameMessage}</h2>
      <div className={classes.buttonsWrapper}>
        {!gameOver ? (
          <div className={classes.buttonsWrapper}>
            <Button
              label='Hit'
              onClick={onHit}
              customStyle={classes.hitButtonStyle}
            />
            <Button
              label='Stay'
              onClick={onStay}
              customStyle={classes.stayButtonStyle}
            />
          </div>
        ) : (
          <Button label='play again' onClick={playAgain} />
        )}
      </div>
    </section>
  );
};
export default HomePage;
