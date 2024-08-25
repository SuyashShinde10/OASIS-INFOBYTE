document.getElementById('convertBtn').addEventListener('click', function() {
    const tempInput = document.getElementById('tempInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(tempInput) || tempInput === '') {
        resultDiv.textContent = 'Please enter a valid number';
        return;
    }

    const temp = parseFloat(tempInput);
    let convertedTemp;

    if (unitInput === 'Celsius') {
        convertedTemp = `Fahrenheit: ${(temp * 9/5) + 32} °F | Kelvin: ${temp + 273.15} K`;
    } else if (unitInput === 'Fahrenheit') {
        convertedTemp = `Celsius: ${(temp - 32) * 5/9} °C | Kelvin: ${(temp - 32) * 5/9 + 273.15} K`;
    } else if (unitInput === 'Kelvin') {
        convertedTemp = `Celsius: ${temp - 273.15} °C | Fahrenheit: ${(temp - 273.15) * 9/5 + 32} °F`;
    }

    resultDiv.textContent = convertedTemp;
});
