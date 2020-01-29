import { readFile } from '../fs'
import request, { RequestPromise } from 'request-promise'

import { isDevelopment } from '../../env'

export default (username: string) =>
  isDevelopment
    ? readFile('mock/index.html', { encoding: 'utf8' })
    : (request.get(
        `https://github.com/users/${username}/contributions`
      ) as RequestPromise<string>)
