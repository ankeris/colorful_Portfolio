function goDown() {
	$(".button").click(function (e){
		e.preventDefault();
		var plusSection = e.currentTarget.id+"Section";
		$("html body").animate({
			scrollTop: $("#" + plusSection).offset().top
		}, 800)
	})
}