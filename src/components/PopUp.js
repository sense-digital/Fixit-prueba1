//POP UP

import React, {Component} from 'react';
import './styles/popUp.css'
import firebase from 'firebase/app';
import 'firebase/firestore';

class PopUp extends Component {  
    constructor (props) {
        super(props) 
        this.state = {
            dataEquipos:[],
            equipo: "",
            servicio: "",
            direccion: "",
            detalleDireccion: "",
            fechaDeRecogida:"",
            hora: "",
            mail: "",
            celular: "",
            pago:"",
            estado: '',
            precio: "",
        }
      }

    componentDidMount () {
        firebase.firestore().collection('celulares').orderBy('ref').get().then((snapShots)=>{
          this.setState({
            dataEquipos: snapShots.docs.map(doc => {
              return {data: doc.data(),id: doc.id};
            })
          })
        })
    }   

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    actualizarReserva = (id) => {
        
            firebase.firestore().collection("reservas").doc(id).update({
                equipo: this.state.equipo,
                servicio: this.state.servicio,
                direccion: this.state.direccion,
                detalleDireccion: this.state.detalleDireccion,
                fechaDeRecogida:this.state.fechaDeRecogida,
                hora: this.state.hora,
                mail: this.state.mail,
                celular: this.state.celular,
                pago:this.state.pago,
                estado: this.state.estado,
                precio: this.state.precio,
                fechaDeMoficacion: firebase.firestore.FieldValue.serverTimestamp(),
            })
            .then(function() {
                window.location.reload(false);
            })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }
            

  render () {
        return (
<div className='popup'>  
    <div className='popupWhite'>  
 {/* FORMULARIO DE MODIFICACIOÓN DE RESERVAS */}
        <form classNamE='form-mod-reserva'>
            
            {/* ---inicio de campo "equipo" */}
            <div className='form-mod-container'>
                <label className='label-form-mod-reserva'>
                Equipo: 
                <select name="equipo" onChange={this.handleChange} >
                <option value="">Elige una opción</option>
                {this.state.dataEquipos.map(item => {
                  return <option value={item.data.ref}>{item.data.ref}</option> 
                }) }
                </select>
            </label>
            </div>
            {/* ---fin de campo "equipo" */}

            {/* ---campo servicios--- */}
            <div className='form-mod-container'>
                <label className='label-form-mod-reserva'>Servicio:
                    <input name='servicio' onChange={this.handleChange} ></input>
                </label>
            </div>    
            {/* ---campo servicios--- */}

            {/* ---campo dirección--- */}
            <div className='form-mod-container'>
                <label className='label-form-mod-reserva'>Dirección:
                    <input name='direccion'onChange={this.handleChange} ></input>
                </label>
            </div>
            {/* ---campo dirección---  */}

            {/* ---campo detalle dirección--- */}
            <div className='form-mod-container'>
                <label className='label-form-mod-reserva'>Detalle dirección:
                    <input name='detalleDireccion' onChange={this.handleChange}></input>
                </label>
            </div>
            {/* ---campo detalle dirección--- */}
            
            {/* ---campo fecha--- */}
            <div className='form-mod-container'>
                <label className='label-form-mod-reserva'>Fecha:
                    <input type="date" name='fechaDeRecogida' onChange={this.handleChange}></input>
                </label>
            </div>
            {/* ---campo fecha--- */}

            {/* ---campo hora--- */}
            <div className='form-mod-container'>
                <label className='label-form-mod-reserva'>Hora:
                   <select name='hora' onChange={this.handleChange} >
                            <option value="">Elige una opción</option> 
                            <optgroup label="AM">
                                <option value="8:00 A.M">8:00 A.M</option> 
                                <option value="9:00 A.M">9:00 A.M</option> 
                                <option value="10:00 A.M">10:00 A.M</option> 
                                <option value="11:00 A.M">11:00 A.M</option> 
                            </optgroup> 
                            <optgroup label="PM"> 
                                <option value="12:00 M">12:00 M</option> 
                                <option value="1:00 P.M">1:00 P.M</option> 
                                <option value="2:00 P.M">2:00 P.M</option> 
                                <option value="3:00 P.M">3:00 P.M</option> 
                                <option value="4:00 P.M">4:00 P.M</option> 
                                <option value="5:00 P.M">5:00 P.M</option> 
                                <option value="6:00 P.M">6:00 P.M</option> 
                            </optgroup> 
                            </select>
                </label>
            </div>
            {/* ---campo hora--- */}

            
            {/* ---capo correo--- */}
            <div className='form-mod-container'>
                <label className='label-form-mod-reserva'>Correo:
                    <input type="email" name='mail' onChange={this.handleChange}></input>
                </label>
            </div>
            {/* ---capo correo--- */}

            {/* ---campo celular--- */}
            <div className='form-mod-container'>
                <label className='label-form-mod-reserva'>Celular:
                    <input name='celular' onChange={this.handleChange}></input>
                </label>
            </div>
            {/* ---campo celular--- */}


            {/* ---campo pago--- */}
            <div className='form-mod-container'>
                <label className='label-form-mod-reserva'>Pago:
                <select name='pago' onChange={this.handleChange}>
                            <option>Elige una opción</option> 
                            <option value="payu">PayU</option> 
                            <option value="contraEntrega">Contra Entrega</option> 
                    </select>
                </label>
            </div>
            {/* ---campo pago--- */}

            {/* ---capo precio--- */}
            <div className='form-mod-container'>
                <label className='label-form-mod-reserva'>Precio:
                    <input name='precio' onChange={this.handleChange}></input>
                </label>
            </div>
            {/* ---capo precio--- */}

             {/*---campo estado---  */}
             <div className='form-mod-container'>
                <label className='label-form-mod-reserva'>Estado:
                   <select name='estado' onChange={this.handleChange}>
                            <option>Elige una opción</option> 
                            <option value="procesando">Procesando</option> 
                            <option value="en camino">En camino</option> 
                            <option value="entregado">Entregado</option> 
                            <option value="cancelado">Cancelado</option> 
                            <option value="pagado">Pagado</option> 
                            <option value="pendiente de pago">Pendiente de pago</option> 
                    </select>
                </label>
            </div>
            {/*---campo estado---  */}
                
            {/* botones */}
            <div className='form-mod-container'>
               <button onClick={()=>this.actualizarReserva(this.props.idEdit)}>Guardar</button>  
                
               <button onClick={this.props.closePopup}>Cerrar</button>  
            </div>
            {/* botones */}
            </form>

            </div>  
            </div>  
        );  
    }
}

export default PopUp;