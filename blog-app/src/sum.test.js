import sum, { sub } from "./sum";

test("Testing Sum of adding 2 Values",
    ()=>{
    expect(sum(10,20)).toBe(30)
})

test("Doing Subsrack using a - b",
    ()=>{
    expect(sub(10,20)).toBe(-10)
},4000)