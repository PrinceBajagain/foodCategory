import React,{useState} from 'react';
import "./style.css";
import Card from "./card";
import Api from "./myapi";
import Navbar from './navbar';

const list = [
    ...new Set(
        Api.map((curElem) => {
           return curElem.category;
        })
    ),"All"
]


const Resturant = () => {
    const [menuData,setmenuData] = useState(Api);
    const [menuList,setmenuList] = useState(list);

    const filterItem = (category) => {
        if (category!="All"){
        const updatedList= Api.filter((currElem)=>{
                return currElem.category == category;
        })
    
        setmenuData(updatedList);
    }else{
        setmenuData(Api);
    }
    }

    return (
        <>
         <Navbar filterItem = { filterItem } menuList={menuList}/>
         <Card menuData={menuData} />
        </>
    );
};

export default Resturant;
