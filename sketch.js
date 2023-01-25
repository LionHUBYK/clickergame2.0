let money = 0;
let mps = 1;
let mpc = 1;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
}

function draw() {
  background(255);
  text("Money: $" + money, width/2, 50);
  text("Money per second: " + mps, width/2, 75);
  text("Money per click: " + mpc, width/2, 100);
  text("Upgrades", width/2, 150);
  text("Upgrade 1: $100", width/2, 175);
  text("Upgrade 2: $1000", width/2, 200);
  text("Upgrade 3: $10000", width/2, 225);
}

function mousePressed() {
  money += mpc;
}

function keyPressed() {
  if (keyCode === 49) {
    if (money >= 100) {
      money -= 100;
      mpc += 1;
    }
  }
  if (keyCode === 50) {
    if (money >= 1000) {
      money -= 1000;
      mpc += 10;
    }
  }
  if (keyCode === 51) {
    if (money >= 10000) {
      money -= 10000;
      mpc += 100;
    }
  }
}