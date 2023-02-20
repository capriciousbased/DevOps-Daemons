import React from "react"
import ReactDOM from "react-dom/client"
import SpringCarousel from "react-spring-3d-carousel";
import "./category.css"

import image1 from "../../assets/images/Plan.jpg"
import image2 from "../../assets//images/Code.jpg"
import image3 from "../../assets/images/Build.jpg"
import image4 from "../../assets/images/Test.jpg"
import image5 from "../../assets/images/Release.jpg"
import image6 from "../../assets/images/Deploy.jpg"
import image7 from "../../assets/images/Operate.jpg"
import image8 from "../../assets/images/Monitor.jpg"

const slides = [
  {
    key: "slide1",
    content: <img src={image1} alt="slide1" />,
    background: "green"
  },
  {
    key: "slide2",
    content: <img src={image2} alt="slide1" />,
    background: "green"
  },
  {
    key: "slide3",
    content: <img src={image3} alt="slide1" />,
    background: "green"
  },
  {
    key: "slide4",
    content: <img src={image4} alt="slide1" />,
    background: "green"
  },
  {
    key: "slide5",
    content: <img src={image5} alt="slide1" />,
    background: "green"
  },
  {
    key: "slide6",
    content: <img src={image6} alt="slide1" />,
    background: "green"
  },
  {
    key: "slide7",
    content: <img src={image7} alt="slide1" />,
    background: "green"
  },
  {
    key: "slide8",
    content: <img src={image8} alt="slide1" />,
    background: "green"
  },
]

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
 
    <div style={{width: "10%", backgroundColor: "blue"}}>&lt;&lt;</div>
    <div style={{display: "flex", width: "80%"}}>
      <div style={{width: "40%", backgroundColor: "red"}}>
        <SpringCarousel slides={slides} />
      </div>
      <div style={{width: "40%", backgroundColor: "green"}}>
        empty
      </div>
    </div>
    <div style={{width: "10%", backgroundColor: "blue"}}>&gt;&gt;</div>

  </React.StrictMode>
)