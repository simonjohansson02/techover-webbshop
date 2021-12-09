import { Container, Grid, Divider, Typography, Button } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import useStyles from './styles';
import { resetCart } from '../../../reduxStore/actions/cartActions';

const Checkout = ({ cart, resetCart }) => {
	const classes = useStyles();
	return (
		<div id="Checkout">
			<Container maxWidth="sm">
				<Typography variant="h1">Checkout</Typography>
				{cart.orders.map((item, i) => (
					<p key={i}>
						{item.product.title} ------- {item.quantity}
					</p>
				))}

				<Button onClick={resetCart} variant="contained">
					Reset cart
				</Button>

				<Divider style={{ marginBottom: 20 }} />
				<Grid container spacing="2">
					<Grid item xs={10}>
						Subtotal:
					</Grid>
					<Grid item xs={2}>
						{cart.productPrice} kr
					</Grid>
					<Grid item xs={10}>
						Shipping:
					</Grid>
					<Grid item xs={2}>
						{cart.deliveryFee} kr
					</Grid>
					<Grid item xs={10}>
						Total:
					</Grid>
					<Grid item xs={2}>
						{cart.totalPrice} kr
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

const mapState = (state) => {
	return {
		cart: state.cart
	};
};

const mapDispatch = (dispatch) => {
	return {
		resetCart: () => dispatch(resetCart())
	};
};

export default connect(mapState, mapDispatch)(Checkout);
