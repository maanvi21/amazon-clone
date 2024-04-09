import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from "./Context/Context";
import CheckoutProduct from './CheckoutProduct';

export default function Checkout() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className="checkout">
     <div className="checkout_left">
       
      <img className="checkout_ad" src="https://cashbytes.org/wp-content/uploads/2019/10/Ocean-Credit-Card-compressor.jpg" alt="ad"/>
     
     <div> 
      <div className="checkout_title"> 
<h2> Your Shopping Basket </h2>

{basket.map(item => (
  <CheckoutProduct  title={item.title} id={item.id} price={item.price} image={item.image} rating={item.rating}/>
))}
</div>
</div>

</div>

<div className="checkout_right"> 

Proceed to checkout 
<Subtotal/>
</div>

    </div>
  )
}
