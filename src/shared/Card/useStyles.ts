import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    height: '150px',
    width: '100px',
    backgroundColor: 'white',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  topContainerStyle: {
    position: 'absolute',
    color: 'black',
    top: '10px',
    left: '10px',
  },
  middleSymbolStyle: {
    width: '100%',
    fontSize: '50px',
  },
  bottomContainerStyle: {
    position: 'absolute',
    color: 'black',
    bottom: '10px',
    right: '10px',
  },
});

export default useStyles;
