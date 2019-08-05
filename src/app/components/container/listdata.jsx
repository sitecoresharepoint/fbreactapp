import React from 'react';


// const ListData = ({maping, query}) => {
//     return (
//         <div className='listContents'>                                    
//             {maping.filter(item => item.title == query).map((item, idx) => {
//                 return (
//                     <div key={idx} className='listItem'>
//                         <div class='item-date'>{item.title}</div>
//                         <div class='item-desc'>{item.content1}</div>
//                         <div class='item-desc2'>{item.content2}</div>
//                         <div class='item-button'>View</div>
//                     </div>
//                 )
//             })}
//         </div>
//     )}

class ListData extends React.Component{
    constructor(props) {
        super(props)        
    }

    viewListData(){
        if (this.props.query === ""){
            return (
                <div className='listContents'>                                    
                    {this.props.maping.map((item, idx) => {
                        return (
                            <div key={idx} className='listItem'>
                                <div className='item-date'>{item.title}</div>
                                <div className='item-desc'>{item.content1}</div>
                                <div className='item-desc2'>{item.content2}</div>
                                <div className='item-button'>View</div>
                            </div>
                        )
                    })}
                </div>
            )
        }
        else
        {
            return(
                <div className='listContents'>                                    
                    {this.props.maping.filter(item => item.title.toLowerCase().includes(this.props.query.toLowerCase())).map((item, idx) => {
                        return (
                            <div key={idx} className='listItem'>
                                <div className='item-date'>{item.title}</div>
                                <div className='item-desc'>{item.content1}</div>
                                <div className='item-desc2'>{item.content2}</div>
                                <div className='item-button'>View</div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    render(){
        return (
            this.viewListData()
        )
    }
}    

export default ListData