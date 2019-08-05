import React from 'react';
const ButtonCustom = ({color, value, myOnClick}) => {
    return (<div onClick={() => myOnClick()} style={{backgroundColor:color}} className='header-button'>
        {value}
    </div>)
}

export default ButtonCustom