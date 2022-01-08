import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		productCard: {
      position: 'relative',
      width: '100%',
      height: '350px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 2px 1px 0px rgba(0, 0, 0, 0.1)',
      alignItems: 'center',
      borderRadius: 20
    },
		productCardFlex: {
      display:'flex', 
      position: 'relative',
      height: '100%',
      width: '90%',
      margin: 'auto',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    },
		informationContainer: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    },
		info: {
      display: 'flex',
			alignItems: 'center',
			paddingLeft: '20px',
			width: '80%',
			left: 0,
			margin: 0,
      flexDirection: 'column',
  
    },
    img:{
      width: '80px'
    },
    details:{},
		title: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkitLineClamp': '2',
      '-webkitBoxOrient': 'vertical',
    },
		detailMargin: {
      textAlign: 'center'
    },
		buttons: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto 20px'
    },
    button: {},
    button__add: {
      color: 'green'
    },
    button__remove: {
      color: 'red'
    },
		divider: {
			transform: 'translateY(-1px)',
			width: '90%',
			margin: 'auto'
		}
	})
);

export default useStyles;
