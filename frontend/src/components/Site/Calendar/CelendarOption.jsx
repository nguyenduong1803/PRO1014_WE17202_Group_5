import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


function CelendarOption({ setOrder }) {
    const crrTime = new Date()
    const defaultTime = `${crrTime.getFullYear()}-${crrTime.getMonth() + 1}-${crrTime.getDate()}T${crrTime.getHours() + 1}:${crrTime.getMinutes()}`
    const handleCelendar = (e) => {
        setOrder(prev => ({ ...prev, celendar: e.target.value }))
    }
    return (
        <Stack component="form" noValidate spacing={3} >
            <TextField
                required
                id="datetime-local"
                label="Chọn thời gian"
                type="datetime-local"
                defaultValue={(new Date())}
                sx={{ width: 230, height: 44 }}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={e => handleCelendar(e)}
            />
        </Stack>
    )
}

export default CelendarOption