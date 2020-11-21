const { expect, test } = require('@jest/globals')
const tipPerPerson = require('./tipPerPerson')
test('checking for small integeral value of bill',()=>{
    expect(tipPerPerson(100,10,2)).toBe(5)
    })
test('checking for large values of bill',()=>{
    expect(tipPerPerson(190000,5,5)).toBe(7600)
})
test('checking for very large values of bill',()=>{
    expect(tipPerPerson(9876387736281,49,3)).toBe(67186311131.16327)
})
test('checking for null values of bill',()=>{
    expect(tipPerPerson(null,10,2)).toBe(NaN)
})
test('checking for decimal values of bill',()=>{
    expect(tipPerPerson(23826.55,5,5)).toBe(953.062)
})
test('checking for negative values of bill',()=>{
    expect(tipPerPerson(-190,8,5)).toBeUndefined;
})
test('checking for input other than number of bill',()=>{
    expect(tipPerPerson(100-0,10,2)).toBeUndefined;
})

test('checking for small integeral value of tip percent',()=>{
    expect(tipPerPerson(300,5,2)).toBe(30)
    })
test('checking for large integeral value of tip percent',()=>{
    expect(tipPerPerson(3000,500,23)).toBeUndefined;
    })
test('checking for decimal value of tip percent',()=>{
    expect(tipPerPerson(3040,10.5,6)).toBe(48.25396825396825);
    })
test('checking for negative values of tip percent',()=>{
    expect(tipPerPerson(190,-8,5)).toBeUndefined;
})
test('checking for null values of tip percent',()=>{
    expect(tipPerPerson(190,null,5)).toBeNull;
})
test('checking for input other than number in tip percent',()=>{
    expect(tipPerPerson(49999,1-0,5)).toBeUndefined;
})

test('checking for small integeral value of no. of people',()=>{
    expect(tipPerPerson(100,10,2)).toBe(5)
    })
test('checking for 0 value of no. of people',()=>{
    expect(tipPerPerson(400001,26,0)).toBeNull
})
test('checking for large integeral value of no.of people',()=>{
        expect(tipPerPerson(1000000,10,200)).toBe(500)
    })
test('checking for all decimal values for no. of people',()=>{
        expect(tipPerPerson(1999.91,17.6,8.9)).toBeUndefined;
    })
test('checking for all null values',()=>{
        expect(tipPerPerson(null,null,null)).toBeNull;
    })
test('checking for negative values for no. of people',()=>{
    expect(tipPerPerson(4999,-7,12)).toBeUndefined;
})
test('checking for null values for no. of people',()=>{
    expect(tipPerPerson(1999,17,null)).toBeNull;
})

test('checking for decimal values for no. of people',()=>{
    expect(tipPerPerson(39991,6.7,3)).toBeUndefined;
})
