const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

/**
 * Generates an alphabetical sequence.
 * @returns {() => string} A function that returns the next sequence in the alphabetical order.
 */
export default function alphabeticalSequenceGenerator() {
  let index = -1
  const alphabet = letters.split('')

  function next() {
    index++
    let sequence = ''
    let i = index
    while (i >= 0) {
      sequence = alphabet[i % alphabet.length] + sequence
      i = Math.floor(i / alphabet.length) - 1
    }
    return sequence
  }

  return next
}
