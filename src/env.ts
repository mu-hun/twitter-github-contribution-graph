import 'dotenv/config'

const { USERNAME, TITLE, CURRENT_YEAR } = process.env

const username = USERNAME
const title = TITLE ?? USERNAME ?? ''
const from = CURRENT_YEAR ? `${new Date().getFullYear()}-01-01` : ''

export { username, title, from }
