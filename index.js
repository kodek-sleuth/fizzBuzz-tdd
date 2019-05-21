
class fizzBuzz {
    constructor (number) {
        this.number = number;
    }

    checkNull() {
        if (this.number == null)
        {
            return 'Enter a number';
        }
    }

    checkString() {
        // Checking for Strings
        if (isNaN(this.number) == true)
        {
            return 'Enter only numbers';
        }
    }

    checkFloats() {
        if (parseFloat(this.number) == parseInt(this.number) == false)
        {
            return 'Enter only integers';
        }
    }

    checkFizz() {
        if (this.number % 3 == 0) 
        { 
            return 'fizz'
        }
    }

    checkBuzz() {
        if (this.number % 5 == 0)
        {
            return 'buzz'
        }
    }

    checkfizzBuzz() {
        if (this.number % 15 == 0)
        {
            return 'fizzBuzz'
        }
    }

    checkRest() {
        if (this.number % 15 != 0)
        {
            return 'rest'
        }
    }
}

module.exports = {
    fizzBuzz
}