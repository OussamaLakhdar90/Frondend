import { useEffect, useState } from "react";
import Navbar1 from "./Navbar"

export default function Devoir(){
    const [abc,updateunfo]=useState([])
    useEffect(()=>{

        var requestOptions={
            method:'GET',
            redirect: 'follow'
            
            };
            fetch("https://jsonplaceholder.typicode.com/users",requestOptions).then(response=>response.json()).then(result=>{
                
            
            console.log(result)
            
            updateunfo(result);
            
            
                }).catch(error=>console.log(error))
            })            

return (

<div className="container">



<ul>


{


    abc.map((x)=> {
        return (
<li key={x.id}> 
    <h3>{x.name}</h3>
    <h3>{x.email}</h3>
    <p className="text-muted">{x.email}</p>



</li>
    );

        })

}



    </ul>



</div>




);




}