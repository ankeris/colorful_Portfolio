$(document).ready(function(){
	setBindings();
});
function setBindings() {
	$("nav a").click(function (e){
		e.preventDefault();
		var plusSection = e.currentTarget.id+"Section";
		$("html body").animate({
			scrollTop: $("#" + plusSection).offset().top + (-50)
		}, 800)
	})
}