const { queryString } = require('./queryString')

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Junior',
      profession: 'developer',
    }
    queryString(obj)

    expect(queryString(obj)).toBe('name=Junior&profession=developer')
  })
})

//describe('Query string to object', () => {})
