const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	Fname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, 
	Lname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	address: /^[a-zA-Z0-9\_\-]{0,6}$/, 
	credit_cardVisa: /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/,  //Visa
    credict_cardMaster: /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/,  //Mastercard,
    credict_cardAmerican: /^3[47][0-9]{13}$/,
    exp_date: /^\d{1,2}+/+/{1,2}+$/,
	phone: /^\d{7,14}$/ //
}

const campos = {
	Fname: false,
	Lname: false,
	address: false,
	credit_card: false,
	exp_date: false,
    phone:false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "Fname":
			validarCampo(expresiones.Fname, e.target, 'Fname');
		break;
		case "Lname":
			validarCampo(expresiones.Lname, e.target, 'Lname');
		break;
		case "address":
			validarCampo(expresiones.address, e.target, 'address');
			
		break;
		
		case "credit_card":
			validarCampo(expresiones.credit_card, e.target, 'credit_card');
		break;
		case "phone":
			validarCampo(expresiones.phone, e.target, 'phone');
		break;
        case "exp_date":
			validarCampo(expresiones.exp_date, e.target, 'exp_date');
		break;
		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('button', (e) => {
	e.preventDefault();

	if(campos.Fname && campos.Lname && campos.address && campos.phone && campos.credit_card && terminos.exp_date ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});
function prueba(){
      
    var total= 0;
    var suma = 0;
    var Hamburgesa= 5;
    var Pizza = 10;
    var Soda = 1;
    var FriedChicken = 7;
    
    if(document.getElementById("chb_0").checked ==true){
        var quantity = document.getElementById("Iquantity").value;
        Hamburgesa= Hamburgesa *quantity;
        suma = suma + Hamburgesa;
    }
    if(document.getElementById("chb_1").checked ==true){
        var quantity = document.getElementById("Iquantity1").value;
        Pizza= Pizza *quantity;
        suma = suma + Pizza;
    }
    if(document.getElementById("chb_2").checked ==true){
        var quantity = document.getElementById("Iquantity2").value;
        FriedChicken= FriedChicken *quantity;
        suma = suma + FriedChicken;
    }
    if(document.getElementById("chb_3").checked ==true){
        var quantity = document.getElementById("Iquantity3").value;
        Soda= Soda *quantity;
        suma = suma + Soda;
    }
    
    total = suma;
    document.getElementById("Total").innerHTML = total;
    

}
function refrescar(){
    formulario.reset();
}


/*
function checkMe(){
    
    var item0 = document.getElementById(chb_0);
    var item1 = document.getElementById(chbItem_1).checked;
    var item2= document.getElementById(chbItem_2).value;
    var item3 = document.getElementById(chbItem_3).value;
    var total= 0;
    var suma = 0;
    var Hamburgesa = 5;
    var Pizza = 10;
    var FriedChicken =7;

    alert("alerta antes de dondiciones")
    if(item0.checked == true){
        alet("EL neuvo alternt que esta con e itme")
    }
    if(document.getElementById(chb_0).checked){
        alert("Seleccionado")
        suma = suma + Hamburgesa
    }
    var checkbox = document.getElementById('item_0');
    checkbox.addEventListener("change", validaCheckbox, false);
    function validaCheckbox()
    {
      var checked = checkbox.checked;
      if(checked){
        alert('checkbox1 esta seleccionado');
      }
    }
    alert("antes del total");
    suma = suma + Hamburgesa;
    total = suma;
    document.getElementById("Total").innerHTML = total;
}*/
