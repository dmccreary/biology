let canvasWidth = 600;
let canvasHeight = 360;
let demoImage;
let message = '';

function preload() {
  try {
    demoImage = loadImage('test-image.png');
  } catch (err) {
    message = `loadImage threw error: ${err}`;
  }
}

function setup() {
  const mainEl = document.querySelector('main');
  if (mainEl) {
    const bounds = mainEl.getBoundingClientRect();
    canvasWidth = bounds.width || canvasWidth;
  }
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const mainElement = document.querySelector('main');
  if (mainElement) {
    canvas.parent(mainElement);
  }
  noLoop();
}

function draw() {
  background(245);
  fill(20);
  textAlign(CENTER, TOP);
  textSize(22);
  text('loadImage("test-image.png") demo', width / 2, 20);

  if (demoImage) {
    const imgRatio = demoImage.width / demoImage.height;
    const targetW = width * 0.8;
    const targetH = height * 0.65;
    let renderW = targetW;
    let renderH = targetW / imgRatio;
    if (renderH > targetH) {
      renderH = targetH;
      renderW = renderH * imgRatio;
    }
    image(demoImage, (width - renderW) / 2, 60, renderW, renderH);
    noFill();
    stroke(120);
    rect((width - renderW) / 2, 60, renderW, renderH);
    noStroke();
    fill(30);
    textSize(14);
    text(`Loaded dimensions: ${demoImage.width}×${demoImage.height}px`, width / 2, height - 40);
    text('This same file loads via mkdocs and p5.js editor when test-image.png is uploaded.', width / 2, height - 20);
  } else {
    fill('#c62828');
    textSize(18);
    text('Image failed to load. Check relative path.', width / 2, height / 2);
    if (message) {
      textSize(14);
      text(message, width / 2, height / 2 + 30, width - 40, 60);
    }
  }
}
