import React, { Fragment } from "react";
import { Hero } from "../components/Hero";
import Information from "../components/Information";
import Thesis from "../components/Thesis";
import { Course } from "../components/Course";

export const Home = () => {
  return (
    <Fragment>
      <Hero></Hero>
      <Information></Information>
      <Course></Course>
      <Thesis></Thesis>
    </Fragment>
  );
};
