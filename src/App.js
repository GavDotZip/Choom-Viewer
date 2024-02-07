import React, { Component } from 'react';
import classNames from 'classnames';
import './App.css'; // Assuming you have styles in this file

class ChoomViewer extends Component {
  constructor(props) {
    super(props);

    // Constants
    this.IMAGE_PARTS = 4;
    this.AUTOCHANGE_TIME = 4000;

    // State initialization
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };

    // Timer reference
    this.changeTO = null;
  }

  // Clear timer on component unmount
  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  // Start auto change on component mount
  componentDidMount() {
    this.runAutochangeTO();
    // Set initial slide after mount
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  // Run auto change timer
  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  // Change slides manually
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    // Handle slide index overflow
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    // Set new active and previous slides
    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, prevSlide, sliderReady } = this.state;
    return (
      <div className={classNames('slider', { 's--ready': sliderReady })}>
        <p className="slider__top-heading"></p>
        <div className="slider__slides">
          {this.props.slides.map((slide, index) => (
            <div
              className={classNames('slider__slide', {
                's--active': activeSlide === index,
                's--prev': prevSlide === index
              })}
              key={slide.firstName}
            >
              <div className="slider__slide-content">
                <h3 className="slider__slide-subheading">{slide.lastName || slide.firstName}</h3>
                <h2 className="slider__slide-heading">
                  {slide.firstName.split('').map((l, i) => (
                    <span key={i}>{l}</span>
                  ))}
                </h2>
                <p className="slider__slide-readmore"></p>
              </div>
              <div className="slider__slide-parts">
                {[...Array(this.IMAGE_PARTS)].map((_, i) => (
                  <div className="slider__slide-part" key={i}>
                    <div
                      className="slider__slide-part-inner"
                      style={{ backgroundImage: `url(${slide.img})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Controls for changing slides */}
        <div className="slider__control" onClick={() => this.changeSlides(-1)} />
        <div className="slider__control slider__control--right" onClick={() => this.changeSlides(1)} />
      </div>
    );
  }
}

export default ChoomViewer; // Export the component
