const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  for (let i = 0; i < flowerbed.length && n; i++) {
    if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      n--
      i++
    }
  }

  return n === 0
}

const flowerbed = [1, 0, 0, 0, 1]
const n = 2

console.log(canPlaceFlowers(flowerbed, n))
