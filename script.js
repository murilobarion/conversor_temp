function convertCelsiusToFahrenheit() {
    const convertF = document.getElementById("celsiusParaFahrenheit")
    const convertC = document.getElementById("fahrenheitParaCelsius")

    const temp = document.getElementById("valor").value

    if (convertF.checked) {
        let fahrenheit = (temp * (9/5)) + 32
        document.getElementById("resultado").textContent = "Resultado: " + fahrenheit + "°F"
    }

    else if (convertC.checked) {
        let celsius = (temp - 32) * 5/9
        document.getElementById("resultado").textContent = "Resultado: " + celsius + "°C"
    }

    else {
        window.alert("Selecione uma opção")
    }
}