import { useState } from "react";

export default function Newfield(props){

    const [DZ,updateLikes]= useState(props.likes);
    const [dl,updatedislike]=useState(false)


return (

<div className="card">

<div className="card-body"> 

    <p>
    {props.content}
    </p>
    <button className="btn btn-primary"   onClick={()=> {
       /** updateLikes(DZ+1)         appel function with incrementation*/
if(dl ==false){
    updateLikes(DZ+1)
}
else {
    updateLikes(DZ-1)
}
updatedislike(!dl)
    }

    } 
    >{DZ} { dl === false ? 'like' : 'deslike' } </button>



</div>



</div>






);

}