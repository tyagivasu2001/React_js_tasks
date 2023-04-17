import React from 'react'
import './Home.scss'
import Navbar from '../components/Navbar'
 const Home=()=>{
 
 return(
   <div>
    <Navbar name="Home"/>
    <div className="container"></div>
    <div className="product">
      <img id="img" src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Cl9DSSdNL._SY450_.jpg" alt="" />
      <h1>Protinex</h1>
      <p>For Hair ,Skin ,Nails ,Muscles and Ligament Growth </p>
      <br />
       <a href='#'>Buy</a>
    </div>
    <div className="product">
      <img id="img" src="https://mypetnutritionist.com/wp-content/uploads/2022/08/5f4cd851ed2728309a5b2d53_shutterstock_1160916628.jpg" alt="" />
      <h1>Carbohydrates</h1>
      <p>Also Known as Starch(Suger) and fiber provides energy</p>
       <br />
       <a href='#'>Buy</a>
    </div>
    <div className="product">
      product 3 <br />
       <a href='#'>Buy</a>
    </div>
    <div className="product">
      product 4 <br />
       <a href='#'>Buy</a>
    </div>
      
    </div>
    
   
 );
}
export default Home;