import makeBanner from './utils/makeBanner'
import { updateProfileBanner } from './utils/client'

import { username } from './env'

const main = async () => {
  const banner = await makeBanner(username)
  await updateProfileBanner(banner)
}

main().catch(e => console.error(e))
