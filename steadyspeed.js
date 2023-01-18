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
let orbit_hori = 300
let orbit_verti = 200
let speed = 0.01;
let rotate_deg = 40;
let starting_loc_x = 0;
let starting_loc_y = 0;

let speed_sum = 0;
//   shadow setting
let last_sec = 0;

function setup() {
  createCanvas(canvas_size, canvas_size);
  
  for (let i = 1; i <= total_bananas; i++) {
    let temp_filename = 'https://raw.githubusercontent.com/tangyizhi2000/BananaTimer/main/' + str(i) + '.png'
    bananas.push(loadImage(temp_filename));
  }
  shadow = loadImage('https://raw.githubusercontent.com/tangyizhi2000/BananaTimer/main/new%20shadow.png');

}

function draw() {
  // banana
  background(canvas_color);
  translate(width / 2, height / 2);
  //rotate(frameCount * 0.01);
  
  imageMode(CENTER);
  image(bananas[second() % total_bananas], 0, 0, banana_size, banana_size);
  
  //translate(-width / 2, -height / 2);
  // rotation
  x = starting_loc_x + orbit_hori * cos(speed_sum)
  y = starting_loc_y + orbit_verti * sin(speed_sum)
  new_xloc = x * cos(rotate_deg) - y * sin(rotate_deg);
  new_yloc = y * cos(rotate_deg) + x * sin(rotate_deg);
  // loc
  fill(100);
  ellipse(new_xloc, new_yloc, 20, 20);
  speed_sum += speed;

  /*
  translate(-width / 2, -height / 2);
  radius = min(width, height) / 2;
  cx = width / 2;
  cy = height / 2;
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  line(cx, cy, cx + cos(s) * radius * 0.71, cy + sin(s) * radius * 0.71);*/
  /*
  // shadow
  //rotate_angle = (60 - second()) * 6
  rotate(frameCount * 0.01);
  imageMode(CENTER);
  distance_to_orbit = sqrt(new_xloc * new_xloc + new_yloc * new_yloc);
  image(shadow, 0, 0, distance_to_orbit / 1104 * 533 * 2, distance_to_orbit * 2);
  last_sec = second();*/
}