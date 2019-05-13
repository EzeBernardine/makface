import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdHeart, IoIosPin, IoLogoWhatsapp, IoLogoTwitter } from "react-icons/io";
import { FaUpload, FaComment, FaUsers, FaFacebookF, FaCamera, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import NewsFeed from './NewsFeed'
import '../styles/FullProfile.css';
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/IconFooter.css'



class FullProfile extends Component {
  state = {
    displayShop: undefined,
    displayPersonal: true,
    edit: true,
  }
  handleShopSettingsDisplay = () => {
    this.setState(prevState => (
      {
        displayPersonal: false,
        displayShop: true
      }
    ))
  }
  handlePersonalSettingsDisplay = () => {
    this.setState(prevState => (
      {
        displayShop: false,
        displayPersonal: true
      }
    ))
    
  }
  handlePEditButton = () => {
    this.setState(prevState => (
      { edit: !prevState.edit }
    ))
  }
  render() {
    let productsData = {
      name: 'Kings Nduka',
      userName: 'KingsNduka',
      date: '1998',
      gender: 'male',
      age: '25',
      country: 'Nigeria',
      state: 'Enugu',
      address: 'Enugu',
      phone: '000000000000',
      joined: '2019',
      religion: 'Christain',
      shopName: 'PrideOfAbia',
      shopImg: require('../image/images.jpeg'),
      shopYear: '1998',
      aboutShop: "Hey-o! I created D3, a popular open-source JavaScript library for visualizing data. Until recently, I was also a graphics editor for The New York Times, where I helped produce a variety of data visualizations (such as Is It Better to Rent or Buy? and 512 Paths to the White House), maps (The Most Detailed Maps You’ll See From the Midterm Elections), and articles (A Game of Shark and Minnow). I write occasionally (Visualizing Algorithms, How To Scroll). You can see more of my work on my website and Twitter",
      shopLocation: 'nmcdf street',
      shopPhone: '000000000000',
      shopSite: 'www.prideofabia.com'
    }

    let { } = this.props;
    return (
      <div className='FullProfile_container'>
        <div className='shopDiv'>
          <img src={require('../image/shop2.jpg')} className='fullProfile_shopImg' />
          <h1 className='fullProfile_shopName G_subHeaderFont G_dBCol'>{productsData.shopName} <span className='G_tooSmallFont G_BCol'>Since {productsData.date} </span></h1>

          <div className='fullProfiledata'>
            <div className='fullProfile_personal'>
              <div><img src={productsData.shopImg} className='fullProfileImg' /></div>

              <div className='fullProfile_personal_main'>
                <div className='fullProfileName'>
                  <h1 className='G_dBCol G_subHeaderFont'>{productsData.name}</h1>
                  <p className='G_dBCol G_smallestFont'>{productsData.userName}</p>
                </div>
                <p className='fullProfile_join G_offCol'>Joined {productsData.joined}</p>
                <button className='G_Btn G_longBtn'>Message</button>
                <div className='fullProfile_about G_tooSmallFont G_dBCol'>
                  <p><span>Religion: </span><span>{productsData.religion}</span></p>
                  <p><span>Gender: </span><span>Male</span></p>
                  <p><span>Country: </span><span>Nigria</span></p>
                  <p><span>State: </span><span>Enugu</span></p>
                  <p><span>Phone Number: </span><span>{productsData.phone}</span></p>
                </div>
                <div className='socialMedia G_flex profieIconSize icons'>
                  <span><IoLogoWhatsapp /></span> <span><FaFacebookF /></span>
                  <span><IoLogoTwitter /></span>
                </div>
              </div>
            </div>

            <div className='fullProfile_shopData'>
              <h2>About {productsData.shopName} </h2>
              <p className='aboutShop G_smallestFont G_pLineHeight'>{productsData.aboutShop}</p>
              <div className='fullProfile_about G_tooSmallFont'>
                <p><span><FaMapMarkerAlt /> Location: </span><span>Ibgekwe Street</span></p>
                <p ><span><FaPhone /> Call Us On </span><span>{productsData.shopPhone}</span></p>
                <p ><span>Visite our site: </span><span><a href='#"'>{productsData.shopSite}</a></span></p>
              </div>
              <iv className='fullProfile_fold'><div></div></iv>
            </div>
          </div>


          <div className='fullProfile_settingsDiv'>
            <div className='fullProfile_settngsSubDiv G_tooSmallFont'>
              <div className='fullProfile_settings_header G_flex '>
                <h2 onClick={this.handlePersonalSettingsDisplay}>Personal Settings</h2>
                <h2 onClick={this.handleShopSettingsDisplay}>Shop Settings</h2>
              </div>
              {
                this.state.displayPersonal &&
                <div class='fullProfile_personalSettings fullProfile_settings G_smallestFont'>
                  <p><span> Name: </span><span className='edit'>{productsData.name}</span></p>
                  <p><span> Gender:</span><span className='edit'>{productsData.gender}</span></p>
                  <p><span> Age:</span><span className='edit'>{productsData.age}</span></p>
                  <p><span> Religion:</span><span className='edit'>{productsData.religion}</span></p>
                  <p><span>Address: </span><span className='edit'>{productsData.address}</span></p>
                  <p><span> Country:</span><span className='edit'>{productsData.country}</span></p>
                  <p><span> State:</span><span className='edit'>{productsData.state}</span></p>
                  <p><span>Personale Contact:</span><span className='edit'>{productsData.phone}</span></p>

                </div>
              }

              {
                this.state.displayShop &&
                <div class='fullProfile_shopSettings fullProfile_settings G_smallestFont'>
                  <p><span>Shop Contact:</span><span className='edit'>{productsData.shopPhone}</span> </p>
                  <p><span>Shop website:</span><span className='edit'>{productsData.shopSite}</span> </p>
                  <p><span>Shop Location:</span><span className='edit'>{productsData.shopLocation}</span></p>
                  <p><span>SHop's url: </span><span className='edit'>{productsData.shopSite}</span> </p>
                  <p><span>Shop Front View:</span><input type='file' /></p>
                  <p><span>Allow people a DM me?</span><span><input type='checkbox' /></span> </p>
                </div>
              }
                <div className={'fullProfile_settings'}>
              {
                this.state.edit ? 

                (<button className='G_Btn G_smallBtn' onClick={this.handlePEditButton}>Edit</button>) : 
                (<button className='G_Btn G_smallBtn' onClick={this.handlePEditButton}>Save</button>)
              }
              </div>
            </div>
          </div>


        </div>

      </div>
    );
  }
}


export default FullProfile;
