import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    async function getUsers(){
      try {
        const users = await axios.get("http://127.0.0.1:8000/api/users/");
        setUsers(users.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  },[])
  return (
    <>
      <h1>helo bhai</h1>
      {
        users.map((user:any)=>{
          return <h1 key={user.id}>{user.name}</h1>
        })
      }
    </>
  )
}

export default App;
