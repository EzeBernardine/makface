import React, { Component } from 'react';
import  '../styles/Dashboard.css';
import  '../styles/General.css';
import Menu from './Menu';
import SearchBar from '../component/SearchBar';
import Profile from '../component/Profile';
import Cart from '../component/Chart';
import ProductsCategories from '../component/ProductsCategories';
import LoadNew from './LoadNew';
import NewsFeed from './NewsFeed';
import Advert from './Advert';
import FixedAsset from './FixedAsset';
import '../styles/Media.css';

export default class Dashboard extends Component {
  state={
    cartDisplay: undefined,
    homeDisplay: undefined,
  };
  handleCartDisplay = ()=>  this.setState(prevState => (
      {cartDisplay: true}
    ))
  handleHomeDisplay = ()=>  this.setState(prevState => (
      {cartDisplay : false,
        homeDisplay: true}
    ))
 
  multiDisplay = (e)=> { 
  // Handling searchInput box-shadow
    // if((document.forms[0].id === 'nothing') && ( e.target.id === 'SearchInput'))
    //   {document.forms[0].id = 'boxShadow';}
    //  else if((document.forms[0].id === 'boxShadow') && ( e.target.id !== 'SearchInput'))
    //   {document.forms[0].id = 'nothing'; }
      
  
  }
  render() {
    let makface = ['Makface' ]
    let menu = [ 'Home', 'Notification', 'List of Shops', 'Cart'];
    let {cartDisplay} = this.state


    return (
      <div className='dashboard_Container' onClick={this.multiDisplay} >
        <div className='Menu G_smallerFont '><Menu menu = {menu} name = {makface} handleCartDisplay = {this.handleCartDisplay} handleHomeDisplay={this.handleHomeDisplay}/></div>
        
        <div className='Profile'>
          <Profile />
          <ProductsCategories />
        </div>

        <div className='sub_dashboard_Container'>
        {
          cartDisplay ? 
          <div className='displayedUpMenu'>
            <div className='Searchbar centerContent '> <SearchBar /> </div>
            <Cart handleCartDisplay ={this.handleCartDisplay}/>
          </div>
           :
           <div>
            <div className='shop_advert G_flex'>
              <div className='Advertisment'><Advert /></div>
              <div className='Assets '><FixedAsset /></div>
            </div>
            <div className='search_loadNew_newsFeed'>
              <div className='Searchbar centerContent '> <SearchBar /> </div>
              <div className='loadNew'>< LoadNew /> </div>
              <div className='newsFeed centerContent'><NewsFeed /></div>
            </div>
          </div>
        }

        </div>
      </div>
    );
  }
}






















 //   multiDisplay = (e) => {
  // // Handling the searchbar box-shadow
  //     let SearchInputContainer =  document.getElementsByClassName('SearchInput_Container')[0]
  //     if(e.target === document.getElementsByClassName('SearchInput')[0]){
  //       SearchInputContainer.id = 'boxShadow';
  //     }else if(document.getElementById('boxShadow')){
  //       SearchInputContainer.id = 'invalidId';
  //     }
  
  // // Handle NewLoad display
  //     if(e.target === document.getElementsByClassName('postText')[0]){
  //       document.getElementsByClassName('dontShow')[0].classList.toggle('show')}
  
  // // Handle NewsFeed dropdown display
  //     if(e.target === document.getElementsByClassName('dropDownIcon')[0]){
  //       document.getElementsByClassName('dropDown_dontDispaly')[0].classList.toggle('dropDown_Dispaly')}
  
  //   }