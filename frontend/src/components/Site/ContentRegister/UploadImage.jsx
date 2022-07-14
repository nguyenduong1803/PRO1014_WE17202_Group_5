// imports the React Javascript Library
import React from "react";
import BackupIcon from '@mui/icons-material/Backup';
import styles from "./Register.module.css"
import { Avatar } from "@mui/material";

function UploadImage({ setInput, inputType, value }) {
    const [file, setFile] = React.useState("")
    const handleChangeInput = (e) => {
        setInput(prev => {
            prev[inputType] = e.target.value
            return { ...prev }
        })
        const file = URL.createObjectURL(e.target.files[0]);
        setFile(file);
    }

    return (
        <>
            {
                file ? <Avatar
                    alt="Remy Sharp"
                    src={file}
                    sx={{ width: 66, height: 66,border:"1px solid #ccc" }}
                /> :
                    <div className={`${styles.variants}`}>
                        <div className={`${styles.file} ${styles.file__upload}`}>
                            <label htmlFor='input-file'>
                                <BackupIcon /> <p style={{ paddingLeft: "12px" }}>Upload</p>
                            </label>
                            <input id='input-file' type='file' value={value} onChange={e => handleChangeInput(e)} />
                        </div>
                    </div>
            }

        </>
    )
}


export default UploadImage
