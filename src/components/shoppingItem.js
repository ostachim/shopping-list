import React, {useState} from 'react';

import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from 'react-icons/fa';



const ShoppingItem = (props) => {

    const [inBasket,setInBasket] = useState(false);

    const handleClick = () => setInBasket(!inBasket);

    const items = props.value;

    const {item,index,handleDeleteItem} = props;

    // const list = items.map(item => <li className={inBasket? "inBasket":"notInBasket"}>{item} <button onClick={handleClick}>w koszyku</button> <button>usuń</button></li>)
    const list = <> 
        <li id={index} className={inBasket? "inBasket":"notInBasket"}>{item}</li> 
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