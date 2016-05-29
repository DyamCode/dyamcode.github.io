$(document).on('ready', main);

function main(){
	$('header li a').on('click', goTo);
	$('#view-more-a').on('click', goTo);
}
function goTo(){
	var section = $(this).attr('href');
	$('body, html').animate({
		scrollTop: $(section).offset().top-100
	}, 500);

	return false;
}

$('.skillbar').each(function(){
	$(this).find('.skillbar-bar').animate({width:$(this).attr('data-percent')
	},2000);
});