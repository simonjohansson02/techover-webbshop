import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import ShoppingCartCounter from '../ShoppingCartCounter/ShoppingCartCounter'

const Navbar = (props) => {
	const history = useHistory();

	return (
		<Box sx={{ flexGrow: 1, marginBottom: "40px"}}>
			<AppBar position="static" style={{backgroundColor: '#85afff'}}>
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Random Things shop 
					</Typography>
					<Button onClick={() => history.push('/')} color="inherit">
						Products
					</Button>
					<ShoppingCartCounter  onClick={() => history.push('/checkout')}/>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
