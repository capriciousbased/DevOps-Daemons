import React from "react";
import { Card } from "../../components/blog/Card";
import { Category } from "../../components/category/Category"
import Foreword from "../../components/foreword/Foreword";
import Contact from "../account/contact/Contact";

export const Home = () => {
  return (
    <>
     {/*   <Slider /> */}
      <Category />
      <Foreword />
      <Card />
      <Contact />
    </>
  );
};
