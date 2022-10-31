// console.log("hey");

var getbtnmodal = document.getElementById("btn-modal");
var getmodalbox = document.getElementById("loginmodal");
var getbtnclose = document.querySelector(".btn-close");

getbtnmodal.addEventListener('click',openmodal);

getbtnclose.addEventListener('click',closemodal);

window.onclick = function(e){
	if(e.target === getmodalbox){
		closemodal();
	}
	// console.log(e.target);
}

function openmodal(){
	getmodalbox.style.display = "block";	
}

function closemodal(){
	getmodalbox.style.display = "none";
}

