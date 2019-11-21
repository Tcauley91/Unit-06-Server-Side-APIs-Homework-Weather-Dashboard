// use .trim in search box
// api key = a1967ad6a011416ee7364b502a79105c
/* <h5 class="city-title">City</h5>
<div class="temp"></div>
<div class="humidity"></div>
<div class="wind"></div>
<div class="uvindex"></div> */


// on click function to trigger ajax call

$("#find-city").on("click", function(event){
    event.preventDefault();

    let city = $("#city-input").val().trim();
    // API Key
    let APIKey = "a1967ad6a011416ee7364b502a79105c";
    // queryURL with search parameters and APPID
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=" + APIKey;

// ajax function for retreiving information

      $.ajax({
        url: queryURL,
        method: "GET"
      })

// store all retreived data in an object called "response"

.then(function(response){
    // $(".temp").text(JSON.stringify(response.name));
    $(".city-title").html("<h5>" + response.name  + "</h5>");
    $(".temp").text("Tepmprature (F) " + response.main.temp);
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".wind").text("Wind Speed: " + response.wind.speed);


    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    $(".tempf").text("Temperature (Kelvin) " + tempF);


    // console log url and responses to ensure it works
   console.log(response);
   console.log("Temperature (F): " + response.main.temp);
});

// Send content into HTML 
// $(".city-title").html("<h5>" + response.name + "Date</h5>");

});






