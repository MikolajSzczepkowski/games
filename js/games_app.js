$(function (){
	var clickedTopic,
		currentTeamTopic,
		clickedResult,
		currentTeamResult,
		clickedRate,
		playersToChoose = 3,
		checkedPlayers,
		playerGameId = true,
		tap = ("ontouchstart" in document.documentElement),
		clock = $("#clock").FlipClock({
			clockFace: "DailyCounter"
		});

	$("#checkPlayersForm").find("p span").text(0+"/"+playersToChoose);

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
	
	$(document).on("click", ".result-wrapper label img", function(){
		if (!$(this).hasClass("active")) {
			$(".result-wrapper label img").removeClass("active");
			$(this).addClass("active");
		}
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

	$(document).on("change", "#checkPlayersForm input", function(){
		checkedPlayers = $("#checkPlayersForm").find("input:checked").length;
		$("#checkPlayersForm").find("p span").text(checkedPlayers+"/"+playersToChoose);
	});
	function checkIfPlayerHasGameId(){
		for (var i = 0; i <= checkedPlayers; i++) {
			if ($("#checkPlayersForm input:checked").eq(i).attr("data-gameId")==="false"){
				return playerGameId = false;
			}
			else if($("#checkPlayersForm input:checked").eq(i).attr("data-gameId")==="true") {
				playerGameId = true;
			}
		}
	}
	$(document).on("submit", "#checkPlayersForm", function(e){
		e.preventDefault();
		checkIfPlayerHasGameId();
		if (checkedPlayers>playersToChoose) {
			$("#alertBox p").text("You have exceeded the number of players.");
			$("#alertBox").show();
			$("#alertBox").delay(3000).hide(0);
		}
		if (playerGameId === false) {
			$("#alertBox p").text("Chosen player does not have game ID.");
			$("#alertBox").show();
			$("#alertBox").delay(3000).hide(0);
		}
	});

	$(document).on("click", "#chooseTeamForm .form-click", function(){
		if ($(this).parents("div").hasClass("disabled")) {
			$(this).parents("div").removeClass("disabled");
			$(this).parents("div").siblings(".to-choose").addClass("disabled");
		}
	});

	$(document).on("click", "#gamesPickSlider ul li", function(){
		if (!$(this).hasClass("current-game")) {
			$("#gamesPickSlider ul li").removeClass("current-game");
			$(this).addClass("current-game");
		}
	});

	$(document).on("click", "#choosePaymentMethod input", function(){
		if ($(this).prop("checked", false)) {
			$("#choosePaymentMethod input").prop("checked", false);
			$(this).prop("checked", true);
		}
	});

	$(document).on("click", "#acceptPayment", function(){
		if (!$("#acceptPaymentTerms").is(":checked")) {
			$("#alertBox p").text("You must accept terms of use and Privacy Policy.");
			$("#alertBox").show();
			$("#alertBox").delay(3000).hide(0);
		}
		else if ($("#acceptPaymentTerms").is(":checked")) {
			$("#alertBox").hide();
			if ($("#eachPlayerPay").is(":checked")) {
				$(this).attr("value", "pending");
				$(this).addClass("pending");
				$(this).prop("disabled", true);
				$("#cancelPayment").show();
			}
		}
	});

	$(document).on("change", "#choosePaymentMethod input", function(){
		$("#acceptPayment").attr("value", "sign up");
		$("#acceptPayment").removeClass("pending");
		$("#acceptPayment").prop("disabled", false);
		$("#cancelPayment").hide();
	});

});