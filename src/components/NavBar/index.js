import React, { Component } from "react";

import Wrapper from '.././Wrapper';
import Menu, { MenuItem } from "./Menu";
import MobileButton from "./MobileButton";
import Logo from "./Logo";
import HeaderContainer from "./Header";
import { ReactComponent as Search } from '../../utils/images/home/search.svg';

class NavBar extends Component {
  state = {
    isMenuHidden: true
  };

  onToggleMenu = () => {
    this.setState((prevState, props) => {
      return { isMenuHidden: !prevState.isMenuHidden };
    });
  };

  render() {
    return (
      <HeaderContainer>
        <Wrapper className="header">
          <Logo href="/">Rule of Thumb.</Logo>
          <Menu isHidden={this.state.isMenuHidden}>
            <MenuItem href="/pasttrials">Past Trials</MenuItem>
            <MenuItem href="/howitworks">How It Works</MenuItem>
            <MenuItem href="/login">Log In / Sign Up</MenuItem>
            <MenuItem href="/search"><Search width="24" height="26px" /></MenuItem>
          </Menu>
          <MobileButton onClick={this.onToggleMenu} />
        </Wrapper>
      </HeaderContainer>
    );
  }
}

export default NavBar;
