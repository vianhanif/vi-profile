import React, { Component } from 'react'
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
    const achievements = require('./achievements').default
    const title = `Reminding <span style="color: #FFEE58;">Moment</span>s`
    return (
      <div className={style.achievement}>
        <h4 dangerouslySetInnerHTML={{__html: title}}/>
        <div className={style.inlined}>
          <div className={style.panel}>
            {achievements.slice(0, 3).map((achieve, index) => {
              return (
                <div key={index} className={style.achieve}>
                  <img src={achieve.icon} alt=""/>
                  <p>
                    <span className={style.year}>{achieve.year}</span>
                    <span className={style.desc} dangerouslySetInnerHTML={{__html: achieve.desc}}/>
                  </p>
                </div>
              )
            })}
          </div>
          <div className={style.panel}>
            {achievements.slice(3).map((achieve, index) => {
              return (
                <div key={index} className={style.achieve}>
                  <img src={achieve.icon} alt=""/>
                  <p>
                    <span className={style.year}>{achieve.year}</span>
                    <span className={style.desc} dangerouslySetInnerHTML={{__html: achieve.desc}}/>
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }

}
