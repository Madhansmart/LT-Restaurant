import React , { Component } from 'react';
import './Banner.css';
import BannerImg from '../../assets/img/main.jpg';
import boxOne from '../../assets/img/6.jpg';
import boxTwo from '../../assets/img/boxTwo.jpg';
import boxThree from '../../assets/img/boxThree.jpg';
class Banner extends Component{

  boxText = (imgSrc, rate, name)=> {
    return(
      <div className="box">
        <img src={imgSrc} alyt="text" />
        <p><span className="rate">{rate} € </span>each</p>
        <p>{name}</p>
        <button className="btn btn-custom">Add To Cart</button>
        <br /><br />
      </div>
    )
  }
  render(){
    return(
      <div className="Banner">
          <img src={BannerImg} alt="BannerIMage" className="img-fluid"/>
          <div className="inside">
              <h1 className="innerText">
                 Are You Hungry?
              </h1>
              <h2 className="firsttext">Don't Wait!!!</h2>
              <h2 className="secondtext">Let Start To Order Food Now!</h2>
              <div>
                <button className="btn-custom">CHECK OUT MENU </button>
              </div>
          </div>
          <div className="container">
            <h4 className="boxHead">FAVORITE FOOD</h4>
              <div className="Box">
                  <div className="container">
                      <div className="boxInside">
                          <div className="row">
                            <div className="col-md-4 boxIns">
                              {this.boxText(boxOne, "30,00","Dish 6")}
                            </div>
                            <div className="col-md-4 boxIns">
                              {this.boxText(boxTwo, "37,00","Food 6")}
                            </div>
                            <div className="col-md-4 boxIns">
                              {this.boxText(boxThree, "58,00","Special 6")}
                            </div>
                          </div>
                     </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default Banner;
