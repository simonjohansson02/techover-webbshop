import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {

	return createStyles({
		buttons: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			right: '0px',
			height: '100%',
			marginRight: 20,
		},
		addButton: {
			color: '#00c896'
		},
		removeButton: {
			color: '#ff2e2e'
		},
		buttonDisabled: {
			color: '#f7f8fa'
		},
		quantity: {
			background: '#00000017',
			padding: '7px 12px',
			borderRadius: '50%',
			color: '#4e6f7d'
		},
		placeholder: {
			width: 33,
			height: 33
		}
	})
});

export default useStyles;