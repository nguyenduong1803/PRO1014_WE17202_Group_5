import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function CelendarOption() {
    const crrTime = new Date()

    const defaultTime = `${crrTime.getFullYear()}-${crrTime.getMonth() + 1}-${crrTime.getDate()}T${crrTime.getHours() + 1}:${crrTime.getMinutes()}`
    console.log(defaultTime)
    return (
        <Stack component="form" noValidate spacing={3} >
            <TextField
                required
                id="datetime-local"
                label="Chọn thời gian"
                type="datetime-local"
                defaultValue={defaultTime}
                sx={{ width: 230, height: 44 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Stack>
    )
}

export default CelendarOption