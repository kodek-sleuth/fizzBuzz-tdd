const assert = require('chai').assert;
const fizzBuzz = require('../index').fizzBuzz;

describe('FizzBuzz', () => {
    it('Should not return result for a null value', () => {
        assert(fizzBuzz(), 'Enter a number')
    });

    it('Should not return result for a value thats not a number', () => {
        assert(fizzBuzz('shs'), 'Enter only numbers')
    });

    it('Should not return result for a value thats float', () => {
        assert(fizzBuzz(10.8), 'Enter only integers')
    });

    it('Should return fizz if 3 is supplied', () => {
        assert(fizzBuzz(3), 'fizz')
    });

    it('Should return buzz if 5 is supplied', () => {
        assert(fizzBuzz(5), 'buzz')
    });

    it('Should return fizzBuzz if number supplied is multiple of both 3 and 5', () => {
        assert(fizzBuzz(15), 'fizzBuzz')
    });
});