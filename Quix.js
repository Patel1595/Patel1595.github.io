function checkAnswers() {

    var score=0;
    var feedback=[];
    var Q1Answer = document.quiz.a1.value.toLowerCase();
    if (Q1Answer === 'snapchat')
    {
        score++;

        feedback.push("Question 1 is corrrrrrrrrect!! ");
    }
    else {
        feedback.push("incorrect!! Question 1 was Snapchat ");
    }
   if (document.quiz.a3A.checked === true && document.quiz.a3C.checked === false && document.quiz.a3D.checked === true && document.quiz.a3B.checked === false && document.quiz.a3E.checked === false)
   {
       score++;

       feedback.push("Question 2 is corrrrrrrrrect!! ")
   }
   else
   {
       feedback.push("incorrect!! Question 2 was Mario and Luigi" )
   }
    if (document.quiz.a2.value === 'Sonic')
    {
        score++;
        feedback.push("Question 3 is CORRRRRRECT! ")
    }
    else {

        feedback.push("incorrect!! Question 3 was Sonic ");
    }
    
    if (document.quiz.q4.value.toLowerCase() === 'pikachu ')
    {
        score++;
        feedback.push("Question 4 is CORRRRRRECT! ")
    }
    else
    {
        feedback.push("incorrect!! Question 4 was pikachu ");
    }
    if (document.quiz.q51.checked === false && document.quiz.q52.checked === false && document.quiz.q53.checked === true && document.quiz.q54.checked === true && document.quiz.q55.checked === false)
    {
        score++;
        feedback.push("Question 5 is CORRRRRRECT! ")
    }
    else
    {
        feedback.push("incorrect!! Question 5 was Shadow and Sonic ");
    }
    if (document.quiz.a61.value === '16')
    {
        score++;
        feedback.push("Question 6 is CORRRRRRECT! ")
    }
    else
    {
        feedback.push("incorrect!! Question 6 was 16 ");

    }
document.getElementById("outPut").innerHTML = 'You got ' + score + ' right';
    document.getElementById("inCore").innerHTML = feedback;

    alert(score);
    alert(feedback);
}

