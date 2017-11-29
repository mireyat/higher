module.exports = (array, callback) => {
  const result = [];
  if (array.length > 0 && callback) {
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i]));
    }
  }
  return result;
};
