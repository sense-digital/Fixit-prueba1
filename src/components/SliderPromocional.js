//SECCIÓN DE SLIDER PROMOCIONAL DEL PANEL DE ADMINISTRACIÓN

import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';
import './styles/SliderPromocional.css';
// import firebase from 'firebase/app';


class SliderPromocional extends Component {
    constructor () {
        super() 
        this.state = {
            imgBanner : null
          }
      }
    
      storageActivation () {
        firebase.storage()
      }

      handleUploadBanner = (e) => {
        if(e.target.files[0]){
          const imgBanner = e.target.files[0];
          this.setState(()=>({imgBanner}));
        }
      }


      guardarBanner() {
        const imgBanner = this.state.imgBanner;
       if ( this.state.imgBanner ){
                firebase.storage().ref(`banners/imgBanner`).put(imgBanner).on('state_changed', 
                //progress
                (snapshot) => {

                } , 
                //error
                (error) => {
                console.log(error);
                }, 
                //completed
                ()=>{
                    window.location.reload(false)  
                });
      }
      else {
        alert("diligencia los datos completos")
      }
       }

 

    render () {
        return (    
        <div className='banner-admin-container'>
        <div className='banner-admin-item'>
            <label>
            Slider promocional 1
            <input type="file" name="equipo" accept="image/x-png,image/jpeg" onChange={this.handleUploadBanner} />
            </label>
        </div>      
            <br/>
            <br/>
            <br/>

        <div className='banner-admin-button'><button onClick={()=>this.guardarBanner()}>Guardar </button></div>

        </div>
        );
    }
}

export default SliderPromocional;