const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://football98.p.rapidapi.com/premierleague/table',
  headers: {
    'X-RapidAPI-Key': '2dab5b0ac9msh47285fc7bbf4352p183d18jsne8838ff1c54c',
    'X-RapidAPI-Host': 'football98.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});