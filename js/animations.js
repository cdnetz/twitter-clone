$(document).ready(function() {
	$('.tweet-compose').first().on('click', function() {
		
		$('.tweet-compose').css('height', '5em');
		$('#tweet-controls').css({'visibility': 'visible'});
	});
	var charLength = 140;
	$('.tweet-compose').keyup(function() {
		var length = $(this).val().length;
		var length = charLength-length;
		$('#char-count').text(length);
		if (length <= 10) {
			$('#char-count').css({'color': '#ff0000'});
		}
		else{
			$('#char-count').css({'color': '#000'});
		};
		if(length < 0) {
			$('#tweet-submit').attr("disabled", "disabled");
		}
		else{
			$('#tweet-submit').removeAttr("disabled");
		};


	});
	$('#tweet-submit').on('click', function() {
		$('#stream').prepend(
			'<div class = "tweet">' + 
			'<div class="content">' +
			'<img class="avatar" src="img/alagoon.jpg" />' +
			'<strong class="fullname">YourNameHere</strong>' +
			'<span class="username">@yournamehere</span>' +
			'<p class="tweet-text">' +
			$('.tweet-compose').val() + 
			'<div class="tweet-actions">' +
								'<ul>' +
									'<li><span class="icon action-reply"></span> Reply</li> ' +
									'<li><span class="icon action-retweet"></span> Retweet</li> ' +
									'<li><span class="icon action-favorite"></span> Favorite</li> ' +
									'<li><span class="icon action-more"></span> More</li> ' +
								'</ul>' +
							'</div>' +
			'</p>' +
			'</div>' +
			'</div>'
			); 
	});
	$('.tweet-actions').hover(function(){
		$(this 'ul').attr("disabled", "disabled");
	})

	

});


