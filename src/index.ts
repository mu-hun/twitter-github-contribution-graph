import makeBanner from './makeBanner'
import { updateProfileBanner } from './client'

import { username } from './env'

const main = async () => {
  const banner = await makeBanner(username)
  await updateProfileBanner(banner)
}

main().catch(e => console.error(e))
