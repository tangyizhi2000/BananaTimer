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
let orbit_hori = 500;
let orbit_verti = 250;
let speed = 0;
let rotate_deg = 40;
let starting_loc_x = 0;
let starting_loc_y = 0;

let speed_sum = 0;
//   shadow setting
let flip = 0;
let shadow_width = 30;

function setup() {
  createCanvas(canvas_size, canvas_size);
  
  for (let i = 1; i <= total_bananas; i++) {
    let temp_filename = 'https://raw.githubusercontent.com/tangyizhi2000/BananaTimer/main/' + str(i) + '.png'
    bananas.push(loadImage(temp_filename));
  }
  shadow = loadImage('https://raw.githubusercontent.com/tangyizhi2000/BananaTimer/main/finalshadow.png');

}

function draw() {
  // 
  background(canvas_color);
  translate(width / 2, height / 2);
  // markings
  /*textSize(40);
  push();
  rotate(radians(30));
  text('子', 100, 100);
  pop();*/
  
  // rotation
  
  let s = map(second(), 0, 60, 0, TWO_PI) - HALF_PI;
  x = starting_loc_x + orbit_hori * cos(s);
  y = starting_loc_y + orbit_verti * sin(s);
  new_xloc = x * cos(rotate_deg) - y * sin(rotate_deg);
  new_yloc = y * cos(rotate_deg) + x * sin(rotate_deg);
  
  // loc
  fill(100);
  ellipse(x, y, 20, 20);
  // shadow
  push();
  distance_to_orbit = sqrt(new_xloc * new_xloc + new_yloc * new_yloc);
  if(new_xloc >= 0 && new_yloc >= 0){
    //print(x, y, 180 - degrees(atan(y / x)));
    rotate(-radians(180 - degrees(atan(new_yloc / new_xloc))));
  } else if(new_xloc >= 0 && new_yloc < 0){
    //print(x, y, 180 + degrees(atan(abs(y) / abs(x))));
    rotate(-radians(180 + degrees(atan(abs(new_yloc) / abs(new_xloc)))));
  } else if(new_xloc < 0 && new_yloc < 0){
    //print(x, y, 360 - degrees(atan(abs(y) / abs(x))));
    rotate(-radians(360 - degrees(atan(abs(new_yloc) / abs(new_xloc)))));
  } else {
    //print(x, y, degrees(atan(abs(y) / abs(x))));
    rotate(-radians(degrees(atan(abs(new_yloc) / abs(new_xloc)))));
  }
  imageMode(CENTER);
  image(shadow, 0, 0, distance_to_orbit, shadow_width);
  //print(atan(rot_var), new_xloc, new_yloc, distance_to_orbit / 20);
  pop();
  //banana
  imageMode(CENTER);
  image(bananas[second() % total_bananas], 0, 0, banana_size, banana_size);
  
  //translate(-width / 2, -height / 2);
 
  
  
  
  
 
  //image(shadow, new_xloc / 2, new_yloc / 2, distance_to_orbit, distance_to_orbit);
  
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