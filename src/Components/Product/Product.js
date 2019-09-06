import React, {Component} from 'react';
import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            imgURL: props.imgURL,
            name: props.name,
            price: props.price
        }
    }

    render() {
        return (
            <div className='product'>
                <img src={this.state.imgURL} className='product-img'/>
                <section className='product-txt'>
                    <h3 >{this.state.name}</h3>
                    <h3 >${this.state.price}</h3>
                </section>
            </div>
        )
    }
}

export default Product;