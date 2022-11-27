import { describe, it, expect } from 'vitest'
import add from '../src/add'

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(1, 2)).toBe(3)
  }, {timeout: 1000, retry: 1})
})