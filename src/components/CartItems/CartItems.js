import useStyles from './styles';
import { Typography, Grid } from '@mui/material';
import ControlButtons from '../ControlButtons/ControlButtons';

const CartItem = ({ product, quantity }) => {
	const classes = useStyles();
	return (
		<div className={classes.cartItem}>
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<Typography variant="h3" className={classes.title}>
						{product.title}
					</Typography>
					<img className={classes.img} src={product.image} alt={product.title}></img>
					<div className={classes.chip}>{(parseFloat(product.price) * quantity).toFixed(2)} kr</div>
				</Grid>
				<Grid item xs={2}>
					<ControlButtons product={product} quantity={quantity} column={true} />
				</Grid>
			</Grid>
		</div>
	);
};

export default CartItem;