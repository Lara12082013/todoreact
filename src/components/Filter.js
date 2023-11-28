import React from "react"
import { ALL_ITEMS_FILTER, CHECKED_ITEMS_FILTER, UNCHECKED_ITEMS_FILTER } from "../constants/filter"

const Filter = ({doFilter, filter,searchValue,onSearchChange}) =>{

    const onAllClick = () => doFilter(ALL_ITEMS_FILTER);
    const onCheckedClick = () => doFilter(CHECKED_ITEMS_FILTER);
    const onUncheckedClick = () => doFilter(UNCHECKED_ITEMS_FILTER)

    return (
    <div>
        <div> <input placeholder = "Search ..." 
        value={searchValue} onChange={onSearchChange}/> </div>
        <button style={{fontWeight: filter === ALL_ITEMS_FILTER ? 900 : 400}} onClick={onAllClick}>All</button>
        <button style={{fontWeight: filter === CHECKED_ITEMS_FILTER ? 900 : 400}} onClick={onCheckedClick}>Checked</button>
        <button style={{fontWeight: filter === UNCHECKED_ITEMS_FILTER ? 900 : 400}} onClick={onUncheckedClick}>Unchecked</button>
    </div>
)
}

export default Filter