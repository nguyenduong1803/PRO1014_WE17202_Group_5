import React from "react";
import styles from "./DetailProductsOne.module.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';

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
function DetailProductsOne() {
  return (
    <div>
      <div className= {`${styles.row} row`}>
        <div className={`${styles.col9} col-lg-7`}>
          <div className="col-lg-8">
            <div className={styles.header}>
              <div className={styles.headerImg}>
                <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/29.png" alt="" />
              </div>
              <div className={styles.headerName}>
               <p> A-Z TO PIZA</p>
               <p className={styles.icon}><BasicRating/></p>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.titleContent}>
                <div className={styles.title}>
                  Cafe, Healthy Food, Beverages, Salad, Desserts
                </div>
                <div className={styles.date}>9:30 AM -11:30 PM (Today)</div>
              </div>
              <div className={styles.nameContent}>
                <h4>Restro Near Me</h4>
                <div className={styles.phone}><AddLocationIcon/> 6391 Elgin St. Celina, Delaware 10299</div>
                <div className={styles.phone}><PhoneIcon/> (480) 555-0103</div>
              </div>
              <div className={styles.nameContent}>
                <h4>Address</h4>
                <div className={styles.phone}><AddLocationIcon/> 4140 Parker Rd. Allentown, New Mexico 31134</div>
              </div>
            </div>
            <div className={styles.footer}>
            <Button variant="contained"  className={styles.button}>
        Check Menu
    </Button><Button variant="contained"  className={styles.button}>
        Check Menu
    </Button><Button variant="contained"  className={styles.button}>
        Check Menu
    </Button>
            </div>
          </div>
          <div className={`${styles.col3} col-lg-1`}>
            <img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/32.png" alt="" />
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className={`${styles.col5} col-lg-4`}>
            <div className={styles.containers}>
                <h4 className={styles.title}>Gallery</h4>
                <div className={styles.imgDetail}>
                <div className={styles.img}><img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/30.png" alt="" /></div>
                <div className={styles.img}><img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/30.png" alt="" /></div>
                </div>
                <div className={styles.img}><img src="https://templates.iqonic.design/aprycot/html/dashboard/dist/assets/images/layouts/31.png" alt="" /></div>
                                
            </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProductsOne;
