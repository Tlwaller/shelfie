import React, {Component} from 'react';
import './Form.css'
import Axios from 'axios';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgURL: this.imgURL,
            name: this.name,
            price: this.price
        }
        this.handleURL = this.handleURL.bind(this);
    }

    handleURL(e){
        this.setState({imgURL: e.target.value})
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    handlePrice = (e) => {
        this.setState({price: e.target.value})
    }

    reset = (e) => {
        e.preventDefault();
        this.setState({imgURL: ''});
        this.setState({name: ''});
        this.setState({price: ''});
    }

    handleSubmit = (e) => {

        Axios.post('/api/product', {
            image_url: this.state.imgURL,
            product_name: this.state.name,
            price: this.state.price
        // }).then((response) => {
        //     this.props.updateInventory(response.data)
        // })
        })}


    render() {
        return (
            <div id='form-container'>
                <form id='add-product' onSubmit={this.handleSubmit}>
                    <img src='http://kb.lenovo.com/media/images/HT500420/grey_cross_out_camera_20160531040300.png'/>
                    <label>Image URL:
                        <input 
                        type='text' name='img-URL'
                        value={this.state.imgURL}
                        onChange={this.handleURL}/>
                    </label>
                    <label>Product Name:
                        <input 
                        type='text' name='name'
                        value={this.state.name}
                        onChange={this.handleName}/>
                    </label>
                    <label>Price:
                        <input 
                        type='text' name='price'
                        value={this.state.price}
                        onChange={this.handlePrice}/>
                    </label>
                    <section id='btns'>
                        <button onClick={this.reset}>Cancel</button>
                        <input type='submit' value='Add to Inventory'/>
                    </section>
                    
                </form>
            </div>
        )
    }
}

export default Form;