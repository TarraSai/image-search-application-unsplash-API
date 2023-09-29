import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
// import {BsFillArrowDownSquareFill} from 'react-icons/bs'
import {MdAddAPhoto} from 'react-icons/md'
import images from '../images.webp'
import '../index.css'


export default function APIproject() {
const[searchbar,setSearchbar]=useState("random")
const[data,setData]=useState([]);
const[page,setPage]=useState(1)
const[pg,setPg]=useState("")



 const APIurl="https://api.unsplash.com/";
 const apikey='d0vKnftEApa_PzOC5mCUn5oyRcyMBokYlmKToqFrCGo';
 
 useEffect(() => {
  axios.get(`${APIurl}search/photos?page=${page}&per_page=30&query=${searchbar}&client_id=${apikey}`)
    .then((res) => {
      setData(res.data.results);
      setPg(res.data.total_pages);
    })
    .catch((error) => {
      console.error(error);
    });
}, [page, searchbar]);

 
  
// backgroundColor:"#6499E9"

  return (
    <div>
        <div className='container-fluid 'style={{height:"250px",width:"100%" ,backgroundImage:`url(${images})`}}>
          <div className='myimage'><h1 style={{paddingTop:"40px",paddingLeft:"50px"}}><MdAddAPhoto/> My images</h1></div>
        <center>
        <div className='input-group w-25 ' >
          <input type="text" className='form-control ' style={{marginTop:"30px",paddingTop:"10px"}}  placeholder="search any thing..."onChange={(e)=>setSearchbar(e.target.value)}/>
           
          </div> 
        </center>
        </div>
        <center>
        <div className='container-fluid   'style={{ height: '100px', width: '100%',backgroundColor:"#A6F6FF" }} >
         {page>1 &&<button className='btn btn-danger mt-5  '  onClick={()=>{setPage(page-1)}}>pervious</button>}
         {page<pg&&<button  className="btn btn-danger mt-5"style={{marginLeft:"10px",}} onClick={()=>{setPage(page+1)}}>next</button>}
         
        </div>
        </center>
       
        <div className='container-fluid saitarra row ' style={{backgroundColor:"#A6F6FF",paddingTop:"15px"}}>
          {data.map((images)=><div className='col-md-2  col-sm-2  pulse-animation'><img src={images.urls.thumb} height="200" width="240" key={data.key} 
          alt={data.title} style={{borderRadius:"20px", padding:"5px"}} />
          {/* <a href="dog.png" download="new-filename"><BsFillArrowDownSquareFill/></a> */}
          </div>)}
          

        </div>

        
        
    </div>
   
  )
}
