import React from "react";
import Card from "./Card";

import '../stylesheets/Home.css'

class Home extends React.Component{

  constructor(){
    super()

    this.onClickForward = this.onClickForward.bind(this)
    this.onClickBack = this.onClickBack.bind(this)

    const img0 = require("../img/fuji.jpg");
    const img1 = require("../img/girls.jpg");
    const img2 = require("../img/SeeNipponFig1.jpg");
    const img3 = require("../img/SeenipponFig2.jpg");
    const img4 = require("../img/tokyotower.jpg")

    const img5 = require("../img/landing_page_img.jpg")

    this.state={
      index: 0,
      imgList: [img0, img1, img2, img3, img4, img5]
      }
  }

  onClickForward(){
    if (this.state.index + 1 === this.state.imgList.length){
      this.setState({
        index: 0
      })
    }else{
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  onClickBack(){
    if (this.state.index - 1 === -1){
      this.setState({
        index: this.state.imgList.length - 1
      })
    }else{
      this.setState({
        index: this.state.index - 1
      })
    }
  }

  render(){return (

    // <div>
    <div className="intro-section">
      <div className="japan-container">
        <div className="grid">
          <div className="column-xs-12">
            <ul className="slider">
              <li className="slider-item active">
                <div className="grid vertical">
                  <div className="column-xs-12 column-md-2 hide-mobile">
                    <div className="intro">
                      <a href="#">
                        <h1 className="title"><span className="underline">Hi! Konnichiwa!</span></h1>
                      </a>
                    </div>
                  </div>
                  <div className="column-xs-12 column-md-10">
                    <div className="image-holder">
                      <img className="front-img" src={this.state.imgList[this.state.index]} alt="" />
                    </div>
                    <div className="grid">
                      <div className="column-xs-12 column-md-9">
                        <div className="intro show-mobile">
                          <a href="#">
                            <h1 className="title"><span className="underline">Konnichiwa!</span></h1>
                          </a>
                        </div>
                        <p className="description">See Nippon! is the site to go to when you want to find information out about Japan!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="grid">
              <div className="column-xs-12">
                <div className="controls">
                  <button className="previous" onClick = {this.onClickBack} >
                    {/* <i className="ion-ios-arrow-thin-left"></i> */}
                    ←
                    </button>
                  <button className="next" onClick={this.onClickForward}>
                    {/* <i className="ion-ios-arrow-thin-right"></i> */}
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className = "container"> */}
        {/* <img src="landing_page_img.jpg" alt="landing_page_img" style={{width: '100vw', height: '65vw'}}/> */}
          {/* <div className="top-left">Blog title</div>
      </div>*/}
    <Card />
    </div>
  );}
}

export default Home;