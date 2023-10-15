import { useEffect, useState } from "react"

import Navbar1 from "./Navbar"

export default function  Rev (){
const[plan,updatePlan]= useState([])

const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/planTarifaire`, {
        method: 'GET',
        redirect: 'follow'
      });
      const jsonData = await response.json();
      updatePlan(jsonData);
    } catch (error) {
      console.log(error);
      
    }
  };

  const handleClick = () => {
    fetchData();
  };
  const nomDeLoffre=[];


  plan.forEach(n=>{
    nomDeLoffre.push(n.nomPlan)




  })



return(

    <div> 



        <Navbar1></Navbar1>





        <div className="container-fluid">

  <div className="row justify-content-end">

 
      
    </div>
    <div className="col-xl-12  justify-content-end d-flex">
    <label for="plantarf" className="justify-content-center">Offer Name:</label>
      <select class="form-select" aria-label="Default select example" name="plantarf" id="plan" value="Offre">
      <option selected disabled>Click on Load Offer</option>
        {nomDeLoffre.map(nomPlan => (
          <option key={nomPlan} value={nomPlan}>{nomPlan}</option>
        ))}
      </select>
  </div>
  <div className="col-xl-12 d-flex justify-content-center">
  <button className="p-3 border bg-light" onClick={handleClick}>Load Offer</button>
</div>


<div className="row">
<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>




</div>

</div>















</div>





















    )


}