import { Typography, Skeleton} from '@mui/material';
import useStyles from './test';
import ControlButtons from '../ControlButtons/ControlButtons';


const ProductCard = ({loading, title, price, image, id, description, category, rating, quantity}) => {
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
      <div className={classes.info}>
        {loading ? (
          <Skeleton variant="rect" width={125} height={160} style={{  }}  />
          ) : (
            <img className={classes.img} src={image} alt={title}/>
        )}  
        <div className={classes.informationContainer}>
          <div className={classes.details}>
            <Typography variant="subtitle2">
            {loading ? (
              <Skeleton variant="text" width={125} height={60}/>
              ) : (
                <p className={`${classes.title} ${classes.detailMargin}`}>{title}</p>
            )}
            </Typography>
            {loading ? (
              <Skeleton variant="text" width={62.5} height={30} style={{margin: 'auto'}}/>
              ) : (
                <p className={classes.detailMargin}>{parseFloat(price).toFixed(2)} kr</p>
            )}
          </div>
        </div>
        {loading ? (
          <Skeleton variant="rect" width={150} height={40} style={{margin: 5}}  />
          ) : (
        <div className={classes.buttons}>
        {renderControlButtons()}
        </div>

        )}  
      </div>
    </div> 
  </div>
  )
};

export default ProductCard;
