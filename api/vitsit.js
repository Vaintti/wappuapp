
var vitsit = require('./../Vitsit');

module.exports = function(app) {
    
    app.get('/vitsit/getVitsi', function(req, res) {
        console.log("toimii route getVitsi");


        vitsit.getVitsi(function(data) {
            var vitsi = data[Math.floor(Math.random()*data.length)].text
            res.status(200).send(vitsi);
        })

    })
}