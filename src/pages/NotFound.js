import React, {Component} from 'react';
import Header from '../components/Header';

class NotFound extends Component { 
    render () {
    return (
    <React.Fragment>
    <Header/>
    <h1>404: Not Found</h1>;
    </React.Fragment>
    );}}

export default NotFound;