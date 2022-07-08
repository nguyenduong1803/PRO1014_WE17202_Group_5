function uniqueArray(arr) {
    let newArr = []
    newArr = arr.filter(function (item) {
      return newArr.includes(item) ? '' : newArr.push(item)
    })
    return newArr
  }
  export default uniqueArray;