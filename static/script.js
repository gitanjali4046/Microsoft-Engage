let camera_button = document.querySelector("#start-camera"); 
let video = document.querySelector("#video");
camera_button.addEventListener('click', async function() { // When we click on camera button then function will execute. 
    let camera_stream = null;
    let media_recorder = null;
    let blobs_recorded = [];
    camera_stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
	video.srcObject = camera_stream;
    media_recorder = new MediaRecorder(camera_stream, { mimeType: 'video/webm' }); 
    media_recorder.addEventListener('dataavailable', function(e) {
		blobs_recorded.push(e.data); //  Ever data which is related to camera it stores in small chunks in blobs_recorded array.
    });
    media_recorder.start(1000); // Here I set a time 1 second so, it start recording till 1 second.
    setTimeout(function(){ // When we want to execute task with some delay then we use settimeout function
        media_recorder.stop(); // It stop the recording 
        media_recorder.addEventListener('stop', function() { // When recording will stop the this function send a request to on uploder's route flask.
            var formData = new FormData();
            formData.append('video', blobs_recorded[0]);
            fetch("http://127.0.0.1:5000/uploader", {
                method: "POST",
                body: formData
            }).then(function(response){
                return response.json()
            }).then(function(responseData){
                document.getElementById("name").innerHTML = responseData; // The response which is given by server is stored in html's name element.
            })
        });
    }, 1000); // Here I used 1 second for delay so, after 1 Second it execute the internal function.
})


