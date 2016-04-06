$(document).ready(function(){

  // alert("Wait dont leave this page yet, click here for a special offer")
  $("h1").click(
    function() {
      alert("You clicked the headline")
    })

// var color = prompt("What color?")
  // console.log(color)
  //
  // color = "purple"
  // console.log(color)

  var firstNum = 1
  var secondNum = 1
  var product = firstNum * secondNum
  console.log("Your total is: ")
  // console.log(product)
  document.write(product)


  if( answer == 1 ){
    alert("Woohoo!! The answer is one!!!!")
  }

  if( lightSwitch == true ){
      alert("The lights are on")
  }else{
      alert("The lights are OFF`")
  }

});
