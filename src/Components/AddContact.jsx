import React, { useState } from 'react'

const AddContact = ({addContact}) => {

const [contactData, setContactData]=useState({name:" ", email:""})

const handleChange =(e)=>{
 if(e.target.name==="name"){
  setContactData({...contactData, name:e.target.value})
 }
 else{
  setContactData({...contactData, email:e.target.value})
 }
 console.log(contactData)
}

const handleClick=()=>{
  if(contactData.name==="" || contactData.email==="" ){
    alert("please fill the all detail")
    return
   

  }
  addContact(contactData)
  setContactData({name:"", email:""})
}

  return (
  <div >
      <div className='flex justify-center text-3xl font-medium text-white'>
      <h1 >Add Contact</h1>
    </div>
    <div className='flex justify-center'>
      <form className='flex flex-col mt-11 '>
        <label className="text-white font-medium text-xl"htmlFor="">Name</label>
        <input type="text"  placeholder='Enter your name'  onChange={handleChange}  value={contactData.name} name="name" className='w-[400px] rounded-md outline-none h-8 font-medium '/>
        <label className="text-white font-medium text-xl" htmlFor="">Email</label>
        <input type="email"  placeholder='Enter your email' onChange={handleChange} value={contactData.email} name="email"className='w-[400px] rounded-md outline-none font-medium h-8  '/>
       
      </form>
   
    </div>
    <div className='flex justify-center mt-10'>
      <button  onClick={handleClick}className='px-10 py-5 bg-blue-800 rounded-full'>Add Contact</button>
    </div>
  </div>
  )
}

export default AddContact
