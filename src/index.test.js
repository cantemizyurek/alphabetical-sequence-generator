import { describe, expect, test } from 'vitest'
import alphabeticalSequenceGenerator from './index.js'

describe('alphabeticalSequenceGenerator', () => {
  test('returns a function', () => {
    expect(alphabeticalSequenceGenerator).toBeTypeOf('function')
  })

  test('returns a function that returns a string', () => {
    const next = alphabeticalSequenceGenerator()
    expect(next).toBeTypeOf('function')
    expect(next()).toBeTypeOf('string')
  })

  test('returns a function that returns a string that starts with "a"', () => {
    const next = alphabeticalSequenceGenerator()
    expect(next()).toBe('a')
  })

  test('returns unique sequences', () => {
    const next = alphabeticalSequenceGenerator()
    const sequences = new Set()
    for (let i = 0; i < 1000; i++) {
      sequences.add(next())
    }
    expect(sequences.size).toBe(1000)
  })
})
