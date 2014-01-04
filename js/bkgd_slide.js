function rotateImage() {
	
	/*var cTab = $('.tActive');
	var nTab;
	if (cTab.hasClass('tLast')) {
		nTab = $('.tFirst');
	} else {
		nTab = cTab.next();
	}
	setTimeout(function() {
		nTab.addClass('tActive');
		cTab.removeClass('tActive');
		roundCorners(nTab);
	}, 700);*/

	current = $('img.active');
	next = current.next();
	if (current.hasClass('last')) {
		next = $('img.first');
	}
	//Put opacity animation in here
	animateOpacityDown(current,1400);
	animateOpacityUp(next,1400);
	next.addClass('active');
	current.removeClass('active');
}

function animateOpacityDown(img,t) {
	img.css({'opacity':'1.0'});
	img.animate({'opacity':'0'},t);
}
function animateOpacityUp(img,t) {
	img.css({'opacity':'0'});
	img.animate({'opacity':'1.0'},t);
}

function goBack(i) {
	clearInterval(i);
	
	/*var cTab = $('.tActive');
	var pTab;
	if (cTab.hasClass('tFirst')) {
		pTab = $('.tLast');
	} else {
		pTab = cTab.prev();
	}
	setTimeout(function() {
		pTab.addClass('tActive');
		cTab.removeClass('tActive');
		roundCorners(pTab);
	}, 350);*/
	
	var current = $('img.active');
	var prev;
	if (current.hasClass('first')) {
		prev = $('img.last');
	} else {
		prev = current.prev();
	}
	animateOpacityDown(current,700);
	animateOpacityUp(prev,700);
	prev.addClass('active');
	current.removeClass('active');
}
function goForward(i) {
	clearInterval(i);
	
	/*var cTab = $('.tActive');
	var nTab;
	if (cTab.hasClass('tLast')) {
		nTab = $('.tFirst');
	} else {
		nTab = cTab.next();
	}
	setTimeout(function() {
		nTab.addClass('tActive');
		cTab.removeClass('tActive');
		roundCorners(nTab);
	}, 350);*/
	
	var current = $('img.active');
	var next;
	if (current.hasClass('last')) {
		next = $('img.first');
	} else {
		next = current.next();
	}
	animateOpacityDown(current,700);
	animateOpacityUp(next,700);
	next.addClass('active');
	current.removeClass('active');
}

/*function roundCorners(current) {
	$('.infoTab div').css({'border-radius':'0 0 0 0'});

	var last;
	if (current.hasClass('tFirst')) {
		last = $('.tLast');
	} else {
		last = current.prev();
		last.find('div').css({'border-radius':'0 10px 0 0'});
	}
	
	var next;
	if (current.hasClass('tLast')) {
		next = $('.tFirst');
	} else {
		next = current.next();
		next.find('div').css({'border-radius':'10px 0 0 0'});
	}
	
}

function goToTab(i,t) {
	clearInterval(i);
		
	var ind = $('.infoTab').index(t);
	var c = $('img.active');
	var n = $('.slide:nth-of-type('+(ind+1)+')');
	var ct = $('.tActive');
	var nt = t;
	
	setTimeout(function() {
		nt.addClass('tActive');
		ct.removeClass('tActive');
		roundCorners(nt);
	}, 350);
	
	animateOpacityDown(c,700);
	animateOpacityUp(n,700);
	n.addClass('active');
	c.removeClass('active');
}*/

$(function() {
	//roundCorners($('.tFirst'));
	var interval = setInterval('rotateImage()',6000);
	
	$('.previous').click(function() {
		goBack(interval);
		interval = setInterval('rotateImage()',6000);
	});
	$('.next').click(function() {
		goForward(interval);
		interval = setInterval('rotateImage()',6000);
	});
	$('.infoTab').click(function() {
		if ($(this).hasClass('tActive')) {
			return;
		}
		goToTab(interval,$(this));
		interval = setInterval('rotateImage()',6000);
	});
});