$(function (){
	var clickedTopic,
		currentTeamTopic,
		clickedResult,
		currentTeamResult,
		clickedRate;

	$(document).on("mouseenter", ".game-box-bar",function(){
		$(this).find("span").fadeIn();
	});
	$(document).on("mouseleave", ".game-box-bar", function(){
		$(this).find("span").fadeOut();
	});

	$(document).on("mouseenter", ".ladder-box", function(){
		$(this).find("div").addClass("hover");
	});
	$(document).on("mouseleave", ".ladder-box", function(){
		$(this).find("div").removeClass("hover");
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

	$(document).on("mouseenter", ".result-inner-wrapper", function(){
		currentTeamResult = $(this);
		currentTeamResult.find(".enter-result").nextAll().fadeIn(200);
	});
	$(document).on("mouseleave", ".result-inner-wrapper", function(){
		currentTeamResult.find(".enter-result").nextAll().fadeOut(200);		
	});

	$(document).on("click", ".result-list", function(){
		clickedResult = $(this).text();
		currentTeamResult.find(".enter-result").nextAll().fadeOut(200);
		currentTeamResult.find(".enter-result").empty().css({"padding-top":"5px",
															"background":"#363636"}).text(clickedResult);	
	});
	
	$(document).on("click", ".ratings label img", function(){
		clickedRate = $(this);
		$(".ratings").find("img").css("background","#e43f3f");
		clickedRate.css("background","#363636");
	});

	$("nav a").on("click", function(e){
		e.preventDefault();
		var url = this.href;

		$("nav a.active").removeClass("active");
		$(this).addClass("active");

		$.ajax({
			url: url,
			dataType: "html",
			type: "GET",
			success: function(data){
				$("#content-wrapper").html($(data).find("#content")).hide().fadeIn(500);
			}
		});
	});

	$(document).on("click", ".ladder-box a", function(e){
		e.preventDefault();
		var url = this.href;

		$.ajax({
			url: url,
			dataType: "html",
			type: "GET",
			success: function(data){
				$("#content-wrapper").html($(data).find("#content")).hide().fadeIn(500);
			}
		});
	});
});