import React, {Component}  from "react";
import './add-deal-form.css';

export default class AddDealForm extends Component {

  state = {
    label: ''
  };

  onLabelChange = (el) => {
    this.setState(
     {
       label: el.target.value
      }
    )
  }

  onSubmit = (el) => {
    el.preventDefault();
    this.props.onDealAdd(this.state.label);
    this.setState({label : ''})
  }

  render() {
    return (
      <form className="add-deal-form d-flex" onSubmit={this.onSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Deal to do"
          value={this.state.label}
          onChange={this.onLabelChange}
        />
        <button className="btn btn-outline-secondary">Add New Deal</button>
      </form>
    );
  }
}