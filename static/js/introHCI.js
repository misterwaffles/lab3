'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	});

	$("a.thumbnail").click(projectClick);
	$("#testjs").click(buttonClick);
	$("#submitBtn").click(submitClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}
function submitClick(e) {
	console.log($(".form-control#project").val());
	var selectedproject = $(".form-control#project").val();
	$(selectedproject).animate({
		width: $(".form-control#width").val()
	});

	var newDescription = $(".form-control#description").val();
	$(selectedproject + " .project-description").text(newDescription);
}

function buttonClick(e) {
	$(this).text("Pressed");
	$(".jumbotron p").toggleClass("active");
}

function projectClick(e) {
	e.preventDefault();

	$(this).css("background-color", "#7fff00");

	var projectTitle = $(this).find("p").text();
	//console.log(projectTitle);

	var jumbotronHeader = $(".jumbotron h1");
	//console.log(jumbotronHeader);
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");

	if (description.length == 0) {
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	}
	else {
		$(".project-description").fadeToggle();
	}


}