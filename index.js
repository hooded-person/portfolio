	/*   /O&O portfolio/index.js  */
console.log("running index.js");
let cardContainer = document.getElementById("cardGrid");
let classSpan = document.getElementById("Xvwo");
console.log("set all variables");

let startSchool = new Date("September 9, 2021 00:00:00")
let currentDate = new Date()
let remaining = new Date(currentDate - startSchool)
let currentSchoolYear = remaining.getFullYear() - 1969
classSpan.innerText = currentSchoolYear + " VWO"


function makeCard(cardData, cardContainer) {
	if (!cardData.image && cardData.image == "") {
		cardData.image="./assets/personOutline.jpg"
	}
	let card = document.createElement("div");
	card.classList.add("card")
	
	let headerDiv = document.createElement("div")
	headerDiv.classList.add("header")

	let image = document.createElement("img");
	image.classList.add("cardContent")
	image.src = cardData.image;
	headerDiv.appendChild(image);
	
	let title = document.createElement("h2");
	title.classList.add("cardContent")
	title.innerText = cardData.title;
	headerDiv.appendChild(title);

	headerDiv.appendChild( document.createElement("br") );
	
	let description = document.createElement("p");
	description.classList.add("cardContent","description")
	description.innerText = cardData.description;
	headerDiv.appendChild(description);


	let linkDiv = document.createElement("div");
	linkDiv.classList.add("link");
	linkDiv.addEventListener("click", (e) => window.open(cardData.link, '_self').focus() );

	let linkTxt = document.createElement("p");
	linkTxt.classList.add("cardContent");
	linkTxt.innerText = "Check out";
	linkDiv.appendChild(linkTxt);

	card.appendChild(headerDiv)
	card.appendChild(linkDiv);
	
	cardContainer.appendChild(card);
}

let matchArray = window.location.href.match(/cardAmount=(\d*)/)
let genCardAmount = 1
if (matchArray && matchArray.length == 2) {
	genCardAmount = parseInt(matchArray[1])
}

console.log("start")
fetch("./projects/list.json").then(response => response.json()).then(data=>{
  //import projects from "./projects/list.json" assert {type: "json"}
  console.log("fetched projects")
  
  data.projects.forEach((project) => {
    makeCard(project, cardContainer);
  
  });
});