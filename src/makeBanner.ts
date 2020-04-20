import sharp from 'sharp'

export const svg2Png = (result: Buffer) =>
  sharp(result)
    .png()
    .toBuffer()

export default function makeBanner(input: Buffer) {
  return sharp('resources/banner.png')
    .composite([{ input }])
    .toBuffer()
}
