import React, { Component } from 'react';
import  '../styles/Dashboard.css';
import  '../styles/General.css';
import Menu from './Menu';
import SearchBar from '../component/SearchBar';
import Profile from '../component/Profile'
// import IconFooter from './IconFooter';
import '../styles/Media.css';

class Dashboard extends Component {
  render() {

  let makface = ['Makface' ]
  let menu = ['Home', 'Post a commodity', 'Notification', 'List of Shops']

    return (
      <div className='dashboard_Container'>
       <div className='Menu G_smallerFont '><Menu menu = {menu} name = {makface}/></div>
       <div className='Profile D_size_position'><Profile /></div>
       <div className='Assets  D_size_position'>Assets/shops/building on rent</div>
       <div className='Unknown D_size_position'>Unknown</div>
       <div className='Chart D_size_position'>Chart</div>
       <div className='Advertisment D_size_position'>Advertisment</div>
       <div className='Searchbar centerContent '><SearchBar /></div>
       <div className='loadNew centerContent'>loadNew and display settings</div>
       <div className='newsFeed centerContent'>newsFeed</div>
      </div>
    );
  }
}


export default Dashboard;
