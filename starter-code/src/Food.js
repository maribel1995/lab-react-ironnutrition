import React, {Component} from 'react';

class Food extends Component{

    constructor(props){
        super(props)

        this.state = {
            quantity: 0
        }
    }

    handleChange = (e) => {
        this.setState({quantity: e.target.value})
    }

    addQuantity = (e) => {
        
    }

    render(){
        const {name, calories, image, quantity} = this.props;
        return(
            <div className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={image}/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{name}</strong> <br/>
                    <small>{calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input type="number" className="input" value={this.state.quantity} onChange={(e) => this.handleChange(e)}/>
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick={(e) => this.addFood(e)}>+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        );
    }

}

export default Food;