import cheerio from 'cheerio'
import { readFileSync } from 'fs'

const stylesheet = {
  layout: readFileSync('resources/index.css', { encoding: 'utf8' }),
  github: readFileSync('resources/github.css', { encoding: 'utf8' }),
} as const

const documentWrapper = (document: string) => `
<html>
  <head>
  </head>
  <body>
    ${document}
  </body>
</html>
`

const titleGenerator = (
  title: string
) => `<h1 class="f4 text-normal float-right mt-1">
      <svg viewBox="0 0 16 16" version="1.1" aria-hidden="true" width="1em">
        <path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        ></path>
      </svg>
      ${title}
    </h1>`

const assets = [
  'https://github.githubassets.com/assets/frameworks-3d85abd8e6af4fc72b0afa253e125ef9.css',
  'https://github.githubassets.com/assets/behaviors-8d376fa2209ecc1887f72c36e990c8ed.css',
  'https://github.githubassets.com/assets/github-789e521750bc76020fa16e24493526f0.css',
]

const calendarGraph = '.js-calendar-graph-svg'

export default function makeBanner(document: string, title: string) {
  const $ = cheerio.load(documentWrapper(document))

  const width = $(calendarGraph).attr('width')
  const height = $(calendarGraph).attr('height')

  if (!width || !height)
    throw Error('SVG width or height attribute is not found')

  $(calendarGraph).removeAttr('width')
  $(calendarGraph).removeAttr('height')

  $(calendarGraph).attr('viewBox', `0 0 ${width} ${height}`)

  $('.js-yearly-contributions > .position-relative:first-of-type').prepend(
    titleGenerator(title)
  )

  for (const asset of assets) {
    $('head').append(`<link rel="stylesheet" href="${asset}">`)
  }

  $('head').append(`<style>${stylesheet.layout}</style>`)
  $('head').append(`<style>${stylesheet.github}</style>`)

  return $.html()
}
