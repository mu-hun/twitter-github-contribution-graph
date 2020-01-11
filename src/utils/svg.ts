import { parseGraphAndCurrentYear, parseGraph } from './parse'

export const getSVG = (data: string) => {
  const OnlyHaveCurrentYear = parseGraphAndCurrentYear(data)
  const result = parseGraph(OnlyHaveCurrentYear).html() as string
  return result
}
