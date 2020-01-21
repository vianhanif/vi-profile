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
    const educations = require('./educations').default
    const title = `Read & <span style="color: #FFEE58;">Play</span>grounds`
    return (
      <div className={style.education}>
        <h4 dangerouslySetInnerHTML={{__html: title}}/>
        <div className={style.panel}>
          <table className={style.yearly}>
            <tbody>
            {educations.map((edu, index) => {
              return (
                <tr key={index}>
                  <td className={style.year}>{edu.from} - {edu.to}</td>
                  <td className={style.educate}>{edu.desc}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

}
