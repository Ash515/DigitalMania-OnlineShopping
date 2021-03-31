import React from 'react';
import data from '../data';
import{Link} from 'react-router-dom';
function HomeScreen(props){
    return <ul className="Products">
                      {
                       data.products.map(Product =>
                        <li>
                            <div className="Product">
                           <Link to={'/product/'+Product._id}>    <div className="product-image"> <img src={Product.image} alt={Product.image}></img></div></Link>
                                <div className="product-name">
                                    <Link to={'/product/'+ Product._id}>{Product.name}</Link></div>
                                <div className="product-brand">{Product.brand}</div>
                                <div className="product-price">${Product.price}</div>
                                <div className="product-rating">{Product.rating}Stars{Product.numreviews}</div>
                            </div>
                        </li>)
                      }

                        
                                              
                    </ul>
                     
}
export default HomeScreen;