import { makeStyles } from '@mui/styles';
import boardBackground from 'assets/images/TableBackground.jpeg';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: `url(${boardBackground})`,
    backgroundSize: 'cover',
    height: '100vh',
    backgroundRepeat: 'no-repeat',
  },
});

export default useStyles;
