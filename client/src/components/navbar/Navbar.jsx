import React, { Component } from "react";
import "./navbar.css";
import { navigations } from "./navigations";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import CloseIcon from '@material-ui/icons/Close';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      selected: "Popular",
    };
  }

  select = (m) => {
    this.setState({
        selected: m.name,
      });
      this.toggleMobileMenu(false)
      setTimeout(() => {
        this.props.selectCategory(m);
      }, 200);
  };


  toggleMobileMenu = (val) => {
    this.setState({
        mobile_menu:val
    })
        let body = document.querySelector('body')
        body.style.overflow = val ? 'hidden'  :''
  }


  sctollToTop = () => {
      let element =  document.querySelector('body')
      if(element){
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
      }
  }
  render() {
    const { selected , mobile_menu} = this.state;
    return (
      <div className="navbar flex__start">
       <figure
       onClick = {() =>this.sctollToTop()}
       >MovieTime</figure>
        <div
        className='mobile__hamgurger'
        onClick = {() => this.toggleMobileMenu(!mobile_menu)}
        >
           {mobile_menu ? <CloseIcon /> : <MenuRoundedIcon />}
        </div>
        <ul 
        id={mobile_menu ? 'navbar__categories--active' :''}
        className="navbar__categories flex__start">
          {navigations.map((m, i) => {
            return (
              <li
                style={{
                  opacity: selected === m.name ? 1 : "",
                }}
                onClick={() => this.select(m)}
              >
                {m.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navbar;
