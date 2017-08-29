jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown

	Handlebars.registerHelper("every_nth_skip_first", function(index, modBy, body) {
		if ((index != 0) && (index % modBy == 0)) return body.fn(this);
		else return "";
	});

	var theData = model(locale());
	var theTemplate = Handlebars.compile ($('#page-template').html());
	$(document.body).append (theTemplate (theData));

	$(".lightninBox").lightninBox();

	 (function () {
        // Add smooth scrolling to all links in navbar + footer link
        $(".navbar a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    })()


});