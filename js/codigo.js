/* ---        FRENO EL FORM          ---*/

document.getElementById("formu").onsubmit = function()
{
	return false;
}

/* ---          BUSCO LOS INPUT       --- */

var codigo = document.getElementById("codigo");
var nombre = document.getElementById("nombre");
var nota = document.getElementById("nota");

/* ---           BUSCO LOS BUTTON     --- */

var btn_registrar = document.getElementById("registrar");
var btn_promedio = document.getElementById("promedio");
var btn_mayor = document.getElementById("mayor");
var btn_menor = document.getElementById("menor");

/* ---           EVENTOS eventslistener ---*/

btn_registrar.addEventListener("click",registrar);
btn_promedio.addEventListener("click",promedio);
btn_mayor.addEventListener("click",mayor);
btn_menor.addEventListener("click",menor);

/* -----  Variables Globales  ----- */

var json_alumnos = [];
var msj = document.getElementById("mensaje");
var datos = document.getElementById("datos");

/* -----  FUNCIONES  ------- */

function menor()
{
	var menor = 11;
	var nombre = "";
	if(json_alumnos.length > 0)
	{
		for(var k = 0 ; k < json_alumnos.length ; k++)
		{
			if(json_alumnos[k].nota < menor)
			{
				menor = json_alumnos[k].nota;
				nombre = json_alumnos[k].nombre;
			}
		}
		alert("Menor nota: " + menor + "\n Alumno: " + nombre);
	}
	else
	{
		alert("No agregaste alumnos aun.")
	}

}

function mayor()
{
	var mayor = 0;
	var nombre = "";
	if(json_alumnos.length > 0)
	{
		for(var k = 0 ; k < json_alumnos.length ; k++)
		{
			if(json_alumnos[k].nota > mayor)
			{
				mayor = json_alumnos[k].nota;
				nombre = json_alumnos[k].nombre;
			}
		}
		alert("Mayor nota: " + mayor + "\n Alumno: " + nombre);
	}
	else
	{
		alert("No agregaste alumnos aun.")
	}

}

function promedio()
{
	var promedio;
	var suma = 0;
	if(json_alumnos.length > 0 )
	{	
		for(var j = 0 ; j < json_alumnos.length ; j++)
		{
			suma += json_alumnos[j].nota;
		}
		promedio = suma / json_alumnos.length;
		alert("El promedio de notas es: " + promedio);
	}
	else
	{
		alert("No agregaste alumnos aun.")
	}
}

function registrar()
{

	var codigo1 = codigo.value;
	var nombre1 = nombre.value;
	var nota1 = parseFloat(nota.value);
	var estado1;
	var estado2;
	var estado3;
	msj.innerHTML = "";

	if(validar1(codigo1))
	{
		estado1 = true;
	}
	else
	{
		msj.innerHTML += "Campo codigo obligatorio <br>";
		msj.style.color = "#FA5858";
		estado1 = false;
	}
	if(validar1(nombre1))
	{
		estado2 = true;
	}
	else
	{
		msj.innerHTML += "Campo nombre obligatorio <br>";
		msj.style.color = "#FA5858";
		estado2 = false;
	}
	if(validar_nota(nota1))
	{
		estado3 = true;
	}
	else
	{
		msj.innerHTML += "Campo nota obligatorio. Solo caracteres numericos entre 1 y 10<br>";
		msj.style.color = "#FA5858";
		estado3 = false;
	}

	console.log(estado1);
	console.log(estado2);
	console.log(estado3);
	
	if( estado1 && estado2 && estado3)
	{
		var objeto = {
		"codigo":codigo1,
		"nombre":nombre1,
		"nota":nota1
		}
		json_alumnos.push(objeto);
		msj.innerHTML = "Alumno agregado correctamente!";
		msj.style.color = "#01DF01";
		codigo.value = "";
		nombre.value = "";
		nota.value = "";

		datos.innerHTML = "";
		for(var i = 0 ; i < json_alumnos.length ; i++)
		{
			var tr = document.createElement("tr");
			for(x in json_alumnos[i])
			{
				var td = document.createElement("td");
				td.innerHTML = json_alumnos[i][x];
				tr.appendChild(td);
				console.log(json_alumnos[i][x]);
			}
			datos.appendChild(tr);
		}

	}
	
}

function validar1(campo)
{
	if(campo == "")
	{
		return false;
	}
	else
	{
		return true;
	}
}
function validar_nota(nota)
{
	if(nota != "" && !isNaN(nota))
	{
		if(nota > 0 && nota < 11)
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	else
	{
		return false;
	}
}