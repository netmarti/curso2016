/* funciones del formulario*/

function validaForm(){
	
	var txtNom = document.getElementById("idNombre");
	var txtEml = document.getElementById("idEmail");
	var txtAsn = document.getElementById("idAsunto");
	var txtMsj = document.getElementById("idMensaje");
	
	var errNom = document.getElementById("avisoNombre");
	var errEml = document.getElementById("avisoEmail");
	var errAsn = document.getElementById("avisoAsunto");
	var errMsj = document.getElementById("avisoMensaje");
	
	var control = true;
	
	
	if(txtNom.value ==""){
		
		control = false;
		errNom.innerHTML = "Campo necesario";
		txtNom.style.backgroundColor = "#fcc";
	} else {
		
		errNom.innerHTML = "";
		txtNom.style.backgroundColor = "#fff";
	}
	
	// validando el Email
	
	if(txtEml.value ==""){
		
		control = false;
		errEml.innerHTML = "Campo necesario";
		txtEml.style.backgroundColor = "#fcc";
	} 
	
	else if(validaEmail(txtEml.value) == false) {
		control = false;
		errEml.innerHTML = "Formato incorrecto";
		txtEml.style.backgroundColor = "#fcc";
	} 
	
	else {
		errEml.innerHTML = "";
		txtEml.style.backgroundColor = "#fff";
	}



// verificamos que el formato del email sea correcto

function validaEmail(p){
	
	var control = true;
	
	if (p.indexOf("@") <= 0){
		control = false;
	}
	
	if (p.lastIndexOf(".") <= p.indexOf("@")){
		control = false;
	}
	
	return control; // devuelve true si el formato es correcto o false
}

// validamos el asunto

	if(txtAsn.value ==""){
		
		control = false;
		errAsn.innerHTML = "Campo necesario";
		txtAsn.style.backgroundColor = "#fcc";
	} 
	
	// validamos el asunto

	if(txtAsn.value ==""){
		
		control = false;
		errAsn.innerHTML = "Campo necesario";
		txtAsn.style.backgroundColor = "#fcc";
	}
	else {
		errAsn.innerHTML = "";
		txtAsn.style.backgroundColor = "#fff";
	}	
	
	// validamos el mensaje

	if(txtMsj.value ==""){
		
		control = false;
		errMsj.innerHTML = "Campo necesario";
		txtMsj.style.backgroundColor = "#fcc";
	}
	else {
		errMsj.innerHTML = "";
		txtMsj.style.backgroundColor = "#fff";
	}
	
	if (control){
		
		document.getElementById("formContacto").submit();
	}
	

}	