const { add } = require('./calculator.js');

// test away!
describe('arithmetic functions', () =>{
    describe('add()', ()=>{
        it('It should return the sum of two numbers', ()=>{
            expect(add(2,2)).toBe(4);
            expect(add(2, 3)).toBe(5);
            expect(add(0, 4)).toBe(4);
            expect(add(1, 0)).toBe(1);
        })
        //  it('Should throw an exception if the params are not numbers', () =>{
        //      expect(add('blue', 2)).toThrow();
        //      expect(add(2, 'red')).toThrow();
        //      expect(add('blue', 'red')).toThrow();
        //  })

         it('Should return 0 when called with no args', () =>{
             //AAA- arange, act, assess

            //Arange
            const expectedResult = 0;

            //Act
            const actualResult = add();

            //Assess
            expect(actualResult).toBe(expectedResult)
         })

         it('returns the param if only one is passed in', () =>{
             const expectedResult= 5;
             const actualResult = add(5);
             expect(actualResult).toBe(expectedResult)
         })

        //  it('should handle more than two arguments', () => {
        //     expect(add(1,2,3)).toBe(6);
        //     expect(add(1,2,3,5)).toBe(11);
        //  })
         it('should return 0 when called with no arguments', function(){
             expect(add()).toBe(0);
         });
         it('should throw an argument when arguments are not numbers', function(){
             expect(()=>{
                 add(2, {});
             }).toThrow();
             expect(()=>{
                 add(2, [])
             }).toThrow();
         });

         it.todo('should throw an error when passing an object');
         it.todo('should throw an error  when passing an array');
         it.todo('should throw an error  when passin NaN ');
         it.todo('should throw an error  when passing undefined');
         it.todo('should throw an error  when passing null');
         it.todo('should throw an error  when passing a string')
    })
})