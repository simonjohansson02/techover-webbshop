import { Typography, Divider, Skeleton } from '@mui/material';
import useStyles from './styles';
import ControlButtons from '../ControlButtons/ControlButtons';


const ProductCard = ({loading, title, price, image, isLast, id, description, category, rating, quantity}) => {
  const classes = useStyles();

  const renderControlButtons = () => {
		const product = {
			category,
			description,
			id,
			image,
			price,
			rating,
			title
		};
		return <ControlButtons product={product} quantity={quantity} />;
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
      {renderControlButtons()}
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
