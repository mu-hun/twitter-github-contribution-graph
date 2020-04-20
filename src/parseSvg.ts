import cheerio from 'cheerio'

import getGraph from './fetch/getGraph'
import getWeek from './fetch/getWeek'

import { isDevelopment } from './env'

const xmlMetaTag = `<?xml version="1.0" encoding="UTF-8"?>
`

export default function parseSVG(context: string) {
  const container = parseGraphContainer(context)

  const linesOfCurrentYear = parseCurrentYear(container.clone())
  const preporcessed = preprocesser(container.clone())

  preporcessed.find('svg > g').prepend(linesOfCurrentYear)

  const result = preporcessed.html()!

  const formatted =
    xmlMetaTag +
    result
      .trim()
      .replace(/\n   /g, '')
      .replace(
        /       <rect/g,
        `
    <rect`
      )
  return formatted
}

const parseGraphContainer = (context: string) =>
  cheerio('.js-calendar-graph', context)

const weekIndex = getWeek(isDevelopment ? new Date('2020-01-12') : new Date())

export const parseCurrentYear = (data: Cheerio) => {
  const selected = data.find('g > g')
  const underIndex = selected.length - weekIndex
  return selected.not(index => index < underIndex)
}

export const preprocesser = (container: Cheerio) => {
  const svg = container.find('svg')

  svg.find('> g > g').remove()

  svg.removeAttr('width')
  svg.removeAttr('height')

  svg.attr('viewBox', '0 0 828 128')
  svg.attr('xmlns', 'http://www.w3.org/2000/svg')

  svg.prepend('<style>text {font-family: sans-serif}</style>')

  return container
}
