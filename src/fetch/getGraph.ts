import axios from 'axios'
import qs from 'querystring'

export default async function getGraph(username: string, from?: string) {
  const query = from ? qs.encode({ from }) : ''
  return (
    await axios.get<string>(
      `https://github.com/users/${username}/contributions?${query}`
    )
  ).data
}
