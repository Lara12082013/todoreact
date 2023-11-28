import React from "react";
import { v4 } from "uuid";
import { ALL_ITEMS_FILTER, CHECKED_ITEMS_FILTER, UNCHECKED_ITEMS_FILTER } from "../constants/filter";
import Header from "./Header";
import List from "./List";
import Filter from "./Filter";


class TodoRoot extends React.Component{
    constructor(...args){
        super(...args)
        this.state ={
            items: [],
            filter: ALL_ITEMS_FILTER,
            searchValue: '',
        }
    }

    addItem = (title)=>{
        this.setState({
            items:[
                ...this.state.items,
                {
                    id: v4(),
                    title , 
                    checked: false,
                }
            ]
        })
        
    }

    removeItem = (id)=>{
        this.setState({
            items:this.state.items.filter((i)=> i.id !== id)
        })
    }

    toggleItem =(id) =>{
        this.setState({
        items: this.state.items.map((i)=>
            i.id === id ? {...i,checked : !i.checked,} : i
            )
        })
    }

    filterItems = (filter)=>{
        this.setState({
            filter,
        })
    }
    onSearchChange = (e)=>{
        this.setState({
            searchValue: e.target.value,
        })
    }



    render(){
        const {items,filter,searchValue,onSearchChange} = this.state
        let filteredItems = items
        if(filter === CHECKED_ITEMS_FILTER){
            filteredItems = items.filter((i)=> i.checked)
        } else if(filter === UNCHECKED_ITEMS_FILTER){
            filteredItems = items.filter((i)=> !i.checked)
        }

        if(searchValue){
            filteredItems = filteredItems.filter(({title})=>
                title.toLowerCase().includes(searchValue.toLowerCase())
            );
        }

        return(<div>
            <Header add ={this.addItem} />
            <List items = {filteredItems} remove ={this.removeItem} toggle ={this.toggleItem}/>
            <Filter searchValue = {searchValue} onSearchChange= {this.onSearchChange}filter ={filter} doFilter={this.filterItems}/>
        </div>

        )
    }
}

export default TodoRoot;