import React,{useState, useEffect} from 'react';
import { Typography, Container, Grid} from '@mui/material';
import useStyles from './styles'
import {connect} from 'react-redux'
import ProductCard from '../../ProductCard/ProductCard';
import { decrementProduct, incrementProduct } from '../../../reduxStore/actions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Products = ({products, loading, error, orders}) => {
	const classes =useStyles();

	const [filteredProducts, setFilteredProducts] = useState(products);
	useEffect(()=>{
		setFilteredProducts(products)
	}, [products, loading])


const rederProductCards = () => {
	if (loading) return [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10].map((d) => <ProductCard loading={loading} key={d} />);
	
	return filteredProducts.map((item, i) => {
		const order = orders.find((orders) => orders.product.id === item.id);
		const quantity = order ? order.quantity : null;
			return <ProductCard {...item} Loading={loading} quantity={quantity} key={i} isLast={i === products.length - 1}/>
	})
}


	const filter = (category) => {
		if(!category) {
			setFilteredProducts(products)
		} else if (category) {
			let array = products.filter((element) => element.category === category)
			setFilteredProducts(array)
		}
	}

	return (
		<div id="Product_screen">
			<Container maxWidth="md">
				<div className="Products__view">
					{/* Header */}
					<Typography variant="h1">Välj varor</Typography>
          {/* END Header */}					
    			<ButtonGroup variant="contained" aria-label="outlined primary button group">
      			<Button onClick={() =>filter()}>All</Button>
      			<Button onClick={() =>filter("men's clothing")}>men's clothing</Button>
      			<Button onClick={() =>filter("women's clothing")}>women's clothing</Button>
      			<Button onClick={() =>filter("jewelery")}>jewelery</Button>
      			<Button onClick={() =>filter("electronics")}>electronics</Button>
    			</ButtonGroup>
					{/* Items */}
          <Grid container spacing={2}>
						<Grid item xs={12} > 
							{rederProductCards()}
						</Grid>
        	</Grid>
          {/* END Items */}
				</div>
			</Container>
		</div>
	);
};

const mapState = (state) => {
	const { items, loading, error } = state.products;
	const { orders } = state.cart;
	return {
		products: items,
		orders,
		error,
		loading
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
        onIncrement: (data) => dispatch(incrementProduct(data)),
				onDecrement: (data) => dispatch(decrementProduct(data))
    };
};

export default connect(mapState, mapDispatchToProps )(Products);
