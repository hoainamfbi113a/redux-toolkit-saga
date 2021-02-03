import './App.css';
import Counter from "./redux/Counter"
import {useDispatch, useSelector } from "react-redux"
import React,{ useEffect } from "react";
import { getUser } from "./redux/ducks/userSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser())
    console.log("123")
  },[dispatch])
  const user = useSelector((state) => state.user);
  const count = useSelector((state)=>
    state.counter
  )
  const voters = [
    "Anthony Sistilli ",
    "Bob Smith",
    "Stephanie Foo",
    "Kevin Ma"
  ]
  console.log(count)
  return (
    <div className="App">
      {console.log("1234")}
      {user && <h1>Hello, {user.firstName}</h1>}
      {/* <h1>Total Votes: {count}</h1> */}
      {voters.map((voter)=>{
       return <Counter name ={voter}/>
      })}
    </div>
  );
}

export default App;
