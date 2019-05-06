import React, {useState, useEffect, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';

// const initialXY = {
//   x: null,
//   y:null
// };
//
const initialProfile = {
  url: null,
  followers: null,
  public_repos: null
};

function App() {

  // const initialState = {
  //   i:0
  // }
  //
  // function reducer(state = initialState, action){
  //   switch (action.type) {
  //     case "increment":
  //       return { i: state.i + 1}
  //      case "decrement":
  //      return { i: state.i - 1}
  //     default:
  //      return state
  //   }
  // }

  //const [state, dispatch] = useReducer(reducer, initialState);

  //states
  // const[balance, setBalance] = useState(1);
  // const[update, setUpdate]  = useState(false);
  // const[xy, setXY] = useState(initialXY);

  const[profile, setProfile] = useState(initialProfile);
  //
  const getProfile = async () => {
    const response = await fetch("https://api.github.com/users/archana5075");

    // const response = await fetch("https://api.github.com/users/archana5075",{
    //      method: "POST",
    //      mode: "cors",
    //      cache: "no-cache",
    //      credentials: "same-origin",
    //      headers:{
    //        "Content-Type": "application/json"
    //      }
    // })

    const json = await response.json();
    if(json && json.url){
      setProfile({
          url: json.url,
          followers: json.followers,
          public_repos: json.public_repos
      })
    }
  }

 //  const clickHandlePlus = () => setBalance(balance + 1);
 //  const updateClickHandle = () => setUpdate(!update);
 //
 //  const handleMouseMove = e => {
 //   setXY({
 //      x:e.pageX,
 //      y:e.pageY
 //    });
 //  }
 //   useEffect(()=>{
 //     document.title = balance;
 //  },[update]);
 //
   useEffect(()=>{
     getProfile();
   },[]);
 //
 //   useEffect(()=>{
 //    window.addEventListener('mousemove', handleMouseMove);
 //
 //    return () => {
 //      window.removeEventListener('mousemove', handleMouseMove);
 //    }
 //
 // },[]);

// Add to  return below
 // <span>{`x:${xy.x}$ y:${xy.y}$`}</span>
 // <span>{`update = ${update}$`}</span>
 //
 // <Button title="Add One Dollar" onClick={clickHandlePlus}> Add One Dollar</Button>
 // <Button title="Update" onClick={updateClickHandle}/>
 //
 // <div val={1} className="App">
 //   <header className="App-header">
 //     <span>{`i: ${state.i}$`}</span>
 //     <Button title="Increment" onClick  = {() => dispatch({type: 'increment'})} > </Button>
 //     <Button title="Decrement" onClick  = {() => dispatch({type: 'decrement'})} > </Button>
 //   </header>
 // </div>

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
