import fs from 'fs'

import { writeFile } from './utils/fs'

import getGraph from './utils/fetch/getGraph'
import { getSVG } from './utils/svg'

const main = async () => {
  const result = getSVG(await getGraph('x86chi'))

  await writeFile(`temp.svg`, result)
}

main().catch(e => console.error(e))
