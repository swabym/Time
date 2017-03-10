function setup() { 
  createCanvas(400, 400);
  textAlign(CENTER);
  textFont("Georgia");
} 

function draw() { 
  background(255);
  noFill();
  stroke(0);
  strokeWeight(2)
  ellipseMode(RADIUS);
  ellipse (200, 200, 120, 120);
  line(40, 160, 40, 340);
  line(40, 340, 360, 340);
  line(360, 340, 360, 160);
  line(40, 340, 60, 360);
  line(60, 360, 380,360);
  line(380, 360, 360, 340);
  line(380, 360, 380, 140);
  arc(200, 160, 160, 140, TAU/2, TAU, OPEN);
  arc(200, 160, 180, 140, 3*TAU/4, TAU, OPEN);
  
   noStroke();
  fill(0);
  textSize(12);
  text("Hour", 80, 300);
  textSize(20);
  fill(120);
  text (nf(hour()%12,2), 80, 320);
  
  fill(0);
  textSize(15);
  text ("0", 200, 76);
  text ("15", 334, 200);
  text ("45", 64,200);
  text ("30", 200, 334);
  
  text ("a time EST-imation tool", 135, 392); 

  stroke(180);
  strokeWeight(3);
  fill (180);
  //this variable is strange, sometimes is accurate when using PI, other times only with TAU
	var minuteAngle = map(minute(), 0, 60, 0*PI, PI);
  arc(200, 200, 60, 60, 3*PI/2, minuteAngle, PIE);
  
  //assistant to estimate time
  stroke(0);
  strokeWeight(1);
  line( 200, 200, mouseX, mouseY);
  
  //seconds
  noFill();
  strokeWeight(2);
  stroke(130);
  var secAngle = map(second(), 0, 60, 0, 2*PI);
  arc(200, 200, 80, 80, 3*PI/2, secAngle, OPEN);

  //knob thingy
  noStroke();
  fill(240);
	ellipse (200, 200, 40, 40);
  fill(235);
  ellipse (200, 200, 35, 35);
  fill(230);
  ellipse(200, 200, 30, 30);
  
 
  

  
}