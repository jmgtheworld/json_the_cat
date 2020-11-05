const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request("https://api.thecatapi.com/v1/breeds/search?q=" + breedName, (error, response, body) => {
  //console.log(response.statusCode);
  const data = JSON.parse(body);

  // if (error) {
  //     console.log('THERE IS AN ERROR');
  //     callback(error, null);
  //   } else {

  //     if (!data[0]) {
  //       callback(error, null);
  //     } else {
  //       callback(null, data[0].description);
  //     }
  //   }

  if (response.statusCode !== 200) {
    let requestError = "Api call failed with status code " + response.statusCode;
    callback(requestError, null);
  } else if (data.length === 0) {
    let requestError = "Breed doesn't exist";
    callback(requestError, null);
  } else {
    callback(null, data[0].description.trim());
  }





  });
};

module.exports = { fetchBreedDescription };