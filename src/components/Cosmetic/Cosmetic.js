import React from 'react';
import './Cosmetic.css'
import { addToDb, shopdb } from '../Utilities/fakedb';
const Cosmetic = (props) => {
    const {name,price,id} = props.cosmetic;
    const addToCard =(id)=>{
       addToDb(id);
        
    }
    
   
    return (
        <div className='cosmetic'>
           
            <h1>Name cosmetic compo : {name}</h1>
            <h1> price  : ${price}</h1>
            <h1>ID  : {id}</h1>
            {/* <button onClick={addToCartWithParam}>Add to Cart</button> */}
            <button onClick={()=>addToCard(id)}>Add to Cart</button>
        </div>
    );
};

export default Cosmetic;