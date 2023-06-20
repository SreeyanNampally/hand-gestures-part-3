Webcam.set({
    width:350,
    height:290,
    image_format: "jpeg",
    jpeg_quality:90
    }) 

    camera = document.getElementById("camera");
    Webcam.attach(camera);
   
    function takesnapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'">';
        })
    }

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/8pjW43j1P/model.json", modelloaded);

    function modelloaded(){
        console.log("model loaded!")
    }

    function identify_image(){
    img = document.getElementById("capture_image");
     classifier.classify(img, gotResult);
    }

    function gotResult(error, results){
        if (error) {
            console.log(error)
        } else {
        console.log(results)    
        document.getElementById("result1").innerHTML = results[0].label;
    document.getElementById("result2").innerHTML = results[1].label;
    prediction1 = results[0].label;
    prediction2 = results[1].label;
    if (results[0].label=="point") {
        document.getElementById("emoji1").innerHTML = "&#128070;";
    }
    if (results[0].label=="fist") {
        document.getElementById("emoji1").innerHTML = "&#128074;";
    }
    if (results[0].label=="peace") {
        document.getElementById("emoji1").innerHTML = "&#9996;";
    }
    if (results[1].label=="point") {
        document.getElementById("emoji2").innerHTML = "&#128070;";
    }
    if (results[1].label=="fist") {
        document.getElementById("emoji2").innerHTML = "&#128074;";
    }
    if (results[1].label=="peace") {
        document.getElementById("emoji2").innerHTML = "&#9996;";
    }        
        }
    }


    