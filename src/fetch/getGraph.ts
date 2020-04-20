import { readFile } from '../utils/fs'
import request, { RequestPromise } from 'request-promise'

export default function getGraph(username?: string) {
  return username
    ? (request.get(
        `https://github.com/users/${username}/contributions`
      ) as RequestPromise<string>)
    : readFile('mock/index.html', { encoding: 'utf8' })
}
