import { useState } from 'react';
import './App.css';

function App() {
  const [typingvalue, setTypingvalue] = useState("");
  const [data, setData] = useState([])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typingvalue)
   const newdata=[...data,typingvalue];
   console.log(newdata)
   setData(newdata)
  setTypingvalue("")
  }
  const deleteTodo=(indexvalue)=>{
  const newdata= data.filter((data,index)=>index!==indexvalue);
  console.log(newdata,12)
  setData(newdata)
  }


return (
  <>
    <div className="main">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setTypingvalue(e.target.value)} value={typingvalue} />
        <button type='submit'>ADD</button>
      </form>
      {
        data.map((data,index)=>{
          return(
            <>
         { (index%2===0) ?( <div key={index}>
            <h1>{data}</h1><button onClick={()=>deleteTodo(index)}>Delete</button>
            </div>):(<>{data}</>)
        }
            </>
          )
        })
      }
    </div>
  </>
)
}

export default App;
