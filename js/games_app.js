$(function (){
	var clickedTopic,
		currentTeamTopic,
		clickedResult,
		currentTeamResult,
		clickedRate,
		tap = ("ontouchstart" in document.documentElement);

	$(document).on("mouseenter", ".border-menu", function(){
		$(this).addClass("hover");
	});
	$(document).on("mouseleave", ".border-menu", function(){
		$(this).removeClass("hover");
	});

	if(!tap){
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
	}
	else{
		$(document).on("click", ".enter-topic", function(){
			currentTeamTopic = $(this);
			currentTeamTopic.nextAll().fadeIn(200);
		});
		$(document).on("click", ".topic-list", function(){
			clickedTopic = $(this).text();
			currentTeamTopic.nextAll().fadeOut(200);
			currentTeamTopic.empty().css({"padding-top":"5px",
											"background":"#363636"}).text(clickedTopic);
		});

		$(document).on("click", ".enter-result", function(){
			currentTeamResult = $(this);
			currentTeamResult.nextAll().fadeIn(200);
		});
		$(document).on("click", ".result-list", function(){
			clickedResult = $(this).text();
			currentTeamResult.nextAll().fadeOut(200);
			currentTeamResult.empty().css({"padding-top":"5px",
											"background":"#363636"}).text(clickedResult);	
		});
	}
	
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

		if(url != "team_card.html") {
			$(".game-chat-inner-wrapper").fadeOut(500);
		}

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

		if (url = "team_card.html") {
			$(".game-chat-inner-wrapper").fadeIn(500);
		}
	});

	$(document).on("click", ".teams-to-choose li", function(){
		clickedTeam = $(this).find("input").attr("name");
		$("#chooseTeam").attr("value", clickedTeam);
	});

	$(document).on("click", "#checkPlayersForm", function(){
		displayedPlayers = $(this).find("input:checkbox").length,
		checkedPlayers = $(this).find("input:checked").length;
		$(this).find("p span").text(checkedPlayers+"/"+displayedPlayers)
	});

	$(document).on("click", "#chooseTeamForm .form-click", function(){
		if ($(this).parents("div").hasClass("disabled")) {
			$(this).parents("div").removeClass("disabled");
			$(this).parents("div").siblings().addClass("disabled");
		}
	});
});