import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddItem = () => {
  const navidate = useNavigate();
  return (
    <>
    <div>AddItem</div>
    <textarea rows="4" cols="50" className='border-2 border-indigo-200'>
At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
</textarea>
<button  onClick={()=>navidate('/')}>Go back to DashBoard</button>
</>

  )
}

export default AddItem