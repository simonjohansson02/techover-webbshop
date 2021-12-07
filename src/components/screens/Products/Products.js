import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';
import useStyles from './styles'
import {connect} from 'react-redux'
import ProductCard from '../ProductCard/ProductCard';


const Products = ({products, loading, error}) => {
	const classes =useStyles();

const rederProductCards = () => {
	if (loading) return [1, 2, 3, 4, 5].map((d) => <ProductCard loading={loading} key={d} />);

	const array=  products.map((item) => {
			return <ProductCard {...item} Loading={loading} key={item.id}/>
	})
	return array
}

	return (
		<div id="Product_screen">
			<Container maxWidth="md">
				<div className="Products__view">
					{/* Header */}
					<Typography variant="h1">Välj varor</Typography>
          {/* END Header */}

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
	const {items, loading, error} = state.products;
	return {products: items, loading, error};
}

export default connect(mapState)(Products);
