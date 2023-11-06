const mergeAlternately = (word1: string, word2: string): string => {
  const maxLength = Math.max(word1.length, word2.length)
  let result = ''

  for (let i = 0; i < maxLength; i++) {
    result += (word1[i] ?? '') + (word2[i] ?? '')
  }

  return result
}

const word1 = 'abc'
const word2 = 'pqr'

console.log(mergeAlternately(word1, word2))
