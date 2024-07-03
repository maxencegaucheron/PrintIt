const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const nombreDeSlides = slides.length
const parentDesPoints = document.querySelector(".dots");

// Ajout de points en fonction du nombre de slides

for (let i = 0; i < nombreDeSlides; i++) {
	const point = document.createElement("div")
	point.classList = "dot";
	parentDesPoints.appendChild(point)
}

// Point actif sur la slide actuelle

let index = 0;

const pointActif = document.querySelectorAll(".dot");
pointActif[index].classList.add("dot_selected");

const imageBanniere = document.querySelector(".banner-img");
const texteBanniere = document.querySelector("#banner p");

// Clic sur la flèche gauche

let arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", function () {

	index--

	if (index < 0) {
		index = nombreDeSlides - 1;
		pointActif[0].classList.remove("dot_selected");
	}

	else {
		pointActif[index + 1].classList.remove("dot_selected");
	}

	pointActif[index].classList.add("dot_selected");
	imageBanniere.src = "./assets/images/slideshow/" + slides[index].image;
	texteBanniere.innerHTML = slides[index].tagLine;
});

// Clic sur la flèche droite

let arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", function () {

	index++

	if (index > nombreDeSlides - 1) {
		index = 0;
		pointActif[nombreDeSlides - 1].classList.remove("dot_selected");
	}

	else {
		pointActif[index - 1].classList.remove("dot_selected");
		pointActif[index].classList.add("dot_selected");
	}

	pointActif[index].classList.add("dot_selected");
	imageBanniere.src = "./assets/images/slideshow/" + slides[index].image;
	texteBanniere.innerHTML = slides[index].tagLine;
});
