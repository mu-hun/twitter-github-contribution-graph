import path from 'path'

jest.mock('./fetch/getGraph')

import getGraph from './fetch/getGraph'
import makeBanner from './makeBanner'

import { title } from './env'

import { readFile } from './utils/fs'

test('Compare snapshot', async () => {
  const [document, expectHTML] = await Promise.all([
    getGraph('x86chi'),
    readFile(path.resolve('mock', 'expect.html'), { encoding: 'utf8' }),
  ])

  const result = makeBanner(document, title)

  expect(result).toBe(expectHTML)
})
