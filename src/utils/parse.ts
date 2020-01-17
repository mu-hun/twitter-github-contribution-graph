import cheerio from 'cheerio'

import getGraph from './fetch/getGraph'
import getWeek from './fetch/getWeek'

export const parseGraph = (data: CheerioStatic) => data('.js-calendar-graph')

const parseCurrentYear = (data: Cheerio) => {
  const selected = data.find('g > g')
  const underIndex = selected.length - 1 - getWeek()
  return selected.not(index => index < underIndex)
}

export const parseGraphAndCurrentYear = (data: string) => {
  const loaded = cheerio.load(data)
  const parsedGraph = parseGraph(loaded)
  const currentYear = parseCurrentYear(parsedGraph)

  loaded('svg > g > g').remove()

  loaded('svg').removeAttr('width')
  loaded('svg').removeAttr('height')

  loaded('svg').attr('viewBox', '0 0 828 128')
  loaded('svg').attr('xmlns', 'http://www.w3.org/2000/svg')

  loaded('svg').prepend('<style>text {font-family: sans-serif}</style>')

  loaded('svg > g').prepend(currentYear)
  return loaded
}
