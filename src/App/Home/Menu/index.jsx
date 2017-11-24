import React from 'react';
import animateScrollTo from 'animated-scroll-to';

import View from './View';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.scrollEvent = null;
    this.node = null;
    this.setNode = this.setNode.bind(this);
    this.goto = this.goto.bind(this);
  }

  goto(value) {
    const el = document.getElementById(value);
    animateScrollTo(el.offsetTop - 54);
  }

  setNode(node) {
    this.node = node;
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 42) {
        this.node.style.position = 'fixed';
        this.node.style.backgroundColor = '#323232';
        this.node.style.top = 0;
        document.getElementsByClassName('banner')[0].style.marginTop = '54px';
      } else {
        this.node.style.position = 'inherit';
        this.node.style.backgroundColor = '#fff';
        document.getElementsByClassName('banner')[0].style.marginTop = '0';
      }
    });
  }

  render() {
    return (
      <View setNode={this.setNode} goto={this.goto}/>
    )
  }
}

export default Menu;