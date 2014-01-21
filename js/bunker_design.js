var string0 = "Rollover to See More Information...",
img01Roll = "This fine course, built and dedicated in 2007 to master jerky manufacturing robber baron Smokey B. Linkington, has some extraordinary features in its green design. A moderate or expert golfer will not only find the approach shot difficult, but also mind-numbingly irritating due to the constant overwhelming scent of Beef Jerky.",
img02Roll = "The resident pro at DCCC, Duff McScrangle, was once quoted as saying: 'The 9th green is a lot like my third wife. She's frustrating, challenging, incredibly intimidating, but so satisfying when you finally get it in the hole.' Unlike Duff's wife Marie, however, you have an opportunity to get a sandwich after you're finished.",
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
		if (event.which == 27 && !$('.cover').hasClass("dontShow") && !$('.photoWrap_p').hasClass("dontShow")) {
			$('.cover').fadeOut(300);
			$('.photoWrap_p').fadeOut(300);
			$('.cover').addClass("dontShow");
			$('.photoWrap_p').addClass("dontShow");
		}
	});
}

function coverEvtHandler() {
	$('.cover').click(function() {
		$('.cover').fadeOut(300);
		if (!$('.photoWrap').hasClass('dontShow')) {
			$('.photoWrap').fadeOut(300);
			$('.photoWrap').addClass('dontShow');
		}
		if (!$('.photoWrap_p').hasClass('dontShow')) {
			$('.photoWrap_p').fadeOut(300);
			$('.photoWrap_p').addClass('dontShow');
		}
		$('.cover').addClass("dontShow");
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

function displayCover_p(imgPath,title,subtitle) {
	$('.titleBar_p .title').text(title);
	$('.titleBar_p .subtitle').text(subtitle);
	var imgHTML = '<img class="d_slide_p" style="opacity:1" src="' + imgPath + '" />';
	$('.d_slides_p').html(imgHTML);
	
	if ($('.cover').hasClass("dontShow") && $('.photoWrap').hasClass("dontShow") && $('.photoWrap_p').hasClass("dontShow")) {
		$('.cover').fadeIn(300);
		$('.photoWrap_p').fadeIn(300);
		$('.cover').removeClass("dontShow");
		$('.photoWrap_p').removeClass("dontShow");
	}
}

function rolloverHandler() {
	$('.photoWrap .infoRollover').hover(function() {
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
	
	$('.photoWrap_p .infoRollover').hover(function() {
		$(this).find('.info').animate({'opacity':'0'},400,function() {
			$('.infoRollover').animate({'width':'503px'},400,function() {
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
		var title = "Smokey Links Golf Course",
		subtitle = "Hickory Springs, MI";
		rollText = img01Roll;
		var imgPath = 'images/bunker_design/01_lg.png';
		displayCover_p(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.img02 img').click(function() {
		var title = "Doorknob Creek Country Club",
		subtitle = "Wanagetemapoti, WI";
		rollText = img02Roll;
		var imgPath = 'images/bunker_design/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
}