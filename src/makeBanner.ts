import cheerio from 'cheerio'
import { readFileSync } from 'fs'
import nodeHtmlToImage from 'node-html-to-image'

interface MakeBannerProps {
  template: string
  SVG: string
  title: string
  subtitle: string
}

const stylesheet = {
  layout: readFileSync('resources/index.css', { encoding: 'utf8' }),
  github: readFileSync('resources/github.css', { encoding: 'utf8' }),
} as const

export default async function makeBanner({
  template,
  SVG,
  title,
  subtitle,
}: MakeBannerProps) {
  const $ = cheerio.load(template)
  $('h1').prepend(title)
  $('footer').append(`<p>${subtitle}</p>`)

  $('body').prepend(SVG)

  $('div.width-full').remove()

  $('head').append(`<style>${stylesheet.layout}</style>`)
  $('head').append(`<style>${stylesheet.github}</style>`)

  const output = await nodeHtmlToImage({ html: $.html() })

  if (!(output instanceof Buffer))
    throw Error('Generated image type is not Buffer')

  return output
}
