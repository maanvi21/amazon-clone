
import React from "react";
import "./Product.css";
import { useStateValue } from "../Context/Context";



function Product({ id, title, image, price, rating }) { 

  const [{basket},dispatch]=useStateValue();

const addToBasket = () =>{
  //dispatch the item into the data layer
dispatch({
  type:'ADD_TO_BASKET',
  item:{
    id:id,
    title:title,
    image:image,
    price:price,
    rating:rating,

  },
});

}


 return (
    <div className="product">
        <div className="product_info"> {title}
           <div className="product_price"><small> $ </small>   <strong> {price}</strong>
           <div className="product_rating"> 

{Array(rating).fill().map((_,i) => (<p> 🌟  </p>))}
            
             </div>
           </div>

        </div>
      <img className="homepage_product" src={image} alt="productimg"/>
     <button className='add_to_cart_btn' onClick={addToBasket}> Add to basket </button> 
    
    </div>
     
     );
  };
   
   export default Product;