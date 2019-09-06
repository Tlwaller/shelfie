import React from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inventory: []
    }
  }

  componentDidMount = () => {
    axios.get('/api/inventory')
    .then(response => {
      this.setState({inventory: response.data})
    })
    .catch(err => console.log(err))
  }

  updateInventory = (inventory) => {this.setState({inventory})}

    render() {
      return (
        <div className="App">
        <Header/>
        <Form updateInventory={this.updateInventory}/>
        <Dashboard inventory={this.state.inventory}>
          <Product/>
        </Dashboard>
        
      </div>
    );
  }
}

export default App;
