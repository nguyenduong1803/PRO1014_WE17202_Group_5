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
import ModalDeleteProduct from "../InformationUser/ModalDeleteProduct";


export default function ListOrders() {
  const dispatch = useDispatch()
  const productCartDetail = useSelector(selectOrderDetail)
  const products = useSelector(selectProducts)
  const [openDelete, setOpenDelete] = React.useState(false)
  const listProduct = [];
  products.forEach(prod => {
    if (productCartDetail) {
      productCartDetail.forEach(ele => {
        if (prod.id === ele.id_product) {
          let newProduct = { ...prod, quantity: ele.amount, idDetailOrder: ele.id }
          listProduct.push(newProduct);
        }
      })
    }
  });
  const idInvoice = window.location.pathname.split('/')[2]
  const handleOpenDelete = () => {
    setOpenDelete(true)
  }
  React.useEffect(() => {
    dispatch(getDetailOrder(idInvoice))
  }, [])
  return (
    <TableContainer className={styles.table} component={Paper} style={{ borderRadius: "20px", backgroundColor: "white" }}>
      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
        <TableHead className={styles.header}>
          <TableRow>
            <TableCell style={{ fontSize: '1.1rem', color: "#fff", fontWeight: "500" }}>Sản phẩm</TableCell>
            <TableCell align="center" style={{ fontSize: '1.1rem', color: "#fff", fontWeight: "500" }} >Số lượng</TableCell>
            <TableCell align="center" style={{ fontSize: '1.1rem', color: "#fff", fontWeight: "500" }}>Đơn giá</TableCell>
            <TableCell align="center" style={{ fontSize: '1.1rem', color: "#fff", fontWeight: "500" }}>Tổng tiền</TableCell>
            <TableCell align="center" style={{ fontSize: '1.1rem', color: "#fff", fontWeight: "500" }}>Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{}}>
          {listProduct && listProduct?.map((product, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: "20px" } }}
            >
              <TableCell align="left">
                <div className={`${styles.tableDetailProducts} d-flex  align-items-center`}>
                  <div>
                    <img className={styles.img} src={product.listsImg[0]} />
                  </div>
                  <div className={styles.titleProducts}>
                    <h4 style={{ fontSize: '1.1rem' }} className={styles.title}>{product.name}</h4>
                  </div>
                </div>
              </TableCell>
              <TableCell style={{ fontSize: '1.1rem' }} align="center">{product.quantity}</TableCell>
              <TableCell style={{ fontSize: '1.1rem' }} align="center">{formatMoney(product.price)} đ</TableCell>
              <TableCell style={{ fontSize: '1.1rem' }} align="center">{formatMoney(product.price * product.quantity)} đ</TableCell>
              <TableCell style={{ fontSize: '1.1rem' }} align="center"> <ClearIcon onClick={handleOpenDelete} className={styles.clearIcon} /> </TableCell>
              <ModalDeleteProduct
                setOpenDelete={setOpenDelete}
                openDelete={openDelete}
                id={product.idDetailOrder}
              />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
