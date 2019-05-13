import React, { Component } from 'react';
import '../styles/Dashboard.css';
import '../styles/General.css';
import '../styles/Media.css';
import '../styles/Form.css'

export default class Form extends Component {

  render() {
    let {formDatas} = this.props
    return (
      <div className='form_Container'>
        {
          formDatas.map(data => ( 
            <div className={'form_main'} >
              <p>{data.key}</p>
              <p>{data.value}</p>
            </div>
          ))
        }
      </div>
    );
  }
}
