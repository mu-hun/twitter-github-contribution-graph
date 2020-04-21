export default function startWeekRange(date: Date) {
  const UTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  )
  UTC.setUTCDate(UTC.getUTCDate() + 4 - (UTC.getUTCDay() || 7))
  const yearStart = new Date(Date.UTC(UTC.getUTCFullYear(), 0, 1))
  return Math.ceil(((UTC.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
}
