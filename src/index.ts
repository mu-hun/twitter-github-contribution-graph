import { readFileSync, writeFileSync } from 'fs'

import getGraph from './fetch/getGraph'
import parseSVG from './parseSvg'

import makeBanner from './makeBanner'

import updateProfileBanner from './updateProfile'

import { username, title, subtitle, parseOnlyCurrentYear } from './env'

const template = readFileSync('resources/index.html', { encoding: 'utf8' })

const main = async () => {
  const context = await getGraph(username)
  const SVG = parseSVG({ context, date: new Date(), parseOnlyCurrentYear })

  const banner = await makeBanner({ template, SVG, title, subtitle })

  writeFileSync('result.png', banner)
}

main().catch((e) => console.error(e))
