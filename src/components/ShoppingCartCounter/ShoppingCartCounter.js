import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Countertops } from '@mui/icons-material';
import { connect} from 'react-redux'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

 function ShoppingCartCounter({orders, onClick}) {



  const [count, setCount] =React.useState(0)
  React.useEffect(()=>{
    const numberOfItems = orders.reduce((prev, curr)=> prev+=curr.quantity, 0)
    setCount(numberOfItems)
    console.log(orders);
  },[orders])


  return (
    <IconButton onClick={onClick} aria-label="cart">
      <StyledBadge badgeContent={count} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}

const mapState = (state) => {
	return {
		orders: state.cart.orders
	};
};

export default connect(mapState)(ShoppingCartCounter)