let burger = document.getElementById('burger');
const circulo = document.getElementById('circulo');
const info = document.getElementById('info');

function hamburger(){

	if(burger.classList.contains('is-active')){
		burger.classList.remove('is-active');
	}

	else{
		burger.classList.add('is-active');
	}
}


circulo.onmouseover = function(){

		circulo.style.color = "orange";
		info.style.color = "orange";
}

info.onmouseover = function(){

		circulo.style.color = "orange";
		info.style.color = "orange";
}


circulo.onmouseout = function(){

		circulo.style.color = "white";
		info.style.color = "white";
}

info.onmouseout = function(){

		circulo.style.color = "white";
		info.style.color = "white";
}