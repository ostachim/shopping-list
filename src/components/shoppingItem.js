import React, {useState} from 'react';

import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from 'react-icons/fa';



const ShoppingItem = (props) => {

    const [inBasket,setInBasket] = useState(false);

    const handleClick = () => setInBasket(!inBasket);
    

    const {item,index,handleDeleteItem,value} = props;

    const styleLi = inBasket? {textDecoration:"line-through"}:null

    // const list = items.map(item => <li className={inBasket? "inBasket":"notInBasket"}>{item} <button onClick={handleClick}>w koszyku</button> <button>usuń</button></li>)
    const list = <> 
        {/* <li id={index} style={styleLi}>{item}</li>  */}
        <div className="icons">
            <FaShoppingCart className="buttonIcon" onClick={handleClick}>w koszyku</FaShoppingCart> 
            <AiFillDelete className="buttonIcon" onClick={() => handleDeleteItem(index)}>usuń</AiFillDelete>
        </div>
         
        
    </>

    return(
        <>
            {list}
        </>

    )
}

export default ShoppingItem;