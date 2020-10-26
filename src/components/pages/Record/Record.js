import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Intro from '../../Intro';
import { Link } from 'react-router-dom';

function Record() {
  return (
    <>
      <HeroSection {...homeObjOne} />
    </>
  );
}

export default Record;