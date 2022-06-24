/* exported setup, draw */
let seed = 31415;

const hillColor = "#1f1b25";
const nightColor = "#0c1445";
const frontHillColor = "#0e0a14";
const moonColor = "#fefcd7";
const margin = 100
let angle = 0;
let trail = false;

function preload() {
    // runs before setup 
    // use if you want to load any large files and want to make sure they load before setup()
}

function setup() {
  createCanvas(800, 800);
  createButton("reroll").mousePressed(() => {
    seed++;
    angle = 0;
  });
  angleMode(DEGREES);
}

// Create mouse input (click)
function mouseClicked() {
  trail = !trail;
}

function draw() {
  randomSeed(seed);
  background(100);
  noStroke();

  // Create the night sky
  fill(nightColor);
  rect(0, 0, width, height * 5 / 6);

  // Use to rotate the stars and moon
  angle -= 0.1;

  // Change offset to place Polaris (North Star) + rotate stars around it
  push();
    fill(255)
    random();
    // Create a random point in the sky for Polaris to appear
    let offsetX = random() * (width - margin * 2) + margin;
    let offsetY = random() * (height / 3) + margin;
    // Translate the origin to set up rotation of the stars

    translate(offsetX, offsetY);
    // Create Polaris at new origin
    circle(0, 0, 10);

    // Create the stars that will rotate around Polaris
    rotate(angle);
    // Remove fill so no color shows between the arc's stroke and center of arc
    noFill();
    let stars = 60 * random();
    for (let i = 0; i < stars; i++){
      // Generate star color
      let starR = 255 * random();
      let starG = 255 * random();
      let starB = 255 * random();
      stroke(starR, starG, starB);
      // Generate star size, orbit radius, and start position
      strokeWeight(10 * random());
      let orbitRadius = width  * 1.5 * random() + 50;
      let start = 360 * random();
      arc(0, 0, orbitRadius, orbitRadius, start, trail ?  start - angle : start+ 0.1);
    }

  // Stop rotation and return to (0, 0) true origin
  pop();
  
  // Create moon and rotate around different point. This will show up in front of the stars
  push();
    // Generate a point beneath the hills as a point for the moon to orbit
    offsetX = width/2 + random(-1, 1) * width/8;
    offsetY = height * 5/6 - random(-1, 1) * height/6;
    translate(offsetX, offsetY);
    // Make sure the moon also moves
    rotate (angle);

    // Moon details
    fill(moonColor);
    let moonSize = 50 + 50 * random();
    let moonOrbit = height * 5/6 - random() * height / 6;
    // Create the circle for the moon
    circle(moonOrbit, 0, moonSize)
    // Add another circle that creates the cresent for the moon
    fill(nightColor);
    circle(moonOrbit, moonSize/2, moonSize);

    if(trail) {
      noFill()
      stroke(moonColor);
      strokeWeight( moonSize)
      arc(0, 0, moonOrbit*2, moonOrbit*2, 0, 0 - angle)
    }
    // Sanity check since the moon disappeared during testing
    // console.log("OFFSET: " + offsetX + ", " + offsetY + "\nMOON: " + moonOrbit)
  pop();

  // Create the hills that will block the stars
  fill(hillColor);
  beginShape();
  vertex(0, height * 5 / 6);
  const steps = 5;
  for (let i = 0; i < steps + 1; i++) {
    let x = (width * i) / steps;
    let y = height * 3 / 5 - (random(-1, 1) * height) / 8 - height / 50;
    vertex(x, y);
  }
  vertex(width, height * 5 / 6);
  endShape(CLOSE);

  fill(frontHillColor);
  beginShape();
  vertex(0, height);
  const frontSteps = 7;
  for (let i = 0; i < frontSteps + 1; i++) {
    let x = (width * i) / frontSteps;
    let y = height * 3 / 5 - (random(-1, 1) * height) / 6;
    vertex(x, y);
  }
  vertex(width, height);
  endShape(CLOSE);
}

// Parallax Functions created by me while I was in ARTG 80G
function xParallax(scale){
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
    return (((-width/2) + mouseX)*scale);
  }
  return 0;
}

function yParallax(scale){
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height)
    return (((-height/2) + mouseY)*scale);
  return 0;
}
