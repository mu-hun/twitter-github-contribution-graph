import 'dotenv/config'

const variables = {
  username: process.env.USERNAME,
  subtitle: process.env.SUBTITLE,
  title: process.env.TITLE,
  parseOnlyCurrentYear: !!process.env.CURRENT_YEAR,
} as const

if (!(variables.username && variables.subtitle && variables.title))
  throw Error('Cannot read require environment variables')

export const { username, subtitle, title, parseOnlyCurrentYear } = variables
