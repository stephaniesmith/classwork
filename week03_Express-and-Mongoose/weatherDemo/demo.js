const request = require('superagent');
const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.WU_API_KEY;
const zip = process.argv[2] || '97211';

if (!apiKey) {
  console.log('No API key present!');
  process.exit(1);
}

const url = `http://api.wunderground.com/api/${apiKey}/wu/astronomy/hourly/q/${zip}.json`
function processData (data) {
  return {
    temperature:  data.hourly_forecast[0].temp.english,
    condition:    data.hourly_forecast[0].condition,
    windSpeed:    data.hourly_forecast[0].wspd.english,
    windDir:      data.hourly_forecast[0].wdir.dir,
    sunrise:      data.sun_phase.sunrise.hour +':'+ data.sun_phase.sunrise.minute,
    sunset:       data.sun_phase.sunset.hour +':'+ data.sun_phase.sunset.minute,
  };
}


request
  .get(url)
  .then(res => {
    console.log(processData(res.body));
  })
  .catch(err => {
    console.log(`Error: ${err}`);

  });


