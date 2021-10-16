import React from 'react'

const Navbar = ({filterItem,menuList}) => {
    return (
        <>
        {menuList.map((curElem) => {
        return (
          <>
            <button onClick={() => filterItem(curElem)}>{curElem}</button>    
          </>
        );
         })}
          
        </>
    );
}

export default Navbar
