let classifier;

let img;

function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('images/buckeye1.jpg');
}

function setup() {
  createCanvas(400, 400);
  classifier.classify(img, gotResult);
  image(img, 0, 0);
}

function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    let label = results[0].className;
    let prob = results[0].confidence;
    fill(0);
    textSize(64);
    text(label + prob, 10, height - 100);
  }
}