import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Hall.css';

class HallCol extends Component {
    constructor(props) {
      super(props);
      this.state = {
        chair_cls:'chair-default'
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      let chair_cls = null;
      if(this.state.chair_cls==="chair-default") {
        chair_cls = 'chair-sold';
      } else {
        chair_cls = 'chair-default';
      }

      this.setState({
        chair_cls: chair_cls
      });
    }

    render(){
      return(
            <div className={this.state.chair_cls} onClick={this.handleClick}>
              <div className="backrest">
                  <p>{this.props.seat_number}</p>
              </div>
              <div className="armrest-left">
              </div>
              <div className="armrest-right">
              </div>
            </div>
        );
    }
}

class Table extends React.Component {
  constructor() {
    super();
    this.genRow = this.genRow.bind(this);
  }

  genRow() {
    var rows = this.props.rows;
    return rows.map(function(v, i) {
      var tmp = v.map(function(v2, j) {
        return (
          <td key={'td' + i + '_' + j} className='chair-cell' >
            {v2}
          </td>
        );
      });

      return (
        <tr key={'tr' + i}>
          {tmp}
        </tr>
      )
    });
  }

  render() {
    return (
      <table className="hall-grid" >
        <tbody>
          {this.genRow()}
        </tbody>
      </table>
    );
  }
}

class Hall extends React.Component {
  constructor(props) {
    super(props);
    var rows_num = this.props.rows;
    var cols_num = this.props.cols;

    this.AddRow = this.AddRow.bind(this);
    this.countSold = this.countSold.bind(this);

    var row = []; 
    for (var i = 0; i < rows_num; i++) {
      var col = [];
      for (var k = 0; k< cols_num; k++) {
          col.push(<HallCol row = {i+1} seat_number = {k+1} />);
      }
      row.push(col);
    }

    this.state = {
      rows: row
    };
  }

  AddRow() {
    let newRows = this.state.rows;
    newRows.push([0, 0]);
    this.setState({rows: newRows});
  }
  
  countSold(){
     //let snapCount = React.Children.toArray(this.props.children).filter((item) => item.props.className === 'snap').length;
     console.log();
  }

  render() {
    return (
      <div className="hall">
        <Table rows={this.state.rows} />
        <button className = "btn-default" onClick={this.countSold}>
            TOTAL SOLD
        </button>
      </div>
    );
  }
}

export default Hall;