var string0 = "Rollover to See More Information...",
img01Roll = "As a Native American term for Backwoods, Canyata's name if fitting for the property.  With 100 year old hardwoods and deep ravines you don't feel like you are in Central Illinois.  With this type of scenery you can see why Canyata is rated #37 in 'Golf Digests' America's Top 100 Courses and #3 in the State. For More Information, ",
img02Roll = "CC of Peoria's history dates back to the 1890's and famed architect Tom Bendelow.  Following the completion of a course Enhancement Plan, the Club has never been closer to it's original intent. For More Information, ",
img03Roll = "Set in Eagle Creek State Park along Lake Shelbyville, The National at Eagle Creek is set among nature.  This 7,000 yard course winds through mature forests and test every part of your game.  With completed updates, and more to come, the course will become a favorite destination in the state. For More Information, ",
img04Roll = "An area favorite for years, Garland boosts four golf courses and the largest log cabin east of the Mississippi River.  It's four courses offer a variety for every level of golfer.  Upgrades have been made to the Fountains Course and routing plans have been complete for the addition of resort's fifth course. For More Information, ",
img05Roll = "Jester Park is located north of Des Moines along Sailorville Lake, a popular destination for hikers, hunters and fishermen.  The course is also popular among golfers boosting over 35,000 rounds a year.  Upgrades included new bunkers and tees with hopes of attracting State tournaments. For More Information, ",
img06Roll = "Only eleven original holes remain on the Tom Bendelow design, but that hasn't stopped the Club from building on his tradition.  Plans are in place to update the original course and convert the remaining holes to match the style of a Bendelow design. For More Information, ",
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
			$('.warning').fadeOut(300);
			$('.warning').addClass('dontShow');
		}
	});
}

function coverEvtHandler() {
	$('.cover').click(function() {
		$('.cover').fadeOut(300);
		$('.photoWrap').fadeOut(300);
		$('.cover').addClass("dontShow");
		$('.photoWrap').addClass("dontShow");
		$('.warning').fadeOut(300);
		$('.warning').addClass('dontShow');
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
		$('.warning').fadeIn(300);
		$('.warning').removeClass('dontShow');
	}
}

function rolloverHandler() {
	$('.infoRollover').hover(function() {
		$(this).find('.info').animate({'opacity':'0'},400,function() {
			$('.infoRollover').animate({'width':'760px'},400,function() {
				$(this).find('.info').text(rollText);
				$(this).find('.info').append('<a style="color:white;" href="'+ rollLink +'">Click Here</a>');
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