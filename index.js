// function add(a,b){
//     return a + b;
// }
// module.exports = add;

// const add = require('./utils');

// test('menjumlahkan 1 + 2 +3',() => {
//     //gwt (given, when,then)pattern
//     //given
//     const x =3;
//     const y =2;

//     // when
//     const result = add(x,y);
//     //then
//     const expectedResult = 5;
//     expect (result).toBe(expectedResult);
//     expect(add(1, 2)).toBe(3);
// });

// function calculateSquare(x,y,z){
//     if (z) {
//         return x*y*z;
//     }
//     return x + y;
// }

// module.exports = calculateSquare;

const pricing = {
  car: {
    firstHour: 5000,
    nexthour: 3000,
    extraCharge: 50000,
  },
  bike: {
    firstHour: 2000,
    nexthour: 1000,
    extraCharge: 20000,
  },
};

const lotBilling = (vehicleType, duration) => {
  if (vehicleType !== "car" && vehicleType !== "bike") {
    return "Invalid vehicle type";
  }
  if (duration <= 0) {
    duration = 1;
  }

  let totalCharge = duration > 24 ? pricing[vehicleType].extraCharge : 0;
  let totalFee =
    pricing[vehicleType].firstHour +
    (duration - 1) * pricing[vehicleType].nexthour +
    totalCharge;

  return totalFee;
};

console.log(lotBilling("car", 3));
console.log(lotBilling("bike", 1));
console.log(lotBilling("car", 27));
console.log(lotBilling("pesawat", 27));

module.exports = lotBilling;
