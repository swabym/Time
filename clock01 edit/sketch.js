//Manar Swaby Redesign for Clock 1
// (c) 2016-17 Fathom Information Design BY-NC-SA
// https://creativecommons.org/licenses/by-nc-sa/4.0/


function setup() {
  createCanvas(400, 400);
  ellipseMode(CORNER);
  
  textAlign(CENTER, CENTER);
  textFont("Dosis")
}


function draw() {
  background(215);
  stroke(0);
  noFill();
  //defining variables
  var between = 5;
  var circle = 30;
  //saying that variable starts at 0 and every time it goes through this loop it will add one. 
  //for every moment i is less than the current second execute this function
  for (var i = 0; i < second(); i++) {
    //because I changed ellipseMODE to CORNER, the first two coordinate points represent the circle's corner
    ellipse(width/9, height/9, circle, circle);
    circle += between

  }

  //changed placement of of the text
  noStroke();
  fill(0);
  text(hoursMinutes(), width/9-5, height/9-5);
  text(nf(second(), 2), 8*width/9, 8*height/9);
}


// return hours that read 1 through 12 rather than 0 through 23
function twelveHour() {
  var h = hour() % 12;
  if (h === 0) {
    h = 12;
  }
  return h;
}


// format hours and minutes
function hoursMinutes() {
  return nf(twelveHour(), 2) + ':' + nf(minute(), 2);
}
