function creaCampos()
{
	var texto=document.getElementById("contenedor_campo");
	var obj_option=document.createElement("input");
	texto.appendChild(obj_option);
	obj_option.onblur=validaNombre;
}
function validaNombre()
{
	var texto=document.getElementsByTagName("input")[0].value;
	if(texto.length>4)
	{
		var alerta=document.getElementById("contenedor_aviso");
		alerta.className="alert alert-success";
		alerta.innerHTML='<strong>CORRECTO El campo cumple las condiciones</strong>bien';
	}
	else
	{
		var incorrecto=document.getElementById("contenedor_aviso");
		incorrecto.className="alert alert-danger";
		incorrecto.innerHTML="<strong>ERROR El campo debe ser de más de 4 carácteres</strong>mal";
	}
}