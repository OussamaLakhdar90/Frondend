import { useState } from "react";

export default function ShoppingListFunction(){

    const [shopping,updateshopping]=useState([])
    const [inputvalue,updateInpute]=useState("")
   

return (

    <div className="">

<h3>shopping list</h3>
<ul>
{
    shopping.map((e)=>{

return(

<li>{e}</li>


);

    }
    
    
    
    )
}

</ul>

<input type="text" className="form-control" placeholder="tape in "
onChange={(event)=>{

console.log(event.target.value);
updateInpute(event.target.value);


}}


></input>
<button className="btn btn-primary"  onClick={()=>{
updateshopping([...shopping,inputvalue])
}





}               >add</button>


<button className="btn btn-danger"
onClick={()=>{

    updateshopping([])


}}


>delete 


</button>
    </div>


);

}