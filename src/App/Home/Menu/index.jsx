import React from 'react';

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
    // let current = Math.floor(window.scrollY);
    // this.scrollEvent = setInterval(() => {
    //   console.log('value:' + value);
    //   if (current < value) {
    //     current = current + 1;
    //   }
    //   if (current > value) {
    //     current = current - 1;
    //   }
    //   window.scrollTo(0, current);
    //   if (value === current) {
    //     console.log('clear true');
    //     clearInterval(this.scrollEvent);
    //   }
    this.scrollEvent(value);

  }

  scrollEvent (value) {
    let current = Math.floor(window.scrollY);

    if (current < value) {
      current = current++;
    }
    if (current > value) {
      current = current--;
    }
    window.scrollTo(0, current);
    if ( current !== value ) {
      setTimeout(this.scrollEvent(value), 1);
    }
    if ( current === value ) {
      return;
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