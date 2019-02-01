/*
 Gameplan

 Html:
 (*) Calculator window for operations to be shown along with result
 () Number buttons for the calculator
 () operator buttons (+, -, *, etc)
 () = button
 () Reset or clear button
 () optional: backspace button??

 Java:
 () function that captures whats typed in the calcWindow
 () Separate function that add numbers, subtract numbers, etc.
 */

function calculate(expression) //ex.  expression is 2+5 or 9*6 or 10/5
{
    //expression is a string of everything in your calcWindow
    //Need to extract the first number from expression
    var firstNum = Number(expression.substr(0,1));
    var operator = expression.substr(1,1);
    var secondNum = Number(expression.substr(2,1));

    if (operator === '+')
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subNums(firstNum, secondNum);
    }
    else if (operator === 'X')
    {
        return mulNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return sqaurEd(firstNum, secondNum);
    }
    else if (operator === '✓')
    {
        return sqaureRoot(firstNum, secondNum);
    }
}

function addNums(p1, p2)
{
    return p1 + p2;
}

function subNums(p1, p2)
{
    return p1 - p2;
}

function mulNums(p1, p2)
{
    return p1*p2;
}
function divNums(p1, p2)
{
    return p1/p2;
}
function sqaurEd(p1, p2)
{
    return  p1*p1;
}
function sqaureRoot(p1, p2)
{

    return Math.sqrt(p2);
}