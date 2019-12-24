jQuery(function(){
	$(".show-more").click(function() {
		var hideBlock = $(this).siblings('.hide');
		if (hideBlock.css('display') == "none") {
			hideBlock.css('display', 'flex');
		}else{
			hideBlock.css('display', 'none');
		}
	});
})