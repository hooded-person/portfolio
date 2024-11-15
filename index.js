	/*   /O&O portfolio/index.js  */
console.log("running index.js");
let cardContainer = document.getElementById("cardGrid");
console.log("set all variables");

function makeCard(cardData, cardContainer) {
	if (!cardData.image && cardData.image == "") {
		cardData.image="./images/personOutline.jpg"
	}
	
	let card = document.createElement("div");
	card.classList.add("card")
	
	let image = document.createElement("img");
	image.classList.add("cardContent")
	image.src = cardData.image;
	card.appendChild(image);
	
	let title = document.createElement("h2");
	title.classList.add("cardContent")
	title.innerText = cardData.title;
	card.appendChild(title);

	card.appendChild( document.createElement("br") );
	
	let description = document.createElement("p");
	description.classList.add("cardContent","description")
	description.innerText = cardData.description;
	card.appendChild(description);

	let link = document.createElement("a");
	link.classList.add("cardContent")
	link.src = cardData.link
	card.appendChild(link)
	
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