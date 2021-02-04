import React, {useState} from 'react';

import ShoppingItem from '../components/shoppingItem';

import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from 'react-icons/fa';

const NewList = () => {
    const list = []
    const [shoppingList, setShoppingList] = useState(list);
    const [inputValue, setInputValue] = useState("");
    const [toggle, setToggle] = useState(false);

    const probablyList = [
        {
            name:"item",
            inBasket:false,
        },
        {
            name:inputValue,
            inBasket:false,
        },
        {},
    ]



    const handleOnChangeInputValue = (e) => setInputValue(e.target.value);

    const handleOnClick = () => {
        const item = inputValue;
        setShoppingList([...shoppingList,{name:item, inBasket:false}]);
        setInputValue("");

    }

    const handleDeleteItem = (id) => {
        const newList = [...shoppingList];
        const index = newList.findIndex((item,index) => id === index);
        newList.splice(index,1);
        setShoppingList([...newList])
    }
    
    

    const shopping = shoppingList.map((item,index) => 
    <>
    <li id={index} style={item.inBasket? {textDecoration:"line-through"}:null}>{item.name}</li>
    <div className="icons">
            <FaShoppingCart className="buttonIcon" onClick={() => 
                {
                    item.inBasket = !item.inBasket;
                    setToggle(!toggle);
                }
            }>w koszyku</FaShoppingCart> 
            <AiFillDelete className="buttonIcon" onClick={() => handleDeleteItem(index)}>usuń</AiFillDelete>
    </div>
    
    {/* <ShoppingItem 
        item={item.name} 
        inBasket={item.inBasket}
        value={shoppingList} 
        index={index}
        handleDeleteItem = {handleDeleteItem}
    /> */}
    </>
    
        
    
    
    )

    

    return(
        <div className="newList">
            <h1>Lista zakupów</h1>
            <div className="form">
                <input type="text" value={inputValue} onChange={handleOnChangeInputValue}/>
                <button onClick={handleOnClick}>Dodaj</button>
                
            </div>
            <div className="shoppingList">
                <ul>
                    {shopping}
                    
                </ul>
            </div>

        </div>
        
    )
}

export default NewList;