import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './Context/Context';



export default function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket},dispatch]= useStateValue();
    
const removeFromBasket=()=>{

    // remove the item from the basket
    dispatch({
type: 'REMOVE_FROM_BASKET',
id:id,

});
    
    }
    
  return (
    <div className="checkoutProduct">

      <img className="checkoutProduct_image" src={image} alt=""/>
      <div className="checkoutProduct_info">
       <p> <div className="checkoutProduct_title"> {title} </div> </p> 
       <p>  <div className='checkoutProduct_price'> 
        <small> $ </small>
        <strong> {price}  </strong>
       </div> </p>
        <div className="checkoutProduct_rating"> 
        {Array(rating).fill().map((_,i) => (<p> 🌟  </p>))}
        
        </div>
        <button className='removecheckoutProduct_btn' onClick={removeFromBasket}> Remove from Basket </button>
         </div>

    </div>

  )
}
