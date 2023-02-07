import React, { FC, useMemo } from 'react';
import useStyles from './useStyles';

interface CardProps {
  value: string;
  symbol: string;
  color: string;
}
const Card: FC<CardProps> = ({ value, symbol, color }) => {
  const classes = useStyles();
  const mainIcon = useMemo(() => {
    if (value === 'Q') {
      return '♚';
    }
    if (value === 'K') {
      return '♛';
    }
    if (value === 'A') {
      return '♠';
    }
    return symbol;
  }, [symbol, value]);
  return (
    <div className={classes.root}>
      <div className={classes.topContainerStyle}>
        <div style={{ color: color }}>{value}</div>
        <div style={{ color: color }}>{symbol}</div>
      </div>
      <div className={classes.middleSymbolStyle} style={{ color: color }}>
        {mainIcon}
      </div>
      <div className={classes.bottomContainerStyle}>
        <div style={{ color: color }}>{value}</div>
        <div style={{ color: color }}>{symbol}</div>
      </div>
    </div>
  );
};

export default Card;
