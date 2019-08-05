import React from 'react';
import logo from '../globals/logo.jpeg'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fungsi: '',
            headerView: '' 
        }
    }

    clickMe(fungsi){
        if (fungsi === 'tambah'){
            // let tempFungsi = this.state.fungsi
            this.setState({
                fungsi: 'tambah'
            })
        }
        else if (fungsi === 'kurang'){
            // let tempFungsi = this.state.fungsi
            this.setState({
                fungsi: 'kurang'
            })
        }
        return <div>Hello, </div>
    }

    renderMe(){
        if (this.state.fungsi === 'tambah'){
            return <div>Hallo, </div>
        }
        else if (this.state.fungsi === 'kurang'){
            return <div>Hi, </div>
        }
    }

    changeView(){
        if (this.props.view === 'create'){
            return <div>hi</div>
        }
        else if (this.props.view === 'explore'){
            return <div>sukses</div>
        }
    }

    render(){
        return(
            
            <div className='header'>
                <div className='header-wrap'>
                    <div className='header-left'>
                        <div className='foto'>
                            <img src={logo} alt='gambar'></img>
                        </div>
                    </div>
                    <div className='header-right'>
                        <div className='header-title'>
                            <b>Hacktiv8 Meetup</b>
                        </div>
                        <div className='header-content'>
                            <div className='header-content-attr'>                                    
                                <div>Location</div>
                                <div>Members</div>
                                <div>Organizers</div>
                            </div>
                            <div className='header-content-value'>
                                <div>{this.changeView()}Jakarta, Indonesia</div>
                                <div>1,078</div>
                                <div>{this.renderMe()}Yoga Pradana</div>
                            </div>
                        </div>
                        <div onClick={() => alert('this.props.view')} className='header-button'>
                            Join Us
                        </div>
                        <div onClick={() => this.clickMe('tambah')} className='header-button'>
                            Tambah
                        </div>
                        <div onClick={() => this.clickMe('kurang')} className='header-button'>
                            Kurang
                        </div>
                    </div>
                    </div>
            </div>
            
        )
    }
}

export default Header