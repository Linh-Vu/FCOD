import React from 'react';

import View from './View';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.node = null;
    this.setNode = this.setNode.bind(this);
    this.goto = this.goto.bind(this);
  }

  goto(value) {
    let current = window.scrollY;

    console.log('value:' + value);
    console.log('current:' + current);
    if (current < value) {
      current++;
    }
    if (current > value) {
      current--;
    }
    if(value === current) {
      return;
    }

    if (value !== current) {
      setTimeout(this.goto(value), 100);
    }
  }


  setNode(node) {
    this.node = node;
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 42) {
        this.node.style.position = 'fixed';
        this.node.style.top = 0;
      } else {
        this.node.style.position = 'inherit';
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