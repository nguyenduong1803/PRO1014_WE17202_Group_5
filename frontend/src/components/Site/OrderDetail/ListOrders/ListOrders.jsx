import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./ListOrders.module.css";
import product1 from "../../../../assets/img/seafood-1.jpg";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { selectOrderDetail } from "../../../../redux/selector";
import { getDetailOrder } from "../../../../redux/SliceReducer/OrderTableSlice";
const rows = [
  {
    img: product1,
    title: "Main Course",
    name: "Panner curry special with cucumber",
    quantity: "1X",
    price: "3.00$",
    totalPrice: "3.00$",
  },
  {
    img: product1,
    title: "Main Course",
    name: "Panner curry special with cucumber",
    quantity: "1X",
    price: "3.00$",
    totalPrice: "3.00$",
  },
  {
    img: product1,
    title: "Main Course",
    name: "Panner curry special with cucumber",
    quantity: "1X",
    price: "3.00$",
    totalPrice: "3.00$",
  },
];
function BasicRating() {
  const [value, setValue] = React.useState(5);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
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
export default function DenseTable() {
  const dispatch = useDispatch()
  const productCartDetail = useSelector(selectOrderDetail)
  React.useEffect(() => {
    dispatch(getDetailOrder())
  },[])
  return (
    <TableContainer className={styles.table} component={Paper} style={{ margin: '0 20px', borderRadius: "20px", backgroundColor: "white" }}>
      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
        <TableHead className={styles.header}>
          <TableRow>
            <TableCell style={{ fontSize: '.8rem', color: "#fff", fontWeight: "500" }}>Items</TableCell>
            <TableCell align="right" style={{ fontSize: '.8rem', color: "#fff", fontWeight: "500" }} >Quantity</TableCell>
            <TableCell align="right" style={{ fontSize: '.8rem', color: "#fff", fontWeight: "500" }}>Prices</TableCell>
            <TableCell align="right" style={{ fontSize: '.8rem', color: "#fff", fontWeight: "500" }}>Total Prices</TableCell>
            <TableCell align="right" style={{ fontSize: '.8rem', color: "#fff", fontWeight: "500" }}>Total Prices</TableCell>
            <TableCell align="right" style={{ fontSize: '.8rem', color: "#fff", fontWeight: "500" }}>Update</TableCell>

          </TableRow>
        </TableHead>
        <TableBody style={{}}>
          {productCartDetail && productCartDetail.map((product, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: "20px" } }}
            >
              <TableCell align="left">
                <div>
                  <div className={styles.tableDetailProducts}>
                    <div>
                      <img className={styles.img} src={product1} />
                    </div>
                    <div className={styles.titleProducts}>
                      <div className={styles.title}>
                        <h4>{product.name}</h4>
                      </div>
                      <div className={styles.name}>
                        <p>{product.id}</p>
                      </div>
                    </div>

                  </div>
                 
                </div>
              </TableCell>
              <TableCell align="center">{product.amount}</TableCell>
              <TableCell align="center">{product.price}</TableCell>
              <TableCell align="center">{product.price}</TableCell>
              <TableCell align="center">{product.price}</TableCell>
              <TableCell align="center"><EditIcon className={styles.editIcon} /> <ClearIcon className={styles.clearIcon} /> </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
