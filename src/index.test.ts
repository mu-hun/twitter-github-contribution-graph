import getGraph from './fetch/getGraph'
import parseSVG from './parseSvg'
import { readFile } from './utils/fs'

test('is same?', async () => {
  const graph = await getGraph('')
  const result = parseSVG(graph)
  const expectSVG = await readFile('mock/expect.svg', { encoding: 'utf8' })

  expect(result).toBe(expectSVG)
})
