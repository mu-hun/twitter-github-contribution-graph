import { readFile } from '../utils/fs'
import axios from 'axios'

export default async function getGraph(username?: string) {
  return username
    ? (await axios.get<string>(
        `https://github.com/users/${username}/contributions`
      )).data
    : readFile('mock/index.html', { encoding: 'utf8' })
}
