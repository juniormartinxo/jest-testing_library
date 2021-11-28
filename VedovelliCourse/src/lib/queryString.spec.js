import { queryString, parse } from './queryString'

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Junior',
      profession: 'developer',
    }

    expect(queryString(obj)).toBe('name=Junior&profession=developer')
  })

  it('should create a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Junior',
      abilities: ['JS', 'TDD'],
    }

    expect(queryString(obj)).toBe('name=Junior&abilities=JS,TDD')
  })

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Junior',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    }

    expect(() => {
      queryString(obj)
    }).toThrowError()
  })
})

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const query = 'name=Junior&profession=developer'

    expect(parse(query)).toEqual({
      name: 'Junior',
      profession: 'developer',
    })
  })

  it('should convert a query string of a single key-value pair to object', () => {
    const query = 'name=Junior'

    expect(parse(query)).toEqual({
      name: 'Junior',
    })
  })

  it('should convert a query string to an object taking care of comma separated values', () => {
    const query = 'name=Junior&abilities=JS,TDD'

    expect(parse(query)).toEqual({
      name: 'Junior',
      abilities: ['JS', 'TDD'],
    })
  })
})
