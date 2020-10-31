import cheerio from 'cheerio'

import getWeekOfYear from './fetch/getWeekOfYear'

export default function parseSVG(context: string, date = new Date()) {
  const container = parseGraphContainer(context)

  const linesOfCurrentYear = parseCurrentYear(
    container.clone(),
    getWeekOfYear(date)
  )

  const preprocessed = preprocessor(container.clone())

  preprocessed.find('svg > g').prepend(linesOfCurrentYear)

  const result = preprocessed.html()!

  const formatted = result
    .trim()
    .replace(/\n {3}/g, '')
    .replace(
      / {7}<rect/g,
      `
    <rect`
    )
  return formatted
}

const parseGraphContainer = (context: string) =>
  cheerio('.js-calendar-graph', context)

const parseCurrentYear = (container: Cheerio, startIndex: number) => {
  const selected = container.find('g > g')
  const underIndex = selected.length - startIndex
  return selected.not((index) => index < underIndex)
}

const preprocessor = (container: Cheerio) => {
  const svg = container.find('svg')

  svg.find('> g > g').remove()

  svg.removeAttr('width')
  svg.removeAttr('height')

  svg.addClass('calendar-graph')

  svg.attr('viewBox', '0 0 728 110')
  svg.attr('xmlns', 'http://www.w3.org/2000/svg')

  return container
}
