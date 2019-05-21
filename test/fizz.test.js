const assert = require('chai').assert;
const fizzBuzz = require('../index').fizzBuzz;

describe('FizzBuzz', () => {
    it('Should not return result for a null value', () => {
        assert(new fizzBuzz().checkNull(), 'Enter a number')
    });

    it('Should not return result for a value thats not a number', () => {
        assert(new fizzBuzz('shs').checkString(), 'Enter only numbers')
    });

    it('Should not return result for a value thats float', () => {
        assert(new fizzBuzz(10.8).checkFloats(), 'Enter only integers')
    });

    it('Should return fizz if 3 is supplied', () => {
        assert(new fizzBuzz(3).checkFizz(), 'fizz')
    });

    it('Should return buzz if 5 is supplied', () => {
        assert(new fizzBuzz(5).checkBuzz, 'buzz')
    });

    it('Should return fizzBuzz if number supplied is multiple of both 3 and 5', () => {
        assert(new fizzBuzz(15).checkfizzBuzz(), 'fizzBuzz')
    });

    it('Should return rest if number supplied is not either multiple of 3, 5 or both', () => {
        assert(new fizzBuzz(11).checkRest, 'rest')
    });
});