/*
 * twitter-whois
 * Check where/why Twitter users are blocked.
 * Made by skiilaa
 * Licensed under GPL-3.0
 */

//Required packages
var express = require('express');
var twitter = require('twitter');
var country = require('country-data').countries;
var lookup = require('country-data').lookup;
var escape = require('escape-html');

//Config file
var config = require('./config.json');

//Package setup
var app = express();
var client = new twitter({
    consumer_key: config.consumerkey,
    consumer_secret: config.consumersecret,
    access_token_key: config.accesskey,
    access_token_secret: config.accsec
});

//Express app
app.get("/scan/:username", function(req, res){
    console.log("Scanning for " + req.params.username);
    var result = "";
    client.get("users/show", { screen_name: req.params.username }, function(error, user){
        if (error){
            var reported = false;
            error.forEach(function(element){
                if (typeof element.code != "undefined"){
                    if (element.code == 63){
                        result = "User is suspended.";
                        reported = true;
                    }
                }
            });
            if (!reported){
                 result = "An error occurred.";
            }
        } else {
            if (typeof user.withheld_in_countries != "undefined") {
                var wcount = 0;
                withheld_in_countries.forEach(function(element) {
                    wcount++;
                    var lookupResult = lookup.countries({code: element});
                    if (lookupResult.length > 0){
                        result += "User is restricted in " + lookupResult[0].name + "<br>";
                    } else {
                        result += "Twitter returned ~weird~ data.<br>";
                    }
                });
                if (wcount == 0){
                    result += "User is not restricted in any country.<br>";
                }
            } else {
                result += "User is not restricted in any country.<br>";
            }
            if (user.suspended){
                result += "User is suspended.";
            } else {
                result += "User is not suspended.";
            }
        }
        res.send(result);
    });
});

app.get("/jscan/:username", function(req, res){
    console.log("JScanning for " + req.params.username);
    var result = {countries: null, suspension: false};
    client.get("users/show", { screen_name: req.params.username }, function(error, user){
        if (error){
            var reported = false;
            error.forEach(function(element){
                if (typeof element.code != "undefined"){
                    if (element.code == 63){
                        result.suspension = true;
                        reported = true;
                    }
                }
            });
            if (!reported){
                 res.send(500, "");
            }
        } else {
            if (typeof user.withheld_in_countries != "undefined") {
                result.countries = user.withheld_in_countries;
            }
            if (user.suspended){
                result.suspension = true;
            }
        }
        try {
            res.send(JSON.stringify(result));
        } catch(e){}
    });
});

app.get("/raw/:username", function(req, res){
    client.get("users/show", { screen_name: req.params.username }, function(error, user){
        if (error) res.send(500, "");
        res.send(escape(JSON.stringify(user)));
    });
});

app.listen(5374);