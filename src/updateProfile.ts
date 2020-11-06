import twitter from 'twitter'
import 'dotenv/config'

export default function updateProfileBanner(banner: Buffer) {
  return new Promise((res, rej) => {
    client.post(
      'account/update_profile_banner',
      { banner: banner.toString('base64') },
      (error) => {
        error ? rej(error) : res(null)
      }
    )
  })
}

const {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_SECRET,
} = process.env

if (
  !(CONSUMER_KEY && CONSUMER_SECRET && ACCESS_TOKEN_KEY && ACCESS_TOKEN_SECRET)
)
  throw Error('Cannot read require Twitter app key and token')

const client = new twitter({
  /* eslint-disable @typescript-eslint/camelcase */
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token_key: ACCESS_TOKEN_KEY,
  access_token_secret: ACCESS_TOKEN_SECRET,
})
