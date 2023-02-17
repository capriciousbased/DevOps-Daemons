import React from "react";
import { Card } from "../../components/blog/Card";
 import { Category } from "../../components/category/Category"
/* import Contact from "../../components/contact/Contact"; */

export const Home = () => {
  return (
    <>
     {/*   <Slider /> */}
      <Category />
      <Card />
    {/*   <Contact /> */}
    </>
  );
};
