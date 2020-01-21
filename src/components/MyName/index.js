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
    const social = require('./social').default
    return (
      <div className={style.myname}>
        <div className={style.image}>
          <img src={require('../../images/me.png')} alt="" />
        </div>
        <h4>Vian Hanif</h4>
        <div>
          <ul className={style.social}>
            {social.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.desc}</a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={style.description}>
          <div>
            <p>
              living in Depok, Indonesia.
            </p>
            <p>
              A software engineer. A kid. A brother. Movie lover. Korean lover.
            </p>
          </div>
        </div>
      </div>
    );
  }

}
