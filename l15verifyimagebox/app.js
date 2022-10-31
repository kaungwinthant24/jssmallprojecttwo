const database = [
	
	{
		question:"Choose Traffic Light ?",
		a:"./img/traffic.jpg" ,
		b:"./img/mountain.jpg",
		c:"./img/ambulance.jpg",
		d:"./img/airport.jpg",
		correctanswer:"a"
	},

	{
		question:"Choose Mountain ?",
		a:"./img/ambulance.jpg" ,
		b:"./img/mountain.jpg",
		c:"./img/traffic.jpg",
		d:"./img/airport.jpg",
		correctanswer:"b"
	},

	{
		question:"Choose Ambulance Truck ?",
		a:"./img/ambulance.jpg" ,
		b:"./img/airport.jpg",
		c:"./img/traffic.jpg",
		d:"./img/mountain.jpg",
		correctanswer:"a"
	},

	{
		question:"Choose Airport ?",
		a:"./img/traffic.jpg" ,
		b:"./img/mountain.jpg",
		c:"./img/ambulance.jpg",
		d:"./img/airport.jpg",
		correctanswer:"d"
	}

];
// console.log(database);

const getcontainer = document.querySelector('.container');
const getquestion = document.querySelector('.question');
const getanswers = document.querySelectorAll('.answer');
const geta_img = document.getElementById('a_img');
const getb_img = document.getElementById('b_img');
const getc_img = document.getElementById('c_img');
const getd_img = document.getElementById('d_img');
// console.log(getd_img);
const getbtn = document.querySelector('.btn');

let currentidx = 0;
let score = 0;

startquestion();

function startquestion(){
	removeselects();
	const currentqes = database[currentidx];
	// console.log(currentqes);
	getquestion.textContent = currentqes.question;
	geta_img.src = currentqes.a;
	getb_img.src = currentqes.b;
	getc_img.src = currentqes.c;
	getd_img.src = currentqes.d;
}

function getsingleanswer(){
	let answer;
	// console.log(answer); // undefined

	getanswers.forEach(function(getanswer){
		// console.log(getanswer);
		if(getanswer.checked){
			// console.log(getanswer.id);
			answer = getanswer.id;
		}	
	})
	// console.log(answer);
	return answer;
}
// getsingleanswer();

getbtn.addEventListener('click',function(){
	// console.log('I am working');
	const finalanswer = getsingleanswer();

	if(finalanswer){
		// console.log(finalanswer);

		if(finalanswer === database[currentidx].correctanswer){
			score++;
		}


		currentidx++;
		// console.log(currentidx);

		if(currentidx < database.length){
			startquestion();
		}else{
			// console.log(score);
			getcontainer.innerHTML = `
				<h3>Total Score : ${score * 25 }</h3>
				<h4>You Answer correct at ${score} / ${database.length}</h4>
				<!-- <button type="button" class="btn" ondblclick="location.reload()" >Click To Reload</button> -->
				<button type="button" class="btn" onclick="doubleclick()" >Click To Reload</button>

			`;
		}

	}else{
		window.alert("Choose One Answer.");
	}

});


function removeselects(){
	getanswers.forEach(function(getanswer){
		return getanswer.checked = false;		
	});
}


let clicktimes = 0;
function doubleclick(){
	// console.log('I am working');
	// console.log(clicktimes);

	if(clicktimes === 0){
		clicktimes = new Date().getTime();
		// clicktimes = Date.now();
		// console.log(clicktimes);
	}else{
		if((new Date().getTime() - clicktimes) < 1000){
			// console.log('hello');
			location.reload();
			clicktimes = 0;
		}else{
			clicktimes = new Date().getTime();
			// console.log(clicktimes);
		}
	}
}