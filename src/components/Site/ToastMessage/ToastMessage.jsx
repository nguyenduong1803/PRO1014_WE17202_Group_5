import React from 'react'
import styles from "./ToastMessage.module.css"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
function ToastMessage({ setShowToast }) {
    const [close, setClose] = React.useState(true)
    React.useEffect(() => {
        const time = setTimeout(() => {
            setClose(false)
        }, 5000);
        return () => {
            clearTimeout(time)
        }
    }, [])
    return (
        <div className={styles.toast}>
            <div className={styles.toast_img}><DoneIcon className={styles.toast_icon} /></div>
            <div className={styles.desc}>Đã thêm vào giỏ hàng</div>
            {close ? <CloseIcon
                onClick={() => setShowToast(false)}
                className={styles.toast_close} /> : ""}
        </div>
    )
}

export default ToastMessage