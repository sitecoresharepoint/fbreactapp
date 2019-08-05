import React from 'react';
import Axios from 'axios';
import {  BrowserRouter as Router,  Route } from 'react-router-dom'

import Header from './components/header';
import Container from './components/container/container';
import NavBar from './components/navbar'

import About from './components/container/about'
import About2 from './components/container/about2'
import Member from './components/container/member'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            viewComponent: '',
            fetchData: []
        }

    }    

    clickCreateMenu(view){      
        this.setState({
            viewComponent: view
        })
    }

    componentWillMount(){
        this.fetching();
        console.log('AKU WILL MOUNT');        
    }

    componentDidMount(){
        console.log('AKU DID MOUNT');        
    }

    fetching(){
        let opt = {
            method: 'GET',
            // url: 'https://jsonplaceholder.typicode.com/posts'
            url: 'https://swapi.co/api/people/'
        }

        Axios(opt)
        .then(({data}) => {
            this.setState({
                fetchData: data.results
            })
            console.log(data);            
        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        return(
            <Router>
        
            <div className='flex-container'>
                <div className='wrap'>
                    <Route exact path="/about" component={About} />
                    <Route exact path="/about" component={About2} />
                    <Route exact path="/" component={Member} />
                    <NavBar action={(e) => this.clickCreateMenu(e)}></NavBar>
                    <Header view={this.state.viewComponent}></Header>
                    <Container 
                        fetchData={this.state.fetchData}
                    />                        
                </div>
            </div>
            
            </Router>
        )
    }
}

export default Main;