$(function (){
	
	$("li").filter(".checked").on("click", function(){
		$(this).addClass("checked-color");
	});
	
});