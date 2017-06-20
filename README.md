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

## /raw/username

GET whois.skiilaa.me/raw/username

Example:

```
whois.skiilaa.me/raw/skiilaa
```

Response:

```
{"id":814803435916763100,"id_str":"814803435916763138","name":"Móricz Gergő","screen_name":"skiilaa","location":"Hungary","profile_location":null,"description":"he/him • developer • made @SateMage, making #freeinc • spamming twitter with verification requests","url":null,"entities":{"description":{"urls":[]}},"protected":false,"followers_count":50,"friends_count":64,"listed_count":0,"created_at":"Fri Dec 30 12:00:52 +0000 2016","favourites_count":1835,"utc_offset":-25200,"time_zone":"Pacific Time (US & Canada)","geo_enabled":true,"verified":false,"statuses_count":2086,"lang":"en","status":{"created_at":"Tue Jun 20 12:18:46 +0000 2017","id":877138656783454200,"id_str":"877138656783454208","text":"https://t.co/FPXE1hxW5k Just made this.","truncated":false,"entities":{"hashtags":[],"symbols":[],"user_mentions":[],"urls":[{"url":"https://t.co/FPXE1hxW5k","expanded_url":"https://github.com/moriczgergo/twitter-whois","display_url":"github.com/moriczgergo/tw…","indices":[0,23]}]},"source":"<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>","in_reply_to_status_id":null,"in_reply_to_status_id_str":null,"in_reply_to_user_id":null,"in_reply_to_user_id_str":null,"in_reply_to_screen_name":null,"geo":null,"coordinates":null,"place":null,"contributors":null,"is_quote_status":false,"retweet_count":0,"favorite_count":0,"favorited":false,"retweeted":false,"possibly_sensitive":false,"lang":"en"},"contributors_enabled":false,"is_translator":false,"is_translation_enabled":false,"profile_background_color":"F5F8FA","profile_background_image_url":null,"profile_background_image_url_https":null,"profile_background_tile":false,"profile_image_url":"http://pbs.twimg.com/profile_images/876724516046721024/jUW9IBlB_normal.jpg","profile_image_url_https":"https://pbs.twimg.com/profile_images/876724516046721024/jUW9IBlB_normal.jpg","profile_banner_url":"https://pbs.twimg.com/profile_banners/814803435916763138/1497862237","profile_link_color":"1DA1F2","profile_sidebar_border_color":"C0DEED","profile_sidebar_fill_color":"DDEEF6","profile_text_color":"333333","profile_use_background_image":true,"has_extended_profile":true,"default_profile":true,"default_profile_image":false,"following":false,"follow_request_sent":false,"notifications":false,"translator_type":"none","suspended":false,"needs_phone_verification":false}
```

Note: I recommend using this [JSON Visualizer](http://jsonviewer.stack.hu) for... well, visualizing JSON. This makes looking at data easier.

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