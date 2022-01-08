import { Container, Grid, Divider, Typography, Button } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
// import useStyles from './styles';
import { resetCart } from '../../../reduxStore/actions/cartActions';
import CartItems from '../../CartItems/CartItems'

const Checkout = ({ cart, resetCart }) => {
	// const classes = useStyles();

	const renderCartItems = () => {
		return cart.orders.map((item, i) => <CartItems key={i} {...item} />);
	};

	const cleanedCartItems = cart.orders.map((item) => {
		return {
			id: item.product.id,
			quantity: item.quantity,
		}
	})


	const stringifiedCartItems = JSON.stringify(cleanedCartItems)

	return (
		<div id="Checkout">
			<Grid item container xs={12}>
				<Grid item container lg={2} md={1} xs={12}>
					{/* Intentionally left empty */}
				</Grid>
				<Grid container item lg={5} md={6} xs={12} spacing={4} justify="center" style={{marginTop: 0}}>
					<Container maxWidth="sm">
						<Typography variant="h1">Checkout</Typography>
						<Grid container spacing={2} justify="center">
							<Grid item xs={12}>
								{renderCartItems()}
							</Grid>
						</Grid>

						<Button className='classes.resetButton' onClick={resetCart}  variant="contained" style={{background: 'linear-gradient(90deg, rgb(0 196 255) 0%, rgb(111 128 252) 100%)', fontWeight: 500}} >
							Reset cart
						</Button>

						<Divider style={{ marginBottom: 20 }} />
						<Grid container spacing="2">
							<Grid item xs={10}>
								Subtotal:
							</Grid>
							<Grid item xs={2}>
								{parseFloat(cart.productPrice).toFixed(2)} kr
							</Grid>
							<Grid item xs={10}>
								Shipping:
							</Grid>
							<Grid item xs={2}>
								{parseFloat(cart.deliveryFee).toFixed(2)} kr
							</Grid>
							<Grid item xs={10}>
								Total:
							</Grid>
							<Grid item xs={2}>
								{parseFloat(cart.totalPrice).toFixed(2)} kr
							</Grid>
						</Grid>
					</Container>
				</Grid>
				<Grid item container lg={3} md={4} xs={12}>
					<Container maxWidth="sm">
						<iframe title={"Klarna"} src={'http://localhost:3001/checkout/AAA-123?cartItems='+stringifiedCartItems} frameBorder={"none"} height="900" width="100%" style={{  }}/>
					</Container>
				</Grid>
				<Grid item container lg={2} md={1} xs={12}>
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
