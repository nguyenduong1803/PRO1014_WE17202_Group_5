import React from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { isFutureDate, isRequired } from '../../../utils/Validate';


function CelendarOption({ setOrder, values, setNotify }) {
    const handleCelendar = (e) => {
        const time = e.target.value.split("T")
        //    const time = `${crrTime.getFullYear()}-${orderdate.getMonth() + 1}-${orderdate.getDate()} ${orderdate.getHours() + 1}:${orderdate.getMinutes()}:00`
        setOrder(prev => ({ ...prev, celendar: `${time[0]} ${time[1]}:00` }))
        setOrder(prev => ({ ...prev, validateTime:time}))
    }
    const handleBlur = (e) => {
        const time = e.target.value.split("T")
        if (isRequired(e.target.value)) {
            setNotify(prev => ({ ...prev, celendar: "Vui lòng chọn thời gian" }))
        } else if (isFutureDate(time)) {
            setNotify(prev => ({ ...prev, celendar: "Vui lòng chọn thời gian lớn hơn" }))
        }else{
            setNotify(prev => ({ ...prev, celendar:"" }))

        }
    }
    return (
        <Stack component="form" noValidate spacing={3} >
            <TextField
                required
                onBlur={e => handleBlur(e)}
                inputFormat="yyyy-MM-ddThh:mm"
                id="datetime-local"
                label="Chọn thời gian"
                type="datetime-local"
                defaultValue={(new Date())}
                sx={{ width: 300, height: 35,maxWidth: "100%" }}
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