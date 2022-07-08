import React from 'react'

function SelectPagination({setPageSize}) {
    return (
        <div>
            <select className="form-select" onChange={(e) => setPageSize(e.target.value)}>
                <option selected>Chọn hiển thị số bản ghi</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
        </div>
    )
}

export default SelectPagination