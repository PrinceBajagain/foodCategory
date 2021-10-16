import React from 'react';

const Card = ({menuData}) => {
    return (
        <>
       
            {menuData.map((curElem)=>{
                return (
               <>
               <div className="card-container" key={curElem.id}>
               <div className="card">
               <div className="card-body">
                  <span className="card-number">{curElem.id}</span>
                  <span className="card-author">{curElem.category}</span>
                  <span className="card-title">{curElem.name}</span>
                   <img src={curElem.src} /> 
                  <span className="order">order</span>
  
               </div>
           </div>
          </div>  
          </>
                )
            })}
       
         
        </>
    )
}

export default Card;
