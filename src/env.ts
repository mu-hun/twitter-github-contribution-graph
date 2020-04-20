import 'dotenv/config'

export const isTest = process.env.NODE_ENV === 'test'
export const username = process.env.USERNAME!
