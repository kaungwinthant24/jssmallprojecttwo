var getform = document.getElementById("form");
var gettextbox = document.getElementById("textbox");
var getul = document.getElementById("list-group");

getform.addEventListener('submit',function(e){
	// console.log('I am working.');
	addnew();
	e.preventDefault();
})

function addnew(todo){
	var todotext = gettextbox.value;

	if(todo){
		todotext = todo.text;
	}

	if(todotext){
		const li = document.createElement("li");

		if(todo && todo.done){
			li.classList.add('done');
		}

		li.textContent =  todotext;
		getul.appendChild(li);
		gettextbox.value = '';
		updatelocalstorage();

		// left click
		li.addEventListener('click',function(){
			li.classList.toggle('done');
			updatelocalstorage();
	});

		// right click
		li.addEventListener('contextmenu',function(){
			li.remove();
			updatelocalstorage();
		});

	}

	// const li = document.createElement("li");
	// li.textContent = todotext;
	// getul.appendChild(li);
	// gettextbox.value = '';

	// updatelocalstorage()


};

function updatelocalstorage(){
	var getalllis = document.querySelectorAll('li');
	const todos = [];
	getalllis.forEach(function(getallli){
		todos.push({
			text : getallli.innerText,
			done : getallli.classList.contains('done')
		});
	})
	// console.log(todos);

	localStorage.setItem('todos',JSON.stringify(todos));
}

var getlstodos = JSON.parse(localStorage.getItem('todos'));
// console.log(getlstodos);

if(getlstodos){
	getlstodos.forEach(function(getlstodo){
		// console.log(getlstodo);
		// console.log(getlstodo.text);
		addnew(getlstodo);
	})
}