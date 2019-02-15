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
      <div className='G_container dashboard_Container'>
       <div className='Menu G_smallerFont '><Menu menu = {menu} name = {makface}/></div>
       <div className='Profile'><Profile /></div>
       <div className='Searchabr'><SearchBar /></div>
       <div className='Advertisment'>Advertisment</div>
       <div className='loadNew'>loadNew and display settings</div>
       <div className='newsFeed'>newsFeed</div>
       <div className='Assets'>Assets/shops/building on rent</div>
       <div className='Unknown'>Unknown</div>
       <div className='Chart'>Chart</div>
      </div>
    );
  }
}


export default Dashboard;
