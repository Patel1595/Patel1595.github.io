function baseTwo()
{
    var Num = Number(document.bin.input1.value);  //this is the number
    base = 2;
    tenNum = 0;
    numLenght = Num.toString().length;

    while (numLenght > 0)
    {
        var denominator = Math.pow(10, numLenght-1);

        var currentDigit = Math.floor(Num/denominator);
        tenNum = tenNum + currentDigit*Math.pow(base, numLenght-1);
        Num = Num%denominator;
        numLenght--;
    }
    return tenNum;
}

function BaseTenToTwo()
{
    var x = Number(document.cook.inp1.value);
    y = 2;
    hold = "";

    while (x > 0)
    {
        hold = x%y + hold;
        x = Math.floor(x/y)
    }
    return hold;
}




function baseTen()
{
    var x = Number(document.work.input2.value);
    var y = Number(document.work.inp.value);
    hold = "";

    if (Hold = 10)
    {
        then hold="A";
    }
    
    
    while (x > 0)
    {
        hold = x%y + hold;
        x = Math.floor(x/y)
    }
    return hold;
}