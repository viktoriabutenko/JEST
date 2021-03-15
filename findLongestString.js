const findLongest = (arr) => {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "string") {
      return "only strings are allowed";
    } else {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
  }
  return longest;
};

module.exports = findLongest;
