// JavaScript Document
$(document).ready(function() {
	document.addEventListener("touchstart", function() {}, true);
	
	$("#menu-mobile").click(function(){ 
	  		$("#menu-mb-overlay, #overlay-container").fadeToggle(200,"linear");
			$("#overlay-container").removeClass("closeOverlay");
	});
	$("#menu-mb-overlay").click(function(){ 
	  		$("#menu-mb-overlay, #overlay-container").fadeOut(200,"linear");
			$("#overlay-container").addClass("closeOverlay");
	});
	
	$(".nav li button").click(
		function() { 
			var i = $(this).attr('class').match(/\d+$/)[0];
			$("#overlay-container, #close-bttn").fadeIn(200,"linear"); 
			$("#overlay-content-"+i).fadeIn(200,"linear"); 
			$("#indicator, #menu-mobile").fadeOut(200,"linear"); 
			document.body.style.overflow = "hidden";
		}
	);
	$(".closeOverlay").click(
		function() { 
			$(".closeOverlay, *[id^='overlay-content-']").fadeOut(200,"linear"); 
			setTimeout(function(){
				document.body.style.overflow = "auto";
				$("#indicator, #menu-mobile").fadeIn(200,"linear");
			}, 200);		 
		}
	);
	$("a").click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
	});
	/*$(".a1").click(function() {$("#b-home").scrollIntoView(); });
	$(".a2").click(function() {$("#b-about").scrollIntoView(); });
	$(".a3").click(function() {$("#b-works").scrollIntoView(); });
	$(".a4").click(function() {$("#b-contact").scrollIntoView(); });*/
	let vh = window.innerHeight * 0.01;
	let vw = window.innerWidth * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	document.documentElement.style.setProperty('--vw', `${vw}px`);
	// We listen to the resize event
	window.addEventListener('resize', () => {
  	// We execute the same script as before
		let vh = window.innerHeight * 0.01;	
		let vw = window.innerWidth * 0.01;	
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		document.documentElement.style.setProperty('--vw', `${vw}px`);
	});
	
	
	$(function(){
		$('#indicator').progress({
			// height of the progress bar
			size:'1.2vh',
			// or 'bottom'
			position:'top',
			// background color
			wapperBg:'#000000',
			// inner color
			innerBg:'#24BAA0',
			effect:'ease-out',
			duration:'0.2s'
		});
	});	
	
	var animation = lottie.loadAnimation({
		container: document.getElementById('logo-anim'),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: 'https://assets1.lottiefiles.com/packages/lf20_7uKjju.json',
	});
	
	lottie.setSpeed(1.5);
	
	setTimeout(function(){ 
		animation.play(); }, 500);
	
	
	var intro = document.getElementById("intro-container");
	setTimeout(function(){
    	intro.style.display = 'none';
	}, 7700); 
	
	$(window).scroll(function() {
		var offsetB1 = $('#b-home').offset().top;
		var offsetB2 = $('#b-about').offset().top;
		var offsetB3 = $('#b-works').offset().top;
		var offsetB4 = $('#b-contact').offset().top;
		var scroll_d = $(document).scrollTop()
		if (scroll_d >= offsetB1) {
			$(".a1").addClass("extend_fx");
			$(".a2,.a3,.a4").removeClass("extend_fx");
		}
		if (scroll_d > offsetB2*3/4) {
			$(".a2").addClass("extend_fx");
			$(".a1,.a3,.a4").removeClass("extend_fx");
		}
		if (scroll_d > offsetB3*4/5) {
			$(".a3").addClass("extend_fx");
			$(".a1,.a2,.a4").removeClass("extend_fx");
		}
		if (scroll_d > offsetB4*5/6) {
			$(".a4").addClass("extend_fx");
			$(".a1,.a2,.a3").removeClass("extend_fx");
		}
		/* OLD SCROLL CODE
		var windowHeight = $(window).height();
		var scroll_d = $(document).scrollTop()
		if (scroll_d < windowHeight*2/3) {
			$(".a1").addClass("extend_fx");
			$(".a2,.a3,.a4").removeClass("extend_fx");
		} 
		if (windowHeight*2/3 < scroll_d && scroll_d < windowHeight*1.46){
			$(".a2").addClass("extend_fx");
			$(".a1,.a3,.a4").removeClass("extend_fx");
		}
		if (windowHeight*1.46 < scroll_d && scroll_d < windowHeight*2.46){
			$(".a3").addClass("extend_fx");
			$(".a1,.a2,.a4").removeClass("extend_fx");
		}
		if (windowHeight*2.46 < scroll_d && scroll_d < windowHeight*3.46){
			$(".a4").addClass("extend_fx");
			$(".a1,.a2,.a3").removeClass("extend_fx");
		}*/
	}); 
	
	$('.nav').navgoco({
			caretHtml: '<i class="some-random-icon-class"></i>',
			accordion: false,
			openClass: 'open',
			save: true,
			cookie: {
				name: 'navgoco',
				expires: false,
				path: '/'
			},
			slide: {
				duration: 400,
				easing: 'swing'
			}
	});
	
	$("#collapseAll").click(function(e) {
        e.preventDefault();
        $(".nav").navgoco('toggle', false);
    });
    $("#expandAll").click(function(e) {
        e.preventDefault();
        $(".nav").navgoco('toggle', true);
    });
	
	$(".nav li button").hover(
		function () {
			var num = $(this).attr('class').match(/\d+$/)[0];
				$("#p-"+num).fadeToggle(200,"linear");
		}
	);
});
