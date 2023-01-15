import { useState ,useEffect } from "react";
import axios from 'axios'

function UserList(){
    const [list,setList]=useState()
     
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(response=>setList(response.data))
    })

 return (
 <div>
  {list?.map(e=><h1>{e.name}</h1>)}
 </div>
    
 )

}
export default UserList;
