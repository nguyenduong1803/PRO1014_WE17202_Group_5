import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={8} ref={ref} variant="filled" {...props} />;
});


function ToastMess({ notify, setState, state }) {
    const handleClose = () => {
        setState(false);
    };
    React.useEffect(() => {
        const idTime = setTimeout(() => {
            setState(false);
        }, 2000);
        return () => {
            clearTimeout(idTime)
        }
    }, [state])
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={state}
            onClose={handleClose}
            message={notify}
            key={'bottom' + 'right'}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>{notify}</Alert>
        </Snackbar>
    )
}

export default ToastMess