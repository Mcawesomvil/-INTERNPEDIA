function convertTemperature() {
    var temperatureInput = document.getElementById("temperatureInput").value;
    var unit = document.querySelector('option[name="unit"]:checked').value;
    var convertedTemperature;
  
    if (unit === "celsius") {
      convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
      document.getElementById("convertedTemperature").innerHTML = `${temperatureInput}°C is ${convertedTemperature.toFixed(2)}°F`;
    } else {
      convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
      document.getElementById("convertedTemperature").innerHTML = `${temperatureInput}°F is ${convertedTemperature.toFixed(2)}°C`;
    }
    
  }
  