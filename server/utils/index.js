let dataFormat = (data, successful = '1', errorDescription = '') => {
  return {
    data,
    successful,
    errorDescription
  }
}
module.exports = {
  dataFormat
}
