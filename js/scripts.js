// JavaScript Document
$(document).ready(function() {
		$("#menu-mobile").click(function(){ 
	  		$("#wrapper").fadeOut(200,"linear"); 
		});
		$(".show-1").click(function() { 
				var num = $(this).attr('class').match(/\d+$/)[0];
				$("#overlay, #close-bttn").fadeIn(200,"linear"); 
				$("#overlay-cont-1").fadeIn(200,"linear"); 
				$("#indicator, #menu-mobile").fadeOut(200,"linear"); 
				document.body.style.overflow = "hidden";
				overlay.scrollTop = 0;
			}
		);
		$("#overlay, #close-bttn").click(
			function() { 
				$("#overlay, #close-bttn, *[id^='overlay-cont-']").fadeOut(200,"linear"); 
				setTimeout(function(){
					document.body.style.overflow = "auto";
					$("#indicator, #menu-mobile").fadeIn(200,"linear");
				}, 200);		 
			}
		);
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
	
	
	var intro = document.getElementById('intro-container');
	setTimeout(function(){
    intro.style.display = 'none';
	}, 7700); 
	
	$(window).scroll(function() {
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
		}
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
	
	$("[class^=show-").hover(
		function () {
			var num = $(this).attr('class').match(/\d+$/)[0];
				$("#p-"+num).fadeToggle(200,"linear");
		}
	);
});
