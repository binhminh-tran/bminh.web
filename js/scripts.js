// JavaScript Document
$(document).ready(function() {
	/* MOBILE HOVER */
	document.addEventListener("touchstart", function() {}, true);
	
	/* OPEN MENU MOBILE */
	$("#menu-mobile").click(
		function(){ 
	  		$("#menu-mb-overlay").fadeToggle(200,"linear");
		}
	);
	
	/* CLOSE MENU MOBILE */
	$("#menu-mb-overlay").click(
		function(){ 
	  		$("#menu-mb-overlay").fadeOut(200,"linear");
		}
	);
	
	/* OPEN OVERLAY */
	$(".nav li button").click(
		function() { 
			var i = $(this).attr('class').match(/\d+$/)[0];
			$("#overlay-container, #close-bttn").fadeIn(200,"linear"); 
			$("#overlay-content-"+i).fadeIn(200,"linear"); 
			$("#indicator, #menu-mobile").fadeOut(200,"linear"); 
			$("#logo").addClass('logo-state2').removeClass('logo-state1');
			$("#logo a > svg").addClass("svg-state2").removeClass("svg-state1");
			document.body.style.overflow = "hidden";
		}
	);
	
	/* CLOSE OVERLAY */
	$("#overlay-container, #close-bttn svg, #close-bttn").click(
		function() { if(event.target === this) {
			$("#overlay-container, #close-bttn, *[id^='overlay-content-']").fadeOut(200,"linear"); 
			$("#overlay-container").scrollTop(0);
			$("#logo").addClass('logo-state1').removeClass('logo-state2');
			$("#logo a > svg").addClass("svg-state1").removeClass("svg-state2");
			$("#indicator, #menu-mobile").fadeIn(200,"linear");
			setTimeout(function(){
				document.body.style.overflow = "auto";
			}, 200); }		 
		}
	);
	
	/* SCROLL TO BLOCK */
	$("#menu > ul > li > a, #menu-mb-overlay > ul > li > a").click(
		function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $( $(this).attr('href') ).offset().top
			}, 500);
		}
	);
	
	/* GET VW VH UNIT */
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
	
	/* INDICATOR OPTIONS */
	$(function(){
		$('#indicator').progress({
			// height of the progress bar
			size:'1.2vh',
			// or 'bottom'
			position:'top',
			// background color
			wapperBg:'#000000',
			// inner color
			innerBg:'#ff6f61',
			effect:'ease-out',
			duration:'0.2s'
		});
	});	
	
	/* LOTTIE OPTIONS */
	var animation = lottie.loadAnimation(
		{
		container: document.getElementById('logo-anim'),
		renderer: 'svg',
		loop: false,
		autoplay: false,
		path: 'https://assets1.lottiefiles.com/packages/lf20_7uKjju.json',
	}
	);
	lottie.setSpeed(1.5);
	setTimeout(function(){ 
		animation.play(); }, 500);
	
	/* HIDE INTRO */
	var intro = document.getElementById("intro-container");
	setTimeout(function(){ intro.style.display = 'none'; }, 7700); 
	setTimeout(function(){ $("#indicator").fadeIn(200,"linear"); }, 7700);
	$("#intro-container").click(
		function() { 
			$(this).fadeOut(500,"linear"); 
			$("#indicator").fadeIn(500,"linear");
		}
	);
	
	/* MENU SCROLL CHANGE */
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
	
	/* NAVGOCO */
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
	
	/* NAVGOCO SWITCH */
	$("#collapseAll").click(function(e) {
        e.preventDefault();
        $(".nav").navgoco('toggle', false);
    });
    $("#expandAll").click(function(e) {
        e.preventDefault();
        $(".nav").navgoco('toggle', true);
    });
	
	/* SHOW PROJECT PREVIEW */
	$(".nav li button").hover(
		function () {
			var num = $(this).attr('class').match(/\d+$/)[0];
				$("#p-"+num).fadeToggle(200,"linear");
		}
	);
});
