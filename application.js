$(document).ready(function(){
  $(".dollar-amount").hide()
  $(".text-amount").hover(
    function(){
      ($(this).find($(".dollar-amount"))).show()
    })

  var annualCost = 1550000
  var startDate = new Date('08 01 2016')
  var costPerSecond = annualCost/365/24/60/60

  var update = function(){
    var now = new Date()
    var dif = now.getTime() - startDate.getTime()
    var secondsBetween = Math.abs(dif/1000)
    var currentCost = "$" + (costPerSecond * secondsBetween).toFixed(2)
    $(".calculator").find(".rolling-dollar-amount").text(currentCost)
  }
  setInterval(update, 1000)

})