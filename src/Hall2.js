import React, { Component } from 'react';
import './Hall.css';

class Block1 extends Component {
    constructor(props) {
      super(props);
      this.state = {
        block_cls:'block-default'
      };
    }

     handleClick() {
      var block_cls = null;
      if(this.state.block_cls=="block-default") {
          block_cls = 'block-custom';
        }
        else {
          block_cls = 'block-default';
        }
        this.setState({
          block_cls: block_cls
        })
    }
    render(){
      return(
            <div className={this.state.block_cls} onClick={(e) => this.handleClick(e)}></div>
        );
    }
}

class Block2 extends React.Component {
    render() {
      return (
        <table>
          <tbody>
            <tr>
              <td>
                <Block1 />
              </td>
              <td>
                <Block1 />
              </td>
            </tr>
          </tbody>
        </table>
      )}}

class Block3 extends React.Component {
  render() {
    return (
      <div>
        <Block2 />
        <button className = "btn-default" onClick={this.countBlock}>COUNT</button>
      </div>
    )}}

export default Block3;
