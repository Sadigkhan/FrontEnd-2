const {sum,subtract,divide} = require('./operator');


describe("Sum Function:",()=>{
    test("will return 3 when we add 2 to 1",()=>{
        expect(sum(1,2)).toBe(3)
    })
    
    test("will return 1 when we add -1 to 2",()=>{
        expect(sum(-1,2)).toEqual(1)
    })
    
    test("will lees than 0.5 or equal 0.5 when we add 0.2 to 0.2",()=>{
        expect(sum(0.2,0.2)).toBeLessThanOrEqual(0.5)
    })
    
})

describe("Subtract function",()=>{
    test("will return 3 when we subtract -1 from 2",()=>{
        expect(subtract(2,-1)).toBe(3)
    })
})


describe("Divide function",()=>{
    test("will return Error while divide to 0",()=>{
        expect(()=>divide(1,0)).toThrow(new Error("0 a bolmek olmaz"))
    })
    test("Error",()=>{
        expect(divide(1.0)).toBeNaN()
    })
    test("will return Error while divide to a string",()=>{
        expect(()=>divide(1,"0")).toThrow(new Error("Yo can use numbers not strings stupid"))

    })
})