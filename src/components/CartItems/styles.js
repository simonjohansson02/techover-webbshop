import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) =>
	createStyles({
		cartItem: {
			marginBottom: 15,
			background: '#ffffff',
			borderRadius: 5,
			padding: '10px 20px'
		},
		title: {
			color: '#4e6f7d',
			fontWeight: 500,
			marginBottom: 10,
			height: 40,
			fontSize: '18px'
		},
		chip: {
			padding: '4px 12px',
			background: 'linear-gradient(90deg, rgb(0 196 255) 0%, rgb(111 128 252) 100%)',
			width: 'fit-content',
			borderRadius: 10,
			color: '#ffffff',
			fontWeight: 500
		},
		img: {
			width: 30,
			marginBottom: 10,
			objectFit: 'contain'
		}
	})
);

export default useStyles;