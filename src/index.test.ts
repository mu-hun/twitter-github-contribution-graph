jest.mock('./fetch/getGraph')

import getGraph from './fetch/getGraph'
import parseSVG from './parseSvg'

import { readFile } from './utils/fs'

test('Compare snapshot', async () => {
  const graph = await getGraph('x86chi')
  const result = parseSVG(graph, new Date('2020-01-12'))

  const expectSVG = await readFile('mock/expect.svg', { encoding: 'utf8' })

  expect(result).toBe(expectSVG)
})
