
function formatDate(date,prevChar,newChar) {
             //from yyyy/mm/dd
    if (date) {
        const arrDate = date.split(prevChar)
        if (Array.isArray(arrDate)) {
            //to  dd/mm/yyyy
            return `${arrDate[2]}${newChar}${arrDate[1]}${newChar}${arrDate[0]}`
        }
    }
}
export { formatDate }