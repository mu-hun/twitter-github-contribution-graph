import makeBanner from './utils/makeBanner'

const main = async () => {
  const banner = await makeBanner('x86chi')
}

main().catch(e => console.error(e))
