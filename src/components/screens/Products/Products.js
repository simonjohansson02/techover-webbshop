import React,{useState, useEffect} from 'react';
import { Container, Grid} from '@mui/material';
// import useStyles from './styles'
import {connect} from 'react-redux'
import ProductCard from '../../ProductCard/ProductCard';
import { decrementProduct, incrementProduct } from '../../../reduxStore/actions';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import WomanIcon from '@mui/icons-material/Woman';
import ManIcon from '@mui/icons-material/Man';
import ComputerIcon from '@mui/icons-material/Computer';
import WatchIcon from '@mui/icons-material/Watch';

const Products = ({products, loading, error, orders}) => {
	// const classes =useStyles();

	const [filteredProducts, setFilteredProducts] = useState(products);
	useEffect(()=>{
		setFilteredProducts(products)
	}, [products, loading])


const rederProductCards = () => {
	
	if (loading) return [1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10, 11, 12, 13, 14, 15 , 16, 17, 18, 19, 20].map((d) => <Grid key={d} item lg={3} md={4} xs={12}><ProductCard loading={loading} key={d} /></Grid>);
	
	return filteredProducts.map((item, i) => {
		const order = orders.find((orders) => orders.product.id === item.id);
		const quantity = order ? order.quantity : null;
			return (
			<Grid key={i} item lg={3} md={4} xs={12}>
				<ProductCard {...item} Loading={loading} quantity={quantity} key={i} 	isLast={i === products.length - 1}/>
			</Grid>
			)

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
			<Container maxWidth="lg">
				<div className="Products__view">
					{/* <Typography variant="h1">Välj varor</Typography>				 */}
					<Grid container spacing={2}>
						<Grid item lg={3} md={3} xs={12}>
						<Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', borderRadius: '20px' }}>
							<nav aria-label="main mailbox folders">
								<List>
									<ListItem disablePadding>
										<ListItemButton onClick={() =>filter()}>
											<ListItemIcon>
												<AllInclusiveIcon />
											</ListItemIcon>
											<ListItemText primary="ALL" />
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton onClick={() =>filter("men's clothing")}>
											<ListItemIcon>
												<ManIcon />
											</ListItemIcon>
											<ListItemText primary="MEN'S CLOTHING" />
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton onClick={() =>filter("women's clothing")}>
											<ListItemIcon>
												<WomanIcon />
											</ListItemIcon>
											<ListItemText primary="WOMEN'S CLOTHING" />
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton onClick={() =>filter("jewelery")}>
											<ListItemIcon>
												<WatchIcon />
											</ListItemIcon>
											<ListItemText primary="JEWELERY" />
										</ListItemButton>
									</ListItem>
									<ListItem disablePadding>
										<ListItemButton onClick={() =>filter("electronics")}>
											<ListItemIcon>
												<ComputerIcon />
											</ListItemIcon>
											<ListItemText primary="ELECTRONICS" />
										</ListItemButton>
									</ListItem>
								</List>
							</nav>
    				</Box>
							{/* <FilterButtons/> */}
							{/* <ButtonGroup className={classes.filterButtons} variant="contained" aria-label="outlined primary button group" style={{flexDirection: "column"}}>
								<Button onClick={() =>filter()}>All</Button>
								<Button onClick={() =>filter("men's clothing")}>men's clothing</Button>
								<Button onClick={() =>filter("women's clothing")}>women's clothing</Button>
								<Button onClick={() =>filter("jewelery")}>jewelery</Button>
								<Button onClick={() =>filter("electronics")}>electronics</Button>
							</ButtonGroup> */}
						</Grid>
						<Grid item lg={9} md={9} xs={12}>
							<Grid container spacing={2} style={{marginBottom: '100px'}}>
									{rederProductCards()}	
							</Grid>
						</Grid>
					</Grid>
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
