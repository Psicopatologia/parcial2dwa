import createElement, { addchild } from './createElement'

describe('test createElement:', () => {
  test('createElement is a function', () => {
    expect(typeof (createElement)).toBe('function')
  })

  test('tagName must be an string', () => {
    expect(() => {
      createElement({})
    }).toThrow('tagName must be an string')
  })

  test('attributes must be an object', () => {
    expect(() => {
      createElement('span', [])
    }).toThrow('attributes must be an object')
  })

  test('children must be an array', () => {
    expect(() => {
      createElement('span', {}, {})
    }).toThrow('children must be an array')
  })
})

describe('test addchild:', () => {
  test('addchild is a function', () => {
    expect(typeof (addchild)).toBe('function')
  })

  test('children must be an array', () => {
    expect(() => {
      addchild('span', {})
    }).toThrow('children must be an array')
  })

  test('parent must be an instance of HTMLElement', () => {
    expect(() => {
      addchild('span', ['Hi createElement'])
    }).toThrow('parent must be an instance of HTMLElement')
  })
})
