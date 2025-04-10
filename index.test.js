// function add(a,b){
//     return a + b;
// }
// module.exports = add;

// const add = require('./utils');

// test('menjumlahkan 1 + 2 +3',() => {
//     expect (result).toBe(expectedResult);
// });

// it("should return 1000 when x,y,z are all 10",()=>{
//     //gwt (given, when,then)pattern
//     //given
//     const x =10;
//     const y =10;
//     const z =10;

//     // when
//     const result = add(x,y);
//     //then
//     const expectedResult = 5;

//     expect(add(1, 2)).toBe(3);
//     })

const lotBilling = require("./index.js");
describe("lotBilling", () => {
  it("should 6 when x = 3 and y = 2", () => {
    const vehicleType = "car";
    const duration = 2;

    const result = lotBilling(vehicleType, duration);

    const expectedResult = 8000;

    expect(result).toBe(expectedResult);
  });
  it("should 6 when x = 3 and y = 2", () => {
    const vehicleType = "bike";
    const duration = 2;

    const result = lotBilling(vehicleType, duration);

    const expectedResult = 3000;

    expect(result).toBe(expectedResult);
  });
  it("should 6 when x = 3 and y = 2", () => {
    const vehicleType = "bike";
    const duration = 0;

    const result = lotBilling(vehicleType, duration);

    const expectedResult = 0;

    expect(result).toBe(expectedResult);
  });
});

// it("should return 1000 when x,y,z are all 10",()=>{
//         //gwt (given, when,then)pattern
//         //given
//         const vehicleType =10;
//         const duration =10;
//         const  z =10;

//         // when
//         const result = add(x,y);
//         //then
//         const expectedResult = 5;

//         expect(add(1, 2)).toBe(3);
//         });
