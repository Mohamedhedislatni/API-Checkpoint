import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios'
import UserList from './UserList';



function App() {

  const [listOfUSer, setlistOfUSer] = useState([])
  const [error, seterror] = useState()


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {

      setlistOfUSer(response.data);
    })

    .catch( function (error){
      seterror (error)
    })
  

  },
  [])
  return (
    <div className="App">
<img src="https://store-images.s-microsoft.com/image/apps.25871.53baf1fd-a88b-421e-96ea-18e584d3df32.2263e8ca-1f9f-4991-8937-d1c42f79ccc3.2fed0e10-4552-446e-b131-5cabd645b924.png"/>
<UserList listOfUSer={listOfUSer} /> 
    </div>
  );
}

export default App;
