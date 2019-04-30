const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1bb482599d89905d72ca68ea0fc5333c/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude);

    request({ url, json: true }, (error, { body }) => { //destruction
        if (error) {
            callback('Unable to connect to weather service!', undefined)
            //console.log('Unable to connect to weather service!');
        } else if(body.error) {
            callback('Unable to find location!', undefined);
            //console.log('Unable to find location!');
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.');           
        }    
    })
};

module.exports = forecast;