//ClockSubmission

function setup() { 
  createCanvas(400, 400);
  textAlign(CENTER);
  textFont("Georgia")
} 

function draw() { 
  background(220, 220, 220);
	strokeWeight(1);
  stroke(1);
  fill(255);
  triangle(80, 40, 80, 80, 120, 60);
  triangle( 240, 40, 240, 80, 200, 60);
  fill(0);
  ellipseMode(RADIUS);
  arc(160, 140, 100, 100, -PI, 0, CHORD);
 	fill(255, 255, 255, 255);
  rect(80, 200, 160, 160);
  ellipse(70, 250, 20, 60);
  ellipse(250, 250, 20, 60);
  ellipseMode(RADIUS);
  ellipse (160, 140, 80, 80); 
  fill(0);
  ellipse (140, 100, 2, 2);
  ellipse(180, 100, 2, 2);
  triangle(150, 120, 160, 130, 170, 120);
  

  fill(250, 250, 250, 0);
  stroke(1);
  strokeWeight(2);
  var H =20/3;
  var hadd = 20/3
 
   for (var i = 0; i < hour(); i++) {
  rect(80, 360, H, 20);
    H += hadd}
  
    
  noFill();
  stroke(120);
  var m =5;
  var between = 20/6;
 
  for (var i = 0; i < minute(); i++) {
        ellipse(160, 160, m, m);
    m += between}
  
 	
  fill(160, 160, 160, 160);
  noStroke();
  var s = 0;
  var sadd = 2; 
  for (var i = 0; i < second(); i++) {
         rect(70, 200, 180, s);
     
    s += sadd
}
  
  fill(0);
  noStroke();
  textSize(12);
  text("Kitty watches the magic scroll unfold by the second!", width/2, height-5);
 textSize(14);
    text (hoursMinutesSeconds(), 160, 214);
  }


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


// format hours, minutes, and seconds
function hoursMinutesSeconds() {
  return hoursMinutes() + ':' + nf(second(), 2);
}
