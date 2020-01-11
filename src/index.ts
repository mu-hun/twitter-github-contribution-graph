import fs from 'fs'
import path from 'path'

import getGraph from './utils/fetch/getGraph'
import { getSVG } from './utils/svg'

const tempPath = path.dirname('../temp')

const main = async () => {
  const result = getSVG(await getGraph('x86chi'))

  fs.writeFile(`temp.svg`, result, error => {
    if (error) throw error
    console.log('saved!')
  })
}

main().catch(e => console.error(e))
