import React from 'react'
import { useState } from 'react'

export default function Resigter() {
    const[email,setEmail]=useState("")
    const[password,setpassword]=useState("");
   
    const[show, setShow]=useState(false);
    const[btnshow,setBtnshow]=useState(true);
    const[validate,setValidate]=useState({
        email:"",
        password:""
})

const emailpattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    const passwordhandler=(e)=>{
        setpassword(e.target.value)
    }
    
    const showpassword=()=>{
        setShow(!show)
        setBtnshow(!btnshow)
    }
   function validation(e){
    e.preventDefault()

    if(email.trim()===""){
        setValidate((validate)=>({...validate,email:"enter email"}))
    }
    else if(!emailpattern.test(email)){
        setValidate((validate)=>({...validate,email:"enter valid email"}))
    }
    else{
        setValidate((validate)=>({...validate,email:""}))
    }


    if(password.trim()===""){
        setValidate((validate)=>({...validate,password:"enter password"}))
    }
    else if(password.trim().length<6){
        setValidate((validate)=>({...validate,password:"enter a password minimum 6 char"}))
    }
    else{
        setValidate((validate)=>({...validate,password:""}))
    }
   }
    
  return (
    <div >
        <form className=' container mt-3 w-25 border p-4'style={{backgroundColor:"blueviolet",borderRadius:"25px"}} onSubmit={validation}>
            <div><h3 >Register page</h3></div>
           <lable htmlfor="name">Name:</lable>
            <input type="text" className='form-control' id="name"/>
            <label htmlFor="email" className='form-label '>Email:</label>
                <input type="email" className='form-control border border-primary'
                 onChange={(e)=>setEmail(e.target.value)} />
                {validate.email &&<div className='text-danger'>{validate.email}</div>}
            
            <lable htmlFor="password" className='form-lable mt-4 '>password :</lable>
            <div className='input-group mt-4'>
                
                <input type={show ? "text":"password"} className='form-control border border-primary'
                 value={password} onChange={passwordhandler}/>
                 <input type="button"  value={ btnshow ? "show":"hide"} onClick={showpassword}/>  
            </div>
            {validate.password &&<div className='text-danger'>{validate.password}</div>}
           
              
               
             

            <button type="submit" className='btn btn-danger'>submit</button>
        </form>
    </div>
  )
}
