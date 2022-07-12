const searchData = (data,targetSearch, keySearch) => { 
  return  data.filter((data) => 
          targetSearch.some(
                      (columnFilter) => data[columnFilter] && data[columnFilter].toString().toLowerCase().indexOf(keySearch.toString().toLowerCase()) > -1
              )
          ); 
}   

export {searchData}