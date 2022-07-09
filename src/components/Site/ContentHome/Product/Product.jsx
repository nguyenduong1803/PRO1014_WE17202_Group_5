import React from 'react'
import styles from './Product.module.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

 function BasicRating() {
  const [value, setValue] = React.useState(5) ;

  return (
    <Box
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
  );
}
function Product({img,title,price}) {
  return (
    <div className=' col-lg-4'>
        <div className={styles.product} style={{transition:'.6s'}}>
            <img src={img} alt="" />
            <h4 className={styles.title}>{title}</h4>
            <p className={styles.icon}><BasicRating/></p>
            <p className={styles.price}>{price}</p>
        </div>
    </div>
  )
}

export default Product