const request = require('request');
const input = process.argv.slice(2);

request("https://api.thecatapi.com/v1/breeds/search?q=" + input, (error, response, body) => {
  if (error) {
    console.log("Request failed!");
  } else {
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log("Breed not found!");
    } else {
      console.log(data[0].description);
    }
  }
});