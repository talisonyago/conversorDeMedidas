//menu
function abrirmenu(){
	document.getElementById('menu').style.width = '250px';
	document.getElementById('conteudo').style.marginleft = '250px';
}

function fecharmenu(){
	document.getElementById('menu').style.width = '0px';
	document.getElementById('conteudo').style.marginleft = '0px';
}

//comprimento
var inputcomp = document.getElementById('inputcomp');
var resultcomp = document.getElementById('resultcomp');
var inputcompType = document.getElementById('inputcompType');
var resultcompType = document.getElementById('resultcompType');
var inputcompTypeValue,resultcompTypeValue;

inputcomp.addEventListener("keyup",myResult);
inputcompType.addEventListener("change",myResult);
resultcompType.addEventListener("change",myResult);

inputcompTypeValue = inputcompType.value;
resultcompTypeValue = resultcompType.value;

function myResult(){
	
	inputcompTypeValue = inputcompType.value;
	resultcompTypeValue = resultcompType.value;

	if(inputcompTypeValue == "metro" && resultcompTypeValue =="quilometro"){
		resultcomp.value = Number(inputcomp.value) / 1000;
	}
	else if(inputcompTypeValue == "metro" && resultcompTypeValue == "milimetro"){
		resultcomp.value = Number(inputcomp.value) * 1000;
	}
	else if(inputcompTypeValue == "metro" && resultcompTypeValue == "centimetro"){
		resultcomp.value = Number(inputcomp.value) * 100;
	}
	else if(inputcompTypeValue == "metro" && resultcompTypeValue == "decimetro"){
		resultcomp.value = Number(inputcomp.value) * 10;
	}
	else if(inputcompTypeValue == "metro" && resultcompTypeValue == "metro"){
		resultcomp.value = inputcomp.value
	}
	else if(inputcompTypeValue == "metro" && resultcompTypeValue == "decametro"){
		resultcomp.value = Number(inputcomp.value) / 10;
	}
	else if(inputcompTypeValue == "metro" && resultcompTypeValue == "hectometro"){
		resultcomp.value = Number(inputcomp.value) / 100;
	}


	if(inputcompTypeValue == "quilometro" && resultcompTypeValue =="metro"){
		resultcomp.value = Number(inputcomp.value) * 1000;
	}
	else if(inputcompTypeValue == "quilometro" && resultcompTypeValue == "milimetro"){
		resultcomp.value = Number(inputcomp.value) * 1000000;
	}
	else if(inputcompTypeValue == "quilometro" && resultcompTypeValue == "centimetro"){
		resultcomp.value = Number(inputcomp.value) * 100000;
	}
	else if(inputcompTypeValue == "quilometro" && resultcompTypeValue == "decimetro"){
		resultcomp.value = Number(inputcomp.value) * 10000;
	}
	else if(inputcompTypeValue == "quilometro" && resultcompTypeValue == "quilometro"){
		resultcomp.value = inputcomp.value
	}
	else if(inputcompTypeValue == "quilometro" && resultcompTypeValue == "decametro"){
		resultcomp.value = Number(inputcomp.value) * 100;
	}
	else if(inputcompTypeValue == "quilometro" && resultcompTypeValue == "hectometro"){
		resultcomp.value = Number(inputcomp.value) * 10;
	}

	if(inputcompTypeValue == "centimetro" && resultcompTypeValue =="quilometro"){
			resultcomp.value = Number(inputcomp.value) / 100000;
	}
	else if(inputcompTypeValue == "centimetro" && resultcompTypeValue == "milimetro"){
		resultcomp.value = Number(inputcomp.value) * 10;
	}
	else if(inputcompTypeValue == "centimetro" && resultcompTypeValue == "metro"){
			resultcomp.value = Number(inputcomp.value) / 100;
	}
	else if(inputcompTypeValue == "centimetro" && resultcompTypeValue == "decimetro"){
		resultcomp.value = Number(inputcomp.value) / 10;
	}
	else if(inputcompTypeValue == "centimetro" && resultcompTypeValue == "centimetro"){
			resultcomp.value = inputcomp.value
	}
	else if(inputcompTypeValue == "centimetro" && resultcompTypeValue == "decametro"){
		resultcomp.value = Number(inputcomp.value) / 1000;
	}
	else if(inputcompTypeValue == "centimetro" && resultcompTypeValue == "hectometro"){
		resultcomp.value = Number(inputcomp.value) / 10000;
	}

	if(inputcompTypeValue == "milimetro" && resultcompTypeValue =="quilometro"){
			resultcomp.value = Number(inputcomp.value) / 1000000000;
	}
	else if(inputcompTypeValue == "milimetro" && resultcompTypeValue == "centimetro"){
		resultcomp.value = Number(inputcomp.value) / 10;
	}
	else if(inputcompTypeValue == "milimetro" && resultcompTypeValue == "metro"){
			resultcomp.value = Number(inputcomp.value) / 1000;
	}
	else if(inputcompTypeValue == "milimetro" && resultcompTypeValue == "decimetro"){
		resultcomp.value = Number(inputcomp.value) / 100;
	}
	else if(inputcompTypeValue == "milimetro" && resultcompTypeValue == "milimetro"){
			resultcomp.value = inputcomp.value
	}
	else if(inputcompTypeValue == "milimetro" && resultcompTypeValue == "decametro"){
		resultcomp.value = Number(inputcomp.value) * 10000;
	}
	else if(inputcompTypeValue == "milimetro" && resultcompTypeValue == "hectometro"){
		resultcomp.value = Number(inputcomp.value) * 100000;
	}

	if(inputcompTypeValue == "decimetro" && resultcompTypeValue =="quilometro"){
			resultcomp.value = Number(inputcomp.value) / 10000;
	}
	else if(inputcompTypeValue == "decimetro" && resultcompTypeValue == "centimetro"){
		resultcomp.value = Number(inputcomp.value) * 10;
	}
	else if(inputcompTypeValue == "decimetro" && resultcompTypeValue == "metro"){
			resultcomp.value = Number(inputcomp.value) / 10;
	}
	else if(inputcompTypeValue == "decimetro" && resultcompTypeValue == "milimetro"){
		resultcomp.value = Number(inputcomp.value) * 100;
	}
	else if(inputcompTypeValue == "decimetro" && resultcompTypeValue == "decimetro"){
			resultcomp.value = inputcomp.value
	}
	else if(inputcompTypeValue == "decimetro" && resultcompTypeValue == "decametro"){
		resultcomp.value = Number(inputcomp.value) / 100;
	}
	else if(inputcompTypeValue == "decimetro" && resultcompTypeValue == "hectometro"){
		resultcomp.value = Number(inputcomp.value) / 1000;
	}

	if(inputcompTypeValue == "decametro" && resultcompTypeValue =="quilometro"){
			resultcomp.value = Number(inputcomp.value) / 1000;
	}
	else if(inputcompTypeValue == "decametro" && resultcompTypeValue == "centimetro"){
		resultcomp.value = Number(inputcomp.value) * 1000;
	}
	else if(inputcompTypeValue == "decametro" && resultcompTypeValue == "metro"){
			resultcomp.value = Number(inputcomp.value) * 10;
	}
	else if(inputcompTypeValue == "decametro" && resultcompTypeValue == "milimetro"){
		resultcomp.value = Number(inputcomp.value) * 10000;
	}
	else if(inputcompTypeValue == "decametro" && resultcompTypeValue == "decametro"){
			resultcomp.value = inputcomp.value
	}
	else if(inputcompTypeValue == "decametro" && resultcompTypeValue == "decimetro"){
		resultcomp.value = Number(inputcomp.value) * 100;
	}
	else if(inputcompTypeValue == "decametro" && resultcompTypeValue == "hectometro"){
		resultcomp.value = Number(inputcomp.value) / 10;
	}

	if(inputcompTypeValue == "hectometro" && resultcompTypeValue =="quilometro"){
			resultcomp.value = Number(inputcomp.value) / 10;
	}
	else if(inputcompTypeValue == "hectometro" && resultcompTypeValue == "centimetro"){
		resultcomp.value = Number(inputcomp.value) * 10000;
	}
	else if(inputcompTypeValue == "hectometro" && resultcompTypeValue == "metro"){
			resultcomp.value = Number(inputcomp.value) * 100;
	}
	else if(inputcompTypeValue == "hectometro" && resultcompTypeValue == "milimetro"){
		resultcomp.value = Number(inputcomp.value) * 100000;
	}
	else if(inputcompTypeValue == "hectometro" && resultcompTypeValue == "hectometro"){
			resultcomp.value = inputcomp.value
	}
	else if(inputcompTypeValue == "hectometro" && resultcompTypeValue == "decimetro"){
		resultcomp.value = Number(inputcomp.value) * 1000;
	}
	else if(inputcompTypeValue == "hectometro" && resultcompTypeValue == "decametro"){
		resultcomp.value = Number(inputcomp.value) * 10;
	}



}



