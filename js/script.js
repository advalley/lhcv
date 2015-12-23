$(document).ready(function () {
	$('.menuBtn').click(function (e) {
		e.preventDefault();
		$('.mainMenu').slideToggle();
	});
	$('.faqnav').children().children('a').click(function (e) {
		e.preventDefault();
		$('.faq_answer').slideUp();
		$(this).next().slideToggle();
	});
});

