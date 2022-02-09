import React from 'react';
import '../../App.css';
import { SliderData } from './SliderData'
import ImageSlider from './ImageSlider'
import './Home.css'




function Home() {
  return ( 
    <>
    <div className="home">
    <span className='up'>
      <h1>WYPOŻYCZALNIA SAMOCHODÓW SPORTOWYCH</h1>        
    </span> 
      <ImageSlider  slides={SliderData}  />  
      <div className='down'> <h6>Wszelkie prawa zastrzeżone &copy; FASTERCAR</h6> </div>
      </div>
      </>

)};



export default Home;