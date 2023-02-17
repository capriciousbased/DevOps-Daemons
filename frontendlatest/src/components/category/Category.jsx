import React from "react"
import "./category.css"
import { category } from "../../assets/data/data"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { GrFormPrevious } from "react-icons/gr"
import { MdNavigateNext } from "react-icons/md"
import { Carousel } from './3dcarousel.js'
import { StyleFix } from './prefixfree.min.js';
import { PrefixFree } from './prefixfree.min.js';


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <MdNavigateNext className='icon' />
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <GrFormPrevious className='icon' />
      </button>
    </div>
  )
}
export const Category = () => {
  

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
    '../../images/Plan.jpg',
    '../../images/Code.jpg',
    '../../images/Build.jpg',
    '../../images/Test.jpg',
    '../../images/Release.jpg',
    '../../images/Deploy.jpg',
    '../../images/Operate.jpg',
    '../../images/Monitor.jpg',
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


  /* const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ], 
    
  }*/

  return (
    <>
      {
      <div id="carousel-container">
        <div class="flex-parent-element">
          <div class="flex-child-element"> </div>
          <div class="flex-child-element magenta" id="container2">Flex Column 1</div>
          <div class="flex-child-element green" id="container1">Flex Column 2</div>
          <div class="flex-child-element"> </div>
        </div>
      </div>
      /* { <section className='category'>
        <div className='content'>
          <Slider {...settings}>
            {category.map((item) => (
              <div className='boxs' key={item.id}>
                <div className='box' key={item.id}>
                  <img src={item.cover} alt='cover' />
                  <div className='overlay'>
                    <h4>{item.category}</h4>
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section> } */}
    </>
  )
}
