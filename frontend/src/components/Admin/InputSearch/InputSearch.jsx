import React from 'react'
import styles from "./InputSearch.module.css"
import SearchIcon from "../../../assets/svg/Search"
function InputSearch({setSearchValue}) {
  return (
     <div className={`${styles.search}`}>
                <input
                  type="text"
                  placeholder="Tìm kiếm "
                  onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
                />
                <div className={`${styles.searchIcon}`}>
                  <SearchIcon />
                </div>
              </div>
  )
}

export default InputSearch