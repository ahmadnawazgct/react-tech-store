import React from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import logo from '../images/logo.svg';
import styled from 'styled-components';
import { ProductConsumer } from '../context';

export default function Navbar() {
    return (
        <ProductConsumer>
            { value => {
                const { cartItems, handleSidebar, handleCart } = value;
                return (
                <NavWrapper>
                    <div className="nav-center">
                    <FaBars
                        className="nav-icon"
                        onClick={handleSidebar}
                    />
                    <img src={logo} alt="tech store logo"/>
                    <div className="nav-cart">
                        <FaCartPlus
                            className="nav-icon"
                            onClick={handleCart}
                        />
                        <div className="cart-items">{cartItems}
                        </div>
                    </div>
                    </div>
                </NavWrapper>
                );
            }}
        </ProductConsumer>
        
    )
}
const NavWrapper = styled.nav`
position:-webkit-sticky;
position:sticky;
top:0;
padding:1rem 1.5rem;
background:var(--mainGrey);
border-bottom:3px solid var(--primaryColor);

.nav-center{
    display:flex; //stay items in online
    align-items:center; //vertical item-alignment
    justify-content:space-between; //hr item-alignment with spaces
    max-width:1400px; //max-width on full screen
    margin:0 auto;
}
.nav-icon{
    font-size:1.5rem;
    cursor: pointer;
}
.nav-cart{
    position:relative;
}
.cart-items{
    background:var(--primaryColor);
    color:var(--mainWhite);
    font-size:0.85rem;
    position:absolute;
    top:-9px;
    right:-8px;
    padding:0 5px;
    border-radius:50%;
}


`;