function recogerDatos(form){
	let genero=form.genero.value;
	let edad=Number(form.edad.value);
	let altura=Number(form.altura.value);
	let resultado;
	if(genero=="Hombre"){
		resultado=eval(50+((altura-150)/4)*3 + (edad - 20)/4);
		}
	else if(genero=="Mujer"){
		resultado=eval((50+((altura-150)/4)*3 + (edad - 20)/4)*0.9);
	}
	else{
		resultado="No indico correctamente el genero"
	}
	alert("Su peso ideal es: "+resultado)
}
