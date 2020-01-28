import makeBanner from './utils/makeBanner'
import { updateProfileBanner } from './utils/client'

const main = async () => {
  const banner = await makeBanner('x86chi')
  await updateProfileBanner(banner)
}

main().catch(e => console.error(e))
