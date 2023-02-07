import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
  scoreWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playerTitleStyle: {
    color: 'black',
  },
});

export default useStyles;
