let burger = document.getElementById('burger');
const circulo = document.getElementById('circulo');
const masInfo = document.getElementById('masInfo');
const info = document.getElementById('info');
const panelBlanco = document.getElementById('panelBlanco');
const menuPrincipal = document.getElementById('menu');
const contactContainer = document.getElementById('contactContainer');

function hamburger(){

	if(burger.classList.contains('is-active')){
		burger.classList.remove('is-active');
		panelBlanco.classList.remove("clicked");
		menuPrincipal.classList.remove("clicked");
		panelBlanco.classList.add("clickedBack");
		menuPrincipal.classList.add("clickedBack");
		setTimeout(function(){ contactContainer.classList.remove("opacidad"); }, 1000);
		
	}
	//Hacer que aparezca los datos de get in Touch 1 segundo despues de mostrarse el menu
	else{
		burger.classList.add('is-active');
		panelBlanco.classList.add("clicked");
		menuPrincipal.classList.add("clicked");
		panelBlanco.classList.remove("clickedBack");
		menuPrincipal.classList.remove("clickedBack");
		setTimeout(function(){ contactContainer.classList.add("opacidad"); }, 1850);
	}
}


masInfo.onmouseover = function(){
		circulo.style.color = "#f84525";
		info.style.color = "#f84525";
}

masInfo.onmouseout = function(){
		circulo.style.color = "#fff"; //En vez de style aplicar un classList a cada uno con transicion de color.
		info.style.color = "#fff";
}

const enlace = document.querySelectorAll('a');


 function enlacesMenu(){

		burger.classList.remove('is-active');
		panelBlanco.classList.remove("clicked");
		menuPrincipal.classList.remove("clicked");
		panelBlanco.classList.add("clickedBack");
		menuPrincipal.classList.add("clickedBack");

	//Poner ifs para que te lleve a un div diferente segun a que enlace se puls	
}

function enlace1(){
	document.querySelector('#cabecera').scrollIntoView({block: "start", behavior: "smooth"});
}

function enlace2(){
	document.querySelector('#portfolio').scrollIntoView({block: "start", behavior: "smooth"});
}

function enlace3(){
	document.querySelector('#cabecera').scrollIntoView({block: "start", behavior: "smooth"});
}

function enlace4(){
	document.querySelector('#cabecera').scrollIntoView({block: "start", behavior: "smooth"});
}




