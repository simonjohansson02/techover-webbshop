import useStyles from './styles';
import { Typography, Grid } from '@mui/material';
import RadioButtons from '../RadioButtons/RadioButtons';

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
					<div className={classes.chip}>{parseInt(product.price) * quantity} kr</div>
				</Grid>
				<Grid item xs={2}>
					<RadioButtons product={product} quantity={quantity} />
				</Grid>
			</Grid>
		</div>
	);
};

export default CartItem;