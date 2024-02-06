import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChoomViewer from './App'; // Corrected import statement for choomViewer

const slides = [
  {
    firstName: 'Paris',
    lastName: 'France',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhAyH6CWVoZvawExpauMaghou67N1eL-FbUw&usqp=CAU'
  },
  {
    firstName: 'Singapore',
    lastName: 'Czech Republic',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/singapore.jpg'
  },
  {
    firstName: 'Prague',
    lastName: 'Czech Republic',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/prague.jpg'
  },
  {
    firstName: 'Amsterdam',
    lastName: 'Netherlands',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/amsterdam.jpg'
  },
  {
    firstName: 'Moscow',
    lastName: 'Russia',
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg'
  }
];

ReactDOM.render(<ChoomViewer slides={slides} />, document.getElementById('root'));
