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
import FullProfile from './FullProfile';
import '../styles/Media.css';

export default class Dashboard extends Component {
  state={
    profile:  true,
    cartDisplay: undefined,
    homeDisplay: undefined,
    fullProfileDisplay: undefined,
  };
  handleCartDisplay = ()=>  this.setState(prevState => (
      {
        profile:  true,
        cartDisplay: true
      }
    ))
  handleHomeDisplay = ()=>  this.setState(prevState => (
      {
        profile:  true,
        cartDisplay : false,
        fullProfileDisplay: false,
        homeDisplay: true
      }
    ))
  handleFullProfileDisplay = () => this.setState(prevState => (
    {
      cartDisplay : false,
      homeDisplay: false,
      profile: false,
      fullProfileDisplay: true,
    }
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
    let {profile, cartDisplay, fullProfileDisplay} = this.state


    return (
      <div className='dashboard_Container' onClick={this.multiDisplay} >
        <div className='Menu G_smallerFont '><Menu menu = {menu} name = {makface} handleCartDisplay = {this.handleCartDisplay} handleHomeDisplay={this.handleHomeDisplay}/></div>
        
        {
          profile && 
          <div className='Profile'>
            <Profile handleFullProfileDisplay={this.handleFullProfileDisplay}/>
            <ProductsCategories />
          </div>
        }

       
       
        {
          cartDisplay ? 
          <div className='displayedUpMenu sub_dashboard_Container'>
            <div className='Searchbar centerContent '> <SearchBar /> </div>
            <Cart handleCartDisplay ={this.handleCartDisplay}/>
          </div>
        :
          fullProfileDisplay ?
            <div className='FullProfile'><FullProfile /></div>
        :
           <div className='sub_dashboard_Container'>
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