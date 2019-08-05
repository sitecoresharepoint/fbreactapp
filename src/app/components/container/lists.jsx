import React from 'react';
import ListData from './listdata'

class Lists extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            json: [{
                id: 1,
                title: 'Kelas 1',
                content1: 'ini bukan apa apa',
                content2: 'ini bukan siapa siapa'
            }, {
                id: 2,
                title: 'Kelas 2',
                content1: 'ini bukan apa apa',
                content2: 'ini bukan siapa siapa'
            }, {
                id: 3,
                title: 'Kelas 3',
                content1: 'ini bukan apa apa',
                content2: 'ini bukan siapa siapa'
            }]
        }
    }

    

    handleChange (e) {
        console.log('handle change called')
        this.setState({
            query: e
        })
    }

    render(){
        return(
            <div className='list'>
                <div className='listHeader'>
                    <div className='titleList'>Past Meetup</div>
                    <div className='linkAll'>See all</div>
                </div>
                <div className='filterBox'>
                    <input onChange={(e) => this.handleChange(e.target.value)} name='txtbox' defaultValue='' placeholder='Input Filter'></input>
                </div>
                <ListData
                        maping={this.state.json}
                        query={this.state.query}
                />
            </div>
        )
    }
}

export default Lists