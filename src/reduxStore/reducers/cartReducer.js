import * as actionTypes from '../actions/actionTypes'

const initialState = {
  totalPrice: 0,
  deliveryFee: 0, 
  productPrice: 0,
  orders: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_CART:

    return {
      ...state,
      totalPrice: 0,
      deliveryFee: 0, 
      productPrice: 0,
      orders: []
    };

    case actionTypes.INCREMENT_PRODUCT:
    const newArray = incrementProducts(state.orders, action)


    return {
      ...state,
      orders: newArray
    }

    case actionTypes.DECREMENT_PRODUCT:
      const secondArray = decrementProduct(state.orders, action)
    
      return {
        ...state,
      orders: secondArray
      }

    case actionTypes.CALCULATE_TOTAL_CART_AMOUNT:
      
    return {
      ...state,
      totalPrice: action.payload.totalPrice,
      deliveryFee: action.payload.deliveryFee,
      productPrice: action.payload.productPrice
    };

    default:
      return state;
  }
};

const findProductIndex = (array, id) => {
  if(array.length === 0) {
    return -1;
  } else {
    const index = array.findIndex((item) => item.product.id === id);
    return index
  }
};

const incrementProducts = (orders, action) => {
  const newArray = orders.slice();
  const productIndex = findProductIndex(newArray, action.payload.id);

  if (productIndex !== -1) {
		newArray[productIndex] = {
			product: newArray[productIndex].product,
			quantity: newArray[productIndex].quantity + 1
		};
	} else {
    const product = { product: action.payload, quantity: 1}
    newArray.push(product)
	}

  return newArray
};

const decrementProduct = (orders, action) => {
  const decArray = orders.slice();
  const productIndex = findProductIndex(decArray, action.payload.id)

  if (productIndex !==-1 && orders[productIndex].quantity > 1) {
    decArray[productIndex] = {
      product: decArray[productIndex].product,
      quantity: decArray[productIndex].quantity - 1
    }} else if (productIndex !== -1) {
      decArray.splice(productIndex, 1)
    }
    return decArray
}

export default reducer;