let count = 0;

// increment and decrement count
const inc = () => ++count;
const dec = () => --count;

// show current count
const getCount = () => count;

// export return an object
module.exports = {
  inc,
  dec,
  getCount
};
