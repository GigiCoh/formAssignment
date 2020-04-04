function formValidation(){
	var nameInput = document.registration.name;
	var birthInput = document.registration.birthday;
	var nricInput = document.registration.NRIC;
	var mobileInput = document.registration.mobile;
	var email = document.registration.email;

	if(allLetter(nameInput)){
	if(allnumeric(birthInput)){
		if (allnumeric(nricInput)) {
			if(allnumeric(mobileInput)){
				if(emailValidation(email)){}

			}
		}
	}

	}
	return false;


function allLetter(nameInput){
	var letters = /^[A-Za-z]+$/;
	if(nameInput.value.match(letters)){
		return true;
	}else{
		alert('Name must have alphabet characters only');
		nameInput.focus();
		return false;
	}
}

function allnumeric(birthInput){
	var numbers = /^[0-9]+$/;
	if(birthInput.value.match(numbers)){
		return true;
	}else{
		alert('Birthday must have numeric characters only!');
		birthInput.focus();
		return false;

	}
}

function allnumeric(nricInput){
	var numbers = /^[0-9]+$/;
	if(nricInput.value.match(numbers)){
		return true;
	}else{
		alert('NRIC no. must have numeric characters only!');
		nricInput.focus();
		return false;

	}
}

function allnumeric(mobileInput){
	var numbers = /^[0-9]+$/;
	if(mobileInput.value.match(numbers)){
		return true;
	}else{
		alert('Mobile no. must have numeric characters only!');
		mobileInput.focus();
		return false;

	}
}

function emailValidation(email){
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat)){
		return true;
	}else{
		alert('Email is invalid! Please try again!');
		email.focus();
		return false;
	}
}

}
