import React, { useState } from 'react'
import Item from './Item'

const PackingList = ({items,deleteItems,toggleItem,ClearList}) => {
  const [sortBy,SetSortBy]=useState("input")
  let sortedItem
  if (sortBy==='input') sortedItem=items
  if (sortBy==='description') sortedItem=items.slice().sort((a,b)=>a.description.localeCompare(b.description))
  if (sortBy==='packed') sortedItem=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))

  return (
    <div className=' bg-orange-500 min-w-14 h-80 flex flex-col justify-between'>
      <ul className='flex justify-around flex-wrap'>
        {   
            sortedItem.map((pack)=>{
            return <Item pack={pack} deleteItems={deleteItems} toggleItem={toggleItem} />})
        }
      </ul>
      <div className='flex justify-evenly'>
      <select className=' w-fit self-center mb-4' name="" id="" onChange={(e)=>SetSortBy(e.target.value)}>
        <option value="input">Sort by Input</option>
        <option value="description">Sort by Description</option>
        <option value="packed">Sort by Packed</option>
      </select>
      <button onClick={ClearList} className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>Clear List</button>
      </div>
    </div>
  )
}

export default PackingList

