import React from 'react'
import '../App.css';
import TopAlert from './TopAlert';
import Navbar from './Navbar';
import Slider from './Slider';
import SliderForm from './SliderForm';
import Workspace from './Workspace';
import Content1 from './Content1';
import Content2 from './Content2';
import Content3 from './Content3';
import Content4 from './Content4';
import Component5Empowering from './Component5Empowering';
import Component6Ideas from './Component6Ideas';
import Component7Blog from './Component7Blog';
import Component8Footer from './Component8Footer';

const Home = () => {
    return (
        <>
            <TopAlert />
            <Navbar />
            <Slider />
            <SliderForm />
            <Workspace />
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
            <Component5Empowering />
            <Component6Ideas />
            <Component7Blog />
            <Component8Footer />
        </>
    )
}

export default Home
