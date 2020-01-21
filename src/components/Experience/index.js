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
    const experiences = require('./experiences').default
    const title = `Time Spent with <span style="color:#FFEE58;">Team</span>s`
    return (
      <div className={style.experience}>
        <h4 dangerouslySetInnerHTML={{__html: title}}/>
        <div className="col-centered">
          {experiences.map((exp, key) => {
            const left = key % 2 === 0 ? '60' : '40'
            const right = key % 2 === 0 ? '40' : '60'
            const carousel = (side) => {
              return (
                <Carousel emulateTouch showIndicators={false} showThumbs={false} showStatus={false}>
                  {exp.photos.map((photo, index) => {
                    return (
                      <div key={index} className={`${side} ${style.image}`} style={{backgroundImage: `url(${photo})`}}>
                      </div>
                    )
                  })}
                </Carousel>
              )
            }
            const side = (parent) => {
              return (
                <div className={parent}>
                  <div className={style.side}>
                    <p className={style.year}>{exp.from} {exp.to !== '' ? 'to' : ''} {exp.to}</p>
                    <p className={style.company}>{exp.company}</p>
                    <p className={style.description}>{exp.description}</p>
                    <p className={style.role}>Played as</p>
                    <p className={style.rolename}>{exp.rolename}</p>
                    <p className={style.role_descripsion}>{exp.role_descripsion}</p>
                  </div>
                </div>
              )
            }
            const freelance = () => {
              return (
                <React.Fragment>
                  <p className={style.timespent}>{exp.timespent}</p>
                  <p className={style.project_name}>{exp.project_name}</p>
                  <p className={style.description}>{exp.description}</p>
                </React.Fragment>
              )
            }
            const techs = () => {
              return (
                <div className={style.techs}>
                  <p className={style.title}>Technologies</p>
                  <ul>
                    {exp.techs.map((tech, index) => {
                      return (
                        <li key={index}>
                          <div className={style.image}>
                            <img src={tech.icon} alt=""/>
                          </div>
                          <p>{tech.desc}</p>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            }
            return (
              <div key={key} className={exp.freelance ? 'col-50' : 'col-100-fit'}>
                <div className={exp.freelance ? style.freelance : style.panel}>
                  {!exp.freelance && <div className="col">
                    <div className={`col-${left}-fit ${key % 2 === 0 ? style.exp_image : style.exp_desc}`}>
                      {key % 2 === 0 && carousel(style.left) }
                      {key % 2 !== 0 && side(style.left) }
                      {key % 2 !== 0 && techs() }
                    </div>
                    <div className={`col-${right}-fit ${key % 2 === 0 ? style.exp_desc : style.exp_image}`}>
                      {key % 2 !== 0 && carousel(style.right) }
                      {key % 2 === 0 && side(style.right) }
                      {key % 2 === 0 && techs() }
                    </div>
                  </div>}
                  {exp.freelance && <div>
                    {freelance()}
                    {techs()}
                  </div>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }

}
