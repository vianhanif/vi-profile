import React, { Component } from 'react'
import Emoji from 'react-emoji-render'
import {
  MyName,
  Education,
  Travel,
  Skill,
  Achievement,
  Experience,
  SEO
} from '../components'
import '../styles/pages/Home/index.scss'

export default class Home extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="contained page" id="home">
        <SEO title="Home"/>
        <div className="col profile">
          <div className="col-40">
            <MyName/>
            <Skill className="not-desktop"/>
            <Education/>
          </div>
          <div className="col-60 only-desktop">
            <Travel/>
          </div>
        </div>
        <div className="col travel not-desktop">
          <div className="col-100">
            <Travel/>
          </div>
        </div>
        <div className="col sectioned other">
          <div className="col-70">
            <Achievement/>
          </div>
          <div className="col-30 only-desktop">
            <Skill/>
          </div>
        </div>
        <div className="col sectioned other">
          <div className="col-100">
            <Experience/>
          </div>
        </div>
        <div className="col sectioned other">
          <div className="col-100">
            <p className="info-soon">and more insight coming soon <Emoji text=":wink:"/></p>
          </div>
        </div>
      </div>
    );
  }

}
