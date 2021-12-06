var cat = "https://thumbs.dreamstime.com/b/portrait-gray-tabby-cat-white-background-lovely-pet-portrait-gray-tabby-cat-white-background-126243718.jpg";
var dog = "https://thumbs.dreamstime.com/b/golden-retriever-border-collie-24406995.jpg";
var horse = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-uUBDIMjui75xuYPIv8snxEM9fsrEBiYvPg&usqp=CAU";
var wolf = "https://t4.ftcdn.net/jpg/04/40/05/17/360_F_440051707_eIzTL5xb3etdkxVsrGUD2RT9AxDearS5.jpg";
function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/fKUBe4GoP/model.json", model_ready);    
    console.log("mic on");
    var output = "<div class='alert alert-warning'>Check the console!</div>";
    document.getElementById("output").innerHTML = output;
}
function model_ready(){
    classifier.classify(got_results);
}
function got_results(error, results){
    if(error){
        console.log(error);
    } else{
        console.log(results);
        console.log("I can hear " + results[0].label);
        console.log('Accuracy: ' + (results[0].confidence * 100).toFixed(1) + '%');
    }
}