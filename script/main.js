

//      **********          Navbar            *********
var menu = document.getElementById('toggle-mobile');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit-btn');
var w = window.outerWidth;

menu.addEventListener('click', function (e) {
    nav.classList.toggle('mobile-menu')
    menu.classList.toggle('mobile-menu-show')
    e.preventDefault();
});

exit.addEventListener('click', function (e) {
    nav.classList.add('mobile-menu');
    menu.classList.toggle('mobile-menu-show')
    e.preventDefault();
});

//      **********          Podcast Player            *********
var playBtn = document.getElementById("play-btn");
var pauseBtn = document.getElementById("pause-btn");
var podProgress = document.getElementById("pod-progress");
var podTime = document.getElementById("pod-time")
var podcast = document.getElementById("pod-audio");
var intervalId;


playBtn.addEventListener('click', function(e) {
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
    podcast.play();

    intervalId = window.setInterval(function(){
        progressBar();
      }, 1000);

    e.preventDefault();
});
pauseBtn.addEventListener('click', function(e) {
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
    podcast.pause();
    clearInterval(intervalId);
    e.preventDefault();
});

function progressBar() {
    var percent = (podcast.currentTime/podcast.duration) * 100;
    podProgress.style.width = percent + "%";

    var time = Math.floor(podcast.currentTime);
    var sec = time % 60;
    var min = Math.floor(time / 60);    
    if(sec<10){
        podTime.innerHTML = "0" + min + ":0" + sec;
        
    }else{
        podTime.innerHTML = "0" + min + ":" + sec;}
}








