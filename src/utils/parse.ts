import cheerio from 'cheerio'

import getGraph from './fetch/getGraph'
import getWeek from './fetch/getWeek'

export const parseGraph = (data: CheerioStatic) => data('.js-calendar-graph')

const parseCurrentYear = (data: Cheerio) => {
  const selected = data.find('g > g')
  const underIndex = selected.length - getWeek()
  return selected.not(index => index < underIndex)
}

export const parseGraphAndCurrentYear = (data: string) => {
  const loaded = cheerio.load(data)
  const parsedGraph = parseGraph(loaded)
  const currentYear = parseCurrentYear(parsedGraph)

  loaded('svg > g > g').remove()

  loaded('svg > g').prepend(currentYear)

  return loaded
}
