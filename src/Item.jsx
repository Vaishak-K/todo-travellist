import React from 'react'

function Item({pack,deleteItems,toggleItem}) {
  
  return (
    <div className='flex '>
      <input type="checkbox" name="" id="" onChange={()=>toggleItem(pack.id)} />
      <li className={`font-semibold ${pack.packed?'line-through':''} text-xl p-5`}>{pack.quantity}  {pack.description}</li>
      <button onClick={()=>deleteItems(pack.id)}>❌</button>
      
    </div>
  )
}

export default Item
