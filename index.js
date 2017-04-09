function step(){
  var now = new Date()
  
  var hours = now.getHours()
  var minutes = now.getMinutes()
  var seconds = now.getSeconds()
  
  if(hours>12){
    hours -= 12
  }
  
  var secondDeg = seconds / 60 * 360
  var minuteDeg = (minutes * 60 +seconds)/3600 * 360
  var hourDeg = (hours * 3600 + minutes * 60 + seconds) / (12 * 3600) * 360
  
document.querySelector('#sec').style.transform = `rotate(${secondDeg}deg)`

document.querySelector('#min').style.transform = `rotate(${minuteDeg}deg)`  

document.querySelector('#hour').style.transform = `rotate(${hourDeg}deg)`
}

setInterval(function(){
  step()
},1000)


