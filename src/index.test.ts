import getGraph from './utils/fetch/getGraph'
import { getGraphAndParseSvg } from './utils/svg'
import fs from 'fs'

test('is same?', async () => {
  const result = await getGraphAndParseSvg('x86chi')
  const expectSVG = fs.readFileSync('mock/expect.svg', {
    encoding: 'utf8',
  })

  expect(result).toBe(expectSVG)
})
