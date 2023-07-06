prediction1=" ";
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 900
});

camera=document.getElementById("camera");
Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    })
}

console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MWFV9cLYE/model.json",modelloaded);

function modelloaded(){
    console.log("modeloaded");
}

function speak(){
    var synth=window.speechSynthesis;
    speakdata1="The prediction is... " + prediction1;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}