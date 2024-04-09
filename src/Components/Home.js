import React from 'react'
import './Home.css'
import Product from './Product'
export default function Home() {
  return (
    <div className="home">

<div className='home_contaner'> 
<img className="homepage_image"src="https://i.ytimg.com/vi/GR5n9g954Rs/maxresdefault.jpg "
alt="homepageimage"/>

<div className="home_row"> 
<Product  id="12467" title="The lean startup" price={11.99} image="https://cdn2.penguin.com.au/covers/original/9780670921607.jpg" rating={5}/>
<Product id="76834" title="Iphone 15- Sage Green" price={599.99}image="https://static1.pocketnowimages.com/wordpress/wp-content/uploads/2023/09/pbi-iphone-15-plus.png" rating={4}/>

</div>

<div className="home_row"> 

<Product  id="2368" title="Real Me Buds- Discount" price={34.23} image="https://m.media-amazon.com/images/I/41NVG86uNdL._AC_UF452,452_FMjpg_.jpg "rating={2}/>
<Product id="23785" title="Muscle Blaze- Bioenzyme Protein Whey" price={44.49 }image="https://m.media-amazon.com/images/I/41ULROuNesL._AC_UF452,452_FMjpg_.jpg" rating={3}/>
<Product id="12365" title="Robotic hand-held vaccum Cleaner" price={109.99}image="https://m.media-amazon.com/images/I/31Yj-BovUHL._AC_UF452,452_FMjpg_.jpg" rating={5}/>

</div>

<div className="home_row"> 
<Product id="87342" title="Special Deal-Renee cosmetics pH lipstcik" price={19.67} image="https://m.media-amazon.com/images/I/41OCzBgh2HL._AC_UF452,452_FMjpg_.jpg" rating={5}/>
<Product id="19846" title="ASIAN Men's under13 sports Shoes" price={12.89} image="https://images-eu.ssl-images-amazon.com/images/I/61utX8kBDlL._AC_UL675_SR675,480_.jpg" rating={5}/>
</div>

<div className="home_row"> 
<Product id="8694" title="Apple 2024 MacBook Air 13″ Laptop with M3 chip: 34.46 cm (13.6″) " price={700.67} image="https://m.media-amazon.com/images/I/41Xuid+t8cL._SX342_SY445_.jpg" rating={5}/>

</div>

</div>




    </div>
  )
}
