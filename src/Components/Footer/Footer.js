import React , { Component } from 'react';
import './Footer.css';
class Footer extends Component {
  footerDiv = (head, one, two, three, four)=> {
    return(
      <div className="col-md-3 list">
          <h4>{head}</h4><br />
            <p><i class="fa fa-angle-right"></i> {one}</p>
            <hr className="hr"/>
            <p><i class="fa fa-angle-right"></i> {two}</p>
            <hr className="hr"/>
            <p><i class="fa fa-angle-right"></i> {three}</p>
            <hr className="hr"/>
            <p><i class="fa fa-angle-right"></i> {four}</p>
      </div>
    );
  }

  render(){
    return(
      <div className="Footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                  <h4>About LT Restaurant</h4><br />
                  <p className="leftPara">LT Restaurant is premium single & clear Joomla! template for restaurant website. This template support strong template framework, powerful page builder, fully responsive layout and unlimited positions. It builds with latest <span>Bootstrap CSS Framework</span>, and support <span>Font Awesome</span>, extended <span>K2 style</span> and so on.</p>
                </div>
                <div className="col-md-3">
                  <h4>Latest News</h4><br />
                  <p>Jerky shank chicken boudin <br />02 February 2015</p>
                  <hr />
                  <p>Leberkas tail swine pork<br />02 February 2015</p>
                  <hr />
                  <p>Meatball kevin beef ribs shoulder<br />02 February 2015</p>
                </div>
                {this.footerDiv("Masterchef", "Steve Stegner", "Camala Haddon", "Eva Savits", "Mark Johnson")}
                {this.footerDiv("Services Offer", "Wedding", "Birthday Party", "Company Party", "Anniversary Party")}
            </div>
         </div>
      </div>
    )
  }
}

export default Footer;
