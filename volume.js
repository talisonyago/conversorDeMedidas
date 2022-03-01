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
var inputvol = document.getElementById('inputvol');
var resultvol = document.getElementById('resultvol');
var inputvolType = document.getElementById('inputvolType');
var resultvolType = document.getElementById('resultvolType');
var inputvolTypeValue,resultvolTypeValue;

inputvol.addEventListener("keyup",volume);
inputvolType.addEventListener("change",volume);
resultvolType.addEventListener("change",volume);

inputvolTypeValue = inputvolType.value;
resultvolTypeValue = resultvolType.value;

function volume(){
	
	inputvolTypeValue = inputvolType.value;
	resultvolTypeValue = resultvolType.value;
	//metro_cubico
	if(inputvolTypeValue == "metro_cubico" && resultvolTypeValue =="decimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000;
	}
	if(inputvolTypeValue == "metro_cubico" && resultvolTypeValue =="centimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000;
	}
	if(inputvolTypeValue == "metro_cubico" && resultvolTypeValue =="milimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000;
	}
	if(inputvolTypeValue == "metro_cubico" && resultvolTypeValue =="metro_cubico"){
		resultvol.value = inputvol.value;
	}
	if(inputvolTypeValue == "metro_cubico" && resultvolTypeValue =="decametro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000;
	}
	if(inputvolTypeValue == "metro_cubico" && resultvolTypeValue =="hectometro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000000;
	}
	if(inputvolTypeValue == "metro_cubico" && resultvolTypeValue =="quilometro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000000000;
	}
	//decametro_cubico
	if(inputvolTypeValue == "decametro_cubico" && resultvolTypeValue =="decimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000;
	}
	if(inputvolTypeValue == "decametro_cubico" && resultvolTypeValue =="centimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000;
	}
	if(inputvolTypeValue == "decametro_cubico" && resultvolTypeValue =="milimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000000;
	}
	if(inputvolTypeValue == "decametro_cubico" && resultvolTypeValue =="metro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000;
	}
	if(inputvolTypeValue == "decametro_cubico" && resultvolTypeValue =="decametro_cubico"){
		resultvol.value = inputvol.value;
	}
	if(inputvolTypeValue == "decametro_cubico" && resultvolTypeValue =="hectometro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000;
	}
	if(inputvolTypeValue == "decametro_cubico" && resultvolTypeValue =="quilometro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000000;
	}
	//hectometro_cubico
	if(inputvolTypeValue == "hectometro_cubico" && resultvolTypeValue =="decimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000;
	}
	if(inputvolTypeValue == "hectometro_cubico" && resultvolTypeValue =="centimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000000;
	}
	if(inputvolTypeValue == "hectometro_cubico" && resultvolTypeValue =="milimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000000000;
	}
	if(inputvolTypeValue == "hectometro_cubico" && resultvolTypeValue =="metro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000;
	}
	if(inputvolTypeValue == "hectometro_cubico" && resultvolTypeValue =="decametro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000;
	}
	if(inputvolTypeValue == "hectometro_cubico" && resultvolTypeValue =="hectometro_cubico"){
		resultvol.value = inputvol.value;
	}
	if(inputvolTypeValue == "hectometro_cubico" && resultvolTypeValue =="quilometro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000;
	}
	//quilometro_cubico
	if(inputvolTypeValue == "quilometro_cubico" && resultvolTypeValue =="decimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000000;
	}
	if(inputvolTypeValue == "quilometro_cubico" && resultvolTypeValue =="centimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000000000;
	}
	if(inputvolTypeValue == "quilometro_cubico" && resultvolTypeValue =="milimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000000000000;
	}
	if(inputvolTypeValue == "quilometro_cubico" && resultvolTypeValue =="metro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000;
	}
	if(inputvolTypeValue == "quilometro_cubico" && resultvolTypeValue =="decametro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000;
	}
	if(inputvolTypeValue == "quilometro_cubico" && resultvolTypeValue =="hectometro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000;
	}
	if(inputvolTypeValue == "quilometro_cubico" && resultvolTypeValue =="quilometro_cubico"){
		resultvol.value = inputvol.value;
	}
	//decimetro
	if(inputvolTypeValue == "decimetro_cubico" && resultvolTypeValue =="decimetro_cubico"){
		resultvol.value = inputvol.value;
	}
	if(inputvolTypeValue == "decimetro_cubico" && resultvolTypeValue =="centimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000;
	}
	if(inputvolTypeValue == "decimetro_cubico" && resultvolTypeValue =="milimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000;
	}
	if(inputvolTypeValue == "decimetro_cubico" && resultvolTypeValue =="metro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000;
	}
	if(inputvolTypeValue == "decimetro_cubico" && resultvolTypeValue =="decametro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000000;
	}
	if(inputvolTypeValue == "decimetro_cubico" && resultvolTypeValue =="hectometro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000;
	}
	if(inputvolTypeValue == "decimetro_cubico" && resultvolTypeValue =="quilometro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000000;
	}
	//centimetro
	if(inputvolTypeValue == "centimetro_cubico" && resultvolTypeValue =="decimetro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000;
	}
	if(inputvolTypeValue == "centimetro_cubico" && resultvolTypeValue =="centimetro_cubico"){
		resultvol.value = inputvol.value;
	}
	if(inputvolTypeValue == "centimetro_cubico" && resultvolTypeValue =="milimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000;
	}
	if(inputvolTypeValue == "centimetro_cubico" && resultvolTypeValue =="metro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000000;
	}
	if(inputvolTypeValue == "centimetro_cubico" && resultvolTypeValue =="decametro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000000000;
	}
	if(inputvolTypeValue == "centimetro_cubico" && resultvolTypeValue =="hectometro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000000;
	}
	if(inputvolTypeValue == "centimetro_cubico" && resultvolTypeValue =="quilometro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000000000;
	}
	//milimetro
	if(inputvolTypeValue == "milimetro_cubico" && resultvolTypeValue =="decimetro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000000;
	}
	if(inputvolTypeValue == "milimetro_cubico" && resultvolTypeValue =="centimetro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000;
	}
	if(inputvolTypeValue == "milimetro_cubico" && resultvolTypeValue =="milimetro_cubico"){
		resultvol.value = inputvol.value;
	}
	if(inputvolTypeValue == "milimetro_cubico" && resultvolTypeValue =="metro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000000000;
	}
	if(inputvolTypeValue == "milimetro_cubico" && resultvolTypeValue =="decametro_cubico"){
		resultvol.value = Number(inputvol.value) / 1000000000000;
	}
	if(inputvolTypeValue == "milimetro_cubico" && resultvolTypeValue =="hectometro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000000000;
	}
	if(inputvolTypeValue == "milimetro_cubico" && resultvolTypeValue =="quilometro_cubico"){
		resultvol.value = Number(inputvol.value) * 1000000000000000000;
	}
	
}



