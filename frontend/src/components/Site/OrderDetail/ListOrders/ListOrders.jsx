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
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from "react-redux";
import { selectOrderDetail, selectProducts, selectTable } from "../../../../redux/selector";
import { getDetailOrder } from "../../../../redux/SliceReducer/OrderTableSlice";
import { formatMoney } from "../../../../extensions/formatMoney";


export default function ListOrders() {
  const dispatch = useDispatch()
  const productCartDetail = useSelector(selectOrderDetail)
  const products = useSelector(selectProducts)
  const listProduct=[];
  products.forEach(prod => {
   if(productCartDetail){
    productCartDetail.forEach(ele => {
      if (prod.id === ele.id_product) {
        let newProduct = { ...prod, quantity: ele.amount }
        listProduct.push(newProduct);
      }
    })
   }
  });
const idInvoice = window.location.pathname.split('/')[2]
React.useEffect(() => {
  dispatch(getDetailOrder(idInvoice))
}, [])
return (
  <TableContainer className={styles.table} component={Paper} style={{ borderRadius: "20px", backgroundColor: "white" }}>
    <Table sx={{ minWidth: 650 }} aria-label="a dense table">
      <TableHead className={styles.header}>
        <TableRow>
          <TableCell style={{ fontSize: '.8rem', color: "#fff", fontWeight: "500" }}>Tên sản phẩm</TableCell>
          <TableCell align="right" style={{ fontSize: '.8rem', color: "#fff", fontWeight: "500" }} >Số lượng</TableCell>
          <TableCell align="right" style={{ fontSize: '.8rem', color: "#fff", fontWeight: "500" }}>Đơn giá</TableCell>
          <TableCell align="right" style={{ fontSize: '.8rem', color: "#fff", fontWeight: "500" }}>Tổng tiền</TableCell>
          <TableCell align="right" style={{ fontSize: '.8rem', color: "#fff", fontWeight: "500" }}>Update</TableCell>
        </TableRow>
      </TableHead>
      <TableBody style={{}}>
        {listProduct && listProduct?.map((product, index) => (
          <TableRow
            key={index}
            sx={{ "&:last-child td, &:last-child th": { border: "20px" } }}
          >
            <TableCell align="left">
              <div>
                <div className={styles.tableDetailProducts}>
                  <div>
                    <img className={styles.img} src={product.listsImg[0]} />
                  </div>
                  <div className={styles.titleProducts}>
                    <div className={styles.title}>
                      <h4>{product.name}</h4>
                    </div>
                  </div>

                </div>

              </div>
            </TableCell>
            <TableCell align="center">{product.quantity}</TableCell>
            <TableCell align="center">{formatMoney(product.price)} đ</TableCell>
            <TableCell align="center">{formatMoney(product.price*product.quantity)} đ</TableCell>
            <TableCell align="center"><EditIcon className={styles.editIcon} /> <ClearIcon className={styles.clearIcon} /> </TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}
