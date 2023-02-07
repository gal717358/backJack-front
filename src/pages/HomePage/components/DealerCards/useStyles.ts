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
  dealerTitleStyle: {
    color: 'black',
  },
  backCardStyle: {
    height: '150px',
    width: '100px',
  },
});

export default useStyles;
