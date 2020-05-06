import React from 'react'


const FIND = ({finder,big}) =>{
    return (
        <div className="pa2 tc">
            <input className="ba pa3 b--black bg-lightest-blue w5" type="search" placeholder="Search Salem'Friends" onChange={big}/>
        </div>
    )
};

export default FIND;