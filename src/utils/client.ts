import twitter from 'twitter'
import dotenv from 'dotenv'

dotenv.config()

const client = new twitter({
  consumer_key: process.env.CONSUMER_KEY!,
  consumer_secret: process.env.CONSUMER_SECRET!,
  access_token_key: process.env.ACCESS_TOKEN_KEY!,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET!,
})

export const updateProfileBanner = (banner: Buffer) =>
  new Promise((res, rej) => {
    client.post(
      'account/update_profile_banner',
      { banner: banner.toString('base64') },
      error => {
        error ? rej(error) : res(null)
      }
    )
  })
