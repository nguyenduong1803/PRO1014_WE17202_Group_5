import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import { NavLink } from 'react-router-dom';

function ButtonAdd({path,name}) {
    return (
        <NavLink to={`them-san-pham`}>
            <button style={{
                backgroundColor: "#1a358f",
                color: "#fff",
                height: "38px",
            }}>
                <AddIcon />
                Thêm sản phẩm
            </button>
        </NavLink>
    )
}

export default ButtonAdd