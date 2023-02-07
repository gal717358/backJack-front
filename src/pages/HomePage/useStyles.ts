import { makeStyles } from '@mui/styles';
import background from 'assets/images/background.png';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
    backgroundImage: `url(${background})`,
    objectFit: 'cover',
    backgroundSize: '100%',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    flexWrap: 'wrap',
  },
  cardsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
  },
  backCardStyle: {
    height: '150px',
    width: '100px',
  },
  playerTitleStyle: {
    color: 'black',
  },
  scoreWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
  },
  hitButtonStyle: {
    background: 'LightGreen',
  },
  stayButtonStyle: {
    backgroundColor: 'aqua',
  },
});

export default useStyles;
