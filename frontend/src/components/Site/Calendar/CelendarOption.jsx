import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function CelendarOption({ setOrder, values }) {
    const handleCelendar = (e) => {
        const time = e.target.value.split("T")
        //    const time = `${crrTime.getFullYear()}-${orderdate.getMonth() + 1}-${orderdate.getDate()} ${orderdate.getHours() + 1}:${orderdate.getMinutes()}:00`
        setOrder(prev => ({ ...prev, celendar:`${time[0]} ${time[1]}:00`}))
        console.log(values)
    }
    return (
        <Stack component="form" noValidate spacing={3} >
            <TextField
                required
                inputFormat="dd/MM/yyyy"
                id="datetime-local"
                label="Chọn thời gian"
                type="datetime-local"
                defaultValue={(new Date())}
                sx={{ width: 230, height: 44 }}
                InputLabelProps={{
                    shrink: true,
                }}
                value={values}
                onChange={e => handleCelendar(e)}
            />
        </Stack>
    )
}

export default CelendarOption