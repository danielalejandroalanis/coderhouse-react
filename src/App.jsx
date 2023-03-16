import React, {useEffect, useState} from "react";
import axios from "axios";
//Componentes
import { MainLayout } from "./layouts";
//Estilos
import "bootstrap/dist/css/bootstrap.min.css";

const url = "https://reqres.in/"

async function getUsers() {
  return await axios(`https://reqres.in/api/users?page=2`);
}

async function postUser(data) {
  await axios.post(`https://reqres.in/api/users`, data, {
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => console.log(res))
}


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUsers().then(res => {setData(res)})
    postUser({
        "name": "morpheus",
        "job": "leader"
    })
  }, [])
 
  return (
    <MainLayout>
       <div style={{height: "100vh", width: "100"}}>
        
       </div>
    </MainLayout>
  );
}

export default App;
