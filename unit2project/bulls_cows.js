    // When you click the "Hide Rules" button, it hides the Rules form and shows the "Show Rules" button.
    $('#hidebtn').click(function() {
      $('#rulesForm').hide();
      $('#showbtn').show();
      $('#hidebtn').hide();
    });
    
    // When you click the "Show Rules" button, it shows the rules form and the "Hide Rules" button and hides the "Show Rules" button.

    $('#showbtn').click(function() {
      $('#rulesForm').show();
      $('#showbtn').hide();
      $('#hidebtn').show();
    });
    
    // When you click "Start playing!", it hides the button, shows the game, sets guesses equal to 0, and generates the number for the game.

    $("#startbtn").click(function() {
      $("#gamebtn").show();
      $("#startbtn").hide();
      $("#submitbtn").show();
      $("#guesses").html("0");
    });

    // When you hit the "Stop playing." button, it clears the results of the game and guess input box, in addition to hiding the game functions and showing the "Start playing!" button.

    $("#stopbtn").click(function() {
      $("#gamebtn").hide();
      $("#startbtn").show();
      $("#results").html("");
      $("#guess").val("");
      clicks = 0;
    });
    //This is our click counter that tells you how many times you've guessed in the game.

    var clicks = 0;
    $("#submitbtn").click(function() {
      clicks++;
      $("#guesses").html(clicks);
    });

    // Generates a non-repeating, random number and stores it in a global variable known as "secret".

    $("#startbtn").click(function() {
      var arr = [];
      while (arr.length < 4) {
        var randomnumber = Math.ceil(Math.random() * 9);
        var found = false;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === randomnumber) {
            found = true;
            break;
          }
        }
        if (!found) arr[arr.length] = randomnumber;
      }
      window.secret = "";
    });
    
    window.game = function() {

      // Stores your guess in a variable

      var guess = $("#guess").val();

      // Makes sure the number is 4 digits

      if (guess.length != 4) {
        alert("This number is too long or short to be valid.");
      }

      // Makes sure the numbers are non-repeating if they're 4 digits.
      else if (guess.charAt(0) === guess.charAt(1) || guess.charAt(0) === guess.charAt(2) || guess.charAt(0) === guess.charAt(3) || guess.charAt(1) === guess.charAt(2) || guess.charAt(1) === guess.charAt(3) || guess.charAt(2) === guess.charAt(3)) {
            alert("This game doesn't have any repeating digits.");
          }
        // This is the actual game.
    else {

    // These two variables will be updated with each guess the user inputs.

    var bulls = 0;
    var cows = 0;

    // This is where JavaScript checks the bulls and cows and adds them up accordingly.

    for (var i = 0; i< guess.length; i++) {
		if(guess.charAt(i) == secret.charAt(i)){
			bulls++;
		}else {
			for (var j = 0; j < guess.length; j++){
				if ((guess.charAt(i) == secret.charAt(j)) && (i !== j)){
					cows++;
				}
			}
		}
		$('#results').html('Bulls: ' + bulls + " & Cows: " + cows + "");
	}if (guess === secret) {
      $("#results").html("<strong>Congrats, you won!</strong>");
      $("#submitbtn").hide();
    }
  }
}