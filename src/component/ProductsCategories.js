import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoMdCheckmark, IoIosPin, IoLogoWhatsapp ,IoLogoTwitter} from "react-icons/io";
import { FaUpload, FaComment,FaUsers ,FaFacebookF,FaCamera} from "react-icons/fa";
import '../styles/ProductsCategories.css';
import '../styles/General.css';
import '../styles/Media.css';



class ProductsCategories extends Component {
    state={
    cartDisplay: undefined,
  };
  render() {
    let products  = [
      {name: 'Shirt' },
      {name: 'Trousers'},
      {name: 'Face caps'},
      {name: 'Shoes'},
      {name: 'Caps'},
      {name: 'Chain'},
      {name: 'Shirt' },
      {name: 'Trousers'},
      {name: 'Face caps'},
      {name: 'Shoes'},
      {name: 'Caps'},
      {name: 'Chain'},
      {name: 'Shoes'}
    ]
    return (
      <div className='ProductsCategories_main'>
        <h className='G_WCol G_smallestFont products'>Product Categories</h>
          
        {
          products.map((product) =>(
            <ul className='  G_WCol   products_container G_smBoda'>
              <li className='G_tooSmallFont'>{product.name}</li>
            </ul>
            )
          )
        }
      </div>
    );
  }
}


export default ProductsCategories;
