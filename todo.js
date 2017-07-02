 /*$("div").css("background","purple");
$(".highlight").css("width","200px");
$("#high").css("border","1px solid orange");


$("h1").text("haaahaahh");
$("h1").html("<h1>my name is haroon</h1>");
$("li").text("haroon");
*/
$("ul").on("click", "li" ,function(){
	$(this).toggleClass("completed")
})

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});

event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13)
	{
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}

});
$("i").click(function(){
	$("input[type = 'text']").fadeToggle();
})