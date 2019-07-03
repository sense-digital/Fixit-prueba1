import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Login extends Component {
 
        // firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ...
        //   });  
        
        
        // firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //     // ...
        //   });
 
    render () {
        return (
        <div>
            <h1> Login </h1>

            <form onSubmit=''>    
                <br/>
                    <label for='usuario'> Correo:</label>
                    <input type="text" name="usuario"/>
                <br/>
                <br/>
                    <label for="contraseña">Contraseña:</label>
                    <input type="text" name="contraseña"/>
                <br/>
                <br/>
                    <input type="submit" name="login"/>
            </form>

            <h1> Registro </h1>

            <form onSubmit=''>    
                <br/>
                    <label for='usuario'> Correo:</label>
                    <input type="text" name="usuario"/>
                <br/>
                <br/>
                    <label for="contraseña">Contraseña:</label>
                    <input type="text" name="contraseña"/>
                <br/>
                <br/>
                    <input type="submit" name="register"/>
            </form>

            
        </div>
        

        );
    }
}

export default Login;