$(document).ready(function(){

  var annualCost = 1550000
  var startDate = new Date('2016/08/01')
  var costPerSecond = annualCost/365/24/60/60

  var update = function(){
    var now = new Date()
    var dif = now.getTime() - startDate.getTime()
    var secondsBetween = Math.abs(dif/1000)
    var newCost = costPerSecond * secondsBetween
    $(".calculator").find(".rolling-amount").text(convertToCurrency(newCost) + " + $12,000,000 =")
    $(".calculator").find(".with-12-mil").text(convertToCurrency(newCost + 12000000))
  }
  setInterval(update, 1000)

})


var convertToCurrency = function(dollarsAsInteger){
  dollarsAsInteger = dollarsAsInteger.toFixed(2)
  var wholeNum = dollarsAsInteger.split(".")[0].split("")
  var numTimesDo = wholeNum.length
  var timesDoneBefore = 0
  for(var i = 1; i < numTimesDo/3; i ++){
    var index = wholeNum.length - (3 * i) - timesDoneBefore
    wholeNum.splice(index, 0, ",")
    timesDoneBefore += 1
  }
  wholeNum = wholeNum.join("")
  return "$" + wholeNum + "." +dollarsAsInteger.split(".")[1]
}