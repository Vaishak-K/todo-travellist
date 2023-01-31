import React,{useState} from 'react'

const Form = ({handleItems}) => {
    const [description,setDescription] = useState('')
   const [quantity,setQuantity] = useState(1)
    const handleSubmit=(e)=>{
    e.preventDefault()
    setDescription("")
    setQuantity(1)

    if (!description) return
    const items={description,quantity,packed:false,id:Date.now()};
    console.log(items)
    handleItems(items)
   }
   
     return (
    <div className=' bg-amber-800 text-white '>
      <form action="" className=' flex justify-evenly items-center' >
        <select name="form" id="" value={quantity} className='text-black max-h-11 ' onChange={((e)=>setQuantity(e.target.value))}>
            {Array.from({length:20},(_,i)=>i+1).map((num)=>(<option value={num} key={num}>{num}</option>))}
        </select>
        <div className='flex justify-evenly items-center'>
        <label htmlFor="" className=' font-normal'>Name:</label>
        <input type="text" value={description} onChange={((e)=>setDescription(e.target.value))} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
        <button onClick={handleSubmit} className="items-center focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-4 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
