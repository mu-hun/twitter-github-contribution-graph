export default () => {
  const date = new Date()
  const UTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  )
  UTC.setUTCDate(UTC.getUTCDate() + 4 - (UTC.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(UTC.getUTCFullYear(), 0, 1))
  // @ts-ignore
  return Math.ceil(((UTC - yearStart) / 86400000 + 1) / 7) - 2
}
