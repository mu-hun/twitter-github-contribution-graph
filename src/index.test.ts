import getGraph from './utils/fetch/getGraph'
import { getSVG } from './utils/svg'
import { readFile } from './utils/fs'

test('is same?', async () => {
  const result = getSVG(await getGraph('x86chi'))
  const expectSVG = await readFile('mock/expect.svg', { encoding: 'utf8' })

  expect(result).toBe(expectSVG)
})
