/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { cardType } from 'pages/HomePage/HomePage';
import { useGetSuitIcon } from 'shared/hooks/useGetSuitIcon';
import { useMatchSuitToCard } from 'shared/hooks/useMatchSuitToCard';
import useStyles from './useStyles';

interface CardProps {
  card: cardType;
}
const Card: FC<CardProps> = ({ card }) => {
  const classes = useStyles();
  const suitIcon = useGetSuitIcon(card);
  const matchSuit = useMatchSuitToCard(card);

  return (
    <div className={classes.root}>
      <div className={classes.topContainerStyle}>
        <div style={{ color: card?.color }}>{card?.value}</div>
        <div style={{ color: card?.color }}>{matchSuit}</div>
      </div>
      <div className={classes.middleSymbolStyle} style={{ color: card?.color }}>
        {suitIcon}
      </div>
      <div className={classes.bottomContainerStyle}>
        <div style={{ color: card?.color }}>{card?.value}</div>
        <div style={{ color: card?.color }}>{matchSuit}</div>
      </div>
    </div>
  );
};

export default Card;
