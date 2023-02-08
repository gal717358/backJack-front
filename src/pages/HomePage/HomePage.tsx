import { useState, useEffect, useCallback } from 'react';
import api from 'utils/Api';
import Button from 'shared/components/Button';
import useStyles from './useStyles';
import DealerCards from './components/DealerCards';
import PlayerCards from './components/PlayerCards';

type StayDataType = {
  dealerCards: string[];
  dealerTotal: number;
  playerTotal: number;
};
export type cardType = {
  suit: string;
  value: string | number;
  color: string;
};

const HomePage = () => {
  const [playerCards, setPlayerCards] = useState<cardType[]>([]);
  const [dealerCards, setDealerCards] = useState<cardType[]>([]);
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

  return (
    <section className={classes.root}>
      <DealerCards
        dealerTotalCards={dealerTotal}
        gameOver={gameOver}
        dealerCards={dealerCards}
      />
      <PlayerCards playerTotal={playerTotal} playerCards={playerCards} />

      <h2 className={classes.messageStyle}>{gameMessage}</h2>
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
