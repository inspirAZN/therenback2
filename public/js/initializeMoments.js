'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.heartoverlay a').click(function(e) {
		// Prevent following the link
		e.preventDefault();

		// Get the div ID, e.g., "project3"
		var momentID = $(this).closest('.heartoverlay').attr('id');
		// get rid of 'project' from the front of the id 'project3'
		var idNumber = momentID.substr('moments'.length);
		
		// get the class for the link
		var aclass = $("#moments"+idNumber+" a").attr('class');

		var glyph = aclass.substr('alizarin glyphicon glyphicon-heart'.length);

		// this is the URL we'll call
		var url_call = '/moments/'+idNumber+'/'+glyph;

		alert(url_call);

		// How to respond to the GET request
		function changeIcon(moments_json) {
			// get the span to change the glyph
			var toChange = $("#moments"+idNumber+" a");
			
			if(toChange.hasClass("glyphicon-heart")){
				toChange.removeClass("glyphicon-heart").addClass("glyphicon-heart-empty");
			} else if(toChange.hasClass("glyphicon-heart-empty")){
				toChange.removeClass("glyphicon-heart-empty").addClass("glyphicon-heart");
			}
		}

		// issue the post request
		$.get(url_call, changeIcon);

	});
}

