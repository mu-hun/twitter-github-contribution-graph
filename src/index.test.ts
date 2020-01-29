import getGraph from './utils/fetch/getGraph'
import { getGraphAndParseSvg } from './utils/svg'
import { readFile } from './utils/fs'

test('is same?', async () => {
  const result = await getGraphAndParseSvg('x86chi')
  const expectSVG = await readFile('mock/expect.svg', { encoding: 'utf8' })

  expect(result).toBe(expectSVG)
})
