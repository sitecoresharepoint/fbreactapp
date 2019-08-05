import React from 'react';
import Content from './content'
import About from './about'
import Member from './member'
import Lists from './lists'
import Lists2 from './lists2'
import ListsPagination from './listsPagination'

const Container = ({fetchData}) => {
    return(
        <div className='container'>
            <Content></Content>
            <About></About>
            <Member></Member>
            <ListsPagination mainFetchData={fetchData}></ListsPagination>
            <Lists2 mainFetchData={fetchData}></Lists2>
            <Lists></Lists>
        </div>
    )
}

export default Container