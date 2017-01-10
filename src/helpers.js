// lazy, copy from SO: http://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
const indexOfMaxValue = (a) => a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

module.exports = {
  indexOfMaxValue
};
