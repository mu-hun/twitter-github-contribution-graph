import request, { RequestPromise } from 'request-promise'

import { isDevelopment } from '../../env'

export default (username: string): RequestPromise<string> =>
  isDevelopment
    ? request.get('http://localhost:5000')
    : request.get(`https://github.com/users/${username}/contributions`)
