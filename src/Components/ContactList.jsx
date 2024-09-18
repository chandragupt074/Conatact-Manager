import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const ContactList = (props) => {

  const {contact, removeContact}= props
  console.log(contact)
  // console.log(contact,"from contactList")
  const contactList=contact.map((item)=>{
    return(
      <div className='bg-cyan-950 flex  w-screen justify-around mt-5 text-end hover:bg-pink-950'>
         
        <div ><p>{item.data.name} </p> </div>
        <div ><p>{item.data.email}</p>  </div>
        <span className =' cursor-pointer'onClick={()=>removeContact(item.id)}><DeleteIcon/></span>
     

        
      </div>
      
    )
  })
  return (
   <>
    <div className='flex justify-center font-medium text-3xl text-white mt-5 bg-cyan-800'>
      <h1>ContactList</h1>
     
    </div>
    <div className='flex justify-center'>
    <div className='text-xl font-medium text-white  '>{contactList}</div>
    </div>
   
   </>
    
  )
}

export default ContactList
