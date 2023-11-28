import React from "react"

const Item = ({id,title,checked,remove,toggle})=> {
 const onRemove = ()=> remove(id)
 const onToggle = () => toggle(id)

return (
<div style={{display: "flex"}}>
  <div style={{textDecoration: checked ? "line-through":"unset"}} onClick={onToggle}>{title}</div>
 <button onClick={onRemove}>X</button>
</div>
)}

export default Item