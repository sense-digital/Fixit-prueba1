import React, {Component} from 'react';
import Box from './Box';
import db from '../FirestoreConfig';
import { Link, NavLink } from 'react-router-dom';

class ReserveSection1 extends Component {  
  constructor () {
    super() 
    this.state = {
      data:[] 
    }
  }


  componentDidMount () {
    db.collection('celulares').get().then((snapShots)=>{
      this.setState({
        data: snapShots.docs.map(doc => {
          return (doc.data());
        })
      })
    })
  }
    


  render () {   
      return (
        <div>
         <ul>
          {this.state.data.map(OptionBox=>{
                return( 
                  <Box key={OptionBox.ref} celular={OptionBox.ref}/> 
                )
          })}
         </ul>
        </div>
      );
    }
  }

export default ReserveSection1;