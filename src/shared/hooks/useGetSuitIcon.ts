import { cardType } from 'pages/HomePage/HomePage';

export const useGetSuitIcon = (card: cardType) => {
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
};
