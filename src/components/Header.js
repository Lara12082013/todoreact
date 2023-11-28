import React from "react";

class Header extends React.Component{
    constructor(...args){
        super(...args)
        this.state = {
            itemTitle:''
        }
    }

    onChange = (e)=>{
        this.setState({
            itemTitle: e.target.value
        })

    }

    onAddClick =()=>{
        const {itemTitle} = this.state
        const {add} = this.props
        add(itemTitle);
        this.setState({
            itemTitle: "",
        })
    }

    onKeyDown =(e) =>{
        const {itemTitle} = this.state
        const {add} = this.props
        if(e.code === "Enter"){
            add(itemTitle);
            this.setState({
                itemTitle: "",
            })
        }
    }
    render(){
        const {itemTitle} = this.state
        return(
        <div>
            <input onKeyDown = {this.onKeyDown} type = "text" value={itemTitle} onChange={this.onChange}/>
            <button onClick={this.onAddClick}>Add</button>
        </div>)
    }
}

export default Header