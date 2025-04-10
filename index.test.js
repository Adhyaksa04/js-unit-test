function add(a,b){
    return a + b;
}
module.exports = add;

const add = require('./utils');

test('menjumlahkan 1 + 2 +3',() => {

    instanceof("should return 1000 when x,y,z are all 10",()=>{
    //gwt (given, when,then)pattern
    //given
    const x =10;
    const y =10;
    const z =10;

    // when
    const result = add(x,y);
    //then
    const expectedResult = 5;
    expect (result).toBe(expectedResult);
    expect(add(1, 2)).toBe(3);
    })
});