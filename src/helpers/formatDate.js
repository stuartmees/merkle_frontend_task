export default (rawDate) => {
    const dateObj = new Date(rawDate)
    const date = dateObj.toLocaleDateString('en-GB', {dateStyle:"long"})
    return date
}