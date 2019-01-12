$("#nav li a").hover(function(){
    $(this).css("background-color", "#d9ad7c");
    $(this).css("color", "#674d3c");
    }, function(){
    $(this).css("background-color", "#674d3c");
    $(this).css("color", "white");
});

$(function() {
	
  // hide the story from view
  $("#story").hide();

  // ---- event handler ---- //
  $("#btn-click").click(function(e) {

    e.preventDefault()

    // grab the values from the input boxes, then append them to the DOM
    $(".verb").empty().append($("input.verb").val());
    $(".verb2").empty().append($("input.verb2").val());
    $(".verb3").empty().append($("input.verb3").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".noun2").empty().append($("input.noun2").val()); 
    $(".noun3").empty().append($("input.noun3").val());   
    $(".noun4").empty().append($("input.noun4").val());
    $(".adjective2").empty().append($("input.adjective2").val());  
      
    $(".adjective3").empty().append($("input.adjective3").val()); 
      
    $(".noun5").empty().append($("input.noun5").val());  

    // show the story
    $("#story").show();

    // empty the form's values
    $(':input').val('');

    // hide the questions
    $("#questions").hide();

  });

  // ---- event handler ---- //
  $("#play-btn").click(function(e) {
    $("#questions").show();
    $("#story").hide();
  });
	$('#tabs').tabs(function(){
		// attach event listener to theme 2 button
		$('.themeButton').click(function(){
			$('#theme').attr("href", "jquery-ui-" + this.id + ".min.css");
		});
	});
});