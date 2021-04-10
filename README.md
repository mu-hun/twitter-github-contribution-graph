![CI](https://github.com/x86chi/twitter-github-contribution-graph/workflows/CI/badge.svg)
![cron](https://github.com/x86chi/twitter-github-contribution-graph/workflows/cron/badge.svg)

A client uploading Github contribution graph to Twitter profile banner.

[PREVIEW](https://twitter.com/x86chi)

## Usage

Please generate Twitter app key and token at [Twitter Developer Dashboard](https://developer.twitter.com/en/apps)

### Authorize Twitter app

You can authorize Twitter app to your Twitter account with [Twitter CLI](https://github.com/sferik/t#configuration)

Below command will direct you to a URL where you can authorize to Twitter bot.

```
t authorize
```

### Fork this repository

> Forked repository page -> Secrets -> New Secret

Create `CONSUMER_KEY`, `CONSUMER_SECRET`, `ACCESS_TOKEN_KEY`, `ACCESS_TOKEN_SECRET`.

Done. The banner is updating once a day.

### Parse only this year

This project supports parsing only this year history. It is enabled by opt-out in Github Actions.

Please remove the `CURRENT_YEAR: true` line in `github/workflows/cron.yml` if you don't want this feature.

## License

MIT
