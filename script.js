$(document).ready(function(){

  var location;
  var newloc;
  $.getJSON('https://ipinfo.io', function(data){
  location = data.loc;
  newloc = location.split(",");

   $.getJSON('https://api.openweathermap.org/data/2.5/weather?units=imperial&lat='+ newloc[0] +'&lon='+newloc[1]+'&APPID=0ddc1512c4043e75157a77f42687afd3',function(wd){

     var currentLocation = wd.name;
     var currentWeather = wd.weather[0].description;
     var currentTemp = wd.main.temp;
     var high = wd.main.temp_max;
     var low = wd.main.temp_min;
     var icon = wd.weather[0].icon;
     var celcius = (currentTemp - 32)*(5/9);
     celcius = celcius.toFixed(2) + " C";
     currentTemp = currentTemp+" F";
     $('#currentLoc').html(currentLocation);
     $('#temp').html(currentTemp);
     $('#low').html(low);
     $('#high').html(high);
     $("#low").prepend("<span>Min Temp</span> ");
      $("#high").prepend("<span>Max Temp</span> ");

     $('#currentWeather').html(currentWeather);
     var iconsrc = "http://openweathermap.org/img/w/"+icon+".png";
     $('#image').html('<img src = "'+iconsrc+'">');

     $('#changetemp').html(celcius);
  
      $('#changtemp').prepend('<img src = "'+iconsrc+'">');
     $("#changetemp").click(function () {
       var text = $('#changetemp').text();
       $(this).text(text == currentTemp ? celcius : currentTemp);
    });
   })
})


});
