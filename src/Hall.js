import React, { Component } from 'react';
import './Hall.css';

class HallCol extends Component {
    constructor(props) {
      super(props);
      this.state = {
        chair_cls:'chair-default'
      };
    }

    handleClick(e) {
      var chair_cls = null;
      if(this.state.chair_cls==="chair-default") {
          chair_cls = 'chair-sold';
        }
        else {
          chair_cls = 'chair-default';
        }

        this.setState({
          chair_cls: chair_cls
        })
        this.props.changeState(chair_cls);
      }

    render(){
      return(
            <div className={this.state.chair_cls} onClick={(e)=>this.handleClick(e)}>
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

class Hall extends React.Component {
  constructor(props) {
    super(props);
    var rows_num = this.props.rows;
    var cols_num = this.props.cols;

    var row = [];
    for (var i = 0; i < rows_num; i++) {
      var col = [];
      for (var k = 0; k< cols_num; k++) {
          col.push(<HallCol row = {i+1} seat_number = {k+1}  changeState={this.props.changeState} />);
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

  changeState(value) {
    this.setState({ 
      chair_cls: value 
    });
  }

  countSold(e){
   this.state.rows.map(function(row){
        row.map(function(col){
            console.log(col);
        });
    });
  }

  render() {
    return (
      <div className="hall">
        <Table rows={this.state.rows} changeState={this.changeState} />
        <button className = "btn-default" onClick={(e)=>this.countSold(this)}>
            TOTAL SOLD
        </button>
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    return (
      <table className="hall-grid" >
        <tbody>
          {this.genRow()}
        </tbody>
      </table>
    );
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
}

export default Hall;
