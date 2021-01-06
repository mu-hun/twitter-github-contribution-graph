import cheerio from 'cheerio'

import getWeekOfYear from './fetch/getWeekOfYear'

interface ParseSVGProps {
  context: string
  date: Date
  parseOnlyCurrentYear: boolean
}

export default function parseSVG({
  context,
  date,
  parseOnlyCurrentYear,
}: ParseSVGProps) {
  const container = parseGraphContainer(context)
  const preprocessed = preprocessor(container)

  if (parseOnlyCurrentYear) {
    const linesOfCurrentYear = parseCurrentYear(
      preprocessed,
      getWeekOfYear(date)
    )

    preprocessed.find('svg > g > g').remove()
    preprocessed.find('svg > g').prepend(linesOfCurrentYear)
  }

  const result = preprocessed.html()

  if (!result) throw Error('Parsed SVG content is empty')

  const formatted = result
    .trim()
    .replace(/\n\s{3}/g, '')
    .replace(/\s{7}<rect/g, '\n    <rect')
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

  svg.removeAttr('width')
  svg.removeAttr('height')

  svg.addClass('calendar-graph')

  svg.attr('viewBox', '0 0 728 110')
  svg.attr('xmlns', 'http://www.w3.org/2000/svg')

  return container
}
