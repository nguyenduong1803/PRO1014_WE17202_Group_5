import React from 'react'
import styles from './Product.module.css';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { formatMoney } from "../../../extensions/formatMoney"
import AddIcon from '@mui/icons-material/Add';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { addCart } from '../../../redux/SliceReducer/OrderTableSlice';
import { getToken } from '../../../utils/Common';
import { Link } from 'react-router-dom';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

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
function Product({ img, title, price, id }) {
  const dispatch = useDispatch();
  const [notifyAlert,setNotifyAlert]=React.useState("")
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    if (getToken()) {
      dispatch(addCart({ id: id, amount: 1 }))
      setState({ open: true, ...newState });
      setNotifyAlert("Đã thêm vào giỏ hàng")
    } else {
      setState({ open: true, ...newState });
      setNotifyAlert("Bạn chưa đăng nhập")
    }

  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  
  return (
    
    <div className=' col-lg-3'>
      <Link to={`/chi-tiet-don-hang/${id}`} className={styles.link}><div className={styles.product} style={{ transition: '.6s' }}>
        <img className={styles.blur_shadow} src={img} alt="" />
        <img src={img} alt="" />
        <h4 className={styles.title}>{title}</h4>
        <div ><BasicRating /></div>
        <div className={`${styles.wrapPrice} d-flex justify-content-between align-items-center `}>
          <p className={styles.price}>{price && formatMoney(price)} đ</p>
          <p onClick={handleClick({ vertical: 'bottom', horizontal: 'right', })} className={styles.icon}>
            <AddIcon /></p>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      >
        <Alert severity="success">{notifyAlert}</Alert>
      </Snackbar> </Link>
    </div>
   
  )
}

export default Product