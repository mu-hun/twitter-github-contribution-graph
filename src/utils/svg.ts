import getGraph from './fetch/getGraph'
import { parseGraphAndCurrentYear, parseGraph } from './parse'

const parseSVG = (data: string) => {
  const OnlyHaveCurrentYear = parseGraphAndCurrentYear(data)
  const result = parseGraph(OnlyHaveCurrentYear).html() as string
  return result
}

export const getGraphAndParseSvg = async (username: string) => {
  const graph = await getGraph(username)
  return parseSVG(graph)
}
