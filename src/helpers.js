// lazy, copy from SO: http://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
const indexOfMaxValue = (a) => a.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

function ScaleRealVec(length, arr, scalefac){
  for(let i=0; i<length; i++) arr[i] *= scalefac;
}

module.exports = {
  indexOfMaxValue
};
