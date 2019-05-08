const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1bb482599d89905d72ca68ea0fc5333c/'+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+'?lang=pt&units=si';

    request({ url, json: true }, (error, { body }) => { //destruction
        if (error) {
            callback('Unable to connect to weather service!', undefined)
            //console.log('Unable to connect to weather service!');
        } else if(body.error) {
            callback('Unable to find location!', undefined);
            //console.log('Unable to find location!');
        } else {
            callback(undefined, body.daily.data[0].summary + ' Temperatura em ' + body.currently.temperature + ' graus Celsius. Temperatura mais alta do dia é de ' + body.daily.data[0].temperatureHigh + ' graus e a mais baixa é de ' + body.daily.data[0].temperatureLow +' graus. Tendo ' + body.currently.precipProbability + '% chance de chuva.');           
        }    
    })
};

module.exports = forecast;