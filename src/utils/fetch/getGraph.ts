import request, { RequestPromise } from 'request-promise'

export default (username: string): RequestPromise<string> =>
  request.get(`https://github.com/users/${username}/contributions`)
