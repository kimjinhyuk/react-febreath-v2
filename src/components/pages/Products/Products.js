import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Intro from '../../Intro';

function Products() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      {/* <HeroSection {...homeObjTwo} /> */}
    </>
  );
}

export default Products;