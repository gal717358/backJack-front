/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useMemo } from 'react';
import useStyles from './useStyles';

export type cardType = {
  suit: string;
  value: string | number;
  color: string;
};

interface CardProps {
  card: any;
}
const Card: FC<CardProps> = ({ card }) => {
  const classes = useStyles();
  const mainIcon = useMemo(() => {
    if (card?.value === 'Q') {
      return '♚';
    }
    if (card?.value === 'K') {
      return '♛';
    }
    if (card?.value === 'A') {
      return '♠';
    }
    return card?.value;
  }, [card]);

  const matchSuit = useMemo(() => {
    if (card?.suit === 'hearts') {
      return '♥';
    }
    if (card?.suit === 'diamonds') {
      return '♦';
    }
    if (card?.suit === 'spades') {
      return '♠';
    }
    if (card?.suit === 'clubs') {
      return '♣';
    }
    return '';
  }, [card?.suit]);

  return (
    <div className={classes.root}>
      <div className={classes.topContainerStyle}>
        <div style={{ color: card?.color }}>{card?.value}</div>
        <div style={{ color: card?.color }}>{matchSuit}</div>
      </div>
      <div className={classes.middleSymbolStyle} style={{ color: card?.color }}>
        {mainIcon}
      </div>
      <div className={classes.bottomContainerStyle}>
        <div style={{ color: card?.color }}>{card?.value}</div>
        <div style={{ color: card?.color }}>{matchSuit}</div>
      </div>
    </div>
  );
};

export default Card;
