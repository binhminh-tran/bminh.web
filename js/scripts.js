
//Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//Lottie options
var animation = lottie.loadAnimation(
    {
    container: document.getElementById('logo-sqn'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets10.lottiefiles.com/packages/lf20_klhomhuo.json',
}
);
lottie.setSpeed(2);
setTimeout(function(){ 
    animation.play(); }, 500);

//Hide intro
var intro = document.getElementById("intro-cont");
setTimeout(function(){ intro.style.display = 'none'; }, 5000); 
$("#intro-cont").click(
    function() { 
        $(this).fadeOut(500,"linear"); 
        clearTimeout(timeInd);
    }
);

//clip.js
var btn = document.getElementById('clip');
var clipboard = new ClipboardJS(btn);

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});

//Button text
document.getElementById('clip').addEventListener('click', function (clicked) {
return function () {
    if (!clicked) {
        var last = this.innerHTML;
        this.innerHTML = 'Copied to clipboard!';
        clicked = true;
        setTimeout(function () {
            this.innerHTML = last;
            clicked = false;
        }.bind(this), 2000);
    }
};
}(false), this);

var elmnt = document.getElementById('collapse-btn-4');
elmnt.scrollIntoView({ behavior: "auto", block: "end" });

