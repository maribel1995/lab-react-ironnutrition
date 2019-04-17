import React, { Component } from "react";
import Food from "./Food";
import AddFood from './AddFood';
import foodsJson from "./foods.json";

class Foods extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: foodsJson,
      active: false,  

    };
  }

  handleChange = e => {
    let { name, value } = e.target;
    this.setState({[name]: value});
  };

  openFormBox = (e) => {
      this.setState({active: !this.state.active});
  }

  addFoodHandler = (food) => {
      const foods = this.state.foods;
      foods.push(food);
      this.setState({foods: foods, active:false});
  }

  render() {
    const { foods } = this.state;
    return (
      <div className="container">
       <div>
          <input
            type="text"
            class="input search-bar"
            name="search"
            placeholder="Search"
            value=""
          />
        </div>
      <button className="button is-info" onClick={(e) => this.openFormBox(e)}>Add Food</button>
     {this.state.active && <AddFood addTheFood={this.addFoodHandler} />}
        <div className="container">
          {foods.map(food => (
            <Food  {...food}/>
          ))}
        </div>
      </div>
    );
  }
}

export default Foods;
