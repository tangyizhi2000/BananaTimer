let bananas = [];
let total_bananas;
let banana_size;
let canvas_size;
let canvas_color;

function setup() {
  // all parameters
  //   banana setting
  total_bananas = 6
  banana_size = 200
  //   canvas setting
  canvas_size = 800
  canvas_color = 220;
  
  createCanvas(canvas_size, canvas_size);
  
  for (let i = 1; i <= total_bananas; i++) {
    let temp_filename = 'https://raw.githubusercontent.com/tangyizhi2000/BananaTimer/main/' + str(i) + '.png'
    bananas.push(loadImage(temp_filename));
  }
}

function draw() {
  background(canvas_color);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(bananas[second() % total_bananas], 0, 0, banana_size, banana_size);
}