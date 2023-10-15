import logo from './logo.svg';
import './App.css';
import Newfield from "./Components/News"


function App() {
  
  /**creation mta3 fils d'actualité**/

  const news=[ {content:"hello world",likes:12} ,
{content:"react js is easy to learn ",likes:8 }]

return (
  
  
<div className='App'>


<div className='container'>
<div className='row'>


{
news.map((n) => {
  return (
    <div className='col-md-12 mb-3'>
  <Newfield content={n.content} likes={n.likes} />


</div>

);
})




}


  </div>


  </div>



  </div>


);

  
}

export default App;
