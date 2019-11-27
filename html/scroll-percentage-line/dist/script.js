$(function() {
	$(window).on("scroll", function() {
		var winTop = $(window).scrollTop(),
			docHeight = $(document).height(),
			winHeight = $(window).height(),
			scrollLine = $(".scroll-line"),
			scroll = winTop / (docHeight - winHeight) * 100;

		scrollLine.css("width", scroll + "%");
	});
});