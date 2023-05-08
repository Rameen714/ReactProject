import React from "react";
import { useState } from "react";
import "./style.css";

const Wishlist = () => {
    const [list,setItem] = useState([])
    const [nText,setNText] = useState("");
    const [nPriority,setNPriority] = useState("");
    

    const addItem = () => {
        if(nText.length !== 0)
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
        <div class="body">
        <div class="box">
            <h1>Wishlist</h1>
            <table style={{justifyContent:"center","padding-left": "200px"}}>
                <tr>
                    <th>Item</th>
                    <th>Priority</th>
                    <th>Remove</th>
                </tr>
            
                <tr>
                    <td>
                        <input type="text" value={nText} onChange={(e) => setNText(e.target.value)} />
                    </td>
                    <td>
                        <select class="btn" value={nPriority} onChange={(e) => setNPriority(e.target.value)}>
                            <option value="1" selected>Low</option>
                            <option value="2" >Medium</option>
                            <option value="3" >High</option>
                        </select>
                    </td>
                    <td>
                        <button class="btn" onClick={addItem}>Add</button>
                    </td>
                </tr>
            
                {list.map((item,index) => (
                    
                        <tr>
                            <td>
                                <span style={{"padding-right":"5px","padding-top":"0px","padding-bottom":"2px","padding-left":"5px", "border": "1px solid lightblue"}}>{item.text}</span>
                            </td>
                            <td>
                                <select class="btn" value={item.nPriority} onChange={(e) =>setNPriority(e.target.value)}>
                                    <option value="1" selected>Low</option>
                                    <option value="2" >Medium</option>
                                    <option value="3" >High</option>
                                </select>
                            </td>
                            <td>
                                <button class="btn" onClick={() => removeItem(index)}>Remove</button>
                                <button class="btn" onClick={() => moveToTop(index)}>MoveTo Top</button>
                            </td>
                            <br></br>
                            <br></br>
                        </tr>
                    
                ))}
            
            </table>
        </div>
        </div>
    )


}

export default Wishlist;

/*assignment*/