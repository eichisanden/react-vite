import { test, expect } from 'vitest'
import add from '../src/add'

test.skip('only', () => {
    expect(add(1, 2)).toBe(3)
})
