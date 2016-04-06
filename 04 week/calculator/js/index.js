// Target the div with id="do-something", run the displayMessage function when someone clicks the div.
$('#do-something').click(displayMessage)

function displayMessage(){
  // Pop up an alert:
  alert('You clicked the "DO SOMETHING" button')

  // Hide or show the div with id="blueBox"
  $('#blueBox').slideToggle()
}

// Make it so if you click on any box, it hides that box using the .hide() jQuery method.

// Optional: Read about and play around with some other jQuery methods like .css() and .show(). http://api.jquery.com
