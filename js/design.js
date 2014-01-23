var string0 = "Rollover to See More Information...",
img01Roll = "Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria ",
img02Roll = "Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria ",
img03Roll = "Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria ",
img04Roll = "Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria ",
img05Roll = "Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria ",
img06Roll = "Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria ",
rollText,
rollLink;

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
				$(this).find('.info').append('<a style="color:white;" href="'+ rollLink +'">Click Here for More Information</a>');
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
	//Canyata
	$('.tn_01').click(function() {
		var title = "Canyata Golf Club",
		subtitle = "Marshall, IL";
		rollText = img01Roll;
		rollLink = 'canyata.html';
		var imgPath = 'images/design/tn01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.tn_02').click(function() {
		var title = "Country Club of Peoria",
		subtitle = "Peoria Heights, IL";
		rollText = img02Roll;
		rollLink = 'cc_peoria.html';
		var imgPath = 'images/design/tn02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.tn_03').click(function() {
		var title = "The National at Eagle Creek",
		subtitle = "Findlay, IL";
		rollText = img03Roll;
		rollLink = 'national.html';
		var imgPath = 'images/design/tn03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.tn_04').click(function() {
		var title = "Garland Resort",
		subtitle = "Lewiston, MI";
		rollText = img04Roll;
		rollLink = 'garland.html';
		var imgPath = 'images/design/tn04_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.tn_05').click(function() {
		var title = "Jester Park Golf Course",
		subtitle = "Granger, IA";
		rollText = img05Roll;
		rollLink = 'jester_park.html';
		var imgPath = 'images/design/tn05_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.tn_06').click(function() {
		var title = "St. Charles Country Club",
		subtitle = "St. Charles, IL";
		rollText = img06Roll;
		rollLink = 'st_charles.html';
		var imgPath = 'images/design/tn06_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
}