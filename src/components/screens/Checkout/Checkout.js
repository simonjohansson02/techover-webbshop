import { Container, Grid, Divider, Typography, Button } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import useStyles from './styles';
import { resetCart } from '../../../reduxStore/actions/cartActions';
import CartItems from '../../CartItems/CartItems'

const Checkout = ({ cart, resetCart }) => {
	const classes = useStyles();

	const renderCartItems = () => {
		return cart.orders.map((item, i) => <CartItems key={i} {...item} />);
	};

	const cleanedCartItems = cart.orders.map((item) => {
		return {
			id: item.product.id,
			quantity: item.quantity
		}
	})


	const stringifiedCartItems = JSON.stringify(cleanedCartItems)

	return (
		<div id="Checkout">
			<Grid item container xs={12}>
				<Grid item container xs={2}>
					{/* Intentionally left empty */}
				</Grid>
				<Grid item xs={5} spacing={4} justify="center" >
					<Container maxWidth="sm">
						<Typography variant="h1">Checkout</Typography>
						<Grid container spacing={2} justify="center">
							<Grid item xs={12}>
								{renderCartItems()}
							</Grid>
						</Grid>

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
				</Grid>
				<Grid item container xs={3}>
					<Container maxWidth="sm">
						<iframe title={"Klarna"} src={'http://localhost:3001/checkout/AAA-123?cartItems='+stringifiedCartItems} frameBorder={"none"} height="900" width="100%" style={{  }}/>
					</Container>
				</Grid>
				<Grid item container xs={2}>
					{/* Intentionally left empty */}
				</Grid>
			</Grid>
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
