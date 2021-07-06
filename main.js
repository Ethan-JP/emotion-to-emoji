Webcam.set({
    height : 350,
    width : 350,
image_format : "png",
png_quality : 90
});
Webcam.attach("#camera");

function capture() {
    Webcam.snap(
        function (img) {
        document.getElementById("snapshot").innerHTML=`<img src=${img} id="cap_img">`    
        }
    )
}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/x7DwTJe6v/model.json",modelLoaded)
function modelLoaded() {
    console.log("Ethan Your Model Has Successfully Loaded!")
}

function speak(){
    var speechapi=window.speechSynthesis
    speakData1="The first prediction is "+ prediction1
    speakData2="The second prediction is "+ prediction2
    saythis=new SpeechSynthesisUtterance(speakData1+speakData2)
    speechapi.speak(saythis)
}

function predict() {
    picture=document.getElementById("cap_img");
    classifier.classify(picture, gotresult)
}

function gotresult(error,results) {
    if (error) {
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("emotion1").innerHTML=results[0].label;
        document.getElementById("emotion2").innerHTML=results[1].label;
        prediction1=results[0].label
        prediction2=results[1].label

        if (prediction1=="Smile") {
            document.getElementById("emoji1").innerHTML="&#128522;"
        }
        if (prediction1=="Sad") {
            document.getElementById("emoji1").innerHTML="&#128532;"
        }
        if (prediction1=="Happy") {
            document.getElementById("emoji1").innerHTML="&#128546;"
        }
        if (prediction1=="Angry") {
            document.getElementById("emoji1").innerHTML="&#128545;"
        }
        if (prediction1=="Surprise") {
            document.getElementById("emoji1").innerHTML="&#128562;"
        }
        if (prediction2=="Smile") {
            document.getElementById("emoji2").innerHTML="&#128522;"
        }
        if (prediction2=="Sad") {
            document.getElementById("emoji2").innerHTML="&#128532;"
        }
        if (prediction2=="Happy") {
            document.getElementById("emoji2").innerHTML="&#128546;"
        }
        if (prediction2=="Angry") {
            document.getElementById("emoji2").innerHTML="&#128545;"
        }
        if (prediction2=="Surprise") {
            document.getElementById("emoji2").innerHTML="&#128562;"
        }
    }
}