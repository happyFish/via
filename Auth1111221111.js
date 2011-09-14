var Auth1111221111{
	
}

Auth1111221111.checkAccount(id, pw, fnCallback){
	var isValid = false;
	
	/*Do a post to the server, check validity of the login info */
	
	
	if(id=='1' && pw == '1')
		isValid = true;
	
	if (isValid) {
		fnCallback ('TRUE');
	}
	else {
		fnCallback ('FALSE');
	}
}