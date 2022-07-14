import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function Calendar({ label,setInput,inputType,value }) {
    const handleChange = (date) => {
        console.log(date)
        setInput(prev=>{ 
            prev[inputType] = date
            return {...prev }
           })
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                <DesktopDatePicker
                    label={label}
                    inputFormat="dd/MM/yyyy"
                    value={value}
                    onChange={date=>handleChange(date)}
                    renderInput={(params) => <TextField {...params} />}
                />

            </Stack>
        </LocalizationProvider>
    );
}
