import cheerio from 'cheerio'

import getWeekOfYear from './fetch/getWeekOfYear'

const xmlMetaTag = `<?xml version="1.0" encoding="UTF-8"?>
`

export default function parseSVG(context: string, date = new Date()) {
  const container = parseGraphContainer(context)

  const linesOfCurrentYear = parseCurrentYear(
    container.clone(),
    getWeekOfYear(date)
  )

  const preprocessed = preprocessor(container.clone())

  preprocessed.find('svg > g').prepend(linesOfCurrentYear)

  const result = preprocessed.html()!

  const formatted =
    xmlMetaTag +
    result
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

export const preprocessor = (container: Cheerio) => {
  const svg = container.find('svg')

  svg.find('> g > g').remove()

  svg.removeAttr('width')
  svg.removeAttr('height')

  svg.attr('viewBox', '0 0 828 128')
  svg.attr('xmlns', 'http://www.w3.org/2000/svg')

  svg.prepend(`<style>
  text {
    font-family: sans-serif;
  }
  rect {
    --color-calendar-graph-day-bg: #ebedf0;
    --color-calendar-graph-day-L1-bg: #9be9a8;
    --color-calendar-graph-day-L2-bg: #40c463;
    --color-calendar-graph-day-L3-bg: #30a14e;
    --color-calendar-graph-day-L4-bg: #216e39;

    --color-calendar-graph-day-border: rgba(27, 31, 35, 0.06);
    --color-calendar-graph-day-L4-border: rgba(27, 31, 35, 0.06);
    --color-calendar-graph-day-L3-border: rgba(27, 31, 35, 0.06);
    --color-calendar-graph-day-L2-border: rgba(27, 31, 35, 0.06);
    --color-calendar-graph-day-L1-border: rgba(27, 31, 35, 0.06);

    shape-rendering: geometricPrecision;
    outline: 1px solid var(--color-calendar-graph-day-border);
    outline-offset: -1px;
    box-sizing: border-box;
  }
</style>`)

  return container
}
