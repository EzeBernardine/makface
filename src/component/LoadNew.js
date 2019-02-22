import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { IoIosImage, IoMdPersonAdd} from "react-icons/io";
import { FaUpload, FaComment,FaUsers ,FaFacebookF,FaCamera} from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/LoadNew.css';
import '../styles/SignUp.css'



class LoadNew extends Component {
  state = {
    display: undefined
  }
  handlePostDisplay = () => {
    this.setState((prevState) =>(
     { display: !prevState.display}
    ))
  }
  render() {
    return (
      <div className='LoadNew_Container G_roundContainer'>

        <p className='postText G_smallestFont' onClick={this.handlePostDisplay}> Post a commodity ...</p>

        {
          this.state.display &&
          <form className='LoadNewInput_Container form' id='LoadNewInput_Container'>
            <div className=' G_flex'>
              <div className='nameOfCommodityDiv G_flex G_middle'>
                <label className=' G_subHeaderFontStyle G_smallestFont '>Name of commodity</label>
                <input type="text" placeholder="Name of commodity " name="psw" className='G_smallestFont input'id='NewLoadInput' ></input>
              </div>
              <div className='nameOfCommodityDiv G_flex G_middle'>
                <label className='G_subHeaderFontStyle G_smallestFont '>Price</label>
                <input type="text" placeholder="Optional " name="psw" className='G_smallestFont input'id='NewLoadInput' ></input>
              </div>
              
            </div>
          
            <textarea type="text" placeholder="Add a comment ..." className='G_smallerFont input G_smallestFont testArea ' ></textarea>
          
            <div className='G_flex G_middle iconButton'>
              <div className='LoadNewIcons G_middle G_flex G_biggestFont '>
                <span><IoIosImage /></span>
                <span><IoMdPersonAdd /></span>
              </div>
              <button className="G_Btn G_smallBtn ">Submit</button>
            </div>
            {/* <div className='loadNewOverlay'></div> */}
          </form>
        }
      </div>
    );
  }
}

export default LoadNew;