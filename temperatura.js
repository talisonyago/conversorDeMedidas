//menu
function abrirmenu(){
	document.getElementById('menu').style.width = '250px';
	document.getElementById('conteudo').style.marginleft = '250px';
}

function fecharmenu(){
	document.getElementById('menu').style.width = '0px';
	document.getElementById('conteudo').style.marginleft = '0px';
}


//temperatura
var inputtemp = document.getElementById('inputtemp');
var resulttemp = document.getElementById('resulttemp');
var inputtempType = document.getElementById('inputtempType');
var resulttemType = document.getElementById('resulttempType');
var inputtempTypeValue,resulttempTypeValue;

inputtemp.addEventListener("keyup",converterTemperatura);
inputtempType.addEventListener("change",converterTemperatura);
resulttempType.addEventListener("change",converterTemperatura);

inputtempTypeValue = inputtempType.value;
resulttempTypeValue = resulttempType.value;

function converterTemperatura(){
	
	inputtempTypeValue = inputtempType.value;
	resulttempTypeValue = resulttempType.value;

	if(inputtempTypeValue == "celsius" && resulttempTypeValue =="fahrenheit"){
		resulttemp.value =  (Number(inputtemp.value) * 9/5) + 32
	}
	if(inputtempTypeValue == "celsius" && resulttempTypeValue =="kelvin"){
		resulttemp.value = Number(inputtemp.value) + 273.15
	}
	if(inputtempTypeValue == "celsius" && resulttempTypeValue =="celsius"){
		resulttemp.value = inputtemp.value
	}

	if(inputtempTypeValue == "fahrenheit" && resulttempTypeValue =="celsius"){
		resulttemp.value = (Number(inputtemp.value) - 32) * 5/9
	}
	if(inputtempTypeValue == "fahrenheit" && resulttempTypeValue =="kelvin"){
		resulttemp.value = (Number(inputtemp.value)-32) * 5/9 + 273.15
	}
	if(inputtempTypeValue == "fahrenheit" && resulttempTypeValue =="fahrenheit"){
		resulttemp.value = inputtemp.value
	}

	if(inputtempTypeValue == "kelvin" && resulttempTypeValue =="fahrenheit"){
		resulttemp.value = (Number(inputtemp.value)-273.15) * 9/5 + 32
	}
	if(inputtempTypeValue == "kelvin" && resulttempTypeValue =="celsius"){
		resulttemp.value = Number(inputtemp.value)-273.15
	}
	if(inputtempTypeValue == "kelvin" && resulttempTypeValue =="kelvin"){
		resulttemp.value = inputtemp.value
	}
	

}