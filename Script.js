var a;
var rectX = 0;
var rectY = 230;

var Blue = "#82fff8";
var color =  (0, 0,700,250);
var moon  = "#ecff02";


function drawRectangles() {

        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.fillStyle="#007777";
        ctx.fillRect(0,0, window.innerWidth, window.innerHeight); //the dimensions of this rectangle will mirror the dimension of the Canvas regardless of the size of the Canvas

    // associate or join the canvas on html (index)
    //with javascript
    var canvas = document.getElementById("myCanvas");
    //associate 2D draw tools with your canvas
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#feff9a";
    ctx.fillRect(0, 350, 700, 500);
    ctx.fillStyle = Blue;
    ctx.fillRect(0, 0,700,250);
    ctx.fillStyle = "#1500ff";
    ctx.fillRect(0, 250,700,100);



    ctx.fillStyle = "#ff0900";
    ctx.fillRect(25, 375,100,150);

    ctx.fillStyle = "#fefff9";
    ctx.fillRect(150, 375,100,150);

    ctx.fillStyle = "#ff0900";
    ctx.fillRect(275, 375,100,150);

    ctx.fillStyle = "#fbf9ff";
    ctx.fillRect(400, 375,100,150);
if (SunY === 40)
{
    moon = moon;
}
if (SunY === 250)
{
    Blue = "#ff7f45";
}
if (SunY === 450)
{
    Blue = "#2c2d2c";
}
if (SunY === 450)
    {
        moon = "#cfd4c9";
    }
    if (SunY > 500)
    {
        SunY = 20;  Blue = "#82fff8"
    }



}

var SunX = 10;
var SunY = 20;
var SunMY = 1;
function drawCircles() {
    var ctx = document.getElementById("myCanvas").getContext("2d");

    //  draw 2 circles, differently
    //  ctx.lineWidth=2;
    //  ctx.strokeStyle = "#000";
    // ctx.arc(250,250,80,0,2*Math.PI);
//    ctx.fill();
    // ctx.stroke();
    SunY = SunY + SunMY;
    ctx.beginPath();
    ctx.arc(10, 20, 90, 0, 2 * Math.PI);
    ctx.fillStyle = moon;


}

    function MOVE() {
        drawRectangles();
        var ctx = document.getElementById("myCanvas").getContext("2d");

    ctx.fillStyle = "#1500ff";
    ctx.fillRect(0, 200, 50,50);
}

var moveAmount = 3;
var moveAmountY = 3;
var coOr = "#ecff02";
function recMove() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    rectX = rectX + moveAmount;
    ctx.fillStyle = "#1500ff";
    ctx.fillRect(rectX, rectY, 50,50);
    SunY = SunY + SunMY;
    ctx.beginPath();
    ctx.arc(SunX, SunY, 90, 0, 2 * Math.PI);
    ctx.fillStyle = coOr;
    ctx.fill();
    ctx.stroke();

}
function animate() {
    a = requestAnimationFrame(animate);
    drawRectangles();
    checkRectangle();
    drawCircles();
    recMove();

}

function startAnimation() {
    animate();
}

function stopAnimation() {
    cancelAnimationFrame(a);
}



function checkRectangle() {
    if (rectX > 450)
    {
        moveAmount = moveAmount*(-1);
    }
    if (rectY < 0)
    {
        moveAmountY = moveAmountY*(-1);
    }
    if (rectX < 0)
    {
        moveAmount = moveAmount*(-1);
    }
    if (rectY > 450)
    {
        moveAmountY = moveAmountY*(-1);
    }
}



//function drawLines() {
    //var ctx = document.getElementById("myCanvas").getContext("2d");
    //+
// ctx.beginPath();
  //  ctx.moveTo(50,100);
 //   ctx.lineWidth=7;
   // ctx.lineTo(60,310);
  //  ctx.strokeStyle = "#ff0000";
   // ctx.stroke();

   // var ctx = document.getElementById("myCanvas").getContext("2d");
  //  ctx.beginPath();
   // ctx.moveTo(300,100);
//    ctx.lineTo(60,310);
   // ctx.strokeStyle = "#00ffc0";
   // ctx.stroke();
//}

//function drawText() {
   // var ctx = document.getElementById("myCanvas").getContext("2d");
//ctx.fillStyle = "#cc0b00";
//ctx.font = "30px Arial";
//ctx.fillText("HAVE SOME TEXT WILLYA", 25,25);
//}

