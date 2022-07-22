import React from 'react'
import styles from './Product.module.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { formatMoney } from "../../../extensions/formatMoney"
import AddIcon from '@mui/icons-material/Add';

function BasicRating() {
  const [value, setValue] = React.useState(5);

  return (
    <>
      <Box
        component="span"
        sx={{
          '& > legend': { mt: 2 },
        }}
      >
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />

      </Box>
    </>
  );
}
function Product({ img, title, price }) {
  return (
    <div className=' col-lg-3'>
      <div className={styles.product} style={{ transition: '.6s' }}>
        <img className={styles.blur_shadow} src={img} alt="" />
        <img src={img} alt="" />
        <h4 className={styles.title}>{title}</h4>
        <div ><BasicRating /></div>
        <div className={`${styles.wrapPrice} d-flex justify-content-between align-items-center `}>
          <p className={styles.price}>{price && formatMoney(price)}</p>  <p className={styles.icon}><AddIcon /></p>
        </div>
      </div>
    </div>
  )
}

export default Product