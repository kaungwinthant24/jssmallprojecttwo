const getimageboxes = document.querySelectorAll('.imgbox');

getimageboxes.forEach(function(getimagebox,idx){
	// console.log(getimagebox);
	// console.log(idx);

	getimagebox.addEventListener('click',function(){
		// console.log(idx);
		showbox(idx);
	});


});

function showbox(index){
	// console.log(index);
	getimageboxes.forEach(function(imagebox,curidx){
		// console.log(`parameter index = ${index}`);
		// console.log(`current index = ${curidx}`);
		
		if(index === curidx){
			imagebox.classList.add('show');

			imagebox.addEventListener('click',function(e){
				// console.log(e.target);
				// console.log(e.target.className);
				if(e.target.className === 'btn-close'){
					imagebox.classList.remove('show');
				}

				if(e.target.className === 'btn'){
					// const submitbtn = imagebox.querySelector('.btn');
					const submitbtn = getimageboxes[index].querySelector('.btn');
					submitbtn.innerText = 'Subscribed';
				}
			});

		}else{
			imagebox.classList.remove('show');
		}


	});
}