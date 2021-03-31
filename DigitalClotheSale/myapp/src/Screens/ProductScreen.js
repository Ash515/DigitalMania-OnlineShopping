import React from 'react';
import data from '../data';
import {Link} from 'react-router-dom';
function ProductScreen(props){
   console.log(props.match.params.id);
   const product=data.products.find(x=>x._id===props.match.params.id);
   return <div >
      <div className="backtoresult">
         <Link to="/">Back to result</Link>
      </div>
      <div className="details">
         <div className="datails-image">
            <img src={product.image} alt="product"></img>
         </div>
         <div className="details-info">
            <ul>
               <li>
                 <h4>{product.name}</h4>
               </li>
               <li>
                  {product.rating} Stars ({product.numreviews})               
               </li>
               <li>
                Price: <b>Rs{product.price}</b>
               </li>
               <li>
                  Description:
                  <div>
                     {product.description}
                  </div>
               </li>
            </ul>
         </div>
         <div className="details-action">
            <ul>
               <li>Price:{product.price}</li>
              <li>Status:{product.status}</li>
              <li>Qty:   <select className="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                 </select></li>
                 <li><button className="button">Add to Cart</button></li>

            </ul>
         </div>
     </div>
     </div>
      
   
}
export default ProductScreen;