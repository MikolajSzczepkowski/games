$(function (){
	
	$("li").filter(".checked").on("click", function(){
		$(this).addClass("checked-color");
	});
	
	$(".ladder-box").on("mouseenter", function(){
		$(this).find("div").addClass("hover");
	});
	$(".ladder-box").on("mouseleave", function(){
		$(this).find("div").removeClass("hover");
	});
});