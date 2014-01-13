var

string0 = "Rollover to See More Information...",
string1 = "Here is a long winded piece of text that will shown over the modified rollover. Put in some information about the golf course picture that is shown on the screen. Course 1",
string2 = "Here is a long winded piece of text that will shown over the modified rollover. Put in some information about the golf course picture that is shown on the screen. Course 2",
string3 = "Here is a long winded piece of text that will shown over the modified rollover. Put in some information about the golf course picture that is shown on the screen. Course 3",
string4 = "Here is a long winded piece of text that will shown over the modified rollover. Put in some information about the golf course picture that is shown on the screen. Course 4",
string5 = "Here is a long winded piece of text that will shown over the modified rollover. Put in some information about the golf course picture that is shown on the screen. Course 5",
string6 = "Here is a long winded piece of text that will shown over the modified rollover. Put in some information about the golf course picture that is shown on the screen. Course 6",
title1 = "Course 1",
subtitle1 = "Somewhere, IL",
title2 = "Course 2",
subtitle2 = "Somewhere, IN",
title3 = "Course 3",
subtitle3 = "Somewhere, IA",
title4 = "Course 4",
subtitle4 = "Somewhere, MI",
title5 = "Course 5",
subtitle5 = "Somewhere, KS",
title6 = "Course 6",
subtitle6 = "Somewhere, WI";

$(function() {
	
	coverEvtHandler();
	thumbnailEvtHandler();
	rolloverHandler();
	arrowHandler();
	keyPressHandler();
	
}); // end ready

function keyPressHandler() {
	$(window).keydown(function(event) {
		console.log(event.which);
		if (event.which == 27 && !$('.cover').hasClass("dontShow") && !$('.photoWrap').hasClass("dontShow")) {
			$('.cover').fadeOut(300);
			$('.photoWrap').fadeOut(300);
			$('.cover').addClass("dontShow");
			$('.photoWrap').addClass("dontShow");
		}
		if (event.which == 37 && !$('.cover').hasClass("dontShow") && !$('.photoWrap').hasClass("dontShow")) {
			goBackward();
		}
		if (event.which == 39 && !$('.cover').hasClass("dontShow") && !$('.photoWrap').hasClass("dontShow")) {
			goForward();
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

function displayCover(container) {
	//If Else If for container image to display
	$('.photoWrap img').each(function() {
		$(this).css({'opacity':'0'});
		if ($(this).hasClass("d_active")) {
			$(this).removeClass("d_active");
		}
	});
	if (container.hasClass("tn_01")) {
		$('.titleBar .title').text(title1);
		$('.titleBar .subtitle').text(subtitle1);
		$('.photoWrap .s01').addClass("d_active");
		$('.photoWrap .s01').css({'opacity':'1'});
	} else if (container.hasClass("tn_02")) {
		$('.titleBar .title').text(title2);
		$('.titleBar .subtitle').text(subtitle2);
		$('.photoWrap .s02').addClass("d_active");
		$('.photoWrap .s02').css({'opacity':'1'});
	} else if (container.hasClass("tn_03")) {
		$('.titleBar .title').text(title3);
		$('.titleBar .subtitle').text(subtitle3);
		$('.photoWrap .s03').addClass("d_active");
		$('.photoWrap .s03').css({'opacity':'1'});
	} else if (container.hasClass("tn_04")) {
		$('.titleBar .title').text(title4);
		$('.titleBar .subtitle').text(subtitle4);
		$('.photoWrap .s04').addClass("d_active");
		$('.photoWrap .s04').css({'opacity':'1'});
	} else if (container.hasClass("tn_05")) {
		$('.titleBar .title').text(title5);
		$('.titleBar .subtitle').text(subtitle5);
		$('.photoWrap .s05').addClass("d_active");
		$('.photoWrap .s05').css({'opacity':'1'});
	} else {
		$('.titleBar .title').text(title6);
		$('.titleBar .subtitle').text(subtitle6);
		$('.photoWrap .s06').addClass("d_active");
		$('.photoWrap .s06').css({'opacity':'1'});
	}

	if ($('.cover').hasClass("dontShow") && $('.photoWrap').hasClass("dontShow")) {
		$('.cover').fadeIn(300);
		$('.photoWrap').fadeIn(300);
		$('.cover').removeClass("dontShow");
		$('.photoWrap').removeClass("dontShow");
	}
}

function thumbnailEvtHandler() {
	$('.thumbnails div').click(function() {
		displayCover($(this));
	});
}

function rolloverHandler() {
	$('.infoRollover').hover(function() {
		$(this).find('.info').animate({'opacity':'0'},400,function() {
			$('.infoRollover').animate({'width':'760px'},400,function() {
				
				//If, else if statements for image check
				var c = $('.d_slides .d_active');
				if (c.hasClass("s01")) {
					$(this).find('.info').text(string1);
				} else if (c.hasClass("s02")) {
					$(this).find('.info').text(string2);
				} else if (c.hasClass("s03")) {
					$(this).find('.info').text(string3);
				} else if (c.hasClass("s04")) {
					$(this).find('.info').text(string4);
				} else if (c.hasClass("s05")) {
					$(this).find('.info').text(string5);
				} else {
					$(this).find('.info').text(string6);
				}
				
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

function arrowHandler() {
	$('.arrow_left').click(function() {
		goBackward();
	});
	$('.arrow_right').click(function() {
		goForward();
	});
}

function goForward() {
	var c = $('img.d_active'), n;
	if (c.hasClass('d_last')) {
		n = $('img.d_first');
	} else {
		n = c.next();
	}
	var ntext;
	if (n.hasClass("s01")) {
		ntext = [title1, subtitle1];
	} else if (n.hasClass("s02")) {
		ntext = [title2, subtitle2];
	} else if (n.hasClass("s03")) {
		ntext = [title3, subtitle3];
	} else if (n.hasClass("s04")) {
		ntext = [title4, subtitle4];
	} else if (n.hasClass("s05")) {
		ntext = [title5, subtitle5];
	} else {
		ntext = [title6, subtitle6];
	}
	
	$('.subtitle').fadeOut(200);
	$('.title').fadeOut(200,function() {
		$('.title').text(ntext[0]);
		$('.title').fadeIn(200);
		$('.subtitle').text(ntext[1]);
		$('.subtitle').fadeIn(200);
	});
	
	c.animate({'opacity':'0'});
	n.animate({'opacity':'1'});
	c.removeClass('d_active');
	n.addClass('d_active');
}

function goBackward() {
	var c = $('img.d_active'), p;
	if (c.hasClass('d_first')) {
		p = $('img.d_last');
	} else {
		p = c.prev();
	}
	var ntext;
	if (p.hasClass("s01")) {
		ntext = [title1, subtitle1];
	} else if (p.hasClass("s02")) {
		ntext = [title2, subtitle2];
	} else if (p.hasClass("s03")) {
		ntext = [title3, subtitle3];
	} else if (p.hasClass("s04")) {
		ntext = [title4, subtitle4];
	} else if (p.hasClass("s05")) {
		ntext = [title5, subtitle5];
	} else {
		ntext = [title6, subtitle6];
	}
	
	$('.subtitle').fadeOut(200);
	$('.title').fadeOut(200,function() {
		$('.title').text(ntext[0]);
		$('.title').fadeIn(200);
		$('.subtitle').text(ntext[1]);
		$('.subtitle').fadeIn(200);
	});
	
	c.animate({'opacity':'0'});
	p.animate({'opacity':'1'});
	c.removeClass('d_active');
	p.addClass('d_active');
}