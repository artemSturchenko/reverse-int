module.exports = function reverse (n) {
  const positiveNumber = n>0 ? n : n*(-1)
  const txtNumber = positiveNumber.toString()
  return parseInt(txtNumber.split('').reverse().join(''))
}

