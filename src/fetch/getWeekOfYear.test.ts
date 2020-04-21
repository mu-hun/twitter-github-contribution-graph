import startWeekRange from './getWeekOfYear'

const tests = [new Date('2020-01-08'), new Date('2020-02-01')]
const expects = [2, 5]

test(`Get Week of Year from ${tests[0]}`, () => {
  expect(startWeekRange(tests[0])).toBe(expects[0])
})

test(`Get Week of Year from ${tests[0]}`, () => {
  expect(startWeekRange(tests[1])).toBe(expects[1])
})
