jest.mock('./fetch/getGraph')

import getGraph from './fetch/getGraph'
import parseSVG from './parseSvg'

import { readFile } from './utils/fs'

test('Compare snapshot', async () => {
  const [graph, expectSVG] = await Promise.all([
    getGraph('x86chi'),
    readFile('mock/expect.svg', { encoding: 'utf8' }),
  ])

  const result = parseSVG(graph, new Date('2020-01-12'))

  expect(result).toBe(expectSVG)
})
