let bananas = [];
let shadow;
// all parameters
//   banana setting
let total_bananas = 6;
let banana_size = 200;
//   canvas setting
let canvas_size = 800;
let canvas_color = 220;
//   orbit setting
let orbit_hori = 211.27 // calculated by 200:18.8 = x : 19.86(this is the length of the tape)
let orbit_verti = 100
let accumulate_x = -orbit_hori;
let speed = 1;
let flip = 1;
let rotate_deg = 30;
//   shadow setting
let angle = 0;

let orbitRadius = 200;

function setup() {
  createCanvas(canvas_size, canvas_size);
  
  for (let i = 1; i <= total_bananas; i++) {
    let temp_filename = 'https://raw.githubusercontent.com/tangyizhi2000/BananaTimer/main/' + str(i) + '.png'
    bananas.push(loadImage(temp_filename));
  }
  shadow = loadImage('https://raw.githubusercontent.com/tangyizhi2000/BananaTimer/main/banana%20shadow.png');
}

function rotate_point_around_origin(xloc, yloc, deg) {
  let points = [];
  new_xloc = xloc * cos(deg) - yloc * sin(deg);
  new_yloc = yloc * cos(deg) + xloc * sin(deg);
  points.push(new_xloc);
  points.push(new_yloc);
  return points;
}

function draw() {
  // banana
  background(canvas_color);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(bananas[second() % total_bananas], 0, 0, banana_size, banana_size);
  
  // orbit
  //translate(-width / 2, -height / 2);
  var y = sqrt((1 - (accumulate_x * accumulate_x) / (orbit_hori * orbit_hori)) * (orbit_verti * orbit_verti))
  let points = [];
  points = rotate_point_around_origin(accumulate_x, y);
  print(points[0], points[1])
  ellipse(accumulate_x, y * flip, 30, 30);
  if (accumulate_x + speed > orbit_hori){
    flip = -1;
  } else if (accumulate_x - speed < -orbit_hori){
    flip = 1;
  }
  if (flip == 1){
    accumulate_x += speed;
  } else if (flip == -1) {
    accumulate_x -= speed;
  }
  
}