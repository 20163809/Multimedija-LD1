function controls(){
var video = document.getElementsByTagName('video')[0];
    
document.getElementById('play').addEventListener('click', function() {
  video.play();
})

document.getElementById('pause').addEventListener('click', function() {
  video.pause();
})

document.getElementById('stop').addEventListener('click', function() {
  video.reset();
})

document.getElementById('forward5').addEventListener('click', function() {
  video.currentTime += 5; 
})

document.getElementById('back5').addEventListener('click', function() {
  video.currentTime -= 5;
})
}