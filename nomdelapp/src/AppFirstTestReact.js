import logo from './logo.svg';
import './App.css';
import Contact from './Components/contact';
import Contact2 from './Components/contact2';


function App() {
  const contacts= [
    {fulname:"ous", email:"1@1"},
    {fulname:"ous1", email:"2@2"},
    {fulname:"ous2", email:"3@3"},
    {fulname:"ous3", email:"4@4"}
  ];
  return (
    <div className="App">
      
      <Contact  fullname="oussama lakhdar" email="devilgrun@gmail.com"/>
      <Contact  fullname="Emna kalai lakhdar" email="EmnaK@gmail.com"/>
      
      
       {/* parcouri tableau w ta3mel affichage mta3o  */}
{/* {
      contacts.map((c)=> {
  return (<Contact fullname={c.fulname} email={c.email} />)
})
} */}



<div className='row'>
{
contacts.map((c)=> {

  return (
    <div className="col-sm-3 mb-3">
  <Contact2 fullname={c.fulname} email={c.email}/>
  </div>
  );
})

}

</div>





  </div>




  );
}

export default App;
