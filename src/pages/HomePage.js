import React from "react";
import {ProductConsumer} from '../context/Context'

export default function HomePage() {
  return <ProductConsumer>
    { value =>{
      return(
        <h1>hello from HomePage</h1>
      )
    }}
  </ProductConsumer>
} 