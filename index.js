
exports.fizzBuzz = (number) => {
    while (1 > 0)
    {
        // Checking for Empty Values
        if (number == null)
        {
            return 'Enter a number';
        }

        // Checking for Strings
        if (isNaN(number) == true)
        {
            return 'Enter only numbers';
        }

        // Checking for integers
        if (parseFloat(number) == parseInt(number) == false)
        {
            return 'Enter only integers';
        }

        else
        {
            if (number % 15 == 0)
            {
                return 'fizzBuzz'
            }
                
            else if (number % 3 == 0) 
            { 
                return 'fizz'
            }
                
            else if (number % 5 == 0)
            {
                return 'buzz'
            }
                
            else
            {
                return 'notFizzBuzz'
            } 
        }
    }
}