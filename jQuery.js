// use .trim in search box
// api key = a1967ad6a011416ee7364b502a79105c


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

      // For each to generate previous searched city.


// store all retreived data in an object called "response"

.then(function(response){

     // console log url and responses to ensure it works
     console.log(response);
     console.log("Temperature (F): " + response.main.temp);

    let imgUrl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    let img= $("<img>").attr("src", imgUrl);
    let card = $("<div>").addClass("card");
    let content = $("<div>").addClass("card-body");
    let city =  $("<div>").html("<h5>" + response.name + moment().format(" L ")).append(img);
    let temp = $("<div>").text("Tepmprature (F) " + response.main.temp);
    let humidity = $("<div>").text("Humidity: " + response.main.humidity);
    let wind = $("<div>").text("Wind Speed: " + response.wind.speed);
    let tempF = (response.main.temp - 273.15) * 1.80 + 32;
    $(".tempf").text("Temperature (Kelvin) " + tempF);

  // set all content to body of HTML
    content.append(city, temp, humidity, wind);
    card.append(content);
    $(".col-lg-8").prepend(card);


});

});







