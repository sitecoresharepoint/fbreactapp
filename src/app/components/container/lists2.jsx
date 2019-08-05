import React from 'react';
import ListData2 from './listdata2'

class Lists2 extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            query: '',            
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
                    <div className='titleList'>Sample Fetch</div>
                    <div className='linkAll'>See all</div>
                </div>
                <div className='filterBox'>
                    <input onChange={(e) => this.handleChange(e.target.value)} name='txtbox' defaultValue='' placeholder='Input Filter'></input>
                </div>
                <ListData2
                        maping={this.props.mainFetchData}
                        query={this.state.query}
                />
            </div>
        )
    }
}

export default Lists2