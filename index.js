const axios = require("axios");

const fizzBuzz = (number) => {
  if ((number % 3 === 0) & (number % 5 === 0)) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else return number;
};

const fetchData = async () => {
  const data = await axios.get("https://jsonplaceholder.typicode.com/albums/1");
  return data;
};

module.exports = {
  fizzBuzz,
  fetchData,
};
