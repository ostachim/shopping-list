import React, {useState} from 'react';

import "./style.css";

const ShoppingItem = (props) => {

    const [inBasket,setInBasket] = useState(false);

    const handleClick = () => setInBasket(!inBasket);

    const items = props.value;

    const {item,index,handleDeleteItem} = props;

    // const list = items.map(item => <li className={inBasket? "inBasket":"notInBasket"}>{item} <button onClick={handleClick}>w koszyku</button> <button>usuń</button></li>)
    const list = <> 
        <li id={index} className={inBasket? "inBasket":"notInBasket"}>{item}</li> 
        <button onClick={handleClick}>w koszyku</button> 
        <button onClick={() => handleDeleteItem(index)}>usuń</button> 
        <p>Id to {index}</p>
    </>

    return(
        <>
            {list}
        </>

    )
}

export default ShoppingItem;