const reverseVowels = (s: string): string => {
  const vowels = s.match(/[aeiou]/gi)

  if (!vowels) {
    return s
  } else {
    return s.replace(/[aeiou]/gi, () => vowels.pop() || '')
  }
}

const s = 'hello'

console.log(reverseVowels(s))
