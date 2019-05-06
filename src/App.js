import React, {useState, useEffect, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
const initialProfile = {
  url: null,
  followers: null,
  public_repos: null
};

function App() {

  const[profile, setProfile] = useState(initialProfile);
  //
  const getProfile = async () => {
    const response = await fetch("https://api.github.com/users/archana5075");
    const json = await response.json();
    if(json && json.url){
      setProfile({
          url: json.url,
          followers: json.followers,
          public_repos: json.public_repos
      })
    }
  }

   useEffect(()=>{
     getProfile();
   },[]);

   return (
    <div>
         <ul>
           <li> url : {profile.url} </li>
           <li> followers : {profile.followers} </li>
           <li> public_repos : {profile.public_repos} </li>
        </ul>
    </div>

  );
}

export default App;
