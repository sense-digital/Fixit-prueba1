//SECCIÓN DE SLIDER PROMOCIONAL DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';
import './styles/SliderPromocional.css';
// import firebase from 'firebase/app';


class SliderPromocional extends Component {
    // constructor () {
    //     super() 
    //     this.state = {
    //         imgBanner = null
    //       }
    //   }
    
    // subirArchivoFirebaseStorage () {  
    //     firebase.storage().ref('imgBanner.jpg').put()
    //     .then( ()=> {
    //               alert('su imagen fue subida')
    //     })
    //     .catch( (error)=> {
    //         alert(error)
    // })}

    render () {
        return (    
        <div className='banner-admin-container'>
        <div className='banner-admin-item'>
            <label>
            Slider promocional 1
            <input type="file" name="equipo" accept="image/x-png,image/jpeg" onChange={this.setState()} />
            </label>
        </div>      
            <br/>
            <br/>
            <br/>

        <div className='banner-admin-button'><button>Guardar cambios</button></div>

        </div>
        );
    }
}

export default SliderPromocional;