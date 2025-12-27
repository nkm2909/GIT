function sendMail(){
	let parms = {
		name : document.getElementById("name").value,
		email : document.getElementById("email").value,
		Subject : document.getElementById("subject").value,
		message : document.getElementById("message").value,
}
emailjs.send("service_reyc3vj","template_yjxpj4r",parms.then(alert("email sent!!"))
}
