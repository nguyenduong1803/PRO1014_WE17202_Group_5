import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getProducts } from '../../../redux/SliceReducer/ManagerProductSlice';
import { useDispatch } from 'react-redux';

function SelectMui({ list, name, setPageSize }) {
    const [value, setValue] = React.useState('');
    const dispatch = useDispatch()
    const handleChange = (event) => {
        setValue(event.target.value);
        dispatch(getProducts({limit:event.target.value}))
    };
    const handleClick = () => {
    }
    return (
        <FormControl sx={{ m: 0, minWidth: 145 }} size="small">
            <InputLabel>{name}</InputLabel>
            <Select
                inputProps={{ MenuProps: { disableScrollLock: true } }}
                value={value}
                label={name}
                onClick={() => handleClick()}
                onChange={handleChange}
                defaultValue=""
            >

                {list.map((item, index) => (
                    <MenuItem key={index} value={item.name}>{item.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
export default SelectMui