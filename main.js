function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  canvas.position(525,300);
  video = createCapture(VIDEO);
  video.hide();
  classifier= ml5.imageClassifier("MobileNet",modelLoaded);
}

function modelLoaded(){
  console.log("Model Loaded");
}
  
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotresult);
  }

  function gotresult(error,results){
if(error){
  console.error(error);
}
else{
  console.log(results);
  document.getElementById("result_object").innerHTML=results[0].label;
  document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
  }
  



