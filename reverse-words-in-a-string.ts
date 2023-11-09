const reverseWords = (s: string): string => {
  return s.split(' ').filter(Boolean).reverse().join(' ')
}

const s = 'a good   example'

console.log(reverseWords(s))
