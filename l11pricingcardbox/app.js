const getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasic = document.getElementById('basic');
const getprof = document.getElementById('professional');
const getmst = document.getElementById('master');

getcheckbox.addEventListener('click',function(){
	// console.log("I am working");
	if(this.checked){
		getbasic.textContent = " 120";
		getprof.textContent = " 240";
		getmst.textContent = " 360";
		// console.log('yes')
		
	}else{
		getbasic.textContent = " 10";
		getprof.textContent = " 20";
		getmst.textContent = " 30";
		// console.log('no');
	}
})