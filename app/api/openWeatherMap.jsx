var axios = require("axios");

const OPEN_WEATHER_MAP_URL ="http://api.openweathermap.org/data/2.5/weather?appid=93cf5f7e3fee2d1c63034ed12212c810&units=imperial";



module.exports = {
    getTemp: function (location) {
        //back tick allows you to inject variables directly into the string
        
        //takes your plain text string and encodes it properly for the browser
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
        //actually making the API call. axios.get takes a URL and gets the results
        //the res parameters store the response that comes back from the API call (the whole JSON object)
       return axios.get(requestUrl).then(function (res) {
           
            if (res.data.cod && res.data.message) {
                //if something went wrong do this
                throw new Error(res.data.message);
            }

            else {
                //this is where the actual temp is in the JSON obejct that is returned
                return res.data.main.temp;
            }

        }, function (res) {
            //error case
            throw new Error("Unable to Fetch Weather for that location");
        });
    }
}
