import React from 'react';
import { images } from '../../constants';
import './SubHeading.css'



const SubHeading = ({title}) => (
  <div style={{marginBottom:"1rem"}}>
    <p className = "p__cormorant">{title}</p>
    <img src = {images.strike} alt='strike_img'/>
    <img  src = {images.strike} alt='strike_img'/>
    <img  src = {images.strike} alt='strike_img'/>
  </div>
);

export default SubHeading;
