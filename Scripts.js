function convertTemperature() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let convertFrom = document.getElementById("convertFrom").value;
    let convertTo = document.getElementById("convertTo").value;

    if (isNaN(temperature)) {
        alert("Please enter a valid number.");
        return;
    }

    let result;

    // Conversion logic
    if (convertFrom === convertTo) {
        result = temperature;
    } else if (convertFrom === "Celsius") {
        if (convertTo === "Fahrenheit") {
            result = (temperature * 9/5) + 32;
        } else if (convertTo === "Kelvin") {
            result = temperature + 273.15;
        }
    } else if (convertFrom === "Fahrenheit") {
        if (convertTo === "Celsius") {
            result = (temperature - 32) * 5/9;
        } else if (convertTo === "Kelvin") {
            result = ((temperature - 32) * 5/9) + 273.15;
        }
    } else if (convertFrom === "Kelvin") {
        if (convertTo === "Celsius") {
            result = temperature - 273.15;
        } else if (convertTo === "Fahrenheit") {
            result = ((temperature - 273.15) * 9/5) + 32;
        }
    }

    document.getElementById("result").innerHTML = `Converted Temperature: ${result.toFixed(2)} °${convertTo}`;
}
