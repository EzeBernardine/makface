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
      shopFrontView: require('../image/shop2.jpg'),
      shopName: 'PrideOfAbia',
      profileImg: require('../image/images.jpeg'),
      shopYear: '1998',
      aboutShop: "Hey-o! I created D3, a popular open-source JavaScript library for visualizing data. Until recently, I was also a graphics editor for The New York Times, where I helped produce a variety of data visualizations (such as Is It Better to Rent or Buy? and 512 Paths to the White Houd 512 Paths to the White House), maps (The Most Detailed Maps You’ll See From the Midterm Elections), and ths to the White House), maps (The Most Detailed Maps You’ll See From the Midterm Elections), and articles (A Game of Shark and Minnow). ",
      shopLocation: 'nmcdf street',
      shopPhone: '000000000000',
      shopSite: 'www.prideofabia.com'
    }

    let { } = this.props;
    let { edit, displayPersonal, displayShop } = this.state;
    return (
      <div className='FullProfile_container'>
        <div className='shopDiv'>
          <div className='fullProfile_shopImgDiv'>
            <div className='fullProfile_shopOverLayDiv'>
              <img src={productsData.shopFrontView} className='fullProfile_shopImg' />
              <div className='fullProfile_shopOverLay'> 
                <a href='\' className='fullProfile_FaCamera G_Position'><FaCamera /></a> 
              </div>
            </div>
            <h1 className='fullProfile_shopName G_subHeaderFont G_dBCol'>{productsData.shopName} <span className='G_tooSmallFont G_BCol'>Since {productsData.date} </span></h1>
          </div>  

          <div className='fullProfiledata'> 
            <div className='fullProfile_personal'>
              <div><img src={productsData.profileImg} className='fullProfileImg' /></div>

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

              </div>
            </div>

            <div className='fullProfile_shopData'>
              <h2>About {productsData.shopName} </h2>
              <p className='aboutShop G_smallestFont G_pLineHeight'>{productsData.aboutShop}</p>
              <div className='fullProfile_about G_tooSmallFont'>
                <p><span><FaMapMarkerAlt /> Location: </span><span>Ibgekwe Street</span></p>
                <p ><span><FaPhone /> Call Us On </span><span>{productsData.shopPhone}</span></p>
                <p ><span>Visite our site: </span><span><a href='#"'>{productsData.shopSite}</a></span></p>
                <p>
                  <span>Follow Us On:</span>
                  <span>
                    <span className='socialMedia  profieIconSize icons'>
                      <span><IoLogoWhatsapp /></span> <span><FaFacebookF /></span>
                      <span><IoLogoTwitter /></span>
                    </span>
                  </span>
                </p>
              </div>
              <iv className='fullProfile_fold'><div></div></iv>
            </div>
          </div>


          <div className='fullProfile_settingsDiv'>
            <div className='fullProfile_settngsSubDiv G_tooSmallFont'>
              <div className='fullProfile_settings_header G_flex '>
                <div> <h2 onClick={this.handlePersonalSettingsDisplay}>Personal Settings</h2> </div>
                <div> <h2 onClick={this.handleShopSettingsDisplay}>Shop Settings</h2>  </div>
              </div>
              {
                displayPersonal &&
                <div class='fullProfile_personalSettings fullProfile_settings G_smallestFont'>
                  <p>
                    <span> Name: </span>
                    <span><span className='edit' contentEditable={!edit} >{productsData.name}</span></span>
                  </p>
                  <p>
                    <span> Country:</span>
                    <span><span className='edit' contentEditable={!edit}>{productsData.country}</span></span>
                  </p>
                  <p>
                    <span> State:</span>
                    <span><span className='edit' contentEditable={!edit}>{productsData.state}</span></span>
                  </p>
                  <p>
                    <span>Address: </span>
                    <span><span className='edit' contentEditable={!edit}>{productsData.address}</span></span>
                  </p>
                  <p>
                    <span> Religion:</span>
                    <span><span className='edit' contentEditable={!edit}>{productsData.religion}</span></span>
                  </p>
                  <p>
                    <span> Age:</span>
                    <span> <span className='edit number' contentEditable={!edit}>{productsData.age}</span> </span>
                  </p>
                  <p>
                    <span>Personale Contact:</span>
                    <span> <span className='edit number' contentEditable={!edit}>{productsData.phone}</span> </span>
                  </p>
                  <p>
                    <span> Gender:</span>
                    <span >
                      <select>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </span>
                  </p>

                </div>
              }

              {
                displayShop &&
                <div class='fullProfile_shopSettings fullProfile_settings G_smallestFont'>
                  <p>
                    <span>Shop website:</span>
                    <span><span className='edit' contentEditable={!edit}>{productsData.shopSite}</span></span>
                  </p>
                  <p>
                    <span>Shop Location:</span>
                    <span><span className='edit' contentEditable={!edit}>{productsData.shopLocation}</span></span>
                  </p>
                  <p>
                    <span>Shop's url: </span>
                    <span><span className='edit' contentEditable={!edit}>{productsData.shopSite}</span></span>
                  </p>
                  <p>
                    <span>Shop Contact:</span>
                    <span> <span className='edit number' contentEditable={!edit}>{productsData.shopPhone}</span> </span>
                  </p>
                  <p>
                    <span>Allow people a DM me?</span>
                    <span > <input type='checkbox' /></span>
                  </p>
                </div>
              }

              <div className={'fullProfile_settings'}>
                {
                  edit ?
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
