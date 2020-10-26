import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
// import Intro from '../../Intro';

function Services() {
  return (
    <>
      {/* <Intro /> */}
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Services;