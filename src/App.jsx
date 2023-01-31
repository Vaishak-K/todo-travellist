import { useState } from 'react'
import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'

function App() {
  const [items, setItems] = useState([])

  const ClearList=()=>{
    const confirm=window.confirm("Are you Sure you want to Delete the List?")
    confirm ? setItems([]):""
  }

  const handleItems=(item)=>{
    setItems((items)=>[...items,item])
    
  }
  const deleteItems=(id)=>{
    setItems((items)=>items.filter((item)=>item.id!==id))
  }

  console.log(items)
  const toogleItem=(id)=>{
    setItems((items)=>items.map((item)=>(item.id===id)?{...item,packed:!item.packed}:item
  ))
  }

  return (
    <>
     <div>
      <Logo />
      <Form handleItems={handleItems} />
      <PackingList items={items} deleteItems={deleteItems} toggleItem={toogleItem} ClearList={ClearList}/>
      <Stats items={items}/>

     </div>
    </>
  )
}

export default App
