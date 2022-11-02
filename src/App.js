import './App.css';
import axios from "axios"
import React, { useState, useEffect } from "react"
import LabApi from './componant/LabApi';
import Create from './componant/Create';

function App() {
  const [state, setState] = useState([])

  useEffect(() => {
    axios.get("https://6362424b7521369cd068e001.mockapi.io/store").then((res) => {
      setState(res.data)
    })
  }, [])


  return (
    <div className="App">
      {/* {state.map((e) =>(
        <LabApi img={e.image} title={e.name}/>
      ))} */}

      <Create />

      {state.map((e) => (
        <>
          <h4>{e.user.firstName}</h4>
          <h4>{e.user.lastName}</h4>
          <h4>{e.user.email}</h4>
          <h4>{e.user.password}</h4>
        </>
      ))}
    </div>
  );
}

export default App;

