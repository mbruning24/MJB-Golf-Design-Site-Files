function rotateImage() {
	var current = $('img.active');
	var next = current.next();
	if (current.hasClass('last')) {
		next = $('img.first');
	}
	var c = $('a.a');
	var n = c.next();
	if (c.hasClass('l')) {
		n = $('a.f');
	}
	//Put opacity animation in here
	animateOpacityDown(current,1400,n,c);
	animateOpacityUp(next,1400);
	next.addClass('active');
	current.removeClass('active');
	n.addClass('a');
	c.removeClass('a');
}

function animateOpacityDown(img,t,button,last) {
	last.css({'background-image':'url(images/button.png)'});
	button.css({'background-image':'url(images/button_hover.png)'});
	img.css({'opacity':'1.0'});
	img.animate({'opacity':'0'},t);
}
function animateOpacityUp(img,t) {
	img.css({'opacity':'0'});
	img.animate({'opacity':'1.0'},t);
}

$(function() {

	var interval = setInterval('rotateImage()',6000);
	
	$('.buttons a').click(function() {
		clearInterval(interval);
		var current = $('.active');
		var c = $('a.a');
		var next;
		//if, else statement for which picture to rotate to
		if ($(this).hasClass('01')) {
			next = $('.slides img:nth-child(1)');
		} else if ($(this).hasClass('02')) {
			next = $('.slides img:nth-child(2)');
		} else if ($(this).hasClass('03')) {
			next = $('.slides img:nth-child(3)');
		} else if ($(this).hasClass('04')) {
			next = $('.slides img:nth-child(4)');
		} else if ($(this).hasClass('05')) {
			next = $('.slides img:nth-child(5)');
		} else if ($(this).hasClass('06')) {
			next = $('.slides img:nth-child(6)');
		} else {
			next = $('.slides img:nth-child(7)');
		}
		animateOpacityDown(current,1400,$(this),c);
		animateOpacityUp(next,1400);
		next.addClass('active');
		current.removeClass('active');
		$(this).addClass('a');
		c.removeClass('a');
		interval = setInterval('rotateImage()',6000);
		return false;
	}); // end click

});