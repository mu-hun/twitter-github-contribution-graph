import fs from 'fs'
import sharp from 'sharp'

import getGraph from './fetch/getGraph'
import parseSVG from './utils/parseSvg'

const svg2Png = async (result: Buffer) => {
  return sharp(result)
    .png()
    .toBuffer()
}

export default async function makeBanner(username: string) {
  const graph = await getGraph(username)
  const SVG = parseSVG(graph)

  const input = await svg2Png(Buffer.from(SVG))

  return sharp('resources/banner.png')
    .composite([{ input }])
    .toBuffer()
}
