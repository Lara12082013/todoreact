import React from "react";
import Item from "./Item";

const List = ({items,remove,toggle})=>(
    <div>{items.map((item)=>(
        <Item key ={item.id} {...item} remove = {remove} toggle ={toggle} />
    ))}
    </div>
)

export default List
