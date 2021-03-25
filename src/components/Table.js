import React, { Component } from "react";
import TableRow from "./TableRow";
import ReactDOM from 'react-dom';

class Table extends Component {
  constructor() {
    super();
    this.state = {
      numRows: 1,
      numCols: 1,
      selectedColor: "red"
    }
    
    this.grid = React.createRef();

  }

  addRow = () => {
    this.setState(state => {
        return {numRows: state.numRows + 1}
    });
  }

  addColumn = () => {
    this.setState(state => {
        return {numCols: state.numCols + 1}
    });
  }

  removeRow = () => {
    this.setState(state => {
      return { numRows: state.numRows <= 1 ? 1: state.numRows - 1} //if numRows is greater than or equal to 1
    });
  }

  removeCol = () => {
    this.setState(state => {
      return {numCols: state.numCols <= 1 ? 1: state.numCols - 1}
    });
  }

  clearAll = () => {
    let table = ReactDOM.findDOMNode(this.grid.current).childNodes; //tr = nodes, td = childNodes
    //console.log(table)

    table.forEach(row => {
      for(let i = 0; i < this.state.numCols; i++) {
        let backgroundColor = row.childNodes[i].style.backgroundColor
        
        if(backgroundColor !== "")
          row.childNodes[i].style.backgroundColor = "white"
          
      }
    });
  }

  handleColorChange = (event) => {
    this.setState({selectedColor: event.target.value});
  }

  handleApplyColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor;
  }

  render() {
    let rows = [];

    for (let i = 0; i < this.state.numRows; i++) {
      rows.push(<TableRow numCols={this.state.numCols} handleApplyColor={this.handleApplyColor} />);
    }

    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <button onClick={this.removeCol}>Remove Col</button>
        <button>Fill All Uncolored</button>
        <button>Fill All</button>
        <button onClick={this.clearAll}>Clear</button>
        <select onChange={this.handleColorChange}>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>
        <table ref={this.grid}>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;