function calcularImc() {


	var peso = document.getElementById('peso').value
	var altura = document.getElementById('altura').value

	var resultado = peso / altura ** 2;

	 document.querySelector("#imc").innerText = `Seu imc é: ${resultado.toFixed(2)}`

	// var classificacao = document.querySelector("#classificacao").innerText = `Sua classificação é: `


	if (resultado < 18.5) {
		return document.querySelector("#classificacao").innerText = `Sua classificação é: Magreza!`
	}
	else if (resultado > 18.5 && resultado <= 24.9) {
		return document.querySelector("#classificacao").innerText = `Sua classificação é: Normal`
	}
	else if (resultado > 25.0 && resultado <= 29.9) {
		return document.querySelector("#classificacao").innerText = `Sua classificação é: Sobrepeso`
	}
	else if (resultado > 30.0 && resultado <= 39.9) {
		return document.querySelector("#classificacao").innerText = `Sua classificação é: Obesidade`
	}
	else if (resultado > 40.0) {
		return document.querySelector("#classificacao").innerText = `Sua classificação é: Obesidade Grave!`
	};




}