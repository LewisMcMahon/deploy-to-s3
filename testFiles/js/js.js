function workBoxSizeSet(){
	//resixe the work boxes and fill the text
	$(".work-container").each(function (index) {
		//set the work header
		$(".work-header",this).height($(".work-header",this).width() * 0.5);

		//hack to center the title text
		$(".work-header-overlay h3",this).css("line-height",$(".work-header",this).height()+"px");
	});
	$(".work-header-overlay h3").fitText(1.5);
}

$( document ).ready(function() {
	workBoxSizeSet()
});

$(window).on('resize', function(){
	workBoxSizeSet()
})


$(".work-container" ).on('mouseenter', function(){
	$("h3",this).hide()
	$(".work-content",this).fadeIn()
	var marginToAdd = ($(".work-container").height() - $(".work-content",this).height()) / 2
	if (marginToAdd < 0){
		marginToAdd = 0;
		$(".work-header",this).height($(".work-content",this).height())
		$(".work-content",this).css("padding-top","10px")
		$(".work-content",this).css("padding-bottom","10px")
		console.log($(".work-content",this).height())
	}else{
		$(".work-content",this).css("padding-top",marginToAdd+"px")
		$(".work-content",this).css("padding-bottom",marginToAdd+"px")
	}

})

$(".work-container" ).on('mouseleave', function(){
	$("h3",this).fadeIn()
	$(".work-content",this).hide()
	workBoxSizeSet()
})