import useStyles from './styles';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { connect } from 'react-redux';
import { incrementProduct, decrementProduct } from '../../reduxStore/actions/cartActions';

const ControlButtons = ({ onIncrement, onDecrement, quantity, product, column }) => {
	const classes = useStyles();
	const disabled = !quantity && quantity < 1;

	const showQuantityStyle = !quantity || quantity === 0 ? { opacity: 0 } : {};

	return (
		<div className={classes.buttons} style={{flexDirection: column ? 'column' : 'row'}}>
			<IconButton aria-label="plus" onClick={() => onIncrement(product)}>
          <AddIcon  fontSize="large" className={classes.addButton}/>
        </IconButton>
				<div className={classes.quantity} style={showQuantityStyle}>
				{quantity ? quantity : 0}
				</div>
        <IconButton aria-label="minus" onClick={() => onDecrement(product)} disabled={disabled}>
          <RemoveIcon  fontSize="large" className={disabled ? classes.buttonDisabled : classes.removeButton} />
      </IconButton>
		</div>
	);
};

const mapDispatch = (dispatch) => {
	return {
		onIncrement: (data) => dispatch(incrementProduct(data)),
		onDecrement: (data) => dispatch(decrementProduct(data))
	};
};

export default connect(null, mapDispatch)(ControlButtons);
