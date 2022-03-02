var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    if(Content=="take my selfie"){
        speak();
    }
    
    
 
}
function speak(){
    var synth=window.speechSynthesis;
    var speakdata="taking your selfie in 5 seconds";
    var speech=new SpeechSynthesisUtterance(speakdata);
    synth.speak(speech);
      Webcam.attach(camera)  
      setTimeout(
          function (){
              take_snapshot();
              save();
          },5000
          
      );
    } 
Webcam.set({
    widht:360,
height:250,
image_format:'png',
png_quality:90
});

var camera=document.getElementById("camera");

function take_snapshot(){
    Webcam.snap(
        function (data_uri){
            document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">'
        }
    );
}
function save(){
    var anchortag=document.getElementById("link");
    var image=document.getElementById("selfie").src;
    anchortag.href=image;
    anchortag.click();
}