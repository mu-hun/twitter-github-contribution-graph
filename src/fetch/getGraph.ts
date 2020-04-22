import axios from 'axios'

export default async function getGraph(username: string) {
  return (
    await axios.get<string>(
      `https://github.com/users/${username}/contributions`
    )
  ).data
}
