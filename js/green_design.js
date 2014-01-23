var string0 = "Rollover to See More Information...",
img01Roll = "Siting a green is the most important aspect in golf course design.  When designing a new course, we often site the green first and design back to the tee.  This sets up the hole's strategy.  On existing courses, subtle modifications in the green surrounds can make a hole more inviting.",
img02Roll = "It is said the putting surfaces are the faces to a golf course.  Each one is different, yet they should stay within a similar style.  Green undulations, like the ones shown above, provide separation to pin placement areas.  However, more subtle contours can create just as much interest in a green.  Developing that style is part of the fun.",
rollText;

$(function() {

	keyPressHandler();
	coverEvtHandler();
	rolloverHandler();
	imgClickHandler();

}); // end ready

function keyPressHandler() {
	$(window).keydown(function(event) {
		if (event.which == 27 && !$('.cover').hasClass("dontShow") && !$('.photoWrap').hasClass("dontShow")) {
			$('.cover').fadeOut(300);
			$('.photoWrap').fadeOut(300);
			$('.cover').addClass("dontShow");
			$('.photoWrap').addClass("dontShow");
		}
	});
}

function coverEvtHandler() {
	$('.cover').click(function() {
		$('.cover').fadeOut(300);
		$('.photoWrap').fadeOut(300);
		$('.cover').addClass("dontShow");
		$('.photoWrap').addClass("dontShow");
	});
}

function displayCover(imgPath,title,subtitle) {
	$('.titleBar .title').text(title);
	$('.titleBar .subtitle').text(subtitle);
	var imgHTML = '<img class="d_slide" style="opacity:1" src="' + imgPath + '" />';
	$('.d_slides').html(imgHTML);
	
	if ($('.cover').hasClass("dontShow") && $('.photoWrap').hasClass("dontShow")) {
		$('.cover').fadeIn(300);
		$('.photoWrap').fadeIn(300);
		$('.cover').removeClass("dontShow");
		$('.photoWrap').removeClass("dontShow");
	}
}

function rolloverHandler() {
	$('.infoRollover').hover(function() {
		$(this).find('.info').animate({'opacity':'0'},400,function() {
			$('.infoRollover').animate({'width':'760px'},400,function() {
				$(this).find('.info').text(rollText);
				$(this).find('.info').animate({'opacity':'1'});
			}); // end width animate
		}); // end text animate
	}, function() {
		$(this).find('.info').animate({'opacity':'0'},400,function() {
			$('.infoRollover').animate({'width':'100px'},400,function() {
				$(this).find('.info').text(string0);
				$(this).find('.info').animate({'opacity':'1'});
			}); // end animate
		});
	}); // end hover
}

function imgClickHandler() {
	$('.img01 img').click(function() {
		var title = "Mattaponi Springs Golf Course",
		subtitle = "Ruthers Glen, VA";
		rollText = img01Roll;
		var imgPath = 'images/green_design/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.img02 img').click(function() {
		var title = "Canyata Golf Club",
		subtitle = "Marshall, IL";
		rollText = img02Roll;
		var imgPath = 'images/green_design/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
}