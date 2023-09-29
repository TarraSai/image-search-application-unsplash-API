
import { useState } from 'react';
import './App.css';

function App() {
  const[email,setEmail]=useState("")
  const[show,setShow]=useState(false)
  const[password,setpassword]=useState("")
  const[values,setValues]=useState(true)
  const[formv,setFormv]=useState({
    email:"",
    password:""

  })

  //emailpattern it give true
  const emailpattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const showpassword=(e)=>{
    setpassword(e.target.value)
  }
 const sai=()=>{
  setShow(!show)
  setValues(!values)
  
  console.log(!show)
 }

function submithandler(e){
  e.preventDefault()
  if(email.trim()===""){
    setFormv((formv)=>({...formv,email:"enter a email"}))
  }
  else if(!emailpattern.test(email)){
    setFormv((formv)=>({...formv,email:"enter valid email"}))
  }
  else{
    setFormv((formv)=>({...formv,email:""}))
  }

  if(password.trim()===""){
    setFormv((formv)=>({...formv,password:"enter password"}))
  }
  else if(password.trim().length<6){
    setFormv((formv)=>({...formv,password:"enter password minimum 6 char"}))
  }
  else{
    setFormv((formv)=>({...formv,password:""}))
  }
}


  return (
    <div>
      <form className='container mt-3 w-25 border  p-4    ' onSubmit={submithandler} >

      <label htmlFor="email" className='form-label '>Email:</label>
     <input type="text" id="email" className='form-control  border border-primary ' 
                 onChange={(e)=>setEmail(e.target.value)}></input>

     {formv.email&&<div className='text-danger'>{formv.email}</div>}

     <lable htmlFor="password" className='form-lable mt-4 '>password :</lable>
     <div className=' input-group mt-3'>
     <input type={show ?"text":"password"} id='password' className='form-control  border border-primary input-group'
      value={password} style={{width:"50px"}} onChange={showpassword} />
     
     <input type="button"  value={values?"show":"hide"} onClick={sai}/>
     </div>
     {formv.password&&<div className='text-danger'>{formv.password}</div>}

     
     <button  type="submit"className='btn mt-2 mx-4 border ' 
     style={{background:"pink"}} >submit</button>
      </form>
    </div>
   
  );
}

export default App;
