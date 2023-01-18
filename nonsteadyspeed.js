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
let orbit_hori = 300 // calculated by 200:18.8 = x : 19.86(this is the length of the tape)
let orbit_verti = 200
let accumulate_x = -orbit_hori;
let speed = 1;
let flip = 1;
let rotate_deg = 40;
//   shadow setting
let last_sec = 0;

function setup() {
  createCanvas(canvas_size, canvas_size);
  
  for (let i = 1; i <= total_bananas; i++) {
    let temp_filename = 'https://raw.githubusercontent.com/tangyizhi2000/BananaTimer/main/' + str(i) + '.png'
    bananas.push(loadImage(temp_filename));
  }
  shadow = loadImage('https://raw.githubusercontent.com/tangyizhi2000/BananaTimer/main/banana%20shadow.png');
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
  // rotation
  new_xloc = accumulate_x * cos(rotate_deg * flip) - y * sin(rotate_deg * flip);
  new_yloc = y * cos(rotate_deg * flip) + accumulate_x * sin(rotate_deg * flip);
  // loc
  ellipse(new_xloc, new_yloc * flip, 20, 20);
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
  // shadow
  //rotate_angle = (60 - second()) * 6
  rotate(second() - last_sec * 6);
  print(second() * 6);
  imageMode(CENTER);
  distance_to_orbit = sqrt(new_xloc * new_xloc + new_yloc * new_yloc);
  image(shadow, 0, 0, distance_to_orbit / 1104 * 533 * 2, distance_to_orbit * 2);
  last_sec = second();
}