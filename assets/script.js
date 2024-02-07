const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Déclaration des variables
// compteur
let count=0
// Étape 1: Mettez à jour le code HTML
const bannerSlides =document.querySelector('.banner-img')
console.log(bannerSlides)
const bannerTagLine =document.querySelector('#banner p')
console.log(bannerTagLine)


// Étape 2: Ajoutez des Event Listeners sur les flèches 
/*ajout de la fonction de défilemnet*/
 const arrow_left= document.querySelector('.arrow_left')
 arrow_left.addEventListener("click",()=>{
	// console.log(arrow_left)
	previousSlide()
 })

 const arrow_right= document.querySelector('.arrow_right')
arrow_right.addEventListener("click",()=>{
	// console.log(arrow_right)
	nextSlide()
})
	

//Étape 3:  Ajoutez des bullet points au slider
const dotsSlides= document.querySelector('.dots')
// console.log(dotsSlides)
/*Utilisation d'une boucle for pour compter le nombre d'images dans le tableau 
slide afin d'avoir le même nombre de points et parcourir chaque élément du tableau */
for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement('div')
	dot.classList.add('dot')
	dotsSlides.appendChild(dot)
	console.log(dot)
}

/*Déclaration de la variable permettant de mettre en avant le point du slide
sélectionné et attribution du point sélectionné à la première slide*/

let dotSelected = document.querySelectorAll(".dot")

dotSelected[count].classList.add("dot_selected")
// Étape 4: Modifiez le slide au clic sur le bouton
/*Création du carrousel */
/*changement de chemin de la nouvelle image*/

function showSlide() {
	bannerSlides.src = `./assets/images/slideshow/${slides[count].image}`
	bannerTagLine.innerHTML = slides[count].tagLine
}
showSlide()

function previousSlide() {
	// Suppression du point actuel sélectionné 
	dotSelected[count].classList.remove("dot_selected");
	// Si compteur <= 0, alors on revient au dernier slide
	if (count <= 0) {
		count = slides.length - 1;
	} 
	/* Sinon on décrément de 1 compteur pour passer 
	à la diapositive suivante*/
	else {
		count--	;	
	}	
	// Ajout du point sélectionné à la nouvelle slide
	dotSelected[count].classList.add("dot_selected");
	// Appelle à la fonction qui affiche le slider 
	showSlide()
}

function nextSlide() {
	// Suppression du point sélectionné actuel
	dotSelected[count].classList.remove("dot_selected");
	// Si compteur >= à la longueur du tableau, alors on revient au premier slide
	if (count >= slides.length - 1) {
		count = 0;
	} 
	/* Sinon on incrément de 1 compteur pour passer
	 à la diapositive suivante*/
	
	else {
		count++;		
	}	
	// Ajout du point sélectionné à la nouvelle slide 
	dotSelected[count].classList.add("dot_selected");
	// Appelle de la fonction qui affiche le slider
	showSlide()
}

