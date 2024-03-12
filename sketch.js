let angle = 0;
let angleVel = 0.1; 
let minAngle = 0.15; 
let maxAngle = 1.58; 

function setup() {
  createCanvas(640, 360);
}

function draw() {
  clear();
  angle += angleVel; 
  angle = angle%TWO_PI;
  stroke(70,130,180);
  strokeWeight(1);
  translate(width*0.5, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    
    let rotationAngle = map(sin(angle), -1, 1, minAngle, maxAngle);
    rotate(rotationAngle); 
    branch(len*0.67);
    pop();
    push();
    rotate(-rotationAngle); 
    branch(len*0.67);
    pop();
  }
}
