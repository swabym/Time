//Manar Swaby Redesign for Clock 5
// (c) 2016-17 Fathom Information Design BY-NC-SA
// https://creativecommons.org/licenses/by-nc-sa/4.0


function setup() {
  createCanvas(400, 400);
  textFont("Georgia");
}


function draw() {
  background(250, 250, 250, 200);
  fill(0);
  noStroke();
  textAlign(CENTER,CENTER);

  var startAngle = radians(0);
  var stopAngle = radians(360);

  each = width/6;
  var y = 2*height/3;
  var textY = height/2+20;

  var hourCenter = width/8;
  var hourAngle = map(hour() % 12, 0, 12, startAngle, stopAngle);
  fill(0);
  arc(hourCenter, y, each, each, startAngle, hourAngle, CLOSE);
   
  var Hd = dist(mouseX, mouseY, hourCenter, y);
  if (Hd < each) 
    {
    fill(0);
  } else {
    fill(255);
  }
  noStroke();
  textSize(12);
  text("hours", hourCenter, textY);
 	fill(0);
  textSize(15);
  text(nf(twelveHour(), 2), hourCenter, height/2);

  var minuteCenter = width/2;
  var minuteAngle = map(minute(), 0, 60, startAngle, stopAngle);
  fill(0);
  arc(minuteCenter, y, each, each, startAngle, minuteAngle, OPEN);
   var Hm = dist(mouseX, mouseY, minuteCenter, y);
  if (Hm < each) 
    {
    fill(0);
  } else {
    fill(255);
  }
  noStroke();
  textSize(12);
  text("minutes", minuteCenter, textY);
  fill(0);
  textSize(15);
  text(nf(minute(), 2), minuteCenter, height/2);

  var secondCenter = 5*width/6;
  var secondAngle = map(second(), 0, 60, startAngle, stopAngle);
  fill(0);
  arc(secondCenter, y, each, each, startAngle, secondAngle, OPEN);
  var Hs = dist(mouseX, mouseY, secondCenter, y);
  if (Hs < each) 
    {
    fill(0);
  } else {
    fill(255);
  }
  textSize(12);
  text("seconds", secondCenter, textY);
  fill(0);
  textSize(15);
  text(nf(second(), 2), secondCenter, height/2);

}


// return hours that read 1 through 12 rather than 0 through 23
function twelveHour() {
  var h = hour() % 12;
  if (h === 0) {
    h = 12;
  }
  return h;
}