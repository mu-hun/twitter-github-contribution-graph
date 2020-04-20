import getGraph from './fetch/getGraph'
import parseSVG from './parseSvg'

import makeBanner, { svg2Png } from './makeBanner'

import updateProfileBanner from './updateProfile'

import { username } from './env'

const main = async () => {
  const graph = await getGraph(username)
  const SVG = parseSVG(graph)

  const PNG = await svg2Png(Buffer.from(SVG))

  const banner = await makeBanner(PNG)
  await updateProfileBanner(banner)
}

main().catch(e => console.error(e))
