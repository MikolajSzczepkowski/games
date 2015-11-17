$(function (){
	var clickedResult,
		currentTeamResult,
		clickedRate;

	$("li").filter(".checked").on("click", function(){
		$(this).addClass("checked-color");
	});
	$(".game-box-bar").on("mouseenter", function(){
		$(this).find("span").fadeIn();
	});
	$(".game-box-bar").on("mouseleave", function(){
		$(this).find("span").fadeOut();
	});

	$(".result-inner-wrapper").on("mouseenter", function(){
		currentTeamResult = $(this);
		currentTeamResult.find(".enter-result").nextAll().fadeIn(200);
	});
	$(".result-inner-wrapper").on("mouseleave", function(){
		currentTeamResult.find(".enter-result").nextAll().fadeOut(200);		
	});
	$(".result-list").on("click", function(){
		clickedResult = $(this).text();
		currentTeamResult.find(".enter-result").nextAll().fadeOut(200);
		currentTeamResult.find(".enter-result").empty().css({"padding-top":"5px",
															"background":"#363636"}).text(clickedResult);	
	});
	$(".ratings label img").on("click", function(){
		clickedRate = $(this);
		$(".ratings").find("img").css("background","#e43f3f");
		clickedRate.css("background","#363636");
	});
});