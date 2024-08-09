// function setup(){
//     canvas= createCanvas(780,480);
//     canvas.center()
//     video= createCapture(VIDEO)
//     video.hide()
//     classifier= ml5.imageClassifier('MobileNet', modelLoaded)
// }

// function draw(){
//     image(video, 0, 0, 780, 480)
//     classifier.classify(video, gotResult)
// }

// function modelLoaded(){
//     console.log("carregado com sucesso!")
// }

// function gotResult(error, results){
//     if (error){
//         console.error(error)
//     } else{
//         if (results[0].confidence>0.5){
//             console.log(results)
//             document.getElementById("resultObjectName").innerHTML= results[0].label
//         }
//     }}


function setup() {
    canvas = createCanvas(780,480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('MobileNet',modelLoaded);
  }
  
  function modelLoaded() {
      console.log('Model Loaded!');
  }
  
  function draw() {
    image(video, 0, 0, 780,480);
    classifier.classify(video, gotResult);
  }


    var previousResult = '';
function gotResult(error, results) {
  if (error) {
    console.error(error);
    document.getElementById("resultObjectName").innerHTML = error[0].label;
      document.getElementById("resultObjectAccuracy").innerHTML = error[0].confidence.toFixed(3);
  } else {
    // if((results[0].confidence > 0.5) && (previousResult != results[0].label)){
      console.log(results);
      previousResult = results[0].label;
      var synth = window.speechSynthesis;
      speakData = 'O objeto detectado é - '+results[0].label;
      var utterThis = new SpeechSynthesisUtterance(speakData);
      synth.speak(utterThis);
synth.speak(utterThis);

      document.getElementById("resultObjectName").innerHTML = results[0].label;
      document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    // }
  }
}


