import { Typography, IconButton, Divider, Skeleton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useStyles from './styles';
import RadioButtons from '../../RadioButtons/RadioButtons';


const ProductCard = ({loading, title, price, image, isLast, id, description, category, rating, quantity}) => {
  const classes = useStyles();

  const renderRadioButtons = () => {
		const product = {
			category,
			description,
			id,
			image,
			price,
			rating,
			title
		};
		return <RadioButtons product={product} quantity={quantity} />;
  };

  return (
  <div className={classes.productCard}>
    <div className={classes.productCardFlex}>
      <div className={classes.informationContainer}>
        <div className={classes.info}>
          {loading ? (
            <Skeleton variant="rect" width={65} height={92} style={{ marginRight: 20 }}  />
          ) : (
            <img className={classes.img} src={image} alt={title}/>
          )}    
          <div className={classes.details}>
            <Typography variant="subtitle2">
            {loading ? (
            <Skeleton variant="text" width={100} height={30}/>
            ) : (
            <p className={`${classes.title} ${classes.detailMargin}`}>{title}</p>
            )}
            </Typography>
            {loading ? (
            <Skeleton variant="text" width={50} height={30}/>
            ) : (
            <p className={classes.detailMargin}>{price} kr</p>
            )}
          </div>
        </div>
      </div>
      <div className={classes.buttons}>
      {renderRadioButtons()}
        {/* <IconButton aria-label="plus"  onClick={onIncrement}>
          <AddShoppingCartIcon  fontSize="small" className={`${classes.button} ${classes.button__add}`}/>
        </IconButton>
        <IconButton aria-label="plus" onClick={onDecrement}>
          <DeleteIcon  fontSize="small" className={`${classes.button} ${classes.button__remove}`}/>
        </IconButton> */}
      </div>
    </div>
    {!isLast && (
				<div className={classes.divider}>
					<Divider variant="middle" />
				</div>
			)}
  </div>
  )
};

export default ProductCard;
