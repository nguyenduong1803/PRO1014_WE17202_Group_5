import React from 'react'
import AddIcon from "@mui/icons-material/Add";
import { NavLink } from 'react-router-dom';

function ButtonAdd({path,name}) {
    return (
        <NavLink to={`${path}`}>
            <button style={{
                backgroundColor: "#1a358f",
                color: "#fff",
                height: "38px",
            }}>
                <AddIcon />
                {name}
            </button>
        </NavLink>
    )
}

export default ButtonAdd