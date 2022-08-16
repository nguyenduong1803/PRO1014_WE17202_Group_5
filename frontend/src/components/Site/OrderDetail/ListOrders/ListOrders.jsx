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
import { getDetailOrder, updateDetailOrder } from "../../../../redux/SliceReducer/OrderTableSlice";
import { formatMoney } from "../../../../extensions/formatMoney";
import ModalDeleteProduct from "../InformationUser/ModalDeleteProduct";
import { Button } from "@mui/material";
import ToastMess from "../../ToastMess/ToastMess";


export default function ListOrders() {
  const dispatch = useDispatch()
  const productCartDetail = useSelector(selectOrderDetail)
  const products = useSelector(selectProducts)
  const [openDelete, setOpenDelete] = React.useState(false)
  const [state, setState] = React.useState(false)
  const [idDetailOrder, setIdDetailOrder] = React.useState("")
  const listProduct = [];
  if (products) {
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
  }

  const idInvoice = window.location.pathname.split('/')[2]
  const handleOpenDelete = (id) => {
    setOpenDelete(true)
    setIdDetailOrder(id)
  }

  React.useEffect(() => {
    dispatch(getDetailOrder(idInvoice))
  }, [idInvoice])
  return (
    <TableContainer className={styles.table} component={Paper} style={{ borderRadius: "20px", backgroundColor: "white" }}>
      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
        <TableHead className={styles.header}>
          <TableRow>
            <TableCell style={{ fontSize: '1.1rem', color: "#fff", fontWeight: "500" }}>Sản phẩm</TableCell>
            <TableCell align="center" style={{ fontSize: '1.1rem', color: "#fff", fontWeight: "500" }} >Số lượng</TableCell>
            <TableCell align="center" style={{ fontSize: '1.1rem', color: "#fff", fontWeight: "500" }}>Đơn giá</TableCell>
            <TableCell align="center" style={{ fontSize: '1.1rem', color: "#fff", fontWeight: "500" }}>Tổng tiền</TableCell>
            <TableCell align="center" style={{ fontSize: '1.1rem', color: "#fff", fontWeight: "500" }}>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {listProduct && listProduct?.map((product) => (
            <ProductListOrder product={product} handleOpenDelete={handleOpenDelete} setState={setState} />
          ))}

        </TableBody>
        <ModalDeleteProduct
          setOpenDelete={setOpenDelete}
          openDelete={openDelete}
          idInvoice={idInvoice}
          id={idDetailOrder}
        />
      </Table>
      <ToastMess
        notify={`Đã cập nhật sản phẩm`}
        setState={setState}
        state={state}
      />
    </TableContainer>
  );
}
const ProductListOrder = ({ product, handleOpenDelete, setState }) => {
  const [quantity, setQuantity] = React.useState(product.quantity);
  const [isEdit, setIEdit] = React.useState(false)
  const dispatch = useDispatch()

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value)
    setIEdit(true)
  }
  const handleUpdate = async (idDetailOrder, id) => {
    await setIEdit(false)
    await dispatch(updateDetailOrder({ idDetailOrder, idProduct: id, quantity }))
    setState(true)
  }
  return (
    <TableRow
      key={product.idDetailOrder}
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
      <TableCell style={{ fontSize: '1.1rem' }} align="center">
        <input type="number" onChange={e => handleChangeQuantity(e)} value={quantity} className={styles.quantityInput} />
      </TableCell>
      <TableCell style={{ fontSize: '1.1rem' }} align="center">{formatMoney(product.price)} đ</TableCell>
      <TableCell style={{ fontSize: '1.1rem' }} align="center">{formatMoney(product.price * product.quantity)} đ</TableCell>
      <TableCell style={{ fontSize: '1.1rem' }} align="center">
        {isEdit && <Button onClick={() => handleUpdate(product.idDetailOrder, product.id)} variant="contained">Cập nhật</Button>}
        <ClearIcon onClick={() => handleOpenDelete(product.idDetailOrder)} className={styles.clearIcon} />
      </TableCell>

    </TableRow>
  )
}
