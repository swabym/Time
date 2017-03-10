function setup() { 
  createCanvas(400, 400);
  textAlign(CENTER);
  textFont("Garamond");
} 

function draw() { 
  background(170, 170, 170);
  ellipseMode(CENTER);
  stroke(0);
  noFill();
  strokeWeight(2);
  arc (40, 200, 80, 200, PI/4, 7*PI/4, OPEN);
  strokeWeight(2);
  line (80, 100, 80, 300);
  line (80, 300, 160, 300);
  ellipse(200, 200, 80, 200);
  arc(280, 200, 80, 200, PI/4, 7*PI/4, OPEN);
  line(320, 100, 320, 300);
  line(400, 100, 320, 200);
  line(320, 200, 400, 300);
  

  
  var H =200/24;
  var hadd = 200/24
 
   for (var i = 0; i < hour(); i++) {
  	fill(240, 240, 240, 20)
    stroke(1);
 		strokeWeight(1);
     rect(80, 300, 80, H);
    H -= hadd}

	 
  var M = map(minute(), 0, 60, radians(0), radians(360));
 
    fill(0)
    stroke(1);
 		strokeWeight(1);  
  	arc(200, 200, 80, 200, radians(0), M, CHORD);

noFill();
  stroke(10);
  var w = 80/120;
  var h =200/120;
  var wbetween = 80/120;
  var hbetween =200/120;
 
  for (var i = 0; i < second(); i++) {
       ellipseMode (RADIUS); 
    	arc(280, 200, w, h, 0, TAU, CHORD);
    h -= hbetween;
  	w -= wbetween}
  
  textSize(16);
  noStroke();
  fill(0);
  text("Can you tell the time?", 200, 350);
text(time(),  200, 380);
}


// format hours and minutes
function tim() {
  return nf(hour(), 2) + ':' + nf(minute(),2);
}

// format hours and minutes
function time() {
  return tim() + ':' + nf(second(),2);
}



