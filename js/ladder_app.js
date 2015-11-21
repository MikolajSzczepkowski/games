$(function (){
	
	$("li").filter(".checked").on("click", function(){
		$(this).addClass("checked-color");
	});
	
	$(document).on("mouseenter", ".ladder-box", function(){
		$(this).find("div").addClass("hover");
	});
	$(document).on("mouseleave", ".ladder-box", function(){
		$(this).find("div").removeClass("hover");
	});
});