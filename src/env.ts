import 'dotenv/config'

const variables = {
  username: process.env.USERNAME,
  URL: process.env.URL,
  title: process.env.TITLE,
} as const

if (!(variables.username && variables.URL && variables.title))
  throw Error('Cannot read require environment variables')

export const { username, URL, title } = variables
