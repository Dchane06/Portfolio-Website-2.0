import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import project1 from '../project1.PNG';
import project2 from '../project2.PNG';
import project3 from '../project3.PNG';

const carouselImgs = () => {

    return (
      <Carousel>
        <img src={project1} alt="first project" />
        <img src={project2} alt="second project" />
        <img src={project3} alt="third project" />
      </Carousel>
    );

}

export default carouselImgs;