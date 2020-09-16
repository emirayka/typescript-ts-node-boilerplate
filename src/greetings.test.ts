import {GREETINGS_MESSAGE} from '@/greetings'

describe('GREETINGS_MESSAGE', () => {
  test('should be exported correctly', () => {
    expect(typeof GREETINGS_MESSAGE).toEqual('string')
    expect(GREETINGS_MESSAGE.length).toBeGreaterThan(0)
  })
})