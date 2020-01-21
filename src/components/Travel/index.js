import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import style from './style.mod.scss'

export default class Home extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const images = require('./images').default
    const title = `A Glimpse of <span style="color:#FFEE58;">Time</span>`
    return (
      <div className={style.achievement}>
        <h4 dangerouslySetInnerHTML={{__html: title}}/>
        <div className={style.panel}>
          <Carousel emulateTouch showIndicators={false} showThumbs={false} showStatus={false}>
            {images.map((image, index) => {
              return (
                <div key={index} className={style.image} style={{backgroundImage: `url(${image})`}}>
                </div>
              )
            })}
          </Carousel>
        </div>
      </div>
    );
  }

}
