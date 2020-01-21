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
    const skills = require('./skills').default
    const title = `{<span style="color: #FFEE58;">Object</span>} to play with`
    return (
      <div {...this.props}>
        <div className={style.skill}>
          <h4 dangerouslySetInnerHTML={{__html: title}}/>
          <div className={style.panel}>
            <ul>
              {skills.map((skill, index) => {
                return (
                  <li key={index}>
                    <div className={style.image}>
                      <img src={skill.icon} alt=""/>
                    </div>
                    <p>{skill.desc}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }

}
