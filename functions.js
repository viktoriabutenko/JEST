const axios = require("axios");
const functions = {
  checkTheEnding: (str, subStr) => {
    return str.length > 0 && subStr.length > 0
      ? str.endsWith(subStr)
      : "both strings are required";
  },
  getUsernameByID: (userId) => {
    if (!userId) {
      return "error";
    }

    return axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.data);
  },
};

module.exports = functions;
