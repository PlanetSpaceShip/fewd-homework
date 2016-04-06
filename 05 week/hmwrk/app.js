$(document).ready(function() {
  $(".readmore").click(showAdditionalText)
  $(".readless").click(hideAdditionalText)

function showAdditionalText(){
  console.log(this)
  $("#show-this-on-click").slideDown()
  $(".readmore").hide()
  $(".readless").show()
  event.preventDefault()
}

$('a').on('click',function(e){
    $(this).fadeOut(500);
    event.preventDefault()
});


});
