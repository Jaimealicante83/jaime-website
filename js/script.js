let burger = document.getElementById('burger');
const circulo = document.getElementById('circulo');
const masInfo = document.getElementById('masInfo');
const info = document.getElementById('info');
const panelBlanco = document.getElementById('panelBlanco');
const menuPrincipal = document.getElementById('menu');
const contactContainer = document.getElementById('contactContainer');
const fotoWeb = document.getElementById('fotoWeb');
let linkImagen = document.getElementById('linkImagen');
let offsetHeight = document.getElementById('portfolio').offsetHeight;
var h = window.innerHeight;


	console.log(h);
	console.log(offsetHeight);


function hamburger(){

	if(burger.classList.contains('is-active')){
		burger.classList.remove('is-active');
		panelBlanco.classList.remove("clicked");
		menuPrincipal.classList.remove("clicked");
		panelBlanco.classList.add("clickedBack");
		menuPrincipal.classList.add("clickedBack");
		setTimeout(function(){ contactContainer.classList.remove("opacidad"); }, 800);
		
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
	document.querySelector('#about').scrollIntoView({block: "start", behavior: "smooth"});
}

function enlace4(){
	document.querySelector('footer').scrollIntoView({block: "start", behavior: "smooth"});
}



const izquierda = document.getElementById("izquierda");
const derecha = document.getElementById("derecha");

let counter = 0;

let li1 = document.getElementById("li1");
let li2 = document.getElementById("li2");
let li3 = document.getElementById("li3");
let li4 = document.getElementById("li4");


document.querySelector('.icons').addEventListener('click', function(e){

e.preventDefault();


if( event.target.id === 'izquierda' ){
	console.log("le diste a la flecha izquierda");
	--counter;
}

 if ( event.target.id === 'derecha'){
	console.log("le diste a la flecha derecha");
	++counter;
}

if (counter === 0){
		li1.classList.add('active');
		li2.classList.remove('active');
		li3.classList.remove('active');
		li4.classList.remove('active');
		fotoWeb.classList.remove('aparece');
		fotoWeb.classList.add('desaparece');
		setTimeout(function(){fotoWeb.src = 'img/electrical.jpg'; }, 600); 
		linkImagen.setAttribute('href', 'https://www.jaimealicante.es/renewable'); 
		setTimeout(function(){fotoWeb.classList.add('aparece'); } , 800);
	}

	else if (counter === 1){
		li1.classList.remove('active');
		li2.classList.add('active');
		li3.classList.remove('active');
		li4.classList.remove('active');
		fotoWeb.classList.remove('aparece');
		fotoWeb.classList.add('desaparece');
		setTimeout(function(){fotoWeb.src = 'img/seo.png'; }, 600);
		linkImagen.setAttribute('href', 'https://www.jaimealicante.es/SEO');
		setTimeout(function(){fotoWeb.classList.add('aparece'); } , 800);
	}

	else if (counter === 2){
		li1.classList.remove('active');
		li2.classList.remove('active');
		li3.classList.add('active');
		li4.classList.remove('active');
		fotoWeb.classList.remove('aparece');
		fotoWeb.classList.add('desaparece');
		setTimeout(function(){fotoWeb.src = 'img/software.jpg'; }, 600);
		linkImagen.setAttribute('href', 'https://www.jaimealicante.es/software');
		setTimeout(function(){fotoWeb.classList.add('aparece'); } , 800);
	}

	else if (counter === 3){
		li1.classList.remove('active');
		li2.classList.remove('active');
		li3.classList.remove('active');
		li4.classList.add('active');
		fotoWeb.classList.remove('aparece');
		fotoWeb.classList.add('desaparece');
		setTimeout(function(){fotoWeb.src = 'img/tienda.png'; }, 600);
		linkImagen.setAttribute('href', 'https://www.jaimealicante.es/tienda');
		setTimeout(function(){fotoWeb.classList.add('aparece'); } , 800);
	}

	else if (counter < 0 ) {
		counter = 3;
		li1.classList.remove('active');
		li2.classList.remove('active');
		li3.classList.remove('active');
		li4.classList.add('active');

		fotoWeb.classList.remove('aparece');
		fotoWeb.classList.add('desaparece');
		setTimeout(function(){fotoWeb.src = 'img/tienda.png'; }, 600);
		setTimeout(function(){fotoWeb.classList.add('aparece'); } , 800);
	}

	else if (counter > 3 ) {
		counter = 0;
		li1.classList.add('active');
		li2.classList.remove('active');
		li3.classList.remove('active');
		li4.classList.remove('active');

		fotoWeb.classList.remove('aparece');
		fotoWeb.classList.add('desaparece');
		setTimeout(function(){fotoWeb.src = 'img/electrical.jpg'; }, 600);
		setTimeout(function(){fotoWeb.classList.add('aparece'); } , 1100);
	}

	console.log('El contador en contando es ' + counter);



});


function electricidad(){

		li1.classList.add('active');
		li2.classList.remove('active');
		li3.classList.remove('active');
		li4.classList.remove('active');
		fotoWeb.classList.remove('aparece');
		fotoWeb.classList.add('desaparece');
		setTimeout(function(){fotoWeb.src = 'img/electrical.jpg'; }, 600); 
		linkImagen.setAttribute('href', 'https://www.jaimealicante.es/renewable'); 
		setTimeout(function(){fotoWeb.classList.add('aparece'); } , 800);
}

function elSeo(){
		li1.classList.remove('active');
		li2.classList.add('active');
		li3.classList.remove('active');
		li4.classList.remove('active');
		fotoWeb.classList.remove('aparece');
		fotoWeb.classList.add('desaparece');
		setTimeout(function(){fotoWeb.src = 'img/seo.png'; }, 600);
		linkImagen.setAttribute('href', 'https://www.jaimealicante.es/SEO');
		setTimeout(function(){fotoWeb.classList.add('aparece'); } , 800);
}

function isometrical(){
		li1.classList.remove('active');
		li2.classList.remove('active');
		li3.classList.add('active');
		li4.classList.remove('active');
		fotoWeb.classList.remove('aparece');
		fotoWeb.classList.add('desaparece');
		setTimeout(function(){fotoWeb.src = 'img/software.jpg'; }, 600);
		linkImagen.setAttribute('href', 'https://www.jaimealicante.es/software');
		setTimeout(function(){fotoWeb.classList.add('aparece'); } , 800);
}

function decorando(){
		li1.classList.remove('active');
		li2.classList.remove('active');
		li3.classList.remove('active');
		li4.classList.add('active');
		fotoWeb.classList.remove('aparece');
		fotoWeb.classList.add('desaparece');
		setTimeout(function(){fotoWeb.src = 'img/tienda.png'; }, 600);
		linkImagen.setAttribute('href', 'https://www.jaimealicante.es/tienda');
		setTimeout(function(){fotoWeb.classList.add('aparece'); } , 800);
}