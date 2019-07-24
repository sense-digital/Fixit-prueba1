import React, {Component} from 'react';
import Header from '../components/Header';
import './styles/notfound.css';
import notfound1 from '../images/notfound1.jpg'
import notfound2 from '../images/notfound2.jpg'
import Footer from '../components/Footer';

class NotFound extends Component { 
    render () {
    return (
    <React.Fragment>
    <Header/>
    <div className='notfound-container'>
     <div className='notfound-background'>
         <img src={notfound2}></img>
     </div>   
     <div className='notfound-background'>
         <img src={notfound1}></img>
     </div> 
     <div className='tittle-container-notfound'>
      <h1 className='title-part-1'>404:</h1>
      <h1 className='title-part-2'>Not Found</h1>
     </div>  
    </div>
    <Footer/>
    </React.Fragment>
  

    );}}

export default NotFound;