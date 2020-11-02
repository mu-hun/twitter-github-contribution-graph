jest.mock('./fetch/getGraph')

import getGraph from './fetch/getGraph'
import parseSVG from './parseSvg'

import { readFile } from './utils/fs'

test('Compare snapshot', async () => {
  const [context, expectSVG] = await Promise.all([
    getGraph('x86chi'),
    readFile('mock/expect.svg', { encoding: 'utf8' }),
  ])

  const result = parseSVG({
    context,
    date: new Date('2020-10-30'),
    parseOnlyCurrentYear: true,
  })

  expect(result).toBe(expectSVG)
})
