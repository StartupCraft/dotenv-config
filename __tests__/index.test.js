import '../src'

describe('Mergers', () => {
  test('NODE_ENV should be falsy', () => {
    expect(process.env.NODE_ENV).toEqual('test')
  })
  test('TEST should be true', () => {
    expect(process.env.TEST).toEqual('true')
  })
})
