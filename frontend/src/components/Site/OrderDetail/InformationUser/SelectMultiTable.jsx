import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { selectTableActive } from '../../../../redux/selector';
import { useSelector } from 'react-redux';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function SelectMultiTable({setOrder}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const tableActive = useSelector(selectTableActive)

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

  return (
    <div>
      <FormControl sx={{  width: "100%" }}>
        <InputLabel id="demo-multiple-chip-label">Chọn nhiều bàn</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chọn nhiều bàn" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {tableActive.map((name) => (
            <MenuItem
              key={name.id}
              value={name.id}
              style={getStyles(name.id, personName, theme)}
            >
              {`Bàn A-${name.id}` }
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
