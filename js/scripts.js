$(document).ready(function(){
	//mobile nav event listener
	$('#menu-link').click(function(){
		$('nav ul').slideToggle('active-menu');
	});

	//image swap event listener
	$('.sub-stories img').click(function(){
		var replaceStart = $(this).attr('src').indexOf('/') + 1;
		var replaceEnd = $(this).attr('src').indexOf('-');
		var imgName = $(this).attr('src').slice(replaceStart, replaceEnd);
		var mainStart = $('.main-story img').attr('src').indexOf('/') + 1;
		var mainEnd = $('.main-story img').attr('src').indexOf('-');
		var mainName = $('.main-story img').attr('src').slice(mainStart, mainEnd);


		$('.main-story img').attr({
			srcset: 'images/' + imgName + '-800x390.jpg 1x, images/' + imgName + '-1600x780.jpg 2x',
			src: 'images/' + imgName + '-800x390.jpg'
		});

		$(this).attr({
			srcset: 'images/' + mainName + '-250x330.jpg 1x, images/' + mainName + '-500x660.jpg 2x',
			src: 'images/' + mainName + '-250x330.jpg'
		});
		
		$(this).prev().attr('srcset', 'images/' + mainName + '-100x100.jpg 1x, images/' + mainName+ '-200x200.jpg 2x');

	});
});