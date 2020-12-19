

function FieldCheck (){
	var input = document.getElementById('length1').value;
	if (input.length <3){
		document.getElementById('message_name').innerHTML='Name must be more than 3 characters'
	}
}


function FieldCheckSurname (){
	var input = document.getElementById('length2').value;
	if (input.length <3){
		document.getElementById('message_name').innerHTML='Surname must be more than 3 characters'
	}
}

function DeleteMessage() {
	var input = document.getElementById('length1').value;
	var input2 = document.getElementById('length2').value;
	if (input.length >3 && input2.length >3){
		document.getElementById('message_name').innerHTML=''
	}
	// body...
}

function PasswordCheck(){
	var password1 = document.getElementById('p1').value;
	var password2 = document.getElementById('p2').value;
	if (password1 != password2){
		document.getElementById('message_name').innerHTML = 'Passwords must be identical.'
	}
}