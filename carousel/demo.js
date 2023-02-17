

function onCellAdded(cell, index, carouselName){
	
  
	// calculate the mirrored index for each carousel
	
	var mirroredIndex = 4 - index;
	if (mirroredIndex < 0) {mirroredIndex += 8;}

	console.log("name: " + carouselName + " index: " + index + " mirror: " + mirroredIndex);
	
	// create image element and set source
	var img1 = document.createElement("img");
	img1.src = path + images[index % images.length];

	var img2 = document.createElement("img");
	img2.src = path + images[mirroredIndex % images.length];

	var textOverlay = document.createElement("div");
  	textOverlay.classList.add("text-overlay");
  	textOverlay.textContent = texts[index];

	var textOverlay1 = document.createElement("div");
  	textOverlay1.classList.add("text-overlay");
  	textOverlay1.textContent = texts[mirroredIndex];

	// add click event listener to select cell in the corresponding carousel
	if (carouselName === "carousel1") {
		cell.appendChild(img1);
		cell.appendChild(textOverlay);
		cell.onclick = function(event) {
			carousel1.select(index);
		};
	} else {
		cell.appendChild(img2);
		cell.appendChild(textOverlay1);
		cell.onclick = function(event) {
			carousel2.select(mirroredIndex);
		};
	}
}

function onCellFocus(cell,index){
}

function onCellBlur(cell,index){
}

function onCellSelect(cell,index){
  // return this 
}

function moveLeft(){
	carousel1.rotate(Carousel.DIRECTION.LEFT);
	carousel2.rotate(Carousel.DIRECTION.RIGHT);
}

function moveRight(){
	carousel1.rotate(Carousel.DIRECTION.RIGHT);
	carousel2.rotate(Carousel.DIRECTION.LEFT);
}

function handleKeyDown(event){
	switch(event.keyCode){
		case 37:
		carousel1.rotate(Carousel.DIRECTION.RIGHT);
		carousel2.rotate(Carousel.DIRECTION.LEFT);
		event.preventDefault();
		break;
		case 39:
		carousel1.rotate(Carousel.DIRECTION.LEFT);
		carousel2.rotate(Carousel.DIRECTION.RIGHT);
		event.preventDefault();
		break;
		case 13:
		carousel1.select();
		event.preventDefault();
		break;
		default:
		break;
	}
}

function buildCarousel(containerNode, numCells, containerWidth, containerHeight, onCellAdded, onCellFocus, onCellBlur, onCellSelect, carouselName) {
	
	console.log(carouselName);

	var carousel = new Carousel(
		containerNode, 
	  	8,
        400, 
    	200, 
		function(cell, index) {
            onCellAdded(cell, index, carouselName);
        },
	  	onCellFocus,
	  	onCellBlur,
	  	onCellSelect 
	);
	
	// Add the carouselName property to the carousel object
	carousel.carouselName = carouselName;
	
	return carousel;
}
  
var images = [
'/images/Plan.jpg',
'/images/Code.jpg',
'/images/Build.jpg',
'/images/Test.jpg',
'/images/Release.jpg',
'/images/Deploy.jpg',
'/images/Operate.jpg',
'/images/Monitor.jpg',
];

var texts = [
	'Plan',
	'Code',
	'Build',
	'Test',
	'Realese',
	'Deploy',
	'Operate',
	'Monitor',
]

var carousel1 = null;
var carousel2 = null;
var scripts = document.getElementsByTagName('script');
var thisScript = scripts[scripts.length-1];
var path = thisScript.src.replace(/\/demo\.js$/, '/');

window.addEventListener("keydown",handleKeyDown,false);
window.onload = function() {
	var container2 = document.getElementById("container2");
	var container1 = document.getElementById("container1");

	carousel1 = buildCarousel(container1, 8, container1.offsetWidth, container1.offsetHeight, onCellAdded, onCellFocus, onCellBlur, onCellSelect, "carousel1");
	carousel2 = buildCarousel(container2, 8, container2.offsetWidth, container2.offsetHeight, onCellAdded, null, null, null, "carousel2");

}

