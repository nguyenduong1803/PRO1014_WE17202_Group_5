import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 28;
const ITEM_PADDING_TOP = 1;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: "100%",
        },
    },
};


export default function SelectMuiltiMui({ label, listName, position, id, setOrder, order }) {
    const indexTable = listName.find((name) => name.id === id)
    const [personName, setPersonName] = React.useState([`${order.tableId.length===1? indexTable.index_table : order.tableId}`]);
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setOrder(prev => {
            return { ...prev, tableId:value }
        })
        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    React.useEffect(() => {
        setOrder(prev => {
            return { ...prev, tableId: [personName] }
        })
    },[])
    return (
        <div>
            <FormControl sx={{ width: '300px', maxWidth: "100%" }}>
                <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
                <Select
                    inputProps={{ MenuProps: { disableScrollLock: true } }}
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    <MenuItem value={`Chọn Toàn bộ khu: ${position}`}>
                        <Checkbox checked={personName.indexOf(`Chọn Toàn bộ khu: ${position}`) > -1} />
                        <ListItemText primary={`Chọn Toàn bộ khu: ${position}`} />
                    </MenuItem>
                    {listName && listName.map((name) => 
                    (
                        <MenuItem key={name.index_table} value={`${name.index_table}`}>
                            <Checkbox checked={personName.indexOf(`${name.index_table}`) > -1} />
                            <span>Bàn:{`${position}-`}</span>
                            <ListItemText primary={`${name.index_table}`} />
                        </MenuItem>
                    ))}


                </Select>
            </FormControl>
        </div>
    );
}
