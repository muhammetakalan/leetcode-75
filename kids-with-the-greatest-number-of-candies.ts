const kidsWithCandies = (
  candies: number[],
  extraCandies: number
): boolean[] => {
  const maxCandies = Math.max(...candies)

  const result: boolean[] = []

  candies.map((candy: number, index: number) => {
    if (candy < maxCandies - extraCandies) {
      result.push(false)
    } else {
      result.push(true)
    }
  })

  return result
}

const candies: number[] = [2, 3, 5, 1, 3]
const extraCandies: number = 3

console.log(kidsWithCandies(candies, extraCandies))
