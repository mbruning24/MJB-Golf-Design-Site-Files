var string0 = "Rollover to See More Information...",
img01Roll = "Routing a new golf course involves many days on site and many meeting between designer and owner.  This insures that all the projects goals are met before moving on to next phases.  Following the routing, the next phases include final design, construction documents, and bidding.",
img02Roll = "Golf course master planning has evolved over the past years.  While we still complete full course modifications, today's plans may involve looking at one golf hole, or looking at one aspect of the course, such as bunkers or tees.  In either case, sound planning can help your course complete the project on time and within budget.",
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

function displayCover(imgPath) {
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
	//Thoughts
	$('.thoughts .img01 img').click(function() {
		rollText = img01Roll;
		var imgPath = 'images/design_thoughts/01_xl.png';
		displayCover(imgPath);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.thoughts .img02 img').click(function() {
		rollText = img02Roll;
		var imgPath = 'images/design_thoughts/02_xl.png';
		displayCover(imgPath);
		$('html, body').animate({scrollTop:0},400);
	});
}