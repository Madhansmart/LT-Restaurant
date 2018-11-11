import React , { Component } from 'react';
import LTlogo from '../../assets/img/LTlogo.png';

import classNames from 'classnames';

import './Header.css';


class Header extends Component {
  constructor(){
      super();
      this.state = {
         navBarList : ["PAGES", "PORTFOLIO", "BLOG", "POST FORMATS", "JOOMLA!","K2 BLOG", "MENU"]
      }
  }

  dropdown = (linkName)=> {
    return(
      <li class="nav-item dropdown">
          <a className={classNames("nav-link","dropdown-toggle")} href="#" id="navbardrop" data-toggle="dropdown" onClick={this.setActiveHandler}>
            {linkName}
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#"></a>
          </div>
      </li>
    );
  }
  render(){
    return(
      <div className="Header">
            <nav class="navbar navbar-expand-md bg-custom navbar-dark">
                   <a class="navbar-brand" href="#"><img src={LTlogo} /></a>
                   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a className={classNames("nav-link","color")} href="#" onClick={this.setActiveHandler}>HOME</a>
                            </li>

                            {this.state.navBarList.map((list, index)=> {
                              return(
                                this.dropdown(list)
                              )
                            })}

                            <li>
                                <div className="iconBar">
                                  <div className="icon"></div>
                                  <div className="icon"></div>
                                  <div className="icon"></div>
                                </div>
                            </li>
                       </ul>
                    </div>
          </nav>
      </div>
    )
  }
}

export default Header;
