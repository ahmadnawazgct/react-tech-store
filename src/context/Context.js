import React, { Component } from 'react'

const ProductContext = React.createContext();

export class ProductProvider extends Component {
    state = {
        sidebarOpen:false,
        cartOpen:false,
        cartItems:0
    }
// handle sidebar
handleSidebar = () =>{
    this.setState({
        sidebarOpen:!this.sidebarOpen
    })
}
// handle sidecart
handleCart = () =>{
    this.setState({
        cartOpen:!this.sidebarOpen
    })
}
// closing cart
closeCart = () => {
    this.setState({
        cartOpen:false
    })
}
//open cart 
openCart = () =>{
    this.setState({
        cartOpen:true
    })
}
    render() {
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart:this.handleCart,
                openCart:this.openCart,
                closeCart: this.closeCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export const ProductConsumer = ProductContext.Consumer;

export default { ProductProvider, ProductConsumer };