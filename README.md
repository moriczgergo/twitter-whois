# twitter-whois
A Twitter whois service: see where are people blocked, and why are they blocked in those countries.

# API

## /scan/username

GET whois.skiilaa.me/scan/username

Example:

```
whois.skiilaa.me/scan/skiilaa
```

Response:

```
User is not restricted in any country.
User is not suspended.
```

# How to setup on your own

## Create Twitter app.

Go to [your Twitter apps](https://apps.twitter.com), create an app, and copy in you consumer and access keys into `config.json` like this:

```json
{
    "consumerkey": "Your Consumer Key",
    "consumersecret": "Your Consumer Secret",
    "accesskey": "Your Access Token",
    "accsec": "Your Access Secret"
}
```

## Run this script.

Run `npm install`, run `node index.js`, and boom. Visit localhost:5374/scan/skiilaa, and there it is.