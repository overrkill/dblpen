//Abhishek Kale
//overrkill.github.io
//double pendulum ranibow::::::


var l1=110;
var l2=110;
var m1=20;
var m2=20;
var a1=0;
var a2=0;
var v1=0;
var v2=0;
var ax1=0;
var ax2=0;
var g=1;


let px=-1,py=-1;
let cx,cy;

function setup(){
colorMode(HSB);
createCanvas(500,500);
a1=90;a2=90;

cx=width/2;
cy=200;
buffer = createGraphics(width, height);
buffer.colorMode(HSB);
buffer.background(20,20,0,1);
buffer.translate(cx, cy);
}
function draw(){

background(200,100,100,1);
imageMode(CORNER);
image(buffer, 0, 0, width, height);
/*acceleration of first mass*/

  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = v2 * v2 * l2 + v1 * v1 * l1 * cos(a1 - a2);
  let den = l1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  ax1 = (num1 + num2 + num3 * num4) / den;

/*acceleration of second mass*/
num1 = 2 * sin(a1 - a2);
 num2 = v1 * v1 * l1 * (m1 + m2);
 num3 = g * (m1 + m2) * cos(a1);
 num4 = v2 * v2 * l2 * m2 * cos(a1 - a2);
 den = l2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
ax2 = (num1 * (num2 + num3 + num4)) / den;

let clr = map(Math.random()*100,0,100,0,240);
translate(cx,cy);
stroke(0,100,100,1);
strokeWeight(5);
/*position of buth masses*/
x1=l2*sin(a1);
y1=l1*cos(a1);
x2=x1+ l2*sin(a2);
y2=y1+l2*cos(a2);

/*drawing the stuff*/
line(0,0,x1,y1);
line(x1,y1,x2,y2);
noStroke();
ellipse(x1,y1,m1);
noStroke();
fill(15,0,100,1);
ellipse(x2,y2,m2);

v1+=ax1;
v2+=ax2;
a1+=v1;
a2+=v2;


console.log(clr);
buffer.stroke(clr,100,100,1);
buffer.strokeWeight(2);
  if (frameCount > 1) {

    buffer.line(px2, py2, x2, y2);
  }

  px2 = x2;
  py2 = y2;
}
