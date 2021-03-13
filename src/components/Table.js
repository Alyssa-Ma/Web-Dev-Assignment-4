import { Component } from "react";
import TableRow from "./TableRow";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      numRows: 1,
      numCols: 1,
      selectedColor: "red"
    }
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
      return { numRows: state.numRows <= 1 ? 1: state.numRows - 1}

    });
  }

  removeCol = () => {
    this.setState(state => {
      return {numCols: state.numCols <= 1 ? 1: state.numCols - 1}
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

    //TODO: Add onclick functions to the buttons 
    return (
      <div>
        <button onClick={this.addRow}>Add Row</button>
        <button onClick={this.addColumn}>Add Column</button>
        <button onClick={this.removeRow}>Remove Row</button>
        <button onClick={this.removeCol}>Remove Col</button>
        <button>Fill All Uncolored</button>
        <button>Fill All</button>
        <button>Clear</button>
        <select onChange={this.handleColorChange}>
          <option value="red">red</option>
          <option value="blue">blue</option>
          <option value="yellow">yellow</option>
        </select>
        <table>
          {rows}
        </table>
      </div>
    )
  }
}

export default Table;