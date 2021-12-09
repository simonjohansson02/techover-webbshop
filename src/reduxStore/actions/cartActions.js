import * as actionTypes from './actionTypes'

export const resetCart = () => {
  return { type: actionTypes.RESET_CART}
};

export const calculateTotalCartAmount = () => {
	return (dispatch, getState) => {
    const DELIVERY_COST = 39;
		const state = getState();
    const { orders } = state.cart

    const reducer = (prev, curr) => {
			const { product, quantity } = curr;
			const price = parseInt(product.price);
			const sum = (prev += price * quantity);
			return sum;
		};

    const productPrice = orders.reduce(reducer, 0);

    const deliveryFee = productPrice > 500 ? 0 : DELIVERY_COST

    //const deliveryFee = productPrice > 500 || productPrice === 0 ? 0 : DELIVERY_COST;

    const action = {
      type: actionTypes.CALCULATE_TOTAL_CART_AMOUNT,
      payload: {
        totalPrice: productPrice + deliveryFee,
        deliveryFee: deliveryFee,
        productPrice: productPrice,
      }
    }

		dispatch(action);
	};
};

export const incrementProduct = (payload) => {
  return (dispatch) => {
    dispatch({type: actionTypes.INCREMENT_PRODUCT, payload: payload});
    dispatch(calculateTotalCartAmount());
  }
};
export const decrementProduct = (payload) => {
  return (dispatch) => {
    dispatch({type: actionTypes.DECREMENT_PRODUCT, payload: payload});
    dispatch(calculateTotalCartAmount());
  }
};