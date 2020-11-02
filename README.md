![CI](https://github.com/x86chi/twitter-github-contribution-graph/workflows/CI/badge.svg)
![cron](https://github.com/x86chi/twitter-github-contribution-graph/workflows/cron/badge.svg)

A client uploading Github contribution graph to Twitter profile banner.

[PREVIEW](https://twitter.com/x86chi)

## Usage

Please generate Twitter bot key and token at [Twitter Developer Dashboard](https://developer.twitter.com/en/apps)

### Authorize Twitter app

You can authorize Twitter bot to your Twitter account with [Twitter CLI](https://github.com/sferik/t#configuration)

Below command will direct you to a URL where you can authorize to Twitter bot.

```
t authorize
```

### Method 1. Fork this repository

> Forked repository page -> Secrets -> New Secret

Insert `CONSUMER_KEY`, `CONSUMER_SECRET`, `ACCESS_TOKEN_KEY`, `ACCESS_TOKEN_SECRET`.

Done. The banner is updating once a day.

### Method 2. Create [`.env`](https://github.com/motdotla/dotenv) file in root directory

write the information upper.

```
CONSUMER_KEY=
# etc...
```

Add your Github username.

```
USERNAME=
```

Title and Subtitle will be display to profile banner.

```
TITLE=
SUBTITLE=
```

## License

MIT
