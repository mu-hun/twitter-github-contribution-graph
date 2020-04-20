import { readFile } from '../utils/fs'
import request, { RequestPromise } from 'request-promise'

import { isDevelopment } from '../env'

export default function getGraph(username: string) {
  return isDevelopment
    ? readFile('mock/index.html', { encoding: 'utf8' })
    : (request.get(
        `https://github.com/users/${username}/contributions`
      ) as RequestPromise<string>)
}
