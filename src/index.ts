import { readFileSync } from 'fs'

import getGraph from './fetch/getGraph'
import parseSVG from './parseSvg'

import makeBanner from './makeBanner'

import updateProfileBanner from './updateProfile'

import { username, title, subtitle } from './env'

const template = readFileSync('resources/index.html', { encoding: 'utf8' })

const main = async () => {
  const graph = await getGraph(username)
  const SVG = parseSVG(graph)

  const banner = await makeBanner({ template, SVG, title, subtitle })

  await updateProfileBanner(banner)
}

main().catch((e) => console.error(e))
