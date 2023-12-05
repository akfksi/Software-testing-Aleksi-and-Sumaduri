const add = require('./add')

test ('adds two numbers correcly', () => {
    expect(add(1,2)).toBe(3)
})