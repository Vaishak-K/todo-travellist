import React from 'react'

const Stats = ({items}) => {
  if(!items.length){
    return (
    <footer className=' bg-green-600 text-center text-2xl'>
    <em >Add Some Items to your List First</em>
    </footer>
    )
  }
  const numItems=items.length
  
  const packed=items.filter((item)=>item.packed).length
  const packedpercentage=Math.round((packed/numItems)*100)
  
  return (
   
    <div>
      <footer className=' bg-green-600 text-center text-2xl'>
        <em>{packedpercentage===100 ? "You are All Set ✈️. Next Stop Holiday Destination 🥳🥳 ":`You have ${numItems} Items and you have completed ${packed} (${packedpercentage}%)`}</em>
        </footer>
    </div>
  )
}

export default Stats
