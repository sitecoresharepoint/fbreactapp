import React from 'react';
import Axios from 'axios';
import ButtonCustom from '../../globals/button'
import ListData2 from './listdata2'

class ListsPagination extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            query: '',   
            fetchData: [],
            page: 1            
        }
    }

    

    componentWillMount(){
        this.fetching();      
    }

    fetching(){
        let opt = {
            method: 'GET',
            // url: 'https://jsonplaceholder.typicode.com/posts'
            url: `https://swapi.co/api/people/?page=${this.state.page}`
        }

        Axios(opt)
        .then(({data}) => {

            this.setState({
                fetchData: data.results,            
            });
            console.log(data);            
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleChange (e) {
        console.log('handle change called')
        this.setState({
            query: e
        })
    }

    PrevClick(){        
        let page = this.state.page
        this.setState({
            page: page-1,
            fetchData: []
        }, () => this.fetching())
    }

    NextClick(){
        let page = this.state.page
        this.setState({
            page: page+1,
            fetchData: []
        }, () => this.fetching())
    }

    render(){
        return(
            <div className='list'>
                <div className='listHeader'>
                    <div className='titleList'>Pagination Fetch</div>
                    <div className='linkAll'>See all</div>
                </div>
                <div className='filterBox'>
                    <input onChange={(e) => this.handleChange(e.target.value)} name='txtbox' defaultValue='' placeholder='Input Filter'></input>
                </div>
                <ButtonCustom
                    myOnClick={() => this.PrevClick()}
                    color= 'Gray'
                    value='Prev' />
                <ButtonCustom
                    myOnClick={() => this.NextClick()}
                    color= 'Gray'
                    value='Next' />
                <ListData2
                        maping={this.state.fetchData}
                        query={this.state.query}
                        
                />

                
            </div>
        )
    }
}

export default ListsPagination