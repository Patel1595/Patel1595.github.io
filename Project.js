function TemperatureBug()
{
var temp = Number(document.Temp.Temp1.value);

    if (temp >= 80)
    {
       document.getElementById("weather").src = "img/Summer.png";
        return 'Summer';
    }
    else if (temp >= 60)
    {
        document.getElementById("weather").src = "img/Spring.png";
        return 'Spring';
    }
    else if (temp >= 40)
    {
       document.getElementById("weather").src = "img/Fall.png";
        return 'Fall';
    }
    else if (temp >= 0)
    {
       document.getElementById("weather").src = "img/Winter.png";
        return 'Winter';
    }
    else
    {
       document.getElementById("weather").src = "img/Blank.png";
        return 'Type the temp';
    }
}



function CalorieCounter()
{
    var act = document.Calorie.Acti.value.toLowerCase(); // walking will equal 2 cal a min
    var time = Number(document.Calorie.Mins.value);

    if (act == 'walking')
    {
        return time * 3
    }

    else if (act == 'running')
    {
        return time * 5
    }

    else if (act == 'sitting')
    {
        return time * 1
    }
    else if (act == 'basketball')
    {
        return time * 7
    }
    else if (act == 'soccer')
    {
        return time * 6
    }
    else if (act == 'football')
    {
        return time * 8
    }

}

function assignGrade() {
    var grade = (document.grade.input1.value);
    if (grade >= '90')
    {
        return 'A';
    }
    else if (grade > '80')
    {
        return 'B';
    }
    else if (grade > '70')
    {
        return 'C';
    }
    else if (grade > '60')
    {
        return 'D';
    }
    else if (grade < '59')
    {
        return 'F';
    }
    else
    {
        return 'None';
    }
}

function workTest()
{
   var act = document.getElementById('work').value;

    if (act === "running");

    {
        return 'running';
    }
    else
    {
        return 'nothing';
    }
}