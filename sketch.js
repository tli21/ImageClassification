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
  if (error) {
    console.error(error);
  }
  console.log(results);
  let label = results[0].label;
  let prob = results[0].confidence;
  textSize(30);
  text(label, 4, height - 100);
  text(prob, 4, height-130);
}
