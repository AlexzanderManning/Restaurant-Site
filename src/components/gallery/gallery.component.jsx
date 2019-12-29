import React from 'react';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './gallery.module.scss';



class Gallery extends React.Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <div className={styles.container}>
        <Slider className={styles.slider} {...settings}>
          <div>
            <img src='https://eatpastaria.com/nashville/wp-content/uploads/sites/2/2017/10/Burrata.jpg'></img>
          </div>
          <div>
            <img src='https://eatpastaria.com/nashville/wp-content/uploads/sites/2/2017/10/Ramen.jpg'></img>
          </div>
          <div>
            <img src='https://eatpastaria.com/nashville/wp-content/uploads/sites/2/2017/10/Dishes3.jpg'></img>
          </div>
          <div>
            <img src='https://eatpastaria.com/nashville/wp-content/uploads/sites/2/2017/10/Nash2-1.jpg'></img>
          </div>
          <div>
            <img src='https://eatpastaria.com/nashville/wp-content/uploads/sites/2/2017/10/RisotoBalls.jpg'></img>
          </div>
          <div>
            <img src='https://eatpastaria.com/nashville/wp-content/uploads/sites/2/2017/10/Salmon.jpg'></img>
          </div>
        </Slider>
        
        <div className={styles.backgroundImage} >
          <img src="https://eatpastaria.com/nashville/wp-content/themes/pastaria/images/wood.jpg"></img>
        </div>
      </div>

    );
  }
}

export default Gallery