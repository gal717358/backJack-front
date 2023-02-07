/* eslint-disable react/no-array-index-key */
// import { obj } from 'data/cardsData';
import React, { FC } from 'react';
import Card from 'shared/Card';
import useStyles from './useStyles';

interface PlayerCardsProps {
  playerTotal: number;
  playerCards: string[];
}
const PlayerCards: FC<PlayerCardsProps> = ({ playerTotal, playerCards }) => {
  const classes = useStyles();

  return (
    <div className='player-cards'>
      <div className={classes.scoreWrapper}>
        <h3 className={classes.playerTitleStyle}>Your Hand</h3>
        <h3>Total: {playerTotal}</h3>
      </div>
      <div className={classes.cardsContainer}>
        {playerCards?.map((card, index) => {
          return <Card key={index} card={card} />;
        })}
      </div>
    </div>
  );
};

export default PlayerCards;
