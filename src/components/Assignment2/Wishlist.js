import React from "react";
import { useState } from "react";

const Wishlist = () => {
    const [list,setItem] = useState([])
    const [nText,setNText] = useState("");
    const [nPriority,setNPriority] = useState("");
    

    const addItem = () => {
        if(nText.trim !== "")
        {
            //high
            if(nPriority == "3")
            {
                setItem([{text:nText,priority:nPriority},...list]);
            }
            //medium
            else if(nPriority == "2")
            {
                setItem([...list.slice(0,list.length/2),{text:nText,priority:nPriority},...list.slice(list.length/2)]);
            }
            //low
            else
                setItem([...list,{text:nText,priority:nPriority}]);
        }
        setNText("");
        setNPriority("");
    }

    const removeItem = (index) => {

        const newList = list.filter((item,i) => i !== index);
        setItem(newList);
    }

    const moveToTop = (id) => {
        
        const newList = [...list];
        const comp = newList.splice(id, 1)[0]
        newList.unshift(comp);
        setItem(newList);

    }

    return (
        <div>
            <h1>Wishlist</h1>
            <input type="text" value={nText} onChange={(e) => setNText(e.target.value)} />
            <select value={nPriority} onChange={(e) => setNPriority(e.target.value)}>
                <option value="1" selected>Low</option>
                <option value="2" >Medium</option>
                <option value="3" >High</option>
            </select>
            <button onClick={addItem}>Add</button>
            <ul>
                {list.map((item,index) => (
                    <li key={index}>
                        {item.text}
                        <button onClick={() => removeItem(index)}>Remove</button>
                        <select value={item.priority} onChange={(e) =>setNPriority(e.target.value)}>
                            <option value="1" selected>Low</option>
                            <option value="2" >Medium</option>
                            <option value="3" >High</option>
                        </select>
                        <button onClick={() => moveToTop(index)}>MoveTo Top</button>
                    </li>
                ))}
            </ul>
            
        </div>
    )


}

export default Wishlist;