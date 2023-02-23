import React from "react";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category"
import Foreword from "../../components/foreword/Foreword";
import Contact from "../contact/Contact";


export const Home = () => {
  return (
    <>
      <Category />
 {/*    <div className="devopsLoop">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9hzI33BXACnZclrYmJKceGcLCO7EN8Bf8g&usqp=CAU" alt="Trees"  />  
    </div> */}   
      <Foreword />
      <Card />
      <Contact />
    </>
  );
};
