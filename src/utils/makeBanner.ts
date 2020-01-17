import fs from 'fs'
import sharp from 'sharp'

import getGraph from './fetch/getGraph'
import { getGraphAndParseSvg } from './svg'

const svg2Png = async (result: Buffer) => {
  return sharp(result)
    .png()
    .toBuffer()
}

export default async (username: string) => {
  const svgData = Buffer.from(await getGraphAndParseSvg(username))
  const pngData = await svg2Png(svgData)

  return sharp('resources/banner.png')
    .composite([{ input: pngData }])
    .toBuffer()
}
