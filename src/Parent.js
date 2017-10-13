import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Child extends React.Component {
  render() {
    return (
      <div id="child">
        <h1 ref={(node) => { this.heading = node; }}>
          Child
        </h1>
      </div>
    );
  }
}

/*
 * Parent component
 */
class Parent extends React.Component {
  componentDidMount() {
    // Access child component refs via parent component instance like this
    console.log(this.child.heading.getDOMNode());
  }

  render() {
    return (
      <div>
        <Child
          ref={(node) => { this.child = node; }}
        />
      </div>
    );
  }
}


export default Parent;