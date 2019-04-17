import React, { Component } from "react";

class Foods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: "",
      quantity: "",
      image: ""
    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
      event.preventDefault();
      this.props.addTheFood(this.state);
  }

  render() {
    return (
      <div className="box">
        <form onSubmit={this.handleFormSubmit}>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <label className="label">Calories</label>
          <input
            type="text"
            name="calories"
            className="input"
            value={this.state.calories}
            onChange={e => this.handleChange(e)}
          />
          <label className="label">Image</label>
          <input
            type="text"
            name="image"
            className="input"
            value={this.state.image}
            onChange={e => this.handleChange(e)}
          />
          <label className="label">Quantity</label>
          <input
            type="number"
            name="quantity"
            className="input"
            value={this.state.quantity}
            onChange={e => this.handleChange(e)}
          />

          <input className="button is-success" type="submit" value="Submit"/>
          
        </form>
      </div>
    );
  }
}

export default Foods;
