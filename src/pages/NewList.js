import React, {useState} from 'react';

import ShoppingItem from '../components/shoppingItem';

const NewList = () => {
    const list = []
    const [shoppingList, setShoppingList] = useState(list);
    const [inputValue, setInputValue] = useState("");




    const handleOnChangeInputValue = (e) => setInputValue(e.target.value);

    const handleOnClick = () => {
        const item = inputValue;
        setShoppingList([...shoppingList,item]);
        setInputValue("");

    }

    const handleDeleteItem = (id) => {
        const newList = [...shoppingList];
        const index = newList.findIndex((item,index) => id === index);
        newList.splice(index,1);
        setShoppingList([...newList])
    }
    


    const shopping = shoppingList.map((item,index) => <ShoppingItem 
        item={item} 
        value={shoppingList} 
        index={index}
        handleDeleteItem = {handleDeleteItem}
    />)

    

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