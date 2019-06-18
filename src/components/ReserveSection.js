//sección de reservas

import React, {Component} from 'react';
import Box from './Box';

class ReserveSection extends Component {  


  state = {
    data:[
    {
      id:"1",
      celular:"Iphone 6 plus",
    },
    {
      id:"2",
      celular:"Iphone 6 ",
    },
    {
      id:"3",
      celular:"Iphone 7 ",
    },
    {
      id:"4",
      celular:"Iphone 7plus ",
    },
    {
      id:"5",
      celular:"Iphone 8 ",
    }
  ] };

  render () {   
      return (
        <div>
          
         <ul>
          {this.state.data.map(OptionBox=>{
                return( 
                  <Box key={OptionBox.id} celular={OptionBox.celular}/> 
                )
          })}
         </ul>
        </div>
      );
    }
  }

export default ReserveSection;