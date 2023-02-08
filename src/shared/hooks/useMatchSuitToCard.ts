import { cardType } from 'pages/HomePage/HomePage';

export const useMatchSuitToCard = (card: cardType) => {
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
};
