import { useState } from "react";
import Navbar1 from "./Navbar"
import ChartComponent from "../Components/ChartComponent";
import ChartComponentForOneBar from "../Components/ChartComponentForOneBar";
import ConfirmationModal from '../Components/confirmationComponent';
import PieComponent from '../Components/PieComponent';
import { Button } from 'react-bootstrap';
export default function UserviaAPI(){

    const [user,updateuser] = useState([]);
    const [clientPhoneNumber, setMessage] = useState('');
    const [forfait,updateForfait]= useState([]);
    const [pieM2,updatePieM2]= useState([]);
    const [pieM1,updatePieM1]= useState([]);
    const [pieM3,updatePieM3]= useState([]);
    const dateApi=[];
    const appelOnNet=[];
    const appelOffNet=[];
    const smsLocal=[];
    const smsIntern=[];
    const appelIntern=[];
    const dataConso=[];
    let offer="";
   
   

    const pieAppelOnNet=[];
    const pieAppelOffNet=[];
    const pieSmsLocal=[];
    const pieSmsIntern=[];
    const pieAppelIntern=[];
    const pieDataConso=[];

    const pieAppelOnNetM1=[];
    const pieAppelOffNetM1=[];
    const pieSmsLocalM1=[];
    const pieSmsInternM1=[];
    const pieAppelInternM1=[];
    const pieDataConsoM1=[];

    const pieAppelOnNetM3=[];
const pieAppelOffNetM3=[];
const pieSmsLocalM3=[];
const pieSmsInternM3=[];
const pieAppelInternM3=[];
const pieDataConsoM3=[];

    
const dataM2 = async () => {
  try {
    const response = await fetch(`http://java_app:9099/api/v1/consomationTotal?idclient=${clientPhoneNumber}&iddate=02`, { 
      method: 'GET',
      redirect: 'follow'
    });
    const jsonData = await response.json();
    updatePieM2(jsonData);
  } catch (error) {
    console.log(error);
    
  }
};

const dataM1 = async () => {
  try {
    const response = await fetch(`http://java_app:9099/api/v1/consomationTotal?idclient=${clientPhoneNumber}&iddate=01`, { 
      method: 'GET',
      redirect: 'follow'
    });
    const jsonData = await response.json();
    updatePieM1(jsonData);
  } catch (error) {
    console.log(error);
    
  }
};

const dataM3 = async () => {
  try {
    const response = await fetch(`http://java_app:9099/api/v1/consomationTotal?idclient=${clientPhoneNumber}&iddate=03`, { 
      method: 'GET',
      redirect: 'follow'
    });
    const jsonData = await response.json();
    updatePieM3(jsonData);
  } catch (error) {
    console.log(error);
    
  }
};





 

const fetchData = async () => {
  try {
    const response = await fetch(`http://java_app:9099/api/v1/predictedforfait/${clientPhoneNumber}`, {
      method: 'GET',
      redirect: 'follow'
    });
    const jsonData = await response.json();
    updateForfait(jsonData);
  } catch (error) {
    console.log(error);
    
  }
};
const deletehData = async () => {
  try {
    const response = await fetch(`http://java_app:9099/api/v1/predictedforfait/delete/${clientPhoneNumber}`, {
      method: 'DELETE',
      redirect: 'follow'
    });
  }
catch (error) {
  console.log(error);
};
};

const deleteclick=()=>{
  deletehData();
  window.location.reload();
}
const handleClick = () => {
  fetchData();
  dataM2();
  dataM1();
  dataM3();
};




const fetchData2 = async()=>{
try {

  const response= await fetch(`http://localhost:9099/api/v1/forfait/${clientPhoneNumber}`, {
    method:'GET',
    redirect:'follow'});
    const jsonData= await response.json()
    updateuser(jsonData)  

  
  
  
  
  
 } catch(error) {
console.log(error);
    }

  };
const handleClickForfait=()=>{
  fetchData2()
}
  



//input value 
const handleChange = event => {
  setMessage(event.target.value);

};

 
//const clientNumber = user.id_client ? user.id_client : "";
offer = forfait.forfait ? (forfait.forfait.split(":")[0] || "") : "";
if (offer===""){
  offer="forfait ok"
  console.log("offer is "+{offer})
}



console.log(offer)

const callAllApis=() =>{
  handleClickForfait();
  handleClick();
  console.log(dateApi)
  console.log(appelOnNet)
}
user.forEach(item => {
  dateApi.push(item.id_date);
  appelOnNet.push(item.total_appel_on_net);
  appelOffNet.push(item.total_appel_offnet);
  smsLocal.push(item.total_sms_local)
  smsIntern.push(item.total_sms_inter)
  appelIntern.push(item.total_appel_inter)
  dataConso.push(item.total_data)

})


pieM2.forEach(pieitem => {
  
  pieAppelOnNet.push(pieitem.total_appel_on_net);
  pieAppelOffNet.push(pieitem.total_appel_offnet);
  pieSmsLocal.push(pieitem.total_sms_local)
  pieSmsIntern.push(pieitem.total_sms_inter)
  pieAppelIntern.push(pieitem.total_appel_inter)
  pieDataConso.push(pieitem.total_data)
  console.log("heello"+pieAppelOnNet)
  console.log("heello"+pieAppelOffNet)
  console.log("heello SMS est"+pieSmsLocal)
  console.log("heello"+pieSmsIntern)
  console.log("heello"+pieAppelIntern)
  console.log("heello"+pieDataConso)

}) 




  pieM1.forEach(pieitem => {
  
    pieAppelOnNetM1.push(pieitem.total_appel_on_net);
    pieAppelOffNetM1.push(pieitem.total_appel_offnet);
    pieSmsLocalM1.push(pieitem.total_sms_local)
    pieSmsInternM1.push(pieitem.total_sms_inter)
    pieAppelInternM1.push(pieitem.total_appel_inter)
    pieDataConsoM1.push(pieitem.total_data)
    console.log("heello"+pieAppelOnNet)
    console.log("heello"+pieAppelOffNet)
    console.log("heello SMS est"+pieSmsLocal)
    console.log("heello"+pieSmsIntern)
    console.log("heello"+pieAppelIntern)
    console.log("heello"+pieDataConso)

}) 

pieM3.forEach(pieitem => {
 
  pieAppelOnNetM3.push(pieitem.total_appel_on_net);
  pieAppelOffNetM3.push(pieitem.total_appel_offnet);
  pieSmsLocalM3.push(pieitem.total_sms_local)
  pieSmsInternM3.push(pieitem.total_sms_inter)
  pieAppelInternM3.push(pieitem.total_appel_inter)
  pieDataConsoM3.push(pieitem.total_data)
  console.log("heello"+pieAppelOnNet)
  console.log("heello"+pieAppelOffNet)
  console.log("heello SMS est"+pieSmsLocal)
  console.log("heello"+pieSmsIntern)
  console.log("heello"+pieAppelIntern)
  console.log("heello"+pieDataConso)
}) 
    return(

        
        <div>
      
        <Navbar1/>
        
        <div className="container px-4">
  <div className="row gx-5">
    <div className="col">
    <div className="col-md-12 mx-auto text-center">
     <input className="p-3 border bg-light" onChange={handleChange}  value={clientPhoneNumber} placeholder="Input client number"/>
     </div>
     <div className="col-md-6  mx-auto text-center">
     <Button variant="info" onClick={callAllApis} >Verify offer</Button>
     </div>
    </div>
    <div className="col">
      <div className="col-md-12">
      <div className="p-3 border bg-light">{offer}</div> 
      </div>
      <div className="col-md-6  mx-auto text-center">
      <ConfirmationModal onDelete={deleteclick}  />
      <Button variant="info"> Launch script </Button>
      </div>
    </div>
  </div>
</div>

<div className="col container">

<div className="row">
  <div className="col-md-6">
<ChartComponent labels={dateApi} data={appelOnNet} data2={appelOffNet} data3={smsLocal} data4={smsIntern} data5={appelIntern} name="appelOnNet" name2="appelOffNet"  name3="smsLocal"  name4="smsIntern"  name5="appelIntern"/>

</div>

<div className="col-md-6">
<ChartComponentForOneBar labels={dateApi} data={dataConso} name="Consomation Data"/>
</div>
</div>
</div>
<div className="col container">
<div className="row">

<div className="col-md-4">
  <h1 className=" mx-auto text-center">M-3</h1>
  
  {pieAppelOnNet.length > 0 && (
  <PieComponent
    data={[
      { data: pieAppelOnNetM3, labels: "appelOnNet" },
      { data: pieAppelOffNetM3, labels: "appelOffNet" },
      { data: pieSmsLocalM3, labels: "smsLocal" },
      { data: pieSmsInternM3, labels: "smsIntern" },
      { data: pieAppelInternM3, labels: "appelIntern" },
      { data: pieDataConsoM3, labels: "data" },
    ]}
  />
)}











</div>

<div className="col-md-4">
<h1 className=" mx-auto text-center" >M-2</h1>

{pieAppelOnNet.length > 0 && (
  <PieComponent
    data={[
      { data: pieAppelOnNet, labels: "appelOnNet" },
      { data: pieAppelOffNet, labels: "appelOffNet" },
      { data: pieSmsLocal, labels: "smsLocal" },
      { data: pieSmsIntern, labels: "smsIntern" },
      { data: pieAppelIntern, labels: "appelIntern" },
      { data: pieDataConso, labels: "data" },
    ]}
  />
)}


</div>


<div className="col-md-4">
<h1 className=" mx-auto text-center">M-1</h1>
{pieAppelOnNet.length > 0 && (
  <PieComponent
    data={[
      { data: pieAppelOnNetM1, labels: "appelOnNet" },
      { data: pieAppelOffNetM1, labels: "appelOffNet" },
      { data: pieSmsLocalM1, labels: "smsLocal" },
      { data: pieSmsInternM1, labels: "smsIntern" },
      { data: pieAppelInternM1, labels: "appelIntern" },
      { data: pieDataConsoM1, labels: "data" },
    ]}
  />
)}

</div>



</div>









</div>


    </div>

    );


  
}

