import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../../redux/SliceReducer/Admin/ManagerProductSlice';

export default function PaginationMui() {
    const dispatch = useDispatch()
    const handerChange =(e)=>{
        dispatch(getProducts({page:e.target.innerText}))
    }
  return (
    <Stack spacing={2} >
      <Pagination count={10} color="primary" onChange={e=>handerChange(e)} />
    </Stack>
  );
}