import React, { useEffect, useState } from 'react'
import Header from './Components/Header'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
import uuid4 from 'uuid4'

const App = () => {

  const localStorageKey = "contact"
  const [contact, setContact]=useState(()=>{
    return JSON.parse (localStorage.getItem(localStorageKey)) || []
  })

  

  useEffect(()=>{
    localStorage.setItem(localStorageKey, JSON.stringify(contact))
  },[contact])

const addContact=(data)=>{
// console.log(data,"from app.jsx")
setContact([...contact, {id:uuid4() ,data}])
}

const removeContact =(id)=>{
  const updatedList = contact.filter((val)=>{
    return  val.id!==id;
    
     
   
  })
   setContact(updatedList)

}

  return (
    <div className='bg-slate-600  h-[1000px]'>
      <Header/>
      <AddContact addContact={addContact}/>
      <ContactList contact={contact} removeContact={removeContact} />
    </div>
  )
}

export default App
