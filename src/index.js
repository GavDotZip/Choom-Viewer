import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChoomViewer from './App'; // Corrected import statement for choomViewer

const slides = [
  {
    firstName: 'Silverhand',
    lastName: 'Johnny',
    img: "https://wallpapercg.com/download/johnny-silverhand-4k-wallpaper--16719.jpg"
  },
  {
    firstName: 'Palmer',
    lastName: 'Panam',
    img: 'https://i.pinimg.com/originals/f1/0f/0a/f10f0aab7a164a75ec74f6779e07e817.jpg'
  },
  {
    firstName: 'Alvarez',
    lastName: 'Judy',
    img: 'https://4kwallpapers.com/images/wallpapers/judy-alvarez-cyberpunk-2077-xbox-series-x-xbox-one-3840x2160-1860.jpg'
  },
  {
    firstName: 'Ward',
    lastName: 'River',
    img: 'https://i.pinimg.com/originals/da/8e/50/da8e5074f716396cfbf15b3c83b353d3.jpg'
  },
  {
    firstName: 'Takemura',
    lastName: 'Goro',
    img: 'https://staticdelivery.nexusmods.com/images/3333/1481709-1648839159.jpg'
  }
];

ReactDOM.render(<ChoomViewer slides={slides} />, document.getElementById('root'));
