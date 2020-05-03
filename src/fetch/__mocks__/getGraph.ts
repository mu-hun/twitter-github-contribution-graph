import { readFile } from '../../utils/fs'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function getGraph(username: string) {
  return readFile('mock/index.html', { encoding: 'utf8' })
}
