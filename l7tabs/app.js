// console.log("hey");

var gettablinks = document.getElementsByClassName("tablinks"); // HTML Collection
var gettabpanes = document.getElementsByClassName("tab-pane"); // HTML Collection
var getbtncloses = document.querySelectorAll(".btn-close"); // NodeList


console.log(typeof(gettabpanes)); // object

var tabpanes = Array.from(gettabpanes);


function gettab(evn,listid){

	// console.log(evn.target);
	// console.log(listid);

	// Method 1 
	// --------
	// for(var x=0; x<gettabpanes.length; x++){
	// 	// console.log(x);
	// 	gettabpanes[x].style.display = "none";
	// }

	// Method 1 
	// --------
	tabpanes.forEach(function(tabpane){
		// console.log(tabpane);
		tabpane.style.display = "none";
	});


	// for active
	for(var y=0; y<gettablinks.length; y++){
		// gettablinks[y].classList.remove('active');
		gettablinks[y].className = gettablinks[y].className.replace(' active','');

		// for btn-close
		getbtncloses[y].addEventListener('click',function(){
			this.parentElement.style.display = "none";
		});
	}



	document.getElementById(listid).style.display = "block";


	// evn.target.className += " active";
	// evn.target.className = evn.target.className.replace("tablinks","tablinks active");
	// evn.target.classList.add('active');


	evn.currentTarget.className += " active";
}

document.getElementById('autoclick').click();