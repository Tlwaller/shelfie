import React, {Component} from 'react';
import './Dashboard.css'
import Product from '../Product/Product';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const inventoryMapped = this.props.inventory.map((product, i) => {
            return(
                <Product id={product.id} imgURL={product.image_url} name={product.product_name} price={product.price}/>
            )
        })

        return (
            <div id='dash'>
                {inventoryMapped}
            </div>
        )
    }
}

export default Dashboard;