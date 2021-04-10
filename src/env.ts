import 'dotenv/config'

const { USERNAME, TITLE, CURRENT_YEAR } = process.env

if (!TITLE) throw Error('Cannot read "TITLE" environment variable')

const username = USERNAME
const title = TITLE
const from = CURRENT_YEAR ? `${new Date().getFullYear()}-01-01` : ''

export { username, title, from }
