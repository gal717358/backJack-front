/* eslint-disable react/no-array-index-key */
import React, { FC, useMemo } from 'react';
import Card from 'shared/Card';
import backCard from 'assets/images/backCard.png';
import useStyles from './useStyles';

interface DealerCardsProps {
  dealerTotalCards: number;
  gameOver: boolean;
  dealerCards: string[];
}
const DealerCards: FC<DealerCardsProps> = ({
  dealerTotalCards,
  gameOver,
  dealerCards,
}) => {
  const classes = useStyles();
  const dealerHands = useMemo(() => {
    if (!gameOver) {
      return (
        <>
          <Card card={dealerCards[0]} />
          <img
            src={backCard}
            alt='backCard'
            className={classes.backCardStyle}
          />
        </>
      );
    }
    return dealerCards?.map((card, index) => {
      return <Card key={index} card={card} />;
    });
  }, [classes.backCardStyle, dealerCards, gameOver]);
  return (
    <div>
      <div className={classes.cardsContainer}>{dealerHands}</div>
      <div className={classes.scoreWrapper}>
        <h3 className={classes.dealerTitleStyle}>Dealer Hands</h3>
        {gameOver && <h3>Total: {dealerTotalCards}</h3>}
      </div>
    </div>
  );
};

export default DealerCards;
