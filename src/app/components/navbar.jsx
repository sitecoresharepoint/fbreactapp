import React from 'react';
import {  Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fungsi: ''
        }
    }

    render(){
        return(
            <div className='navbar'>
                <div className='navbar-left'>
                    <div>QTemu</div>
                    <div onClick={() => this.props.action('create')}>Create Meetup</div>
                    <div onClick={() => this.props.action('explore')}>Explore</div>
                    <div><Link to='/about'>About</Link></div>
                    <div><Link to='/'>Home</Link></div>
                </div>
                <div className='navbar-right'>
                    <div>Login</div>
                </div>
            </div>
        )
    }
}

export default NavBar