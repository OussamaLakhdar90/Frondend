import { useState } from "react";

export default function List1(){

const [text,updatetext]=useState("");
const [list,updatelist]=useState([]);


return(

<div className="container">

<div className="row">

<div className="col-md mb-3">

<ul>la list de produits
{
list.map((x) => {
return (
<li value={x}>{x}</li>


);


})

}

</ul>



</div>

<div className="mb-3">

<input type="text" className="form-control" id="oussama"
onChange={(event)=>{

console.log(event.target.value);
updatetext(event.target.value);


}}
placeholder="Tape Text Here"

></input>


</div>


<div className="col-12 mb-3"> 
<button className="btn btn-primary" type="submit" onClick={() =>{
updatelist([...list,text])
}



}>add</button>

<button type="reset" className="btn btn-danger" onClick={()=>{

updatelist([])

}



}>Delete </button>
</div>




</div>


</div>

);
}
