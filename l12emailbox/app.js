const getemail = document.getElementById('emails');
const gettext = document.querySelector('textarea');
const getbtn = document.querySelector('.btn');
const getemcontainer = document.querySelector('.email-container');

getemail.focus();
getemail.addEventListener('keyup',function(e){
	createemaillist(e.target.value);
});

function createemaillist(inputtext){
	// console.log(inputtext);

	// split by(",")
	// const eitems = inputtext.split(",");
	// console.log(eitems);

	// remove(space) and remove empty
	// const eitems = inputtext.split(",").filter(rmempt => rmempt.trim() !== '');

	// remove space/empty	
	const eitems = inputtext.split(',').filter(rmempt => rmempt.trim() !== '').map(rmempt => rmempt.trim());

	getemcontainer.innerHTML = '';

	eitems.forEach(function(eitem){
		// console.log(eitem);
		const setnewspan = document.createElement('span');
		setnewspan.className = "email-item";
		setnewspan.innerText = eitem;
		// console.log(setnewspan);
		getemcontainer.appendChild(setnewspan);

	});
}	


getbtn.addEventListener('click',function(e){
	sendemail();
	e.preventDefault();
});

function sendemail(){
	var gettextval = gettext.value;
	var getspans = document.querySelectorAll('.email-item');
	// console.log(gettextval);
	// console.log(getspans);

	var persons = [];


	if(getspans.length > 0 && gettextval){
		getspans.forEach(function(getspan){
			persons.push({
				email : getspan.innerText,
				message : gettextval
			});
		});
		console.log(persons);

	}else{
		window.alert("Enter Message ...");
		gettext.focus();
	}
}