$(function (){
	var clickedTopic,
		currentTeamTopic;

	$("li").filter(".checked").on("click", function(){
		$(this).addClass("checked-color");
	});

	$(document).on("mouseenter", ".topic-inner-wrapper", function(){
		currentTeamTopic = $(this);
		currentTeamTopic.find(".enter-topic").nextAll().fadeIn(200);
	});
	$(document).on("mouseleave", ".topic-inner-wrapper", function(){
		currentTeamTopic.find(".enter-topic").nextAll().fadeOut(200);		
	});

	$(document).on("click", ".topic-list", function(){
		clickedTopic = $(this).text();
		currentTeamTopic.find(".enter-topic").nextAll().fadeOut(200);
		currentTeamTopic.find(".enter-topic").empty().css({"padding-top":"5px",
															"background":"#363636"}).text(clickedTopic);	
	});
	
});