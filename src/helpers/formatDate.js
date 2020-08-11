export default (rawDate, year = true) => {
    const dateObj = new Date(rawDate)
    const dateOptions = year ? {month:"short", day:"2-digit", year: 'numeric'} : {month:"short", day:"2-digit"}
    
    const date = dateObj.toLocaleDateString('en-GB', dateOptions)
    return date
}