import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoMdCheckmark, IoIosPin, IoLogoWhatsapp ,IoLogoTwitter} from "react-icons/io";
import { FaUpload, FaComment,FaUsers ,FaFacebookF,FaCamera} from "react-icons/fa";
import '../styles/ProductsCategories.css';
import '../styles/General.css';
import '../styles/Media.css';



class ProductsCategories extends Component {
    state={
    // cartDisplay: undefined,
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
        <h1 className='G_dBCol G_smallestFont ProductsCategories_products'>Product Categories</h1>
          
        <ul className='G_dBCol ProductsCategories_container G_smBoda'>
        {
          products.map((product) =>(<li className='G_tooSmallFont ProductsCategories_eachProduct'  onClick={this.props.handleProductsDisplay}>{product.name}</li>))
        }
        </ul>
      </div>
    );
  }
}


export default ProductsCategories;
